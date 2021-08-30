import Vue from 'vue';
import Vuex from 'vuex';
import MainApp from './components/MainApp.vue';
import axios, {AxiosResponse} from 'axios';

Vue.use(Vuex);
import store from './stores/index';


window.onload = () => {
    axios.get('/api/links.json').then((data: AxiosResponse<{ links: { id: string, url: string, title: string }[] }>) => {
        store.commit('replace-links', data.data.links);

        new Vue({
            el: '#main',
            store,
            components: {
                'main-app': MainApp
            }
        });
    });
}

