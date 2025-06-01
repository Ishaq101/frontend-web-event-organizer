import React from "react";
import {Image} from "@heroui/image";
// import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";
// import {Link} from "@heroui/link";
import {Button, Form, Input, Link, Card, CardBody} from "@heroui/react";

const Register = () => {
    return (
        <div className="flex flex-row items-center justify-center gap-20 w-full h-screen">
            <div className="flex flex-col items-center justify-center gap-10 w-1/3 h-full">
                <Image
                    src="/images/general/logo.svg"
                    alt="logo"
                    width={180}
                    height={180}
                />
                <Image
                    src="/images/illustration/login.svg"
                    alt="login"
                    width={1024}
                    height={516}
                />
            </div>
            <Card className="w-1/4">
                <CardBody className="p-8">
                    <h2 className="text-xl font-bold text-danger-500">Create Account</h2>
                    <p className="text-small">
                        Have an account?&nbsp;
                        <Link href="/login" className="font-semibold text-danger-400">login here</Link>
                    </p>
                    <Form className="w-full text-20">
                        <Input label="Fullname" variant="bordered"></Input>
                        <Input label="Email" type="email" variant="bordered"></Input>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
};

export default Register;