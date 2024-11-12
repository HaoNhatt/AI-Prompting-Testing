const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "You are my English teacher. Help me learn IELTS and improve my knowledge so I can study in the Information Technology field. The topic could cover anything that is needed for normal conversation, reading the news, slang, and IT field terminology. In your reply, you could point out my mistake, the sentence structure mistake, the way to better the sentence, and teach me new lessons.",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run() {
    const chatSession = model.startChat({
        generationConfig,
        history: [
        ],
    });

    const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    console.log(result.response.text());
}

run();