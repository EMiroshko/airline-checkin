class RootController {
    constructor(CheckinService, UserService) {
        this.title = 'Checkin for Flight HH2142';
        this.checkinService = CheckinService;

        this.checkinService.subscribe('seats',
            () => this.seats = this.checkinService.seats);

        this.checkinService.subscribe('chosen seat',
            () => this.chosenSeat = this.checkinService.chosenSeat);

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
