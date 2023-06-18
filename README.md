# How it works

This project uses the OpenAI GPT-3 API (specifically, text-davinci-003) and Vercel Edge functions with streaming. It generates 5 cinema recommendations based on the form and user input, sends it to the GPT-3 API via a Vercel Edge function, then streams the response back to the application.

# Running Locally

After cloning the repo, go to OpenAI to make an account and put your API key in a file called `.env`.

For example:

`OPENAI_API_KEY=...`

Then, run the application in the command line and it will be available at http://localhost:5173.

`npm run dev`

<br>
<br>

## 🌹 Do you like this project?

Did you like? Would you like me to bring more? <br> This is how I know if I'm on the right track and delivering interesting solutions for you.
<br>
<br>
[![Buy me a coffee](/src/lib/bmc-button.svg)](https://bmc.link/henrymartinsb)
