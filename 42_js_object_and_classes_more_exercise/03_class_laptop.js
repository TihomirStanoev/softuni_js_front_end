class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.isOn = false;
        this.quality = quality;
    }

    get price() {
        return (800 - (this.info.age * 2) + (this.quality * 0.5));
    }

    turnOn() {
        if(!this.isOn) {
            this.isOn = true;
            this.quality -= 1;
        }
    }

    turnOff() {
        if(this.isOn) {
            this.isOn = false;
            this.quality -= 1;
        }
    }

    showInfo() {
            return JSON.stringify(this.info)
        }
}
