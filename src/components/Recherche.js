import React from 'react';
import { useResultatsContext } from '../RechercheContext/ResultatsContextProvider';
import {useDebounce } from 'use-debounce';
import { useEffect } from 'react';
import { useState } from 'react';
export const Recherche = () => {
  const { setRechercheTerm } = useResultatsContext();
  const [text, setText] = useState('Shaik Mougamadou');
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setRechercheTerm(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative sm:ml-48 ">
      <input value={text} type="text" className="sm:w-96 w-76 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg" placeholder="rechercher quelque chose" onChange={(e) => setText(e.target.value)} disabled />
    </div>
  );
};
