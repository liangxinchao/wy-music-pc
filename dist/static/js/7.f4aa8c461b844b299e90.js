webpackJsonp([7],{"3uZ1":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("34v0"),s=a.n(i),n=a("EcfS"),c=a("gyMJ"),l=a("6Pj+"),o=a("kvay"),d=a("G3uJ"),r={name:"detail",mixins:[a("5jRo").a],components:{MmLoading:l.a,MusicList:o.a},data:function(){return{list:[]}},created:function(){var t=this;Object(c.f)(this.$route.params.id).then(function(e){200===e.data.code&&(t.list=Object(d.b)(e.data.result.tracks),document.title=e.data.result.name+" - liang.xcPlayer在线音乐播放器",t._hideLoad())})},methods:s()({selectItem:function(t,e){this.selectPlay({list:this.list,index:e})}},Object(n.b)(["selectPlay"]))},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"details"},[a("mm-loading",{model:{value:t.mmLoadShow,callback:function(e){t.mmLoadShow=e},expression:"mmLoadShow"}}),t._v(" "),a("music-list",{attrs:{list:t.list},on:{select:t.selectItem}})],1)},staticRenderFns:[]};var m=a("Aizv")(r,u,!1,function(t){a("kKxf")},"data-v-7517ffc5",null);e.default=m.exports},kKxf:function(t,e){}});