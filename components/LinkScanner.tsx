"use client";

import { useState, type FormEvent } from "react";
import { T } from "@/components/T";
import { useLocale } from "@/components/LocaleProvider";

type Result = {
  kind: "danger" | "safe" | "error";
  message: "scan.danger" | "scan.safe" | "scan.invalidUrl" | "scan.noKey" | "scan.rateLimited" | "scan.apiError" | "scan.networkError" | "scan.responseError";
};

const GOOGLE_SAFE_BROWSING_KEY = process.env.NEXT_PUBLIC_GOOGLE_SAFE_BROWSING_KEY;

async function responseIsRateLimited(response: Response): Promise<boolean> {
  if (response.status === 429) return true;
  if (response.status !== 403) return false;

  try {
    const payload: unknown = await response.json();
    if (typeof payload !== "object" || payload === null || !("error" in payload)) return false;
    const error = payload.error;
    if (typeof error !== "object" || error === null) return false;
    if ("status" in error && error.status === "RESOURCE_EXHAUSTED") return true;
    if (!("errors" in error) || !Array.isArray(error.errors)) return false;

    return error.errors.some(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        "reason" in item &&
        typeof item.reason === "string" &&
        /rate|quota|limit/i.test(item.reason)
    );
  } catch {
    return false;
  }
}

export function LinkScanner() {
  const { t } = useLocale();
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  async function scanLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(null);

    const submittedUrl = url.trim();
    let parsedUrl: URL;
    try {
      parsedUrl = new URL(submittedUrl);
    } catch {
      setResult({ kind: "error", message: "scan.invalidUrl" });
      return;
    }

    if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
      setResult({ kind: "error", message: "scan.invalidUrl" });
      return;
    }

    const apiKey = GOOGLE_SAFE_BROWSING_KEY?.trim();
    if (!apiKey) {
      setResult({ kind: "error", message: "scan.noKey" });
      return;
    }

    setLoading(true);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch(
        `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${encodeURIComponent(apiKey)}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            client: {
              clientId: "cybersmart-butambala",
              clientVersion: "1.0.0"
            },
            threatInfo: {
              threatTypes: [
                "MALWARE",
                "SOCIAL_ENGINEERING",
                "UNWANTED_SOFTWARE",
                "POTENTIALLY_HARMFUL_APPLICATION"
              ],
              platformTypes: ["ANY_PLATFORM"],
              threatEntryTypes: ["URL"],
              threatEntries: [{ url: submittedUrl }]
            }
          }),
          signal: controller.signal
        }
      );

      if (!response.ok) {
        setResult({
          kind: "error",
          message: (await responseIsRateLimited(response)) ? "scan.rateLimited" : "scan.apiError"
        });
        return;
      }

      let payload: unknown;
      try {
        payload = await response.json();
      } catch {
        setResult({ kind: "error", message: "scan.responseError" });
        return;
      }

      if (typeof payload !== "object" || payload === null || Array.isArray(payload)) {
        setResult({ kind: "error", message: "scan.responseError" });
        return;
      }

      if (!("matches" in payload)) {
        setResult({ kind: "safe", message: "scan.safe" });
        return;
      }

      if (!Array.isArray(payload.matches)) {
        setResult({ kind: "error", message: "scan.responseError" });
        return;
      }

      setResult(
        payload.matches.length > 0
          ? { kind: "danger", message: "scan.danger" }
          : { kind: "safe", message: "scan.safe" }
      );
    } catch {
      setResult({ kind: "error", message: "scan.networkError" });
    } finally {
      window.clearTimeout(timeout);
      setLoading(false);
    }
  }

  return (
    <section className="scan-tool" aria-labelledby="scan-tool-heading">
      <form className="scan-form" onSubmit={scanLink} noValidate>
        <p id="scan-instructions" className="scan-instructions"><T k="scan.instructions" /></p>
        <div className="scan-field">
          <label htmlFor="scan-url"><T k="scan.urlLabel" /></label>
          <input
            id="scan-url"
            name="scan-target"
            type="url"
            inputMode="url"
            autoComplete="off"
            placeholder={t("scan.urlPlaceholder")}
            value={url}
            onChange={(event) => {
              setUrl(event.target.value);
              setResult(null);
            }}
            aria-describedby="scan-instructions scan-privacy"
            disabled={loading}
          />
        </div>
        <button className="button button-primary" type="submit" disabled={loading}>
          <T k={loading ? "scan.loading" : "scan.submit"} />
        </button>
      </form>

      <div className="scan-result-region" aria-live="polite" aria-atomic="true">
        {loading && <p className="scan-loading" role="status"><T k="scan.loading" /></p>}
        {result && (
          <div className={`scan-result scan-result--${result.kind}`} role="status">
            <p><T k={result.message} /></p>
          </div>
        )}
      </div>

      <p className="scan-reminder"><T k="scan.reminder" /></p>
      <p id="scan-privacy" className="scan-privacy"><T k="scan.privacy" /></p>
    </section>
  );
}
