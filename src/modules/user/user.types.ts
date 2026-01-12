export interface IUser {
    id: string; 
    name: string;
    email: string;
    role: UserRole;
    profile: string;
    password: string;
}

export enum UserRole {
    ADMIN = "admin",
    USER = "user",
}