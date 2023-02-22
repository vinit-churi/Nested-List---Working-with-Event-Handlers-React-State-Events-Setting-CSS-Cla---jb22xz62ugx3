import React, { useState } from "react";
import Town from "./town";
import { uniqueID } from "../utils";

const City = (props) => {
    let { name, towns, id } = props;
    const [showTown, setShowTown] = useState(true);
    const handleClick = () => {
        setShowTown((showTown) => !showTown);
    };
    let townComponents = "";
    if (showTown) {
        townComponents = (
            <>
                <ul>
                    {towns.map((town, index) => {
                        return (
                            <Town
                                key={uniqueID()}
                                name={town.name}
                                id={`town-${index + 1}`}
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
            {townComponents}
        </>
    );
};

export default City;
