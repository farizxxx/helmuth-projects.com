// Back to top
$(function(){$(window).scroll(function(){$(this).scrollTop()>400?$(".pixtotop").addClass("arlniainf"):$(".pixtotop").removeClass("arlniainf")}),$(".pixtotop").click(function(){return $("html,body").animate({scrollTop:0},400),!1})});
// Search form
$(function(){$('a[href="#searchfs"]').on("click",function(e){e.preventDefault(),$("#searchfs").addClass("open"),$('#searchfs > form > input[type="search"]').focus()}),$("#searchfs, #searchfs button.close").on("click keyup",function(e){e.target!=this&&"close"!=e.target.className&&27!=e.keyCode||$(this).removeClass("open")})});
// nav menu
!function(s){s.fn.menumaker=function(n){var e=s(this),o=s.extend({format:"dropdown",sticky:!1},n);return this.each(function(){s(this).find(".button").on("click",function(){s(this).toggleClass("menu-opened");var n=s(this).next("ul");n.hasClass("open")?n.slideToggle(150).removeClass("open"):(n.slideToggle(150).addClass("open"),"dropdown"===o.format&&n.find("ul").show())}),e.find("li ul").parent().addClass("has-sub"),multiTg=function(){e.find(".has-sub").prepend('<span class="submenu-button"></span>'),e.find(".submenu-button").on("click",function(){s(this).toggleClass("submenu-opened"),s(this).siblings("ul").hasClass("open")?s(this).siblings("ul").removeClass("open").slideToggle(150):s(this).siblings("ul").addClass("open").slideToggle(150)})},"multitoggle"===o.format?multiTg():e.addClass("dropdown"),!0===o.sticky&&e.css("position","fixed")})}}(jQuery),function(s){s(document).ready(function(){s("#mudahmenu").menumaker({format:"multitoggle"})})}(jQuery);
// LazySizes
!function(e){var t=function(e,t,n){"use strict";if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in Q=e.lazySizesConfig||e.lazysizesConfig||{},n)t in Q||(Q[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:Q,noSupport:!0};var a,i,s,o,r,l,c,d,u,f,m,z,y,h,$,v,g,p,C,b,A,E,N,_,M,w,x,W,B,L,S,F,T,R,k,D,P,H,O,q,I,U,j,G,J,K,Q,V=t.documentElement,X=e.HTMLPictureElement,Y="addEventListener",Z="getAttribute",ee=e[Y].bind(e),et=e.setTimeout,en=e.requestAnimationFrame||et,ea=e.requestIdleCallback,ei=/^picture$/i,es=["load","error","lazyincluded","_lazyloaded"],eo={},er=Array.prototype.forEach,el=function(e,t){return eo[t]||(eo[t]=RegExp("(\\s|^)"+t+"(\\s|$)")),eo[t].test(e[Z]("class")||"")&&eo[t]},ec=function(e,t){el(e,t)||e.setAttribute("class",(e[Z]("class")||"").trim()+" "+t)},ed=function(e,t){var n;(n=el(e,t))&&e.setAttribute("class",(e[Z]("class")||"").replace(n," "))},eu=function(e,t,n){var a=n?Y:"removeEventListener";n&&eu(e,t),es.forEach(function(n){e[a](n,t)})},ef=function(e,n,a,i,s){var o=t.createEvent("Event");return a||(a={}),a.instance=K,o.initEvent(n,!i,!s),o.detail=a,e.dispatchEvent(o),o},em=function(t,n){var a;!X&&(a=e.picturefill||Q.pf)?(n&&n.src&&!t[Z]("srcset")&&t.setAttribute("srcset",n.src),a({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},ez=function(e,t){return(getComputedStyle(e,null)||{})[t]},ey=function(e,t,n){for(n=n||e.offsetWidth;n<Q.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},eh=(o=[],r=s=[],l=function(){var e=r;for(r=s.length?o:s,a=!0,i=!1;e.length;)e.shift()();a=!1},(c=function(e,n){a&&!n?e.apply(this,arguments):(r.push(e),i||(i=!0,(t.hidden?et:en)(l)))})._lsFlush=l,c),e$=function(e,t){return t?function(){eh(e)}:function(){var t=this,n=arguments;eh(function(){e.apply(t,n)})}},ev=function(e){var t,a=0,i=Q.throttleDelay,s=Q.ricTimeout,o=function(){t=!1,a=n.now(),e()},r=ea&&s>49?function(){ea(o,{timeout:s}),s!==Q.ricTimeout&&(s=Q.ricTimeout)}:e$(function(){et(o)},!0);return function(e){var o;(e=!0===e)&&(s=33),!t&&(t=!0,(o=i-(n.now()-a))<0&&(o=0),e||o<9?r():et(r,o))}},eg=function(e){var t,a,i=function(){t=null,e()},s=function(){var e=n.now()-a;e<99?et(s,99-e):(ea||i)(i)};return function(){a=n.now(),t||(t=et(s,99))}},ep=(b=/^img$/i,A=/^iframe$/i,E="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),N=0,_=0,M=0,w=-1,x=function(e){M--,e&&!(M<0)&&e.target||(M=0)},W=function(e){return null==C&&(C="hidden"==ez(t.body,"visibility")),C||!("hidden"==ez(e.parentNode,"visibility")&&"hidden"==ez(e,"visibility"))},B=function(e,n){var a,i=e,s=W(e);for($-=n,p+=n,v-=n,g+=n;s&&(i=i.offsetParent)&&i!=t.body&&i!=V;)(s=(ez(i,"opacity")||1)>0)&&"visible"!=ez(i,"overflow")&&(s=g>(a=i.getBoundingClientRect()).left&&v<a.right&&p>a.top-1&&$<a.bottom+1);return s},S=ev(L=function(){var e,n,a,i,s,o,r,l,c,f,z,b,A=K.elements;if((m=Q.loadMode)&&M<8&&(e=A.length)){for(n=0,w++;n<e;n++)if(A[n]&&!A[n]._lazyRace){if(!E||K.prematureUnveil&&K.prematureUnveil(A[n])){H(A[n]);continue}if((l=A[n][Z]("data-expand"))&&(o=1*l)||(o=_),f||(f=!Q.expand||Q.expand<1?V.clientHeight>500&&V.clientWidth>500?500:370:Q.expand,K._defEx=f,z=f*Q.expFactor,b=Q.hFac,C=null,_<z&&M<1&&w>2&&m>2&&!t.hidden?(_=z,w=0):_=m>1&&w>1&&M<6?f:N),c!==o&&(y=innerWidth+o*b,h=innerHeight+o,r=-1*o,c=o),(p=(a=A[n].getBoundingClientRect()).bottom)>=r&&($=a.top)<=h&&(g=a.right)>=r*b&&(v=a.left)<=y&&(p||g||v||$)&&(Q.loadHidden||W(A[n]))&&(u&&M<3&&!l&&(m<3||w<4)||B(A[n],o))){if(H(A[n]),s=!0,M>9)break}else!s&&u&&!i&&M<4&&w<4&&m>2&&(d[0]||Q.preloadAfterLoad)&&(d[0]||!l&&(p||g||v||$||"auto"!=A[n][Z](Q.sizesAttr)))&&(i=d[0]||A[n])}i&&!s&&H(i)}}),T=e$(F=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}x(e),ec(t,Q.loadedClass),ed(t,Q.loadingClass),eu(t,R),ef(t,"lazyloaded")}),R=function(e){T({target:e.target})},k=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},D=function(e){var t,n=e[Z](Q.srcsetAttr);(t=Q.customMedia[e[Z]("data-media")||e[Z]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},P=e$(function(e,t,n,a,i){var s,o,r,l,c,d;!(c=ef(e,"lazybeforeunveil",t)).defaultPrevented&&(a&&(n?ec(e,Q.autosizesClass):e.setAttribute("sizes",a)),o=e[Z](Q.srcsetAttr),s=e[Z](Q.srcAttr),i&&(l=(r=e.parentNode)&&ei.test(r.nodeName||"")),d=t.firesLoad||"src"in e&&(o||s||l),c={target:e},ec(e,Q.loadingClass),d&&(clearTimeout(f),f=et(x,2500),eu(e,R,!0)),l&&er.call(r.getElementsByTagName("source"),D),o?e.setAttribute("srcset",o):s&&!l&&(A.test(e.nodeName)?k(e,s):e.src=s),i&&(o||l)&&em(e,{src:s})),e._lazyRace&&delete e._lazyRace,ed(e,Q.lazyClass),eh(function(){var t=e.complete&&e.naturalWidth>1;(!d||t)&&(t&&ec(e,"ls-is-cached"),F(c),e._lazyCache=!0,et(function(){"_lazyCache"in e&&delete e._lazyCache},9)),"lazy"==e.loading&&M--},!0)}),H=function(e){if(!e._lazyRace){var t,n=b.test(e.nodeName),a=n&&(e[Z](Q.sizesAttr)||e[Z]("sizes")),i="auto"==a;!((i||!u)&&n&&(e[Z]("src")||e.srcset)&&!e.complete&&!el(e,Q.errorClass)&&el(e,Q.lazyClass))&&(t=ef(e,"lazyunveilread").detail,i&&eC.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,M++,P(e,t,i,a,n))}},O=eg(function(){Q.loadMode=3,S()}),q=function(){3==Q.loadMode&&(Q.loadMode=2),O()},I=function(){if(!u){if(n.now()-z<999){et(I,999);return}u=!0,Q.loadMode=3,S(),ee("scroll",q,!0)}},{_:function(){z=n.now(),K.elements=t.getElementsByClassName(Q.lazyClass),d=t.getElementsByClassName(Q.lazyClass+" "+Q.preloadClass),ee("scroll",S,!0),ee("resize",S,!0),ee("pageshow",function(e){if(e.persisted){var n=t.querySelectorAll("."+Q.loadingClass);n.length&&n.forEach&&en(function(){n.forEach(function(e){e.complete&&H(e)})})}}),e.MutationObserver?new MutationObserver(S).observe(V,{childList:!0,subtree:!0,attributes:!0}):(V[Y]("DOMNodeInserted",S,!0),V[Y]("DOMAttrModified",S,!0),setInterval(S,999)),ee("hashchange",S,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){t[Y](e,S,!0)}),/d$|^c/.test(t.readyState)?I():(ee("load",I),t[Y]("DOMContentLoaded",S),et(I,2e4)),K.elements.length?(L(),eh._lsFlush()):S()},checkElems:S,unveil:H,_aLSL:q}),eC=(j=e$(function(e,t,n,a){var i,s,o;if(e._lazysizesWidth=a,a+="px",e.setAttribute("sizes",a),ei.test(t.nodeName||""))for(s=0,o=(i=t.getElementsByTagName("source")).length;s<o;s++)i[s].setAttribute("sizes",a);n.detail.dataAttr||em(e,n.detail)}),G=function(e,t,n){var a,i=e.parentNode;i&&(n=ey(e,i,n),!(a=ef(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented&&(n=a.detail.width)&&n!==e._lazysizesWidth&&j(e,i,a,n))},{_:function(){U=t.getElementsByClassName(Q.autosizesClass),ee("resize",J)},checkElems:J=eg(function(){var e,t=U.length;if(t)for(e=0;e<t;e++)G(U[e])}),updateElem:G}),eb=function(){!eb.i&&t.getElementsByClassName&&(eb.i=!0,eC._(),ep._())};return et(function(){Q.init&&eb()}),K={cfg:Q,autoSizer:eC,loader:ep,init:eb,uP:em,aC:ec,rC:ed,hC:el,fire:ef,gW:ey,rAF:eh}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});
// Show hide label
$("#Label1 .btn-more").on("click",function(e){e.preventDefault(),$(this).closest("#Label1").toggleClass("open")});