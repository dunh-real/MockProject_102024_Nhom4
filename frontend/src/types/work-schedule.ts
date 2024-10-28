import dayjs, { Dayjs } from "dayjs";

// Define the types for the state and actions
export interface FormState {
    show: boolean;
    solution: string;
    result: string;
}

export interface CalendarState {
    events: { [key: string]: any[] };
    selectedDate: Dayjs;
    form: FormState;
}

export interface Action {
    type: string;
    payload?: any;
}