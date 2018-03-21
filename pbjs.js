function add_row() {
    var my_tbody = document.getElementById('my-tbody');
    var row = my_tbody.insertRow( my_tbody.rows.length );
    var objInputButton = document.createElement("input");
    objInputButton.setAttribute("type", "button");
    objInputButton.setAttribute("value", "Del");
    objInputButton.setAttribute("onclick", "delete_row();");
    objInputButton.setAttribute("id","Del");
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = document.getElementById('ln').value;
    cell2.innerHTML = document.getElementById('fn').value;
    cell3.innerHTML = document.getElementById('pn').value;
    cell4.appendChild(objInputButton);
  }

  function delete_row() {
    var my_tbody = document.getElementById('my-tbody');
    if (my_tbody.rows.length < 1) return;
    my_tbody.deleteRow( my_tbody.rows.length-1 );
  }