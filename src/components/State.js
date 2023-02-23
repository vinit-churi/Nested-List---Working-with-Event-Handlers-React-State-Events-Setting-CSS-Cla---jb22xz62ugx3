import React, { useState } from "react";
import City from "./City";
import { uniqueID } from "../utils";

const State = (props) => {
    let { name, cities, id } = props;
    const [showCity, setShowCity] = useState(false);
    const handleClick = () => {
        setShowCity((showCity) => !showCity);
    };
    let cityComponents = "";
    if (showCity) {
        cityComponents = (
            <>
                <ul>
                    {cities.map((city, index) => {
                        return (
                            <City
                                key={uniqueID()}
                                name={city.name}
                                towns={city.towns}
                                id={`city${index + 1}`}
                            />
                        );
                    })}
                </ul>
            </>
        );
    }
    return (
        <>
            <li onClick={handleClick} id={id}>
                {name}
            </li>
            {cityComponents}
        </>
    );
};

export default State;
