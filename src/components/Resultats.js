import React, {useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultatsContext } from '../RechercheContext/ResultatsContextProvider.js';
import { Loading } from './Loading.js';
export const Resultats = () => {
    const {resultats, isLoading, getResultats, rechercheTerm} = useResultatsContext();
    const urlLoc = useLocation();

    useEffect (() =>{
        if (rechercheTerm != '') {
            if (urlLoc.pathname == '/recherche') {urlLoc.pathname = '/search'} 
            if (urlLoc.pathname == '/nouveautes') {urlLoc.pathname = '/news'} 
            
            if (urlLoc.pathname == '/videos') {
                getResultats(`/search/q=${rechercheTerm} videos`);
            }
            else {
                getResultats(`${urlLoc.pathname}/q=${rechercheTerm}&num=30`)
            }
        }
    },[rechercheTerm, urlLoc.pathname]);
    //getResultats(`/search/q=test`);

    console.log(resultats);
    //console.log(urlLoc);
    if(isLoading==true) {
        return <Loading />;
    }
    switch (urlLoc.pathname) {
        case '/search':
            return (
                //console.log("zzz"+resultats),
                //<div class="flex-1 p-10 text-2xl font-bold">
                    <div className='flex flex-wrap justify-between sm:px-56 space-y-- sm:px-56'>
                        {resultats.results ? resultats.results.map(resultat => {
                            return <div  className="md:w-2/5 w-full m-4">
                                <p className="text-sm">
                                    {(resultat.link.length > 32) ? resultat.link.substring(0,40) : resultat.link}
                                </p>
                                <a href={resultat.link} target="_blank">
                                    <p className="text-lg hover:underline dark:text-blue-200 text-blue-600">
                                        {resultat.title}
                                    </p>
                                </a>
                            </div> }) : "Erreur"
                    }
                    </div>
                //</div>
            )
        case '/images':
            return (
                //console.log("zzz"+resultats),
                //<div class="flex-1 p-10 text-2xl font-bold">
                    <div className='flex flex-wrap justify-center items-center sm:px-56 space-y-- sm:px-56'>
                        {resultats.image_results ? resultats.image_results.map(resultat => {
                            return <a href={resultat.link.href} className="p-5 m-10 sm:p-3" target="_blank">
                                    <img src={resultat.image.src} alt={resultat.link.title} className="rounded-lg" />
                                    <p className="sm:w-36 w-36 break-words mt-2 cursor-default">{resultat.link.title}</p>
                                </a>
                            }) 
                            : "Erreur"
                    }
                    </div>
                //</div>
            )
        case '/videos':
            return (
                //console.log("zzz"+resultats),
                //<div class="flex-1 p-10 text-2xl font-bold">
                    <div className='flex flex-wrap'>
                        {resultats.results ? resultats.results.map(resultat => {
                            return <div className="flex flex-wrap">
                                <div className="p-1 m-4"> 
                                {/*<p className="p-2">{(resultat.additional_links[0].text.length > 32) ? resultat.link.substring(0,40) : resultat.additional_links[0].text}</p>*/}
                                <ReactPlayer url={resultat.additional_links[0].href} controls width="100%" height="100%" />
                                <a href={resultat.link} target="_blank">
                                    <p className="hover:underline dark:text-blue-200 text-blue-600">
                                        {(resultat.link.length > 32) ? resultat.link.substring(0,32) : resultat.link}
                                    </p>
                                </a>
                                </div>
                            </div> }) 
                            : "Erreur"
                    }
                    </div>
                //</div>
            )  
        default:
            return 'Erreur, recharger la page !'
    }

};
