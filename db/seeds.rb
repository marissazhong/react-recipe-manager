Ingredient.destroy_all

ingredients_database = ["flour", "sugar", "powdered sugar", "chocolate chips", "cocoa powder", "vanilla extract", "baking powder", "baking soda", "salt", "butter", "milk", "cream cheese", "egg", "vegetable oil"]

ingredients_database.each do |ingredient|
    Ingredient.create(name: ingredient)
end

User.create(username: "marissa", password: "marissa123")

recipe1 = {name: "Vanilla Cupcakes", prep_time: 20, cook_time: 14, ingredients_recipes_attributes: {
    "0": {name: "flour", quantity: "1-1/4 cups"}, 
    "1": {name: "baking powder", quantity: "1-1/4 tsp"},
    "2": {name: "baking soda", quantity: "1/2 tsp"},
    "3": {name: "salt", quantity: "1/2 tsp"},
    "4": {name: "egg", quantity: "2"},
    "5": {name: "sugar", quantity: "3/4 cup"},
    "6": {name: "vanilla extract", quantity: "1-1/2 tsp"},
    "7": {name: "oil", quantity: "1/2 cup"},
    "8": {name: "milk", quantity: "1/2 cup"}
}, directions: {
    "0": "Preheat the oven to 350°F and line a cupcake/muffin pan with cupcake liners.", 
    "1": "In a medium bowl, whisk together 1 1/4 cups cake flour (or Canadian flour), 1 1/4 tsp baking powder, 1/2 tsp baking soda and 1/2 tsp salt.", 
    "2": "In the bowl of an electric mixer, beat 2 eggs with the whisk attachment on medium speed (15-20 seconds).", 
    "3": "Add 3/4 cup sugar and continue to beat on medium speed (30 seconds).", 
    "4": "Add vanilla and oil and beat on medium speed (1 minute).", 
    "5": "Reduce mixer speed to medium/low and slowly add about half of the flour mixture, mixing until incorporated. Add half of the buttermilk and mix until incorporated. Repeat with remaining flour and buttermilk. Beat until just combined and smooth, scraping down the sides of the mixing bowl as needed. The batter will be thin.", 
    "6": "Pour batter into a lined muffin pan. Fill to about 1/2 full (Do-Not overfill).", 
    "7": "Bake for 12 -14 minutes at 350 °F or until a toothpick inserted in the center comes out clean. Let them cool in the pan for a couple minutes, then remove. Once the cupcakes are cooled to room temp, pipe on the frosting."}}

recipe2 = {name: "Chocolate Chip Cookies", prep_time: 20, cook_time: 10, ingredients_recipes_attributes: {
    "0": {name: "butter", quantity: "1 cup"}, 
    "1": {name: "sugar", quantity: "2 cups"},
    "2": {name: "egg", quantity: "2"}, 
    "3": {name: "vanilla extract", quantity: "2 tsp"}, 
    "4": {name: "baking soda", quantity: "1 tsp"}, 
    "5": {name: "water", quantity: "2 tsp"}, 
    "6": {name: "salt", quantity: "1/2 tsp"}, 
    "7": {name: "flour", quantity: "3 cups"}, 
    "8": {name: "chocolate chips", quantity: "2 cups"}, 
    "9": {name: "walnuts", quantity: "1 cup"}
}, directions: {
    "0": "Preheat oven to 350 degrees F.", 
    "1": "Cream together the butter, white sugar, and brown sugar until smooth.", 
    "2": "Beat in the eggs one at a time, then stir in the vanilla.", 
    "3": "Dissolve baking soda in hot water. Add to batter along with salt.", 
    "4": "Stir in flour, chocolate chips, and nuts.", 
    "5": "Drop by large spoonfuls onto ungreased pans.", 
    "6": "Bake for about 10 minutes in the preheated oven, or until edges are nicely browned."}}

