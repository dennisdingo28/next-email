export interface NavbarLinkProps {
    label: string;
    to?: string;
}

export interface UserSchemaProps {
    name: string;
    email: string;
    password?: string;
    image: string;
}

export interface UserJwtPayload {
    name: string;
    email: string;
    image: string;
}