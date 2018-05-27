import { User } from './User';

// ProtectedAnswerContent is defined in this file because
// all access to this class is through Answer class

export class ProtectedAnswerContent {
    id: number | undefined;
    htmlContent: string = "";
}

export class Answer {
    id: number | undefined;
    questionId: number | undefined;
    originDate: Date | undefined;
    redactedHtmlContent: string = "";// To be used in general
    protectedAnswerContent: ProtectedAnswerContent | undefined;
    user: User | undefined;
    price: number = 0;
}