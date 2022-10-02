const XLSX = require("xlsx");

const workbook = XLSX.readFile("CinemaData.xlsx");

const worksheetPHTD = workbook.Sheets["PH tương đương"];
const worksheetBQD = workbook.Sheets["Bảng Quyết định"];

const arrDataPHTD = XLSX.utils.sheet_to_json(worksheetPHTD);
const arrDataBQD = XLSX.utils.sheet_to_json(worksheetBQD);

var dataPHTD = [];
var dataBQD = [];

module.exports = {
    getDataPHTD: function() {
        for (const ticket of arrDataPHTD) {
            var ticketInfo = {
                id: ticket['ID'],
                day: ticket['Day'],
                age: ticket['Age'],
                expected: ticket['Expected Output'],
                actual: '',
                result: ''
            }
            dataPHTD.push(ticketInfo);
        }
        return dataPHTD;
    },
    getDataBQD: function() {
        for (const ticket of arrDataBQD) {
            var ticketInfo = {
                id: ticket['ID'],
                day: ticket['Day'],
                age: ticket['Age'],
                expected: ticket['Expected Output'],
                actual: '',
                result: ''
            }
            dataBQD.push(ticketInfo);
        }
        return dataBQD;
    }
}


