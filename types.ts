
export interface GameTile {
  icon: string; // Identifier for the icon component
  fact: string;
  isSpecial?: boolean;
}

export interface Story {
  subheading: string;
  title: string;
  content: string;
}

export enum Page {
  MODULE1,
  MODULE2,
  MODULE3,
}

export type RiskCategory = 'low' | 'moderate' | 'high';

export interface StoriesData {
  low: Story[];
  moderate: Story[];
  high: Story[];
}

// Module 2 Types
export type LanguageCode = 'en' | 'hi' | 'kn' | 'ta' | 'te' | 'ml';

export interface QuestionnaireSection {
  section: string;
  sectionName: string;
  intro: string;
  questions: string[];
}

export interface QuestionOption {
  value: number;
  label: string;
}

export interface TranslationContent {
  ui: {
    title: string;
    subtitle: string;
    getStarted: string;
    welcome: string;
    description: string;
    whatYouGet: string;
    whatYouGetList: string[];
    scoring: string;
    disclaimer: string;
    agreeLabel: string;
    back: string;
    next: string;
    nextSection: string;
    prev: string;
    calculate: string;
    aboutYou: string;
    age: string;
    gender: string;
    fillingFor: string;
    select: string;
    startQuiz: string;
    note: string;
    resultsTitle: string;
    coreRisk: string;
    readiness: string;
    breakdown: string;
    saveReport: string;
    continue: string;
    alertInstruction: string;
    alertFields: string;
    alertAnswers: string;
    saving: string;
    savedSuccess: string;
    savedError: string;
  };
  options: QuestionOption[];
  sections: QuestionnaireSection[];
}

export interface Demographics {
  age: string;
  gender: string;
  fillingFor: string;
}

export interface AssessmentResult {
  totalScore: number;
  readinessScore: number;
  sectionScores: { name: string; score: number; maxScore: number }[];
  riskLevel: RiskCategory;
  readinessLevel: RiskCategory;
}

// Google Apps Script Global Interface
declare global {
  interface Window {
    google?: {
      script: {
        run: {
          withSuccessHandler: (callback: (response: any) => void) => {
            withFailureHandler: (callback: (error: any) => void) => {
              saveToGoogleSheet: (data: any) => void;
            };
          };
        };
      };
    };
  }
}
