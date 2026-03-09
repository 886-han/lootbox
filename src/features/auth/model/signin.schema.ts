import {z} from 'zod'

export const signinSchema = z.object({
    userId: z.string(),
    password: z.string().min(5, {
        error: err => `비밀번호는 ${err.minimum}자 이상이어야 입니다.`
    })
})

export type SignInFormValues = z.infer<typeof signinSchema>