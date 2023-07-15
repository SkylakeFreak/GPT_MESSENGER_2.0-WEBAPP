import { adminDb } from "@/firebaseAdmin";
import textquery from "../../lib/queryApi"
import admin from "firebase-admin";

import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
    answer: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { prompt, chatId, model, session } = req.body;

    if (!prompt) {
        res.status(400).json({ answer: "Please provide me a prompt" });
        return;
    }
    if (!chatId) {
        res.status(400).json({ answer: "Please provide me a valid chat ID" });
        return;
    }

    //chatgpt query
    const response = await textquery(prompt, model)
    const message: Message = {
        text: response || "ChatGPT was unable to find an answer for that!",
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: "ChatGPT",
            name: "ChatGPT",
            avatar: "https://links.papareact.com/89k",

        },

    };
    await adminDb
        .collection("users")
        .doc(session?.user?.email)
        .collection("chats")
        .doc(chatId)
        .collection("messages")
        .add(message);

    res.status(200).json({ answer: message.text });
    console.log();
}