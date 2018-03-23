import Vue from 'vue';

Vue.component('ui-form', {
    props: ['name'],
    template: ' <form novalidate :name="name"><slot></slot></form>',
    methods: {
        updateValid() {

        }
    },
    beforeCreate: function() {

    },
    mounted: function() {
        var _this = this;
        _this.$valid = {
            [_this.name]: {
                "valid": false
            }
        };
        _this.updateValid();
        $$('form[name="' + this.name + '"]').bind('submit', function() {
            if (_this.$valid[_this.name].valid) {
                //如果合法提交
                _this.$emit(_this.name + 'Submit');
            } else {
                //提示错误信息
                console.log(_this.$valid);
            }
        });
    },
    updated: function() {
        this.updateValid();
    }
});
