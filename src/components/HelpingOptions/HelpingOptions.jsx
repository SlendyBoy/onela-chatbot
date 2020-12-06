import React from "react";

import "./HelpingOptions.css";

const HelpingOptions = (props) => {
    const options = [
        {
            text: "Alimentation",
            handler: props.actionProvider.handleAlimentationList,
            id: 1,
        },
        { 
            text: "Logement", 
            handler: props.actionProvider.handleLogementList, 
            id: 2 
        },
        { 
            text: "Finance", 
            handler: props.actionProvider.handleFinanceList, 
            id: 3 
        },
        { 
            text: "Santé", 
            handler: props.actionProvider.handleSantéList, 
            id: 4 
        },
        { 
            text: "Social", 
            handler: props.actionProvider.handleSocialList, 
            id: 5 
        },
    ];

    const optionsMarkup = options.map((option) => (
        <button className="helping-option-button" key={option.id} onClick={option.handler}>
            {option.text}
        </button>
    ));

    return <div className="helping-options-container">{optionsMarkup}</div>;
};

export default HelpingOptions;