import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAWrP1GQ9OrgP_wkI0rmyh3Vs6d0kGOa5U",
  authDomain: "ecommerce-39da4.firebaseapp.com",
  projectId: "ecommerce-39da4",
  storageBucket: "ecommerce-39da4.appspot.com",
  messagingSenderId: "552429208577",
  appId: "1:552429208577:web:c0816f75e326d48e38ac00",
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");
