"use client"

import { Validat } from "@/actions/actions";
import { useState } from "react";
import { useFormState } from "react-dom";

export default function Form() {
    const [formState, formAction] = useFormState(Validat, null);
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()

    return(
        <form action={formAction}>
            <div className="mb-3">
                <label className="flex flex-col">
                    Email:
                    <input className="border-2 border-grey-100 rounded-md px-3 py-1" type="text" name="email" value={email} placeholder="din@email.dk" onChange={e=> setEmail(e.target.value)} />
                    {formState?.errors ?
                        <div>{formState.errors.email}</div> : ""
                    }
                </label>
            </div>
            <div className="mb-3">
                <label className="flex flex-col">
                    Adgangskode:
                    <input className="border-2 border-grey-100 rounded-md px-3 py-1" type="password" name="password" value={pass} placeholder="Oste123" onChange={e=> setPass(e.target.value)} />
                    {formState?.errors ?
                        <div>{formState.errors.password}</div> : ""
                    }
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}