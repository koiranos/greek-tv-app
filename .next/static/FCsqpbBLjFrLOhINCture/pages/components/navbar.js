(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{YFqc:function(e,a,n){e.exports=n("cTJO")},cTJO:function(e,a,n){"use strict";var t=n("lwsE"),r=n("W8MJ"),s=n("7W2i"),o=n("a1gu"),i=n("Nsbk");function l(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=i(e);if(a){var r=i(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return o(this,n)}}var c=n("TqRt"),f=n("284h");a.__esModule=!0,a.default=void 0;var u,p=f(n("q1tI")),h=n("QmWs"),v=n("g/15"),m=c(n("nOHt")),d=n("elyg");function N(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var g=new Map,k=window.IntersectionObserver,y={};function b(){return u||(k?u=new k((function(e){e.forEach((function(e){if(g.has(e.target)){var a=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),g.delete(e.target),a())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){s(n,e);var a=l(n);function n(e){var r;return t(this,n),(r=a.call(this,e)).p=void 0,r.cleanUpListeners=function(){},r.formatUrls=function(e){var a=null,n=null,t=null;return function(r,s){if(t&&r===a&&s===n)return t;var o=e(r,s);return a=r,n=s,t=o,o}}((function(e,a){return{href:(0,d.addBasePath)(N(e)),as:a?(0,d.addBasePath)(N(a)):a}})),r.linkClicked=function(e){var a=e.currentTarget,n=a.nodeName,t=a.target;if("A"!==n||!(t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var s=r.formatUrls(r.props.href,r.props.as),o=s.href,i=s.as;if(function(e){var a=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!a.host||a.protocol===n.protocol&&a.host===n.host}(o)){var l=window.location.pathname;o=(0,h.resolve)(l,o),i=i?(0,h.resolve)(l,i):o,e.preventDefault();var c=r.props.scroll;null==c&&(c=i.indexOf("#")<0),m.default[r.props.replace?"replace":"push"](o,i,{shallow:r.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},r.p=!1!==e.prefetch,r}return r(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,a=this.formatUrls(this.props.href,this.props.as),n=a.href,t=a.as,r=(0,h.resolve)(e,n);return[r,t?(0,h.resolve)(e,t):r]}},{key:"handleRef",value:function(e){var a=this;this.p&&k&&e&&e.tagName&&(this.cleanUpListeners(),y[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,a){var n=b();return n?(n.observe(e),g.set(e,a),function(){try{n.unobserve(e)}catch(a){console.error(a)}g.delete(e)}):function(){}}(e,(function(){a.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var a=this.getPaths();m.default.prefetch(a[0],a[1],e).catch((function(e){0})),y[a.join("%")]=!0}}},{key:"render",value:function(){var e=this,a=this.props.children,n=this.formatUrls(this.props.href,this.props.as),t=n.href,r=n.as;"string"===typeof a&&(a=p.default.createElement("a",null,a));var s=p.Children.only(a),o={ref:function(a){e.handleRef(a),s&&"object"===typeof s&&s.ref&&("function"===typeof s.ref?s.ref(a):"object"===typeof s.ref&&(s.ref.current=a))},onMouseEnter:function(a){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(a),e.prefetch({priority:!0})},onClick:function(a){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(a),a.defaultPrevented||e.linkClicked(a)}};return!this.props.passHref&&("a"!==s.type||"href"in s.props)||(o.href=r||t),p.default.cloneElement(s,o)}}]),n}(p.Component);a.default=w},pSy7:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),r=n.n(t),s=n("YFqc"),o=n.n(s),i=r.a.createElement;a.default=function(){return i("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},i("a",{className:"navbar-brand",href:"/"},"Greek Tv "),i("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"},i("span",{className:"navbar-toggler-icon"})),i("div",{className:"collapse navbar-collapse",id:"navbarColor01"},i("ul",{className:"navbar-nav mr-auto"},i(o.a,{href:""},i("a",{className:"nav-link"},"|")),i("li",{className:"nav-item active"},i(o.a,{href:"/"},i("a",{className:"nav-link"},"Home ",i("span",{className:"sr-only"},"(current)")))),i("li",{className:"nav-item"},i(o.a,{href:"about"},i("a",{className:"nav-link"},"About"))),i("li",{className:"nav-item"},i(o.a,{href:""},i("a",{className:"nav-link"},"|"))),i("li",{className:"nav-item"},i(o.a,{href:"/ch1"},i("a",{className:"nav-link"},"Ant1"))),i("li",{className:"nav-item"},i(o.a,{href:"/ch2"},i("a",{className:"nav-link"},"Alpha"))),i("li",{className:"nav-item"},i(o.a,{href:"/ch3"},i("a",{className:"nav-link"},"Mega"))),i("li",{className:"nav-item"},i(o.a,{href:"/ch4"},i("a",{className:"nav-link"},"Star"))),i("li",{className:"nav-item"},i(o.a,{href:"/ch5"},i("a",{className:"nav-link"},"Skai"))),i("li",{className:"nav-item"},i(o.a,{href:"/ch6"},i("a",{className:"nav-link"},"Ert1"))),i("li",{className:"nav-item"},i(o.a,{href:"/ch7"},i("a",{className:"nav-link"},"Ert2"))),i("li",{className:"nav-item"},i(o.a,{href:"/ch8"},i("a",{className:"nav-link"},"Ert Sports"))),i(o.a,{href:""},i("a",{className:"nav-link"},"|")),i("li",{className:"nav-item"},i(o.a,{href:"/Channels"},i("a",{className:"nav-link"},"Channels"))))))}},wDpL:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navbar",function(){return n("pSy7")}])}},[["wDpL",0,1,2]]]);