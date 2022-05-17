class BaseTest {

    randomDate(date1, date2) {
        // Generate random date
        function randomValueBetween(min, max) {
            return Math.random() * (max - min) + min;
        }
        var date1 = date1 || '01/01/2050'
        var date2 = date2 || new Date().toLocaleDateString()
        date1 = new Date(date1).getTime()
        date2 = new Date(date2).getTime()
        if (date1 > date2) {
            return new Date(randomValueBetween(date2, date1)).toLocaleDateString()
        }
        else {
            return new Date(randomValueBetween(date1, date2)).toLocaleDateString()
        }
    }

    generateFiveDigitsRandomNumber() {
        var val = Math.floor(10000 + Math.random() * 90000);
        console.log(val);
        return val;
    }
}

export default BaseTest