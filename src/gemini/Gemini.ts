import { GenerativeModel, GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_MODEL = "gemini-1.5-flash";

class Gemini {
  private genAI: GoogleGenerativeAI;
  private model: GenerativeModel;

  constructor() {
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_TOKEN ?? "");
    this.model = this.genAI.getGenerativeModel({ model: GEMINI_MODEL });
  }

  async runPrompt(prompt: string) {
    const result = await this.model.generateContent([prompt]);
    return result.response.text();
  }
}

export default Gemini;
