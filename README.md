<h1>IMPORTANT !!!!!!</h1>
<ul>
    <li> Le fichier rapport.pdf a été ajouté sur le depot suite au bug TOMUSS (erreur500) et sur instructions de Mr Remy CAZABET</li>
</ul>
<h1> Objectif</h1>
<ul>
 <li> Collection de données covid sur différents site: worldometer, our world in data(owid)...</li>
 <li> Représentation de la carte en utilisant Leaflet.js </li>
 <li> Développement du site web en utilisant node.js frontend et backend. <i>Hakim et Amine </i></li>
 <li> Traitements des données csv avec différentes bibliothèques python tel que pandas, matplotlib, seaborn pour des représentation graphique. scikit-learn, prophet(bibliothèque développé par la data science team de facebook) pour des prédiction et estimation vers une années au futur de l'avancées du covid, ainsi que pour le clustering.  <i> Ghiles et Chiheb </i></li>
</ul>
<h1> Membre du groupe </h2>
<ul>
 <li> Boudraa Abdelhakim </li>
 <li> Boudraa Amine </li>
 <li> Boussahla Ghiles </li>
 <li> Talahari Chiheb </li> 
</ul>
<h1> Installation </h2>

<h2>Pour le dossier Back end </h2>
<ul>
<li> installez Node.js : sudo apt install nodejs </li>
<li> installez npm : sudo apt install npm </li>
<li> installez mangoose : npm install mongoose </li>
<li> installez express : npm install express </li>
</ul>

<h2>Pour le dossier Site_Web</h2>
    <ul>
        <li> 1 POUR INSTALLER NODEJS: <br>
	sudo apt-get update <br>
	sudo apt-get install nodejs <br>
	sudo apt-get install nodejs npm 
	</li>
	<li> 
	2 Installer Beefy et Browserify pour initier un serveur qui lance une application coté client: <br>
	npm install beefy browserify -g
	</li>
	<li>
	 Demarer le site WEB:<br>
	- FAIRE 1 & 2  dans les dossiers " Carte intéractive " et " Données avancés " ou bien le faire dans un seule dossier puis le dupliquer et ajouter les composants des deux dossiers.
	</li>
	<li>
	4 Moniteur de données: <br>
	-  Dans un dossier: npx create-react-app searchbar. <br>
	-  Remplacer le dossier " src " créé dans searchbar par celui fournis dans "moniteur de données". 
	</li>
	

<h2>Pour le dossier python_scripts</h2>
    <ul>
        <li> Installer Anaconda  </li> </br>
		<p> si Pandas n'est pas installé de base durant l'installation d'Anaconda </p>
		<li> installer pandas depuis le prompt d'Anaconda : conda install -c anaconda pandas  </li>
		<li> Matplotlib: conda install -c conda-forge matplotlib  </li>
		<li> Plotly: conda install -c plotly plotly  </li>
		<li> Folium:  conda install -c conda-forge folium  </li>
		<li> Scikit-learn:  conda install -c anaconda scikit-learn  </li>
		<li> Prophet:  conda install -c conda-forge prophet </li>
		<li> en cas de problème de solving environment sur le prompt anaconda durant l'installation de l'une des bibliothèques ce-dessus, faite un : conda update conda </li> 
    </ul>

<h1> Execution </h1>
    <ul>
        <li> sur un 1er terminal executez depuis backend/ : nodemon server.js OU node server.js (si une erreur sur le port apparait executez la commande : sudo fuser -k 3060/tcp)
        </li>
        <li>
	Ouvrir les ports:<br>
	- Dans tout les dossiers: " npm start " dans les 3 dossiers initialisés pour le site WEB<br>
	- Ouvrez le naviguateur et naviguez entre les adresses des différents ports ouverts.
	</li>
        <li> Il suffit d'installer Anaconda puis les bibliothèques ci-dessus puis d'ouvrir les scripts dans un 		     notebook </li>
    </ul>





<p> <i>folium</i> map not showing in github with error trust notebook to view map, notebook already trusted.<br>
->solution is using nbviewer: click this [link](http://nbviewer.org/gist/0557901488/f67bd6cec2f0619ed83fef68338584af) to view the full notebook with the map.
</p>
