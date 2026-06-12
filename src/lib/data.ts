export const images = {
  logo: "/images/logo.png",
  heroLanding: "/images/hero-landing.png",
  productGiftSet: "/images/product-gift-set.png",
  productBranding: "/images/product-branding.png",
  productMediumBlend: "/images/product-medium-blend.png",
  productTinKitchen: "/images/product-tin-kitchen.png",
};

export const siteConfig = {
  name: "Taste of Kenya",
  tagline: "Speciality coffee from Kenya — simplifying the coffee supply chain",
  description:
    "Premium Kenyan speciality coffee sourced directly from the finest farms. We simplify the supply chain so farmers earn more and you taste coffee as it should be.",
  social: "@tasteofkenya",
  navLinks: [
    { label: "About Us", href: "#why-us" },
    { label: "Product", href: "#featured" },
    { label: "Benefits", href: "#process" },
    { label: "Testimonial", href: "#testimonials" },
  ],
  hero: {
    eyebrow: "Speciality coffee from Kenya 🔸 Simplifying the supply chain",
    headlineGold: "Coffee As",
    headlineWhite: "It Should Be",
    description:
      "We buy directly from Kenya's finest coffee farms — cutting out the middlemen so farmers get paid fairly and you enjoy pure, exceptional Kenyan coffee in every cup.",
  },
  stats: [
    { value: "100%", label: "Kenyan Origin" },
    { value: "50+", label: "Partner Farms" },
    { value: "4.9", label: "Rating" },
  ],
};

export const featuredProducts = [
  {
    id: 1,
    name: "Kenyan Medium Roast",
    origin: "Nyeri, Kenya",
    price: 24.99,
    rating: 4.9,
    image: images.productTinKitchen,
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Pure Kenya Coffee",
    origin: "Kiambu, Kenya",
    price: 22.99,
    rating: 4.8,
    image: images.productMediumBlend,
    tag: "Medium Blend",
  },
  {
    id: 3,
    name: "Kenyan Coffee Tin",
    origin: "Nakuru, Kenya",
    price: 19.99,
    rating: 4.7,
    image: images.productBranding,
    tag: "Classic",
  },
  {
    id: 4,
    name: "Premium Gift Set",
    origin: "Murang'a, Kenya",
    price: 49.99,
    rating: 5.0,
    image: images.productGiftSet,
    tag: "Gift Set",
  },
];

export const bestSellers = [
  {
    id: 1,
    name: "Medium Blend Bags",
    description:
      "50 refreshing coffee bags of pure Kenya coffee. Rich, balanced, and perfect for your daily ritual.",
    price: 18.99,
    image: images.productMediumBlend,
    sales: "12K+ sold",
  },
  {
    id: 2,
    name: "Kenyan Coffee Tin",
    description:
      "Our signature medium roast, medium ground tin. Grown in Kenya — loved worldwide.",
    price: 16.99,
    image: images.productTinKitchen,
    sales: "8K+ sold",
  },
  {
    id: 3,
    name: "French Press Gift Set",
    description:
      "The complete Taste of Kenya experience — premium coffee, French press, and wooden gift box.",
    price: 59.99,
    image: images.productGiftSet,
    sales: "5K+ sold",
  },
];

export const whyChooseUs = [
  {
    icon: "bean",
    title: "Direct From Kenyan Farms",
    description:
      "We simplify the supply chain by buying coffee directly from Kenya's best farms — ensuring farmers receive fair compensation for their exceptional beans.",
  },
  {
    icon: "flame",
    title: "Speciality Grade Quality",
    description:
      "Every batch is medium roasted to perfection, unlocking the bright, complex flavour profiles that make Kenyan coffee world-renowned.",
  },
  {
    icon: "leaf",
    title: "Sustainable & Ethical",
    description:
      "We invest in farmer training programmes and support education in coffee-growing communities — building a better future for every harvest.",
  },
  {
    icon: "award",
    title: "Grown in Kenya, Loved Worldwide",
    description:
      "From the highlands of Nyeri to your cup — authentic Kenyan coffee that champions heritage, quality, and the people behind every bean.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Coffee Enthusiast",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    quote:
      "Taste of Kenya changed how I think about coffee. Knowing it comes directly from Kenyan farms makes every cup feel meaningful — and the flavour is extraordinary.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Chen",
    role: "Barista & Blogger",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    quote:
      "The bright acidity and berry notes in their medium blend are exactly what Kenyan coffee should taste like. This is speciality coffee done right.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Café Owner",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    quote:
      "We serve Taste of Kenya exclusively. Our customers love the story behind the brand — direct trade, fair pay, and incredible quality in every sip.",
    rating: 5,
  },
];

export const brewingSteps = [
  {
    step: 1,
    title: "Farm Partnership",
    description:
      "We partner directly with Kenya's finest coffee farms — building lasting relationships and cutting out unnecessary middlemen in the supply chain.",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=400&fit=crop",
  },
  {
    step: 2,
    title: "Careful Selection",
    description:
      "Only the highest-grade Kenyan beans are selected — medium roasted to bring out bright citrus notes and a smooth, balanced finish.",
    image: images.productBranding,
  },
  {
    step: 3,
    title: "Quality Cupping",
    description:
      "Every batch undergoes rigorous cupping sessions to ensure it meets our standards for aroma, body, and the signature Kenyan flavour profile.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
  },
  {
    step: 4,
    title: "Fresh To Your Door",
    description:
      "Packaged with care and delivered fresh — so you experience Kenyan coffee at its absolute peak, from farm to your morning cup.",
    image: images.heroLanding,
  },
];

export const subscriptionPlans = [
  {
    name: "Explorer",
    price: 19,
    period: "month",
    description: "Discover the taste of Kenya",
    features: [
      "1 tin per month (250g)",
      "Free shipping",
      "Tasting notes included",
      "Flexible pause/cancel",
    ],
    popular: false,
  },
  {
    name: "Connoisseur",
    price: 34,
    period: "month",
    description: "Our most popular daily brew",
    features: [
      "2 tins per month (250g each)",
      "Priority roasting",
      "Exclusive seasonal lots",
      "15% off all purchases",
      "Early access to new releases",
    ],
    popular: true,
  },
  {
    name: "Collector",
    price: 59,
    period: "month",
    description: "The ultimate Kenyan coffee experience",
    features: [
      "4 tins per month (250g each)",
      "Limited edition releases",
      "Gift set discounts",
      "25% off all purchases",
      "VIP event invitations",
      "Direct farm stories",
    ],
    popular: false,
  },
];

export const instagramPosts = [
  images.productTinKitchen,
  images.productMediumBlend,
  images.productBranding,
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
  images.productGiftSet,
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop",
];

export const footerLinks = {
  shop: [
    { label: "All Coffee", href: "#featured" },
    { label: "Best Sellers", href: "#best-sellers" },
    { label: "Gift Sets", href: "#featured" },
    { label: "Subscriptions", href: "#subscription" },
  ],
  company: [
    { label: "Our Story", href: "#why-us" },
    { label: "Supply Chain", href: "#process" },
    { label: "Sustainability", href: "#why-us" },
    { label: "Press", href: "#" },
  ],
  support: [
    { label: "Contact Us", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Shipping", href: "#" },
    { label: "Returns", href: "#" },
  ],
};
