import json

f = open("rawdata/foodDump.json")

data = json.load(f)

list_of_nutrients = ["Energy", "Protein", "Carbohydrate, by summation",
                     "Total lipid (fat)", "Sugars, Total","Fiber, total dietary",
                     "Magnesium, Mg", "Selenium, Se", "Sodium, Na", "Zinc, Zn","Copper, Cu","Potassium, K", 
                     "Phosphorus, P", "Manganese, Mn","Calcium, Ca","Iron, Fe", "Vitamin A, RAE,",
                     "Thiamin","Riboflavin","Niacin", "Panothenic Acid","Pyridoxal", "Biotin","Folate, total","Cobalamin", "Vitamin B-6",
                     "Vitamin C, total ascorbic acid","Vitamin D (D2 + D3)","Vitamin E (alpha-tocopherol)", 
                     "Vitamin K (Dihydrophylloquinone)", "Vitamin K (phylloquinone)"]


total_output = {}
for i in data['FoundationFoods']:
    food_output = {}
    for nutrient in i['foodNutrients']:
        nutrient_output = {}
        if nutrient['nutrient']['name'] in list_of_nutrients:
            if(nutrient['nutrient']['name'] == "Energy"):
                if(nutrient['nutrient']["unitName"] != "kJ"):
                    nutrient_output['name'] = nutrient['nutrient']['name']
                    nutrient_output["amount"] = nutrient["amount"]
                    nutrient_output["unit"] = nutrient['nutrient']["unitName"]
            else:
                nutrient_output['name'] = nutrient['nutrient']['name']
                nutrient_output["amount"] = nutrient["amount"]
                nutrient_output["unit"] = nutrient['nutrient']["unitName"]
        if nutrient_output != {}:
            food_output[nutrient_output['name']] = nutrient_output

    total_output[i['description']] = {}
    total_output[i['description']]["name"] = i['description']
    total_output[i['description']]["nutrients"] = food_output


w = open("rawdata/src_data_read.json", "w")
w.write(json.dumps(total_output))
f.close()
w.close()
