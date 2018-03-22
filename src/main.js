import Vue from 'vue';
import App from './App.vue';
import router from './router';

var vm = new Vue({
    el: '#root',
    render: function(callback) { return callback(App); },
    router: router
});
