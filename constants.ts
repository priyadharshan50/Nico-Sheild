
import { GameTile, StoriesData, QuestionnaireSection, QuestionOption, LanguageCode, TranslationContent } from './types';

export const GAME_BOARD_TILES: GameTile[] = [
  { icon: 'start', fact: "Start Your Journey to a Smoke-Free Life! Roll the dice to begin." },
  { icon: 'cigarette', fact: "Fact: A single cigarette contains over 7,000 chemicals, with at least 69 known to cause cancer." },
  { icon: 'money', fact: "Financial Fact: The average smoker spends thousands of dollars a year on cigarettes. What could you do with that money?" },
  { icon: 'heart', fact: "Health Fact: Within 20 minutes of quitting, your heart rate and blood pressure drop." },
  { icon: 'social', fact: "Social Fact: Secondhand smoke is also dangerous, harming friends and family around you." },
  { icon: 'target', fact: "Challenge: Name one healthy activity you can do instead of smoking. Move forward 1 space!" },
  { icon: 'warning', fact: "Myth: 'Light' cigarettes are safer. Truth: They are just as harmful." },
  { icon: 'brain', fact: "Brain Fact: Nicotine addiction is powerful. It rewires your brain to crave more." },
  { icon: 'skull', fact: "Warning: Smoking is the leading cause of preventable death worldwide." },
  { icon: 'lungs', fact: "Health Fact: After 1 year of quitting, your risk of heart disease is cut in half." },
  { icon: 'handshake', fact: "Support: Telling friends and family you're quitting can increase your chances of success." },
  { icon: 'no_vape', fact: "Myth: Vaping is harmless. Truth: Vapes can contain nicotine and other toxic chemicals." },
  { icon: 'thumb', fact: "Benefit: Quitting smoking improves your sense of taste and smell." },
  { icon: 'run', fact: "Health Fact: Your lung function can improve by up to 30% within a few months of quitting." },
  { icon: 'target', fact: "Challenge: Think of a reason YOU want to quit. This is your motivation!" },
  { icon: 'tree', fact: "Fact: Tobacco farming causes deforestation and pollutes the environment." },
  { icon: 'sparkle', fact: "Benefit: Your skin and hair will look healthier after you quit." },
  { icon: 'trophy', fact: "You're close! Keep up the great work on your journey.", isSpecial: true },
];

export const NARRATIVE_STORIES: StoriesData = {
  low: [
    {
      subheading: "Sensory Triggers",
      title: "The Rickshaw Stand Smell",
      content: "Mehul waited for his auto every morning. One day a group nearby lit cigarettes. The strong smell made him cough. Instead of feeling tempted, he thought, “If it smells this bad outside, imagine what it does inside the body.” He quickly moved away and felt proud of himself."
    },
    {
      subheading: "Duty-Related Stress",
      title: "The Nursing Intern’s Choice",
      content: "Suhani had a long, tiring shift in the ICU. Some seniors smoked after duty to “relax.” She was tired too, but she chose to sit in the canteen and drink lemon water. She told herself, “I take care of sick people—I must take care of myself too.”"
    },
    {
      subheading: "Habit Control",
      title: "The Break-Time Ritual",
      content: "Karthik always joined his colleagues during their smoke break, but he never smoked. One day they teased him, “Take just one puff!” He smiled and said, “Coffee is my habit. That’s enough for me.” He kept the break-time fun—but stayed tobacco-free."
    },
    {
      subheading: "Health Awareness",
      title: "The College Lecture That Stuck",
      content: "In class, Aisha saw pictures of tobacco-damaged mouths. Her friends laughed about the “scary photos,” but Aisha felt worried. She told her younger brother, “If anyone ever offers you tobacco, remember these pictures.” That lesson protected her too."
    },
    {
      subheading: "Family/Social Impact",
      title: "Grandfather’s Story",
      content: "Rohan’s grandfather had lost many teeth because he chewed tobacco long ago. Whenever Rohan saw him struggling with dentures, he silently promised himself: “I will never go through this.”"
    },
    {
      subheading: "Readiness to Change",
      title: "The App Reminder",
      content: "Pooja used a health app that sent small reminders like “Today’s choice shapes tomorrow.” She never used tobacco, but the reminders made her stronger in her decision. She felt confident to say “no” anytime."
    }
  ],
  moderate: [
    {
      subheading: "Sensory Triggers",
      title: "The Tea-Stall Temptation",
      content: "Raj often smoked a little with friends at the tea stall. After taking TRISE, he realised the smell after chai made him want to smoke. So one evening, he stepped aside and said, “I’ll join once you finish.” The smell was still there—but he handled it better."
    },
    {
      subheading: "Duty-Related Stress",
      title: "The Night-Shift Cop",
      content: "Inspector Lakhan worked long night shifts. After stressful events, many colleagues smoked. He felt like smoking too. But he remembered TRISE showed stress as his main risk. He drank water, breathed slowly, and walked for two minutes instead. Not perfect—but a good start."
    },
    {
      subheading: "Habit Control",
      title: "The Bus Driver’s Routine",
      content: "Manju took gutka after long bus routes to “stay awake.” One day he saw a small sore in his mouth and got scared. He slowly reduced the habit—skipping morning gutka first, then afternoon. Small steps gave him control."
    },
    {
      subheading: "Health Awareness",
      title: "The Dental Camp Realisation",
      content: "While helping at a dental camp, Megha saw pictures of early mouth cancer. She didn’t use tobacco often, only at festivals. But that day she realized, “Even sometimes is risky.” She decided to stop completely."
    },
    {
      subheading: "Family/Social Impact",
      title: "The Cousin’s Promise",
      content: "Arvind enjoyed khaini during cricket matches. One day his 10-year-old cousin asked, “Bhaiya, why do you eat that? Teacher said it causes cancer.” Arvind felt ashamed. He promised her he would reduce—and he kept that promise."
    },
    {
      subheading: "Readiness to Change",
      title: "The Office Workshop",
      content: "During a health workshop, Vikas filled a form about tobacco. He realised he said “sometimes” to many risky situations. When the trainer asked who wanted to try reducing, Vikas raised his hand. He wasn’t ready to quit fully—but he was ready to improve."
    }
  ],
  high: [
    {
      subheading: "Sensory Triggers",
      title: "The Automatic Reaction",
      content: "Pradeep, a warehouse worker, reached for his bidi the moment he smelled smoke. It was automatic—like a reflex. One day he was coughing badly when he noticed a small child covering his nose. Pradeep suddenly felt ashamed. A small moment—but it shook him."
    },
    {
      subheading: "Duty-Related Stress",
      title: "The Ward Boy’s Burden",
      content: "Suresh worked in a crowded government hospital. Long hours and stress made tobacco his only escape. One day he saw a cancer patient his own age struggling to breathe. It hit him hard. That night he sat alone and cried, realising he needed help. This was his turning point."
    },
    {
      subheading: "Habit Control",
      title: "The Factory Worker’s Chain",
      content: "Harish chewed tobacco 7–8 times a day. It wasn’t fun anymore—it was addiction. One morning he forgot his pouch and felt restless, angry, and shaky. He finally admitted, “This habit controls me.” That honesty opened the door to change."
    },
    {
      subheading: "Health Awareness",
      title: "The Mirror Moment",
      content: "Shalini saw a white patch inside her cheek. She ignored it for months. When it became painful, she went to a dentist. The doctor said it could turn dangerous if she continued tobacco. That night she cried and said, “I wish I had stopped earlier.” Fear pushed her toward help."
    },
    {
      subheading: "Family/Social Impact",
      title: "The Daughter’s Question",
      content: "Nagendra came home from work and hugged his little daughter. She asked softly, “Papa, why does your mouth smell bad?” Her innocent question broke his heart. That night he threw away all his tobacco. Not because of fear—because of love."
    },
    {
      subheading: "Readiness to Change",
      title: "The Turning Point at the Clinic",
      content: "Amjad visited a dentist because of bleeding from an ulcer in the mouth. The dentist explained gently that tobacco had hurt his mouth more than he realised. Amjad got scared—but also determined. He said, “Doctor, I’m ready to stop. Tell me what to do.” That moment became the start of his recovery."
    }
  ]
};

