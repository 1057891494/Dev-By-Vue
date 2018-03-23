import Vue from 'vue';
import App from './App.vue';

// 路由
import router from './router';

// 过滤器
import './filter/numberChineseFtr';
import './filter/moneyUpFtr';

var vm = new Vue({
    el: '#root',
    render: function(callback) { return callback(App); },
    router: router
});
