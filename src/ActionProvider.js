// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Salut l'ami")
        this.updateChatbotState(greetingMessage)
    }

    handleHelpList = () => {
      const message = this.createChatBotMessage(
        "Dans quel domaine voulez-vous de l'aide ?",
        {
          widget: "helpingOptions",
        }
      );
  
      this.updateChatbotState(message);
  };

    handleAlimentationList = () => {
        const message = this.createChatBotMessage(
          "Voici quelques aides pour subvenir à vos besoins en alimentation:",
          {
            widget: "AlimentationLinks",
          }
        );
    
        this.updateChatbotState(message);
    };

    handleLogementList = () => {
      const message = this.createChatBotMessage(
        "Voici quelques aides pour se loger:",
        {
          widget: "LogementLinks",
        }
      );
  
      this.updateChatbotState(message);
    };

    handleFinanceList = () => {
      const message = this.createChatBotMessage(
        "Voici quelques aides pour subvenir à vos besoins financiers:",
        {
          widget: "FinanceLinks",
        }
      );

      this.updateChatbotState(message);
    };

    handleSantéList = () => {
      const message = this.createChatBotMessage(
        "Voici quelques aides pour rester en bonne santé:",
        {
          widget: "SantéLinks",
        }
      );

      this.updateChatbotState(message);
    };

    handleSocialList = () => {
      const message = this.createChatBotMessage(
        "Voici quelques aides pour le social:",
        {
          widget: "SocialLinks",
        }
      );

      this.updateChatbotState(message);
    };


    handleDefault = () => {
      const message = this.createChatBotMessage(
        "Je n'ai pas compris votre demande. Comment puis-je vous aider?", 
        {
          withAvatar: true,
        }
      );
  
      this.updateChatbotState(message)
    };

    updateChatbotState(message) {
 
        // NOTE: This function is set in the constructor, and is passed in      
        // from the top level Chatbot component. The setState function here     
        // actually manipulates the top level state of the Chatbot, so it's     
        // important that we make sure that we preserve the previous state. 
        this.setState(prevState => ({
                ...prevState, messages: [...prevState.messages, message]
        }))
    }
}
  
export default ActionProvider;