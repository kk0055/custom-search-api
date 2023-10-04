require('./bootstrap');

import { createApp } from 'vue';
import ExampleComponent from './components/ExampleComponent.vue';
import Main from './Main.vue';

createApp(Main).mount('#app');