recipe3 = {name: "Pecan Pie", prep_time: 20, cook_time: 60, ingredients_recipes_attributes: {
    "0": {name: "sugar", quantity: "1-3/4 cups"}, 
    "1": {name: "corn syrup", quantity: "1/4 cup"}, 
    "2": {name: "butter", quantity: "1/4 cup"}, 
    "3": {name: "water", quantity: "1 tbs"}, 
    "4": {name: "cornstarch", quantity: "2 tsp"}, 
    "5": {name: "egg", quantity: "3"}, 
    "6": {name: "salt", quantity: "1/4 tsp"}, 
    "7": {name: "vanilla extract", quantity: "1 tsp"}, 
    "8": {name: "pecans", quantity: "1-1/4 cups"}, 
    "9": {name: "pie shell", quantity: "1"}
}, directions: {
    "0": "Preheat oven to 350 degrees F.", 
    "1": "In a medium saucepan, combine the sugar, corn syrup, butter, water, and cornstarch. Bring to a full boil, and remove from heat.", 
    "2": "In a large bowl, beat eggs until frothy. Gradually beat in cooked syrup mixture. Stir in salt, vanilla, and pecans. Pour into pie shell.", 
    "3": "Bake in preheated oven for 45 to 50 minutes, or until filling is set."}}


recipe4 = {name: "Chocolate Babka", prep_time: 150, cook_time: 50, ingredients_recipes_attributes: {
    "0": {name: "milk", quantity: "1/2 cup"},
    "1": {name: "active dry yeast", quantity: "1 pkg"},
    "2": {name: "sugar", quantity: "1/3 cup"},
    "3": {name: "flour", quantity: "4-1/4 cups"},
    "4": {name: "salt", quantity: "1-1/2 cup"},
    "5": {name: "vanilla extract", quantity: "1 tsp"},
    "6": {name: "nutmeg", quantity: "1/2 tsp"},
    "7": {name: "egg", quantity: "4 ct"},
    "8": {name: "butter", quantity: "10 tbs"},
    "9": {name: "sugar", quantity: "1/2 cup"},
    "10": {name: "heavy cream", quantity: "3/4 cup"},
    "11": {name: "chocolate", quantity: "6 oz"},
    "12": {name: "butter", quantity: "1/2 cup"},
    "13": {name: "vanilla extract", quantity: "2 tsp"},
    "14": {name: "flour", quantity: "1/2 cup"},
    "15": {name: "sugar", quantity: "3 tbs"},
    "16": {name: "cocoa powder", quantity: "1-1/2 tbs"},
    "17": {name: "salt", quantity: "1/2 tsp"},
    "18": {name: "butter", quantity: "4-1/2 tbs"},
    "19": {name: "chocolate chips", quantity: "1/3 cup"}
}, directions: {
    "0": "Prepare the dough: In a small saucepan or a bowl in the microwave, warm the milk until it’s lukewarm but not hot (about 110 degrees). Add yeast and a pinch of sugar and let sit for 5 to 10 minutes, until slightly foamy.",
    "1": "In an electric mixer fitted with the dough hook, or in a food processor, mix together flour, 1/3 cup sugar, the salt, the vanilla, the lemon zest (if using) and the nutmeg. (If you don't have a mixer or processor, use a large bowl and a wooden spoon.) Beat or process in the yeast mixture and eggs until the dough comes together in a soft mass, about 2 minutes. If the dough sticks to the side of the bowl and doesn’t come together, add a tablespoon more flour at a time until it does, beating very well in between additions.",
    "2": "Add half the butter and beat or pulse until the dough is smooth and elastic, 3 to 5 minutes, scraping down the sides of the bowl with a spatula as needed. Beat in the rest of the butter and continue to beat or pulse until the dough is smooth and stretchy, another 5 to 7 minutes. Again, if the dough sticks to the sides of the bowl, add additional flour, 1 tablespoon at a time.",
    "3": "Butter a clean bowl, form the dough into a ball and roll it around in the bowl so all sides are buttered. Cover the bowl with a clean towel and let it rise in a warm, draft-free place (inside of a turned-off oven with the oven light on is good) until it puffs and rises, about 1 to 2 hours. It may not double in bulk but it should rise.",
    "4": "Press the dough down with your hands, re-cover the bowl and refrigerate overnight (or, in a pinch, for at least 4 hours, but the flavor won't be as developed).",
    "5": "Prepare the filling: In a medium saucepan over medium heat, combine sugar, cream and salt. Simmer, stirring occasionally, until sugar completely dissolves, about 5 minutes. Scrape mixture into a bowl. Stir in chocolate, butter and vanilla until smooth. Let cool to room temperature. Filling can be made up to a week ahead and stored, covered, in the fridge. Let come to room temperature before using.",
    "6": "Prepare the streusel: In a bowl, stir together flour, sugar, cocoa powder and salt. Stir in melted butter until it is evenly distributed and forms large, moist crumbs. Stir in the chocolate chips. Streusel can be prepared up to 3 days ahead and stored, covered, in the fridge.",
    "7": "Prepare the syrup: In a small saucepan, combine sugar and 2/3 cup/158 milliliters water. Bring to a simmer over medium heat, then simmer for 2 minutes, stirring occasionally until the sugar dissolves.",
    "8": "Butter two 9-inch loaf pans, then line with parchment paper, leaving 2 inches of paper hanging over on the sides to use as handles later.",
    "9": "Remove dough from refrigerator and divide in half. On a floured surface, roll one piece into a 9-by-17-inch rectangle. Spread with half the filling (there's no need to leave a border). Starting with a long side, roll into a tight coil. Transfer the coil onto a dish towel or piece of plastic wrap and stick it in the freezer for 10 minutes. Repeat with the other piece of dough.",
    "10": "Slice one of the dough coils in half lengthwise to expose the filling. Twist the halves together as if you were braiding them, then fold the braid in half so it’s about 9 inches long. Place into a prepared pan, letting it curl around itself if it’s a little too long for the pan. Cover loosely with a clean kitchen towel and let rise in a warm place for 1 to 1 1/2 hours, until puffy (it won’t quite double). Alternatively, you can cover the pans with plastic wrap and let them rise in the refrigerator overnight; bring them back to room temperature for an hour before baking.",
    "11": "When you're ready to bake, heat the oven to 350 degrees. Use your fingers to clump streusel together and scatter all over the tops of the cakes. Transfer to oven and bake until a tester goes into the cakes without any rubbery resistance and comes out clean, 40 to 50 minutes. The cakes will also sound hollow if you unmold them and tap on the bottom. An instant-read thermometer will read between 185 and 210 degrees."}}
    
