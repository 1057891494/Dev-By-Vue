import Vue from 'vue';
import App from './App.vue';

// 路由
import router from './router';

// 过滤器
import './module/filter/numberChineseFtr';
import './module/filter/moneyUpFtr';

// 组件
import './module/component/ui-form';

var vm = new Vue({
    el: '#root',
    render: function(callback) { return callback(App); },
    router: router
});
