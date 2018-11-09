export interface FormModel {
  postName: string;
  postDate: any;
  postUpdate: any;
  description: string;
  qualification?: string;
  impDates: ImpDates;
  fees: Fees;
  vacancyDetails?: string;
  link?: string;

}
interface ImpDates {
  applicationBegin: any;
  lastDate: any;
  lastDateExamFees?: any;
  answerKeyDate?: any;
  resultDeclareDate?: any;
}
interface Fees {
  general: any;
  obc?: any;
  sc?: any;
  description?: string;
}
interface Link {
  linkTitle: string;
  linkRef: string;
}
