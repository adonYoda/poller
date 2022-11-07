export interface IPollerResponse {
  questions: IItem[];
}
export interface IItem {
  id: number;
  position: number;
  text_ru: string;
  question_type: string;
  options: IOptions[];
  url?: string;
}
export interface IOptions {
  id: number;
  text_ru: string;
}
 export interface IAnswer {
  questionId: number;
  optionsId?: number[];
  text?: string;
 }

// export interface IAnswer{
//   answers: []
// }
 