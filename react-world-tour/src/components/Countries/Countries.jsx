import React, { useEffect, useState } from 'react';
import Countrie from './Countrie/Countrie';

const Countries = () => {
    const[countries, setCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {
                countries.map(country=><Countrie key={country.cca3} country={country}></Countrie>)
            }
        </div>
    );
};

export default Countries;