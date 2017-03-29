var EventEmitter = require('../../lib/event-emitter');

class CheckinService extends EventEmitter {
    constructor(CheckinRepository) {
        super();

        angular.extend(this, new EventEmitter());
        this.checkinRepository = CheckinRepository;

        this.seats = [];
    }

    getSeats() {
        return this.checkinRepository
            .getSeats()
            .then(seats => {
                this.seats = seats;
                this.publish('seats');

                return this.seats;
            });
    }

    chooseSeat(seat) {
        this.chosenSeat = seat;
        this.publish('chosen seat');
    }

    bookSeat(seat) {
        return this.checkinRepository
            .bookSeat(seat)
            .then(this.getSeats.bind(this));
    }
}

angular.module('app').service('CheckinService', CheckinService);
