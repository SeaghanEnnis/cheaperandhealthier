import json

f = open("rawdata/src_data_filter.json")

data = json.load(f)

rename_map = {
    "Almond butter, creamy" : "Almond Butter",
    "Almond milk, unsweetened, plain, refrigerated" : "Almond Milk",
    "Almond milk, unsweetened, plain, shelf stable": "Almond Milk",
    "Apples, fuji, with skin, raw" : "Apple",
    "Apples, gala, with skin, raw" : "Apple",
    "Apples, granny smith, with skin, raw" : "Apple",
    "Apples, honeycrisp, with skin, raw" : "Apple",
    "Apples, red delicious, with skin, raw" : "Apple",
    "Applesauce, unsweetened, with added vitamin C" : "Applesauce",
    "Apple juice, with added vitamin C, from concentrate, shelf stable": "Apple Juice",
    "Bananas, ripe and slightly ripe, raw": "Bananas",
    "Bananas, overripe, raw": "Bananas",
    "Beans, Dry, Black (0% moisture)" : "Black Beans, Dry",
    "Beans, Dry, Brown (0% moisture)" : "Brown Beans, Dry",
    "Beans, Dry, Carioca (0% moisture" : "Carioca Beans, Dry",
    "Beans, Dry, Cranberry (0% moisture)" : "Cranberry Beans, Dry",
    "Beans, Dry, Dark Red Kidney (0% moisture)" : "Dark Kidney Beans, Dry",
    "Beans, Dry, Flor de Mayo (0% moisture)" : "Flor de Mayo Beans, Dry",
    "Beans, Dry, Great Northern (0% moisture)" : "Great Northern, Dry",
    "Beans, Dry, Light Red Kidney (0% moisture)" : "Light Kidney Beans, Dry",
    "Beans, Dry, Medium Red (0% moisture)" : "Red Beans, Dry",
    "Beans, Dry, Pinto (0% moisture)" :  "Pinto Beans, Dry",
    "Beans, snap, green, canned, regular pack, drained solids" : "Canned Green Beans",
    "Beans, snap, green, raw" : "Green Beans",
    "Beef, ground, 80% lean meat / 20% fat, raw" : "Ground Beef, 80%",
    "Beef, ground, 90% lean meat / 10% fat, raw" : "Ground Beef, 90%",
    "Beef, loin, tenderloin roast, separable lean only, boneless, trimmed to 0\" fat, select, cooked, roasted" : "Beef Tenderlion",
    "Beef, loin, top loin steak, boneless, lip-on, separable lean only, trimmed to 1/8\" fat, choice, raw" : "Top Loin Steak",
    "Beef, round, eye of round roast, boneless, separable lean only, trimmed to 0\" fat, select, raw" : "Eye of Round Roast",
    "Beef, round, top round roast, boneless, separable lean only, trimmed to 0\" fat, select, raw" : "Top Round",
    "Beef, short loin, porterhouse steak, separable lean only, trimmed to 1/8\" fat, select, raw" : "Porterhouse Steak",
    "Beef, short loin, t-bone steak, bone-in, separable lean only, trimmed to 1/8\" fat, choice, cooked, grilled" : "T-Bone Steak",
    "Blueberries, raw" : "Blueberries",
    "Bread, white, commercially prepared": "White Bread",
    "Bread, whole-wheat, commercially prepared": "Wheat Bread",
    "Broccoli, raw": "Broccoli",
    "Buckwheat, whole grain": "Buckwheat",
    "Butter, stick, salted" : "Salted Butter",
    "Butter, stick, unsalted" : "Unsalted Butter",
    "Buttermilk, low fat" : "Buttermilk, 2%",
    "Cabbage, green, raw" : "Green Cabbage",
    "Cabbage, red, raw" : "Red Cabbage",
    "Carrots, baby, raw" : "Baby Carrots",
    "Carrots, mature, raw" : "Carrots",
    "Celery, raw" : "Celery",
    "Cheese, American, restaurant " : "American Cheese",
    "Cheese, cheddar" : "Cheddar Cheese",
    "Cheese, cottage, lowfat, 2% milkfat" : "Cottage Cheese, 2%",
    "Cheese, dry white, queso seco" : "Queso Seco",
    "Cheese, feta, whole milk, crumbled" : "Feta Cheese",
    "Cheese, mozzarella, low moisture, part-skim" : "Mozzarella Cheese",
    "Cheese, parmesan, grated" : "Grated Parmesan Cheese",
    "Cheese, ricotta, whole milk" : "Ricotta Cheese",
    "Cheese, swiss" : "Swiss Cheese",
    "Cherries, sweet, dark red, raw" : "Cherries",
    "Chicken, broiler or fryers, breast, skinless, boneless, meat only, cooked, braised" : "Chicken Breast, Boneless, Skinless",
    "Chicken, broilers or fryers, drumstick, meat only, cooked, braised" : "Chicken Thighs, Boneless, Skinless",
    "Chicken, ground, with additives, raw" : "Ground Chicken",
    "Cookies, oatmeal, soft, with raisins" : "Oatmeal Cookie",
    "Cottage cheese, full fat, large or small curd" : "Cottage Cheese, 4%",
    "Cranberry juice, not fortified, from concentrate, shelf stable" : "Cranberry Juice",
    "Cream cheese, full fat, block" : "Cream Cheese",
    "Cream, heavy" : "Heavy Cream",
    "Cream, sour, full fat" : "Sour Cream",
    "Cucumber, with peel, raw" : "Cucumber",
    "Eggs, Grade A, Large, egg white" : "Egg Whites",
    "Eggs, Grade A, Large, egg whole" : "Eggs",
    "Eggs, Grade A, Large, egg yolk " : "Egg Yolks",
}

skip_dupes = []

renamed_data = []

for food in data:
    food_temp = food
    
    if food["name"] in rename_map:
        print(food["name"])
        food_temp["name"] = rename_map[food["name"]]
        if food["name"] not in skip_dupes:
            renamed_data.append(food_temp)
            skip_dupes.append(food["name"])
    else:
        renamed_data.append(food_temp)
    

w = open("rawdata/src_data_rename.json", "w")
w.write(json.dumps(renamed_data))
f.close()
w.close()
