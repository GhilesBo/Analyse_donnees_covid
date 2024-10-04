import pandas as pd
df = pd.read_csv(\"../owid-covid-data.csv")

#ajout au csv une colonne dated de type date pour comparaison et utilisation de max()
df["dated"] = pd.to_datetime(df["date"])

# selection de pays 
filtre_pays = df["location"] == "France"
df_filtre = df[filtre_pays]

# selection de date max d'un pays
derniere_date = df_filtre['dated'].max()

# histogramme avancé de covid dans la pays filtrer
df_filtre.groupby(df_filtre["dated"].dt.floor("30D")).sum()["total_cases"].plot()

ax = df_filtre["total_cases"].plot.hist(stacked = True, bins = 50)
ax.set_yscale('log')

#from matplotlib import pyplot as plt
#multi_index = df.set_index(['continent' , 'location'])
#country_sum = multi_index.groupby(['location']).agg({'total_cases':['sum'], 'total_deaths':['sum'] })
#country_sum.columns = ['nb_cas_total' , 'nb_total_morts']