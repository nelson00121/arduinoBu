// Configura Firebase
const firebaseConfig = {
    databaseURL: "https://proyecpureba-default-rtdb.firebaseio.com/"
};

// Inicializa Firebase  
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(app);

// Selecciona el checkbox y referencia en la base de datos
const checkbox = document.getElementById("checkbox");
const estadoRef = firebase.database().ref("/estado");

// Escucha el estado inicial y cualquier cambio futuro en Firebase y actualiza el checkbox
estadoRef.on("value", (snapshot) => {
    const estado = snapshot.val();
    checkbox.checked = estado;
});

// Cambia el estado en Firebase cuando se cambia el estado del checkbox
checkbox.addEventListener("change", () => {
    estadoRef.set(checkbox.checked); // Actualiza el estado en la base de datos
});
