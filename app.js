var fileInputCSV = document.getElementById("SubirArchivo");

fileInputCSV.addEventListener("change", function (e) {
    var convertir = true;
  
    if (convertir) {
      // parse as CSV
      var file = e.target.files[0];
      var csvParser = new SimpleExcel.Parser.CSV();
      csvParser.setDelimiter(",");
      csvParser.loadFile(file, function () {
        // draw HTML table based on sheet data
        var sheet = csvParser.getSheet();
        var table = document.getElementById("Resultado");
        table.innerHTML = "";
        sheet.forEach(function (el, i) {
          var row = document.createElement("tr");
          el.forEach(function (el, i) {
            var cell = document.createElement("td");
            cell.innerHTML = el.value;
            row.appendChild(cell);
          });
          table.appendChild(row);
        });
      });
    }
  });