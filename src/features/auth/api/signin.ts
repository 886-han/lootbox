import { apiCient } from "../../../shared/api/cilent";
import type { User } from "../../../entities/user/model/userStore";

export interface SigninRequest {
    userId: string;
    password: string
}

export interface SigninResponse {
    user: User
}

export const signIn = async (payload: SigninRequest) => {
    const {data} = await apiCient.post<SigninResponse>('/auth/login', payload);
    return data;
}