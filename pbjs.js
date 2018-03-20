document.getElementById('savebtn').onclick = function() {
    add_row();
}


function add_row() {
table = document.getElementById("table");
tr = document.createElement('tr');
td1 = document.getElementById("td1");
td2 = document.getElementById("td2");
td3 = document.getElementById("td3");
td1.innerText = document.getElementById('ln').value;
td2.innerText = document.getElementById('fn').value;
td3.innerText = document.getElementById('pn').value;
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);
table.appendChild(tr);
}
