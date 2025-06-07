import React from "react";
import {Image} from "@heroui/image";
import {Button, Form, Input, Link, Card, CardBody} from "@heroui/react";
import useRegister from "./useRegister";
import { IoEyeOff } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { Controller } from "react-hook-form";
import { Spinner } from "@heroui/spinner";

const Register = () => {
    const { visiblePassword, handleVisiblePassword, control, handleSubmit, handleRegister, isPendingRegister, errors } = useRegister();

    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 p-4 lg:flex-row lg:gap-20 py-10 lg:py px-6">
            <div className="lg:h-full h-fit lg:w-1/3 w-full flex flex-col items-center justify-center gap-10 lg:gap-20 lg:w-1/3">
                <Image
                    className="lg:size-[180px] size-fit max-w-[180px] max-h-[180px]"
                    src="/images/general/logo.svg"
                    alt="logo"
                    // width={180}
                    // height={180}
                />
                <Image
                    className="lg:w-full w-fit lg:h-full h-fit"
                    src="/images/illustration/login.svg"
                    alt="login"
                    // width={1024}
                    // height={516}
                />
            </div>
            
            <Card className="w-full max-w-md lg:w-1/4">
                <CardBody className="flex flex-col gap-4 p-4 sm:p-8">
                    <h2 className="text-xl font-bold text-danger-500">Create Account</h2>
                    <p className="text-small mb-2 text-default-400">
                        Have an account?&nbsp;
                        <Link href="/auth/login" className="font-semibold text-danger-400">login here</Link>
                    </p>
                    { errors.root && (
                        <p className="text-small text-danger-500">
                            {errors.root.message}
                        </p>
                    )}
                    <Form className="flex w-full flex-col gap-4" onSubmit={handleSubmit(handleRegister)}>
                        <Controller
                            name="fullName"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    type="text"
                                    label="Fullname"
                                    variant="bordered"
                                    autoComplete="off"
                                    isInvalid={!!errors.fullName}
                                    errorMessage={errors.fullName ? errors.fullName.message : ""}
                                />
                            )}
                        />

                        <Controller
                            name="username"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    type="text"
                                    label="Username"
                                    variant="bordered"
                                    autoComplete="off"
                                    isInvalid={!!errors.username}
                                    errorMessage={errors.username ? errors.username.message : ""}
                                />
                            )}
                        />

                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    type="email"
                                    label="Email"
                                    variant="bordered"
                                    autoComplete="off"
                                    isInvalid={!!errors.email}
                                    errorMessage={errors.email ? errors.email.message : ""}
                                />
                            )}
                        />
                        
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    label="Password"
                                    type={visiblePassword.password ? "text" : "password"}
                                    variant="bordered"
                                    autoComplete="off"
                                    endContent={
                                        <button 
                                            className="focus:outline-none"
                                            type="button"
                                            onClick={() => handleVisiblePassword("password")}
                                        >
                                            {visiblePassword.password ? 
                                                <FaEye className="pointer-events-none text-xl text-default-400"/> : 
                                                <IoEyeOff className="pointer-events-none text-xl text-default-400"/>
                                            }
                                        </button>
                                    }
                                    isInvalid={!!errors.password}
                                    errorMessage={errors.password ? errors.password.message : ""}
                                />
                            )}
                        />
                        
                        <Controller
                            name="passwordConfirm"
                            control={control}
                            render={({ field }) => (
                                <Input 
                                    {...field}
                                    label="Confirm Password" 
                                    type={visiblePassword.passwordConfirm ? "password" : "text"} 
                                    variant="bordered" 
                                    endContent={
                                        <button 
                                            className="focus:outline-none"
                                            type="button"
                                            onClick={() => handleVisiblePassword("passwordConfirm")}
                                        >
                                            {visiblePassword.passwordConfirm ? 
                                                <FaEye className="pointer-events-none text-xl text-default-400"/> : 
                                                <IoEyeOff className="pointer-events-none text-xl text-default-400"/>
                                            }
                                        </button>
                                    }
                                    isInvalid={!!errors.passwordConfirm}
                                    errorMessage={errors.passwordConfirm ? errors.passwordConfirm.message : ""}
                                />
                            )}
                        />
                        
                        <Button color="danger" size="lg" type="submit" className="w-full">
                            {isPendingRegister ? <Spinner color="white" size="sm" /> : "Register"}
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
};

export default Register;