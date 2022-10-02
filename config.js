import firebase from 'firebase';

// Agregar SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyB0OZMmpDtfrTnWqvm6OGqfVYhnYLNvV-o",
        authDomain: "base-pueba.firebaseapp.com",
        databaseURL: "https://base-pueba-default-rtdb.firebaseio.com",
        projectId: "base-pueba",
        storageBucket: "base-pueba.appspot.com",
        messagingSenderId: "11671325263",
        appId: "1:11671325263:web:cb4de44d3e3bd5dbf6b83a"
      
};
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
