<template lang="jade">

-
  var menus = [
      {name: '首页(Home)', path: '/'}
    , {name: '颜色(Color)', path: '/color'}
    , {name: '按钮(Button)', path: '/button'}
    , {name: '表格(Table)', path: '/table'}
    , {name: '面板(Panel)', path: '/panel'}
    , {name: '表单(Form)', path: '/form'}
    , {name: '网格(Grid System)', path: '/grid'}
    , {name: '列表(List)', path: '/list'}
    , {name: '排版(Typography)', path: '/typography'}
    , {name: '标签(Label)', path: '/label'}
    , {name: '选项卡(Tab)', path: '/tab'}
    , {name: '模态框(Modal)', path: '/modal'}
    , {name: '图表(Chart)', path: '/chart'}
    , {name: '下拉(Dropdown)', path: '/dropdown'}
    , {name: '滚动条(Scrollbar)', path: '/scrollbar'}
    , {name: '日期时间选择器(Datetimepicker)', path: '/datetimepicker'}
  ];

div.db-aside
  div.navside
    div.nav-brand
      h1(style="color: #FFF;") Dashboard
    div.db-hide-scroll.flex
      nav.scroll
        ul
          each menu in menus
            li
              a(v-link="{ path: '" + menu.path + "' }")
                span.db-icon
                span.nav-text= menu.name
    div.nav-footer
      nav
        ul
          li
            a(v-link="{path: '/'}") Trending
            a(v-link="{path: '/'}") Stars

</template>