recipe5 = {name: "Macaron", prep_time: 150, cook_time: 10, ingredients_recipes_attributes: {
    "0": {name: "egg white", quantity: "3 ct"},
    "1": {name: "sugar", quantity: "1/4 cup"},
    "2": {name: "powdered sugar", quantity: "1-2/3 cups"},
    "3": {name: "almond flour", quantity: "1 cup"}
}, directions: {
    "0": "Beat egg whites in the bowl of a stand mixer fitted with a whisk attachment until whites are foamy; beat in white sugar and continue beating until egg whites are glossy, fluffy, and hold soft peaks. Sift confectioners' sugar and ground almonds in a separate bowl and quickly fold the almond mixture into the egg whites, about 30 strokes.",
    "1": "Spoon a small amount of batter into a plastic bag with a small corner cut off and pipe a test disk of batter, about 1 1/2 inches in diameter, onto prepared baking sheet. If the disk of batter holds a peak instead of flattening immediately, gently fold the batter a few more times and retest.",
    "2": "When batter is mixed enough to flatten immediately into an even disk, spoon into a pastry bag fitted with a plain round tip. Pipe the batter onto the baking sheet in rounds, leaving space between the disks. Let the piped cookies stand out at room temperature until they form a hard skin on top, about 1 hour.",
    "3": "Preheat oven to 285 degrees F (140 degrees C). Bake cookies until set but not browned, about 10 minutes; let cookies cool completely before filling."}}

recipe6 = {name: "French Meringue", prep_time: 20, cook_time: 180, ingredients_recipes_attributes: {
    "0": {name: "egg white", quantity: "4 ct"},
    "1": {name: "powdered sugar", quantity: "2-1/4 cups"}
}, directions: {
    "0": "Preheat the oven to 200 degrees F (95 degrees C). Butter and flour a baking sheet.",
    "1": "In a glass or metal bowl, whip egg whites until foamy using an electric mixer. Sprinkle in sugar a little at a time, while continuing to whip at medium speed. When the mixture becomes stiff and shiny like satin, stop mixing, and transfer the mixture to a large pastry bag. Pipe the meringue out onto the prepared baking sheet using a large round tip or star tip.",
    "2": "Place the meringues in the oven and place a wooden spoon handle in the door to keep it from closing all the way. Bake for 3 hours, or until the meringues are dry, and can easily be removed from the pan. Allow cookies to cool completely before storing in an airtight container at room temperature."}}
    
