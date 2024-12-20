(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{394:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优先级"}},[t._v("#")]),t._v(" 优先级")]),t._v(" "),s("ul",[s("li",[s("p",[t._v(":root 选择器特定性：0-1-0")])]),t._v(" "),s("li",[s("p",[t._v("html 选择器特定性：0-1-1")])]),t._v(" "),s("li",[s("p",[t._v("＊星號選擇器的級別是 0–0–0")])]),t._v(" "),s("li",[s("p",[t._v("标签选择器/伪元素 < 类选择器/属性选择器/伪类 < ID 选择器")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/20231207215001.png")}})])]),t._v(" "),s("h3",{attrs:{id:"has"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#has"}},[t._v("#")]),t._v(" "),s("code",[t._v(":has()")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("选择器允许我们根据元素的后代或任何后续元素来确定其样式")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 类名为 ‘post’ 下是否含有 a 或 span 标签，有则设置 ‘post’ 类所在标签的颜色为红色 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".post:has(a, span)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n<div class="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"post"')]),t._v(">\n  666\n  <a href="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://"')]),t._v(">text</a>\n</div>\n")])])]),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 类名为 ‘post’ 是否含有 p 标签兄弟标签，有则设置 ‘post’ 类所在标签的颜色为红色 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".post:has(+ p)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n<div class="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"post"')]),t._v(">text1</div>\n<p>text2</p>\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"not"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#not"}},[t._v("#")]),t._v(" "),s("code",[t._v(":not()")])]),t._v(" "),s("ul",[s("li",[t._v("标签中不含有类，则设置下划线样式")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":not([class])")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-decoration-thickness")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 下划线相对厚度 */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-underline-offset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.15em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 下划线偏移量 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n<a href="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://"')]),t._v(">text1</a>\n<a class="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),t._v(" href="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://"')]),t._v(">text2</a>\n")])])]),s("h3",{attrs:{id:"is"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#is"}},[t._v("#")]),t._v(" "),s("code",[t._v(":is()")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("以选择器列表作为参数，不能选择伪元素，伪元素在:is()的选择器列表中无效")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 标签中含有类名为 ‘text’，则设置颜色为红色 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(':is([class="text"])')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n<a class="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),t._v(" href="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://"')]),t._v(">text</a>\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"where"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where"}},[t._v("#")]),t._v(" "),s("code",[t._v(":where()")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("父标签为 p 的 span 标签鼠标悬浮为红色")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":where(p) span:hover")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("cursor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pointer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n<p>\n  <span>text1</span>\n  <i>text2</i>\n</p>\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"is-与-where-异同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#is-与-where-异同"}},[t._v("#")]),t._v(" "),s("code",[t._v(":is()")]),t._v(" 与 "),s("code",[t._v(":where()")]),t._v(" 异同")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("在 CSS 中，当使用选择器列表时，如果任何一个选择器无效，则整个列表将被视为无效。使用 "),s("code",[t._v(":is()")]),t._v(" 或 "),s("code",[t._v(":where()")]),t._v(" 时，如果一个选择器无法解析，整个选择器列表不会被视为无效，而是会忽略不正确或不支持的选择器，并使用其他的选择器。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 即使在不支持 :unsupported 的浏览器中，仍将正确解析 :valid */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":is(:valid, :unsupported)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* … */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 在不支持 :unsupported 浏览器中即使它们支持 :valid，仍将忽略 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":valid,\n:unsupported")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* … */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"focus-within"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#focus-within"}},[t._v("#")]),t._v(" "),s("code",[t._v(":focus-within")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("当元素或其任意后代元素被聚焦时，将匹配该元素")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("label:focus-within")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n<label>"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <input name= "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Name'")]),t._v(" type= "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),t._v(" / ></label>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"placeholder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#placeholder"}},[t._v("#")]),t._v(" "),s("code",[t._v(":placeholder")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("占位样式")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("input:placeholder")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n<label>"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <input name= "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Name'")]),t._v(" type= "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),t._v(" / ></label>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"empty"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#empty"}},[t._v("#")]),t._v(" "),s("code",[t._v(":empty")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("选择没有子元素（包括文本节点）的元素。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #0f0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div:empty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #f00"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n<div></div>\n<div>666</div>\n<div>\n  <span></span>\n</div>\n")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);