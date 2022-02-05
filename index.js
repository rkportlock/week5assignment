class Guest {
    constructor (name, room) {
        this.name = name;
        this.room = room;
    }

    describe() {
        return `${this.name} is in ${this.room}.`;
    }
}

class Hotel {
    constructor(name) {
        this.name = name;
        this.guests = [];
    }

    addGuest(guest) {
        if (guest instanceof Guest) {
            this.guests.push(guest);
        } else {
            throw new Error(`You can only add an instance of Guest. Argument is not a guest: ${guest}`);
        }
    }

    describe() {
        return `${this.name} has ${this.guest.length} guests. `;
    }
}

class Menu {
    constructor() {
      this.hotels = [];
      this.selectedHotel = null;  
    }

    start() {
        let selection = this.showMainMenuOptions();
        
        while (selection != 0) {
          switch (selection) {
              case '1':
                this.createHotel();
                break;
              case '2':
                this.viewHotel();
                break;
              case '3':
                this.deleteHotel();
                break;
              case '4':
                this.displayHotels();
                break;
              default:
                  selection = 0;          
          }
          selection = this.showMainMenuOptions();
        }
    
        alert('Goodbye!');
    }
  
  showMainMenuOptions() {
    return prompt(`
    0) exit
    1) create new hotel
    2) view hotel
    3) delete hotel
    4) display all hotels
  `);
  }
  
  showHotelMenuOptions(hotelInfo) {
    return prompt(`
      0) back
      1) create guest
      2) delete guest 
      
      ${hotelInfo}
    `);
  }
  
  displayHotels() {
    let hotelString = '';
    for (let i = 0; i < this.hotels.length; i++) {
      hotelString += i + ') ' + this.hotels[i].name + '\n';
    }
    alert(hotelString);
  }

  createHotel() {
    let name = prompt('Enter name for new hotel:');
    this.hotels.push(new Hotel(name));
  }

  viewHotel() {
    let index = prompt('Enter the index of the hotel you wish to view:');
    if (index > -1 && index < this.hotels.length) {
      this.selectedHotel = this.hotels[index];
      let description = 'Hotel Name:' + this.selectedHotel.name + '\n';

      for (let i = 0; i < this.selectedHotel.guests.length; i++) {
        description += i + ')' + this.selectedHotel.guests[i].name
          + ' - ' + this.selectedHotel.guests[i].room + '\n';
      }
    
      let selection = this.showHotelMenuOptions(description);
      switch (selection) {
        case '1':
          this.createGuest();
          break;
        case '2':
          this.deleteGuest();
      }
    }
  }

  deleteHotel() {
    let index = prompt('Enter the index of the hotel you wish to delete:');
    if (index > -1 && index < this.hotels.length) {
    this.hotels.splice(index, 1);
    }
  }
  
  
  createGuest() {
    let name = prompt('Enter name for new guest:');
    let room = prompt('Enter room for new guest:');
    this.selectedHotel.guests.push(new Guest(name, room));
  }
  
  deleteGuest() {
    let index = prompt('Enter the index of the guest you wish to delete:');
    if (index > -1 && index < this.selectedHotel.guests.length) {
      this.selectedHotel.guests.splice(index, 1);
    } 
  }
}





let menu = new Menu();
menu.start();