recipe7 = {name: "Brownies", prep_time: 30, cook_time: 30, ingredients_recipes_attributes: {
    "0": {name: "butter", quantity: "1/2 cup"},
    "1": {name: "sugar", quantity: "1 cup"},
    "2": {name: "egg", quantity: "2 ct"},
    "3": {name: "vanilla extract", quantity: "1 tsp"},
    "4": {name: "cocoa powder", quantity: "1/3 cup"},
    "5": {name: "flour", quantity: "1/2 cup"},
    "6": {name: "salt", quantity: "1/4 salt"},
    "7": {name: "baking powder", quantity: "1/4 cup"}
}, directions: {
    "0": "Preheat oven to 350 degrees F (175 degrees C). Grease and flour an 8-inch square pan.",
    "1": "In a large saucepan, melt 1/2 cup butter. Remove from heat, and stir in sugar, eggs, and 1 teaspoon vanilla. Beat in 1/3 cup cocoa, 1/2 cup flour, salt, and baking powder. Spread batter into prepared pan.",
    "2": "Bake in preheated oven for 25 to 30 minutes."}}

recipe8 = {name: "Crepes", prep_time: 15, cook_time: 20, ingredients_recipes_attributes: {
    "0": {name: "flour", quantity: "1 cup"},
    "1": {name: "egg", quantity: "2 ct"},
    "2": {name: "milk", quantity: "1/2 cup"},
    "3": {name: "water", quantity: "1/2 cup"},
    "4": {name: "salt", quantity: "1/4 tsp"},
    "5": {name: "butter", quantity: "2 tbs"}            
}, directions: {
    "0": "In a large mixing bowl, whisk together the flour and the eggs. Gradually add in the milk and water, stirring to combine. Add the salt and butter; beat until smooth.",
    "1": "Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each crepe. Tilt the pan with a circular motion so that the batter coats the surface evenly.",
    "2": "Cook the crepe for about 2 minutes, until the bottom is light brown. Loosen with a spatula, turn and cook the other side. Serve hot."}}

recipe9 = {name: "Sugar Coated Pecans", prep_time: 15, cook_time: 60, ingredients_recipes_attributes: {
    "0": {name: "egg white", quantity: "1 ct"},
    "1": {name: "water", quantity: "1 tbs"},
    "2": {name: "pecans", quantity: "1 lb"},
    "3": {name: "sugar", quantity: "1 cup"},
    "4": {name: "salt", quantity: "3/4 tsp"},
    "5": {name: "cinnamon", quantity: "1/2 tsp"}
}, directions: {
    "0": "Preheat oven to 250 degrees F (120 degrees C). Grease one baking sheet. ",
    "1": "In a mixing bowl, whip together the egg white and water until frothy. In a separate bowl, mix together sugar, salt, and cinnamon.",
    "2": "Add pecans to egg whites, stir to coat the nuts evenly. Remove the nuts, and toss them in the sugar mixture until coated. Spread the nuts out on the prepared baking sheet.",
    "3": "Bake at 250 degrees F (120 degrees C) for 1 hour. Stir every 15 minutes."}}

recipe10 = {name: "Challah Bread", prep_time: 30, cook_time: 40, ingredients_recipes_attributes: {
    "0": {name: "water", quantity: "2-1/2 cups"},
    "1": {name: "active dry yeast", quantity: "1 tbs"},
    "2": {name: "honey", quantity: "1/2 cup"},
    "3": {name: "vegetable oil", quantity: "4 tbs"},
    "4": {name: "egg", quantity: "3 ct"},
    "5": {name: "salt", quantity: "1 tbs"},
    "6": {name: "flour", quantity: "8 cups"}            
}, directions: {
    "0": "In a large bowl, sprinkle yeast over barely warm water. Beat in honey, oil, 2 eggs, and salt. Add the flour one cup at a time, beating after each addition, graduating to kneading with hands as dough thickens. Knead until smooth and elastic and no longer sticky, adding flour as needed. Cover with a damp clean cloth and let rise for 1 1/2 hours or until dough has doubled in bulk.",
    "1": "Punch down the risen dough and turn out onto floured board. Divide in half and knead each half for five minutes or so, adding flour as needed to keep from getting sticky. Divide each half into thirds and roll into long snake about 1 1/2 inches in diameter. Pinch the ends of the three snakes together firmly and braid from middle. Either leave as braid or form into a round braided loaf by bringing ends together, curving braid into a circle, pinch ends together. Grease two baking trays and place finished braid or round on each. Cover with towel and let rise about one hour.",
    "2": "Preheat oven to 375 degrees F (190 degrees C).",
    "3": "Beat the remaining egg and brush a generous amount over each braid.",
    "4": "Bake at 375 degrees F (190 degrees C) for about 40 minutes. Bread should have a nice hollow sound when thumped on the bottom. Cool on a rack for at least one hour before slicing."}}

