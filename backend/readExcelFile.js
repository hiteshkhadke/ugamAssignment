let XLSX = require('xlsx-style');

let readExcelFileExport = {
    "readExcelFile": (request) => {
        console.log(request);
        
        let workbook = XLSX.readFileSync(request.filePath, { cellDates: true });
        let sheet_name_list = workbook.SheetNames;

        let jsonArr = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        return jsonArr;
    }
}

module.exports = readExcelFileExport;