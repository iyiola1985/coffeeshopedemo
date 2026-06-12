export const siteConfig = {
  name: "Roastory",
  tagline: "Every Great Day Begins With Exceptional Coffee",
  description:
    "Premium artisan coffee crafted with passion. Discover exceptional blends from the world's finest origins.",
  navLinks: [
    { label: "About Us", href: "#why-us" },
    { label: "Product", href: "#featured" },
    { label: "Benefits", href: "#process" },
    { label: "Testimonial", href: "#testimonials" },
  ],
  hero: {
    eyebrow: "Premium Artisan Roasters",
    headlineGold: "Exceptional",
    headlineWhite: "Coffee Awaits",
    description:
      "Did you know that your next favorite coffee may be hiding in plain sight? Take our quiz to get matched with the perfect beans for you.",
  },
  stats: [
    { value: "50K+", label: "Customers" },
    { value: "100+", label: "Coffee Blends" },
    { value: "4.9", label: "Rating" },
  ],
};

export const featuredProducts = [
  {
    id: 1,
    name: "Midnight Reserve",
    origin: "Ethiopia Yirgacheffe",
    price: 24.99,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=800&fit=crop",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Golden Dawn",
    origin: "Colombia Supremo",
    price: 22.99,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=600&h=800&fit=crop",
    tag: "New Arrival",
  },
  {
    id: 3,
    name: "Velvet Noir",
    origin: "Brazil Santos",
    price: 19.99,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=800&fit=crop",
    tag: "Limited",
  },
  {
    id: 4,
    name: "Amber Cascade",
    origin: "Kenya AA",
    price: 26.99,
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=800&fit=crop",
    tag: "Premium",
  },
];

export const bestSellers = [
  {
    id: 1,
    name: "Signature Espresso",
    description: "Bold, rich, and perfectly balanced for your morning ritual.",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop",
    sales: "12K+ sold",
  },
  {
    id: 2,
    name: "House Blend",
    description: "Our most beloved everyday coffee, smooth and aromatic.",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=600&fit=crop",
    sales: "8K+ sold",
  },
  {
    id: 3,
    name: "Cold Brew Reserve",
    description: "Slow-steeped perfection for the ultimate refreshment.",
    price: 21.99,
    image:
      "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=600&fit=crop",
    sales: "5K+ sold",
  },
];

export const whyChooseUs = [
  {
    icon: "bean",
    title: "Single Origin Excellence",
    description:
      "Every bean is ethically sourced from the world's most prestigious coffee regions, ensuring unparalleled quality in every cup.",
  },
  {
    icon: "flame",
    title: "Artisan Roasting",
    description:
      "Our master roasters craft each batch with precision, unlocking complex flavor profiles that tell a story with every sip.",
  },
  {
    icon: "leaf",
    title: "Sustainable Practices",
    description:
      "From farm to cup, we champion fair trade partnerships and eco-conscious packaging for a better tomorrow.",
  },
  {
    icon: "award",
    title: "Award-Winning Blends",
    description:
      "Recognized globally for excellence, our coffees have earned accolades from the most discerning palates worldwide.",
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
      "Roastory transformed my morning routine. The Midnight Reserve is simply divine — rich, complex, and absolutely unforgettable.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Chen",
    role: "Barista & Blogger",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    quote:
      "As someone who's tasted coffee from around the world, Roastory stands in a league of its own. The quality is unmatched.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Café Owner",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    quote:
      "We serve Roastory exclusively at our café. Our customers constantly ask where they can buy it — that's the ultimate compliment.",
    rating: 5,
  },
];

export const brewingSteps = [
  {
    step: 1,
    title: "Origin Selection",
    description:
      "We travel to remote farms, building relationships with growers who share our passion for excellence.",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=400&fit=crop",
  },
  {
    step: 2,
    title: "Precision Roasting",
    description:
      "Each batch is roasted in small quantities, with temperature profiles tailored to unlock unique flavor notes.",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop",
  },
  {
    step: 3,
    title: "Quality Testing",
    description:
      "Every roast undergoes rigorous cupping sessions to ensure it meets our exacting standards.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
  },
  {
    step: 4,
    title: "Fresh Delivery",
    description:
      "Roasted to order and shipped within 24 hours, ensuring peak freshness at your doorstep.",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop",
  },
];

export const subscriptionPlans = [
  {
    name: "Explorer",
    price: 19,
    period: "month",
    description: "Perfect for discovering new flavors",
    features: [
      "1 bag per month (12oz)",
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
    description: "Our most popular choice for daily drinkers",
    features: [
      "2 bags per month (12oz each)",
      "Priority roasting",
      "Exclusive seasonal blends",
      "15% off all purchases",
      "Early access to new releases",
    ],
    popular: true,
  },
  {
    name: "Collector",
    price: 59,
    period: "month",
    description: "The ultimate coffee experience",
    features: [
      "4 bags per month (12oz each)",
      "Limited edition releases",
      "Personal coffee curator",
      "25% off all purchases",
      "VIP event invitations",
      "Custom blend creation",
    ],
    popular: false,
  },
];

export const instagramPosts = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=400&fit=crop",
];

export const footerLinks = {
  shop: [
    { label: "All Coffee", href: "#" },
    { label: "Best Sellers", href: "#best-sellers" },
    { label: "Gift Sets", href: "#" },
    { label: "Equipment", href: "#" },
  ],
  company: [
    { label: "Our Story", href: "#why-us" },
    { label: "Sustainability", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  support: [
    { label: "Contact Us", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Shipping", href: "#" },
    { label: "Returns", href: "#" },
  ],
};
