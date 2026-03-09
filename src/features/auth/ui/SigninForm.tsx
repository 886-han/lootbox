import { Button, Stack, TextField} from "@mui/material";
import { useSignin } from "../model/useSignin";
import { signinSchema, type SignInFormValues } from "../model/signin.schema";
import {useForm} from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";


export default function SignInForm(){
    const signinMutation = useSignin();

    const {
        register, handleSubmit, formState: {errors}
    } = useForm<SignInFormValues>({
        resolver: zodResolver(signinSchema),
        defaultValues: {
            userId: '',
            password: ''
        },
    });

    const onSubmit = (data: SignInFormValues) => {
        signinMutation.mutate(data);
    }

    return(
        <Stack component="form" spacing={2} onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label="아이디"
                {...register('userId')}
                fullWidth
                error={!!errors.userId}
                helperText={errors.userId?.message}
            />

            <TextField
                label="비밀번호"
                type="password"
                {...register('password')}
                fullWidth
                error={!!errors.password}
                helperText={errors.password?.message}
            />

            <Button 
                type="submit" 
                variant="contained" 
                fullWidth
                disabled={signinMutation.isPending}
            >
                로그인
            </Button>
        </Stack>
    )
}