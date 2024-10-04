print('hello hakim, how are you')

import pandas as pd
from datetime import datetime

df = pd.read_csv('owid-covid-data.csv')

# ajout de colonne dated de type date/recuperer date max pour un pays
df["dated"] = pd.to_datetime(df["date"])

print(df)

# filtrer un pays pour extraire l'un d'eux
location_filter = df["location"] == "United"
filtre_pays = df[location_filter]
print(filtre_pays)

max_value_column = df["dated"].max()
print(max_value_column)
# ax = filtre_pays.groupby(filtre_pays["dated"].dt.floor("30D")).sum()["total_cases"].plot.hist()
#ax = filtre_pays.plot.hist(column=["total_cases"], by="dated", figsize=(10, 8))
#print(ax)
#print(type(df['total_cases']))

print('hello hakim, how are you')

