function solve(peoples, groupType, dayName) {
    function calculateBillableCount(groupType, peoples) {
        let billable = peoples;

        switch (groupType) {
            case 'Business':
                if (billable >= 100) {
                    billable -= 10;
                }
            break;
        }

        return billable;

    }


    function calculateDiscounts(groupType, peoples) {
        let discount = 1;

        switch (groupType) {
            case 'Students': discount = peoples >= 30 ? 0.85 : discount;
                break;
            case 'Regular': discount = (peoples >= 10 && peoples <= 20) ? 0.95 : discount;
                break;
        }

        return discount;
    }


    function calculateTotal(peoples, groupType, dayName) {
        let totalPrice = 0.0;
        let billableCount = calculateBillableCount(groupType, peoples);
        let discount = calculateDiscounts(groupType, peoples);

        let mapping = {
            'Students': {
                'Friday': 8.45,
                'Saturday': 9.80,
                'Sunday': 10.46,
            },
            'Business': {
                'Friday': 10.90,
                'Saturday': 15.60,
                'Sunday': 16.00,
            },
            'Regular': {
                'Friday': 15.00,
                'Saturday': 20.00,
                'Sunday': 22.50,
            }

        }

        totalPrice = mapping[groupType][dayName] * billableCount * discount;

        return totalPrice;
    }


    let finalPrice = calculateTotal(peoples, groupType, dayName);
    console.log(`Total price: ${finalPrice.toFixed(2)}`);
}