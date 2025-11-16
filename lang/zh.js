// 中文语言包
const zh = {
  // 页面标题和头部
  pageTitle: "AI 塔罗牌占卜",
  mainTitle: "AI 塔罗牌占卜",
  subtitle: "让神秘的塔罗为你指引前路，探索内心的智慧",
  
  // 问题输入区域
  questionTitle: "请输入你想要占卜的问题",
  questionPlaceholder: "例如：我的感情会如何发展？我该如何做出这个重要决定？我的事业前景如何？",
  startButton: "开始占卜",
  
  // 牌阵区域
  spreadTitle: "凯尔特十字牌阵",
  spreadSubtitle: "点击任意卡牌查看详细解析",
  resetButton: "重新占卜",
  
  // 卡牌位置含义
  cardMeanings: {
    "现状": "现状",
    "挑战": "挑战", 
    "远因": "远因",
    "近因": "近因",
    "可能": "可能",
    "近期": "近期",
    "方法": "方法",
    "外在": "外在",
    "内心": "内心",
    "结果": "结果"
  },
  
  // 位置详细说明
  positions: {
    1: "现状 - 你当前的状况",
    2: "挑战 - 你面临的挑战或阻碍",
    3: "远因 - 过去的影响",
    4: "近因 - 近期的影响",
    5: "可能性 - 可能的发展",
    6: "近期 - 近期的发展",
    7: "你的方法 - 你应该采取的方法",
    8: "外在影响 - 外在环境的影响",
    9: "希望恐惧 - 你内心的希望与恐惧",
    10: "最终结果 - 最终的结果"
  },
  
  // 解释区域
  interpretationTitle: "牌面解析",
  upright: "正位",
  reversed: "逆位",
  
  // 系统消息
  loadingMessage: "AI正在为你解读牌面...",
  cacheLoadingMessage: "读取缓存中...",
  foundCacheMessage: "发现缓存，立即加载...",
  connectionError: "连接已断开，请刷新页面重试",
  connectionNotReady: "连接未就绪，请稍后再试",
  cardsNotLoaded: "塔罗牌数据未加载完成，请稍后再试",
  pleaseEnterQuestion: "请输入你想要占卜的问题",
  connectionFailed: "连接失败，请刷新页面重试。",
  sendMessageFailed: "发送消息失败，请重试。",
  
  // 系统提示词
  systemPrompt: `你是一位专业的塔罗牌占卜师，具有深厚的塔罗知识和直觉洞察力。请为用户提供准确、有深度且有启发性的塔罗牌解读。

请遵循以下要求：
1. 结合牌的含义、位置含义和正逆位来解读
2. 联系用户的具体问题给出针对性建议
3. 语言要神秘而富有诗意，但又要实用
4. 解读长度在150-300字之间
5. 先简述牌的基础含义，再结合位置和问题深入分析，最后给出建议

用户会发送给你牌面信息，包括牌名、牌在凯尔特十字牌阵的位置、正逆位、含义、元素等信息，以及用户的问题。请根据这些信息给出专业的塔罗牌解读。`,
  
  // 用户输入模板
  userInputTemplate: `请为我解读这张牌：

牌面信息：
- 牌名：{cardName}
- 位置：{position}
- 方位：{orientation}
- 正位含义：{uprightMeanings}
- 逆位含义：{reversedMeanings}
- 元素：{element}
- 星座：{sign}

用户问题：{question}

请给出专业的塔罗牌解读。`
};

// 导出语言包
if (typeof module !== 'undefined' && module.exports) {
  module.exports = zh;
} else {
  window.zh = zh;
}
