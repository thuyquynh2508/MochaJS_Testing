const data = require('../getData')
const assert = require('chai').assert;
const app = require('../app');


describe('Các ca kiểm thử theo phương pháp kiểm thử hộp đen - Kiểm thử theo phân hoạch tương đương', function() {
    var dataArrPHTD = data.getDataPHTD();
    for (const dataTicket of dataArrPHTD) {
        it(`Test ${dataTicket.id}`, function() {
            dataTicket.actual = app.returnPrice(`${dataTicket.day}`, Number(`${dataTicket.age}`));
            assert.equal(dataTicket.actual, `${dataTicket.expected}`);
            dataTicket.result = app.returnResult(dataTicket.expected, dataTicket.actual);
            //console.log(dataTicket);
        })
    }
    
})

describe('Các ca kiểm thử theo phương pháp kiểm thử hộp đen - Kiểm thử theo bảng quyết định', function() {
    var dataArrBQD = data.getDataBQD();
    for (const dataTicket of dataArrBQD) {
        it(`Test ${dataTicket.id}`, function() {
            dataTicket.actual = app.returnPrice(`${dataTicket.day}`, Number(`${dataTicket.age}`)); 
            assert.equal(dataTicket.actual, `${dataTicket.expected}`);
            dataTicket.result = app.returnResult(dataTicket.expected, dataTicket.actual);
            //console.log(dataTicket);  
        })
    }  
})

describe('Các ca kiểm thử theo phương pháp kiểm thử dòng điều khiển - Hàm kiểm tra ngày đầu vào', function() {
    var dataArrDDKH1 = data.getDataDDKH1();
    for (const dataTest of dataArrDDKH1) {
        it(`Test ${dataTest.id}`, function() {
            dataTest.actual = app.checkWeekDay(`${dataTest.input}`); 
            assert.equal(dataTest.actual, `${dataTest.expected}`);
            dataTest.result = app.returnResult(dataTest.expected, dataTest.actual);
            console.log(dataTest);  
        })
    }  
})

describe('Các ca kiểm thử theo phương pháp kiểm thử dòng điều khiển - Hàm trả về giá vé cuối tuần tùy theo độ tuổi', function() {
    var dataArrDDKH2 = data.getDataDDKH2();
    for (const dataTest of dataArrDDKH2) {
        it(`Test ${dataTest.id}`, function() {
            dataTest.actual = app.returnPriceWeekend(Number(`${dataTest.input}`)); 
            assert.equal(dataTest.actual, `${dataTest.expected}`);
            dataTest.result = app.returnResult(dataTest.expected, dataTest.actual);
            console.log(dataTest);  
        })
    }  
})