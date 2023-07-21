import mongoose from "mongoose";

export enum UserRoles {
    BASIC = "BASIC",
    PREMIUM = "PREMIUM",
    ENTERPRISE = "ENTERPRISE",
    ADMIN = "ADMIN"
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
    apiKey: string;
    sentEmails: Array<any>;
    role: UserRoles;
}

export interface UserProfile {
    name?: string;
    email?: string;
    _id?: string;
}

export interface EmailSchemaProps {
    template_id: EmailTemplateSchemaProps;
}

export interface EmailTemplateSchemaProps {
   html: string;
   clientHtml: string;
   properties: object;
}

export interface EmailColor {
    [key: string]: string;
}

export interface UserJwtPayload {
    name: string;
    email: string;
    image: string;
}