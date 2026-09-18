export const RESTAURANT_INFO = {
  name: "Veda Heritage",
  tagline: "Royal Indian Gastronomy & Pure Veg Fine Dining",
  michelinStars: "3 Stars Distinction",
  rating: 4.9,
  reviewsCount: 1850,
  phone: "+91 98765 43210",
  email: "namaste@vedaheritage.com",
  address: "88 Maharaja Palace Road, Connaught Place, New Delhi, 110001",
  hours: {
    weekdays: "12:00 PM – 3:30 PM | 5:00 PM – 11:00 PM",
    weekends: "12:00 PM – 11:30 PM (All-Day Royal Dining)",
    status: "Open Now",
    closingTime: "11:00 PM"
  },
  stats: [
    { label: "100% Pure Veg", value: "Sattvik Pure" },
    { label: "Royal Recipes", value: "50+ Authentic" },
    { label: "Farm Fresh Spices", value: "100% Organic" },
    { label: "Guest Satisfaction", value: "99.6%" }
  ]
};

export const MENU_CATEGORIES = [
  { id: "all", label: "Full Royal Menu" },
  { id: "starters", label: "Amuse & Chaat Shots" },
  { id: "mains", label: "Royal Curries & Signature Mains" },
  { id: "tandoor", label: "Tandoori Breads & Kebabs" },
  { id: "thali", label: "Maharaja Tasting Thali" },
  { id: "desserts", label: "Mithai & Pastry Artistry" },
  { id: "beverages", label: "Moksh Craft Mocktails & Chai" }
];

