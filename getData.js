const XLSX = require("xlsx");

const workbook = XLSX.readFile("CinemaData.xlsx");

const worksheetPHTD = workbook.Sheets["Kiểm thử hộp đen_PH tương đương"];
const worksheetBQD = workbook.Sheets["Kiểm thử hộp đen_Bảng QĐ"];

const worksheetDDK_H1 = workbook.Sheets["Kiểm thử dòng điều khiển_Hàm 1"];
const worksheetDDK_H2 = workbook.Sheets["Kiểm thử dòng điều khiển_Hàm 2"];

const worksheetDDL_H1 = workbook.Sheets["Kiểm thử dòng dữ liệu_Hàm 1"];
const worksheetDDL_H2 = workbook.Sheets["Kiểm thử dòng dữ liệu_Hàm 2"];

const arrDataPHTD = XLSX.utils.sheet_to_json(worksheetPHTD);
const arrDataBQD = XLSX.utils.sheet_to_json(worksheetBQD);

const arrDataDDK_H1 = XLSX.utils.sheet_to_json(worksheetDDK_H1);
const arrDataDDK_H2 = XLSX.utils.sheet_to_json(worksheetDDK_H2);

const arrDataDDL_H1 = XLSX.utils.sheet_to_json(worksheetDDL_H1);
const arrDataDDL_H2 = XLSX.utils.sheet_to_json(worksheetDDL_H2);

var dataPHTD = [];
var dataBQD = [];

var dataDDK_H1 = [];
var dataDDK_H2 = [];

var dataDDL_H1 = [];
var dataDDL_H2 = [];

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
    },
    getDataDDKH1: function() {
        for (const test of arrDataDDK_H1) {
            var testInfo = {
                id: test['ID'],
                input: test['Input'],
                expected: test['Expected Output'],
                actual: '',
                result: ''
            }
            dataDDK_H1.push(testInfo);
        }
        return dataDDK_H1;
    },
    getDataDDKH2: function() {
        for (const test of arrDataDDK_H2) {
            var testInfo = {
                id: test['ID'],
                input: test['Input'],
                expected: test['Expected Output'],
                actual: '',
                result: ''
            }
            dataDDK_H2.push(testInfo);
        }
        return dataDDK_H2;
    },
    getDataDDLH1: function() {
        for (const test of arrDataDDL_H1) {
            var testInfo = {
                id: test['ID'],
                input: test['Input'],
                expected: test['Expected Output'],
                actual: '',
                result: ''
            }
            dataDDL_H1.push(testInfo);
        }
        return dataDDL_H1;
    },
    getDataDDLH2: function() {
        for (const test of arrDataDDL_H2) {
            var testInfo = {
                id: test['ID'],
                day: test['Day'],
                age: test['Age'],
                expected: test['Expected Output'],
                actual: '',
                result: ''
            }
            dataDDL_H2.push(testInfo);
        }
        console.log(dataDDL_H2)
        return dataDDL_H2;
    },
}


