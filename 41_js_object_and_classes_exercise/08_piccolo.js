function piccolo(carsArr) {
    class ParkingRegister {
        constructor() {
            this.carsList = [];
        }

        _checkExist(number) {
            return (this.carsList.includes(number));
        }

        addCar(number) {
            if (!this._checkExist(number)) {
                this.carsList.push(number);
            }
        }

        removeCar(number) {
            if (this._checkExist(number)) {
                this.carsList.splice(this.carsList.indexOf(number), 1);
            }
        }

        printCars() {
            if (this.carsList.length !== 0) {
                return this.carsList.sort((a, b) => a.localeCompare(b)).join('\n');
            }
            return 'Parking Lot is Empty';
        }
    }


    let parking = new ParkingRegister();

    for (let i = 0; i < carsArr.length; i++) {
        const [command, carNumber] = carsArr[i].split(', ')

        switch (command) {
            case 'IN':
                parking.addCar(carNumber);
                break;
            case 'OUT':
                parking.removeCar(carNumber);
                break;
        }
    }

    console.log(parking.printCars());
}
