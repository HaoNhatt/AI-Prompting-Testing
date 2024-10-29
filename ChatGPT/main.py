import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(
    # This is the default and can be omitted
    # api_key=os.environ.get("OPENAI_API_KEY"),
    api_key=os.getenv("chatgpt_api_key"),
)


def chat_with_gpt(prompt):
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": prompt,
            }
        ],
        model="gpt-3.5-turbo",
    )

    return chat_completion.choices[0].message.content.strip()


if __name__ == "__main__":
    print(os.getenv("chatgpt_api_key"))
    # response = chat_with_gpt("How are you today")
    # print("Chatbot: ", response)
    # while True:
    #     user_input = input("You: ")
    #     if user_input.lower() in ["quit", "exit", "bye"]:
    #         break

    #     response = chat_with_gpt(user_input)
    #     print("Chatbot: ", response)
