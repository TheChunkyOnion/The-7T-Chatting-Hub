var firebaseConfig = {
  apiKey: "AIzaSyC-zqDTETYYg7q6x4AioVBC5Lmltfls6RY",
  authDomain: "chattinghub-f7df7.firebaseapp.com",
  databaseURL: "https://chattinghub-f7df7-default-rtdb.firebaseio.com",
  projectId: "chattinghub-f7df7",
  storageBucket: "chattinghub-f7df7.appspot.com",
  messagingSenderId: "985569246898",
  appId: "1:985569246898:web:2da31c7bb0e196f6a313ab"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child("user_name").update({
        purpose: "addinguser"
    });
}