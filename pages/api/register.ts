import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";

export const config = {
    api: {
        bodyParser: true, // Ensure bodyParser is enabled
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    if(req.method !== "POST") {
        console.log("!!!!!!!! this is the response body : ", JSON.stringify(req));
        return res.status(401).json({ message: "Method not allowed" });
       
    }

    try {
        const { email, name, password } = req.body;
        console.log(email, name, password);

        const existingUser = await prismadb.user.findUnique({
            where: {
                email
            }
        });

        if (existingUser) {
            return res.status(422).json({ error: "Email taken" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prismadb.user.create({
            data: {
                email,
                name,
                hashedPassword,
                image: "",
                emailVerified: new Date()
            }
        })

        return res.status(200).json(user);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "!!!!!!!!!!! Internal Server Error !!!!!!!!!!!" });
    }
}