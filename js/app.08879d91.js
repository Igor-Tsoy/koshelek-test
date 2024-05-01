(function(){"use strict";var e={4122:function(e,t,o){var n=o(5130),r=o(6768);const a={id:"app"};function s(e,t,o,n,s,i){const c=(0,r.g2)("Header"),l=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.bF)(c),(0,r.bF)(l)])}var i=o.p+"img/logo.419f7cc8.svg";const c=e=>((0,r.Qi)("data-v-7d7b59a9"),e=e(),(0,r.jt)(),e),l={class:"v-container"},d=c((()=>(0,r.Lk)("img",{src:i,alt:"Логотип"},null,-1)));function u(e,t,o,n,a,s){const i=(0,r.g2)("v-tab"),c=(0,r.g2)("v-tabs");return(0,r.uX)(),(0,r.CE)("header",l,[d,(0,r.bF)(c,{grow:""},{default:(0,r.k6)((()=>[(0,r.bF)(i,{to:{name:"Settings"},exact:"",ripple:""},{default:(0,r.k6)((()=>[(0,r.eW)("Settings")])),_:1}),(0,r.bF)(i,{to:{name:"OrderBook"},exact:"",ripple:""},{default:(0,r.k6)((()=>[(0,r.eW)("Order Book")])),_:1})])),_:1})])}var p={name:"AppHeader"},g=o(1241);const m=(0,g.A)(p,[["render",u],["__scopeId","data-v-7d7b59a9"]]);var b=m,k={name:"App",components:{Header:b}};const v=(0,g.A)(k,[["render",s]]);var f=v,h=o(1387),P=o(782);o(4114);const _={selectedPair:"BTCUSDT",log:[]},y={updatePair(e,t){e.selectedPair=t;const o=new Date,n=`${o.getFullYear()}-${(o.getMonth()+1).toString().padStart(2,"0")}-${o.getDate().toString().padStart(2,"0")} ${o.getHours().toString().padStart(2,"0")}:${o.getMinutes().toString().padStart(2,"0")}:${o.getSeconds().toString().padStart(2,"0")}`;e.log.push(`Pair set to ${t} | in ${n}`)}},S={changePair({commit:e,dispatch:t},o){e("updatePair",o),t("orderBook/initOrderBookWebSocket",null,{root:!0})}};var B={namespaced:!0,state:_,mutations:y,actions:S},O=o(8355);const C="https://api.binance.com/api/v3";async function w(e){try{const t=await O.A.get(`${C}/depth`,{params:{symbol:e,limit:100}});return t.data}catch(t){return console.error("Failed to fetch order book:",t),null}}async function A(e,t){const o=`wss://stream.binance.com:9443/ws/${e.toLowerCase()}@depth`,n=new WebSocket(o);return n.onopen=()=>{console.log("WebSocket connection established")},n.onmessage=t,n.onerror=e=>{console.error("WebSocket error:",e)},n.onclose=()=>{console.log("WebSocket connection closed")},n}const F={activeConnetion:null,bids:[],asks:[]},L={loadBids(e,t){e.bids=t},loadAsks(e,t){e.asks=t},updateBids(e,t){e.bids.unshift(...t)},updateAsks(e,t){e.asks.unshift(...t)}},T={async fetchOrderBook({commit:e,rootState:t}){const o=t.settings.selectedPair,n=await w(o);n&&(e("loadBids",n.bids),e("loadAsks",n.asks))},async initOrderBookWebSocket({dispatch:e,rootState:t,commit:o}){F.activeConnetion&&F.activeConnetion.close();const n=t.settings.selectedPair;e("fetchOrderBook"),F.activeConnetion=await A(n,(e=>{const t=JSON.parse(e.data);o("updateAsks",t.a),o("updateBids",t.b)}))}},E={hasData(e){return e.bids.length||e.asks.length}};var j={namespaced:!0,state:F,mutations:L,actions:T,getters:E},x=new P.Ay.Store({modules:{settings:B,orderBook:j}});function D(e,t,o){x.getters["orderBook/hasData"]&&o(),o({name:"Settings"})}var X={hasData:D};const $=e=>((0,r.Qi)("data-v-76802b03"),e=e(),(0,r.jt)(),e),W={class:"settings v-container"},I=$((()=>(0,r.Lk)("h2",null,"Select currency pair",-1)));function Q(e,t,o,n,a,s){const i=(0,r.g2)("v-select"),c=(0,r.g2)("AppLog");return(0,r.uX)(),(0,r.CE)("div",W,[I,(0,r.bF)(i,{label:"Сurrency pair",modelValue:a.selectedPair,"onUpdate:modelValue":[t[0]||(t[0]=e=>a.selectedPair=e),e.changePair],items:a.currencyPairs,multiple:!1},null,8,["modelValue","onUpdate:modelValue","items"]),(0,r.bF)(c)])}var H=o(4232);const V=e=>((0,r.Qi)("data-v-02866bb6"),e=e(),(0,r.jt)(),e),M={class:"log"},U=V((()=>(0,r.Lk)("h2",null,"Changes log",-1)));function N(e,t,o,n,a,s){const i=(0,r.g2)("v-list-item-title"),c=(0,r.g2)("v-list-item-content"),l=(0,r.g2)("v-list-item"),d=(0,r.g2)("v-list");return(0,r.uX)(),(0,r.CE)("div",M,[U,(0,r.bF)(d,null,{default:(0,r.k6)((()=>[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.log,((e,t)=>((0,r.uX)(),(0,r.Wv)(l,{key:t},{default:(0,r.k6)((()=>[(0,r.bF)(c,null,{default:(0,r.k6)((()=>[(0,r.bF)(i,{textContent:(0,H.v_)(e)},null,8,["textContent"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])}var K={name:"AppLog",computed:{...(0,P.aH)("settings",["log"])}};const J=(0,g.A)(K,[["render",N],["__scopeId","data-v-02866bb6"]]);var Y=J,q={name:"AppSettings",components:{AppLog:Y},data(){return{currencyPairs:["BTCUSDT","BNBBTC","ETHBTC"],selectedPair:"BTCUSDT"}},mounted(){this.hasData||this.changePair(this.selectedPair)},computed:{...(0,P.L8)("orderBook",["hasData"])},methods:{...(0,P.i0)("settings",["changePair"]),...(0,P.i0)("orderBook",["initOrderBookWebSocket"])}};const z=(0,g.A)(q,[["render",Q],["__scopeId","data-v-76802b03"]]);var G=z;const R={class:"v-container"};function Z(e,t,o,n,a,s){const i=(0,r.g2)("OrderBookView");return(0,r.uX)(),(0,r.CE)("div",R,[(0,r.bF)(i)])}const ee=e=>((0,r.Qi)("data-v-9c9e1b5c"),e=e(),(0,r.jt)(),e),te={class:"order-book"},oe=ee((()=>(0,r.Lk)("h1",{class:"order-book__title"},"Order Book",-1))),ne={class:"order-book__table-container"};function re(e,t,o,n,a,s){const i=(0,r.g2)("OrderBookTable");return(0,r.uX)(),(0,r.CE)("div",te,[oe,(0,r.Lk)("div",ne,[(0,r.bF)(i,{title:"Bids",items:e.bids,showQuantity:!0,itemsPerPage:a.itemsPerPage},null,8,["items","itemsPerPage"]),(0,r.bF)(i,{title:"Asks",items:e.asks,showQuantity:!0,itemsPerPage:a.itemsPerPage},null,8,["items","itemsPerPage"])])])}function ae(e,t,o,n,a,s){const i=(0,r.g2)("v-data-table");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("h2",null,(0,H.v_)(o.title),1),(0,r.bF)(i,{class:"order-book-table",headers:s.headers,items:o.items,"fixed-header":"","items-per-page":100,"items-per-page-options":[100,500,1e3]},{header:(0,r.k6)((({props:{headers:e}})=>[(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e,(e=>((0,r.uX)(),(0,r.CE)("th",{class:(0,H.C4)(e.class),key:e.text},[(0,r.Lk)("span",null,(0,H.v_)(e.text),1)],2)))),128))])])])),item:(0,r.k6)((({item:e})=>[(0,r.Lk)("tr",null,[(0,r.Lk)("td",null,(0,H.v_)(e[0]),1),(0,r.Lk)("td",null,(0,H.v_)(e[1]),1),(0,r.Lk)("td",null,(0,H.v_)(e[0]*e[1]),1)])])),_:1},8,["headers","items"])])}var se={name:"OrderBookTable",props:{items:Array,showQuantity:{type:Boolean,default:!0},itemsPerPage:{type:Number,default:100},title:{type:String,default:"Bids"}},computed:{displayedItems(){return this.items.slice(0,this.itemsPerPage)},headers(){return[{title:"Price"},{title:"Quantity",class:["order-book-table__hide"],cellClass:["order-book-table__hide"]},{title:"Total"}]}}};const ie=(0,g.A)(se,[["render",ae],["__scopeId","data-v-a732180a"]]);var ce=ie,le={name:"OrderBookView",components:{OrderBookTable:ce},computed:{...(0,P.aH)("orderBook",["bids","asks"])},data(){return{itemsPerPage:100}}};const de=(0,g.A)(le,[["render",re],["__scopeId","data-v-9c9e1b5c"]]);var ue=de,pe={name:"OrderBook",components:{OrderBookView:ue}};const ge=(0,g.A)(pe,[["render",Z],["__scopeId","data-v-86b7ae9c"]]);var me=ge;const be=[{path:"/",redirect:"/settings"},{path:"/settings",component:G,name:"Settings"},{path:"/order-book",component:me,name:"OrderBook",beforeEnter:X.hasData}],ke=(0,h.aE)({history:(0,h.LA)(),routes:be});var ve=ke,fe=o(9666),he=(o(4301),o(1370)),Pe=o(3739);const _e=(0,n.Ef)(f),ye=(0,fe.$N)({components:he,directives:Pe});_e.use(x),_e.use(ve),_e.use(ye),_e.mount("#app")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,a){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],a=e[d][2];for(var i=!0,c=0;c<n.length;c++)(!1&a||s>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(i=!1,a<s&&(s=a));if(i){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,r,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/koshelek-test/"}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,s=n[0],i=n[1],c=n[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(c)var d=c(o)}for(t&&t(n);l<s.length;l++)a=s[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},n=self["webpackChunkkoshelek_test"]=self["webpackChunkkoshelek_test"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(4122)}));n=o.O(n)})();
//# sourceMappingURL=app.08879d91.js.map