
const recipes = [
  {
    id: 1,
    title: "Paneer Butter Masala",
    image: "https://placehold.co/600x400/f8c40c/222?text=Paneer+Butter+Masala",
    prepTime: 30,
    cookTime: 15,
    servings: 4,
    type: "veg",
    difficulty: "Medium",
    description: "Creamy paneer cubes in a rich tomato and cashew gravy with aromatic spices.",
    ingredients: [
      "500g paneer, cubed",
      "100g butter",
      "4 tomatoes, chopped",
      "100ml cream",
      "50g cashews, soaked",
      "2 tbsp ginger-garlic paste",
      "1 tbsp garam masala",
      "1 tsp chili powder",
      "Salt to taste",
      "1 tsp kasuri methi (dried fenugreek leaves)"
    ],
    instructions: [
      "Sauté cashews, tomatoes, garlic, and ginger until soft.",
      "Blend to a smooth puree.",
      "In a pan, heat butter, cook puree with chili powder and garam masala.",
      "Add cream and paneer.",
      "Simmer for 10 minutes until flavors combine.",
      "Garnish with kasuri methi and serve hot with naan or rice."
    ]
  },
  {
    id: 2,
    title: "Masala Dosa",
    image: "https://placehold.co/600x400/f8c40c/222?text=Masala+Dosa",
    prepTime: 60,
    cookTime: 20,
    servings: 4,
    type: "veg",
    difficulty: "Medium",
    description: "Crispy fermented rice crepe filled with spiced potato filling, a South Indian classic.",
    ingredients: [
      "2 cups dosa batter",
      "4 potatoes, boiled and mashed",
      "1 tsp mustard seeds",
      "10-12 curry leaves",
      "1/2 tsp turmeric powder",
      "2 onions, finely chopped",
      "2-3 green chilies, chopped",
      "Oil for cooking",
      "Salt to taste"
    ],
    instructions: [
      "Boil and mash potatoes.",
      "Temper mustard seeds, curry leaves, turmeric, and onions in oil.",
      "Add green chilies and mashed potatoes, mix well and season with salt.",
      "Heat a cast iron tawa and grease lightly.",
      "Pour a ladle of dosa batter and spread in a circular motion.",
      "Cook until golden and crisp, add potato filling, fold and serve hot.",
      "Serve with coconut chutney and sambar."
    ]
  },
  {
    id: 3,
    title: "Chole Bhature",
    image: "https://placehold.co/600x400/f8c40c/222?text=Chole+Bhature",
    prepTime: 120,
    cookTime: 40,
    servings: 4,
    type: "veg",
    difficulty: "Hard",
    description: "Spicy chickpea curry served with deep-fried bread, a popular North Indian dish.",
    ingredients: [
      "2 cups chickpeas, soaked overnight",
      "2 cups all-purpose flour (maida)",
      "1/4 cup yogurt",
      "1/2 tsp baking soda",
      "2 onions, chopped",
      "3 tomatoes, pureed",
      "2 tbsp chole masala",
      "2 tea bags",
      "Oil for deep frying",
      "Salt to taste"
    ],
    instructions: [
      "Soak chickpeas overnight, then boil with tea bags until soft.",
      "In a pan, sauté onions until golden, add tomato puree and spices.",
      "Add boiled chickpeas and simmer for 20 minutes.",
      "For bhature, mix flour, yogurt, baking soda, and salt to make a soft dough.",
      "Rest the dough for 2-3 hours.",
      "Roll into oval shapes and deep-fry until puffed and golden.",
      "Serve hot chole with bhature and sliced onions."
    ]
  },
  {
    id: 4,
    title: "Rajma Chawal",
    image: "https://placehold.co/600x400/f8c40c/222?text=Rajma+Chawal",
    prepTime: 90,
    cookTime: 40,
    servings: 4,
    type: "veg",
    difficulty: "Medium",
    description: "Kidney bean curry served with steamed rice, a comforting North Indian meal.",
    ingredients: [
      "2 cups rajma (kidney beans), soaked overnight",
      "2 cups rice",
      "2 onions, finely chopped",
      "2 tomatoes, pureed",
      "2 tbsp ginger-garlic paste",
      "2 tsp cumin powder",
      "1 tsp garam masala",
      "1 tsp red chili powder",
      "2 tbsp oil",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    instructions: [
      "Pressure cook soaked rajma until soft.",
      "In a pan, heat oil and sauté onions until golden.",
      "Add ginger-garlic paste and cook for 2 minutes.",
      "Add tomato puree and spices, cook until oil separates.",
      "Add boiled rajma with water and simmer for 15-20 minutes until thick.",
      "Cook rice separately until fluffy.",
      "Serve hot rajma over steamed rice, garnished with fresh coriander."
    ]
  },
  {
    id: 5,
    title: "Egg Fried Rice",
    image: "https://placehold.co/600x400/f8c40c/222?text=Egg+Fried+Rice",
    prepTime: 20,
    cookTime: 15,
    servings: 2,
    type: "non-veg",
    difficulty: "Easy",
    description: "Quick and flavorful rice stir-fried with eggs, vegetables, and soy sauce.",
    ingredients: [
      "2 cups cooked rice (preferably day-old)",
      "3 eggs, beaten",
      "3 tbsp soy sauce",
      "1 cup mixed vegetables (carrots, peas, bell peppers)",
      "3 cloves garlic, minced",
      "2 tbsp oil",
      "Spring onions for garnish",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Heat oil in a wok or large pan.",
      "Add beaten eggs and scramble until just set.",
      "Remove eggs and set aside.",
      "In the same pan, stir-fry garlic and chopped vegetables for 2-3 minutes.",
      "Add cooked rice, breaking up any clumps.",
      "Pour in soy sauce and mix well.",
      "Return scrambled eggs to the pan and toss everything together.",
      "Season with salt and pepper, garnish with spring onions and serve hot."
    ]
  },
  {
    id: 6,
    title: "Vegetable Biryani",
    image: "https://placehold.co/600x400/f8c40c/222?text=Vegetable+Biryani",
    prepTime: 60,
    cookTime: 30,
    servings: 6,
    type: "veg",
    difficulty: "Medium",
    description: "Fragrant basmati rice layered with mixed vegetables and aromatic spices.",
    ingredients: [
      "2 cups basmati rice, soaked for 30 minutes",
      "2 cups mixed vegetables (carrots, beans, peas, cauliflower)",
      "1 cup yogurt",
      "1 tbsp biryani masala",
      "1 tsp saffron strands, soaked in warm milk",
      "1/4 cup mint leaves",
      "1/4 cup coriander leaves",
      "2 onions, thinly sliced",
      "4 tbsp ghee or oil",
      "Whole spices (cinnamon, cardamom, cloves)",
      "Salt to taste"
    ],
    instructions: [
      "Parboil rice with whole spices until 70% cooked, drain and set aside.",
      "In a separate pan, sauté vegetables with biryani masala and yogurt.",
      "In a heavy-bottomed pot, layer half the rice, then the vegetable mixture.",
      "Top with remaining rice, sprinkle saffron milk, mint, and coriander.",
      "Seal the pot with dough or foil and cook on low heat for 20 minutes.",
      "Let it rest for 10 minutes before opening.",
      "Gently mix and serve hot with raita."
    ]
  },
  {
    id: 7,
    title: "Poha",
    image: "https://placehold.co/600x400/f8c40c/222?text=Poha",
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    type: "veg",
    difficulty: "Easy",
    description: "Light and fluffy flattened rice breakfast dish with peanuts and spices.",
    ingredients: [
      "2 cups thick poha (flattened rice)",
      "1/4 cup peanuts",
      "1 tsp mustard seeds",
      "1 onion, finely chopped",
      "2 green chilies, chopped",
      "1/2 tsp turmeric powder",
      "10-12 curry leaves",
      "2 tbsp oil",
      "Juice of 1 lemon",
      "Fresh coriander for garnish",
      "Salt to taste"
    ],
    instructions: [
      "Rinse poha in water, drain and keep aside for 5 minutes.",
      "Heat oil in a pan, add mustard seeds and let them splutter.",
      "Add peanuts and fry until golden.",
      "Add curry leaves, green chilies, and onions, sauté until translucent.",
      "Add turmeric powder and salt, mix well.",
      "Add the soaked poha and mix gently.",
      "Cover and cook on low heat for 2-3 minutes.",
      "Squeeze lemon juice, garnish with coriander and serve hot."
    ]
  },
  {
    id: 8,
    title: "Aloo Paratha",
    image: "https://placehold.co/600x400/f8c40c/222?text=Aloo+Paratha",
    prepTime: 40,
    cookTime: 20,
    servings: 4,
    type: "veg",
    difficulty: "Medium",
    description: "Whole wheat flatbread stuffed with spiced potato filling, a popular breakfast.",
    ingredients: [
      "2 cups whole wheat flour",
      "4 large potatoes, boiled and mashed",
      "1 tsp cumin seeds",
      "1 tsp red chili powder",
      "1 tsp garam masala",
      "2 green chilies, finely chopped",
      "1/4 cup fresh coriander, chopped",
      "Butter or ghee for cooking",
      "Salt to taste",
      "Water as needed"
    ],
    instructions: [
      "Mix flour, salt, and water to make a soft dough. Rest for 20 minutes.",
      "Mix mashed potatoes with spices, green chilies, and coriander.",
      "Divide dough into balls, roll out slightly.",
      "Place potato filling in the center, seal edges and roll into a paratha.",
      "Cook on a hot tawa, applying butter or ghee on both sides.",
      "Cook until golden brown spots appear on both sides.",
      "Serve hot with yogurt and pickle."
    ]
  },
  {
    id: 9,
    title: "Palak Paneer",
    image: "https://placehold.co/600x400/f8c40c/222?text=Palak+Paneer",
    prepTime: 25,
    cookTime: 20,
    servings: 4,
    type: "veg",
    difficulty: "Medium",
    description: "Cottage cheese cubes in a creamy spinach gravy, a nutritious North Indian dish.",
    ingredients: [
      "500g spinach leaves",
      "250g paneer, cubed",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 inch ginger, grated",
      "2 green chilies",
      "1/2 tsp garam masala",
      "1/4 cup cream",
      "2 tbsp butter or oil",
      "Salt to taste"
    ],
    instructions: [
      "Blanch spinach in boiling water for 2 minutes, then place in ice water.",
      "Blend blanched spinach into a smooth puree.",
      "Heat butter in a pan, sauté onion, garlic, and ginger until golden.",
      "Add green chilies and spinach puree, cook for 5 minutes.",
      "Add paneer cubes, garam masala, and salt.",
      "Simmer for 5 minutes, then add cream.",
      "Serve hot with roti or naan."
    ]
  },
  {
    id: 10,
    title: "Butter Chicken",
    image: "https://placehold.co/600x400/f8c40c/222?text=Butter+Chicken",
    prepTime: 60,
    cookTime: 30,
    servings: 4,
    type: "non-veg",
    difficulty: "Medium",
    description: "Tender chicken pieces in a rich, buttery tomato gravy, a restaurant favorite.",
    ingredients: [
      "800g chicken, cut into pieces",
      "100g butter",
      "400g tomato puree",
      "200ml cream",
      "2 tbsp kasuri methi (dried fenugreek leaves)",
      "2 tbsp ginger-garlic paste",
      "2 tsp garam masala",
      "1 tsp red chili powder",
      "1 tbsp tandoori masala (for marination)",
      "2 tbsp yogurt (for marination)",
      "Salt to taste"
    ],
    instructions: [
      "Marinate chicken with yogurt, tandoori masala, and salt for at least 1 hour.",
      "Grill or bake marinated chicken until 80% cooked.",
      "In a pan, heat butter and sauté ginger-garlic paste.",
      "Add tomato puree, red chili powder, and garam masala.",
      "Cook until oil separates, then add cream and kasuri methi.",
      "Add grilled chicken pieces and simmer for 15 minutes.",
      "Adjust seasoning and serve hot with naan or rice."
    ]
  },
  {
    id: 11,
    title: "Chicken Biryani",
    image: "https://placehold.co/600x400/f8c40c/222?text=Chicken+Biryani",
    prepTime: 90,
    cookTime: 45,
    servings: 6,
    type: "non-veg",
    difficulty: "Hard",
    description: "Aromatic rice dish layered with marinated chicken and fragrant spices.",
    ingredients: [
      "1 kg chicken, cut into pieces",
      "2 cups basmati rice, soaked for 30 minutes",
      "2 onions, thinly sliced and fried until golden",
      "1/2 cup yogurt",
      "2 tbsp ginger-garlic paste",
      "2 tsp biryani masala",
      "1 tsp saffron strands, soaked in warm milk",
      "1/4 cup mint leaves",
      "1/4 cup coriander leaves",
      "4 tbsp ghee",
      "Whole spices (cinnamon, cardamom, cloves)",
      "Salt to taste"
    ],
    instructions: [
      "Marinate chicken with yogurt, ginger-garlic paste, and biryani masala for 2 hours.",
      "Parboil rice with whole spices until 70% cooked, drain and set aside.",
      "In a heavy-bottomed pot, layer half the rice, then the marinated chicken.",
      "Top with remaining rice, sprinkle saffron milk, fried onions, mint, and coriander.",
      "Seal the pot with dough or foil and cook on low heat for 25-30 minutes.",
      "Let it rest for 10 minutes before opening.",
      "Gently mix and serve hot with raita."
    ]
  },
  {
    id: 12,
    title: "Tandoori Chicken",
    image: "https://placehold.co/600x400/f8c40c/222?text=Tandoori+Chicken",
    prepTime: 120,
    cookTime: 30,
    servings: 4,
    type: "non-veg",
    difficulty: "Medium",
    description: "Chicken marinated in yogurt and spices, traditionally cooked in a clay oven.",
    ingredients: [
      "1 whole chicken, cut into pieces",
      "1 cup yogurt",
      "2 tbsp tandoori masala",
      "2 tbsp lemon juice",
      "2 tbsp ginger-garlic paste",
      "1 tsp red chili powder",
      "1 tsp garam masala",
      "1 tbsp mustard oil (optional)",
      "Salt to taste"
    ],
    instructions: [
      "Make cuts in chicken pieces for better marinade penetration.",
      "Mix yogurt with all spices, lemon juice, and ginger-garlic paste.",
      "Marinate chicken in this mixture for at least 4 hours, preferably overnight.",
      "Preheat oven to 200°C (400°F) or prepare grill.",
      "Cook chicken for 25-30 minutes, turning occasionally, until charred and fully cooked.",
      "Baste with butter or oil while cooking for extra flavor.",
      "Serve hot with mint chutney and sliced onions."
    ]
  },
  {
    id: 13,
    title: "Gobi Manchurian",
    image: "https://placehold.co/600x400/f8c40c/222?text=Gobi+Manchurian",
    prepTime: 45,
    cookTime: 20,
    servings: 4,
    type: "veg",
    difficulty: "Medium",
    description: "Crispy cauliflower florets tossed in a spicy, tangy sauce, an Indo-Chinese favorite.",
    ingredients: [
      "1 medium cauliflower, cut into florets",
      "1/2 cup cornflour",
      "1/4 cup all-purpose flour",
      "3 tbsp soy sauce",
      "2 tbsp chili sauce",
      "1 tbsp vinegar",
      "6 cloves garlic, minced",
      "1 inch ginger, finely chopped",
      "2 green chilies, chopped",
      "1 onion, diced",
      "1 bell pepper, diced",
      "Spring onions for garnish",
      "Oil for deep frying",
      "Salt to taste"
    ],
    instructions: [
      "Mix cornflour, all-purpose flour, salt, and water to make a batter.",
      "Dip cauliflower florets in batter and deep fry until golden and crisp.",
      "For the sauce, heat 2 tbsp oil in a pan and sauté garlic, ginger, and green chilies.",
      "Add onions and bell peppers, stir-fry for 2 minutes.",
      "Add soy sauce, chili sauce, vinegar, and salt.",
      "Toss fried cauliflower in the sauce until well coated.",
      "Garnish with spring onions and serve hot."
    ]
  },
  {
    id: 14,
    title: "Hakka Noodles",
    image: "https://placehold.co/600x400/f8c40c/222?text=Hakka+Noodles",
    prepTime: 30,
    cookTime: 15,
    servings: 2,
    type: "veg",
    difficulty: "Easy",
    description: "Stir-fried noodles with vegetables and sauces, a popular Indo-Chinese dish.",
    ingredients: [
      "200g noodles",
      "1 carrot, julienned",
      "1 bell pepper, julienned",
      "1 cup cabbage, shredded",
      "2 spring onions, chopped",
      "4 cloves garlic, minced",
      "2 tbsp soy sauce",
      "1 tbsp chili sauce",
      "1 tsp vinegar",
      "2 tbsp oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Boil noodles according to package instructions, drain and toss with 1 tsp oil.",
      "Heat remaining oil in a wok or pan on high heat.",
      "Add garlic and stir-fry for 30 seconds.",
      "Add all vegetables and stir-fry for 2-3 minutes until crisp-tender.",
      "Add boiled noodles, soy sauce, chili sauce, and vinegar.",
      "Toss everything together on high heat for 2 minutes.",
      "Season with salt and pepper, garnish with spring onions.",
      "Serve hot as a main dish or side."
    ]
  }
];

export default recipes;