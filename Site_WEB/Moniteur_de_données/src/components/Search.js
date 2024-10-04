import React from "react";
import { useState, useEffect } from "react";
import "./Search.css"

// Fonction et composant principale SEARCH qui définit la barre de recherche et le resultat de chaque recherche
function Search() {

    //Definition du tableau qui contiendra les élements importés
    const [datas, setDatas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // on Fetch (importe les données) les données qui sont diffusés sur le port 3060 par le serveur
    useEffect(() => {
        fetch("http://lif.sci-web.net:3060/")
        .then((response) => response.json())
        .then((json) => setDatas(json))

    }, []);

    console.log(datas);

    // definition de l'element qui représente le resultat de la recherche 
    const handleSearchTerm = (e) => {
        let value = e.target.value;
        setSearchTerm(value);
    }
    
    console.log(searchTerm);



    // La div H représente le l'espace dédié au titre
    // La div " SerchBar" la barre de recherche
    // La div " Search_Results" le resultat de la recherche
    return (
        <>
            
 
            <div class="divH1">
                <h1><br /><br />
                    Moniteur de données<br /><br /><br />  <h4 class="divH4">Indiquez le nom d'un pays pour obtenir ses informations</h4>
                </h1>

            </div>


            <div className="searchBar">
                <input
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    placeholder="Rechercher"
                    onChange={handleSearchTerm}
                />
            </div>

            <div className="search_results" >
                {datas.filter((val) => {
                    return val.location.toLowerCase().includes(searchTerm.toLowerCase());

                }).map((val) => {
                    return (
                        <div className="search_result" key={val.id}>
                            Pays: {val.location} <br />
                            Continent: {val.continent} <br />
                            Date de mise a Jour : {val.last_updated_date} <br />
                            Nombre total de cas : {val.total_cases} <br />
                            Nombre total de morts : {val.total_deaths} <br />
                            Nombre total de Vaccinations : {val.total_vaccinations} <br />
                            Nombre total de Vaccinés : {val.people_vaccinated}<br />
                            Nombre de personne totalement vaccinés : {val.people_fully_vaccinated} <br />

                        </div>

                    );
                })}

            </div>
             
        </>
    );
}

export default Search