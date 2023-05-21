import { Configuration, OpenAIApi } from "openai";
import * as dotenv from 'dotenv'

dotenv.config()

const configuration = new Configuration({
    organization: process.env.ORG_KEY,
    apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);
//getResponse()

async function getResponse() {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello world" }],
    });
    console.log(completion.data.choices[0].message);
}






