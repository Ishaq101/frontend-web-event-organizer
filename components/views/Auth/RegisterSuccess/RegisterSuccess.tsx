import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { useRouter } from "next/router";

const RegisterSuccess = () => {
    const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen gap-4 p-4">
        <Image
          className="size-fit"
          src={`/images/general/logo.svg`}
        ></Image>
        <Image
            className="size-fit"
            src="/images/illustration/email-send.svg"
            alt="success"
        >
        </Image>
        <div className="flex flex-col items-center justify-center gap-0.5">
            <h1 className="text-2xl font-bold text-[#F31260] mt-4 text-danger-500">Create Account Success</h1>
            <p className="font-[#71717A]">Check your email for account activation</p>
        </div>
        <Button color="danger" variant="bordered" onClick={() => router.push('/')}>Back To Home</Button>
    </div>
  );
}

export default RegisterSuccess;