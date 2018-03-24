import Vue from 'vue';

Vue.component('ui-form', {
    props: ['name'],
    template: ' <form novalidate :name="name" method="post"><slot></slot></form>',
    methods: {
        updateValid() {
            var inputs = $$('form[name="' + this.name + '"] [valid-scope]');
            var flag, tempResult, tempValid;
            this.$valid[this.name].error = [];
            for (flag = 0; flag < inputs.length; flag++) {
                tempResult = [];
                //必输是否合法
                $$(inputs[flag]).removeClass('$invalid-required');
                if (/ required/.test($$.outerHTML(inputs[flag]))) {
                    if ($$(inputs[flag]).val() == '') {
                        this.$valid[this.name].error.push({
                            'name': $$(inputs[flag]).prev().text(),
                            'type': 'required'
                        });
                        $$(inputs[flag]).addClass('$invalid-required');
                    }
                }
            }
            //修改表单是否合法
            if (this.$valid[this.name].error.length > 0) {
                this.$valid[this.name].valid = false;
            } else {
                this.$valid[this.name].valid = true;
            }
            // 动态添加表单是否合法
            if (this.$valid[this.name].valid) {
                $$('form[name="' + this.name + '"]').addClass('$valid-form').removeClass('$invalid-form');
            } else {
                $$('form[name="' + this.name + '"]').addClass('$invalid-form').removeClass('$valid-form');
            }
        }
    },
    mounted: function() {
        var _this = this;
        _this.$valid = {
            [_this.name]: {
                "valid": false,
                "error": []
            }
        };
        _this.updateValid();
        $$('form[name="' + this.name + '"]').bind('submit', function(event) {
            event = event || window.event;
            $$.preventDefault(event);
            $$.cancelBubble(event);
            if (_this.$valid[_this.name].valid) {
                //如果合法提交
                _this.$emit(_this.name + 'Submit');
            } else {
                //提示错误信息
                switch (_this.$valid[_this.name].error[0].type) {
                    case 'required':
                        {
                            alert('温馨提示：[' + _this.$valid[_this.name].error[0].name + ']不可以为空！');
                            break;
                        }
                    default:
                        {
                            alert('温馨提示：[' + _this.$valid[_this.name].error[0].name + ']输入非法！');
                        }
                }
            }
        });
    },
    updated: function() {
        this.updateValid();
    }
});
