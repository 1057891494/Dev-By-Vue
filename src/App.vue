<template>
  <section class='root'>
    <nav class='menu'>
        <ul deep='1'></ul>
    </nav>
    <article class='content'>
        <router-view></router-view>
    </article>
  </section>
</template>
<script>
export default {
  mounted: function() {
    //获取菜单数据（本来应该发HTTP请求的数据，这里为了方便就直接require）
    const menu = require("../static/menu.json");
    //生成菜单HTML
    (function appendNode(item, deep) {
      if (item.list && item.list.length > 0) {
        var ulT = $$('ul[deep="' + deep + '"]');
        $$(ulT[ulT.length - 1]).append(
          "<li hadchild='Y'><i>" +
            item.name +
            "</i><ul deep=" +
            (deep - -1) +
            "></ul></li>"
        );
        var flag;
        for (flag = 0; flag < item.list.length; flag++) {
          appendNode(item.list[flag], deep + 1);
        }
      } else {
        var ulT = $$('ul[deep="' + deep + '"]');
        $$(ulT[ulT.length - 1]).append(
          "<li class='leaf'><i path=" +
            item.path +
            ">" +
            item.name +
            "</i></li>"
        );
      }
    })(menu, 1);
    //添加点击事件
    $$(".root>.menu li>i").bind("click", function() {
      var ul = $$(this).nextAll("ul");
      if (ul.length > 0) {
        //打开或关闭子菜单
        ul.parent("li").toggleClass("notOpen");
      } else {
        //打开页面
        window.location.href = "#/" + $$(this).attr("path");
      }
    });
  }
};
</script>
<style lang="scss">
.root {
  font-size: 0;
  vertical-align: top;
  & > .content {
    font-size: 0.16rem;
    display: inline-block;
    width: calc(100vw - 2.9rem);
    vertical-align: top;
  }
  & > .menu {
    user-select: none;
    border-right: 0.07rem solid #f5f5f5;
    height: 100vh;
    vertical-align: top;
    font-size: 0.16rem;
    display: inline-block;
    width: 2.9rem;
    li.notOpen {
      & > ul {
        display: none;
      }
    }
    [deep] {
      margin-left: 1em;
      margin-left: 1em;
      list-style-type: none;
      &:not([deep="1"]) {
        li {
          &:before {
            content: "";
            border-left: 1px solid gray;
            border-bottom: 1px solid gray;
            left: -1.5em;
            top: -1em;
            position: absolute;
            right: auto;
            height: 2em;
            width: 1em;
          }
          &[hadchild="Y"] {
            color: #3f51b5;
            & > i {
              font-style: normal;
              &:before {
                content: "";
                width: 1em;
                height: 1em;
                display: inline-block;
                position: absolute;
                top: 0.5em;
                left: -1em;
                z-index: 2;
                background-position-y: bottom;
              }
            }
          }
        }
      }
      li {
        position: relative;
        line-height: 2em;
        cursor: pointer;
        i {
          font-style: normal;
        }
        &.leaf {
          color: #795548;
          & > i {
            &:before {
              content: " ";
              width: 0.6em;
              height: 0.6em;
              display: inline-block;
              border-radius: 50%;
              background-color: #795548;
              position: absolute;
              top: 0.5em;
              left: -0.5em;
              top: 0.7em;
              left: -0.7em;
            }
          }
        }
        &[hadchild="Y"] {
          color: #666666;
          & > i {
            padding-left: 0.5em;
            &:before {
              background-image: url("./assets/menu-icon.png");
              content: "";
              width: 1em;
              height: 1em;
              display: inline-block;
              position: absolute;
              top: 0.5em;
              left: -1em;
              background-position-y: top;
              z-index: 2;
            }
          }
        }
        &[hadchild="Y"]:not(:last-child):after {
          content: "";
          border-right: 1px solid gray;
          left: -2.5em;
          top: -0.9em;
          position: absolute;
          right: auto;
          height: 100%;
          width: 1em;
        }
      }
    }
  }
}
</style>
