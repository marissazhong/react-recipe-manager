let recipes = [
    {
        name: "Vanilla Cupcakes",
        prepTime: 20,
        cookTime: 14,
        ingredients: [
            {name: "flour", quantity: "1-1/4 cups"}, 
            {name: "baking powder", quantity: "1-1/4 tsp"},
            {name: "baking soda", quantity: "1/2 tsp"},
            {name: "salt", quantity: "1/2 tsp"},
            {name: "egg", quantity: "2"},
            {name: "sugar", quantity: "3/4 cup"},
            {name: "vanilla extract", quantity: "1-1/2 tsp"},
            {name: "oil", quantity: "1/2 cup"},
            {name: "milk", quantity: "1/2 cup"}
        ],
        directions: [
            "Preheat the oven to 350°F and line a cupcake/muffin pan with cupcake liners.", 
            "In a medium bowl, whisk together 1 1/4 cups cake flour (or Canadian flour), 1 1/4 tsp baking powder, 1/2 tsp baking soda and 1/2 tsp salt.", 
            "In the bowl of an electric mixer, beat 2 eggs with the whisk attachment on medium speed (15-20 seconds).", 
            "Add 3/4 cup sugar and continue to beat on medium speed (30 seconds).", 
            "Add vanilla and oil and beat on medium speed (1 minute).", 
            "Reduce mixer speed to medium/low and slowly add about half of the flour mixture, mixing until incorporated. Add half of the buttermilk and mix until incorporated. Repeat with remaining flour and buttermilk. Beat until just combined and smooth, scraping down the sides of the mixing bowl as needed. The batter will be thin.",
            "Pour batter into a lined muffin pan. Fill to about 1/2 full (Do-Not overfill).", 
            "Bake for 12 -14 minutes at 350 °F or until a toothpick inserted in the center comes out clean. Let them cool in the pan for a couple minutes, then remove. Once the cupcakes are cooled to room temp, pipe on the frosting."
        ]
    },
    {
        name: "Chocolate Chip Cookies",
        prepTime: 20,
        cookTime: 10,
        ingredients: [
            {name: "butter", quantity: "1 cup"}, 
            {name: "sugar", quantity: "2 cups"},
            {name: "egg", quantity: "2"}, 
            {name: "vanilla extract", quantity: "2 tsp"}, 
            {name: "baking soda", quantity: "1 tsp"}, 
            {name: "water", quantity: "2 tsp"}, 
            {name: "salt", quantity: "1/2 tsp"}, 
            {name: "flour", quantity: "3 cups"}, 
            {name: "chocolate chips", quantity: "2 cups"}, 
            {name: "walnuts", quantity: "1 cup"}
        ],
        directions: [
            "Preheat oven to 350 degrees F.", 
            "Cream together the butter, white sugar, and brown sugar until smooth.", 
            "Beat in the eggs one at a time, then stir in the vanilla.", 
            "Dissolve baking soda in hot water. Add to batter along with salt.", 
            "Stir in flour, chocolate chips, and nuts.", 
            "Drop by large spoonfuls onto ungreased pans.", 
            "Bake for about 10 minutes in the preheated oven, or until edges are nicely browned."
        ]
    },
    {
        name: "Pecan Pie",
        prepTime: 20,
        cookTime: 60,
        ingredients: [
            {name: "sugar", quantity: "1-3/4 cups"}, 
            {name: "corn syrup", quantity: "1/4 cup"}, 
            {name: "butter", quantity: "1/4 cup"}, 
            {name: "water", quantity: "1 tbs"}, 
            {name: "cornstarch", quantity: "2 tsp"}, 
            {name: "egg", quantity: "3"}, 
            {name: "salt", quantity: "1/4 tsp"}, 
            {name: "vanilla extract", quantity: "1 tsp"}, 
            {name: "pecans", quantity: "1-1/4 cups"}, 
            {name: "pie shell", quantity: "1"}
        ],
        directions: [
            "Preheat oven to 350 degrees F.", 
            "In a medium saucepan, combine the sugar, corn syrup, butter, water, and cornstarch. Bring to a full boil, and remove from heat.", 
            "In a large bowl, beat eggs until frothy. Gradually beat in cooked syrup mixture. Stir in salt, vanilla, and pecans. Pour into pie shell.", 
            "Bake in preheated oven for 45 to 50 minutes, or until filling is set."
        ]
    }
    // {
    //     name: "",
    //     prepTime: 0,
    //     cookTime: 0,
    //     ingredients: [
    //         {name: "", quantity: ""}
    //     ],
    //     directions: [

    //     ]
    // }
]

let ingredients = [
    {name: "flour"}, {name: "sugar"}, {name: "powdered sugar"},
    {name: "chocolate chips"}, {name: "cocoa powder"}, {name: "vanilla extract"},
    {name: "baking powder"}, {name: "salt"}, {name: "butter"},
    {name: "milk"}, {name: "cream cheese"}, {name: "egg"},
    {name: "vegetable oil"}, {name: "pecans"}, {name: "walnuts"}
]

let users = [
    {username: "marissa", email: "marissa@gmail.com", password: "marissa123"},
    {username: "ryan", email: "ryan@gmail.com", password: "ryan123"}
]

module.exports = {
    recipes,
    ingredients,
    users
}