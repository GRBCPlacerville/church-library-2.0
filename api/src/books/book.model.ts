export interface Book {
    id: number;
    title: string;
    description: string;
    status: BookStatus;
}

export enum BookStatus {
    CHECKED_IN = 'CHECKED_IN',
    CHECKED_OUT = 'CHECKED_OUT',
    OVERDUE = 'OVERDUE',
    MISSING = 'MISSING',
}
