import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
import PageHead from "@/components/commons/PageHead";

export default function IndexPage() {
  return (
    <>
    <PageHead title="Accara | Home"></PageHead>
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader className="text-lg">Welcome to&nbsp;
        <span className="font-bold">Accara</span>
      </CardHeader>
      <CardBody className="text-sm">your Friendly Event Organizer</CardBody>
    </Card>
    </>
  );
}
