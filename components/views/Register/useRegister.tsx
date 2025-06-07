import { useState } from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IRegister } from "@/types/Auth";
import authService from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const registerSchema = yup.object().shape({
    fullName: yup.string().required("Fullname is required"),
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    passwordConfirm: yup.string()
        .oneOf([yup.ref('password'), ""], 'Passwords must match')
        .required('Confirm Password is required'),
});

const useRegister = () => {
    const router = useRouter();

    const [visiblePassword, setVisiblePassword] = useState({
        password: false,
        passwordConfirm: false,
    });

    const handleVisiblePassword = (
        key: "password" | "passwordConfirm"
    ) => {
        setVisiblePassword({
            ...visiblePassword,
            [key]: !visiblePassword[key],
        });
    }

    const { 
        control, 
        handleSubmit, 
        formState: { errors }, 
        reset, 
        setError } = useForm({
            resolver: yupResolver(registerSchema),
        });
    
    const registerService = async (payload: IRegister) => {
        const result = await authService.register(payload);
        return result;
    };

    const {mutate: mutateRegister, isPending: isPendingRegister} = useMutation({
        mutationFn: registerService,
        onError(error) {
            setError("root", {
                message: error.message,
            })
        },
        onSuccess(data) {
            router.push("/auth/register/success")
            reset();
        },
    });

    const handleRegister = (data: IRegister) => mutateRegister(data);
        

    return {
        visiblePassword,
        handleVisiblePassword,
        control,
        handleSubmit,
        handleRegister,
        isPendingRegister,
        errors,
    };
};

export default useRegister;