(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{28:function(e,t,n){},3:function(e,t,n){e.exports={videoItem:"video_item_videoItem__2odoU",vertical:"video_item_vertical__Js58x",itemBox:"video_item_itemBox__1ugi6",description:"video_item_description__1Hx23",title:"video_item_title__jVdTc",channel:"video_item_channel__27KOe",thumbnailBox:"video_item_thumbnailBox__1BIhE",thumbnail:"video_item_thumbnail__2ofrh"}},4:function(e,t,n){e.exports={header:"search_header_header__z_y0t",logo:"search_header_logo__2WqUW",search:"search_header_search__2HnR7",input:"search_header_input__7r5t-",button:"search_header_button__ShogZ"}},49:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(20),s=n.n(a),r=(n(28),n(11)),o=n(8),l=n.n(o),d=n(4),u=n.n(d),h=n(0),j=Object(c.memo)((function(e){var t=e.onSearch,n=Object(c.useRef)(),i=function(){var e=n.current.value;t(e)};return console.log("searchheader"),Object(h.jsxs)("div",{className:u.a.header,children:[Object(h.jsxs)("div",{className:u.a.logo,children:[Object(h.jsx)("img",{src:"./images/logo.png",alt:"logo"}),Object(h.jsx)("span",{children:"Youtube"})]}),Object(h.jsxs)("div",{className:u.a.search,children:[Object(h.jsx)("input",{ref:n,className:u.a.input,placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&i()}}),Object(h.jsx)("button",{className:u.a.button,type:"submit",onClick:function(){i()},children:Object(h.jsx)("img",{src:"./images/search.png",alt:"button"})})]})]})})),p=n(3),_=n.n(p),m=Object(c.memo)((function(e){return Object(h.jsx)("li",{className:"".concat(e.selectedVideo?_.a.vertical:_.a.videoItem),onClick:function(){e.onClick(e.video)},children:Object(h.jsxs)("div",{className:_.a.itemBox,children:[Object(h.jsx)("div",{className:_.a.thumbnailBox,children:Object(h.jsx)("img",{className:_.a.thumbnail,alt:"thumbnail",src:e.video.snippet.thumbnails.medium.url})}),Object(h.jsxs)("div",{className:_.a.description,children:[Object(h.jsx)("span",{className:_.a.title,children:e.video.snippet.title}),Object(h.jsx)("span",{className:_.a.channel,children:e.video.snippet.channelTitle})]})]})})})),b=n(9),v=n.n(b),x=function(e){return Object(h.jsx)("ul",{className:"".concat(e.selectedVideo?v.a.vertical:v.a.videoList),children:e.videos.map((function(t){return Object(h.jsx)(m,{video:t,onClick:e.onClick,selectedVideo:e.selectedVideo},t.id)}))})},O=n(5),f=n.n(O),y=function(e){return e.selectedVideo?Object(h.jsxs)("div",{className:f.a.videoAndDescription,children:[Object(h.jsx)("div",{className:f.a.container,children:Object(h.jsx)("iframe",{title:"video player",id:"ytplayer",type:"text/html",className:f.a.videoPlayer,src:"https://www.youtube.com/embed/".concat(e.selectedVideo.id),frameBorder:"0",allowFullscreen:!0})}),Object(h.jsxs)("div",{className:f.a.description,children:[Object(h.jsx)("h2",{children:e.selectedVideo.snippet.title}),Object(h.jsx)("h3",{children:e.selectedVideo.snippet.channelTitle}),Object(h.jsx)("p",{children:e.selectedVideo.snippet.description})]})]}):Object(h.jsx)(h.Fragment,{})};var g=function(e){var t=e.youtube,n=Object(c.useState)([]),i=Object(r.a)(n,2),a=i[0],s=i[1],o=Object(c.useState)(),d=Object(r.a)(o,2),u=d[0],p=d[1],_=Object(c.useCallback)((function(e){t.search(e).then((function(e){return s(e)})).then((function(){return p()}))}),[t]);return Object(c.useEffect)((function(){t.mostPopular().then((function(e){return s(e)}))}),[t]),Object(h.jsxs)("div",{className:l.a.app,children:[Object(h.jsx)(j,{onSearch:_}),Object(h.jsxs)("div",{className:l.a.content,children:[Object(h.jsx)(y,{selectedVideo:u}),Object(h.jsx)(x,{videos:a,onClick:function(e){p(e)},selectedVideo:u})]})]})},N=n(6),k=n.n(N),w=n(10),V=n(21),B=n(22),C=n(23),S=n.n(C),E=new(function(){function e(t){Object(V.a)(this,e),this.youtube=S.a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:t}})}return Object(B.a)(e,[{key:"search",value:function(){var e=Object(w.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:25,q:t}});case 2:return n=e.sent,e.abrupt("return",n.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"mostPopular",value:function(){var e=Object(w.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:25}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}())("AIzaSyB_BjNheyaHqZfJ_o6Xzbec1CakM0UBE64");s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(g,{youtube:E})}),document.getElementById("root"))},5:function(e,t,n){e.exports={videoAndDescription:"video_selected_videoAndDescription__2ic-_",container:"video_selected_container__2EzI9",videoPlayer:"video_selected_videoPlayer__3k7LE"}},8:function(e,t,n){e.exports={content:"app_content__1LDZs"}},9:function(e,t,n){e.exports={videoList:"video_list_videoList__i9694",vertical:"video_list_vertical__2yo5V"}}},[[49,1,2]]]);
//# sourceMappingURL=main.63ccc7f1.chunk.js.map