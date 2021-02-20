var firebaseConfig = {
    apiKey: "AIzaSyALZxGMD3p8UafxGECvCr6Wo6Zwr4UaqcI",
    authDomain: "kwitterbotletschat.firebaseapp.com",
    projectId: "kwitterbotletschat",
    storageBucket: "kwitterbotletschat.appspot.com",
    messagingSenderId: "731831913688",
    appId: "1:731831913688:web:d8c756725d2ad64115dbad",
    measurementId: "G-CRBCWMDH8W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name=message_data['name'];
         message=message_data['message'];
         like=message_data['like'];
         name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
         like_button="<button class='btn btn-warning'id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
         span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> likes:"+like+"</span></button><hr>";
         row=name_with_tag+message_with_tag+like_button+span_with_tag;
         document.getElementById("update").innerHTML+=row;
      } });  }); }
getData();
function updateLike(message_id){
      console.log("clicked on like button-"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updateLike=Number(likes)+1;
      console.log(updateLike);
      firebase.database().ref(room_name).child(message_id).update({
            like:updateLike
      });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html")
}