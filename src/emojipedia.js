const emojipedia = [
  {
    id: 1,
    emoji: "😀",
    name: "Grinning Face",
    meaning:
      "A yellow face with a big open grin, showing upper teeth and tongue on some platforms. Generally conveys a sense of happiness and positive feelings.",
  },
  {
    id: 2,
    emoji: "😂",
    name: "Face with Tears of Joy",
    meaning:
      "A yellow face with a big grin and tears of joy flowing from its eyes. Often used to show something is funny or pleasing.",
  },
  {
    id: 3,
    emoji: "❤️",
    name: "Red Heart",
    meaning:
      "A classic red heart emoji, used to express love and affection. It is one of the most used emojis.",
  },
  {
    id: 4,
    emoji: "🥺",
    name: "Pleading Face",
    meaning:
      "A yellow face with large puppy-dog eyes, a small frown, and slightly furrowed eyebrows. It conveys a sense of begging or pleading.",
  },
  {
    id: 5,
    emoji: "🔥",
    name: "Fire",
    meaning:
      "A flame, mostly used to convey something is cool, awesome, or ‘on fire’ in a positive way. It can also indicate that someone is very attractive.",
  },
  {
    id: 6,
    emoji: "🎉",
    name: "Party Popper",
    meaning:
      "A party popper, used to convey celebration or excitement, often in the context of a party or festive event.",
  },
  {
    id: 7,
    emoji: "😎",
    name: "Smiling Face with Sunglasses",
    meaning:
      "A yellow face with a broad, closed smile wearing black sunglasses. Often used to convey a sense of coolness or confidence.",
  },
  {
    id: 8,
    emoji: "🌟",
    name: "Glowing Star",
    meaning:
      "A five-point gold star with a glint effect, used for emphasis or to represent something exceptional.",
  },
  {
    id: 9,
    emoji: "💡",
    name: "Light Bulb",
    meaning:
      "A light bulb, often used to represent a bright idea or inspiration.",
  },
  {
    id: 10,
    emoji: "🚀",
    name: "Rocket",
    meaning:
      "A rocket soaring into the sky, used to convey a sense of speed, ambition, or innovation.",
  },
  {
    id: 11,
    emoji: "😊",
    name: "Smiling Face with Smiling Eyes",
    meaning:
      "A yellow face with smiling eyes and a broad, closed smile turning up to rosy cheeks. Conveys happiness and positive feelings.",
  },
  {
    id: 12,
    emoji: "🥳",
    name: "Partying Face",
    meaning:
      "A yellow face with a party hat blowing a party horn as confetti floats around its head. Used for celebrations or joyous occasions.",
  },
  {
    id: 13,
    emoji: "😢",
    name: "Crying Face",
    meaning:
      "A yellow face with a slight frown, sad eyes, and a single tear running down its cheek. Conveys a sense of sadness or disappointment.",
  },
  {
    id: 14,
    emoji: "😡",
    name: "Pouting Face",
    meaning:
      "A red face with an angry expression, furrowed eyebrows, and frowning mouth. Often used to express anger or frustration.",
  },
  {
    id: 15,
    emoji: "😴",
    name: "Sleeping Face",
    meaning:
      "A yellow face with closed eyes, a slight frown, and a blue 'Z' above its head. Indicates tiredness or sleeping.",
  },
  {
    id: 16,
    emoji: "🤔",
    name: "Thinking Face",
    meaning:
      "A yellow face with a hand on its chin and a furrowed brow, conveying deep thought or consideration.",
  },
  {
    id: 17,
    emoji: "😅",
    name: "Grinning Face with Sweat",
    meaning:
      "A yellow face with a broad, open smile, showing upper teeth with a single bead of sweat on its forehead. Used to show relief or nervousness.",
  },
  {
    id: 18,
    emoji: "😇",
    name: "Smiling Face with Halo",
    meaning:
      "A yellow face with smiling eyes, closed smile, and a blue halo above its head. Represents innocence or angelic behavior.",
  },
  {
    id: 19,
    emoji: "🤗",
    name: "Hugging Face",
    meaning:
      "A yellow face with smiling eyes and open hands, offering a hug. Used to show care and warmth.",
  },
  {
    id: 20,
    emoji: "🥰",
    name: "Smiling Face with Hearts",
    meaning:
      "A yellow face with smiling eyes, closed smile, and several hearts floating around its head. Conveys love and affection.",
  },
  {
    id: 21,
    emoji: "🤯",
    name: "Exploding Head",
    meaning:
      "A yellow face with eyes wide open and the top of its head exploding like a volcano. Used to represent shock, surprise, or amazement.",
  },
  {
    id: 22,
    emoji: "🤪",
    name: "Zany Face",
    meaning:
      "A yellow face with its tongue hanging out and one eye larger than the other. Used to show silliness or goofiness.",
  },
  {
    id: 23,
    emoji: "😷",
    name: "Face with Medical Mask",
    meaning:
      "A yellow face wearing a white surgical mask. Used during times of illness or to represent health care workers.",
  },
  {
    id: 24,
    emoji: "🤒",
    name: "Face with Thermometer",
    meaning:
      "A yellow face with a thermometer in its mouth and a feverish expression. Represents illness or feeling unwell.",
  },
  {
    id: 25,
    emoji: "🤕",
    name: "Face with Head-Bandage",
    meaning:
      "A yellow face with a bandage wrapped around its head. Used to indicate injury or pain.",
  },
  {
    id: 26,
    emoji: "🤑",
    name: "Money-Mouth Face",
    meaning:
      "A yellow face with dollar signs for eyes and an open mouth with a green tongue covered in dollar signs. Represents wealth or money.",
  },
  {
    id: 27,
    emoji: "🤡",
    name: "Clown Face",
    meaning:
      "A face of a clown, often used to convey something silly or funny. Sometimes used in a derogatory way to indicate foolish behavior.",
  },
  {
    id: 28,
    emoji: "👻",
    name: "Ghost",
    meaning:
      "A white, cartoon-styled ghost making a silly face. Used to convey something spooky or playful.",
  },
  {
    id: 29,
    emoji: "👽",
    name: "Alien",
    meaning:
      "A green, alien face with large, oval eyes and a small mouth. Represents extraterrestrial life or something out of the ordinary.",
  },
  {
    id: 30,
    emoji: "💩",
    name: "Pile of Poo",
    meaning:
      "A smiling pile of poo, with large eyes and a wide, friendly smile. Used humorously to convey something bad or crappy.",
  },
  {
    id: 31,
    emoji: "🤖",
    name: "Robot Face",
    meaning:
      "A silver or gray robot face with antennas. Often used to represent technology, robots, or artificial intelligence.",
  },
  {
    id: 32,
    emoji: "😺",
    name: "Grinning Cat",
    meaning:
      "A yellow face of a cat with a broad smile and whiskers. Used to convey happiness or playfulness.",
  },
  {
    id: 33,
    emoji: "😸",
    name: "Grinning Cat with Smiling Eyes",
    meaning:
      "A yellow cat face with a broad smile and eyes shaped like upside-down U's. Represents joy or excitement.",
  },
  {
    id: 34,
    emoji: "😻",
    name: "Smiling Cat with Heart-Eyes",
    meaning:
      "A yellow cat face with hearts for eyes, often used to show love or admiration.",
  },
  {
    id: 35,
    emoji: "😼",
    name: "Cat with Wry Smile",
    meaning:
      "A yellow cat face with a sly, smug expression. Used to convey a sense of mischief or cunning.",
  },
  {
    id: 36,
    emoji: "😽",
    name: "Kissing Cat",
    meaning:
      "A yellow cat face with closed eyes and puckered lips. Represents affection or a kiss.",
  },
  {
    id: 37,
    emoji: "🙀",
    name: "Weary Cat",
    meaning:
      "A yellow cat face with wide, white eyes and a mouth open in shock. Used to show fear, horror, or disbelief.",
  },
  {
    id: 38,
    emoji: "😿",
    name: "Crying Cat",
    meaning:
      "A yellow cat face with tears streaming down its face. Used to show sadness or disappointment.",
  },
  {
    id: 39,
    emoji: "😾",
    name: "Pouting Cat",
    meaning:
      "A yellow cat face with a frown and furrowed eyebrows. Used to show anger or frustration.",
  },
  {
    id: 40,
    emoji: "🙈",
    name: "See-No-Evil Monkey",
    meaning:
      "A brown monkey covering its eyes with its hands. Part of the three wise monkeys series, representing 'see no evil'.",
  },
  {
    id: 41,
    emoji: "🙉",
    name: "Hear-No-Evil Monkey",
    meaning:
      "A brown monkey covering its ears with its hands. Part of the three wise monkeys series, representing 'hear no evil'.",
  },
  {
    id: 42,
    emoji: "🙊",
    name: "Speak-No-Evil Monkey",
    meaning:
      "A brown monkey covering its mouth with its hands. Part of the three wise monkeys series, representing 'speak no evil'.",
  },
  {
    id: 43,
    emoji: "👶",
    name: "Baby",
    meaning:
      "A baby with a small tuft of hair on its head. Represents infants or very young children.",
  },
  {
    id: 44,
    emoji: "🧒",
    name: "Child",
    meaning:
      "A young child with short hair, gender-neutral. Represents children or young people.",
  },
  {
    id: 45,
    emoji: "👦",
    name: "Boy",
    meaning: "A young boy with short hair. Represents boys or young males.",
  },
  {
    id: 46,
    emoji: "👧",
    name: "Girl",
    meaning:
      "A young girl with shoulder-length hair. Represents girls or young females.",
  },
  {
    id: 47,
    emoji: "👨",
    name: "Man",
    meaning: "An adult man with short hair. Represents adult males.",
  },
  {
    id: 48,
    emoji: "👩",
    name: "Woman",
    meaning:
      "An adult woman with shoulder-length hair. Represents adult females.",
  },
  {
    id: 49,
    emoji: "👴",
    name: "Old Man",
    meaning:
      "An elderly man with wrinkles and white hair. Represents older males or grandfathers.",
  },
  {
    id: 50,
    emoji: "👵",
    name: "Old Woman",
    meaning:
      "An elderly woman with wrinkles and white hair. Represents older females or grandmothers.",
  },
  {
    id: 51,
    emoji: "🧓",
    name: "Older Person",
    meaning:
      "A gender-neutral older person with gray hair. Represents elderly people in general.",
  },
  {
    id: 52,
    emoji: "👲",
    name: "Man with Chinese Cap",
    meaning:
      "A man wearing a traditional Chinese cap. Represents Asian culture or heritage.",
  },
  {
    id: 53,
    emoji: "👳‍♂️",
    name: "Man with Turban",
    meaning:
      "A man wearing a turban, often used to represent people of Indian or Middle Eastern descent.",
  },
  {
    id: 54,
    emoji: "👳‍♀️",
    name: "Woman with Turban",
    meaning:
      "A woman wearing a turban. Represents women of Indian or Middle Eastern descent.",
  },
  {
    id: 55,
    emoji: "🧕",
    name: "Woman with Headscarf",
    meaning:
      "A woman wearing a headscarf. Represents Muslim women or women who wear headscarves for cultural or religious reasons.",
  },
  {
    id: 56,
    emoji: "👮‍♂️",
    name: "Man Police Officer",
    meaning:
      "A male police officer wearing a hat with a badge. Represents law enforcement.",
  },
  {
    id: 57,
    emoji: "👮‍♀️",
    name: "Woman Police Officer",
    meaning:
      "A female police officer wearing a hat with a badge. Represents law enforcement.",
  },
  {
    id: 58,
    emoji: "👷‍♂️",
    name: "Man Construction Worker",
    meaning:
      "A male construction worker wearing a hard hat. Represents construction or building work.",
  },
  {
    id: 59,
    emoji: "👷‍♀️",
    name: "Woman Construction Worker",
    meaning:
      "A female construction worker wearing a hard hat. Represents construction or building work.",
  },
  {
    id: 60,
    emoji: "💂‍♂️",
    name: "Man Guard",
    meaning:
      "A male guard wearing a traditional British bearskin hat. Represents security or protection.",
  },
  {
    id: 61,
    emoji: "💂‍♀️",
    name: "Woman Guard",
    meaning:
      "A female guard wearing a traditional British bearskin hat. Represents security or protection.",
  },
  {
    id: 62,
    emoji: "🕵️‍♂️",
    name: "Man Detective",
    meaning:
      "A male detective wearing a hat and a magnifying glass. Represents investigation or mystery.",
  },
  {
    id: 63,
    emoji: "🕵️‍♀️",
    name: "Woman Detective",
    meaning:
      "A female detective wearing a hat and a magnifying glass. Represents investigation or mystery.",
  },
  {
    id: 64,
    emoji: "👩‍⚕️",
    name: "Woman Health Worker",
    meaning:
      "A female health worker wearing a lab coat and stethoscope. Represents doctors, nurses, or healthcare workers.",
  },
  {
    id: 65,
    emoji: "👨‍⚕️",
    name: "Man Health Worker",
    meaning:
      "A male health worker wearing a lab coat and stethoscope. Represents doctors, nurses, or healthcare workers.",
  },
  {
    id: 66,
    emoji: "👩‍🎓",
    name: "Woman Student",
    meaning:
      "A female student wearing a graduation cap. Represents education, learning, or graduation.",
  },
  {
    id: 67,
    emoji: "👨‍🎓",
    name: "Man Student",
    meaning:
      "A male student wearing a graduation cap. Represents education, learning, or graduation.",
  },
  {
    id: 68,
    emoji: "👩‍🏫",
    name: "Woman Teacher",
    meaning:
      "A female teacher wearing glasses and holding a pointer. Represents teaching, education, or instruction.",
  },
  {
    id: 69,
    emoji: "👨‍🏫",
    name: "Man Teacher",
    meaning:
      "A male teacher wearing glasses and holding a pointer. Represents teaching, education, or instruction.",
  },
  {
    id: 70,
    emoji: "👩‍⚖️",
    name: "Woman Judge",
    meaning:
      "A female judge wearing a black robe and holding a gavel. Represents law, justice, or legal proceedings.",
  },
  {
    id: 71,
    emoji: "👨‍⚖️",
    name: "Man Judge",
    meaning:
      "A male judge wearing a black robe and holding a gavel. Represents law, justice, or legal proceedings.",
  },
  {
    id: 72,
    emoji: "👩‍🌾",
    name: "Woman Farmer",
    meaning:
      "A female farmer wearing a hat and holding a hoe. Represents agriculture, farming, or rural life.",
  },
  {
    id: 73,
    emoji: "👨‍🌾",
    name: "Man Farmer",
    meaning:
      "A male farmer wearing a hat and holding a hoe. Represents agriculture, farming, or rural life.",
  },
  {
    id: 74,
    emoji: "👩‍🍳",
    name: "Woman Cook",
    meaning:
      "A female cook wearing a chef's hat and holding a spoon. Represents cooking, culinary arts, or food preparation.",
  },
  {
    id: 75,
    emoji: "👨‍🍳",
    name: "Man Cook",
    meaning:
      "A male cook wearing a chef's hat and holding a spoon. Represents cooking, culinary arts, or food preparation.",
  },
];

export default emojipedia;
