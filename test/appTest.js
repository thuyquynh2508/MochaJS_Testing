const data = require('../getData')
const assert = require('chai').assert;
const app = require('../app');


describe('Các ca kiểm thử theo phương pháp kiểm thử theo phân hoạch tương đương', function() {
    var dataArrPHTD = data.getDataPHTD();
    for (const dataTicket of dataArrPHTD) {
        it(`Test ${dataTicket.id}`, function() {
            dataTicket.actual = app.returnPrice(`${dataTicket.day}`, Number(`${dataTicket.age}`));
            assert.equal(dataTicket.actual, `${dataTicket.expected}`);
            dataTicket.result = app.returnResult(dataTicket.expected, dataTicket.actual);
            console.log(dataTicket);
        })
    }
    
})

describe('Các ca kiểm thử theo phương pháp kiểm thử theo bảng quyết định', function() {
    var dataArrBQD = data.getDataBQD();
    for (const dataTicket of dataArrBQD) {
        it(`Test ${dataTicket.id}`, function() {
            dataTicket.actual = app.returnPrice(`${dataTicket.day}`, Number(`${dataTicket.age}`)); 
            assert.equal(dataTicket.actual, `${dataTicket.expected}`);
            dataTicket.result = app.returnResult(dataTicket.expected, dataTicket.actual);
            console.log(dataTicket);  
        })
    }  
})