var D,d,Y,Z,x,K,ee,O,V,R,$,_e,M={},te=[],ce=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,N=Array.isArray;function k(_,e){for(var t in e)_[t]=e[t];return _}function ne(_){var e=_.parentNode;e&&e.removeChild(_)}function j(_,e,t){var i,n,r,l={};for(r in e)r=="key"?i=e[r]:r=="ref"?n=e[r]:l[r]=e[r];if(arguments.length>2&&(l.children=arguments.length>3?D.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(r in _.defaultProps)l[r]===void 0&&(l[r]=_.defaultProps[r]);return T(_,l,i,n,null)}function T(_,e,t,i,n){var r={type:_,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:n??++Y,__i:-1,__u:0};return n==null&&d.vnode!=null&&d.vnode(r),r}function pe(){return{current:null}}function E(_){return _.children}function U(_,e){this.props=_,this.context=e}function C(_,e){if(e==null)return _.__?C(_.__,_.__i+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?C(_):null}function oe(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return oe(_)}}function B(_){(!_.__d&&(_.__d=!0)&&x.push(_)&&!I.__r++||K!==d.debounceRendering)&&((K=d.debounceRendering)||ee)(I)}function I(){var _,e,t,i,n,r,l,u;for(x.sort(O);_=x.shift();)_.__d&&(e=x.length,i=void 0,r=(n=(t=_).__v).__e,l=[],u=[],t.__P&&((i=k({},n)).__v=n.__v+1,d.vnode&&d.vnode(i),q(t.__P,i,n,t.__n,t.__P.namespaceURI,32&n.__u?[r]:null,l,r??C(n),!!(32&n.__u),u),i.__v=n.__v,i.__.__k[i.__i]=i,ue(l,i,u),i.__e!=r&&oe(i)),x.length>e&&x.sort(O));I.__r=0}function re(_,e,t,i,n,r,l,u,c,s,p){var o,m,f,v,g,y=i&&i.__k||te,a=e.length;for(t.__d=c,ae(t,e,y),c=t.__d,o=0;o<a;o++)(f=t.__k[o])!=null&&typeof f!="boolean"&&typeof f!="function"&&(m=f.__i===-1?M:y[f.__i]||M,f.__i=o,q(_,f,m,n,r,l,u,c,s,p),v=f.__e,f.ref&&m.ref!=f.ref&&(m.ref&&G(m.ref,null,f),p.push(f.ref,f.__c||v,f)),g==null&&v!=null&&(g=v),65536&f.__u||m.__k===f.__k?c=ie(f,c,_):typeof f.type=="function"&&f.__d!==void 0?c=f.__d:v&&(c=v.nextSibling),f.__d=void 0,f.__u&=-196609);t.__d=c,t.__e=g}function ae(_,e,t){var i,n,r,l,u,c=e.length,s=t.length,p=s,o=0;for(_.__k=[],i=0;i<c;i++)l=i+o,(n=_.__k[i]=(n=e[i])==null||typeof n=="boolean"||typeof n=="function"?null:typeof n=="string"||typeof n=="number"||typeof n=="bigint"||n.constructor==String?T(null,n,null,null,null):N(n)?T(E,{children:n},null,null,null):n.constructor===void 0&&n.__b>0?T(n.type,n.props,n.key,n.ref?n.ref:null,n.__v):n)!=null?(n.__=_,n.__b=_.__b+1,u=de(n,t,l,p),n.__i=u,r=null,u!==-1&&(p--,(r=t[u])&&(r.__u|=131072)),r==null||r.__v===null?(u==-1&&o--,typeof n.type!="function"&&(n.__u|=65536)):u!==l&&(u==l-1?o--:u==l+1?o++:u>l?p>c-l?o+=u-l:o--:u<l&&(u==l-o?o-=u-l:o++),u!==i+o&&(n.__u|=65536))):(r=t[l])&&r.key==null&&r.__e&&!(131072&r.__u)&&(r.__e==_.__d&&(_.__d=C(r)),z(r,r,!1),t[l]=null,p--);if(p)for(i=0;i<s;i++)(r=t[i])!=null&&!(131072&r.__u)&&(r.__e==_.__d&&(_.__d=C(r)),z(r,r))}function ie(_,e,t){var i,n;if(typeof _.type=="function"){for(i=_.__k,n=0;i&&n<i.length;n++)i[n]&&(i[n].__=_,e=ie(i[n],e,t));return e}_.__e!=e&&(e&&_.type&&!t.contains(e)&&(e=C(_)),t.insertBefore(_.__e,e||null),e=_.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function le(_,e){return e=e||[],_==null||typeof _=="boolean"||(N(_)?_.some(function(t){le(t,e)}):e.push(_)),e}function de(_,e,t,i){var n=_.key,r=_.type,l=t-1,u=t+1,c=e[t];if(c===null||c&&n==c.key&&r===c.type&&!(131072&c.__u))return t;if(i>(c!=null&&!(131072&c.__u)?1:0))for(;l>=0||u<e.length;){if(l>=0){if((c=e[l])&&!(131072&c.__u)&&n==c.key&&r===c.type)return l;l--}if(u<e.length){if((c=e[u])&&!(131072&c.__u)&&n==c.key&&r===c.type)return u;u++}}return-1}function Q(_,e,t){e[0]==="-"?_.setProperty(e,t??""):_[e]=t==null?"":typeof t!="number"||ce.test(e)?t:t+"px"}function H(_,e,t,i,n){var r;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof i=="string"&&(_.style.cssText=i=""),i)for(e in i)t&&e in t||Q(_.style,e,"");if(t)for(e in t)i&&t[e]===i[e]||Q(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in _||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+r]=t,t?i?t.u=i.u:(t.u=V,_.addEventListener(e,r?$:R,r)):_.removeEventListener(e,r?$:R,r);else{if(n=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?_.removeAttribute(e):_.setAttribute(e,e=="popover"&&t==1?"":t))}}function X(_){return function(e){if(this.l){var t=this.l[e.type+_];if(e.t==null)e.t=V++;else if(e.t<t.u)return;return t(d.event?d.event(e):e)}}}function q(_,e,t,i,n,r,l,u,c,s){var p,o,m,f,v,g,y,a,h,P,w,L,S,J,W,A,b=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(c=!!(32&t.__u),r=[u=e.__e=t.__e]),(p=d.__b)&&p(e);e:if(typeof b=="function")try{if(a=e.props,h="prototype"in b&&b.prototype.render,P=(p=b.contextType)&&i[p.__c],w=p?P?P.props.value:p.__:i,t.__c?y=(o=e.__c=t.__c).__=o.__E:(h?e.__c=o=new b(a,w):(e.__c=o=new U(a,w),o.constructor=b,o.render=ve),P&&P.sub(o),o.props=a,o.state||(o.state={}),o.context=w,o.__n=i,m=o.__d=!0,o.__h=[],o._sb=[]),h&&o.__s==null&&(o.__s=o.state),h&&b.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=k({},o.__s)),k(o.__s,b.getDerivedStateFromProps(a,o.__s))),f=o.props,v=o.state,o.__v=e,m)h&&b.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),h&&o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(h&&b.getDerivedStateFromProps==null&&a!==f&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(a,w),!o.__e&&(o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(a,o.__s,w)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(o.props=a,o.state=o.__s,o.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(F){F&&(F.__=e)}),L=0;L<o._sb.length;L++)o.__h.push(o._sb[L]);o._sb=[],o.__h.length&&l.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(a,o.__s,w),h&&o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(f,v,g)})}if(o.context=w,o.props=a,o.__P=_,o.__e=!1,S=d.__r,J=0,h){for(o.state=o.__s,o.__d=!1,S&&S(e),p=o.render(o.props,o.state,o.context),W=0;W<o._sb.length;W++)o.__h.push(o._sb[W]);o._sb=[]}else do o.__d=!1,S&&S(e),p=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++J<25);o.state=o.__s,o.getChildContext!=null&&(i=k(k({},i),o.getChildContext())),h&&!m&&o.getSnapshotBeforeUpdate!=null&&(g=o.getSnapshotBeforeUpdate(f,v)),re(_,N(A=p!=null&&p.type===E&&p.key==null?p.props.children:p)?A:[A],e,t,i,n,r,l,u,c,s),o.base=e.__e,e.__u&=-161,o.__h.length&&l.push(o),y&&(o.__E=o.__=null)}catch(F){if(e.__v=null,c||r!=null){for(e.__u|=c?160:32;u&&u.nodeType===8&&u.nextSibling;)u=u.nextSibling;r[r.indexOf(u)]=null,e.__e=u}else e.__e=t.__e,e.__k=t.__k;d.__e(F,e,t)}else r==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=he(t.__e,e,t,i,n,r,l,c,s);(p=d.diffed)&&p(e)}function ue(_,e,t){e.__d=void 0;for(var i=0;i<t.length;i++)G(t[i],t[++i],t[++i]);d.__c&&d.__c(e,_),_.some(function(n){try{_=n.__h,n.__h=[],_.some(function(r){r.call(n)})}catch(r){d.__e(r,n.__v)}})}function he(_,e,t,i,n,r,l,u,c){var s,p,o,m,f,v,g,y=t.props,a=e.props,h=e.type;if(h==="svg"?n="http://www.w3.org/2000/svg":h==="math"?n="http://www.w3.org/1998/Math/MathML":n||(n="http://www.w3.org/1999/xhtml"),r!=null){for(s=0;s<r.length;s++)if((f=r[s])&&"setAttribute"in f==!!h&&(h?f.localName===h:f.nodeType===3)){_=f,r[s]=null;break}}if(_==null){if(h===null)return document.createTextNode(a);_=document.createElementNS(n,h,a.is&&a),r=null,u=!1}if(h===null)y===a||u&&_.data===a||(_.data=a);else{if(r=r&&D.call(_.childNodes),y=t.props||M,!u&&r!=null)for(y={},s=0;s<_.attributes.length;s++)y[(f=_.attributes[s]).name]=f.value;for(s in y)if(f=y[s],s!="children"){if(s=="dangerouslySetInnerHTML")o=f;else if(s!=="key"&&!(s in a)){if(s=="value"&&"defaultValue"in a||s=="checked"&&"defaultChecked"in a)continue;H(_,s,null,f,n)}}for(s in a)f=a[s],s=="children"?m=f:s=="dangerouslySetInnerHTML"?p=f:s=="value"?v=f:s=="checked"?g=f:s==="key"||u&&typeof f!="function"||y[s]===f||H(_,s,f,y[s],n);if(p)u||o&&(p.__html===o.__html||p.__html===_.innerHTML)||(_.innerHTML=p.__html),e.__k=[];else if(o&&(_.innerHTML=""),re(_,N(m)?m:[m],e,t,i,h==="foreignObject"?"http://www.w3.org/1999/xhtml":n,r,l,r?r[0]:t.__k&&C(t,0),u,c),r!=null)for(s=r.length;s--;)r[s]!=null&&ne(r[s]);u||(s="value",v!==void 0&&(v!==_[s]||h==="progress"&&!v||h==="option"&&v!==y[s])&&H(_,s,v,y[s],n),s="checked",g!==void 0&&g!==_[s]&&H(_,s,g,y[s],n))}return _}function G(_,e,t){try{if(typeof _=="function"){var i=typeof _.__u=="function";i&&_.__u(),i&&e==null||(_.__u=_(e))}else _.current=e}catch(n){d.__e(n,t)}}function z(_,e,t){var i,n;if(d.unmount&&d.unmount(_),(i=_.ref)&&(i.current&&i.current!==_.__e||G(i,null,e)),(i=_.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){d.__e(r,e)}i.base=i.__P=null}if(i=_.__k)for(n=0;n<i.length;n++)i[n]&&z(i[n],e,t||typeof _.type!="function");t||_.__e==null||ne(_.__e),_.__c=_.__=_.__e=_.__d=void 0}function ve(_,e,t){return this.constructor(_,t)}function se(_,e,t){var i,n,r,l;d.__&&d.__(_,e),n=(i=typeof t=="function")?null:t&&t.__k||e.__k,r=[],l=[],q(e,_=(!i&&t||e).__k=j(E,null,[_]),n||M,M,e.namespaceURI,!i&&t?[t]:n?null:e.firstChild?D.call(e.childNodes):null,r,!i&&t?t:n?n.__e:e.firstChild,i,l),ue(r,_,l)}function fe(_,e){se(_,e,fe)}function ye(_,e,t){var i,n,r,l,u=k({},_.props);for(r in _.type&&_.type.defaultProps&&(l=_.type.defaultProps),e)r=="key"?i=e[r]:r=="ref"?n=e[r]:u[r]=e[r]===void 0&&l!==void 0?l[r]:e[r];return arguments.length>2&&(u.children=arguments.length>3?D.call(arguments,2):t),T(_.type,u,i||_.key,n||_.ref,null)}function me(_,e){var t={__c:e="__cC"+_e++,__:_,Consumer:function(i,n){return i.children(n)},Provider:function(i){var n,r;return this.getChildContext||(n=[],(r={})[e]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&n.some(function(u){u.__e=!0,B(u)})},this.sub=function(l){n.push(l);var u=l.componentWillUnmount;l.componentWillUnmount=function(){n&&n.splice(n.indexOf(l),1),u&&u.call(l)}}),i.children}};return t.Provider.__=t.Consumer.contextType=t}D=te.slice,d={__e:function(_,e,t,i){for(var n,r,l;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&r.getDerivedStateFromError!=null&&(n.setState(r.getDerivedStateFromError(_)),l=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(_,i||{}),l=n.__d),l)return n.__E=n}catch(u){_=u}throw _}},Y=0,Z=function(_){return _!=null&&_.constructor==null},U.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof _=="function"&&(_=_(k({},t),this.props)),_&&k(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),B(this))},U.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),B(this))},U.prototype.render=E,x=[],ee=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,O=function(_,e){return _.__v.__b-e.__v.__b},I.__r=0,V=0,R=X(!1),$=X(!0),_e=0;const ge=Object.freeze(Object.defineProperty({__proto__:null,Component:U,Fragment:E,cloneElement:ye,createContext:me,createElement:j,createRef:pe,h:j,hydrate:fe,get isValidElement(){return Z},get options(){return d},render:se,toChildArray:le},Symbol.toStringTag,{value:"Module"}));export{se as B,fe as D,ye as E,me as G,le as H,j as _,U as b,E as k,d as l,pe as m,ge as p};