recipe11 = {name: "Carrot Cake", prep_time: 20, cook_time: 60, ingredients_recipes_attributes: {
    "0": {name: "egg", quantity: "3 ct"},
    "1": {name: "buttermilk", quantity: "3/4 cup"},
    "2": {name: "vegetable oil", quantity: "3/4 cup"},
    "3": {name: "sugar", quantity: "1-1/2 cups"},
    "4": {name: "vanilla extract", quantity: "2 tsp"},
    "5": {name: "cinnamon", quantity: "2 tsp"},
    "6": {name: "salt", quantity: "1/4 tsp"},
    "7": {name: "flour", quantity: "2 cups"},
    "8": {name: "baking soda", quantity: "2 tsp"},
    "9": {name: "shredded carrots", quantity: "2 cups"},
    "10": {name: "flaked coconut", quantity: "2 cups"},
    "11": {name: "walnuts", quantity: "1 cup"},
    "12": {name: "crushed pineapple", quantity: "8 oz"},
    "13": {name: "raisins", quantity: "1 cup"}
}, directions: {
    "0": "Preheat oven to 350 degrees F (175 degrees C). Grease and flour an 8x12 inch pan.",
    "1": "In a medium bowl, sift together flour, baking soda, salt and cinnamon. Set aside.",
    "2": "In a large bowl, combine eggs, buttermilk, oil, sugar and vanilla. Mix well. Add flour mixture and mix well.",
    "3": "In a medium bowl, combine shredded carrots, coconut, walnuts, pineapple and raisins.",
    "4": "Using a large wooden spoon or a very heavy whisk, add carrot mixture to batter and fold in well.",
    "5": "Pour into prepared 8x12 inch pan, and bake at 350 degrees F (175 degrees C) for 1 hour. Check with toothpick.",
    "6": "Allow to cool for at least 20 minutes before serving."}}

recipe12 = {name: "Peanut Butter Cookies", prep_time: 15, cook_time: 10, ingredients_recipes_attributes: {
    "0": {name: "butter", quantity: "1 cup"},
    "1": {name: "peanut butter", quantity: "1 cup"},
    "2": {name: "white sugar", quantity: "1 cup"},
    "3": {name: "brown sugar", quantity: "1 cup"},
    "4": {name: "egg", quantity: "2 ct"},
    "5": {name: "flour", quantity: "2-1/2 cups"},
    "6": {name: "baking powder", quantity: "1 tsp"},
    "7": {name: "salt", quantity: "1/2 tsp"},
    "8": {name: "baking soda", quantity: "1-1/2 tsp"}
}, directions: {
    "0": "Cream butter, peanut butter, and sugars together in a bowl; beat in eggs.",
    "1": "In a separate bowl, sift flour, baking powder, baking soda, and salt; stir into butter mixture. Put dough in refrigerator for 1 hour.",
    "2": "Roll dough into 1 inch balls and put on baking sheets. Flatten each ball with a fork, making a crisscross pattern. Bake in a preheated 375 degrees F oven for about 10 minutes or until cookies begin to brown."}}

