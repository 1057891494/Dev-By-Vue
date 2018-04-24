import Vue from 'vue';

Vue.directive('star', {
    bind: function(el, binding, vnode, oldVnode) {
        if ($$(el).find('[required]').length > 0) {
            $$(el).find('label').addClass('required');
        }
    },
    update: function(el, binding, vnode, oldVnode) {
        if ($$(el).find('[required]').length > 0) {
            $$(el).find('label').addClass('required');
        } else {
            $$(el).find('label').removeClass('required');
        }
    }
});
