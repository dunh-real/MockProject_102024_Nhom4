import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { setBreadCrumb } from "../../store/slice/app";
import { useDispatch } from "react-redux";
import TaskCalendar from "./components/tabs/task-calendar";
import Dayoff from "./components/tabs/dayoff";
import Feedback from "./components/tabs/feedback";
import WorkReport from "./components/tabs/work-report";

const WorkSchedule: React.FC = () => {
    const dispatch = useDispatch();

    dispatch(
        setBreadCrumb([
            { title: "Dashboard", link: "/" },
            { title: "Work Schedule", link: "work-schedule" }
        ])
    );

    return (
        <div>
            <Tabs defaultValue="calendar">
                <TabsList className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <TabsTrigger value="calendar" className="w-full">
                        Task calendar
                    </TabsTrigger>
                    <TabsTrigger value="work-report" className="w-full">
                        Work report
                    </TabsTrigger>
                    <TabsTrigger value="dayoff" className="w-full">
                        Dayoff request
                    </TabsTrigger>
                    <TabsTrigger value="feedback" className="w-full">
                        Feedback submission
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="calendar" className="mt-14 sm:mt-4">
                    <TaskCalendar />
                </TabsContent>
                <TabsContent value="work-report" className="mt-14 sm:mt-4">
                    <WorkReport />
                </TabsContent>
                <TabsContent value="dayoff" className="mt-14 sm:mt-4">
                    <Dayoff />
                </TabsContent>
                <TabsContent value="feedback" className="mt-14 sm:mt-4">
                    <Feedback />
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default WorkSchedule;
