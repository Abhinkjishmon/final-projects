const { GoogleGenerativeAI } = require("@google/generative-ai");
const { geminiApiKey } = require("../config/contents");

const genAI = new GoogleGenerativeAI(geminiApiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateResponse = async (prompt) => {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.log(error);
  }
};

module.exports = generateResponse;
