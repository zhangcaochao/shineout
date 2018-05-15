webpackJsonp([21],{1313:function(e,t){e.exports='# Breadcrumb  *面包屑*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | ---|\n| data | Array | [] | 面包屑对象数组,对象属性可选值为: <br />title: 面包屑显示文字<br />url: 地址<br />icon: 图标,可以使用Icon组件生成或者自定义图标组件|\n| separator | String\\|ReactNode | "/" | 面包屑分隔符,可以是字符串或自定义的元素|\n| keygen | String \\| Function | "id" | key生成规则,如果为function,参数为单条数据, 并以返回值作为key\n'},1314:function(e,t){e.exports="# Breadcrumb\n\n<example />"},1315:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(597),r=n(1),o=n.n(r),i=[{id:"1",title:"Home",url:"#"},{id:"2",title:"Menu"},{id:"3",title:"Self"}];t.default=function(){return o.a.createElement(a.a,{data:i})}},1316:function(e,t){e.exports="/**\n * cn - 基本用法\n * en - base\n */\n\nimport React from 'react';\nimport { Breadcrumb } from 'shineout';\n\nconst data = [{\n  id: '1',\n  title: 'Home',\n  url: '#',\n}, {\n  id: '2',\n  title: 'Menu',\n}, {\n  id: '3',\n  title: 'Self',\n}]\n\nexport default function () {\n  return (\n    <Breadcrumb data={data} />\n  )\n}\n"},1317:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(597),r=n(1),o=n.n(r);function i(){return o.a.createElement("span",null,"~")}var c=[{title:"Home",url:"#"},{title:"Self",url:"https://www.baidu.com"}];t.default=function(){return o.a.createElement(r.Fragment,null,o.a.createElement(a.a,{keygen:"title",data:c,separator:"|"}),o.a.createElement(a.a,{keygen:function(e){return e.title+"2"},data:c,separator:o.a.createElement(i,null)}))}},1318:function(e,t){e.exports="/**\n * cn - 自定义分隔符(字符串和reactNode)\n * en - separator(string and reactNode)\n */\n\nimport React, { Fragment } from 'react'\nimport { Breadcrumb } from 'shineout'\n\nfunction Separator() {\n  return <span>~</span>\n}\n\nconst data = [{\n  title: 'Home',\n  url: '#',\n}, {\n  title: 'Self',\n  url: 'https://www.baidu.com',\n}]\n\nexport default function () {\n  return (\n    <Fragment>\n      <Breadcrumb keygen=\"title\" data={data} separator=\"|\" />\n      <Breadcrumb keygen={d => (`${d.title}2`)} data={data} separator={<Separator />} />\n    </Fragment>\n  )\n}\n\n"},1319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(597),r=n(543),o=n(1),i=n.n(o),c=Object(r.a)("//at.alicdn.com/t/font_550076_aqfu50lfa47bke29.css"),u=[{id:"1",icon:i.a.createElement(c,{name:"info"}),url:"#"},{id:"2",title:"Menu"},{id:"3",title:"Self",url:"https://www.baidu.com"}];t.default=function(){return i.a.createElement(a.a,{data:u})}},1320:function(e,t){e.exports="/**\n * cn - 图标\n * en - icon\n */\n\nimport React from 'react'\nimport { Breadcrumb, Icon } from 'shineout'\n\n\nconst MyIcon = Icon('//at.alicdn.com/t/font_550076_aqfu50lfa47bke29.css')\n\nconst data = [{\n  id: '1',\n  icon: <MyIcon name=\"info\" />,\n  url: '#',\n}, {\n  id: '2',\n  title: 'Menu',\n}, {\n  id: '3',\n  title: 'Self',\n  url: 'https://www.baidu.com',\n}]\n\nexport default function () {\n  return (\n    <Breadcrumb data={data} />\n  )\n}\n"},1359:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),r=n.n(a),o=n(119),i=n(118),c=n(78),u=n(1313),l=n.n(u),s=n(1314),f=n.n(s),d=Object(c.a)(l.a,f.a),p=[{name:"1-base",title:Object(c.a)("基本用法","base"),component:n(1315).default,rawText:n(1316)},{name:"2-separator",title:Object(c.a)("自定义分隔符(字符串和reactNode)","separator(string and reactNode)"),component:n(1317).default,rawText:n(1318)},{name:"3-icon",title:Object(c.a)("图标","icon"),component:n(1319).default,rawText:n(1320)}];t.default=Object(o.a)(function(e){return r.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:d,examples:p}))})},543:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=(n(4),n(48)),i=n.n(o),c=n(49),u=n(56);function l(e){var t=e.children,n=e.prefix,a=e.type,o=e.name,c=e.fontFamily,l=e.fontSize,s=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["children","prefix","type","name","fontFamily","fontSize"]),f=i()(Object(u.j)("_",a),e.className,n+"-"+o),d=Object.assign({},{fontFamily:c,fontSize:l},e.style);return r.a.createElement("i",Object.assign({},s,{className:f,style:d}),t)}l.defaultProps=Object.assign({},c.a,{prefix:"icon",fontFamily:"iconfont",name:"",type:"default"});var s=l,f={};t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"iconfont",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"icon";if(e&&!f[e]){f[e]=!0;var a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css"),a.setAttribute("href",e),document.head.appendChild(a)}return function(e){return r.a.createElement(s,Object.assign({fontFamily:t,prefix:n},e))}}},597:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(4),i=(n.n(o),n(48)),c=n.n(i),u=n(49),l=n(56),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.PureComponent),s(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.separator,a=e.keygen,o=c()(Object(l.b)("_"),this.props.className);return r.a.createElement("div",{className:o},t.map(function(e,o){return r.a.createElement("span",{key:"string"==typeof a?e[a]:a(e)},r.a.createElement("span",null,r.a.createElement("a",{href:e.url?e.url:"javascript:;"},e.icon,e.title)),o!==t.length-1?r.a.createElement("span",null,n):null)}))}}]),t}();f.defaultProps=Object.assign({},u.a,{dataSource:[],separator:"/",keygen:"id"}),t.a=f}});