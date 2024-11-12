// import dotenv from "dotenv";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// dotenv.config();
require("dotenv").config();
const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Configure Gemini API key
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const systemInstruction = "You are my English teacher. Help me learn IELTS and improve my knowledge so I can study in the Information Technology field. The topic could cover anything that is needed for normal conversation, reading the news, slang, and IT field terminology. In your reply, you could point out my mistake, the sentence structure mistake, the way to better the sentence, and teach me new lessons."

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: systemInstruction,
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

// Load templates
function loadTemplates() {
    const templatesDir = path.join(__dirname, 'prompts');
    const templates = {};
    const files = fs.readdirSync(templatesDir);

    files.forEach(file => {
        if (path.extname(file) === '.js') {
            const templatePath = path.join(templatesDir, file);
            const template = require(templatePath);
            templates[template.name] = template;
        }
    });

    return templates;
}

const allTemplates = loadTemplates();

// Generate prompt function
function generatePrompt(templateName, userInput) {
    const template = allTemplates[templateName];

    if (!template) {
        return 'Invalid template name.';
    }

    let prompt = template.template;
    template.inputFields.forEach(field => {
        prompt = prompt.replace(`[${field.name}]`, userInput[field.name]);
    });

    return prompt;
}

// Run prompt with Gemini
async function runPrompt(templateName, userInput) {
    const prompt = generatePrompt(templateName, userInput);

    console.log(prompt)

    try {
        const chatSession = model.startChat({
            generationConfig,
            history: [
            ],
        });

        const result = await chatSession.sendMessage(prompt);
        console.log(result.response.text());
    } catch (error) {
        console.error(error);
    }
}

// Example usage
// const userInput = {
//     Task: 'Write a short story about a robot who wants to be a chef.'
// };
// runPrompt('Rule of Three', userInput);

// const userInput = {How to solve the problem of phone scamming
//     "Role 1": 'Ielts english teacher',
//     "Role 2": 'Student',
//     "Topic": 'Information Technology',
// };
// runPrompt('Role Playing', userInput);

// const userInput = {
//     "Topic": 'How to solve the problem of phone scamming',
// };
// runPrompt('Brainstorming Creative Ideas', userInput);

const userInput = {
    "Skill": 'AI Engineering',
};
runPrompt('Learning New Skills', userInput);