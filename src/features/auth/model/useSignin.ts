import { useMutation } from "@tanstack/react-query"
import { signIn } from "../api/signin"
import { useUserStore } from "../../../entities/user/model/userStore"

export const useSignin = () => {
    const setUser = useUserStore((state) => state.setUser);

    return useMutation({
        mutationFn: signIn,
        onSuccess: (data) => {
            setUser({user: data.user})
        },
    })
}