//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBwRUXmv9th0D9oyglT7FM_xBFXG987-Z0",
      authDomain: "kwitter-app-f02ad.firebaseapp.com",
      databaseURL: "https://kwitter-app-f02ad-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-f02ad",
      storageBucket: "kwitter-app-f02ad.appspot.com",
      messagingSenderId: "580790443015",
      appId: "1:580790443015:web:12a8d0f19ab27022011ea2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref("room_name").push({
          name:user_name,
          message:msg,
          like:0  
      })
      document.getElementById("msg").value=""
}
