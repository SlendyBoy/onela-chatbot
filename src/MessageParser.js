// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }
  
    parse(message) {
        const lowerCaseMessage = message.toLowerCase()

        if (lowerCaseMessage === ("")) {
          this.actionProvider.handleDefault();
        }

        if (lowerCaseMessage.includes("liste aide") ||
            lowerCaseMessage.includes("aide")
            ) {
          this.actionProvider.handleHelpList();
        }
        
        if (lowerCaseMessage.includes("bonjour") || 
            lowerCaseMessage.includes("salut")
            ) {
          this.actionProvider.greet();
        }

        if (lowerCaseMessage.includes("alimentation") || 
            lowerCaseMessage.includes("manger") || 
            lowerCaseMessage.includes("nourriture")
            ) {
          this.actionProvider.handleAlimentationList();
        }

        if (lowerCaseMessage.includes("logement") || 
            lowerCaseMessage.includes("maison") || 
            lowerCaseMessage.includes("appartement")
            ) {
          this.actionProvider.handleLogementList();
        }

        if (lowerCaseMessage.includes("argent") || 
            lowerCaseMessage.includes("financier") || 
            lowerCaseMessage.includes("finance")
            ) {
          this.actionProvider.handleFinanceList();
        }

        if (lowerCaseMessage.includes("santé") || 
            lowerCaseMessage.includes("soin") ||
            lowerCaseMessage.includes("se soigner")
            ) {
          this.actionProvider.handleSantéList();
        }

        if (lowerCaseMessage.includes("isolement") || 
            lowerCaseMessage.includes("solitude") || 
            lowerCaseMessage.includes("seul") ||
            lowerCaseMessage.includes("social")
            ) {
          this.actionProvider.handleSocialList();
        }

    }
}
  
  export default MessageParser;