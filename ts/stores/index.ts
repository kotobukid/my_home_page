import Vuex from 'vuex';

import {Link} from "./index_types";

const main_store = new Vuex.Store({
    state: {
        links: []
    },
    mutations: {
        'replace-links'(state: any, links: Link[]): void {
            state.links = links;
        }
    },
    getters: {
        links(state: any): Link[] {
            return state.links;
        }
    }
})

export default main_store;