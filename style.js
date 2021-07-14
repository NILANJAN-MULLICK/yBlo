var firebaseConfig = {
    apiKey: "AIzaSyAabLMOH9VwYM5RnfWF68M1aChJigkcGL0",
    authDomain: "nilanjan-ygig.firebaseapp.com",
    projectId: "nilanjan-ygig",
    storageBucket: "nilanjan-ygig.appspot.com",
    messagingSenderId: "246138313920",
    appId: "1:246138313920:web:0c380201763483a3092125",
    measurementId: "G-EC1T6KWX9N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function Log_in() {
    user_name = document.getElementById("room_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
} 

var firebaseConfig = {
      apiKey: "AIzaSyBSpWPzFM4qPRUqnWKTjfFB3Kg3loZxox4",
      authDomain: "let-chat-web-app-eb32a.firebaseapp.com",
      databaseURL: "https://let-chat-web-app-eb32a-default-rtdb.firebaseio.com",
      projectId: "let-chat-web-app-eb32a",
      storageBucket: "let-chat-web-app-eb32a.appspot.com",
      messagingSenderId: "361079847033",
      appId: "1:361079847033:web:76e6717d5092bfe3ef3ca8",
      measurementId: "G-46LFWFHP94"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();