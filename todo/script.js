import Vue from 'vue';
import ToDo from './vue/ToDo';

new Vue({ render: createElement => createElement(ToDo) }).$mount('#app');