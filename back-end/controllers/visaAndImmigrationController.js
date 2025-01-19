const { visaAssistAIPrePrompr } = require("../helper/prompt");
const Chat = require("../models/visaAndImmigration/visaChatAssist.model");
const generateResponse = require("../utils/googleGenerativeAI");
// handle user visa assist chat
const handleChat = async (req, res) => {
  try {
    const { userId, userMessage } = req.body;

    if (!userId || !userMessage) {
      return res
        .status(400)
        .json({ error: "User ID and message are required." });
    }

    const assistantResponse = await generateResponse(
      visaAssistAIPrePrompr(userMessage)
    );
    const chat = new Chat({ userId, userMessage, assistantResponse });
    await chat.save();

    res.status(200).json({ userMessage, assistantResponse });
  } catch (error) {
    console.error(
      "Error interacting with Gemini API:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Failed to process the chat." });
  }
};

//get uset previous chats
const getUserChats = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const chats = await Chat.find({ userId })
      .populate({ path: "userId", select: "-password" })
      .sort({ timestamp: 1 });
    if (!chats || chats.length === 0) {
      return res.status(404).json({ message: "No chats found for this user." });
    }
    res.status(200).json({ success: true, data: chats });
  } catch (error) {
    console.error("Error retrieving chats:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving chats." });
  }
};
const checkEligibility = async (req, res) => {
  try {
    const {
      nationality,
      purpose,
      duration,
      employment,
      education,
      financialProof,
      visaStatus,
      travelHistory,
      invitationLetter,
      healthInsurance,
      accommodation,
      sponsor,
      criminalRecord,
      tiesToHomeCountry,
    } = req.body;
    const userMessage = `
  Given the following applicant details, please evaluate if they are eligible for a visa:

  Nationality: ${nationality}
  Purpose of Visit: ${purpose}
  Duration of Stay: ${duration}
  Employment Status: ${employment}
  Education Level: ${education}
  Financial Proof: ${financialProof ? "Yes" : "No"}
  Visa Status: ${visaStatus}
  Travel History: ${travelHistory}
  Invitation Letter: ${invitationLetter ? "Yes" : "No"}
  Health Insurance: ${healthInsurance ? "Yes" : "No"}
  Accommodation Details: ${accommodation}
  Sponsor: ${sponsor}
  Criminal Record: ${criminalRecord ? "Yes" : "No"}
  Ties to Home Country: ${tiesToHomeCountry}

  Additional Information:
  1. Are the applicant's ties to their home country sufficient to demonstrate their intention to return?
  2. Does the applicant have adequate financial proof to cover their expenses during the stay?
  3. Does the applicant have health insurance for the duration of the visit?
  4. Are there any concerns regarding the applicant's travel history or previous visa status?

  Based on this information, is the applicant eligible for a visa? Please provide the reasoning.
`;

    const assistantResponse = await generateResponse(userMessage);
    
    res.status(200).json({ assistantResponse });
  } catch (error) {
    console.error(
      "Error interacting with AI:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Failed to process the eligibility check." });
  }
};
module.exports = { handleChat, getUserChats, checkEligibility };
