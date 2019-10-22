(function () {
    let Traveler = function (name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = True;
    }
    let Wagon = function (capacity) {
        this.capacity = capacity;
        this.passanger = [];
    }
    Traveler.prototype.hunt = function () {
        this.food = this.food + 2
    }
    Traveler.prototype.eat = function () {
        if (this.food > 0) {
            this.food--
            // this.food-=1
            // this.food=this.food-1
        }
        else {
            this.isHealthy = false;
        }

    }
    Wagon.prototype.getAvailableSeatCount = function () {
        return this.capacity - this.passengers.length;
    }
}())