recipe13 = {name: "Lemon Bars", prep_time: 15, cook_time: 40, ingredients_recipes_attributes: {
    "0": {name: "butter", quantity: "1 cup"},
    "1": {name: "sugar", quantity: "1/2 cup"},
    "2": {name: "flour", quantity: "2 cups"},
    "3": {name: "egg", quantity: "4 ct"},
    "4": {name: "sugar", quantity: "1-1/2 cups"},
    "5": {name: "flour", quantity: "1/4 cup"},
    "6": {name: "lemon", quantity: "2 ct"}         
}, directions: {
    "0": "Preheat oven to 350 degrees F (175 degrees C).",
    "1": "In a medium bowl, blend together softened butter, 2 cups flour and 1/2 cup sugar. Press into the bottom of an ungreased 9x13 inch pan.",
    "2": "Bake for 15 to 20 minutes in the preheated oven, or until firm and golden. In another bowl, whisk together the remaining 1 1/2 cups sugar and 1/4 cup flour. Whisk in the eggs and lemon juice. Pour over the baked crust.",
    "3": "Bake for an additional 20 minutes in the preheated oven. The bars will firm up as they cool. For a festive tray, make another pan using limes instead of lemons and adding a drop of green food coloring to give a very pale green. After both pans have cooled, cut into uniform 2 inch squares and arrange in a checker board fashion."}}

recipe14 = {name: "Sugar Cookies", prep_time: 15, cook_time: 10, ingredients_recipes_attributes: {
    "0": {name: "flour", quantity: "2-3/4 cups"},
    "1": {name: "baking soda", quantity: "1 tsp"},
    "2": {name: "baking powder", quantity: "1/2 tsp"},
    "3": {name: "butter", quantity: "1 cup"},
    "4": {name: "sugar", quantity: "1-1/2 cups"},
    "5": {name: "egg", quantity: "1 ct"},
    "6": {name: "vanilla extract", quantity: "1 tsp"}            
}, directions: {
    "0": "Preheat oven to 375 degrees F (190 degrees C). In a small bowl, stir together flour, baking soda, and baking powder. Set aside.",
    "1": "In a large bowl, cream together the butter and sugar until smooth. Beat in egg and vanilla. Gradually blend in the dry ingredients. Roll rounded teaspoonfuls of dough into balls, and place onto ungreased cookie sheets.",
    "2": "Bake 8 to 10 minutes in the preheated oven, or until golden. Let stand on cookie sheet two minutes before removing to cool on wire racks."}}

recipe15 = {name: "Oatmeal Raisin Cookies", prep_time: 15, cook_time: 10, ingredients_recipes_attributes: {
    "0": {name: "butter", quantity: "3/4 cup"},
    "1": {name: "white sugar", quantity: "3/4 cup"},
    "2": {name: "brown sugar", quantity: "3/4 cup"},
    "3": {name: "egg", quantity: "2 ct"},
    "4": {name: "vanilla extract", quantity: "1 tsp"},
    "5": {name: "flour", quantity: "1-1/4 cup"},
    "6": {name: "baking soda", quantity: "1 tsp"},
    "7": {name: "cinnamon", quantity: "3/4 tsp"},
    "8": {name: "salt", quantity: "1/2 tsp"},
    "9": {name: "oats", quantity: "2-3/4 cups"},            
    "10": {name: "raisins", quantity: "1 cup"}            
}, directions: {
    "0": "Preheat oven to 375 degrees F (190 degrees C).",
    "1": "In large bowl, cream together butter, white sugar, and brown sugar until smooth. Beat in the eggs and vanilla until fluffy. Stir together flour, baking soda, cinnamon, and salt. Gradually beat into butter mixture. Stir in oats and raisins. Drop by teaspoonfuls onto ungreased cookie sheets.",
    "2": "Bake 8 to 10 minutes in the preheated oven, or until golden brown. Cool slightly, remove from sheet to wire rack. Cool completely."}}

