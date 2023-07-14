import * as z from "zod";

export const SignUpValidator = z.object({
    username: z.string().min(2,"The username must be at lest 2 characters long"),
    email: z.string().email("You must provide a valid email"),
    password: z.string().min(4,"The password must be at least 4 characters long")
});

export type SignUpRequest = z.infer<typeof SignUpValidator>;