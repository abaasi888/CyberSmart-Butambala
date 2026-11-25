export interface Lesson {
  slug: string;
  title: string;
  summary: string;
  systemsSecurityCore: string;
  studentSection: {
    bigIdea: string;
    howItWorks: string;
    whereSystemsFail: string;
    howToDefend: string[];
    selfCheck: string[];
  };
  teacherSection: {
    technicalFraming: string[];
    teachingTip: string;
    discussionPrompt: string;
    extension: string;
  };
}
