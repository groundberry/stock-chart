(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(52)},31:function(e,t,a){},46:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(4),r=a.n(l),o=(a(31),a(14)),i=a.n(o),s=a(15),h=a(8),d=a(9),u=a(13),m=a(10),b=a(12),p=a(3),k=a(24),C=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(p.a)(Object(p.a)(a))),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.value;return c.a.createElement("form",{className:"k-form"},c.a.createElement(k.a,{name:"symbol",label:"Company's symbol",pattern:"[A-Za-z-]+",minLength:1,required:!0,value:e,onChange:this.handleChange}))}},{key:"handleChange",value:function(e){(0,this.props.onChange)(e.target.value)}}]),t}(n.Component),g=a(6),y=(a(45),"https://stock-chart-proxy.herokuapp.com/");function f(e,t){return v.apply(this,arguments)}function v(){return(v=Object(s.a)(i.a.mark(function e(t,a){var n,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(y,"?symbol=").concat(t,"&range=").concat(a),e.next=3,fetch(n);case 3:return c=e.sent,e.abrupt("return",c.json());case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function O(e){return{Date:new Date(e.date),Open:e.open,Close:e.close,Low:e.low,High:e.high}}var j=function(e){var t=e.data,a=t.map(O),n=new Date(t[0].date),l=new Date(t[t.length-1].date);return c.a.createElement(g.h,null,c.a.createElement(g.g,{text:"".concat(e.company," - ").concat(e.symbol)}),c.a.createElement(g.e,null,c.a.createElement(g.f,{data:a,type:"candlestick",openField:"Open",closeField:"Close",lowField:"Low",highField:"High",categoryField:"Date"})),c.a.createElement(g.a,null,c.a.createElement(g.b,{from:n,to:l}),c.a.createElement(g.c,null,c.a.createElement(g.d,{data:a,type:"area",field:"Close",categoryField:"Date"}))))},E=a(7),w=(a(46),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleClickOneMonth=a.handleClick.bind(Object(p.a)(Object(p.a)(a)),"1m"),a.handleClickThreeMonths=a.handleClick.bind(Object(p.a)(Object(p.a)(a)),"3m"),a.handleClickSixMonths=a.handleClick.bind(Object(p.a)(Object(p.a)(a)),"6m"),a.handleClickOneYear=a.handleClick.bind(Object(p.a)(Object(p.a)(a)),"1y"),a.handleClickTwoYears=a.handleClick.bind(Object(p.a)(Object(p.a)(a)),"2y"),a.handleClickFiveYears=a.handleClick.bind(Object(p.a)(Object(p.a)(a)),"5y"),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.value;return c.a.createElement("div",{className:"RangeButtons"},c.a.createElement(E.b,null,c.a.createElement(E.a,{title:"1 month",togglable:!0,selected:"1m"===e,onClick:this.handleClickOneMonth},"1M"),c.a.createElement(E.a,{title:"3 months",togglable:!0,selected:"3m"===e,onClick:this.handleClickThreeMonths},"3M"),c.a.createElement(E.a,{title:"6 months",togglable:!0,selected:"6m"===e,onClick:this.handleClickSixMonths},"6M"),c.a.createElement(E.a,{title:"1 year",togglable:!0,selected:"1y"===e,onClick:this.handleClickOneYear},"1Y"),c.a.createElement(E.a,{title:"2 years",togglable:!0,selected:"2y"===e,onClick:this.handleClickTwoYears},"2Y"),c.a.createElement(E.a,{title:"5 years",togglable:!0,selected:"5y"===e,onClick:this.handleClickFiveYears},"5Y")))}},{key:"handleClick",value:function(e){(0,this.props.onClick)(e)}}]),t}(n.Component)),D=(a(48),a(50),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={symbol:"",range:"1m",stockData:{}},a.handleChangeSymbol=a.handleChangeSymbol.bind(Object(p.a)(Object(p.a)(a))),a.handleClickRange=a.handleClickRange.bind(Object(p.a)(Object(p.a)(a))),a.updateStockData=a.updateStockData.bind(Object(p.a)(Object(p.a)(a))),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.symbol,a=e.range,n=e.stockData,l=n.quote?n.quote.companyName:void 0,r=n.chart?n.chart:void 0;return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(C,{value:t,onChange:this.handleChangeSymbol}),c.a.createElement(w,{value:a,onClick:this.handleClickRange})),t&&l&&r&&c.a.createElement("div",{className:"App-chart"},c.a.createElement(j,{symbol:t,company:l,data:r}),c.a.createElement("p",null,"Data provided for free by"," ",c.a.createElement("a",{href:"https://iextrading.com/developer/"},"IEX"),". View"," ",c.a.createElement("a",{href:"https://iextrading.com/api-exhibit-a/"},"IEX\u2019s Terms of Use"),".")))}},{key:"handleChangeSymbol",value:function(e){this.setState({symbol:e},this.updateStockData)}},{key:"handleClickRange",value:function(e){this.setState({range:e},this.updateStockData)}},{key:"updateStockData",value:function(){var e=Object(s.a)(i.a.mark(function e(){var t,a,n,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.symbol,n=t.range,a&&n){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,f(a,n);case 6:c=e.sent,this.setState({stockData:c}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error("Could not fetch stock data:",e.t0);case 13:case"end":return e.stop()}},e,this,[[3,10]])}));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.9814e133.chunk.js.map