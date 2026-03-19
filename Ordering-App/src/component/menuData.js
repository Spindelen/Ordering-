const menuItems = [
  // ---------- MAIN ----------
  {
    id: 1,
    name: "Burger",
    description: "Juicy beef burger with lettuce, tomato and house sauce.",
    price: 59,
    image: "/burger.png",
    nutrition: "500 kcal, 25g protein",
    allergies: "Gluten, Milk",
    category: "Main",
    featured: true
  },
  {
    id: 2,
    name: "Churrasco Italiano",
    description: "Classic Chilean steak sandwich with avocado, tomato and mayo.",
    price: 79,
    image: "/churrasco.jpg",
    nutrition: "650 kcal, 32g protein",
    allergies: "Gluten, Egg",
    category: "Main",
    featured: true
  },
  {
    id: 3,
    name: "Completo",
    description: "Chilean hot dog with avocado, tomato and mayo.",
    price: 45,
    image: "/completo.jpg",
    nutrition: "420 kcal, 14g protein",
    allergies: "Gluten, Egg",
    category: "Main"
  },
  {
    id: 4,
    name: "Lomo Saltado Bowl",
    description: "Stir‑fried beef with onions, fries and rice.",
    price: 95,
    image: "/lomo.jpg",
    nutrition: "780 kcal, 40g protein",
    allergies: "Soy",
    category: "Main"
  },

  // ---------- STARTER ----------
  {
    id: 5,
    name: "Empanadas",
    description: "Crispy empanadas filled with beef, onion and spices.",
    price: 39,
    image: "/empanadas.jpg",
    nutrition: "350 kcal, 12g protein",
    allergies: "Gluten, Egg",
    category: "Starter",
    featured: true
  },
  {
    id: 6,
    name: "Choripán",
    description: "Grilled chorizo in bread with pebre salsa.",
    price: 49,
    image: "/choripan.jpg",
    nutrition: "480 kcal, 18g protein",
    allergies: "Gluten",
    category: "Starter"
  },
  {
    id: 7,
    name: "Cheese Sticks",
    description: "Crispy fried cheese sticks with dip.",
    price: 35,
    image: "/cheesesticks.jpg",
    nutrition: "300 kcal, 10g protein",
    allergies: "Milk, Gluten",
    category: "Starter"
  },

  // ---------- SIDE ----------
  {
    id: 8,
    name: "Fries",
    description: "Crispy golden fries served hot.",
    price: 29,
    image: "/fries.jpg",
    nutrition: "300 kcal, 4g protein",
    allergies: "None",
    category: "Side",
    featured: true
  },
  {
    id: 9,
    name: "Sweet Potato Fries",
    description: "Crispy sweet potato fries with chili mayo.",
    price: 35,
    image: "/sweetfries.jpg",
    nutrition: "320 kcal, 3g protein",
    allergies: "Egg",
    category: "Side"
  },
  {
    id: 10,
    name: "Onion Rings",
    description: "Crispy battered onion rings.",
    price: 32,
    image: "/onionrings.jpg",
    nutrition: "280 kcal, 3g protein",
    allergies: "Gluten",
    category: "Side"
  },

  // ---------- DRINKS ----------
  {
    id: 11,
    name: "Coca Cola",
    description: "Refreshing classic Coke.",
    price: 20,
    image: "/coke.jpg",
    nutrition: "140 kcal",
    allergies: "None",
    category: "Drinks"
  },
  {
    id: 12,
    name: "Mote con Huesillo",
    description: "Traditional Chilean peach drink with wheat.",
    price: 35,
    image: "/mote.jpg",
    nutrition: "250 kcal",
    allergies: "Gluten",
    category: "Drinks",
    featured: true
  },
  {
    id: 13,
    name: "Fresh Lemonade",
    description: "Homemade lemonade with mint.",
    price: 25,
    image: "/lemonade.jpg",
    nutrition: "120 kcal",
    allergies: "None",
    category: "Drinks"
  },

  // ---------- DESSERT ----------
  {
    id: 14,
    name: "Churros",
    description: "Warm churros with cinnamon sugar.",
    price: 39,
    image: "/churros.jpg",
    nutrition: "380 kcal",
    allergies: "Gluten, Milk",
    category: "Dessert",
    featured: true
  },
  {
    id: 15,
    name: "Tres Leches Cake",
    description: "Soft sponge cake soaked in three milks.",
    price: 45,
    image: "/tresleches.jpg",
    nutrition: "450 kcal",
    allergies: "Milk, Egg, Gluten",
    category: "Dessert"
  },
  {
    id: 16,
    name: "Ice Cream Cup",
    description: "Vanilla ice cream with chocolate drizzle.",
    price: 30,
    image: "/icecream.jpg",
    nutrition: "250 kcal",
    allergies: "Milk",
    category: "Dessert"
  }
];

export default menuItems;
