import React from 'react';
import { Dialog, DialogTrigger, DialogContent } from '../../../components/ui/dialog';
import { Button } from '../../../components/ui/button';
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { FormState } from "../../../types/work-schedule";

interface TaskListProps {
    events: any[];
    selectedDate: string;
    form: FormState;
    onToggleForm: () => void;
    onSetSolution: (solution: string) => void;
    onSetResult: (result: string) => void;
    onCommitClose: () => void;
}

const TaskList: React.FC<TaskListProps> = ({
    events,
    selectedDate,
    form,
    onToggleForm,
    onSetSolution,
    onSetResult,
    onCommitClose,
}) => {
    return (
        <ul>
            {events.length > 0 ? (
                events.map((event: any, index: number) => (
                    <li key={index} className="flex justify-between items-center mb-2">
                        <div className="flex flex-col">
                            <span>Apartment: {event.apartmentName}</span>
                            <span>Address: {event.apartmentAddress}</span>
                        </div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button>View task detail</Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                                <div>
                                    <h4>Assigned To: {event.assignedTo}</h4>
                                    <p>Status: {event.status}</p>
                                    <p>Description: {event.description}</p>
                                    <p>Room No: {event.roomNo}</p>
                                    <p>Start Date: {new Date(event.startDate).toLocaleString()}</p>
                                    <p>Due Date: {new Date(event.dueDate).toLocaleString()}</p>
                                </div>
                                <Button onClick={onToggleForm}>Task completed</Button>
                                {form.show && (
                                    <form className="mt-4">
                                        <Textarea
                                            placeholder="Please input your solution here"
                                            value={form.solution}
                                            onChange={(e) => onSetSolution(e.target.value)}
                                            className="mb-2"
                                        />
                                        <Input
                                            placeholder="Please input your result"
                                            value={form.result}
                                            onChange={(e) => onSetResult(e.target.value)}
                                            className="mb-4"
                                        />
                                        <div className="flex justify-end mt-2">
                                            <Button onClick={onCommitClose} className="mr-2">Commit & close</Button>
                                            <Button variant="outline" onClick={onToggleForm}>Cancel</Button>
                                        </div>
                                    </form>
                                )}
                            </DialogContent>
                        </Dialog>
                    </li>
                ))
            ) : (
                <li>No tasks for today.</li>
            )}
        </ul>
    );
};

export default TaskList;