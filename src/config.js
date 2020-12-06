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
			"Dans quel domaine voulez-vous de l'aide ?", 
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
		{
			widgetName: "LogementLinks",
			widgetFunc: (props) => <LinkList {...props} />,
			props: {
				options: [
				  {
					text: "Logement1",
					url:
					  "https://www.fage.org/innovation-sociale/solidarite-etudiante/agorae-fage/",
					id: 1,
				  },
				  {
					text: "Logement2",
					url:
					  "https://www.restosducoeur.org/nos-actions/aide-alimentaire/",
					id: 2,
				  },

				],
			},
		},
		{
			widgetName: "FinanceLinks",
			widgetFunc: (props) => <LinkList {...props} />,
			props: {
				options: [
				  {
					text: "Finance1",
					url:
					  "https://www.fage.org/innovation-sociale/solidarite-etudiante/agorae-fage/",
					id: 1,
				  },
				  {
					text: "Finance2",
					url:
					  "https://www.restosducoeur.org/nos-actions/aide-alimentaire/",
					id: 2,
				  },

				],
			},
		},
		{
			widgetName: "SantéLinks",
			widgetFunc: (props) => <LinkList {...props} />,
			props: {
				options: [
				  {
					text: "Santé1",
					url:
					  "https://www.fage.org/innovation-sociale/solidarite-etudiante/agorae-fage/",
					id: 1,
				  },
				  {
					text: "Santé2",
					url:
					  "https://www.restosducoeur.org/nos-actions/aide-alimentaire/",
					id: 2,
				  },

				],
			},
		},
		{
			widgetName: "SocialLinks",
			widgetFunc: (props) => <LinkList {...props} />,
			props: {
				options: [
				  {
					text: "Social1",
					url:
					  "https://www.fage.org/innovation-sociale/solidarite-etudiante/agorae-fage/",
					id: 1,
				  },
				  {
					text: "Social2",
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