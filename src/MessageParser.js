// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }
  
    parse(message) {
        const lowerCaseMessage = message.toLowerCase()
        
        if (lowerCaseMessage.includes("bonjour") || lowerCaseMessage.includes("salut")) {
          this.actionProvider.greet()
        }

        if (lowerCaseMessage.includes("alimentation")) {
          this.actionProvider.handleAlimentationList();
        }

        if (lowerCaseMessage.includes(" ")) {
          this.actionProvider.handleDefault();
        }
    }
}
  
  export default MessageParser;