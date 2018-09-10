export class AnswerPayment {
    answerId: number | undefined;
    paymentTypeId: number | undefined;
    amount: number | undefined;
    token: string | undefined
}

export interface AnswerPaymentResult {
    isSuccessful: boolean;
    errorMessage: string;
}