import React from 'react';

const Countries = ({countryData}) => {
    return (
        <div>
            {countryData.map((country, index) => (
                <div key={index}>
                    <h5>{country.Country}</h5>
                </div>
            ))}
        </div>
    )
};

export default Countries