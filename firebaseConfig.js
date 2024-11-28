import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAJyQub3rXS7DGh-XxUi2x_t-ff-iWWIFA",
  authDomain: "ecommerce-app-906e8.firebaseapp.com",
  databaseURL: "https://ecommerce-app-906e8-default-rtdb.firebaseio.com",
  projectId: "ecommerce-app-906e8",
  storageBucket: "ecommerce-app-906e8.appspot.com",
  messagingSenderId: "287771481104",
  appId: "1:287771481104:web:68b970f7aad6e9eaaea695",
  measurementId: "G-HN6W55ERX8"
};

const app = initializeApp(firebaseConfig);

export { firebaseConfig, app };
