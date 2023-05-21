import { Configuration, OpenAIApi } from "openai";

import * as dotenv from 'dotenv'
dotenv.config()

const configuration = new Configuration({
    organization: process.env.ORG_KEY,
    apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function getResponse(content: string, model = "gpt-3.5-turbo") {
    const completion = await openai.createChatCompletion({
        model: model,
        messages: [{ role: "user", content: content }],
    });
    console.log(completion.data.choices[0].message);
}