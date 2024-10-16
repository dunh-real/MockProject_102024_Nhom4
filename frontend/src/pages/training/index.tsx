import { LoadingLottie } from "../../components";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { useGetUsersQuery } from "../../store/api/endpoints/user";
import { useDispatch } from "react-redux";
import { setBreadCrumb } from "../../store/slice/app";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";

const Training = () => {
  const programs = [
    {
      id: 1,
      title: "Fire fighting and Prevention Program #1",
      participants: "23/35",
      duration: "2 months",
      requirements: "None",
    },
    {
      id: 2,
      title: "Fire fighting and Prevention Program #2",
      participants: "23/35",
      duration: "2 months",
      requirements: "None",
    },
    {
      id: 3,
      title: "Fire fighting and Prevention Program #3",
      participants: "23/35",
      duration: "2 months",
      requirements: "None",
    },
    {
      id: 4,
      title: "Fire fighting and Prevention Program #4",
      participants: "23/35",
      duration: "2 months",
      requirements: "None",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Training</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            Training programs in this month:
          </h2>
          {programs.map((program) => (
            <Card key={program.id}>
              <CardHeader>
                <CardTitle>{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Participants: {program.participants}</p>
                <p>Duration: {program.duration}</p>
                <p>Requirements: {program.requirements}</p>
              </CardContent>
              <CardFooter>
                <Button variant="secondary">Sign up</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Fire fighting and Prevention Program #1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Created by: Admin</p>
            <p>Start day: xx/xx/xxxx</p>
            <p>End day: xx/xx/xxxx</p>
            <p>Duration: 2 months</p>
            <p>Participants: 23/35</p>
            <p className="mt-4">
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
              pretium quis, sem. Nulla consequat massa quis enim. Donec pede
              justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
              justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            </p>
            <p className="mt-4">Requirement: None</p>
          </CardContent>
          <CardFooter className="space-x-2">
            <Button variant="secondary">Sign up</Button>
            <Button variant="destructive">Cancel</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Training;
