import json

f = open("rawdata\src_data_rename.json")

data = json.load(f)
build_string = "["
for object in data:
    build_string += "new Food("+str(object["id"])+",\""+object["name"]+"\",\""+object["type"]+"\","+str(object["price"])+","+str(object["calories"])+"),"



build_string += "]"

print(build_string)