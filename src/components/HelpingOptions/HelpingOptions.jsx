import React from "react";

import "./HelpingOptions.css";

const HelpingOptions = (props) => {
    const options = [
        {
            text: "Alimentation",
            handler: props.actionProvider.handleAlimentationList,
            id: 1,
        },
        { text: "Logement", handler: () => {}, id: 2 },
        { text: "Finance", handler: () => {}, id: 3 },
        { text: "Santé", handler: () => {}, id: 4 },
        { text: "Social", handler: () => {}, id: 5 },
    ];

    const optionsMarkup = options.map((option) => (
        <button className="helping-option-button" key={option.id} onClick={option.handler}>
            {option.text}
        </button>
    ));

    return <div className="helping-options-container">{optionsMarkup}</div>;
};

export default HelpingOptions;