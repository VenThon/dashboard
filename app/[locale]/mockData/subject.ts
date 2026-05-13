export type SubjectItem = {
  id: string;
  subject_name: string;
  grade_level: string;
  ctc_center: string;
  total_chapters: number;
  total_hours: number;
  update_at: number;
};

export const subjectDataList: SubjectItem[] = [
  {
    id: "1",
    subject_name: "ICT",
    grade_level: "10",
    ctc_center: "CTC 1",
    total_chapters: 10,
    total_hours: 100,
    update_at: Date.now(),
  },
  {
    id: "2",
    subject_name: "English",
    grade_level: "11",
    ctc_center: "CTC 2",
    total_chapters: 20,
    total_hours: 200,
    update_at: Date.now(),
  },
  {
    id: "3",
    subject_name: "English",
    grade_level: "12",
    ctc_center: "CTC 3",
    total_chapters: 40,
    total_hours: 200,
    update_at: Date.now(),
  },
  {
    id: "4",
    subject_name: "Khmer",
    grade_level: "7",
    ctc_center: "CTC 2",
    total_chapters: 20,
    total_hours: 200,
    update_at: Date.now(),
  },
  {
    id: "5",
    subject_name: "IT",
    grade_level: "8",
    ctc_center: "CTC 1",
    total_chapters: 20,
    total_hours: 200,
    update_at: Date.now(),
  },
  {
    id: "6",
    subject_name: "Khmer",
    grade_level: "9",
    ctc_center: "CTC 1",
    total_chapters: 20,
    total_hours: 200,
    update_at: Date.now(),
  },
  {
    id: "7",
    subject_name: "Maths",
    grade_level: "9",
    ctc_center: "CTC 1",
    total_chapters: 20,
    total_hours: 200,
    update_at: Date.now(),
  },
  {
    id: "8",
    subject_name: "Biology",
    grade_level: "9",
    ctc_center: "CTC 1",
    total_chapters: 20,
    total_hours: 200,
    update_at: Date.now(),
  },
  {
    id: "9",
    subject_name: "Physis",
    grade_level: "9",
    ctc_center: "CTC 1",
    total_chapters: 20,
    total_hours: 200,
    update_at: Date.now(),
  },
  {
    id: "10",
    subject_name: "English",
    grade_level: "9",
    ctc_center: "CTC 1",
    total_chapters: 20,
    total_hours: 200,
    update_at: Date.now(),
  },
];
