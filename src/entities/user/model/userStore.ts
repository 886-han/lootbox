import {create} from 'zustand'

export interface User {
    userId: string;
    nickname: string;
    age: number;
    email: string;
}

export interface UserState {
    user: User | null
    setUser: (payload: {user: User}) => void;
    clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    user: null,
    setUser: ({user}) => 
        set({
            user: user
        }),
    clearUser: () => 
        set({
            user: null
        })
}))

