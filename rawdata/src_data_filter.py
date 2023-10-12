import json

f = open("rawdata\src_data_read.json")

data = json.load(f)

total_output = {}
total_output["foods"] = []

ignore_foods = [
    "Beans, Dry, Carioca (0% moisture)", 
    "Beans, Dry, Light Tan (0% moisture)",
    "Beans, Dry, Navy (0% moisture)",
    "Beans, Dry, Pink (0% moisture)",
    "Beans, Dry, Red (0% moisture)",
    "Beans, Dry, Small Red (0% moisture)",
    "Beans, Dry, Tan (0% moisture)",
    "Beans, Dry, Small White (0% moisture)",
    "Beans, Dry, Small White (0% moisture)",
    "Carrots, frozen, unprepared",
    "Cheese, parmesan, grated, refrigerated",
    "Cheese, pasteurized process, American, vitamin D fortified",
    "Cheese, American, restaurant",
    "Egg, yolk, dried",
    "Egg, yolk, raw, frozen, pasteurized",
    "Egg, white, dried",
    "Egg, white, raw, frozen, pasteurized",
    "Egg, whole, dried",
    "Egg, whole, raw, frozen, pasteurized",
    "Flour, rice, glutinous",
    "Flour, rice, white, unenriched",
    "Flour, semolina, coarse and semi-coarse",
    "Flour, soy, defatted",
    "Flour, wheat, all-purpose, enriched, unbleached",
    "Flour, whole wheat, unenriched",
    "Kale, frozen, cooked, boiled, drained, without salt",
    "Lettuce, cos or romaine, raw",
    "Orange juice, no pulp, not fortified, from concentrate, refrigerated",
    "Seeds, sunflower seed, kernel, raw",
    "Soy milk, sweetened, plain, refrigerated",
    "Turkey, ground, 93% lean, 7% fat, pan-broiled crumbles",
    "Flour, 00",
    "Restaurant, Chinese, sweet and sour pork",
    "Yogurt, Greek, strawberry, nonfat",
    "Apples, gala, with skin, raw",
    "Apples, granny smith, with skin, raw",
    "Apples, honeycrisp, with skin, raw",
    "Apples, red delicious, with skin, raw",
    "Bananas, overripe, raw",
    "Almond milk, unsweetened, plain, shelf stable"
]

nutrients_to_include = {
    "Energy" : "calories",
    "Protein" : "protein",
    "Carbohydrate, by summation" : "carbohydrates",
    "Carbohydrate, by difference" : "carbohydrates",
    "Total lipid (fat)" : "fats",
    "Sugars, Total" : "sugars",
    "Fiber, total dietary" : "fiber",
     "Magnesium, Mg" : "magnesium_mg", 
     "Selenium, Se" : "selenium_ug", 
     "Sodium, Na" : "sodium_mg", 
     "Zinc, Zn" :"zinc_mg",
     "Copper, Cu" : "copper_mg",
     "Potassium, K" :"potassium_mg", 
    "Phosphorus, P": "phosphorus_mg", 
    "Manganese, Mn": "manganese_mg",
    "Calcium, Ca" : "calcium_mg",
    "Iron, Fe" : "iron_mg", 
    "Vitamin A, RAE," : "vitamin_a_mg",
    "Thiamin" : "vitamin_b1_mg",
    "Riboflavin" : "vitamin_b2_mg",
    "Niacin" : "vitamin_b3_mg", 
    "Panothenic Acid" : "vitamin_b5_mg",
    "Pyridoxal" : "vitamin_b6_mg", 
    "Biotin" : "vitamin_b7_mg",
    "Folate, total" : "vitamin_b9_mg",
    "Cobalamin" : "vitamin_b12_mg", 
    "Vitamin B-6": "vitamin_b6_mg",
    "Vitamin C, total ascorbic acid" : "vitamin_c_mg",
    "Vitamin D (D2 + D3)" : "vitamin_d_mg",
    "Vitamin E (alpha-tocopherol)" : "vitamin_e_mg", 
    "Vitamin K (Dihydrophylloquinone)" : "vitamin_k_mg", 
    "Vitamin K (phylloquinone)" : "vitamin_k_mg"

}
x = 1

for food in data:
    if data[food]["name"] not in ignore_foods:
        thisFood = {}
        thisFood["id"] = x
        x += 1
        thisFood["name"] = data[food]["name"]
        thisFood["type"] = "Unknown"
        thisFood["price"] = 100
        for key,value in nutrients_to_include.items():
            if("nutrients" in data[food] and key in data[food]["nutrients"]):
                if (value in thisFood and thisFood[value] != 0):
                    thisFood[value] =  thisFood[value] if thisFood[value] > data[food]["nutrients"][key]["amount"] else data[food]["nutrients"][key]["amount"]
                else:
                    thisFood[value] = data[food]["nutrients"][key]["amount"]
            else: 
                thisFood[value] = 0

        total_output["foods"].append(thisFood)

w = open("rawdata/src_data_filter.json", "w")
w.write(json.dumps(total_output["foods"]))
f.close()
w.close()

