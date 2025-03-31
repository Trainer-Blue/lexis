import { GoogleGenAI } from "@google/genai";
import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompts";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

export async function generateSummaryFromGemini(pdfText: string) {
  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-001",
        contents: `transform this document into an engaging, easy-to-read summary with contextually relvant emojis and proper markdown formatting:\n\n${pdfText}`,
        config: {
            systemInstruction: SUMMARY_SYSTEM_PROMPT,
            temperature: 0.7,
            maxOutputTokens: 1500,
        },
    });

    if (!response || !response.text) {
        throw new Error("No response from Gemini API");
        }

    console.log(response);
    return response.text;
  } catch (error) {
    console.error("Error occurred while generating summary from Gemini", error);
    throw error;
  }
}
