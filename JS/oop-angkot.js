// object angkot

function Angkot(driver, track, passenger, cash){
    this.driver = driver;
    this.track = track;
    this.passenger = passenger;
    this.cash = cash;

    this.passengerBoard = function(passengerName){
        this.passenger.push(passengerName);
        return this.passenger;
    }

    this.passengerGetOff = function(passengerName, payment){
        if(this.passenger.length === 0){
            alert('angkot still empty!');
            return false;
        }

        for (let i = 0; i < this.passenger.length; i++) {
            if(this.passenger[i] == passengerName){
                this.passenger[i] = undefined;
                this.cash += payment;
                return this.passenger;
            }
        }
    }
}

var angkot1 = new Angkot('Bugon', ['Banjarmasin', 'Banjarbaru'], [], 0);
var angkot2 = new Angkot('Erling Haaland', ['Jakarta', 'Bandung'], [], 0);