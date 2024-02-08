"use server";

import { z } from "zod";

export async function Validat(prevState, queryData) {
    const UserSchema = z.object({
        email: z.string().min(1, { message: "email er mangler" }),
        password: z.string().min(1, { message: "password is required" }),
    });

    const User = UserSchema.safeParse({
        email: queryData.get("email"),
        password: queryData.get("password")
    })

    if (!User.success) {
        return {
        errors: User.error.flatten().fieldErrors,
        }
    }

    // NEST ACTION CALL:
}
