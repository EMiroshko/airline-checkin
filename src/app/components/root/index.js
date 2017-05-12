class RootController {
    constructor(CheckinService, UserService) {
        this.title = 'Checkin for Flight HH2142';
        this.checkinService = CheckinService;

        this.checkinService.subscribe('seats',
            () => this.seats = this.checkinService.seats);

        this.checkinService.subscribe('chosen seat', () => {
            // Make sure users can’t select a seat even if it’s available if they don’t have enough balance
            if (this.user.balance < this.checkinService.chosenSeat.price) {
                alert(`You don't have enough balance.`);
            } else if (this.bookedAnySeat) {
                alert(`You couldn't book more than one seat.`);
            } else if (!this.checkinService.chosenSeat.available) {
                alert('Seat is unavailable for booking.')
            } else {
                this.chosenSeat = this.checkinService.chosenSeat;
            }
        });

        // Update the balance on the front-end after a successful booking
        this.checkinService.subscribe('booked seat', () => {
            alert(`Successfully booked, seat#${this.chosenSeat.number}.`);
            this.user.balance -= this.chosenSeat.price;
            this.chosenSeat = null;
            this.bookedAnySeat = true;
        });

        CheckinService.getSeats();

        UserService.getUser().then(user => this.user = user);
    }

    chooseSeat(seat) {
        this.checkinService.chooseSeat(seat);
    }
}

angular.module('app').component('root', {
    templateUrl: 'app/components/root/template.html',
    controller: RootController
});
