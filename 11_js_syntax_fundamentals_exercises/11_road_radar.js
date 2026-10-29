function withinSpeedLimit(speed, zone) {
    const limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    }
    const speedDifference = {
        default: 'reckless driving',
        messages:{
                    'speeding': 20,
                    'excessive speeding': 40,
        }
    }

    let zoneLimit = limits[zone];

    if (zoneLimit >= speed) {
        console.log(`Driving ${speed} km/h in a ${zoneLimit} zone`)
    } else {


        let difference = speed - zoneLimit;
        let status = speedDifference.default;

        for (const [message, limit] of Object.entries(speedDifference.messages)) {
            if (difference <= limit) {
                status = message;
                break
            }
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${zoneLimit} - ${status}`);
    }
}