const EN_OPTIONS: QuestionOption[] = [
  { value: 0, label: 'Never / Not at all true' },
  { value: 1, label: 'Rarely / Slightly true' },
  { value: 2, label: 'Sometimes / Moderately true' },
  { value: 3, label: 'Often / Very true' }
];

const EN_SECTIONS: QuestionnaireSection[] = [
  {
    section: 'A',
    sectionName: 'Sensory & Context Triggers',
    intro: 'These questions explore if certain situations or times make you crave or use tobacco.',
    questions: [
      'Do you feel a strong urge for tobacco when you smell or see others using it?',
      'Does being in places where others are using tobacco make you feel like you should also use it?',
      'Do certain times of the day (after meals, tea/coffee, or late-night duty) automatically trigger your tobacco use?',
      'Do you feel the urge to use tobacco (cigarettes, gutkha, khaini, beedi) after meals, tea/coffee, or during breaks?'
    ]
  },
  {
    section: 'B',
    sectionName: 'Duty-Related Risk & Stress',
    intro: 'These questions focus on your tobacco use during duty hours or stress.',
    questions: [
      'During long duty hours or night shifts, do you find yourself turning to tobacco for energy or alertness?',
      'Do stressful situations on duty (conflict, heavy workload, emergencies) push you towards using tobacco?',
      'Do you feel tobacco helps you fit in with colleagues or maintain peer acceptance at work?'
    ]
  },
  {
    section: 'C',
    sectionName: 'Control & Habit',
    intro: 'These questions explore automatic use and self-control.',
    questions: [
      'Do your duty routines (breaks, waiting periods, night shifts) make you use tobacco automatically?',
      'When tobacco is not available, do you find it difficult to control the urge or focus on work?'
    ]
  },
  {
    section: 'D',
    sectionName: 'Health Awareness',
    intro: 'These questions explore your awareness of tobacco\'s impact on your health.',
    questions: [
      'Have you noticed mouth ulcers, gum bleeding, or dental stains related to tobacco use?',
      'Do you believe tobacco may affect your fitness for duty (breathlessness, stamina, performance)?',
      'Do you feel tobacco use affects your appearance or confidence (breath, teeth, face)?'
    ]
  },
  {
    section: 'E',
    sectionName: 'Family & Social Impact',
    intro: 'These questions explore how your tobacco use affects people around you.',
    questions: [
      'Do family members or children notice and comment on your tobacco use?',
      'Do you feel your tobacco use may influence younger family members or colleagues to start?',
      'Do you hide or minimize your tobacco use from family or children?'
    ]
  },
  {
    section: 'F',
    sectionName: 'Behavioural Readiness',
    intro: 'These questions measure your willingness to reduce or quit.',
    questions: [
      'If offered support (counselling, quit-line, peer guidance), would you be willing to try reducing or quitting tobacco?',
      'Would you consider replacing tobacco with healthier alternatives during duty hours?',
      'If reminders or alerts were sent to your phone, would you use them to reduce or quit tobacco?'
    ]
  }
];

const HI_OPTIONS: QuestionOption[] = [
  { value: 0, label: 'कभी नहीं / बिल्कुल भी सच नहीं' },
  { value: 1, label: 'शायद ही कभी / थोड़ा सच' },
  { value: 2, label: 'कभी-कभी / मध्यम रूप से सच' },
  { value: 3, label: 'अक्सर / बहुत सच' }
];

const KN_OPTIONS: QuestionOption[] = [
  { value: 0, label: 'ಎಂದಿಗೂ ಇಲ್ಲ / ಸತ್ಯವಲ್ಲ' },
  { value: 1, label: 'ಅಪರೂಪಕ್ಕೆ / ಸ್ವಲ್ಪ ಮಟ್ಟಿಗೆ ಸತ್ಯ' },
  { value: 2, label: 'ಕೆಲವೊಮ್ಮೆ / ಸಾಧಾರಣ ಸತ್ಯ' },
  { value: 3, label: 'ಆಗಾಗ್ಗೆ / ಸಂಪೂರ್ಣ ಸತ್ಯ' }
];

const TA_OPTIONS: QuestionOption[] = [
  { value: 0, label: 'ஒருபோதும் இல்லை / உண்மையில்லை' },
  { value: 1, label: 'அரிதாக / ஓரளவு உண்மை' },
  { value: 2, label: 'சில நேரங்களில் / மிதமான உண்மை' },
  { value: 3, label: 'அடிக்கடி / மிகவும் உண்மை' }
];

const TE_OPTIONS: QuestionOption[] = [
  { value: 0, label: 'ఎప్పుడూ లేదు / అసలు నిజం కాదు' },
  { value: 1, label: 'అరుదుగా / కొంచెం నిజం' },
  { value: 2, label: 'కొన్నిసార్లు / మధ్యస్తంగా నిజం' },
  { value: 3, label: 'తరచుగా / చాలా నిజం' }
];

