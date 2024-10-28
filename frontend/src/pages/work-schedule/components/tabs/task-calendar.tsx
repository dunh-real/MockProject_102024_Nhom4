import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, theme } from 'antd';
import type { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import TaskList from "../task-list";
import sampleData from "../sample/sampledata.json";

import { RootState } from "../../../../store";
import {
    setEvents,
    setSelectedDate,
    toggleForm,
    resetForm,
    isCalendarVisible,
    setSolution,
    setResult
} from "../../../../store/slice/app/calendarSlice";

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
};

const TaskCalendar: React.FC = () => {
    const { token } = theme.useToken();
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.calendar);

    const wrapperStyle: React.CSSProperties = {
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };

    useEffect(() => {
        const mappedEvents: { [key: string]: any[] } = {};
        sampleData.forEach(event => {
            const date = event.startDate.split('T')[0];
            if (!mappedEvents[date]) {
                mappedEvents[date] = [];
            }
            mappedEvents[date].push(event);
        });
        dispatch(setEvents(mappedEvents));
    }, [dispatch]);

    const dateCellRender = (value: Dayjs) => {
        const dateString = value.format('YYYY-MM-DD');
        const dayEvents = state.events[dateString];
        return (
            <div className="flex justify-center">
                {dayEvents && dayEvents.length > 0 && (
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                )}
            </div>
        );
    };

    const handleDateSelect = (date: Dayjs) => {
        dispatch(setSelectedDate(date));
    };

    const handleTaskCompletedClick = () => {
        dispatch(toggleForm());
    };

    const handleCommitClose = () => {
        dispatch(resetForm());
    };

    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 p-4">
                {/* This calendar is for smaller screen - Lịch hiển thị cho màn hình nhỏ (Responsive) */}
                <div className="md:hidden mb-4">
                    <Button onClick={() => dispatch(isCalendarVisible(!state.isCalendarVisible))}>
                        {state.isCalendarVisible ? 'Hide Calendar' : 'Show Calendar'}
                    </Button>
                    {state.isCalendarVisible && (
                        <div className="md:hidden" style={wrapperStyle}>
                            <Calendar
                                fullscreen={false}
                                onPanelChange={onPanelChange}
                                dateCellRender={dateCellRender}
                                value={state.selectedDate}
                                onSelect={handleDateSelect}
                            />
                        </div>
                    )}
                </div>
                <Card className="h-[600px] flex flex-col p-4">
                    <h3 className="font-semibold">Tasks for {state.selectedDate.format('YYYY-MM-DD')}:</h3>
                    <div className="overflow-y-auto h-48 mt-2 flex-grow">
                        <TaskList
                            events={state.events[state.selectedDate.format('YYYY-MM-DD')] || []}
                            selectedDate={state.selectedDate.format('YYYY-MM-DD')}
                            form={state.form}
                            onToggleForm={handleTaskCompletedClick}
                            onSetSolution={(solution) => dispatch(setSolution(solution))}
                            onSetResult={(result) => dispatch(setResult(result))}
                            onCommitClose={handleCommitClose}
                        />
                    </div>
                </Card>
            </div>
            {/* Calendar for big screen - Lịch hiển thị cho màn hình lớn */}
            <div className="w-full md:w-1/3 p-4">
                <div className="hidden md:block" style={wrapperStyle}>
                    <Calendar
                        fullscreen={false}
                        onPanelChange={onPanelChange}
                        dateCellRender={dateCellRender}
                        value={state.selectedDate}
                        onSelect={handleDateSelect}
                    />
                </div>
            </div>
        </div>
    );
}

export default TaskCalendar;
