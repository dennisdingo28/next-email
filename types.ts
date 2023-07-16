export enum UserRoles {
    BASIC = "BASIC",
    PREMIUM = "PREMIUM",
    ENTERPRISE = "ENTERPRISE",
}

export interface NavbarLinkProps {
    label: string;
    to?: string;
}

export interface UserSchemaProps {
    name: string;
    email: string;
    password?: string;
    image: string;
    role: UserRoles;
}

export interface UserJwtPayload {
    name: string;
    email: string;
    image: string;
}