const ML_OPTIONS: QuestionOption[] = [
  { value: 0, label: 'ഒരിക്കലുമില്ല / സത്യമല്ല' },
  { value: 1, label: 'അപൂർവ്വമായി / അല്പം സത്യം' },
  { value: 2, label: 'ചിലപ്പോൾ / മിതമായ സത്യം' },
  { value: 3, label: 'മിക്കപ്പോഴും / വളരെ സത്യം' }
];

export const TRANSLATIONS: Record<LanguageCode, TranslationContent> = {
  en: {
    ui: {
      title: "NICO-SHIELD Risk Checker",
      subtitle: "Identify your risk through self-evaluation.",
      getStarted: "GET STARTED",
      welcome: "Welcome to the Assessment",
      description: "An interactive tool designed to help you understand your personal risk related to tobacco use.",
      whatYouGet: "You will receive:",
      whatYouGetList: ["Your tobacco-related risk level", "A snapshot of your readiness to quit", "Simple tips and resources"],
      scoring: "Scoring Scale:",
      disclaimer: "⚠️ Disclaimer: This is not a medical diagnosis. For professional advice, consult a doctor.",
      agreeLabel: "I have read and understood all instructions",
      back: "Back",
      next: "Next",
      nextSection: "Next Section",
      prev: "Previous",
      calculate: "Calculate Results",
      aboutYou: "About You",
      age: "Age Group",
      gender: "Gender",
      fillingFor: "Who are you filling this for?",
      select: "Select...",
      startQuiz: "Start Questionnaire",
      note: "Your responses are anonymous and help us understand risk patterns.",
      resultsTitle: "Your Assessment Results",
      coreRisk: "Core Risk Level",
      readiness: "Readiness to Change",
      breakdown: "Risk Breakdown by Category",
      saveReport: "Save Report",
      continue: "Continue to Narrative Stories",
      alertInstruction: "Please confirm that you have read all the instructions",
      alertFields: "Please fill in all fields.",
      alertAnswers: "Please answer all questions in this section before proceeding.",
      saving: "Saving data...",
      savedSuccess: "Data saved successfully!",
      savedError: "Error saving data. Please try again."
    },
    options: EN_OPTIONS,
    sections: EN_SECTIONS
  },
  hi: {
    ui: {
      title: "NICO-SHIELD Risk Checker",
      subtitle: "Identify your risk through self-evaluation.",
      getStarted: "GET STARTED",
      welcome: "मूल्यांकन में आपका स्वागत है",
      description: "यह एक इंटरैक्टिव टूल है जिसे तंबाकू के उपयोग से संबंधित आपके व्यक्तिगत जोखिम को समझने में मदद करने के लिए डिज़ाइन किया गया है।",
      whatYouGet: "आपको प्राप्त होगा:",
      whatYouGetList: ["आपका तंबाकू-संबंधित जोखिम स्तर", "छोड़ने की आपकी तत्परता", "सरल सुझाव और संसाधन"],
      scoring: "स्कोरिंग पैमाना:",
      disclaimer: "⚠️ अस्वीकरण: यह चिकित्सा निदान नहीं है। पेशेवर सलाह के लिए डॉक्टर से परामर्श लें।",
      agreeLabel: "मैंने सभी निर्देश पढ़ और समझ लिए हैं",
      back: "पीछे",
      next: "अगला",
      nextSection: "अगला भाग",
      prev: "पिछला",
      calculate: "परिणाम देखें",
      aboutYou: "आपके बारे में",
      age: "आयु वर्ग",
      gender: "लिंग",
      fillingFor: "आप यह किसके लिए भर रहे हैं?",
      select: "चुनें...",
      startQuiz: "प्रश्नावली शुरू करें",
      note: "आपकी प्रतिक्रियाएं गोपनीय हैं।",
      resultsTitle: "आपके मूल्यांकन परिणाम",
      coreRisk: "मुख्य जोखिम स्तर",
      readiness: "बदलने की तत्परता",
      breakdown: "श्रेणी के अनुसार जोखिम विवरण",
      saveReport: "रिपोर्ट सहेजें",
      continue: "कहानियों की ओर बढ़ें",
      alertInstruction: "कृपया पुष्टि करें कि आपने सभी निर्देश पढ़ लिए हैं",
      alertFields: "कृपया सभी फ़ील्ड भरें।",
      alertAnswers: "कृपया आगे बढ़ने से पहले इस अनुभाग के सभी प्रश्नों का उत्तर दें।",
      saving: "सहेजा जा रहा है...",
      savedSuccess: "डेटा सफलतापूर्वक सहेजा गया!",
      savedError: "डेटा सहेजने में त्रुटि।"
    },
    options: HI_OPTIONS,
    sections: [
      {
        section: 'A',
        sectionName: 'संवेदी और संदर्भ ट्रिगर',
        intro: 'ये प्रश्न यह पता लगाते हैं कि क्या कुछ स्थितियां या समय आपको तंबाकू की लालसा या उपयोग करने के लिए मजबूर करते हैं।',
        questions: [
          'क्या आपको दूसरों को तंबाकू का उपयोग करते हुए देखकर या सूंघकर तंबाकू की तीव्र इच्छा होती है?',
          'क्या ऐसी जगहों पर होना जहां दूसरे तंबाकू का उपयोग कर रहे हैं, आपको भी इसका उपयोग करने जैसा महसूस कराता है?',
          'क्या दिन का कोई समय (भोजन के बाद, चाय/कॉफी, या देर रात की ड्यूटी) स्वचालित रूप से आपके तंबाकू के उपयोग को ट्रिगर करता है?',
          'क्या आप भोजन, चाय/कॉफी के बाद या ब्रेक के दौरान तंबाकू (सिगरेट, गुटका, खैनी, बीड़ी) का उपयोग करने की इच्छा महसूस करते हैं?'
        ]
      },
      {
        section: 'B',
        sectionName: 'ड्यूटी-संबंधित जोखिम और तनाव',
        intro: 'ये प्रश्न ड्यूटी के घंटों या तनाव के दौरान आपके तंबाकू के उपयोग पर केंद्रित हैं।',
        questions: [
          'लंबी ड्यूटी या नाइट शिफ्ट के दौरान, क्या आप ऊर्जा या सतर्कता के लिए तंबाकू का सहारा लेते हैं?',
          'क्या ड्यूटी पर तनावपूर्ण स्थितियां (संघर्ष, भारी काम, आपात स्थिति) आपको तंबाकू का उपयोग करने के लिए प्रेरित करती हैं?',
          'क्या आपको लगता है कि तंबाकू आपको सहकर्मियों के साथ घुलने-मिलने या काम पर स्वीकृति बनाए रखने में मदद करता है?'
        ]
      },
      {
        section: 'C',
        sectionName: 'नियंत्रण और आदत',
        intro: 'ये प्रश्न स्वचालित उपयोग और आत्म-नियंत्रण का पता लगाते हैं।',
        questions: [
          'क्या आपकी ड्यूटी की दिनचर्या (ब्रेक, प्रतीक्षा अवधि, नाइट शिफ्ट) आपको स्वचालित रूप से तंबाकू का उपयोग करने के लिए प्रेरित करती है?',
          'जब तंबाकू उपलब्ध नहीं होता है, तो क्या आपको इच्छा को नियंत्रित करने या काम पर ध्यान केंद्रित करने में कठिनाई होती है?'
        ]
      },
      {
        section: 'D',
        sectionName: 'स्वास्थ्य जागरूकता',
        intro: 'ये प्रश्न आपके स्वास्थ्य पर तंबाकू के प्रभाव के बारे में आपकी जागरूकता का पता लगाते हैं।',
        questions: [
          'क्या आपने तंबाकू के उपयोग से संबंधित मुंह के छाले, मसूड़ों से खून आना या दांतों के दाग देखे हैं?',
          'क्या आपको लगता है कि तंबाकू आपकी ड्यूटी के लिए फिटनेस (सांस फूलना, सहनशक्ति, प्रदर्शन) को प्रभावित कर सकता है?',
          'क्या आपको लगता है कि तंबाकू का उपयोग आपकी उपस्थिति या आत्मविश्वास (सांस, दांत, चेहरा) को प्रभावित करता है?'
        ]
      },
      {
        section: 'E',
        sectionName: 'पारिवारिक और सामाजिक प्रभाव',
        intro: 'ये प्रश्न यह पता लगाते हैं कि आपका तंबाकू उपयोग आपके आसपास के लोगों को कैसे प्रभावित करता है।',
        questions: [
          'क्या परिवार के सदस्य या बच्चे आपके तंबाकू के उपयोग पर ध्यान देते हैं और टिप्पणी करते हैं?',
          'क्या आपको लगता है कि आपका तंबाकू उपयोग परिवार के छोटे सदस्यों या सहकर्मियों को शुरू करने के लिए प्रभावित कर सकता है?',
          'क्या आप परिवार या बच्चों से अपने तंबाकू के उपयोग को छिपाते हैं या कम करते हैं?'
        ]
      },
      {
        section: 'F',
        sectionName: 'व्यवहार परिवर्तन तत्परता',
        intro: 'ये प्रश्न तंबाकू को कम करने या छोड़ने की आपकी इच्छा को मापते हैं।',
        questions: [
          'यदि समर्थन (परामर्श, क्विट-लाइन, सहकर्मी मार्गदर्शन) की पेशकश की जाए, तो क्या आप तंबाकू को कम करने या छोड़ने का प्रयास करने के लिए तैयार होंगे?',
          'क्या आप ड्यूटी के घंटों के दौरान तंबाकू को स्वस्थ विकल्पों से बदलने पर विचार करेंगे?',
          'यदि आपके फोन पर रिमाइंडर या अलर्ट भेजे जाएं, तो क्या आप तंबाकू को कम करने या छोड़ने के लिए उनका उपयोग करेंगे?'
        ]
      }
    ]
  },
  kn: {
    ui: {
      title: "NICO-SHIELD Risk Checker",
      subtitle: "Identify your risk through self-evaluation.",
      getStarted: "GET STARTED",
      welcome: "ಮೌಲ್ಯಮಾಪನಕ್ಕೆ ಸುಸ್ವಾಗತ",
      description: "ತಂಬಾಕು ಬಳಕೆಗೆ ಸಂಬಂಧಿಸಿದ ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಅಪಾಯವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಸಂವಾದಾತ್ಮಕ ಸಾಧನ.",
      whatYouGet: "ನೀವು ಪಡೆಯುತ್ತೀರಿ:",
      whatYouGetList: ["ನಿಮ್ಮ ತಂಬಾಕು ಸಂಬಂಧಿತ ಅಪಾಯದ ಮಟ್ಟ", "ತ್ಯಜಿಸಲು ನಿಮ್ಮ ಸಿದ್ಧತೆ", "ಸರಳ ಸಲಹೆಗಳು ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳು"],
      scoring: "ಸ್ಕೋರಿಂಗ್ ಸ್ಕೇಲ್:",
      disclaimer: "⚠️ ಹಕ್ಕು ನಿರಾಕರಣೆ: ಇದು ವೈದ್ಯಕೀಯ ರೋಗನಿರ್ಣಯವಲ್ಲ. ವೃತ್ತಿಪರ ಸಲಹೆಗಾಗಿ, ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
      agreeLabel: "ನಾನು ಎಲ್ಲಾ ಸೂಚನೆಗಳನ್ನು ಓದಿದ್ದೇನೆ ಮತ್ತು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ",
      back: "ಹಿಂದೆ",
      next: "ಮುಂದೆ",
      nextSection: "ಮುಂದಿನ ವಿಭಾಗ",
      prev: "ಹಿಂದಿನ",
      calculate: "ಫಲಿತಾಂಶಗಳನ್ನು ಲೆಕ್ಕಹಾಕಿ",
      aboutYou: "ನಿಮ್ಮ ಬಗ್ಗೆ",
      age: "ವಯಸ್ಸು",
      gender: "ಲಿಂಗ",
      fillingFor: "ಯಾರಿಗಾಗಿ ತುಂಬುತ್ತಿದ್ದೀರಿ?",
      select: "ಆರಿಸಿ...",
      startQuiz: "ಪ್ರಶ್ನಾವಳಿಯನ್ನು ಪ್ರಾರಂಭಿಸಿ",
      note: "ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಗಳು ಅನಾಮಧೇಯವಾಗಿವೆ.",
      resultsTitle: "ನಿಮ್ಮ ಮೌಲ್ಯಮಾಪನ ಫಲಿತಾಂಶಗಳು",
      coreRisk: "ಅಪಾಯದ ಮಟ್ಟ",
      readiness: "ಬದಲಾವಣೆಗೆ ಸಿದ್ಧತೆ",
      breakdown: "ವರ್ಗದ ಪ್ರಕಾರ ಅಪಾಯದ ವಿವರಗಳು",
      saveReport: "ವರದಿಯನ್ನು ಉಳಿಸಿ",
      continue: "ಮುಂದುವರೆಯಿರಿ",
      alertInstruction: "ದಯವಿಟ್ಟು ನೀವು ಎಲ್ಲಾ ಸೂಚನೆಗಳನ್ನು ಓದಿದ್ದೀರಿ ಎಂದು ಖಚಿತಪಡಿಸಿ",
      alertFields: "ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.",
      alertAnswers: "ಮುಂದುವರಿಯುವ ಮೊದಲು ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿ.",
      saving: "ಉಳಿಸಲಾಗುತ್ತಿದೆ...",
      savedSuccess: "ಡೇಟಾ ಯಶಸ್ವಿಯಾಗಿ ಉಳಿಸಲಾಗಿದೆ!",
      savedError: "ದೋಷ."
    },
    options: KN_OPTIONS,
    sections: [
      {
        section: 'A',
        sectionName: 'ಸಂವೇದನಾ ಮತ್ತು ಸಂದರ್ಭ',
        intro: 'ಕೆಲವು ಸಂದರ್ಭಗಳು ನಿಮ್ಮನ್ನು ತಂಬಾಕು ಬಳಸಲು ಪ್ರೇರೇಪಿಸುತ್ತವೆಯೇ?',
        questions: [
          'ಇತರರು ತಂಬಾಕು ಬಳಸುವುದನ್ನು ನೋಡಿದಾಗ ಅಥವಾ ವಾಸನೆ ಬಂದಾಗ ನಿಮಗೆ ಬಲವಾದ ಬಯಕೆ ಉಂಟಾಗುತ್ತದೆಯೇ?',
          'ಇತರರು ಬಳಸುವ ಸ್ಥಳಗಳಲ್ಲಿ ನೀವೂ ಬಳಸಬೇಕೆಂದು ಅನಿಸುತ್ತದೆಯೇ?',
          'ದಿನದ ಕೆಲವು ಸಮಯಗಳು (ಊಟದ ನಂತರ, ಕಾಫಿ) ನಿಮ್ಮನ್ನು ಪ್ರೇರೇಪಿಸುತ್ತವೆಯೇ?',
          'ಊಟದ ನಂತರ ಅಥವಾ ವಿರಾಮದ ಸಮಯದಲ್ಲಿ ತಂಬಾಕು ಬಳಸುವ ಬಯಕೆ ಇದೆಯೇ?'
        ]
      },
      {
        section: 'B',
        sectionName: 'ಕೆಲಸದ ಒತ್ತಡ',
        intro: 'ಕೆಲಸದ ಸಮಯದಲ್ಲಿ ನಿಮ್ಮ ತಂಬಾಕು ಬಳಕೆ.',
        questions: [
          'ದೀರ್ಘ ಕೆಲಸದ ಸಮಯದಲ್ಲಿ ಶಕ್ತಿಗಾಗಿ ತಂಬಾಕು ಬಳಸುತ್ತೀರಾ?',
          'ಒತ್ತಡದ ಸಂದರ್ಭಗಳು ನಿಮ್ಮನ್ನು ತಂಬಾಕು ಬಳಸಲು ತಳ್ಳುತ್ತವೆಯೇ?',
          'ಸಹೋದ್ಯೋಗಿಗಳೊಂದಿಗೆ ಬೆರೆಯಲು ತಂಬಾಕು ಸಹಾಯ ಮಾಡುತ್ತದೆ ಎಂದು ನೀವು ಭಾವಿಸುತ್ತೀರಾ?'
        ]
      },
      {
        section: 'C',
        sectionName: 'ನಿಯಂತ್ರಣ ಮತ್ತು ಅಭ್ಯಾಸ',
        intro: 'ಸ್ವಯಂ ನಿಯಂತ್ರಣದ ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳು.',
        questions: [
          'ನಿಮ್ಮ ದಿನಚರಿ (ವಿರಾಮಗಳು) ನಿಮ್ಮನ್ನು ತಂಬಾಕು ಬಳಸಲು ಪ್ರೇರೇಪಿಸುತ್ತದೆಯೇ?',
          'ತಂಬಾಕು ಇಲ್ಲದಿದ್ದಾಗ ಕೆಲಸದ ಮೇಲೆ ಗಮನಹರಿಸಲು ಕಷ್ಟವಾಗುತ್ತದೆಯೇ?'
        ]
      },
      {
        section: 'D',
        sectionName: 'ಆರೋಗ್ಯ ಜಾಗೃತಿ',
        intro: 'ಆರೋಗ್ಯದ ಮೇಲಿನ ಪರಿಣಾಮಗಳ ಅರಿವು.',
        questions: [
          'ಬಾಯಿಯಲ್ಲಿ ಹುಣ್ಣುಗಳು ಅಥವಾ ಹಲ್ಲಿನ ಕಲೆಗಳನ್ನು ಗಮನಿಸಿದ್ದೀರಾ?',
          'ಇದು ನಿಮ್ಮ ದೈಹಿಕ ಸಾಮರ್ಥ್ಯದ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ ಎಂದು ಭಾವಿಸುತ್ತೀರಾ?',
          'ಇದು ನಿಮ್ಮ ನೋಟ ಅಥವಾ ಆತ್ಮವಿಶ್ವಾಸದ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ ಎಂದು ಭಾವಿಸುತ್ತೀರಾ?'
        ]
      },
      {
        section: 'E',
        sectionName: 'ಕುಟುಂಬ ಮತ್ತು ಸಾಮಾಜಿಕ',
        intro: 'ಇತರರ ಮೇಲಿನ ಪರಿಣಾಮ.',
        questions: [
          'ಕುಟುಂಬದವರು ನಿಮ್ಮ ತಂಬಾಕು ಬಳಕೆಯ ಬಗ್ಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತಾರೆಯೇ?',
          'ನಿಮ್ಮ ಬಳಕೆ ಕಿರಿಯರ ಮೇಲೆ ಪ್ರಭಾವ ಬೀರಬಹುದು ಎಂದು ಭಾವಿಸುತ್ತೀರಾ?',
          'ನೀವು ಕುಟುಂಬದಿಂದ ತಂಬಾಕು ಬಳಕೆಯನ್ನು ಮರೆಮಾಡುತ್ತೀರಾ?'
        ]
      },
      {
        section: 'F',
        sectionName: 'ಬದಲಾವಣೆಗೆ ಸಿದ್ಧತೆ',
        intro: 'ತ್ಯಜಿಸುವ ಇಚ್ಛೆ.',
        questions: [
          'ಬೆಂಬಲ ಸಿಕ್ಕರೆ, ನೀವು ತಂಬಾಕು ಬಿಡಲು ಪ್ರಯತ್ನಿಸುತ್ತೀರಾ?',
          'ಕೆಲಸದ ಸಮಯದಲ್ಲಿ ಆರೋಗ್ಯಕರ ಪರ್ಯಾಯಗಳನ್ನು ಬಳಸಲು ನೀವು ಸಿದ್ಧರಿದ್ದೀರಾ?',
          'ಜ್ಞಾಪನೆಗಳು ಬಂದರೆ, ನೀವು ತಂಬಾಕು ಕಡಿಮೆ ಮಾಡಲು ಪ್ರಯತ್ನಿಸುತ್ತೀರಾ?'
        ]
      }
    ]
  },
  ta: {
    ui: {
      title: "NICO-SHIELD Risk Checker",
      subtitle: "Identify your risk through self-evaluation.",
      getStarted: "GET STARTED",
      welcome: "மதிப்பீட்டிற்கு வரவேற்கிறோம்",
      description: "புகையிலை பயன்பாடு தொடர்பான உங்கள் தனிப்பட்ட ஆபத்தைப் புரிந்துகொள்ள உதவும் ஊடாடும் கருவி.",
      whatYouGet: "நீங்கள் பெறுவீர்கள்:",
      whatYouGetList: ["உங்கள் புகையிலை தொடர்பான ஆபத்து நிலை", "கைவிடுவதற்கு உங்கள் தயார்நிலை", "எளிய குறிப்புகள் மற்றும் வளங்கள்"],
      scoring: "மதிப்பெண் அளவு:",
      disclaimer: "⚠️ மறுப்பு: இது மருத்துவ நோயறிதல் அல்ல. தொழில்முறை ஆலோசனைக்கு, மருத்துவரை அணுகவும்.",
      agreeLabel: "எல்லா வழிமுறைகளையும் படித்து புரிந்து கொண்டேன்",
      back: "பின்",
      next: "அடுத்து",
      nextSection: "அடுத்த பிரிவு",
      prev: "முந்தைய",
      calculate: "முடிவுகளைக் கணக்கிடு",
      aboutYou: "உங்களைப் பற்றி",
      age: "வயது",
      gender: "பாலினம்",
      fillingFor: "யாருக்காக நிரப்புகிறீர்கள்?",
      select: "தேர்ந்தெடு...",
      startQuiz: "வினாடி வினா தொடங்கவும்",
      note: "உங்கள் பதில்கள் அநாமதேயமானவை.",
      resultsTitle: "உங்கள் மதிப்பீட்டு முடிவுகள்",
      coreRisk: "ஆபத்து நிலை",
      readiness: "மாற்றத்திற்கான தயார்நிலை",
      breakdown: "வகை வாரியாக ஆபத்து விவரம்",
      saveReport: "அறிக்கையைச் சேமி",
      continue: "தொடரவும்",
      alertInstruction: "எல்லா வழிமுறைகளையும் படித்துவிட்டீர்கள் என்பதை உறுதிப்படுத்தவும்",
      alertFields: "எல்லா புலங்களையும் நிரப்பவும்.",
      alertAnswers: "தொடர்வதற்கு முன் எல்லா கேள்விகளுக்கும் பதிலளிக்கவும்.",
      saving: "சேமிக்கிறது...",
      savedSuccess: "வெற்றிகரமாக சேமிக்கப்பட்டது!",
      savedError: "பிழை."
    },
    options: TA_OPTIONS,
    sections: [
      {
        section: 'A',
        sectionName: 'தூண்டுதல்கள்',
        intro: 'சில சூழ்நிலைகள் உங்களைத் தூண்டுகின்றனவா?',
        questions: [
          'பிறர் பயன்படுத்துவதைப் பார்க்கும் போது உங்களுக்குத் தோன்றுகிறதா?',
          'பிறர் பயன்படுத்தும் இடங்களில் நீங்களும் பயன்படுத்தத் தோன்றுகிறதா?',
          'உணவுக்குப் பின் அல்லது காபி குடித்த பின் பயன்படுத்தத் தோன்றுகிறதா?',
          'வேலை இடைவேளையின் போது பயன்படுத்தத் தோன்றுகிறதா?'
        ]
      },
      {
        section: 'B',
        sectionName: 'வேலை மற்றும் மன அழுத்தம்',
        intro: 'வேலை நேரத்தில் உங்கள் பயன்பாடு.',
        questions: [
          'வேலை நேரத்தில் சுறுசுறுப்புக்காகப் பயன்படுத்துகிறீர்களா?',
          'மன அழுத்தம் உங்களைப் பயன்படுத்தத் தூண்டுகிறதா?',
          'நண்பர்களுடன் இணைய இது உதவுகிறதா?'
        ]
      },
      {
        section: 'C',
        sectionName: 'கட்டுப்பாடு',
        intro: 'சுய கட்டுப்பாடு பற்றிய கேள்விகள்.',
        questions: [
          'உங்கள் தினசரி பழக்கம் உங்களைத் தூண்டுகிறதா?',
          'புகையிலை இல்லாதபோது வேலையில் கவனம் செலுத்துவது கடினமா?'
        ]
      },
      {
        section: 'D',
        sectionName: 'சுகாதார விழிப்புணர்வு',
        intro: 'உடல்நலம் பற்றிய விழிப்புணர்வு.',
        questions: [
          'வாயில் புண்கள் அல்லது கறைகளை கவனித்தீர்களா?',
          'இது உங்கள் உடல் தகுதியைப் பாதிப்பதாக நினைக்கிறீர்களா?',
          'இது உங்கள் தோற்றத்தைப் பாதிப்பதாக நினைக்கிறீர்களா?'
        ]
      },
      {
        section: 'E',
        sectionName: 'குடும்ப தாக்கம்',
        intro: 'குடும்பத்தின் மீதான தாக்கம்.',
        questions: [
          'உங்கள் குடும்பத்தினர் இதைப் பற்றிப் பேசுகிறார்களா?',
          'உங்கள் பழக்கம் குழந்தைகளைப் பாதிக்கும் என்று நினைக்கிறீர்களா?',
          'குடும்பத்தினரிடம் இருந்து மறைக்கிறீர்களா?'
        ]
      },
      {
        section: 'F',
        sectionName: 'மாற்றத்திற்கான தயார்நிலை',
        intro: 'கைவிடுவதற்கான விருப்பம்.',
        questions: [
          'உதவி கிடைத்தால், நீங்கள் நிறுத்த முயற்சிப்பீர்களா?',
          'ஆரோக்கியமான மாற்றுகளைப் பயன்படுத்தத் தயாரா?',
          'நினைவூட்டல்கள் வந்தால், குறைக்க முயற்சிப்பீர்களா?'
        ]
      }
    ]
  },
  te: {
    ui: {
      title: "NICO-SHIELD Risk Checker",
      subtitle: "Identify your risk through self-evaluation.",
      getStarted: "GET STARTED",
      welcome: "మూల్యాంకనానికి స్వాగతం",
      description: "పొగాకు వాడకానికి సంబంధించిన మీ వ్యక్తిగత ప్రమాదాన్ని అర్థం చేసుకోవడానికి రూపొందించిన ఇంటరాక్టివ్ టూల్.",
      whatYouGet: "మీరు పొందుతారు:",
      whatYouGetList: ["మీ పొగాకు సంబంధిత ప్రమాద స్థాయి", "మానేయడానికి మీ సంసిద్ధత", "సాధారణ చిట్కాలు మరియు వనరులు"],
      scoring: "స్కోరింగ్ స్కేల్:",
      disclaimer: "⚠️ నిరాకరణ: ఇది వైద్య నిర్ధారణ కాదు. వృత్తిపరమైన సలహా కోసం, డాక్టర్‌ను సంప్రదించండి.",
      agreeLabel: "నేను అన్ని సూచనలను చదివి అర్థం చేసుకున్నాను",
      back: "వెనుకకు",
      next: "తరువాత",
      nextSection: "తదుపరి విభాగం",
      prev: "ముందర",
      calculate: "ఫలితాలను లెక్కించండి",
      aboutYou: "మీ గురించి",
      age: "వయస్సు",
      gender: "లింగం",
      fillingFor: "మీరు ఎవరి కోసం నింపుతున్నారు?",
      select: "ఎంచుకోండి...",
      startQuiz: "ప్రశ్నావళిని ప్రారంభించండి",
      note: "మీ స్పందనలు అనామధేయంగా ఉంటాయి.",
      resultsTitle: "మీ మూల్యాంకన ఫలితాలు",
      coreRisk: "ప్రమాద స్థాయి",
      readiness: "మార్పుకు సంసిద్ధత",
      breakdown: "వర్గం వారీగా ప్రమాద వివరాలు",
      saveReport: "నివేదికను సేవ్ చేయండి",
      continue: "కొనసాగించండి",
      alertInstruction: "దయచేసి మీరు అన్ని సూచనలను చదివారని నిర్ధారించండి",
      alertFields: "దయచేసి అన్ని ఫీల్డ్‌లను పూరించండి.",
      alertAnswers: "కొనసాగడానికి ముందు దయచేసి అన్ని ప్రశ్నలకు సమాధానం ఇవ్వండి.",
      saving: "సేవ్ చేస్తోంది...",
      savedSuccess: "విజయవంతంగా సేవ్ చేయబడింది!",
      savedError: "లోపం."
    },
    options: TE_OPTIONS,
    sections: [
      {
        section: 'A',
        sectionName: 'ప్రేరేపించే అంశాలు',
        intro: 'కొన్ని పరిస్థితులు మిమ్మల్ని ప్రేరేపిస్తాయా?',
        questions: [
          'ఇతరులు వాడుతున్నప్పుడు మీకు కోరిక కలుగుతుందా?',
          'ఇతరులు వాడే ప్రదేశాలలో మీరు కూడా వాడాలని అనిపిస్తుందా?',
          'భోజనం తర్వాత లేదా కాఫీ తాగినప్పుడు కోరిక కలుగుతుందా?',
          'పనిలో విరామ సమయంలో వాడాలని అనిపిస్తుందా?'
        ]
      },
      {
        section: 'B',
        sectionName: 'పని మరియు ఒత్తిడి',
        intro: 'పని సమయంలో మీ అలవాటు.',
        questions: [
          'పనిలో చురుకుదనం కోసం వాడుతున్నారా?',
          'ఒత్తిడి మిమ్మల్ని వాడటానికి ప్రేరేపిస్తుందా?',
          'స్నేహితులతో కలవడానికి ఇది సహాయపడుతుందా?'
        ]
      },
      {
        section: 'C',
        sectionName: 'నియంత్రణ',
        intro: 'స్వయం నియంత్రణ.',
        questions: [
          'మీ దినచర్య మిమ్మల్ని ప్రేరేపిస్తుందా?',
          'అది లేనప్పుడు పనిపై దృష్టి పెట్టడం కష్టమా?'
        ]
      },
      {
        section: 'D',
        sectionName: 'ఆరోగ్య అవగాహన',
        intro: 'ఆరోగ్యంపై ప్రభావం.',
        questions: [
          'నోటిలో పుండ్లు లేదా మచ్చలు గమనించారా?',
          'ఇది మీ శారీరక సామర్థ్యాన్ని ప్రభావితం చేస్తుందా?',
          'ఇది మీ రూపాన్ని ప్రభావితం చేస్తుందా?'
        ]
      },
      {
        section: 'E',
        sectionName: 'కుటుంబ ప్రభావం',
        intro: 'కుటుంబంపై ప్రభావం.',
        questions: [
          'మీ కుటుంబ సభ్యులు దీని గురించి మాట్లాడుతారా?',
          'మీ అలవాటు పిల్లలను ప్రభావితం చేస్తుందా?',
          'మీరు కుటుంబం నుండి దాస్తున్నారా?'
        ]
      },
      {
        section: 'F',
        sectionName: 'మార్పుకు సంసిద్ధత',
        intro: 'మానేయాలనే కోరిక.',
        questions: [
          'సహాయం లభిస్తే, మీరు మానేయడానికి ప్రయత్నిస్తారా?',
          'ఆరోగ్యకరమైన ప్రత్యామ్నాయాలను వాడతారా?',
          'గుర్తుచేసే సందేశాలు వస్తే, తగ్గించడానికి ప్రయత్నిస్తారా?'
        ]
      }
    ]
  },
  ml: {
    ui: {
      title: "NICO-SHIELD Risk Checker",
      subtitle: "Identify your risk through self-evaluation.",
      getStarted: "GET STARTED",
      welcome: "വിലയിരുത്തലിലേക്ക് സ്വാഗതം",
      description: "പുകയില ഉപയോഗവുമായി ബന്ധപ്പെട്ട നിങ്ങളുടെ വ്യക്തിപരമായ അപകടസാധ്യത മനസ്സിലാക്കാൻ സഹായിക്കുന്ന ഒരു ഉപകരണം.",
      whatYouGet: "നിങ്ങൾക്ക് ലഭിക്കുന്നത്:",
      whatYouGetList: ["നിങ്ങളുടെ പുകയില സംബന്ധമായ അപകടസാധ്യത നില", "നിർത്താനുള്ള നിങ്ങളുടെ സന്നദ്ധത", "ലളിതമായ നുറുങ്ങുകളും വിഭവങ്ങളും"],
      scoring: "സ്കോറിംഗ് സ്കെയിൽ:",
      disclaimer: "⚠️ നിരാകരണം: ഇതൊരു മെഡിക്കൽ രോഗനിർണയമല്ല. പ്രൊഫഷണൽ ഉപദേശത്തിന് ഡോക്ടറെ സമീപിക്കുക.",
      agreeLabel: "ഞാൻ എല്ലാ നിർദ്ദേശങ്ങളും വായിക്കുകയും മനസ്സിലാക്കുകയും ചെയ്തു",
      back: "തിരികെ",
      next: "അടുത്തത്",
      nextSection: "അടുത്ത വിഭാഗം",
      prev: "മുമ്പത്തെ",
      calculate: "ഫലങ്ങൾ കണക്കാക്കുക",
      aboutYou: "നിങ്ങളെക്കുറിച്ച്",
      age: "വയസ്സ്",
      gender: "ലിംഗഭേദം",
      fillingFor: "നിങ്ങൾ ആർക്കുവേണ്ടിയാണ് ഇത് പൂരിപ്പിക്കുന്നത്?",
      select: "തിരഞ്ഞെടുക്കുക...",
      startQuiz: "ചോദ്യാവലി ആരംഭിക്കുക",
      note: "നിങ്ങളുടെ പ്രതികരണങ്ങൾ അജ്ഞാതമാണ്.",
      resultsTitle: "നിങ്ങളുടെ വിലയിരുത്തൽ ഫലങ്ങൾ",
      coreRisk: "അപകടസാധ്യത നില",
      readiness: "മാറ്റത്തിനുള്ള സന്നദ്ധത",
      breakdown: "വിഭാഗം തിരിച്ചുള്ള അപകടസാധ്യത",
      saveReport: "റിപ്പോർട്ട് സേവ് ചെയ്യുക",
      continue: "തുടരുക",
      alertInstruction: "ദയവായി എല്ലാ നിർദ്ദേശങ്ങളും വായിച്ചുവെന്ന് ഉറപ്പാക്കുക",
      alertFields: "ദയവായി എല്ലാ ഫീൽഡുകളും പൂരിപ്പിക്കുക.",
      alertAnswers: "തുടരുന്നതിന് മുമ്പ് ദയവായി എല്ലാ ചോദ്യങ്ങൾക്കും ഉത്തരം നൽകുക.",
      saving: "സേവ് ചെയ്യുന്നു...",
      savedSuccess: "വിജയകരമായി സേവ് ചെയ്തു!",
      savedError: "പിശക്."
    },
    options: ML_OPTIONS,
    sections: [
      {
        section: 'A',
        sectionName: 'പ്രേരണകൾ',
        intro: 'ചില സാഹചര്യങ്ങൾ നിങ്ങളെ പ്രേരിപ്പിക്കുന്നുണ്ടോ?',
        questions: [
          'മറ്റുള്ളവർ ഉപയോഗിക്കുന്നത് കാണുമ്പോൾ നിങ്ങൾക്ക് ഉപയോഗിക്കാൻ തോന്നാറുണ്ടോ?',
          'മറ്റുള്ളവർ ഉപയോഗിക്കുന്ന സ്ഥലങ്ങളിൽ നിങ്ങളും ഉപയോഗിക്കാൻ ആഗ്രഹിക്കുന്നുണ്ടോ?',
          'ഭക്ഷണത്തിന് ശേഷം അല്ലെങ്കിൽ ചായ കുടിച്ചാൽ ഉപയോഗിക്കാൻ തോന്നാറുണ്ടോ?',
          'ജോലിയിലെ ഇടവേളകളിൽ ഉപയോഗിക്കാൻ തോന്നാറുണ്ടോ?'
        ]
      },
      {
        section: 'B',
        sectionName: 'ജോലിയും സമ്മർദ്ദവും',
        intro: 'ജോലിസ്ഥലത്തെ ഉപയോഗം.',
        questions: [
          'ജോലിസമയത്ത് ഉന്മേഷത്തിനായി ഉപയോഗിക്കാറുണ്ടോ?',
          'മാനസിക സമ്മർദ്ദം നിങ്ങളെ ഉപയോഗിക്കാൻ പ്രേരിപ്പിക്കാറുണ്ടോ?',
          'സുഹൃത്തുക്കളുമായി ഒത്തുചേരാൻ ഇത് സഹായിക്കുന്നുണ്ടോ?'
        ]
      },
      {
        section: 'C',
        sectionName: 'നിയന്ത്രണം',
        intro: 'സ്വയം നിയന്ത്രണം.',
        questions: [
          'ദിവസേനയുള്ള ശീലങ്ങൾ നിങ്ങളെ പ്രേരിപ്പിക്കുന്നുണ്ടോ?',
          'ഇതില്ലാതെ ജോലിയിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കാൻ ബുദ്ധിമുട്ടുണ്ടോ?'
        ]
      },
      {
        section: 'D',
        sectionName: 'ആരോഗ്യ ബോധവൽക്കരണം',
        intro: 'ആരോഗ്യത്തെക്കുറിച്ചുള്ള അറിവ്.',
        questions: [
          'വായിൽ മുറിവുകളോ പാടുകളോ ശ്രദ്ധിച്ചിട്ടുണ്ടോ?',
          'ഇത് നിങ്ങളുടെ ശാരീരിക ക്ഷമതയെ ബാധിക്കുന്നുണ്ടോ?',
          'ഇത് നിങ്ങളുടെ സൗന്ദര്യത്തെ ബാധിക്കുന്നുണ്ടോ?'
        ]
      },
      {
        section: 'E',
        sectionName: 'കുടുംബം',
        intro: 'കുടുംബത്തിന്മേലുള്ള ആഘാതം.',
        questions: [
          'കുടുംബാംഗങ്ങൾ ഇതിനെക്കുറിച്ച് സംസാരിക്കാറുണ്ടോ?',
          'നിങ്ങളുടെ ശീലം കുട്ടികളെ സ്വാധീനിക്കുമെന്ന് കരുതുന്നുണ്ടോ?',
          'നിങ്ങൾ കുടുംബത്തിൽ നിന്ന് ഇത് മറച്ചുവെക്കാറുണ്ടോ?'
        ]
      },
      {
        section: 'F',
        sectionName: 'മാറ്റത്തിനുള്ള സന്നദ്ധത',
        intro: 'നിർത്താനുള്ള ആഗ്രഹം.',
        questions: [
          'സഹായം ലഭിച്ചാൽ, നിർത്താൻ ശ്രമിക്കുമോ?',
          'ആരോഗ്യകരമായ ബദലുകൾ ഉപയോഗിക്കാൻ തയ്യാറാണോ?',
          'ഓർമ്മപ്പെടുത്തലുകൾ ലഭിച്ചാൽ, കുറയ്ക്കാൻ ശ്രമിക്കുമോ?'
        ]
      }
    ]
  }
};
