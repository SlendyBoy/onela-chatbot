// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import HelpingOptions from "./components/HelpingOptions/HelpingOptions";
import LinkList from "./components/LinkList/LinkList";
import BotAvatar from "./components/BotAvatar/BotAvatar";


const botName = "OnelaBot";
const config = { 
	botName: botName,
	initialMessages: [
		createChatBotMessage(
			`Bonjour je suis ${botName}. Je suis ici pour vous aider.`
		),
		createChatBotMessage(
			"Dans quel domaine voulez-vous de l'aide?", 
			{
				withAvatar: false,
				delay: 600,
				widget: "helpingOptions",
			}
		),
	],
	//Add avatar
	customComponents: {
		// Replaces default header
		header: () => <div class="react-chatbot-kit-chat-header">Conversation avec {botName}</div>,
		// Replaces default avatar
		botAvatar: (props) => <BotAvatar {...props} />,

	},
	customStyles: {
		botMessageBox: {
			backgroundColor: "#3399ff",
		},
		chatButton: {
			backgroundColor: "#00b33c",
		},
	},
	widgets: [
		{
			widgetName: "helpingOptions",
		   widgetFunc: (props) => <HelpingOptions {...props} />,
		},
		{
			widgetName: "AlimentationLinks",
			widgetFunc: (props) => <LinkList {...props} />,
			props: {
				options: [
				  {
					text: "Les AGORAé",
					url:
					  "https://www.fage.org/innovation-sociale/solidarite-etudiante/agorae-fage/",
					id: 1,
				  },
				  {
					text: "Restos du Coeur",
					url:
					  "https://www.restosducoeur.org/nos-actions/aide-alimentaire/",
					id: 2,
				  },

				],
			},
		},
	],
}

export default config