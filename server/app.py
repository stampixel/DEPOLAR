from datetime import datetime
import dotenv
import os
from fastapi import FastAPI, Request
import openai
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

dotenv.load_dotenv(".env")
print(os.getcwd())
openai.organization = os.environ["OPENAI_ORG"]
openai.api_key = os.environ["OPENAI_API_KEY"]
MODEL = "gpt-3.5-turbo"

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

"""In order to make cross-origin requests -- i.e., requests that originate from a different protocol, IP address, 
domain name, or port -- you need to enable Cross Origin Resource Sharing (CORS)."""
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


class Data(BaseModel):
    user: str


@app.on_event("startup")
async def startup_event():
    print('Server started :', datetime.now())


@app.get("/")
async def root():
    print("asdasd")
    return {"message": "Hello World"}


@app.post("/test")
async def test(req: Request):
    # print(data)
    data = await req.json()
    print(data)
    return {"data": "asdas"}


@app.post("/argument")
async def argument(req: Request):
    data = await req.json()
    question = data['content']
    response = openai.ChatCompletion.create(
        model=MODEL,
    #     messages=[{"role": "system", "content": """
    # Given is the opinion: [user opinion/perspective]. You are to first list three common arguments that support the opposing side. The three arguments should be separated by bullet points.
    #
    # Furthermore, you should then generate credible sources and citations that you used to find those common arguments and any other credible sources related to the counterarguments you made.
    #         """}, {"role": "user", "content": question}],
        messages=[{"role": "system", "content": """If you are given a question, answer with 2 affirmative arguments and 2 opposition arguments. 

In the first paragraph of the response, write the title “OPPOSING:”. Then, list the 2 affirmative arguments in point form (starting with “•”.)

Then write the title “OPPOSING:” 
and then list the 2 opposing arguments. You must find 4 working links and citations to these arguments and separate them under pro and anti.

These 4 arguments are supposed to be separated by bullet points. 

Then write the title “NUANCES:” 
Then, in a new paragraph, write some nuances to all the arguments at a collegiate level, including how proposed ideas may or may not be applicable in real-world situations.

Then write the title “RESOURCES:” 
Then, in a new paragraph, output links to credible articles, videos, and at least 3 research papers related to that topic, separated by 

Then write the title “FURTHER RESEARCH:” 
Then, in a new paragraph, recommend the users credible organizations, research organizations, and websites where they can do further research on their own. 

Then write the title “SUGGESTED QUESTIONS:”
Then, in a new paragraph, recommend the user similar questions or statements that relate to their original message for further engagement.

At the end, output the message: “We encourage you to do further in depth research with the resources the DEPOLAR bot outputted above! Thank you for using DEPOLAR, do you have any follow-up questions or different prompts you want to explore?”"""}, {"role": "user", "content": question}],
        max_tokens=512,
        temperature=0.3,
        top_p=1
    )

    print(response)
    content = response["choices"][0]["message"]["content"]
    print(content)
    return {"data": content}
