class Player {
    constructor (name, position) {
        this.name = name;
        this.position = position;
    }

    describe() {
        return `${this.name} plays ${this.position}. `;
    }
}

class Team {
    constructor(name){
        this.name = name;
        this.players = [];
    }

    addPlayer(player) {
        if (player instanceof Player) {
            this.players.push(player);
        } else {
            throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}`);
        }
    }

    describe() {
        return `${this.name} has ${this.player.length} players. `;
    }
}

class Menu {
    constructor() {
      this.teams = [];
      this.selectedTeam = null;  
    }

    start() {
        let selection = this.showMainMenuOptions();
        
        while (selection != 0) {
          switch (selection) {
              case '1':
                this.createTeam();
                break;
              case '2':
                this.viewTeam();
                break;
              case '3':
                this.deleteTeam();
                break;
              case '4':
                this.displayteams();
                break;
              default:
                  selection = 0;          
          }
          selection = this.showMainMenuOptions();
        }
    
        alert('Goodby!');
    }
}