recipe16 = {name: "Cranberry Pistachio Biscotti", prep_time: 25, cook_time: 45, ingredients_recipes_attributes: {
    "0": {name: "olive oil", quantity: "1/4 cup"},
    "1": {name: "sugar", quantity: "3/4 cup"},
    "2": {name: "vanilla extract", quantity: "2 tsp"},
    "3": {name: "almond extract", quantity: "1/2 tsp"},
    "4": {name: "egg", quantity: "2 ct"},
    "5": {name: "flour", quantity: "1-3/4 cup"},
    "6": {name: "salt", quantity: "1/4 tsp"},
    "7": {name: "baking powder", quantity: "1 tsp"},
    "8": {name: "dried cranberries", quantity: "1/2 cup"},
    "9": {name: "pistachios", quantity: "1-1/2 cups"}
}, directions: {
    "0": "Preheat the oven to 300 degrees F (150 degrees C).",
    "1": "In a large bowl, mix together oil and sugar until well blended. Mix in the vanilla and almond extracts, then beat in the eggs. Combine flour, salt, and baking powder; gradually stir into egg mixture. Mix in cranberries and nuts by hand.",
    "2": "Divide dough in half. Form two logs (12x2 inches) on a cookie sheet that has been lined with parchment paper. Dough may be sticky; wet hands with cool water to handle dough more easily.",
    "3": "Bake for 35 minutes in the preheated oven, or until logs are light brown. Remove from oven, and set aside to cool for 10 minutes. Reduce oven heat to 275 degrees F (135 degrees C).",
    "4": "Cut logs on diagonal into 3/4 inch thick slices. Lay on sides on parchment covered cookie sheet. Bake approximately 8 to 10 minutes, or until dry; cool."}}

recipe17 = {name: "Russian Tea Cakes", prep_time: 60, cook_time: 45, ingredients_recipes_attributes: {
    "0": {name: "flour", quantity: "1 cup"},
    "1": {name: "pecans", quantity: "1 cup"},
    "2": {name: "butter", quantity: "1/2 cup"},
    "3": {name: "sugar", quantity: "2 tbs"},
    "4": {name: "vanilla extract", quantity: "1 tsp"}            
}, directions: {
    "0": "Heat oven to 300F. Have ungreased cookies sheet ready.",
    "1": "Process flour and pecans in a food processor or blender until nuts are very finely chopped.",
    "2": "Beat butter, sugar and vanilla in a large bowl with electric mixer until pale and fluffy. With mixer on low speed, gradually beat in flour mixture just until blended.",
    "3": "Roll level tablespoonfuls dough into balls. Place about 1 inch apart on cookie sheet.",
    "4": "Bake 45 min or until golden. While warm, roll in confectioners' sugar. Place on wire rack to cool completely, then roll in confectioners' sugar again."}}

recipe18 = {name: "Red Velvet Cake", prep_time: 40, cook_time: 20, ingredients_recipes_attributes: {
    "0": {name: "butter", quantity: "1/2 cup"},
    "1": {name: "cocoa powder", quantity: "3 tbs"},
    "2": {name: "sugar", quantity: "1-1/2 cup"},
    "3": {name: "egg", quantity: "2 ct"},
    "4": {name: "vanilla extract", quantity: "2 tsp"},
    "5": {name: "red food coloring", quantity: "2 tbs"},
    "6": {name: "salt", quantity: "1 tsp"},
    "7": {name: "baking soda", quantity: "1 tsp"},
    "8": {name: "flour", quantity: "2-1/2 cups"},
    "9": {name: "buttermilk", quantity: "1 cup"},
    "10": {name: "vinegar", quantity: "1 tbs"}
}, directions: {
    "0": "Heat oven to 350 degrees. Prepare three 9-inch cake pans by buttering lightly and sprinkling with 1 tablespoon sifted cocoa powder, tapping pans to coat and discarding extra cocoa.",
    "1": "Cream butter and sugar together. Add eggs one at a time and beat vigorously until each is incorporated. Mix in vanilla.",
    "2": "In a separate bowl, make a paste of the remaining 2 tablespoons cocoa and the food coloring. Blend into butter mixture.",
    "3": "Sift together remaining dry ingredients. Alternating in 2 batches each, add dry ingredients and buttermilk to the butter mixture. In the last batch of buttermilk, mix in the vinegar before adding to the batter. Mix until blended.",
    "4": "Divide batter among 3 pans and bake for about 20 to 25 minutes. Cool on a rack completely. (Can also be made in 2 cake pans.)",
    "5": "To assemble, remove 1 cake from its pan and place flat side down on a serving platter. Drop about 1 cup of icing onto cake and, using a flat spatula, spread evenly over top. Remove the second cake from its pan. Place flat side down on top of first layer. Use remaining frosting to cover top and sides of cake."}}

