import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from "./router";
import store from "./store/index";
import '../public/assets/css/all.min.css'
import '../public/assets/bootstrap/css/bootstrap.min.css'
import '../public/assets/css/owl.carousel.css'
import '../public/assets/css/magnific-popup.css'
import '../public/assets/css/animate.css'
import '../public/assets/css/meanmenu.min.css'
import '../public/assets/css/main.css'
import '../public/assets/css/responsive.css'

createApp(App).use(store).use(router).mount('#app')

let account = localStorage.getItem('account');
if( account ){
    window.axios = require('axios')
    window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + account;
}