export const MENU_ITEMS = [
  {
    id: "item-1",
    name: "Royal Truffle Paneer Tikka",
    category: "starters",
    price: 450,
    description: "Tandoor-roasted cottage cheese marinated in Kashmiri saffron & hung curd, crowned with edible 24k silver vark leaf and mint foam.",
    image: "/images/indian_signature_dish.jpg",
    tags: ["100% Pure Veg", "Chef Signature", "Gluten-Free"],
    calories: "420 kcal",
    prepTime: "18 min",
    pairing: "Paired with Royal Kesar Thandai",
    ingredients: ["Artisanal Paneer", "Kashmiri Saffron", "Hung Curd", "Silver Vark", "Mint Foam"],
    isPopular: true
  },
  {
    id: "item-2",
    name: "24-Hour Slow-Crafted Dal Veda",
    category: "mains",
    price: 420,
    description: "Whole black lentils slow-cooked overnight over charcoal coals with white butter, kasuri methi, and fresh Malai cream.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    tags: ["100% Pure Veg", "Bestseller", "Gluten-Free"],
    calories: "480 kcal",
    prepTime: "20 min",
    pairing: "Paired with Truffle Garlic Butter Naan",
    ingredients: ["Black Urad Dal", "White Butter", "Kasuri Methi", "Fresh Cream", "Aromatic Spices"],
    isPopular: true
  },
  {
    id: "item-3",
    name: "Shahi Paneer Pasanda in Saffron Gravy",
    category: "mains",
    price: 490,
    description: "Stuffed paneer medallions with cashew-pistachio praline served in a velvety golden saffron and cardamom velouté.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    tags: ["100% Pure Veg", "Jain Option Available"],
    calories: "520 kcal",
    prepTime: "22 min",
    pairing: "Paired with Saffron Basmati Pulao",
    ingredients: ["Fresh Paneer", "Pistachio Praline", "Kashmiri Saffron", "Cashew Cream"],
    isPopular: true
  },
  {
    id: "item-4",
    name: "Subz Dum Biryani in Sealed Clay Handi",
    category: "mains",
    price: 540,
    description: "Aged long-grain basmati rice layered with saffron, fresh garden vegetables, mint, and slow-cooked in a sealed clay pot.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    tags: ["100% Pure Veg", "Chef Special", "Gluten-Free"],
    calories: "590 kcal",
    prepTime: "25 min",
    pairing: "Paired with Burani Garlic Raita",
    ingredients: ["Basmati Rice", "Saffron", "Rose Water", "Morel Mushrooms", "Garden Vegetables"],
    isPopular: true
  },
  {
    id: "item-5",
    name: "Royal Dahi Puri Shots (6 Pcs)",
    category: "starters",
    price: 280,
    description: "Crisp wheat puris stuffed with spiced potato-sprouts, chilled sweet saffron curd, tamarind reduction, and pomegranate pearls.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    tags: ["100% Pure Veg", "Street Artistry"],
    calories: "310 kcal",
    prepTime: "12 min",
    pairing: "Paired with Mint Masala Soda",
    ingredients: ["Wheat Puris", "Spiced Sprouts", "Sweet Yogurt", "Tamarind", "Pomegranate"],
    isPopular: true
  },
  {
    id: "item-6",
    name: "Awadhi Malai Kofta in Almond Silk",
    category: "mains",
    price: 460,
    description: "Melt-in-mouth cottage cheese and mawa dumplings stuffed with dried fruits, simmered in a delicate white almond sauce.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["100% Pure Veg", "Chef Special"],
    calories: "510 kcal",
    prepTime: "20 min",
    pairing: "Paired with Laccha Paratha",
    ingredients: ["Paneer", "Mawa", "Pistachios", "Almond Gravy", "Cardamom"],
    isPopular: false
  },
  {
    id: "item-7",
    name: "Truffle Garlic Butter Naan",
    category: "tandoor",
    price: 180,
    description: "Hand-stretched refined wheat bread cooked in clay tandoor, brushed with French butter, roasted garlic, and black truffle oil.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    tags: ["100% Pure Veg"],
    calories: "280 kcal",
    prepTime: "10 min",
    ingredients: ["Refined Wheat", "French Butter", "Roasted Garlic", "Truffle Oil"],
    isPopular: true
  },
  {
    id: "item-8",
    name: "Grand Royal Maharaja Thali",
    category: "thali",
    price: 950,
    description: "A royal feast including Dal Veda, Shahi Paneer, Dum Biryani, Paneer Tikka, Truffle Naan, Kesar Rasmalai, and Thandai.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    tags: ["100% Pure Veg", "Royal Feast", "Shareable"],
    calories: "1150 kcal",
    prepTime: "25 min",
    ingredients: ["Full 9-Course Thali Selection", "Pickles", "Papad", "Chutneys"],
    isPopular: true
  },
  {
    id: "item-9",
    name: "Kesar Rasmalai Tres Leches",
    category: "desserts",
    price: 320,
    description: "Spongy cottage cheese discs soaked in saffron-infused three-milk rabri with toasted pistachios and silver vark.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    tags: ["100% Pure Veg", "Chef Special"],
    calories: "410 kcal",
    prepTime: "15 min",
    ingredients: ["Milk Solids", "Saffron Rabri", "Bronte Pistachios", "Silver Leaf"],
    isPopular: true
  },
  {
    id: "item-10",
    name: "Royal Kesar Pista Thandai (Moksh Bar)",
    category: "beverages",
    price: 220,
    description: "Artisanal beverage brewed with crushed almonds, melon seeds, poppy seeds, rose petals, saffron, and chilled whole milk.",
    image: "https://images.unsplash.com/photo-1570696516188-ade861b84a49?auto=format&fit=crop&w=800&q=80",
    tags: ["100% Pure Veg", "Signature Mocktail"],
    calories: "220 kcal",
    prepTime: "5 min",
    ingredients: ["Almonds", "Saffron", "Rose Petals", "Cardamom", "Melon Seeds"],
    isPopular: true
  }
];

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Royal Haveli Candlelit Dining Salon",
    category: "Palace Ambiance",
    image: "/images/indian_hero_bg.jpg"
  },
  {
    id: "gal-2",
    title: "Saffron Truffle Paneer Plating",
    category: "Culinary Art",
    image: "/images/indian_signature_dish.jpg"
  },
  {
    id: "gal-3",
    title: "Clay Tandoor Master Craftsmanship",
    category: "Tandoor Kitchen",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-4",
    title: "Grand Maharaja Royal Thali Experience",
    category: "Thali Tradition",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-5",
    title: "Artisanal Moksh Beverage Lounge",
    category: "Craft Drinks",
    image: "https://images.unsplash.com/photo-1570696516188-ade861b84a49?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-6",
    title: "Marigold Courtyard Terrace",
    category: "Garden Dining",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80"
  }
];

export const TESTIMONIALS = [
  {
    id: "rev-1",
    quote: "Veda Heritage has redefined pure vegetarian dining globally. The 24-hour slow-cooked Dal Veda and Truffle Paneer Tikka are pure perfection.",
    author: "Michelin Guide Inspectors",
    role: "Global Dining Distinction 2026",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "rev-2",
    quote: "The rich flavors, royal palace ambiance, and Sattvik purity are unmatched. The Maharaja Thali is a masterclass in regional Indian gastronomy.",
    author: "Ananya Roy",
    role: "Culinary Editor, Gourmet India",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "rev-3",
    quote: "We hosted our family wedding anniversary in the Private Haveli Lounge. Every course, from the Dahi Puri Shots to the Kesar Rasmalai, was royal.",
    author: "Rajesh & Meera Kapoor",
    role: "Private Haveli Guests",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  }
];

export const CHEF_INFO = {
  name: "Master Chef Vikramaditya Singh",
  title: "Executive Culinary Director & Founder",
  bio: "Hailing from Rajasthan's royal palace kitchens, Chef Vikramaditya Singh has dedicated 22 years to resurrecting forgotten Sattvik recipes, royal Mughlai vegetarian delicacies, and artisanal tandoor techniques using 100% organic Indian spices.",
  philosophy: "Pure Sattvik food feeds not just the body, but elevates the soul and spirit.",
  image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
};
