
var pb = new Array();
var tableArr = new Array();
var lnArr = new Array();
var fnArr = new Array();
var pnArr = new Array();




// 저장버튼으로 받은 배열값으로 테이블로우 추가
function add_row(p) {
  var my_tbody = document.getElementById('my-tbody');
  var row = my_tbody.insertRow( my_tbody.rows.length );
  var objInputButton = document.createElement("input");
  objInputButton.setAttribute("type", "button");
  objInputButton.setAttribute("value", "Del");
  objInputButton.setAttribute("onclick", "delRow(this);");
  objInputButton.setAttribute("id","Del");
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = p.lastName;
  cell2.innerHTML = p.firstName;
  cell3.innerHTML = p.phoneNumber;
  cell4.appendChild(objInputButton);



}

var t = 0;
// 세이브 버튼으로 인해 제이슨객체에서 배열로 저장 및 테이블로우 데이터 전송
document.getElementById('savebtn').onclick = function() {
  var p = new Object();
  p.lastName = document.getElementById('ln').value;
  p.firstName = document.getElementById('fn').value;
  p.phoneNumber = document.getElementById('pn').value;
  

  pb.push(p);
  lnArr.push(document.getElementById('ln').value);
  fnArr.push(document.getElementById('fn').value);
  pnArr.push(document.getElementById('pn').value);

  add_row(p);

  tableArr.push(t);
  t++;
}

// Del버튼 클릭시 delRow 함수를 호출함.
// i는 Del의 부모노드(td)의 부모노드(tbody)의 로우인덱스 값(Del의 테이블로우 값)
// tbody를 호출하여 로우인덱스값에 해당하는 행 삭제 및 행값에 맞는 배열데이터 삭제
function delRow(d){ 
  var i=d.parentNode.parentNode.rowIndex;
  document.getElementById('my-tbody').deleteRow(i-1);
  pb.splice(i-1,1);
  tableArr.splice(i-1,1);
}

//테이블 제거 함수
function tableDel() {
  var my_tbody = document.getElementById('my-tbody');
var row = my_tbody.insertRow( my_tbody.rows.length );
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);

  while (my_tbody.rows.length > 0) {
    my_tbody.deleteRow( my_tbody.rows.length-1 );
    tableArr.splice(0,1);
  }
}


//새로운 테이블 생성 함수
function newTable() {
  var my_tbody = document.getElementById('my-tbody');
  var row = my_tbody.insertRow( my_tbody.rows.length );
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = pb[j].lastName;
  cell2.innerHTML = pb[j].firstName;
  cell3.innerHTML = pb[j].phoneNumber;
  cell4.innerHTML = "<input id='Del' value='Del' type='button' onclick='delRow(this)'/>";
}

//본 테이블 값 재생성
function backUp() {
  for(j=0; j<pb.length; j++){
  var my_tbody = document.getElementById('my-tbody');
  var row = my_tbody.insertRow( my_tbody.rows.length );
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = pb[j].lastName;
  cell2.innerHTML = pb[j].firstName;
  cell3.innerHTML = pb[j].phoneNumber;
  cell4.innerHTML = "<input id='Del' value='Del' type='button' onclick='delRow(this)'/>";
  }
}

// search 버튼을 누르면 searchTxt 안에 있는 값을 불러오고
// 순환문을 통해 그 값에 맞는 배열 속 last Name을 찾아내어
// 테이블 내에 검색한 값을 식별할 수 있게 함. ex)mark, color ... 
document.getElementById('searchBtn').onclick = function() {
tableDel();
 

 t=0;
 //따로 또 Del 버튼 속성을 추가해야함 (add버튼에서 지역변수로 작동되었기 때문)
  for(j=0; j<pb.length; j++) {
 
    if(pb[j].lastName == document.getElementById('searchTxt').value) {
      // 배열 데이터를 바탕으로 새로운 cell값을 추가 후 식별 처리
      var my_tbody = document.getElementById('my-tbody');
      var row = my_tbody.insertRow( my_tbody.rows.length );
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      cell1.innerHTML = "<b>"+"<span style='color:#FF0000'>" + pb[j].lastName +"</span>"+"<b>";
      cell2.innerHTML = pb[j].firstName;
      cell3.innerHTML = pb[j].phoneNumber;
      cell4.innerHTML = "<input id='Del' value='Del' type='button' onclick='delRow(this)'/>";
      tableArr.push(t);
    } else {
      // 배열 데이터를 바탕으로 새로운 cell값을 추가
      newTable();
      tableArr.push(t);
    }
    t++;
  }
}

// 각 객체별(lastName)로 새로운 배열을 추가하여 그에 맞는 값을 반복비교하여 테이블 재 작성
function lnSort() {
  lnArr.sort();
  tableDel();

  for(i=0; i<lnArr.length; i++) {
    
    for(j=0; j<lnArr.length; j++) {
      if(lnArr[i] == pb[j].lastName) {
        if(pb[j].lastName == ""){alert("빈 칸이 포함되었습니다.");
        backUp(); return;}
        newTable();
      }
    }
  }
}

// 각 객체별(firstName)로 새로운 배열을 추가하여 그에 맞는 값을 반복비교하여 테이블 재 작성
function fnSort() {
  fnArr.sort();
  tableDel();

  for(i=0; i<fnArr.length; i++) {
    
    for(j=0; j<fnArr.length; j++) {
      if(fnArr[i] == pb[j].firstName) {
        if(pb[j].firstName == ""){alert("빈 칸이 포함되었습니다.");
        backUp(); return;}
        newTable();
      }
    }
  }
}

// 각 객체별(phoneNumber)로 새로운 배열을 추가하여 그에 맞는 값을 반복비교하여 테이블 재 작성
function pnSort() {
  pnArr.sort();
  tableDel();

  for(i=0; i<pnArr.length; i++) {
    
    for(j=0; j<pnArr.length; j++) {
      if(pb[j].phoneNumber == ""){alert("빈 칸이 포함되었습니다.");
       backUp(); return;}
      if(pnArr[i] == pb[j].phoneNumber) {
       newTable();
      }
    }
  }
}


