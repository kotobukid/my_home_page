import Vue from 'vue';
import MainApp from './components/MainApp.vue';

window.onload = () => {
    new Vue({
        el: '#main',
        components: {
            'main-app': MainApp
        }
    });
}

