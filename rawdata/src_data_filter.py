import json

f = open("rawdata\src_data_read.json")

data = json.load(f)

total_output = {}
total_output["foods"] = []

x = 1

for food in data:
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

