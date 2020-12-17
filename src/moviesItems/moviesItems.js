import React from "react";
import professionnelImg from "../images/movies/professionnel.jpg"
import leonImg from "../images/movies/leon.jpg"
import pantinImg from "../images/movies/pantin.jpg"
import chevreImg from "../images/movies/chevre.jpg"
import gardeavueImg from "../images/movies/gardeavue.jpg"
import roseImg from "../images/movies/rose.jpg"

export const MoviesItems = [
    {
        title: "Le Professionnel",
        date: "Jeudi 5 août 18h et dimanche 8 août 21h",
        realisator: "Georges Lautner",
        scenario:"Georges Lautner",
        actors: "Jean-Paul Belmondo, Jean Desailly, Robert Hossein, Cyrielle Claire, Marie-Christine, Descouard Elisabeth, Margoni Jean-Louis, Richard Michel Beaune",
        kind: "Action",
        duration: "108 minutes",
        trailer: <iframe title="Le Professionnel" width="560" height="315" src="https://www.youtube.com/embed/OA67o29fnGk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        image: professionnelImg
    },
    {
        title: "Léon",
        date: "Jeudi 5 août 21h",
        realisator: "Luc Besson",
        scenario:"Luc Besson",
        actors: "Jean Reno, Gary Oldman, Natalie Portman, Danny Aiello",
        kind: "Action",
        duration: "110 minutes",
        trailer: <iframe title="Leon" width="560" height="315" src="https://www.youtube.com/embed/vSi5jdziv3I" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        image: leonImg
    },
    {
        title: "Tchao Pantin",
        date: "vendredi 6 août 18h",
        realisator: "Claude Berri",
        scenario:"Claude Berri",
        actors: "Coluche, Richard Anconin, Agnès Soral, Philippe Léotard",
        kind: "Drame",
        duration: "100 minutes",
        trailer: <iframe title="Tchao pantin" width="560" height="315" src="https://www.youtube.com/embed/DjZKeyjpgVU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        image: pantinImg
    },
    {
        title: "La Chèvre",
        date: "Vendredi 6 août 21h",
        realisator: "Francis Veber",
        scenario:"Francis Veber",
        actors: "Gérard Depardieu, Pierre Richard",
        kind: "Comédie",
        duration: "108 minutes",
        trailer: <iframe title="La chèvre" width="560" height="315" src="https://www.youtube.com/embed/32tlvttGjBU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        image: chevreImg
    },
    {
        title: "Garde à vue",
        date: "Samedi 7 août 18h",
        realisator: "Claude Miller",
        scenario:"Claude Miller",
        actors: "Lino Ventura, Michel Serrault, Romy Schneider, Guy Marchand",
        kind: "Policier",
        duration: "84 minutes",
        trailer: <iframe title="Garde à vue" width="560" height="315" src="https://www.youtube.com/embed/K-WjtynpplA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        image: gardeavueImg
    },
    {
        title: "Le nom de la Rose",
        date: "Samedi 7 août 21h et dimanche 8 août 18h",
        realisator: "Jean-Jacques Annaud",
        scenario:"Umberto Eco adapté par Andrew Birkin",
        actors: "Sean Connery, Christian Slater, Michael Lonsdale, F. Murray Abraham, Helmut Qualtinger, Valentina Vargas",
        kind: "Drame",
        duration: "131 minutes",
        trailer: <iframe title="Le nom de la Rose" width="560" height="315" src="https://www.youtube.com/embed/fn_OFdvYzQI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
        image: roseImg
    }
]