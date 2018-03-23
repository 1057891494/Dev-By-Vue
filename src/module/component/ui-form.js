import Vue from 'vue';

const uiForm = Vue.component('ui-form', {
    props: ['name'],
    template: ' <form novalidate :name="name"><slot></slot></form>',
    mounted: function() {
        var _this = this;
        $$('form[name="' + this.name + '"]').bind('submit', function() {

            console.log(_this);

            //如果合法提交
            _this.$emit('triggerSubmit',_this.name);

        });
    }
});
