// app.js


function setupFireBase(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCqpMjTI7Xa2xnwDNsOGnEYsOy8x8ziioQ",
        authDomain: "webp-e86d6.firebaseapp.com",
        databaseURL: "https://webp-e86d6.firebaseio.com",
        projectId: "webp-e86d6",
        storageBucket: "webp-e86d6.appspot.com",
        messagingSenderId: "615838044537"
      };
      firebase.initializeApp(config);


    var ref = firebase.database().ref("Empolyees");
    
    //when child is added
    ref.on("child_added", function(snap){
        var list           = document.querySelector("#list");
        const tr           = document.createElement("tr");
        const td_id        = document.createElement("td");
        const td_firstname = document.createElement("td");
        const td_lastname  = document.createElement("td");
        const td_birthday  = document.createElement("td");
        const td_age       = document.createElement("td");
        const td_po        = document.createElement("td");
        const td_action    = document.createElement("td");
        const action       = document.createElement("a");



        
        const birthday = snap.child("birthday").val().split("-");
        const d1 = new Date(birthday[0],birthday[1]-1,birthday[2]);
        const d2 = new Date();
        const diff = d2.getTime() - d1.getTime();
        const daysPast = Math.floor(diff / (1000 * 60 * 60 * 24));
        const age = Math.floor(daysPast / 365.25);

    
        td_id.innerText          = snap.child("id").val()
        td_firstname.innerText   = snap.child("firstname").val()
        td_lastname.innerText    = snap.child("lastname").val()
        td_birthday.innerText    = snap.child("birthday").val()
        td_age.innerText         = age + 1;
        td_po.innerText          = snap.child("po").val()
        action.innerText         = "delete";
        action.href="#";

        action.onclick = function (){
            var Empolyees_id = this.parentElement.parentElement.id;
            var Empolyees = firebase.database().ref("Empolyees").child(Empolyees_id);
            Empolyees.remove();
            var del_tr = document.querySelector("#" + Empolyees_id);
            del_tr.remove();      
        }
        td_action.appendChild(action);

        tr.appendChild(td_id);
        tr.appendChild(td_firstname);
        tr.appendChild(td_lastname);
        tr.appendChild(td_birthday);
        tr.appendChild(td_age);
        tr.appendChild(td_po);
        tr.appendChild(td_action);
        
        
        tr.id = snap.key;
        list.appendChild(tr);
    });


}



window.onload = function(){
    
    //alert("ok");
    setupFireBase();
    
    var btnSave = document.querySelector("#button_save");
    //btnSave.onclick = function() {} #old style    
    btnSave.addEventListener("click",function(){
        var id = document.querySelector("#id").value;
        var firstname = document.querySelector("#firstname").value;
        var lastname = document.querySelector("#lastname").value;
        var birthday = document.querySelector("#birthday").value;
        var po = document.querySelector("#po").value;
        console.log(id);
        console.log(firstname);
        console.log(lastname);
        console.log(birthday);
        console.log(po);
        firebase.database().ref().child("Empolyees").push().set(
            {
                id:id,
                firstname:firstname,
                lastname:lastname,
                birthday:birthday,
                po:po
            }
        );


    });


}