export const GRADE_LEVEL = {
  GRADE_7: 7,
  GRADE_8: 8,
  GRADE_9: 9,
  GRADE_10: 10,
  GRADE_11: 11,
  GRADE_12: 12,
} as const;

export type GradeLevel = (typeof GRADE_LEVEL)[keyof typeof GRADE_LEVEL];

export interface Lesson {
  title: string;
  durationHours: number;
  order: number;
  description: string;
  objectives: string;
}

export interface Chapter {
  title: string;
  order: number;
  lessons: Lesson[];
}

export interface SubjectForm {
  name: string;
  gradeLevel: string | undefined;
  durationMs: number;
  chapters: Chapter[];
}
