import csv, json

brothers = {}

with open('website_brothers_list.csv', mode='r') as file:
    csvFile = csv.reader(file)
    for line in csvFile:
        pledge_class = line[-2]
        name = ' '.join(line[:2])
        major = line[2]
        if line[-1] == '0':
            if pledge_class not in brothers:
                brothers[pledge_class] = {}
            
            brothers[pledge_class][name] = {'major': major, 
                  'image': "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}

    pcs = sorted(list(brothers.keys()), key = lambda pc: pc[-4:] + pc[3], reverse=True)
    brothers = {pc: brothers[pc] for pc in pcs}

    with open("brothers.json", "w") as file:
        json.dump(brothers, file, indent=5)
    
    print("Json saved")


