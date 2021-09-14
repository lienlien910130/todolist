(function(e){function t(t){for(var r,c,a=t[0],i=t[1],s=t[2],p=0,d=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},u=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/todolist/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var l=i;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o=(n("b0c0"),{class:"h-screen w-screen bg-indigo-400 text-center"}),u=Object(r["d"])("span",{class:"text-6xl lg:text-8xl text-white mt-5"},"TODOLIST",-1),c={class:"bg-gray-200 rounded-lg h-4/5  xl:h-3/4 m-auto mt-5 xl:w-3/5 w-4/5"},a={class:" mt-3"},i={class:"overflow-y-auto h-4/5 xl:h-3/4 lg:h-5/6 pb-3"},s={class:"flex items-center h-14"};function l(e,t,n,l,p,d){return Object(r["e"])(),Object(r["c"])("div",o,[u,Object(r["d"])("div",c,[Object(r["d"])("div",null,[Object(r["i"])(Object(r["d"])("input",{class:" w-8/12 h-10 p-2 mt-5 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent","onUpdate:modelValue":t[1]||(t[1]=function(e){return p.listName=e})},null,512),[[r["h"],p.listName]]),Object(r["d"])("button",{class:"rounded-full h-10 w-10  ml-2 bg-purple-600 text-white hover:bg-purple-800",onClick:t[2]||(t[2]=function(){return d.addTodo&&d.addTodo.apply(d,arguments)})},"+")]),Object(r["d"])("div",a,[Object(r["d"])("button",{class:["rounded-full  hover:text-purple-500 focus:text-purple-800 mr-3 font-bold",null==p.type?"text-purple-800":"text-gray-400"],onClick:t[3]||(t[3]=function(e){return d.select(null)})},"全部",2),Object(r["d"])("button",{class:["rounded-full  hover:text-purple-500 focus:text-purple-800 font-bold",0==p.type?"text-purple-800":"text-gray-400"],onClick:t[4]||(t[4]=function(e){return d.select(0)})},"未完成",2),Object(r["d"])("button",{class:["rounded-full  hover:text-purple-500 focus:text-purple-800 ml-3 font-bold",1==p.type?"text-purple-800":"text-gray-400"],onClick:t[5]||(t[5]=function(e){return d.select(1)})},"已完成",2)]),Object(r["d"])("div",i,[(Object(r["e"])(!0),Object(r["c"])(r["a"],null,Object(r["f"])(p.list,(function(e,t){return Object(r["e"])(),Object(r["c"])("div",{key:t,class:"rounded-lg my-2 ml-auto mr-auto text-left  \n        pl-6 w-9/12 h-14 bg-white text-1xl"},[Object(r["d"])("div",s,[Object(r["d"])("input",{type:"checkbox",class:"h-6 w-6 rounded-full text-indigo-500 focus:ring-0",onClick:function(t){return d.update(e)},checked:1==e.type},null,8,["onClick","checked"]),Object(r["d"])("span",{class:["pl-6 w-3/4 overflow-x-auto h-11 py-2",1==e.type?"line-through":""]},Object(r["g"])(e.name),3),Object(r["d"])("i",{class:"far fa-trash-alt float-right text-lg cursor-pointer \n            hover:text-purple-800 mt-auto mb-auto lg:ml-5",onClick:function(t){return d.deleteItem(e.id)}},null,8,["onClick"])])])})),128))])])])}var p,d=n("1da1"),f=(n("96cf"),n("5530")),b=(n("d3b7"),n("4de4"),"TodoList"),g=1,m={getDb:function(){return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){if(p)return e(p);var n=window.indexedDB.open(b,g);n.onerror=function(e){console.log("打開資料庫出現錯誤",e),t("Error")},n.onsuccess=function(t){p=t.target.result,console.log("打開資料庫成功"),e(p)},n.onupgradeneeded=function(e){console.log("資料庫版本更新");var t=e.target.result,n=t.createObjectStore("todoList",{autoIncrement:!0,keyPath:"id"});n.createIndex("NameColumns","name",{unique:!1})}})));case 1:case"end":return e.stop()}}),e)})))()},deleteDb:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("deleteDb"),t.next=3,e.getDb();case 3:n=t.sent,n.close(),r=window.indexedDB.deleteDatabase(b),r.onsuccess=function(e){console.log("資料庫刪除成功",e),p=null},r.onerror=function(e){console.log("資料庫刪除出現錯誤",e)},r.onblocked=function(){console.log("無法刪除資料庫")};case 9:case"end":return t.stop()}}),t)})))()},getValue:function(){var e=arguments,t=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:null,n.next=3,t.getDb();case 3:return o=n.sent,n.abrupt("return",new Promise((function(e,t){var n=o.transaction(["todoList"],"readonly");n.oncomplete=function(){};var u=n.objectStore("todoList"),c=u.getAll();c.onsuccess=function(t){var n=t.target.result;null!==r&&(n=n.filter((function(e){return e.type==r}))),e(n)},n.onerror=function(e){t(e)}})));case 5:case"end":return n.stop()}}),n)})))()},saveValue:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getDb();case 2:return r=n.sent,n.abrupt("return",new Promise((function(t,n){var o=r.transaction(["todoList"],"readwrite"),u=o.objectStore("todoList");u.add(e),o.oncomplete=function(){t(!0)},o.onerror=function(e){console.log("event",e),n(e)}})));case 4:case"end":return n.stop()}}),n)})))()},updateValue:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getDb();case 2:return r=n.sent,n.abrupt("return",new Promise((function(t,n){var o=r.transaction(["todoList"],"readwrite");o.objectStore("todoList").get(e.id).onsuccess=function(n){var r=Object(f["a"])(Object(f["a"])({},n.target.result),e);o.objectStore("todoList").put(r).onsuccess=function(e){t(e.target.result)}},o.onerror=function(e){n(e)}})));case 4:case"end":return n.stop()}}),n)})))()},deleteData:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getDb();case 2:return r=n.sent,n.abrupt("return",new Promise((function(t,n){var o=r.transaction(["todoList"],"readwrite"),u=o.objectStore("todoList");u.delete(e),o.oncomplete=function(){t(!0)},o.onerror=function(e){console.log("event",e),n(e)}})));case 4:case"end":return n.stop()}}),n)})))()}},h={name:"App",data:function(){return{listName:"",list:[],type:null}},created:function(){return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.getDb();case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m.getValue();case 2:e.list=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{addTodo:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!=e.listName){t.next=2;break}return t.abrupt("return",!1);case 2:return t.next=4,m.saveValue({name:e.listName,type:0});case 4:return t.next=6,m.getValue(e.type);case 6:e.list=t.sent,e.listName="";case 8:case"end":return t.stop()}}),t)})))()},update:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.type=0==e.type?1:0,n.next=3,m.updateValue(e);case 3:return n.next=5,m.getValue(t.type);case 5:t.list=n.sent;case 6:case"end":return n.stop()}}),n)})))()},select:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.type=e,n.next=3,m.getValue(e);case 3:t.list=n.sent;case 4:case"end":return n.stop()}}),n)})))()},deleteItem:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,m.deleteData(e);case 2:return n.next=4,m.getValue(t.type);case 4:t.list=n.sent;case 5:case"end":return n.stop()}}),n)})))()}}};h.render=l;var v=h;n("ba8c");Object(r["b"])(v).mount("#app")},ba8c:function(e,t,n){}});
//# sourceMappingURL=app.8d4761bf.js.map