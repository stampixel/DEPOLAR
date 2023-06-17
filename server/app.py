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

app = FastAPI()


@app.on_event("startup")
async def startup_event():
    print('Server started :', datetime.now())


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/predict_next_steps")
async def predict_next_steps(req):
    data = await req.json()
    response = openai.ChatCompletion.create(
        model=MODEL,
        messages=[{"role": "system", "content": """  
    Given is the opinion: [user opinion/perspective]. You are to first list three common arguments that support the opposing side. The three arguments should be separated by bullet points. 

    Furthermore, you should then generate credible sources and citations that you used to find those common arguments and any other credible sources related to the counterarguments you made. 
            """}, {"role": "user", "content": "should teachers have guns"}],
        max_tokens=512,
        temperature=0.3,
        top_p=1
    )

    print(response)
    content = response["choices"][0]["message"]["content"]
    print(content)
    return {"nextSteps": [point.replace("- ", "") for point in rest.split("\n")], "firstParagraph": first_paragraph}
