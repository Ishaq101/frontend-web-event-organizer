import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { useRouter } from "next/router";

interface PropsTypes {
    status: "success" | "failed";
};

const Activation = (props: PropsTypes) => {
    const router = useRouter();
    const { status } = props;
  return (
    <div className="flex flex-col items-center justify-center h-5/6 w-screen gap-4 p-10">
        <Image
          className="size-fit max-w-[130px]"
          src={`/images/general/logo.svg`}
        ></Image>
        <Image
            className="size-fit max-h-[350px]"
            src={`/images/illustration/${status === 'success' ? 'success' : 'pending'}.svg`}
            alt={status}
        >
        </Image>
        <div className="flex flex-col items-center justify-center gap-0.5">
            <h1 className="text-2xl font-bold text-[#F31260] mt-4 text-danger-500">
              {status === 'success' ? 'Activation Success' : 'Activation Failed'}
            </h1>
            <p className="font-[#71717A]">
              {status === 'success' ? 'Thank you for register account in Accara' : 'Confirmation code is invalid'}
            </p>
        </div>
        <Button color="danger" variant="bordered" onClick={() => router.push('/')}>Back To Home</Button>
    </div>
  );
}

export default Activation;