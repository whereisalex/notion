import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_MODEL = "gemini-1.5-flash";

class Gemini {
  private genAI: any;
  private model: any;

  constructor() {
    this.genAI = new GoogleGenerativeAI(process.env.GEMINI_TOKEN ?? "");
    this.model = this.genAI.getGenerativeModel({ model: GEMINI_MODEL });
  }

  async runPrompt(prompt: string) {
    return await this.model.generateContent([prompt]);
  }
}

export default Gemini;
