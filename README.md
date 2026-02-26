Gemini said
Ah, I see exactly what happened! In your screenshot, the text is rendering as normal paragraphs.

To get those nice dark boxes with the "Copy" button on GitHub, you need to wrap your terminal commands in triple backticks (```). Also, it looks like a line break was missed between the install command and the next heading.

Here is the corrected Markdown code. Copy the entire block below and paste it directly into your README.md file:

Markdown
### 📁 Installation

Open your terminal.

Navigate to the frontend folder:
```bash
cd frontend
Install the project dependencies:

Bash
npm install
🚀 Running the Development Server
Start the development server using:

Bash
npm run dev
After running the command, the application will start locally.


Once you commit and push this updated version, GitHub will automatically format those `bash` sections into code blocks with the handy copy button! Let me know if you want the full front-end Readme reformatted this way too.
