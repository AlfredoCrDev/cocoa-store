// npm install firebase (para instalar firebase en el proyecto)

// Se importa la funcion initializeApp de la libreia de firebase
import { initializeApp } from "firebase/app";

// Se importa el servicio de bd firestone
import { getFirestore } from "firebase/firestore"

// Configuracion que se extrae de la pagina de firebase para la conexion de la app con firebase
const firebaseConfig = {
  apiKey: "AIzaSyBZrTkmjNVRioHt31GqMzFmKG_5iJ0nei4",
  authDomain: "reat-coder.firebaseapp.com",
  projectId: "reat-coder",
  storageBucket: "reat-coder.appspot.com",
  messagingSenderId: "958064110499",
  appId: "1:958064110499:web:5b997a9a39a36905994816"
};

// Constante para incializar la app con la configuracion anterior como parametro
const app = initializeApp(firebaseConfig);

// Funcion getFirestone que trae la db con app como parametro ya que tiene la configuracion de conexion
export const db = getFirestore(app)