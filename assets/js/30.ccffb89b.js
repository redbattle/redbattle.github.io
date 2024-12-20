(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{382:function(a,s,t){"use strict";t.r(s);var e=t(6),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"http协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http协议"}},[a._v("#")]),a._v(" http协议")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v('```\n- HTTP/1.1\n    - 持久连接，即TCP连接默认不关闭，可以被多个请求复用，不用声明Connection: keep-alive\n    - 管道机制，即在同一个TCP连接里面，客户端可以同时发送多个请求\n    - 分块传输编码\n    - 缺点，虽然允许复用TCP连接，但是同一个TCP连接里面，所有的数据通信是按次序进行的。服务器只有处理完一个回应，才会进行下一个回应。要是前面的回应特别慢，后面就会有许多请求排队等着。这称为"队头堵塞"\n- HTTP/2\n    - 二进制协议\n    - 多工，复用TCP连接，在一个连接里，客户端和浏览器都可以同时发送多个请求或回应，而且不用按照顺序一一对应，这样就避免了"队头堵塞"\n    - websocket服务器推送\n```\n')])])]),s("h3",{attrs:{id:"http请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http请求"}},[a._v("#")]),a._v(" http请求")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("```\n- 根据浏览器网址进行域名解析得到IP地址\n- 通过IP地址与服务器建立TCP连接\n- 通过TCP连接发起HTTP请求\n- 服务器响应后返回数据给浏览器\n- 浏览器解析并渲染数据呈现给用户\n- 服务器连接关闭\n```\n")])])]),s("h3",{attrs:{id:"dns域名解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns域名解析"}},[a._v("#")]),a._v(" DNS域名解析")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("```\n- 搜索浏览器自身的DNS缓存（缓存时间比较短大概只有1分钟，只能容纳1000条缓存）\n- 如果浏览器自身的缓存没有找到，那么浏览器会搜索系统自身的DNS缓存\n- 如果还没找到，则从hosts文件里找\n- 最后递归去域名服务器里找\n```\n")])])]),s("h3",{attrs:{id:"tcp协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp协议"}},[a._v("#")]),a._v(" TCP协议")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("```\n- Sequence Number保证了传输的报文是有序的，接收端可以通过序号顺序进行拼接\n- Acknowledgement Number表示数据接收端期望接收的下一个字节的编号，同事也表示上一个序号的数据已接收到\n- Window Size窗口大小，表示还能接收多少数据，用于流量控制\n- 无连接，虽然看似tcp将两端连接起来了，其实只是两端共同维护了一个状态\n- 不管是客户端还是服务端，tcp建立完成后都能发送和接收数据，所以tcp是个全双工协议\n- 三次握手\n    - 客户端向服务端发送请求报文段，该报文段中包含数据通信初始序号，请求发送后客户端进入syn-sent状态\n    - 服务端接收到连接请求报文段后，如果同意连接则会发送一个应答，发送完进入syn-received状态\n    - 客户端收到连接应答后，想服务器发送一个确认报文，客户端发完这个报文后便进入established状态，服务端接收到报文也进入established状态，tcp连接成功\n- 四次挥手\n    - 客户端想服务端发送连接释放请求\n    - 服务端接收到连接释放请求后，发送ack包，进入close wait状态，表示客户端到服务端的连接已释放，不接收客户端的数据了，但是因为tcp是双向的，所以服务端仍可以发送数据给客户端\n    - 服务端如果此时还有未发完的数据会继续发送，完毕后会向客户端发送连接释放请求，然后服务端会进入last-ack状态\n    - 客户端收到释放请求后，向服务端发送确认应答，此时客户端进入time-ack状态2MSL时间，如果该时间内没有服务端重发请求就进入close状态，当服务端收到确认应答后进入close状态\n```\n")])])]),s("h3",{attrs:{id:"udp协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#udp协议"}},[a._v("#")]),a._v(" UDP协议")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("```\n- 发送端，应用层将数据传递给传输层的udp协议，udp只会给数据加一个udp头标识，然后就传递给网络层\n- 接收端，网络层将数据传递给传输层，udp值去除ip报文头就传递给应用层，不会任何拼接操作\n- 不可靠\n    - udp是无连接的，不需要进行建立通信连接和断开\n    - udp是不可靠的，接收到什么就传递什么，不关心对方有没有接收到\n    - udp没有拥塞控制，会以恒定的速度发送数据，即使网络不好也不会对发送速率进行调整，弊端是网络不好时可能会丢包，优点是实时性要求高的场景需要udp而不是tcp\n- 高效\n    - 因为udp没有tcp通信那么复杂，不需要保证数据完整和有序到达，udp头部开销小，所以传输数据很高效\n- 传输方式\n    - 不止支持一对一，同样支持一对多、多对多、多对一，也就是说udp支持单播、多播、广播\n```\n")])])]),s("h3",{attrs:{id:"浏览器内核"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器内核"}},[a._v("#")]),a._v(" 浏览器内核")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("```\n- js引擎执行三个过程，语法分析，预编译和执行阶段\n- 渲染引擎\n```\n")])])]),s("h3",{attrs:{id:"浏览器渲染过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染过程"}},[a._v("#")]),a._v(" 浏览器渲染过程")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("```\n- 构建DOM树，浏览器引擎解析HTML文档，将HTML标签转换成DOM节点，生成内容数\n- 构建渲染树，解析css样式\n- 布局渲染树，从根节点递归调用，计算每个元素的大小位置\n- 绘制渲染树，使用UI层来绘制每个节点\n```\n")])])]),s("h3",{attrs:{id:"浏览器渲染机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染机制"}},[a._v("#")]),a._v(" 浏览器渲染机制")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("```\n\n\n```\n")])])]),s("h3",{attrs:{id:"接口防刷"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口防刷"}},[a._v("#")]),a._v(" 接口防刷")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("```\n- 请求频率限制\n- 设置验证码\n```\n")])])]),s("h3",{attrs:{id:"重定向对seo的影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重定向对seo的影响"}},[a._v("#")]),a._v(" 重定向对SEO的影响")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("```\n- 301，当网站的域名发生变更后，搜索引擎只对新网址进行索引，同时又会把旧地址下原有的外部链接如数转移到新地址下，从而不会让网站的排名因为网址变更而收到丝毫影响\n- 302，在网站使用302重定向命令将其它域名指向主域时，只有Google会把其它域名的链接成绩计入主域，而其它搜索引擎只会把链接成绩向多个域名分摊，从而削弱主站的链接总量\n```\n")])])]),s("h3",{attrs:{id:"跨域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨域"}},[a._v("#")]),a._v(" 跨域")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("```\n- jsonp，使用js的src发送，只允许get请求\n- iframe\n- cors跨域资源共享，后端请求头设置允许跨域\n- nodejs中间件代理跨域请求头设置允许跨域\n- Nginx代理\n- WebSocket协议跨域，ws、wss协议不遵循浏览器同源策略\n```\n")])])]),s("h3",{attrs:{id:"状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[a._v("#")]),a._v(" 状态码")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("```\n- 200，\n- 301，重定向\n- 304，缓存\n- 500，服务器错误\n- 504，超时\n```\n")])])]),s("h3",{attrs:{id:"浏览器缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[a._v("#")]),a._v(" 浏览器缓存")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("```\n- 强制缓存和协商缓存，用户访问某个资源，先根据http的header，判断是否强制缓存，如果是则直接读取缓存，不会请求服务器，状态200；\n  如果不是强缓存，则会先发送请求到服务器，服务器通过request的header验证资源有没有协商缓存，如果有则服务器返回请求不返回资源，告诉客户直接从缓存中读取，状态304；\n  如果不是协商缓存，则服务器返回资源。\n- localStorage 长期有效，清除浏览器缓存失效\n- sessionStorage 关闭浏览器失效\n- Cookie可以为本域和其父域设置 cookie，数据量少大小不能超过4k，默认关闭浏览器过期，可以设置过期时间，请求头会携带内容\n- manifest离线访问，cache.manifest文件，\n    - 设置需要缓存的文件\n    - 设置不需要缓存的文件\n    - 设置找不到文件，使用该页面\n```\n")])])]),s("h3",{attrs:{id:"缓存作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存作用"}},[a._v("#")]),a._v(" 缓存作用")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("```\n- 减少网络带宽消耗\n- 降低服务器压力\n- 减少网络延迟，加快页面打开速度\n```\n")])])]),s("h3",{attrs:{id:"get和post区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get和post区别"}},[a._v("#")]),a._v(" get和post区别")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("```\n- get参数接在地址后面，post参数在body里面\n- get可传输数据量较少，post可传输数据量较大\n- get效率更高，post安全性更高\n```\n")])])]),s("h3",{attrs:{id:"session和cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session和cookie"}},[a._v("#")]),a._v(" session和cookie")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("```\n服务器设置session，服务器返回给客户端的响应头中会携带set-cookie='connect.sid'，客户端会把信息存到本地cookie中，并且设置为httponly，客户端再次向服务器发送请求时会默认在请求头中的cookie里带上connect.sid\n```\n")])])]),s("h3",{attrs:{id:"websocket"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[a._v("#")]),a._v(" Websocket")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("```\n服务器收到消息可以主动发送数据到客户端\n- 支持双向通信\n- 无同源策略，没有跨域问题\n- 能发送文本和二进制文件\n- 支持扩展，可以扩展协议或者自定义子协议\n```\n")])])]),s("h3",{attrs:{id:"渐进增强和优雅降级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渐进增强和优雅降级"}},[a._v("#")]),a._v(" 渐进增强和优雅降级")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("```\n- 渐进增强，针对低版本浏览器进行页面构建，保证最基本的功能，然后再对高级浏览器做交互效果以达到更好的用户体验\n- 优雅降级，一开始构建完整的功能，然后再对低版本浏览器进行兼容\n```\n")])])]),s("h3",{attrs:{id:"幂等请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#幂等请求"}},[a._v("#")]),a._v(" 幂等请求")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("```\n```\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);