recipe19 = {name: "Cheesecake", prep_time: 30, cook_time: 45, ingredients_recipes_attributes: {
    "0": {name: "graham crackers", quantity: "2 cups"},
    "1": {name: "cinnamon", quantity: "1/2 tsp"},
    "2": {name: "butter", quantity: "1/2 cup"},
    "3": {name: "cream cheese", quantity: "1 lb"},
    "4": {name: "egg", quantity: "3 ct"},
    "5": {name: "sugar", quantity: "1 cup"},
    "6": {name: "sour cream", quantity: "1 pint"},
    "7": {name: "lemon zest", quantity: "1 ct"},
    "8": {name: "vanilla extract", quantity: "1/2 tsp"}            
}, directions: {
    "0": "Preheat the oven to 325 degrees F.",
    "1": "In a mixing bowl, combine the ingredients with a fork until evenly moistened. Lightly coat the bottom and sides of an 8-inch springform pan with non-stick cooking spray.",
    "2": "Pour the crumbs into the pan and, using the bottom of a measuring cup or the smooth bottom of a glass, press the crumbs down into the base and 1-inch up the sides. Refrigerate for 5 minutes.",
    "3": "In the bowl of an electric mixer, beat the cream cheese on low speed for 1 minute until smooth and free of any lumps. Add the eggs, 1 at a time, and continue to beat slowly until combined. Gradually add sugar and beat until creamy, for 1 to 2 minutes.",
    "4": "Add sour cream, lemon zest, and vanilla. Periodically scrape down the sides of the bowl and the beaters. The batter should be well-mixed but not over-beaten. Pour the filling into the crust-lined pan and smooth the top with a spatula.",
    "5": "Set the cheesecake pan on a large piece of aluminum foil and fold up the sides around it. Place the cake pan in a large roasting pan. Pour boiling water into the roasting pan until the water is about halfway up the sides of the cheesecake pan; the foil will keep the water from seeping into the cheesecake. Bake for 45 minutes. The cheesecake should still jiggle (it will firm up after chilling), so be careful not to overcook. Let cool in pan for 30 minutes. Chill in the refrigerator, loosely covered, for at least 4 hours. Loosen the cheesecake from the sides of the pan by running a thin metal spatula around the inside rim. Unmold and transfer to a cake plate."}}

recipe20 = {name: "White Cake", prep_time: 20, cook_time: 20, ingredients_recipes_attributes: {
    "0": {name: "sugar", quantity: "1 cup"},
    "1": {name: "butter", quantity: "1/2 cup"},
    "2": {name: "egg", quantity: "2 ct"},
    "3": {name: "vanilla extract", quantity: "2 tsp"},
    "4": {name: "flour", quantity: "1-1/2 cups"},
    "5": {name: "baking powder", quantity: "1-3/4 tsp"},
    "6": {name: "milk", quantity: "1/2 cup"}
}, directions: {
    "0": "Preheat oven to 350 degrees F (175 degrees C). Grease and flour a 9x9 inch pan or line a muffin pan with paper liners.",
    "1": "In a medium bowl, cream together the sugar and butter. Beat in the eggs, one at a time, then stir in the vanilla. Combine flour and baking powder, add to the creamed mixture and mix well. Finally stir in the milk until batter is smooth. Pour or spoon batter into the prepared pan.",
    "2": "Bake for 30 to 40 minutes in the preheated oven. For cupcakes, bake 20 to 25 minutes. Cake is done when it springs back to the touch."}}

recipes = [recipe1, recipe2, recipe3, recipe4, recipe5, recipe6, recipe7, recipe8, recipe9, recipe10, recipe11, recipe12, recipe13, recipe14, recipe15, recipe16, recipe17, recipe18, recipe19, recipe20]

recipes.each do |recipe|
    new_recipe = Recipe.create(name: recipe[:name], prep_time: recipe[:prep_time], cook_time: recipe[:cook_time], user_id: User.find_by(username: "marissa").id)
    new_recipe.directions = recipe[:directions].values
    new_recipe.likes = 0
    recipe[:ingredients_recipes_attributes].each do |id,ingredient|
        current_ingredient = Ingredient.find_or_create_by(name: ingredient[:name].downcase)
        new_recipe.ingredients_recipes.build(ingredient_id: current_ingredient.id, recipe_id: new_recipe.id, name: ingredient[:name], quantity: ingredient[:quantity])
    end
    new_recipe.save
end