<template>
    <article>
        <section>
            <header>基础的表单提交用例</header>
            <ui-form name='myform1' v-on:triggerSubmit='doSubmit'>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="idcard">身份证</label>
                            <input type="text" id="idcard" name='idcard' v-model='param.idcard' required/>
                        </div>
                        <div class="col-md-6">
                            <label for="name">姓名</label>
                            <input type="text" id="name" name='name' v-model='param.name' required/>
                        </div>
                        <div class="col-md-6">
                            <label for="age">年龄</label>
                            <input type="text" id="age" name='age' v-model='param.age' required/>
                        </div>
                    </div>
                </div>
                <div class="btn-list">
                    <input type="button" v-on:click='doReset()' value="重置">
                    <input type="submit" value="提交">
                </div>
            </ui-form>
        </section>
    </article>
</template>
<script>
export default {
  data() {
    return {
      param: {}
    };
  },
  methods: {
    doReset() {
      this.param = {};
    },
    doSubmit(name) {
      alert("[" + name + "]提交表单！");
    }
  }
};
</script>
<style lang="scss" scoped>
article {
  section {
    header {
      color: red;
      padding: 0.6em;
      font-size: 0.2rem;
    }
    form {
      .col-md-6 {
        line-height: 3em;
        color: rgb(107, 101, 101);
        label {
          width: 30%;
          display: inline-block;
          text-align: right;
        }
        input {
          width: 60%;
          display: inline-block;
          border-radius: 0.5em;
          height: 2em;
          outline: none;
          padding-left: 0.5em;
        }
      }
    }
    .btn-list {
      text-align: center;
      input {
        width: 1.2rem;
        height: 2em;
        border-radius: 0.7em;
        border-width: 0;
        &[type="submit"] {
          background-color: #2196f3;
          color: #f7f4f4;
        }
        &[type="button"] {
          background-color: #eeecec;
          color: #607d8b;
        }
      }
    }
  }
}
</style>
