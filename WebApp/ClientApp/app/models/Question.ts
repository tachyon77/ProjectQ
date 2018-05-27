import { User } from './User';

export interface Question {
    title: string;
    description: string;
    id: number;
    isDeleted: boolean;
    offeredPrice: number;
    originDate: Date;
    user: User;
}