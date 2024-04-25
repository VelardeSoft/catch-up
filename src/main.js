import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
// Add PrimeVue UI Library
import PrimeVue from "primevue/config";

// Add theme foe app  - Agregamos los temas
import 'primevue/resources/themes/md-light-indigo/theme.css' //Importamos de la 1° de primevue
import 'primevue/resources/primevue.min.css';

// Add icons for app
import 'primeicons/primeicons.css'

// Add PrimeFlex for app
import 'primeflex/primeflex.css';

// Import component - primevue
import Button       from 'primevue/button';
import SelectButton from "primevue/selectbutton";
import Card         from "primevue/card";
import Sidebar      from "primevue/sidebar";
import Avatar       from "primevue/avatar";
import Menu         from "primevue/menu";
import Menubar      from "primevue/menubar";
import Toolbar      from "primevue/toolbar";


const app=createApp(App);

// Add configurations for primeVue Plugin and Components
app.use(PrimeVue, {ripple: true}) //Incluido de Prime Vue
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-select-button', SelectButton)
    .component('pv-sidebar', Sidebar)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar);

// Mount the app
app.mount('#app');
