export interface FormModel {
  postName: string;
  postDate: any;
  postUpdate: any;
  description: string;
  impDates: ImpDates;
  fees: Fees;
  vacancyDetails?: string;

}
interface ImpDates {
  applicationBegin: any;
  lastDate: any;
  lastDateExamFees?: any;
  answerKey?: any;
  resultDeclare?: any;
}
interface Fees {
  general: any;
  obc?: any;
  sc?: any;
  description?: string;
}
