(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var s,r=n(4),o=n.n(r),c=n(5),i=n(6),a=n(9),l=n(7),u=n(8),d=n(1),h=n(2),b=n.n(h),j=(n(14),n(15),n(0)),p=function(t){var e=t.goods;return Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsx)("li",{"data-cy":"Good",children:t},t)}))})},f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var v=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isReversed:!1,sortType:s.NONE},t.handleReset=function(){t.setState({isReversed:!1,sortType:s.NONE})},t.handleReverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.handleSort=function(e){t.setState({sortType:e})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isReversed,r=e.sortType,o=function(t,e){var n=e.sortType,r=e.isReversed,o=Object(u.a)(t);return o.sort((function(t,e){switch(n){case s.ALPHABET:return t.localeCompare(e);case s.LENGTH:return t.length-e.length;default:return 0}})),r&&o.reverse(),o}(f,this.state),c=n||r!==s.NONE;return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:b()("button is-info",{"is-light":r!==s.ALPHABET}),onClick:function(){return t.handleSort(s.ALPHABET)},children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:b()("button is-success",{"is-light":r!==s.LENGTH}),onClick:function(){return t.handleSort(s.LENGTH)},children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:b()("button is-warning",{"is-light":!n}),onClick:this.handleReverse,children:"Reverse"}),c&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleReset,children:"Reset"})]}),Object(j.jsx)(p,{goods:o})]})}}]),n}(d.Component);o.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7a4a4d72.chunk.js.map