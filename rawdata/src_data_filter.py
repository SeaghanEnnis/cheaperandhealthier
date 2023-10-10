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
    "Yogurt, Greek, strawberry, nonfat"

]
x = 1

for food in data:
    if data[food]["name"] not in ignore_foods:
        thisFood = {}
        thisFood["id"] = x
        x += 1
        thisFood["name"] = data[food]["name"]
        thisFood["type"] = "Unknown"
        thisFood["price"] = 100
        if("nutrients" in data[food] and "Energy" in data[food]["nutrients"]):
            thisFood["calories"] = data[food]["nutrients"]["Energy"]["amount"]
        else: 
            thisFood["calories"] = -1
        total_output["foods"].append(thisFood)

w = open("rawdata/src_data_filter.json", "w")
w.write(json.dumps(total_output["foods"]))
f.close()
w.close()

