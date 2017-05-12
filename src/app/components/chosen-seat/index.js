class ChosenSeatController {
    constructor(CheckinService) {
        this.checkinService = CheckinService;
        this.seat = this.checkinService.chosenSeat;

        this.checkinService.subscribe('chosen seat',
            () => this.seat = this.checkinService.chosenSeat);
    }

    bookSeat() {
        // Ask for a confirmation before the booking
        if (!confirm(`Do you want to book seat#${this.seat.number}?`)) {
            return;
        }
        this.checkinService
            .bookSeat(this.seat)
            .then(() => {
                this.booked = true;
                // Update the balance on the front-end after a successful booking
                this.checkinService.publish('booked seat');
            })
            .catch((err) => {
                alert(err.data);
            });
    }
}

angular.module('app').component('chosenSeat', {
    templateUrl: 'app/components/chosen-seat/template.html',
    controller: ChosenSeatController
});
