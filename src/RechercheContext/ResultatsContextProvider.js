import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
const ResultatsContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';
export const ResultatsContextProvider = ( {children}) => {
    const [resultats, setResultats] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [rechercheTerm, setRechercheTerm] = useState('');

    /*
    const options = {
        method: 'GET',
        url: 'https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk',
        headers: {
          'x-user-agent': 'desktop',
          'x-proxy-location': 'EU',
          'x-rapidapi-host': 'google-search3.p.rapidapi.com',
          'x-rapidapi-key': 'fb07c06611msha7dd73a2bbe541bp134ed4jsnd038398be517'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
      */
    const getResultats = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers : {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'EU',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': '120f40bed2msh421a75f2d956e8ap195807jsn6113fdd479bc'
                
            }
        });

        const data = await response.json();
        //console.log(data);
        setResultats(data);
        setIsLoading(false);
    }

    return (
        <ResultatsContext.Provider value={{ getResultats, resultats, rechercheTerm, setRechercheTerm, isLoading}}>{children}</ResultatsContext.Provider>
    );
};

export const useResultatsContext = () => useContext(ResultatsContext);