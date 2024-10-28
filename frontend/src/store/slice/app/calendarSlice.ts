import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

interface CalendarState {
    events: { [key: string]: any[] };
    selectedDate: dayjs.Dayjs;
    form: {
        show: boolean;
        solution: string;
        result: string;
    };
    isCalendarVisible: boolean,
}

const initialState: CalendarState = {
    events: {},
    selectedDate: dayjs(),
    form: {
        show: false,
        solution: '',
        result: '',
    },
    isCalendarVisible: false,
};

const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        setEvents(state, action: PayloadAction<{ [key: string]: any[] }>) {
            state.events = action.payload;
        },
        setSelectedDate(state, action: PayloadAction<dayjs.Dayjs>) {
            state.selectedDate = action.payload;
        },
        toggleForm(state) {
            state.form.show = !state.form.show;
        },
        setSolution(state, action: PayloadAction<string>) {
            state.form.solution = action.payload;
        },
        setResult(state, action: PayloadAction<string>) {
            state.form.result = action.payload;
        },
        resetForm(state) {
            state.form = initialState.form;
        },
        isCalendarVisible(state, action:PayloadAction<boolean>) {
            state.isCalendarVisible = action.payload;
        }
    },
});

export const {
    setEvents,
    setSelectedDate,
    toggleForm,
    setSolution,
    setResult,
    resetForm,
    isCalendarVisible,
} = calendarSlice.actions;

export default calendarSlice.reducer;
