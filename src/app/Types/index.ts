export interface IPollerResponse {
  questions: IItem[];
}
export interface IItem {
  id: number;
  position: number;
  text: string;
  type: string;
  options: IOptions[];
  url?: string;
}
export interface IOptions {
  id: number;
  text: string;
}
 export interface IAnswer {
  questionId: number;
  options?: number[];
  text?: string;
 }

 