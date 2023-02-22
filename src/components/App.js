import React, { Component, useState } from "react";
import states from "./data";
import "./../styles/App.css";
import State from "./State";
import { uniqueID } from "../utils";
// Do not alter the states const and values inside it.

function App() {
    return (
        <>
            <ul>
                {states.map((state, index) => {
                    return (
                        <State
                            key={uniqueID()}
                            name={state.name}
                            cities={state.cities}
                            id={`state-${index + 1}`}
                        />
                    );
                })}
            </ul>
        </>
    );
}

export default App;
