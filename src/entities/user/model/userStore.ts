import {create} from 'zustand'
import {persist} from 'zustand/middleware'

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

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            user: null,
            setUser: ({ user }) => set({ user }),
            clearUser: () => set({ user: null }),
        }),
        {
            name: "user-storage",
        }
    )
);

