!function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!u&&l)return l(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=scene,l=u.Component,s=u.RectPath,c={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"number",label:"z-pos",name:"zPos",property:"zPos"},{type:"string",label:"mac-address",name:"macAddr",property:"macAddress"},{type:"string",label:"identifier",name:"identifier",property:"identifier"},{type:"string",label:"uuid",name:"uuid",property:"uuid"},{type:"number",label:"major",name:"major",property:"major"},{type:"number",label:"minor",name:"minor",property:"minor"}]},f=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"_draw",value:function(e){this.model.fillStyle={type:"pattern",fitPattern:!0,image:"data:image/png;base64,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"},this.drawFill(e)}},{key:"nature",get:function(){return c}},{key:"controls",get:function(){}}]),t}(s(l));n["default"]=f,l.register("beacon",f)},{}],2:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n,r){var o=c["default"].fromAxis({x:1,y:0,z:0},t),i=c["default"].fromAxis({x:0,y:1,z:0},n),a=c["default"].fromAxis({x:0,y:0,z:1},r),u=a.multiply(i).multiply(o);return e.map(function(e){return u.multiVec(e)})}Object.defineProperty(n,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=e("./quaternion"),c=r(s),f=scene,y=f.Component,p=f.RectPath,h={props:[]},d=[{x:0,y:0,z:0},{x:-50,y:100,z:-100},{x:50,y:100,z:-100},{x:50,y:-100,z:-100},{x:-50,y:-100,z:-100},{x:0,y:0,z:-100},{x:0,y:50,z:-100}],b=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),l(t,[{key:"_draw",value:function(e){var t=this.transformed;this.transformed[5].z>0?(this.__drawLines(e,t),this.__drawRect(e,t)):(this.__drawRect(e,t),this.__drawLines(e,t))}},{key:"__drawLines",value:function(e,t){var n=this.center;e.beginPath(),e.moveTo(n.x+t[0].x,n.y-t[0].y),e.lineTo(n.x+t[1].x,n.y-t[1].y),e.moveTo(n.x+t[0].x,n.y-t[0].y),e.lineTo(n.x+t[2].x,n.y-t[2].y),e.moveTo(n.x+t[0].x,n.y-t[0].y),e.lineTo(n.x+t[3].x,n.y-t[3].y),e.moveTo(n.x+t[0].x,n.y-t[0].y),e.lineTo(n.x+t[4].x,n.y-t[4].y),e.strokeStyle=this.model.strokeStyle,e.stroke(),e.closePath()}},{key:"__drawRect",value:function(e,t){var n=this.center;e.beginPath(),e.moveTo(n.x+t[1].x,n.y-t[1].y),e.lineTo(n.x+t[2].x,n.y-t[2].y),e.lineTo(n.x+t[3].x,n.y-t[3].y),e.lineTo(n.x+t[4].x,n.y-t[4].y),e.lineTo(n.x+t[1].x,n.y-t[1].y),e.fillStyle=this.model.fillStyle,e.strokeStyle=this.model.strokeStyle,e.fill(),e.stroke(),e.beginPath(),e.ellipse(n.x+t[6].x,n.y-t[6].y,5,5,0,0,2*Math.PI),e.stroke()}},{key:"_onchange",value:function(e,t){if(e.hasOwnProperty("yaw")||e.hasOwnProperty("pitch")||e.hasOwnProperty("roll")){var n=this,r=e.yaw-t.yaw,o=e.pitch-t.pitch,i=e.roll-t.roll;this._anim_alpha_yaw=r,this._anim_alpha_pitch=o,this._anim_alpha_roll=i,this.animate({step:function(e){n._anim_alpha_yaw=r*(1-e),n._anim_alpha_pitch=o*(1-e),n._anim_alpha_roll=i*(1-e),n.invalidate()},duration:1e3,delta:"circ",options:{x:1},ease:"inout"}).start()}}},{key:"transformed",get:function(){var e=this.model,t=e.yaw,n=void 0===t?0:t,r=e.pitch,o=void 0===r?0:r,i=e.roll,a=void 0===i?0:i;return u(d,o-(this._anim_alpha_pitch||0),a-(this._anim_alpha_roll||0),n-(this._anim_alpha_yaw||0))}}],[{key:"nature",get:function(){return h}}]),t}(p(y));n["default"]=b,y.memoize(b.prototype,"transformed",!1),y.register("camera",b)},{"./quaternion":6}],3:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=scene,l=u.Component,s=u.Container,c=(u.CardLayout,u.Model),f={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"action",label:"remove",name:"remove",property:{icon:"remove-circle",action:function(e){var t=e.parent;t.removeComponent(e),t.activeIndex=0,t.invalidate()}}}]},y=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"drawLocationMarkers",value:function(e){for(var t in e){var n=e[t],r=n.props||{};r.width=r.width||10,r.height=r.height||10;var o=(new Date).getTime(),i=o-n.lastUpdateTime;if(i<n.updateInterval){var a=this.findById(t);if(a){a.set(r);for(var u in r)a[u]=r[u]}else{var l=Object.assign({type:n.type||"rect",id:t,fillStyle:"red",left:r.center.x-.5*r.width,top:r.center.y-.5*r.height,cx:r.center.x,cy:r.center.y},r),s=c.compile(l);this.addComponent(s)}}else{var f=this.findById(t);this.removeComponent(f)}this.invalidate()}}},{key:"simulate",value:function(e){var t=[];for(var n in this.components)if("beacon"==this.components[n].model.type){var r=this.components[n];r.distance=Math.sqrt(Math.pow(r.center.x-e.x,2)+Math.pow(r.center.y-e.y,2)),r.gaussian=gaussian(r.model.txPower||-71,Math.pow(3.209,2)),r.txPower=r.gaussian.ppf(Math.random()),t.push(r)}t=t.slice(0),this.calculatePosition(t,e)}},{key:"calculatePosition",value:function(e){var t=e;t.sort(function(e,t){var n=-10*Math.log10(e.distance)+e.txPower,r=-10*Math.log10(t.distance)+t.txPower;return Math.abs(n)-Math.abs(r)});var n=this.k_combinations(t.slice(0,4),3),r=[];for(var o in n){var i=n[o],a=i[0],u=i[1],l=i[2],s=a.center.x,f=a.center.y,y=u.center.x,p=u.center.y,h=l.center.x,d=l.center.y,b=a.distance,m=u.distance,v=l.distance,g=-10*Math.log10(.01*a.distance)+a.txPower,x=-10*Math.log10(.01*u.distance)+u.txPower,w=-10*Math.log10(.01*l.distance)+l.txPower;b=100*this.calculateDistance(a.txPower,g),m=100*this.calculateDistance(u.txPower,x),v=100*this.calculateDistance(l.txPower,w);var k=s*s,O=y*y,P=h*h,j=f*f,A=p*p,M=d*d,z=b*b,I=m*m,X=v*v,S=(y-s)*(P+M-X)+(s-h)*(O+A-I)+(h-y)*(k+j-z),N=2*(d*(y-s)+p*(s-h)+f*(h-y)),L=S/N,Z=I-z+k-O+j-A-2*(f-p)*L,R=2*(s-y),D=Z/R;Number.isFinite(D)&&Number.isFinite(L)&&r.push({x:D,y:L})}var V=this.averageOfPositions(r);this._simPosition&&this.removeComponent(this._simPosition),this._simPosition=c.compile({type:"ellipse",cx:V.x,cy:V.y,rx:10,ry:10,fillStyle:"navy"}),this.addComponent(this._simPosition)}},{key:"calculateDistance",value:function(e,t){if(0==t)return-1;var n=1*t/e;if(1>n)return Math.pow(n,10);var r=.89976*Math.pow(n,7.7095)+.111;return r}},{key:"calculateAngle",value:function(e,t,n){var r=Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2),o=Math.pow(t.x-n.x,2)+Math.pow(t.y-n.y,2),i=Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2);return Math.acos((r+o-i)/Math.sqrt(4*r*o))}},{key:"averageOfPositions",value:function(e){var t=0,n=0;for(var r in e){var o=e[r];t+=o.x,n+=o.y}return{x:t/e.length,y:n/e.length}}},{key:"k_combinations",value:function(e,t){var n,r,o,i,a;if(t>e.length||0>=t)return[];if(t==e.length)return[e];if(1==t){for(o=[],n=0;n<e.length;n++)o.push([e[n]]);return o}for(o=[],n=0;n<e.length-t+1;n++)for(i=e.slice(n,n+1),a=this.k_combinations(e.slice(n+1),t-1),r=0;r<a.length;r++)o.push(i.concat(a[r]));return o}},{key:"onclick",value:function(e){return}},{key:"hasTextProperty",get:function(){return!1}},{key:"mutable",get:function(){return!1}},{key:"resizable",get:function(){return!1}},{key:"rotatable",get:function(){return!1}},{key:"nature",get:function(){return f}}]),t}(s);n["default"]=y,l.register("floor",y)},{}],4:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=e("./floor");Object.defineProperty(n,"Floor",{enumerable:!0,get:function(){return r(o)["default"]}});var i=e("./indoor-map");Object.defineProperty(n,"IndoorMap",{enumerable:!0,get:function(){return r(i)["default"]}});var a=e("./rack");Object.defineProperty(n,"Rack",{enumerable:!0,get:function(){return r(a)["default"]}});var u=e("./beacon");Object.defineProperty(n,"Beacon",{enumerable:!0,get:function(){return r(u)["default"]}});var l=e("./camera");Object.defineProperty(n,"Camera",{enumerable:!0,get:function(){return r(l)["default"]}});var s=e("./quaternion");Object.defineProperty(n,"Quaternion",{enumerable:!0,get:function(){return r(s)["default"]}})},{"./beacon":1,"./camera":2,"./floor":3,"./indoor-map":5,"./quaternion":6,"./rack":7}],5:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n,r){return"rgba("+e+", "+t+", "+n+", "+r+")"}Object.defineProperty(n,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function x(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:x(o,t,n)}if("value"in r)return r.value;var i=r.get;return void 0===i?void 0:i.call(n)},c=e("./floor"),f=(r(c),scene),y=f.Component,p=f.Container,h=f.CardLayout,d=f.Model,b=25,m=25,v={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"action",label:"floor",name:"floor",property:{icon:"add-circle",action:function(e){e.addFloor()}}}]},g=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),l(t,[{key:"_post_draw",value:function(e){s(Object.getPrototypeOf(t.prototype),"_post_draw",this).call(this,e);{var n=this.model,r=n.left,o=n.top,i=n.width;n.fillStyle}e.beginPath(),e.rect(r+i,o,b,m);var a=235;e.fillStyle=u(a,a,a,1),e.fill(),e.closePath()}},{key:"contains",value:function(e,n){if(s(Object.getPrototypeOf(t.prototype),"contains",this).call(this,e,n))return!0;var r=this.bounds,o=r.left,i=r.top,a=r.width,u=o+a,l=m;return e<Math.max(u+b,u)&&e>Math.min(u+b,u)&&n<Math.max(i+l,i)&&n>Math.min(i+l,i)}},{key:"addFloor",value:function(){var e=d.compile({type:"floor",fillStyle:"gray",top:0,left:0,width:100,height:100});this.addComponent(e)}},{key:"drawLocationMarkers",value:function(e){var t=this.activeFloor;t.drawLocationMarkers(e)}},{key:"nature",get:function(){return v}},{key:"layout",get:function(){return h}},{key:"activeIndex",set:function(e){var t=Object.assign({},this.layoutConfig);t.activeIndex=e,this.set("layoutConfig",t)}},{key:"activeFloor",get:function(){return this.components[this.get("layoutConfig").activeIndex]}}]),t}(p);n["default"]=g,y.register("indoor-map",g)},{"./floor":3}],6:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t,n,o,i){r(this,e),this.x=t||0,this.y=n||0,this.z=o||0,this.w=void 0===i?1:i}return o(e,[{key:"multiply",value:function(t){var n=this.x,r=this.y,o=this.z,i=this.w,a=t.x,u=t.y,l=t.z,s=t.w;return new e(n*s+r*l-o*u+i*a,-n*l+r*s+o*a+i*u,n*u-r*a+o*s+i*l,-n*a-r*u-o*l+i*s)}},{key:"add",value:function(t,n,r,o){var i=this.x,a=this.y,u=this.z,l=this.w;return isNaN(t)?t.add(i,a,u,l):void 0===n?new e(i,a,u,l+t):new e(i+t,a+n,u+r,l+o)}},{key:"multiVec",value:function(e){var t=this.x,n=this.y,r=this.z,o=this.w,i=o*e.x+n*e.z-r*e.y,a=o*e.y+r*e.x-t*e.z,u=o*e.z+t*e.y-n*e.x,l=-t*e.x-n*e.y-r*e.z;return{x:i*o+l*-t+a*-r-u*-n,y:a*o+l*-n+u*-t-i*-r,z:u*o+l*-r+i*-n-a*-t}}},{key:"toString",value:function(){return"[x="+this.x+", y="+this.y+", z="+this.z+", w="+this.w+"]"}},{key:"coords",get:function(){return{x:this.x,y:this.y,z:this.z,w:this.w}}},{key:"array",get:function(){return[this.x,this.y,this.z,this.w]}},{key:"inverse",get:function(){return new e(-this.x,-this.y,-this.z)}},{key:"size",get:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}},{key:"norm",get:function(){var t=this.size;return 0===t?new e(0,0,0,0):new e(this.x/t,this.y/t,this.z/t,this.w/t)}}],[{key:"fromAxis",value:function(t,n){var r=n/2,o=Math.sin(r);return new e(t.x*o,t.y*o,t.z*o,Math.cos(r))}},{key:"fromEuler",value:function(t){var n=1,r=t.x*n,o=t.y*n,i=t.z*n,a=Math.cos(o),u=Math.sin(o),l=Math.cos(-i),s=Math.sin(-i),c=Math.cos(r),f=Math.sin(r),y=a*l,p=u*s;return new e(y*f+p*c,u*l*c+a*s*f,a*s*c-u*l*f,y*c-p*f)}}]),e}();n["default"]=i},{}],7:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=scene,l=u.Component,s=u.RectPath,c={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"number",label:"depth",name:"depth",property:"depth"},{type:"number",label:"shelves",name:"shelves",property:"shelves"},{type:"string",label:"location pattern",name:"locPattern",placeholder:"{z}{s}-{u}-{sh}",property:"locPattern"},{type:"string",label:"zone",name:"zone",property:"zone"},{type:"string",label:"section",name:"section",property:"section"},{type:"string",label:"unit",name:"unit",property:"unit"},{type:"string",label:"shelf pattern",name:"shelfPattern",placeholder:"#",property:"shelfPattern"}]},f=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"is3dish",value:function(){return!0}},{key:"_draw",value:function(e){var t=this.model,n=t.left,r=t.top,o=t.width,i=t.height,a=t.strokeStyle,u=t.lineWidth,l=t.fillStyle,s=t.alpha,c=void 0===s?1:s;e.beginPath(),e.rect(n,r,o,i),e.strokeStyle=a,e.lineWidth=u,e.globalAlpha=.4*c,e.stroke(),e.beginPath(),e.rect(n+.15*o,r+.15*i,.7*o,.7*i),e.fillStyle=l,e.globalAlpha=.5*c,e.fill(),e.beginPath(),e.moveTo(n,r),e.lineTo(n+o,r+i),e.moveTo(n,r+i),e.lineTo(n+o,r),e.strokeStyle=a,e.lineWidth=u,e.globalAlpha=.4*c,e.stroke()}},{key:"nature",get:function(){return c}},{key:"hasTextProperty",get:function(){return!1}}]),t}(s(l));n["default"]=f,l.register("rack",f)},{}]},{},[4]);