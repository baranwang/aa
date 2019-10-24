(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c687713"],{1148:function(e,t,r){"use strict";var n=r("a691"),o=r("1d80");e.exports="".repeat||function(e){var t=String(o(this)),r="",i=n(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(r+=t);return r}},"13d5":function(e,t,r){"use strict";var n=r("23e7"),o=r("d58f").left,i=r("b301");n({target:"Array",proto:!0,forced:i("reduce")},{reduce:function(e){return o(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"1dde":function(e,t,r){var n=r("d039"),o=r("b622"),i=o("species");e.exports=function(e){return!n((function(){var t=[],r=t.constructor={};return r[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"408a":function(e,t,r){var n=r("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=n(e))throw TypeError("Incorrect invocation");return+e}},4570:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("fieldset",[r("legend",[e._v("Persons")]),e._l(e.persons,(function(t,n){return r("div",{key:n},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"item.name"}],attrs:{type:"text",placeholder:"name"},domProps:{value:t.name},on:{input:function(r){r.target.composing||e.$set(t,"name",r.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"item.price "}],attrs:{type:"number",placeholder:"price"},domProps:{value:t.price},on:{input:function(r){r.target.composing||e.$set(t,"price",r.target.value)}}}),r("button",{on:{click:function(t){return e.persons.splice(n,1)}}},[e._v(" - ")])])})),r("button",{on:{click:function(t){return e.persons.push({name:"",price:null})}}},[e._v(" + New Person ")])],2),r("fieldset",[r("legend",[e._v("Public")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.expressFee,expression:"expressFee"}],attrs:{type:"text",placeholder:"Express Fee"},domProps:{value:e.expressFee},on:{input:function(t){t.target.composing||(e.expressFee=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.packageFee,expression:"packageFee"}],attrs:{type:"text",placeholder:"Package Fee"},domProps:{value:e.packageFee},on:{input:function(t){t.target.composing||(e.packageFee=t.target.value)}}}),r("hr"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.totalFee,expression:"totalFee"}],attrs:{type:"text",placeholder:"Total Fee"},domProps:{value:e.totalFee},on:{input:function(t){t.target.composing||(e.totalFee=t.target.value)}}})]),r("table",[e._m(0),r("tbody",e._l(e.result,(function(t,n){return r("tr",{key:n},[r("td",{domProps:{textContent:e._s(t.name)}}),r("td",[e._v(e._s(e._f("currency")(t.price)))]),r("td",[e._v(e._s(e._f("currency")(t.publicFee)))]),r("td",[e._v(e._s(e._f("currency")(t.price+t.publicFee)))])])})),0)])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("Person")]),r("th",[e._v("Price")]),r("th",[e._v("Public Fee")]),r("th",[e._v("Total Fee")])])])}],i=(r("d81d"),r("13d5"),r("b0c0"),r("a9e3"),r("b680"),{filters:{currency:function(e){return e.toLocaleString("zh-CN",{style:"currency",currency:"CNY"})}},data:function(){return{persons:[{name:"",price:null},{name:"",price:null}],expressFee:null|this.$route.query.expressFee,packageFee:null|this.$route.query.packageFee,totalFee:null|this.$route.query.totalFee}},computed:{result:function(){var e=this,t=Number(this.expressFee)+Number(this.packageFee),r=this.persons.reduce((function(e,t){return e+Number(t.price)}),0),n=(Number(this.totalFee)-t)/r;return this.persons.map((function(r){return{name:r.name,price:+(r.price*n).toFixed(2),publicFee:+(t/e.persons.length).toFixed(2)}}))}},watch:{result:function(){var e=this.persons,t=this.expressFee,r=this.packageFee,n=this.totalFee;this.$router.push({params:{data:btoa(JSON.stringify({persons:e,expressFee:t,packageFee:r,totalFee:n}))}}).catch((function(){}))}},mounted:function(){var e=this.$route.params.data;if("string"===typeof e)try{var t=JSON.parse(atob(e)),r=t.persons,n=t.expressFee,o=t.packageFee,i=t.totalFee;this.persons=r,this.expressFee=n,this.packageFee=o,this.totalFee=i}catch(a){console.log(a)}}}),a=i,c=(r("9acd"),r("2877")),u=Object(c["a"])(a,n,o,!1,null,"2a0c9489",null);t["default"]=u.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),o=r("5899"),i="["+o+"]",a=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),u=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(a,"")),2&e&&(r=r.replace(c,"")),r}};e.exports={start:u(1),end:u(2),trim:u(3)}},"65f0":function(e,t,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),a=i("species");e.exports=function(e,t){var r;return o(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},"6ed6":function(e,t,r){},7156:function(e,t,r){var n=r("861d"),o=r("d2bb");e.exports=function(e,t,r){var i,a;return o&&"function"==typeof(i=t.constructor)&&i!==r&&n(a=i.prototype)&&a!==r.prototype&&o(e,a),e}},"9acd":function(e,t,r){"use strict";var n=r("6ed6"),o=r.n(n);o.a},a9e3:function(e,t,r){"use strict";var n=r("83ab"),o=r("da84"),i=r("94ca"),a=r("6eeb"),c=r("5135"),u=r("c6b6"),s=r("7156"),l=r("c04e"),p=r("d039"),f=r("7c73"),d=r("241c").f,v=r("06cf").f,h=r("9bf2").f,m=r("58a8").trim,g="Number",b=o[g],F=b.prototype,x=u(f(F))==g,y=function(e){var t,r,n,o,i,a,c,u,s=l(e,!1);if("string"==typeof s&&s.length>2)if(s=m(s),t=s.charCodeAt(0),43===t||45===t){if(r=s.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(s.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+s}for(i=s.slice(2),a=i.length,c=0;c<a;c++)if(u=i.charCodeAt(c),u<48||u>o)return NaN;return parseInt(i,n)}return+s};if(i(g,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var N,_=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof _&&(x?p((function(){F.valueOf.call(r)})):u(r)!=g)?s(new b(y(t)),r,_):y(t)},w=n?d(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;w.length>k;k++)c(b,N=w[k])&&!c(_,N)&&h(_,N,v(b,N));_.prototype=F,F.constructor=_,a(o,g,_)}},b0c0:function(e,t,r){var n=r("83ab"),o=r("9bf2").f,i=Function.prototype,a=i.toString,c=/^\s*function ([^ (]*)/,u="name";!n||u in i||o(i,u,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(e){return""}}})},b301:function(e,t,r){"use strict";var n=r("d039");e.exports=function(e,t){var r=[][e];return!r||!n((function(){r.call(null,t||function(){throw 1},1)}))}},b680:function(e,t,r){"use strict";var n=r("23e7"),o=r("a691"),i=r("408a"),a=r("1148"),c=r("d039"),u=1..toFixed,s=Math.floor,l=function(e,t,r){return 0===t?r:t%2===1?l(e,t-1,r*e):l(e*e,t/2,r)},p=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},f=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){u.call({})}));n({target:"Number",proto:!0,forced:f},{toFixed:function(e){var t,r,n,c,u=i(this),f=o(e),d=[0,0,0,0,0,0],v="",h="0",m=function(e,t){var r=-1,n=t;while(++r<6)n+=e*d[r],d[r]=n%1e7,n=s(n/1e7)},g=function(e){var t=6,r=0;while(--t>=0)r+=d[t],d[t]=s(r/e),r=r%e*1e7},b=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==d[e]){var r=String(d[e]);t=""===t?r:t+a.call("0",7-r.length)+r}return t};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(v="-",u=-u),u>1e-21)if(t=p(u*l(2,69,1))-69,r=t<0?u*l(2,-t,1):u/l(2,t,1),r*=4503599627370496,t=52-t,t>0){m(0,r),n=f;while(n>=7)m(1e7,0),n-=7;m(l(10,n,1),0),n=t-1;while(n>=23)g(1<<23),n-=23;g(1<<n),m(1,1),g(2),h=b()}else m(0,r),m(1<<-t,0),h=b()+a.call("0",f);return f>0?(c=h.length,h=v+(c<=f?"0."+a.call("0",f-c)+h:h.slice(0,c-f)+"."+h.slice(c-f))):h=v+h,h}})},b727:function(e,t,r){var n=r("f8c2"),o=r("44ad"),i=r("7b0b"),a=r("50c4"),c=r("65f0"),u=[].push,s=function(e){var t=1==e,r=2==e,s=3==e,l=4==e,p=6==e,f=5==e||p;return function(d,v,h,m){for(var g,b,F=i(d),x=o(F),y=n(v,h,3),N=a(x.length),_=0,w=m||c,k=t?w(d,N):r?w(d,0):void 0;N>_;_++)if((f||_ in x)&&(g=x[_],b=y(g,_,F),e))if(t)k[_]=b;else if(b)switch(e){case 3:return!0;case 5:return g;case 6:return _;case 2:u.call(k,g)}else if(l)return!1;return p?-1:s||l?l:k}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},d58f:function(e,t,r){var n=r("1c0b"),o=r("7b0b"),i=r("44ad"),a=r("50c4"),c=function(e){return function(t,r,c,u){n(r);var s=o(t),l=i(s),p=a(s.length),f=e?p-1:0,d=e?-1:1;if(c<2)while(1){if(f in l){u=l[f],f+=d;break}if(f+=d,e?f<0:p<=f)throw TypeError("Reduce of empty array with no initial value")}for(;e?f>=0:p>f;f+=d)f in l&&(u=r(u,l[f],f,s));return u}};e.exports={left:c(!1),right:c(!0)}},d81d:function(e,t,r){"use strict";var n=r("23e7"),o=r("b727").map,i=r("1dde");n({target:"Array",proto:!0,forced:!i("map")},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(e,t,r){var n=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);
//# sourceMappingURL=chunk-0c687713.95f84a9d.js.map