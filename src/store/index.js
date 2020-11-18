import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

axios.defaults.baseURL = "https://private-anon-8da920bece-wad20postit.apiary-mock.com";

export function createStore() {
    return new Vuex.Store({
        state: {
            user: null,
            posts: [],
            profiles: []
        },
        mutations: {
            SET_USER (state, user) {
                state.user = user;
            },
            SET_POSTS (state, posts) {
                state.posts = posts;
            },
            SET_PROFILES (state, profiles) {
                state.profiles = profiles;
            }
        },
        actions: {
            FETCH_USER ({commit}) {
                axios.get('/users/1')
                    .then(function(res) {
                        commit('SET_USER', res.data);
                    })
                    .catch(function(err) {
                        console.log(err);
                    })
            },
            FETCH_POSTS ({commit}) {
                axios.get('/posts')
                    .then(function(res) {
                        commit('SET_POSTS', res.data);
                    })
                    .catch(function(err) {
                        console.log(err);
                    })
            },
            FETCH_PROFILES ({commit}) {
                axios.get('/profiles')
                    .then(function(res) {
                        commit('SET_PROFILES', res.data);
                    })
                    .catch(function(err) {
                        console.log(err);
                    })
            }
        }
    })
}