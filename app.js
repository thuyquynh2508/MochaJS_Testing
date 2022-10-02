var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
var weekends = ['Saturday', 'Sunday']
module.exports = {
    checkWeekDay: function(day) {
        if(weekdays.includes(day) == true) {
            return 'weekday';
        } else if (weekends.includes(day) == true) {
            return 'weekend';
        } else {
            return 'Input không hợp lệ';
        }
    },
    checkAge: function(age) {
        if (age < 3 || age > 80 || Number.isInteger(age) == false) {
            return 'Input không hợp lệ';
        } 
        return 'valid age';
    },
    returnPriceWeekday: function(age) {
        if (this.checkAge(age) == 'valid age') {
            if (age >= 3 && age <= 30) {
                return 'Giá vé 50.000 đồng';
            } else if (age > 30 && age <= 55) {
                return 'Giá vé 65.000 đồng';
            } else {
                return 'Giá vé 40.000 đồng';
            }
        }
        return 'Input không hợp lệ';
    },
    returnPriceWeekend: function(age) {
        if (this.checkAge(age) == 'valid age') {
            if (age >= 3 && age <= 18) {
                return 'Giá vé 50.000 đồng';
            } else if (age > 18 && age <= 30) {
                return 'Giá vé 65.000 đồng';
            } else if (age > 30 && age <= 55) {
                return 'Giá vé 95.000 đồng';
            } else {
                return 'Giá vé 40.000 đồng';
            }
        }
        return 'Input không hợp lệ';
    },
    returnPrice: function(day, age) {
        if (this.checkWeekDay(day) == 'weekday') {
            return this.returnPriceWeekday(age);
        } else if (this.checkWeekDay(day) == 'weekend') {
            return this.returnPriceWeekend(age);
        } 
        return 'Input không hợp lệ';
    },
    returnResult: function(expected, actual) {
        if (actual == expected) {
            return 'Pass';
        } else {
            return 'Fail';
        }
    }
}