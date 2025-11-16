// English language pack
const en = {
  // Page title and header
  pageTitle: "AI Tarot Reading",
  mainTitle: "AI Tarot Reading",
  subtitle: "Let the mystical tarot guide your path and explore the wisdom within",
  
  // Question input area
  questionTitle: "Enter your question for the tarot reading",
  questionPlaceholder: "For example: How will my relationship develop? How should I make this important decision? What does my career future look like?",
  startButton: "Start Reading",
  
  // Spread area
  spreadTitle: "Celtic Cross Spread",
  spreadSubtitle: "Click any card to view detailed interpretation",
  resetButton: "New Reading",
  
  // Card position meanings
  cardMeanings: {
    "现状": "Present",
    "挑战": "Challenge", 
    "远因": "Distant Past",
    "近因": "Recent Past",
    "可能": "Possible",
    "近期": "Near Future",
    "方法": "Approach",
    "外在": "External",
    "内心": "Inner Self",
    "结果": "Outcome"
  },
  
  // Position detailed descriptions
  positions: {
    1: "Present Situation - Your current circumstances",
    2: "Challenge - The challenge or obstacle you face",
    3: "Distant Past - Past influences",
    4: "Recent Past - Recent influences",
    5: "Possible Outcome - Potential developments",
    6: "Near Future - Near-term developments",
    7: "Your Approach - The approach you should take",
    8: "External Influences - Environmental influences",
    9: "Hopes and Fears - Your inner hopes and fears",
    10: "Final Outcome - The ultimate result"
  },
  
  // Interpretation area
  interpretationTitle: "Card Analysis",
  upright: "Upright",
  reversed: "Reversed",
  
  // System messages
  loadingMessage: "AI is interpreting the cards for you...",
  cacheLoadingMessage: "Loading from cache...",
  foundCacheMessage: "Found cache, loading immediately...",
  connectionError: "Connection lost, please refresh the page and try again",
  connectionNotReady: "Connection not ready, please try again later",
  cardsNotLoaded: "Tarot card data not loaded yet, please try again later",
  pleaseEnterQuestion: "Please enter your question for the tarot reading",
  connectionFailed: "Connection failed, please refresh the page and try again.",
  sendMessageFailed: "Failed to send message, please try again.",
  
  // System prompt
  systemPrompt: `You are a professional tarot reader with deep knowledge of tarot and intuitive insight. Please provide accurate, insightful, and inspiring tarot card interpretations for users.

Please follow these requirements:
1. Combine the card's meaning, position meaning, and upright/reversed orientation in your interpretation
2. Connect to the user's specific question to provide targeted advice
3. Use mystical and poetic language that is also practical
4. Keep interpretations between 150-300 words
5. Start with a brief description of the card's basic meaning, then analyze deeply in context of position and question, and finally provide advice

Users will send you card information including card name, position in the Celtic Cross spread, upright/reversed orientation, meanings, elements, etc., along with the user's question. Please provide professional tarot interpretations based on this information.`,
  
  // User input template
  userInputTemplate: `Please interpret this card for me:

Card Information:
- Card Name: {cardName}
- Position: {position}
- Orientation: {orientation}
- Upright Meanings: {uprightMeanings}
- Reversed Meanings: {reversedMeanings}
- Element: {element}
- Zodiac Sign: {sign}

User Question: {question}

Please provide a professional tarot reading.`
};

// Export language pack
if (typeof module !== 'undefined' && module.exports) {
  module.exports = en;
} else {
  window.en = en;
}
