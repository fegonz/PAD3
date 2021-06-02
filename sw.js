function deleteRow(tableID) {



    var table = document.getElementById(tableID).tBodies[0];

    var rowCount = table.rows.length;


    // var i=1 to start after header
    for (var i = 1; i < rowCount; i++) {
        var row = table.rows[i];
        // index of td contain checkbox is 8
        var chkbox = row.cells[0].getElementsByTagName('input')[0];
        if ('checkbox' == chkbox.type && true == chkbox.checked) {
            table.deleteRow(i);
        }
    }
}



function insRow() {
    var x = document.getElementById('tabla').insertRow(document.getElementById('tabla').rows.length);
    var p = x.insertCell(0);
    var task = x.insertCell(1);
    var priority = x.insertCell(2);
    var status = x.insertCell(3);
    var puntos = x.insertCell(4);

    var filas = document.getElementById('tabla').rows.length - 1;

    p.innerHTML = '<input type="checkbox"/>';
    task.innerHTML = "#" + filas + " " + document.getElementById("cell1").value;
    priority.innerHTML = document.getElementById("cell2").value;
    status.innerHTML = '<input type="checkbox"/>' + document.getElementById("cell3").value;
    puntos.innerHTML = '...';

    clear();

}

function clear() {
    var x = document.getElementById('tabla');
    x.getElementsById("cell1").clear();
    x.getElementsById("cell2").clear();
    x.getElementsById("cell3").clear();
}

function aparece() {
    var x = document.getElementById('tabla').insertRow(document.getElementById('tabla').rows.length);
    var p = x.insertCell(0);
    var task = x.insertCell(1);
    var priority = x.insertCell(2);
    var status = x.insertCell(3);
    var puntos = x.insertCell(4);

    var filas = document.getElementById('tabla').rows.length - 1;

    p.innerHTML = '<input type="checkbox"/> name="check" ';
    task.innerHTML = '<input id="cell1" type="text" />';
    priority.innerHTML = '<select id="cell2" name="OS"><option value="High">High</option><option value="Medium">Medium</option> <option value="Low">Low</option></select>';
    status.innerHTML = '<input id="cell3" type="text" />';
    puntos.innerHTML = '...';

}