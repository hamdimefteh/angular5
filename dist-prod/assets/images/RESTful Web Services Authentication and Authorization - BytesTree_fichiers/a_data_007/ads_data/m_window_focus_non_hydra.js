(function(){var e=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},g=Date.now||function(){return+new Date};var h=document,k=window;var m=function(a,b,c){a.addEventListener?a.addEventListener(b,c,void 0):a.attachEvent&&a.attachEvent("on"+b,c)};var n=function(a){k.google_image_requests||(k.google_image_requests=[]);var b=k.document.createElement("img");b.src=a;k.google_image_requests.push(b)};var p=function(a,b,c){if("array"==e(b))for(var f=0;f<b.length;f++)p(a,String(b[f]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))};var w=function(a,b,c,f,d,l,r){q(h.hidden)?(this.g="hidden",this.j="visibilitychange"):q(h.mozHidden)?(this.g="mozHidden",this.j="mozvisibilitychange"):q(h.msHidden)?(this.g="msHidden",this.j="msvisibilitychange"):q(h.webkitHidden)&&(this.g="webkitHidden",this.j="webkitvisibilitychange");this.u=a;this.h=!1;this.i=-1;this.A=b;this.B=c;this.o=f;this.s=d?"mousedown":"click";h[this.g]&&t(this,2);this.w=l;this.v=r||0;this.m=null;u(this);v(this)},u=function(a){m(h,a.j,function(){if(h[a.g])a.h&&(a.h=!1,a.i=g(),t(a,0));else{if(-1!=a.i){var b=g()-a.i;b>a.v&&(a.i=-1,t(a,1,b))}t(a,3)}})},v=function(a){m(k,a.s,function(b){return a.l(b)})};w.prototype.l=function(a){var b=this;this.m=a.button;this.h=!0;k.setTimeout(function(){b.h=!1},5E3)};w.prototype.handleClick=w.prototype.l;var t=function(a,b,c){var f="//"+(a.o?"googleads.g.doubleclick.net":"pagead2.googlesyndication.com")+"/pagead/gen_204?",d={gqid:a.A,qqid:a.B};0==b&&(d["return"]=0);1==b&&(d["return"]=1,d.timeDelta=c,a.w&&(d.cbtn=a.m));2==b&&(d.bgload=1);3==b&&(d.fg=1);b=[];for(var l in d)p(l,d[l],b);d=b.join("&");a=a.u+"&label=window_focus&"+d;n(f+"id=wfocus&"+d);n(a)},q=function(a){return"undefined"!==typeof a};var x=function(a,b,c,f,d,l,r){return new w(a,b,c,f,d,l,r)},y=["wfocusnhinit"],z=this;y[0]in z||"undefined"==typeof z.execScript||z.execScript("var "+y[0]);for(var A;y.length&&(A=y.shift());){var B;if(B=!y.length)B=void 0!==x;B?z[A]=x:z[A]&&z[A]!==Object.prototype[A]?z=z[A]:z=z[A]={}}var C=k.google_wf_async,D;if(D=!(!C||!C.call))D="function"===typeof C;D&&k.google_wf_async();}).call(this);
