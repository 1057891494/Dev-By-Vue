<template>
<article>
    <section>
        <header>
            数字变成中国汉字（二种类型）
        </header>
        <ul>
            <li>原始数据：{{num}}</li>
            <li>中文汉字一：{{num|numberChineseFtr}}</li>
            <li>中文汉字二：{{num|numberChineseFtr(true)}}</li>
        </ul>
    </section>
    <section>
        <header>
            金额大写
        </header>
        <ul>
            <li>原始数据：{{num}}</li>
            <li>大写的金额：{{num|moneyUpFtr}}</li>
        </ul>
    </section>
</article>
</template>

<script>
export default {
  data() {
    return {
      num: 520.1314
    };
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
    ul {
      list-style-type: none;
      padding-left: 0.6em;
    }
  }
}
</style>
