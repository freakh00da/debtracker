(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{325:function(t,e,n){"use strict";n.r(e);var r=n(8),c=(n(27),n(15),n(45),{data:function(){return{total:0}},methods:{getData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,data,o,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("id"),r="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3ZGt1cGN3aWdtaHZuaHZ2bmxnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NDY4NTUwOCwiZXhwIjoyMDEwMjYxNTA4fQ.e7H4hKzuXT_STOyk0Rd4urDJsgN7bdtZlsjW46GsRKQ",e.next=4,t.$axios.get("/v1/transactions?id=eq.".concat(n),{headers:{apikey:r,Authorization:"Bearer ".concat(r)}});case 4:if(c=e.sent,0!==(data=c.data).length){e.next=9;break}return console.warn("Tidak ada data yang ditemukan."),e.abrupt("return");case 9:o=data.filter((function(t){return"credit"===t.type})).reduce((function(t,e){return t+e.amount}),0),d=data.filter((function(t){return"debit"===t.type})).reduce((function(t,e){return t+e.amount}),0),t.total=o-d;case 12:case"end":return e.stop()}}),e)})))()},formatCurrency:function(t){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t)}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getData();case 2:case"end":return e.stop()}}),e)})))()}}),o=n(26),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"stats shadow-lg"},[e("div",{staticClass:"stat place-items-center"},[e("div",{staticClass:"stat-title"},[t._v("Total")]),t._v(" "),e("div",{staticClass:"stat-value text-blue-500"},[t._v(t._s(t.formatCurrency(t.total)))])])])}),[],!1,null,"2de33f30",null);e.default=component.exports}}]);