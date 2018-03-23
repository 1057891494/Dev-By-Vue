import Vue from 'vue';

Vue.directive('star', {
    bind: function(el, binding, vnode, oldVnode) {
        if ($$(el).find('[required]').length > 0) {
            console.log('//如果是必输项 bind');
        }
    },
    update: function(el, binding, vnode, oldVnode) {
        if ($$(el).find('[required]').length > 0) {
            console.log('//如果是必输项 update');
        } else {
            console.log('//如果不是必输项 update');
        }
    }
});
