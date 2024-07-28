import { IUser } from "@/types";

export type UserState = {
    currentUser: IUser | null;
    loading: boolean;
    error: string;
    isAuthenticated: boolean;
}