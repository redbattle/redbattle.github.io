(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{385:function(t,a,s){"use strict";s.r(a);var e=s(6),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"原型和原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型和原型链"}},[t._v("#")]),t._v(" 原型和原型链")]),t._v(" "),a("ul",[a("li",[t._v("每个对象都会在内部初始化一个属性 prototype，当访问对象的属性时，如果这个对象内部不存在这个属性，就会去 prototype 里找这个属性，这个 prototype 又会有自己的 prototype 属性，这样一直找下去就是原型链概念")]),t._v(" "),a("li",[t._v("优先取构造函数的上属性")]),t._v(" "),a("li",[t._v("每个函数都有 prototype 属性，除了 Function.prototype.bind()，该属性指向原型。")]),t._v(" "),a("li",[t._v("每个对象都有"),a("strong",[t._v("proto")]),t._v("属性，指向了创建该对象的构造函数的原型。其实这个属性指向了 prototype，但是 prototype 是内部属性，我们并不能访问到，所以使用"),a("em",[t._v("proto")]),t._v("来访问。")]),t._v(" "),a("li",[t._v("对象可以通过 "),a("strong",[t._v("proto")]),t._v(" 来寻找不属于该对象的属性，"),a("strong",[t._v("proto")]),t._v(" 将对象连接起来组成了原型链。")]),t._v(" "),a("li",[t._v("原型链的终集是 null")])]),t._v(" "),a("h3",{attrs:{id:"防抖和节流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防抖和节流"}},[t._v("#")]),t._v(" 防抖和节流")]),t._v(" "),a("ul",[a("li",[t._v("防抖，触发事件后在一段时间内只执行一次，若在这段时间内再次触发则会重新计算执行时间")]),t._v(" "),a("li",[t._v("节流，连续发生的事件在一段时间内只执行一次，节流会减少执行频率")])]),t._v(" "),a("h3",{attrs:{id:"es6-转-es5-的实现思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-转-es5-的实现思路"}},[t._v("#")]),t._v(" es6 转 es5 的实现思路")]),t._v(" "),a("h3",{attrs:{id:"call、apply、bind-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call、apply、bind-的区别"}},[t._v("#")]),t._v(" call、apply、bind 的区别")]),t._v(" "),a("ul",[a("li",[t._v("都可以改变指针的对象，将函数放到特定作用域中执行")]),t._v(" "),a("li",[t._v("call 函数名.call(作用域对象, 多个参数)")]),t._v(" "),a("li",[t._v("apply 函数名.apply(作用域对象, 数组参数)")]),t._v(" "),a("li",[t._v("bind 绑定作用域 函数名.bind(作用域对象, 多个参数)")])]),t._v(" "),a("h3",{attrs:{id:"void-0-与-undefined"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#void-0-与-undefined"}},[t._v("#")]),t._v(" void 0 与 undefined")]),t._v(" "),a("h3",{attrs:{id:"let-与-var-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let-与-var-区别"}},[t._v("#")]),t._v(" let 与 var 区别")]),t._v(" "),a("ul",[a("li",[t._v("var 会全局污染，用 var 声明的变量会挂在 window 全局变量下，用 let 声明的变量则不会；两者都可以跨标签使用。")]),t._v(" "),a("li",[t._v("let 有块级作用域")]),t._v(" "),a("li",[t._v("let 在执行上下文时会有暂时性死区，不允许在声明前使用变量；var 可以在声明前使用变量，值为 undefined")]),t._v(" "),a("li",[t._v("var 允许重复声明，let 不允许重复声明")])]),t._v(" "),a("h3",{attrs:{id:"this-指向"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this-指向"}},[t._v("#")]),t._v(" this 指向")]),t._v(" "),a("ul",[a("li",[t._v("通常情况下指向函数的直接调用者，而非间接调用者，如果该对象没有对应属性，则不会再往上一层查找")]),t._v(" "),a("li",[t._v("在事件中，this 指向触发这个事件的对象，特殊情况 IE 中 attachEvent 的 this 总是指向 window")]),t._v(" "),a("li",[t._v("如果有 new 关键字，this 指向 new 出来的那个对象")]),t._v(" "),a("li",[t._v("箭头函数没有自己的 this 如果我们在函数中引用 this，this 值取决于外部“正常的”函数。这是箭头函数的一个特性，当我们并不想要一个独立的 this，反而想从外部上下文中获取时，它很有用")]),t._v(" "),a("li",[t._v("一个函数在声明时，可能就使用了 this，但是这个 this 只有在函数被调用时才会有值。")])]),t._v(" "),a("h3",{attrs:{id:"闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),a("ul",[a("li",[t._v("在函数内创建另一个函数，通过另一个函数访问这个函数的局部变量，利用闭包可以突破作用域链")]),t._v(" "),a("li",[t._v("让这些变量始终保存在内存中，不会随着函数的结束而自动销毁，用完需要对闭包做 null 的处理手动销毁")]),t._v(" "),a("li",[t._v("作用域链，如果在当前作用域中没有查到值，就会向上级作用域去查，直到查到全局作用域，查找过程形成的链条就叫做作用域链")]),t._v(" "),a("li",[t._v("优点：\n"),a("ul",[a("li",[t._v("避免全局变量的污染")]),t._v(" "),a("li",[t._v("封装对象的私有属性和方法")])])]),t._v(" "),a("li",[t._v("缺点：\n"),a("ul",[a("li",[t._v("会常驻内存，增大内存使用量")]),t._v(" "),a("li",[t._v("使用不当会造成内存泄露")])])])]),t._v(" "),a("h3",{attrs:{id:"混合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#混合"}},[t._v("#")]),t._v(" 混合")]),t._v(" "),a("h3",{attrs:{id:"继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[t._v("#")]),t._v(" 继承")]),t._v(" "),a("ul",[a("li",[t._v("构造继承，函数内使用 call、apply 调用")]),t._v(" "),a("li",[t._v("原型继承，设置 prototype 属性")])]),t._v(" "),a("h3",{attrs:{id:"模板引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板引擎"}},[t._v("#")]),t._v(" 模板引擎")]),t._v(" "),a("ul",[a("li",[t._v("模板引擎负责组装数据，将变量模板编译成浏览器能识别的代码")])]),t._v(" "),a("h3",{attrs:{id:"flux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flux"}},[t._v("#")]),t._v(" Flux")]),t._v(" "),a("h3",{attrs:{id:"同构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同构"}},[t._v("#")]),t._v(" 同构")]),t._v(" "),a("h3",{attrs:{id:"浅拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浅拷贝"}},[t._v("#")]),t._v(" 浅拷贝")]),t._v(" "),a("p",[t._v("只拷贝第一层")]),t._v(" "),a("ul",[a("li",[t._v("循环")]),t._v(" "),a("li",[t._v("es6 解构")]),t._v(" "),a("li",[t._v("Object.assign()")])]),t._v(" "),a("h3",{attrs:{id:"深拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝"}},[t._v("#")]),t._v(" 深拷贝")]),t._v(" "),a("ul",[a("li",[t._v("json 转换，正则、函数、会变成{}，日期会变成字符串\n"),a("ul",[a("li",[t._v("不能序列化函数")]),t._v(" "),a("li",[t._v("会忽略 undefined")]),t._v(" "),a("li",[t._v("不能解决循环引用的对象")])])]),t._v(" "),a("li",[t._v("递归，判断正则、日期、函数等特殊类型")])]),t._v(" "),a("h3",{attrs:{id:"面向对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向对象"}},[t._v("#")]),t._v(" 面向对象")]),t._v(" "),a("ul",[a("li",[t._v("将对象方法封装成相互独立的模块")]),t._v(" "),a("li",[t._v("以功能来划分")])]),t._v(" "),a("h3",{attrs:{id:"面向过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向过程"}},[t._v("#")]),t._v(" 面向过程")]),t._v(" "),a("ul",[a("li",[t._v("分析出解决问题所需要的步骤，然后一步一步解决")])]),t._v(" "),a("h3",{attrs:{id:"多线程实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多线程实现"}},[t._v("#")]),t._v(" 多线程实现")]),t._v(" "),a("ul",[a("li",[t._v("单线程原因：避免 dom 渲染的冲突")]),t._v(" "),a("li",[t._v("webworker 支持多线程，但是不能操作 dom")])]),t._v(" "),a("h3",{attrs:{id:"遍历-异步遍历-提前返回问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遍历-异步遍历-提前返回问题"}},[t._v("#")]),t._v(" 遍历（异步遍历，提前返回问题）")]),t._v(" "),a("ul",[a("li",[t._v("forEach(item, index, array) 类似 for 循环，没有返回值。IE 不支持，无法使用 break，continue 跳出循环，使用 return 跳出循环")]),t._v(" "),a("li",[t._v("map(item, index) 需要返回值")]),t._v(" "),a("li",[t._v("reduce((prev, item, index) => {}, initValue) 对数组中每个元素执行回调，并将累计结果返回给下一个回调")]),t._v(" "),a("li",[t._v("for...in 可以遍历对象")]),t._v(" "),a("li",[t._v("for...of")])]),t._v(" "),a("h3",{attrs:{id:"模块化开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块化开发"}},[t._v("#")]),t._v(" 模块化开发")]),t._v(" "),a("ul",[a("li",[t._v("立即执行函数不暴露私有属性")])]),t._v(" "),a("h3",{attrs:{id:"懒加载原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#懒加载原理"}},[t._v("#")]),t._v(" 懒加载原理")]),t._v(" "),a("ul",[a("li",[t._v("图片加载是由 src 的值引起的，当对 src 进行赋值时浏览器会请求图片资源，可以用 html5 属性 data-xxx 来保存图片路径，当需要显示图片时，再将 data-xxx 的值赋给 src，实现按需加载")])]),t._v(" "),a("h3",{attrs:{id:"异步加载-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步加载-js"}},[t._v("#")]),t._v(" 异步加载 js")]),t._v(" "),a("ul",[a("li",[t._v("defer(只支持 IE)，async")]),t._v(" "),a("li",[t._v("创建 script，插入到 dom 中，再执行 callback")])]),t._v(" "),a("h3",{attrs:{id:"装饰器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#装饰器"}},[t._v("#")]),t._v(" 装饰器")]),t._v(" "),a("ul",[a("li",[t._v("对类或属性方法加上前置操作")]),t._v(" "),a("li",[t._v("实现复用")])]),t._v(" "),a("h3",{attrs:{id:"异步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步"}},[t._v("#")]),t._v(" 异步")]),t._v(" "),a("ul",[a("li",[t._v("执行顺序，一个宏任务里必须执行完所有微任务才会执行下一个宏任务，同级先微任务后宏任务")]),t._v(" "),a("li",[t._v("宏任务：定时器、事件绑定、ajax")]),t._v(" "),a("li",[t._v("微任务：async、await、promise")])]),t._v(" "),a("h3",{attrs:{id:"fetch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch"}},[t._v("#")]),t._v(" fetch")]),t._v(" "),a("ul",[a("li",[t._v("基于 promise，支持 async/await")]),t._v(" "),a("li",[t._v("需要进行封装")]),t._v(" "),a("li",[t._v("只对网络请求报错，400，500 均为正常")]),t._v(" "),a("li",[t._v("默认不会带 cookie，需要配置项。fetch(url, {credentials: 'include'})")]),t._v(" "),a("li",[t._v("不支持超时控制。使用 setTimeout 及 promise.reject 的实现的超时控制并不能阻止请求过程继续在后台运行")]),t._v(" "),a("li",[t._v("没有办法原生监测请求的进度")])]),t._v(" "),a("h3",{attrs:{id:"axios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axios"}},[t._v("#")]),t._v(" axios")]),t._v(" "),a("ul",[a("li",[t._v("支持浏览器和 nodejs 发请求")]),t._v(" "),a("li",[t._v("支持 promise")]),t._v(" "),a("li",[t._v("客户端支持防 CSRF")]),t._v(" "),a("li",[t._v("提供了一些并发请求的接口")]),t._v(" "),a("li",[t._v("拦截请求和响应")]),t._v(" "),a("li",[t._v("取消请求")]),t._v(" "),a("li",[t._v("自动转换 json 数据")]),t._v(" "),a("li",[t._v("监测请求的进度")])]),t._v(" "),a("h3",{attrs:{id:"多标签页之间的通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多标签页之间的通信"}},[t._v("#")]),t._v(" 多标签页之间的通信")]),t._v(" "),a("ul",[a("li",[t._v("localStorage，页面 a 使用 localStorage.setItem 存储值，页面 b 监听 storage 事件")]),t._v(" "),a("li",[t._v("cookie，页面 a 存储值，页面 b 轮询 cookie 值")]),t._v(" "),a("li",[t._v("websocket，全双工通信，服务器可以主动发数据，页面 a 发送数据到服务器，服务器发送数据到页面 b")]),t._v(" "),a("li",[t._v("sharedWorker，多页面多线程")])]),t._v(" "),a("h3",{attrs:{id:"判断类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断类型"}},[t._v("#")]),t._v(" 判断类型")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Object.prototype.toString.call(value).slice(8, -1)\n")])])]),a("ul",[a("li",[t._v("typeof\n"),a("ul",[a("li",[t._v("对于原始类型来说，除了 null 都可以显示正确的类型")]),t._v(" "),a("li",[t._v("对于对象来说，除了函数都会显示 object")])])]),t._v(" "),a("li",[t._v("instanceof\n"),a("ul",[a("li",[t._v("可以正确的判断对象的类型，因为内部机制是通过对象 prototype 原型链判断")])])])]),t._v(" "),a("h3",{attrs:{id:"比较运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较运算符"}},[t._v("#")]),t._v(" 比较运算符 ==")]),t._v(" "),a("ul",[a("li",[t._v("对象/数组==字符串，会转换成字符串")]),t._v(" "),a("li",[t._v("null==undefined，与其他值不相等")]),t._v(" "),a("li",[t._v("NAN!=NAN")]),t._v(" "),a("li",[t._v("对象/数组==数字，会先转换成字符串，然后再转换成数字")]),t._v(" "),a("li",[t._v("剩下的都是转换成数字")])]),t._v(" "),a("h3",{attrs:{id:"事件代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件代理"}},[t._v("#")]),t._v(" 事件代理")]),t._v(" "),a("ul",[a("li",[t._v("把原本需要绑定的事件委托给父元素，让父元素监听处理多个子元素")]),t._v(" "),a("li",[t._v("事件代理的原理是 dom 事件冒泡，使用事件代理的好处是可以提高性能，节省内存空间，减少事件注册")]),t._v(" "),a("li",[t._v("可以实现新增子对象是无需再次对其绑定")])]),t._v(" "),a("h3",{attrs:{id:"事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),a("ul",[a("li",[t._v("事件冒泡，子元素先触发，父元素后触发")]),t._v(" "),a("li",[t._v("时间捕获，父元素先触发，子元素后触发")]),t._v(" "),a("li",[t._v("dom 事件流，同时支持冒泡和捕获，document.addEventListener()，第三个参数 true 表示捕获，false 表示冒泡")]),t._v(" "),a("li",[t._v("阻止冒泡，w3c 使用 stopPropagation()，IE 使用 cancelBubble = true")]),t._v(" "),a("li",[t._v("阻止捕获，阻止事件的默认行为，w3c 中使用 preventDefault()，IE 中设置 window.event.returnValue = false")])]),t._v(" "),a("h3",{attrs:{id:"new-操作符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-操作符"}},[t._v("#")]),t._v(" new 操作符")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("1，创建一个新对象，并分配给 this 变量，同时继承该函数的原型；2，函数体执行。通常它会修改 this，为其添加新的属性和方法；3， 返回 this")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this = {};（隐式创建）")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加属性到 this")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isAdmin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return this;（隐式返回）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("在一个函数内部，我们可以使用 new.target 属性来检查它是否被使用 new 进行调用了。对于常规调用，它为 undefined，对于使用 new 的调用，则等于该函数")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 不带 "new"：')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 带 "new"：')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// function User { ... }")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"ajax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ajax"}},[t._v("#")]),t._v(" ajax")]),t._v(" "),a("ul",[a("li",[t._v("创建 xhr 连接")]),t._v(" "),a("li",[t._v("设置参数，并打开连接")]),t._v(" "),a("li",[t._v("发送请求")]),t._v(" "),a("li",[t._v("接收请求")]),t._v(" "),a("li",[t._v("优点\n"),a("ul",[a("li",[t._v("异步请求提升了用户体验")]),t._v(" "),a("li",[t._v("实现局部数据更新")])])]),t._v(" "),a("li",[t._v("缺点\n"),a("ul",[a("li",[t._v("安全问题，ajax 暴露了客户端与服务器交互细节")]),t._v(" "),a("li",[t._v("对搜索引擎支持弱，不利于 seo")])])])]),t._v(" "),a("h3",{attrs:{id:"内存泄露"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存泄露"}},[t._v("#")]),t._v(" 内存泄露")]),t._v(" "),a("ul",[a("li",[t._v("闭包使用不当，不需要的对象仍存在于内存中")]),t._v(" "),a("li",[t._v("死循环")])]),t._v(" "),a("h3",{attrs:{id:"垃圾回收"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收"}},[t._v("#")]),t._v(" 垃圾回收")]),t._v(" "),a("ul",[a("li",[t._v("在 "),a("code",[t._v("JavaScript")]),t._v(" 引擎中有一个被称作 "),a("code",[t._v("垃圾回收器")]),t._v(" 的东西在后台执行，它监控着所有对象的状态，并删除掉那些已经不可达的")]),t._v(" "),a("li",[t._v("如果一个值可以通过引用链从根访问任何其他值，则认为该值是可达的。比方说，如果全局变量中有一个对象，并且该对象有一个属性引用了另一个对象，则 该 对象被认为是可达的。而且它引用的内容也是可达的")]),t._v(" "),a("li",[t._v("几个对象相互引用，但外部没有对其任意对象的引用，这些对象也可能是不可达的，并被从内存中删除。")]),t._v(" "),a("li",[t._v("固有的可达值的基本集合，这些值被称作 "),a("code",[t._v("根")]),t._v("（"),a("code",[t._v("roots")]),t._v("）\n"),a("ul",[a("li",[t._v("当前执行的函数，它的局部变量和参数")]),t._v(" "),a("li",[t._v("当前嵌套调用链上的其他函数、它们的局部变量和参数")]),t._v(" "),a("li",[t._v("全局变量")])])]),t._v(" "),a("li",[t._v("定期执行以下“垃圾回收”步骤\n"),a("ul",[a("li",[t._v("垃圾收集器找到所有的根，并“标记”（记住）它们")]),t._v(" "),a("li",[t._v("然后它遍历并“标记”来自它们的所有引用")]),t._v(" "),a("li",[t._v("然后它遍历标记的对象并标记 它们的 引用。所有被遍历到的对象都会被记住，以免将来再次遍历到同一个对象")]),t._v(" "),a("li",[t._v("如此操作，直到所有可达的（从根部）引用都被访问到")]),t._v(" "),a("li",[t._v("没有被标记的对象都会被删除")])])])]),t._v(" "),a("h3",{attrs:{id:"amd-commonjs-es6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amd-commonjs-es6"}},[t._v("#")]),t._v(" AMD，Commonjs，ES6")]),t._v(" "),a("ul",[a("li",[t._v("AMD 是异步加载模块，允许指定回调函数")]),t._v(" "),a("li",[t._v("AMD 推荐通过返回一个对象作为模块对象")]),t._v(" "),a("li",[t._v("Commonjs 是服务器端的模块规范，加载模块是同步的，只有模块加载完成才能执行后面的操作")]),t._v(" "),a("li",[t._v("Commonjs 推荐通过 module.exports 或 exports 的属性赋值来达到暴露模块对象的目的")]),t._v(" "),a("li",[t._v("Commonjs 支持动态导入，例如 require(${path}/xx.js)，导出时是值拷贝，")]),t._v(" "),a("li",[t._v("ES6 中一个模块就是一个文件，改文件内左右的变量和方法外部无法直接获取只能通过 export 输出")]),t._v(" "),a("li",[t._v("ES6 异步加载，导入导出都指向同一个内存地址")])]),t._v(" "),a("h3",{attrs:{id:"window-onload-和-document-ready"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window-onload-和-document-ready"}},[t._v("#")]),t._v(" window.onload 和$(document).ready")]),t._v(" "),a("ul",[a("li",[t._v("window.onload 必须等页面内所有元素（包括图片）加载完毕后才能执行")]),t._v(" "),a("li",[t._v("$(document).ready 是 dom 结构绘制完毕后就会执行，不必等到加载完毕")])]),t._v(" "),a("h3",{attrs:{id:"判断标准浏览器和-ie-浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断标准浏览器和-ie-浏览器"}},[t._v("#")]),t._v(" 判断标准浏览器和 IE 浏览器")]),t._v(" "),a("ul",[a("li",[t._v("标准，document.addEventListener，支持冒泡和捕获，事件类型不需要添加 on，添加多个事件正序执行")]),t._v(" "),a("li",[t._v("IE，document.attachEvent，支持冒泡，事件类型需要添加 on，添加多个事件倒序执行")])]),t._v(" "),a("h3",{attrs:{id:"event-loop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-loop"}},[t._v("#")]),t._v(" event loop")]),t._v(" "),a("h3",{attrs:{id:"事件流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件流"}},[t._v("#")]),t._v(" 事件流")]),t._v(" "),a("h3",{attrs:{id:"canvas-图片跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canvas-图片跨域"}},[t._v("#")]),t._v(" canvas 图片跨域")]),t._v(" "),a("h3",{attrs:{id:"map-and-set-映射和集合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map-and-set-映射和集合"}},[t._v("#")]),t._v(" Map and Set（映射和集合）")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Map 是一个带键的数据项的集合，就像一个 Object 一样。 但是它们最大的差别是 Map 允许任何类型的键（key）。它的方法和属性如下：")]),t._v(" "),a("ul",[a("li",[t._v("new Map() —— 创建 map。")]),t._v(" "),a("li",[t._v("map.set(key, value) —— 根据键存储值。")]),t._v(" "),a("li",[t._v("map.get(key) —— 根据键来返回值，如果 map 中不存在对应的 key，则返回 undefined。")]),t._v(" "),a("li",[t._v("map.has(key) —— 如果 key 存在则返回 true，否则返回 false。")]),t._v(" "),a("li",[t._v("map.delete(key) —— 删除指定键的值。")]),t._v(" "),a("li",[t._v("map.clear() —— 清空 map。")]),t._v(" "),a("li",[t._v("map.size —— 返回当前元素个数。")])])]),t._v(" "),a("li",[a("p",[t._v("对象仅支持 string/symbol 作为键。Map 还可以使用对象作为键")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 Object 中，我们则无法使用对象作为键。在 Object 中使用字符串作为键是可以的，但我们无法使用另一个 Object 作为 Object 中的键")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" john "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'John'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ben "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ben'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" visitsCountObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 尝试使用对象")]),t._v("\nvisitsCountObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ben"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("234")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 尝试将对象 ben 用作键")]),t._v("\nvisitsCountObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("john"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 尝试将对象 john 用作键，但我们会发现使用对象 ben 作为键存下的值会被替换掉")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变成这样了！")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("visitsCountObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[object Object]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 123")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 因为 visitsCountObj 是一个对象，它会将所有 Object 键例如上面的 john 和 ben 转换为字符串 "[object Object]"')]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Map 使用 SameValueZero 算法来比较键是否相等。它和严格等于 === 差不多，但区别是 NaN 被看成是等于 NaN。所以 NaN 也可以被用作键。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1，如果我们想从一个已有的普通对象（plain object）来创建一个 Map，那么我们可以使用内建方法 Object.entries(obj)，该方法返回对象的键/值对数组，该数组格式完全按照 Map 所需的格式。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'John'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("age")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" map "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("entries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Object.entries() 返回一个包含该对象所有 [key, value] 键值对的数组。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// John")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2，因为 Object.fromEntries 期望得到一个可迭代对象作为参数，而不一定是数组。并且 map 的标准迭代会返回跟 map.entries() 一样的键/值对。因此，我们可以获得一个普通对象（plain object），其键/值对与 map 相同。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" map "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'banana'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'orange'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meat'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromEntries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("entries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个普通对象（plain object）(*)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 完成了！")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// obj = { banana: 1, orange: 2, meat: 4 }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Set 是一个特殊的类型集合 —— “值的集合”（没有键），它的每一个值只能出现一次。")]),t._v(" "),a("ul",[a("li",[t._v("new Set(iterable) —— 创建一个 set，如果提供了一个 iterable 对象（通常是数组），将会从数组里面复制值到 set 中。")]),t._v(" "),a("li",[t._v("set.add(value) —— 添加一个值，返回 set 本身")]),t._v(" "),a("li",[t._v("set.delete(value) —— 删除值，如果 value 在这个方法调用的时候存在则返回 true ，否则返回 false。")]),t._v(" "),a("li",[t._v("set.has(value) —— 如果 value 在 set 中，返回 true，否则返回 false。")]),t._v(" "),a("li",[t._v("set.clear() —— 清空 set。")]),t._v(" "),a("li",[t._v("set.size —— 返回元素个数。")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);