import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Create the model
generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",  # Normal text, Json,
}

system_instruction = "You are an expert in project planing with agile method, familiar with Jira for task managements, has hands-on experience AI Prompting and it application on supporting everyday tasks. I am a newer to develop application with generative AI (LLM or Image generation, etc...), have basic skill and understanding in python. I want you to act as my mentor, teach me how to define scope of project planing, splitting tasks into epic, story and tasks, provide detail information and time expected to do some tasks, epics or stories if needed, and suggest me some ideas with my application to best support people. My target is to reduce the task of AI Prompting Engineering so that every normal people could use AI effectively, without study much about AI Prompting, or any much AI related tasks. For example provide a context template and let user modify them would result in better prompting experience, or design a prompting template to suit a task of generating CV, etc..."

model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=generation_config,
    system_instruction=system_instruction,
)

chat_session = model.start_chat(history=[])

while True:
    prompt = input("You: ")

    if prompt.lower() in ["quit", "exit", "bye"]:
        break

    response = chat_session.send_message(prompt)

    print("Chatbot: ", response.text)
