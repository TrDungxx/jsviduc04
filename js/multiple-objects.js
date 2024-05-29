function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function(){
        return this.rooms - this.booked;
    };
}

var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);

var details = quayHotel.name + 'rooms: ';
details += quayHotel.checkAvailability();
var elHotel = document.getElementById('hotel1');
elHotel1.textContent = details1;