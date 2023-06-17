from datetime import datetime
import dotenv
import os
from fastapi import FastAPI
import openai

dotenv.load_dotenv(".env")
print(os.getcwd())
openai.organization = os.environ["OPENAI_ORG"]
openai.api_key = os.environ["OPENAI_API_KEY"]
MODEL = "gpt-3.5-turbo"

response = openai.ChatCompletion.create(
    model=MODEL,
    messages=[{"role": "system", "content": """IF you are given a question, answer with 2 affirmative arguments and 2 opposition arguments. Write the title “AFFIRMATIVE:” and then list the 2 affirmative arguments as bullet points. Then write the title “OPPOSING:” and then list the 2 opposing arguments. You must find 4 links and citations to these arguments and separate them under pro and anti.

IF you are given an argument/statement, you are to first list two common arguments on the opposing side . The three arguments should be separated by bullet points. Then generate three credible sources, citations, and direct links that you used to find those common arguments.

At the end, output the message: “Thank you for using DEPOLAR, do you have any follow-up questions or different prompts you want to explore?”"""},
              {"role": "user", "content": "should trump should be in office"}],
    max_tokens=512,
    temperature=0.3,
    top_p=1
)

print(response)
content = response["choices"][0]["message"]["content"]
print(content)
