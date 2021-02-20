
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
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome"+ user_name+"!";
  function addroom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name" 
    });
    localStorage.setItem("room_name",room_name);
    window.location="logout.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
