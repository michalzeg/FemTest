import{I as hg}from"./chunk-URVC7ELU.js";import{$a as Xc,D as lg,M as ca,S as Si,X as An,a as ye,b as Ge,c as aa,e as df,ea as Wc,f as pf,g as yi,ga as la,j as rg,k as mf,kc as no,lc as ua,m as sg,ma as ug,o as og,oa as gs,q as ag,t as cg}from"./chunk-4S3ZHAOW.js";var u0=df((l0,Od)=>{"use strict";(function(i){if(typeof l0=="object"&&typeof Od<"u")Od.exports=i();else if(typeof define=="function"&&define.amd)define([],i);else{var e;typeof window<"u"?e=window:typeof global<"u"?e=global:typeof self<"u"?e=self:e=this,e.localforage=i()}})(function(){var i,e,t;return(function n(s,a,c){function u(d,g){if(!a[d]){if(!s[d]){var m=typeof aa=="function"&&aa;if(!g&&m)return m(d,!0);if(h)return h(d,!0);var _=new Error("Cannot find module '"+d+"'");throw _.code="MODULE_NOT_FOUND",_}var S=a[d]={exports:{}};s[d][0].call(S.exports,function(M){var x=s[d][1][M];return u(x||M)},S,S.exports,n,s,a,c)}return a[d].exports}for(var h=typeof aa=="function"&&aa,f=0;f<c.length;f++)u(c[f]);return u})({1:[function(n,s,a){(function(c){"use strict";var u=c.MutationObserver||c.WebKitMutationObserver,h;if(u){var f=0,d=new u(M),g=c.document.createTextNode("");d.observe(g,{characterData:!0}),h=function(){g.data=f=++f%2}}else if(!c.setImmediate&&typeof c.MessageChannel<"u"){var m=new c.MessageChannel;m.port1.onmessage=M,h=function(){m.port2.postMessage(0)}}else"document"in c&&"onreadystatechange"in c.document.createElement("script")?h=function(){var v=c.document.createElement("script");v.onreadystatechange=function(){M(),v.onreadystatechange=null,v.parentNode.removeChild(v),v=null},c.document.documentElement.appendChild(v)}:h=function(){setTimeout(M,0)};var _,S=[];function M(){_=!0;for(var v,B,L=S.length;L;){for(B=S,S=[],v=-1;++v<L;)B[v]();L=S.length}_=!1}s.exports=x;function x(v){S.push(v)===1&&!_&&h()}}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{}],2:[function(n,s,a){"use strict";var c=n(1);function u(){}var h={},f=["REJECTED"],d=["FULFILLED"],g=["PENDING"];s.exports=m;function m(D){if(typeof D!="function")throw new TypeError("resolver must be a function");this.state=g,this.queue=[],this.outcome=void 0,D!==u&&x(this,D)}m.prototype.catch=function(D){return this.then(null,D)},m.prototype.then=function(D,O){if(typeof D!="function"&&this.state===d||typeof O!="function"&&this.state===f)return this;var V=new this.constructor(u);if(this.state!==g){var I=this.state===d?D:O;S(V,I,this.outcome)}else this.queue.push(new _(V,D,O));return V};function _(D,O,V){this.promise=D,typeof O=="function"&&(this.onFulfilled=O,this.callFulfilled=this.otherCallFulfilled),typeof V=="function"&&(this.onRejected=V,this.callRejected=this.otherCallRejected)}_.prototype.callFulfilled=function(D){h.resolve(this.promise,D)},_.prototype.otherCallFulfilled=function(D){S(this.promise,this.onFulfilled,D)},_.prototype.callRejected=function(D){h.reject(this.promise,D)},_.prototype.otherCallRejected=function(D){S(this.promise,this.onRejected,D)};function S(D,O,V){c(function(){var I;try{I=O(V)}catch(A){return h.reject(D,A)}I===D?h.reject(D,new TypeError("Cannot resolve promise with itself")):h.resolve(D,I)})}h.resolve=function(D,O){var V=v(M,O);if(V.status==="error")return h.reject(D,V.value);var I=V.value;if(I)x(D,I);else{D.state=d,D.outcome=O;for(var A=-1,G=D.queue.length;++A<G;)D.queue[A].callFulfilled(O)}return D},h.reject=function(D,O){D.state=f,D.outcome=O;for(var V=-1,I=D.queue.length;++V<I;)D.queue[V].callRejected(O);return D};function M(D){var O=D&&D.then;if(D&&(typeof D=="object"||typeof D=="function")&&typeof O=="function")return function(){O.apply(D,arguments)}}function x(D,O){var V=!1;function I(ee){V||(V=!0,h.reject(D,ee))}function A(ee){V||(V=!0,h.resolve(D,ee))}function G(){O(A,I)}var ne=v(G);ne.status==="error"&&I(ne.value)}function v(D,O){var V={};try{V.value=D(O),V.status="success"}catch(I){V.status="error",V.value=I}return V}m.resolve=B;function B(D){return D instanceof this?D:h.resolve(new this(u),D)}m.reject=L;function L(D){var O=new this(u);return h.reject(O,D)}m.all=P;function P(D){var O=this;if(Object.prototype.toString.call(D)!=="[object Array]")return this.reject(new TypeError("must be an array"));var V=D.length,I=!1;if(!V)return this.resolve([]);for(var A=new Array(V),G=0,ne=-1,ee=new this(u);++ne<V;)le(D[ne],ne);return ee;function le(fe,oe){O.resolve(fe).then(we,function(se){I||(I=!0,h.reject(ee,se))});function we(se){A[oe]=se,++G===V&&!I&&(I=!0,h.resolve(ee,A))}}}m.race=Y;function Y(D){var O=this;if(Object.prototype.toString.call(D)!=="[object Array]")return this.reject(new TypeError("must be an array"));var V=D.length,I=!1;if(!V)return this.resolve([]);for(var A=-1,G=new this(u);++A<V;)ne(D[A]);return G;function ne(ee){O.resolve(ee).then(function(le){I||(I=!0,h.resolve(G,le))},function(le){I||(I=!0,h.reject(G,le))})}}},{1:1}],3:[function(n,s,a){(function(c){"use strict";typeof c.Promise!="function"&&(c.Promise=n(2))}).call(this,typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{})},{2:2}],4:[function(n,s,a){"use strict";var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(w){return typeof w}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w};function u(w,F){if(!(w instanceof F))throw new TypeError("Cannot call a class as a function")}function h(){try{if(typeof indexedDB<"u")return indexedDB;if(typeof webkitIndexedDB<"u")return webkitIndexedDB;if(typeof mozIndexedDB<"u")return mozIndexedDB;if(typeof OIndexedDB<"u")return OIndexedDB;if(typeof msIndexedDB<"u")return msIndexedDB}catch(w){return}}var f=h();function d(){try{if(!f||!f.open)return!1;var w=typeof openDatabase<"u"&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),F=typeof fetch=="function"&&fetch.toString().indexOf("[native code")!==-1;return(!w||F)&&typeof indexedDB<"u"&&typeof IDBKeyRange<"u"}catch(T){return!1}}function g(w,F){w=w||[],F=F||{};try{return new Blob(w,F)}catch(X){if(X.name!=="TypeError")throw X;for(var T=typeof BlobBuilder<"u"?BlobBuilder:typeof MSBlobBuilder<"u"?MSBlobBuilder:typeof MozBlobBuilder<"u"?MozBlobBuilder:WebKitBlobBuilder,z=new T,k=0;k<w.length;k+=1)z.append(w[k]);return z.getBlob(F.type)}}typeof Promise>"u"&&n(3);var m=Promise;function _(w,F){F&&w.then(function(T){F(null,T)},function(T){F(T)})}function S(w,F,T){typeof F=="function"&&w.then(F),typeof T=="function"&&w.catch(T)}function M(w){return typeof w!="string"&&(console.warn(w+" used as a key, but it is not a string."),w=String(w)),w}function x(){if(arguments.length&&typeof arguments[arguments.length-1]=="function")return arguments[arguments.length-1]}var v="local-forage-detect-blob-support",B=void 0,L={},P=Object.prototype.toString,Y="readonly",D="readwrite";function O(w){for(var F=w.length,T=new ArrayBuffer(F),z=new Uint8Array(T),k=0;k<F;k++)z[k]=w.charCodeAt(k);return T}function V(w){return new m(function(F){var T=w.transaction(v,D),z=g([""]);T.objectStore(v).put(z,"key"),T.onabort=function(k){k.preventDefault(),k.stopPropagation(),F(!1)},T.oncomplete=function(){var k=navigator.userAgent.match(/Chrome\/(\d+)/),X=navigator.userAgent.match(/Edge\//);F(X||!k||parseInt(k[1],10)>=43)}}).catch(function(){return!1})}function I(w){return typeof B=="boolean"?m.resolve(B):V(w).then(function(F){return B=F,B})}function A(w){var F=L[w.name],T={};T.promise=new m(function(z,k){T.resolve=z,T.reject=k}),F.deferredOperations.push(T),F.dbReady?F.dbReady=F.dbReady.then(function(){return T.promise}):F.dbReady=T.promise}function G(w){var F=L[w.name],T=F.deferredOperations.pop();if(T)return T.resolve(),T.promise}function ne(w,F){var T=L[w.name],z=T.deferredOperations.pop();if(z)return z.reject(F),z.promise}function ee(w,F){return new m(function(T,z){if(L[w.name]=L[w.name]||Lt(),w.db)if(F)A(w),w.db.close();else return T(w.db);var k=[w.name];F&&k.push(w.version);var X=f.open.apply(f,k);F&&(X.onupgradeneeded=function(ce){var me=X.result;try{me.createObjectStore(w.storeName),ce.oldVersion<=1&&me.createObjectStore(v)}catch(Ee){if(Ee.name==="ConstraintError")console.warn('The database "'+w.name+'" has been upgraded from version '+ce.oldVersion+" to version "+ce.newVersion+', but the storage "'+w.storeName+'" already exists.');else throw Ee}}),X.onerror=function(ce){ce.preventDefault(),z(X.error)},X.onsuccess=function(){var ce=X.result;ce.onversionchange=function(me){me.target.close()},T(ce),G(w)}})}function le(w){return ee(w,!1)}function fe(w){return ee(w,!0)}function oe(w,F){if(!w.db)return!0;var T=!w.db.objectStoreNames.contains(w.storeName),z=w.version<w.db.version,k=w.version>w.db.version;if(z&&(w.version!==F&&console.warn('The database "'+w.name+`" can't be downgraded from version `+w.db.version+" to version "+w.version+"."),w.version=w.db.version),k||T){if(T){var X=w.db.version+1;X>w.version&&(w.version=X)}return!0}return!1}function we(w){return new m(function(F,T){var z=new FileReader;z.onerror=T,z.onloadend=function(k){var X=btoa(k.target.result||"");F({__local_forage_encoded_blob:!0,data:X,type:w.type})},z.readAsBinaryString(w)})}function se(w){var F=O(atob(w.data));return g([F],{type:w.type})}function Re(w){return w&&w.__local_forage_encoded_blob}function He(w){var F=this,T=F._initReady().then(function(){var z=L[F._dbInfo.name];if(z&&z.dbReady)return z.dbReady});return S(T,w,w),T}function nt(w){A(w);for(var F=L[w.name],T=F.forages,z=0;z<T.length;z++){var k=T[z];k._dbInfo.db&&(k._dbInfo.db.close(),k._dbInfo.db=null)}return w.db=null,le(w).then(function(X){return w.db=X,oe(w)?fe(w):X}).then(function(X){w.db=F.db=X;for(var ce=0;ce<T.length;ce++)T[ce]._dbInfo.db=X}).catch(function(X){throw ne(w,X),X})}function pt(w,F,T,z){z===void 0&&(z=1);try{var k=w.db.transaction(w.storeName,F);T(null,k)}catch(X){if(z>0&&(!w.db||X.name==="InvalidStateError"||X.name==="NotFoundError"))return m.resolve().then(function(){if(!w.db||X.name==="NotFoundError"&&!w.db.objectStoreNames.contains(w.storeName)&&w.version<=w.db.version)return w.db&&(w.version=w.db.version+1),fe(w)}).then(function(){return nt(w).then(function(){pt(w,F,T,z-1)})}).catch(T);T(X)}}function Lt(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function de(w){var F=this,T={db:null};if(w)for(var z in w)T[z]=w[z];var k=L[T.name];k||(k=Lt(),L[T.name]=k),k.forages.push(F),F._initReady||(F._initReady=F.ready,F.ready=He);var X=[];function ce(){return m.resolve()}for(var me=0;me<k.forages.length;me++){var Ee=k.forages[me];Ee!==F&&X.push(Ee._initReady().catch(ce))}var pe=k.forages.slice(0);return m.all(X).then(function(){return T.db=k.db,le(T)}).then(function(Te){return T.db=Te,oe(T,F._defaultConfig.version)?fe(T):Te}).then(function(Te){T.db=k.db=Te,F._dbInfo=T;for(var Oe=0;Oe<pe.length;Oe++){var tt=pe[Oe];tt!==F&&(tt._dbInfo.db=T.db,tt._dbInfo.version=T.version)}})}function Ie(w,F){var T=this;w=M(w);var z=new m(function(k,X){T.ready().then(function(){pt(T._dbInfo,Y,function(ce,me){if(ce)return X(ce);try{var Ee=me.objectStore(T._dbInfo.storeName),pe=Ee.get(w);pe.onsuccess=function(){var Te=pe.result;Te===void 0&&(Te=null),Re(Te)&&(Te=se(Te)),k(Te)},pe.onerror=function(){X(pe.error)}}catch(Te){X(Te)}})}).catch(X)});return _(z,F),z}function Ze(w,F){var T=this,z=new m(function(k,X){T.ready().then(function(){pt(T._dbInfo,Y,function(ce,me){if(ce)return X(ce);try{var Ee=me.objectStore(T._dbInfo.storeName),pe=Ee.openCursor(),Te=1;pe.onsuccess=function(){var Oe=pe.result;if(Oe){var tt=Oe.value;Re(tt)&&(tt=se(tt));var lt=w(tt,Oe.key,Te++);lt!==void 0?k(lt):Oe.continue()}else k()},pe.onerror=function(){X(pe.error)}}catch(Oe){X(Oe)}})}).catch(X)});return _(z,F),z}function Ne(w,F,T){var z=this;w=M(w);var k=new m(function(X,ce){var me;z.ready().then(function(){return me=z._dbInfo,P.call(F)==="[object Blob]"?I(me.db).then(function(Ee){return Ee?F:we(F)}):F}).then(function(Ee){pt(z._dbInfo,D,function(pe,Te){if(pe)return ce(pe);try{var Oe=Te.objectStore(z._dbInfo.storeName);Ee===null&&(Ee=void 0);var tt=Oe.put(Ee,w);Te.oncomplete=function(){Ee===void 0&&(Ee=null),X(Ee)},Te.onabort=Te.onerror=function(){var lt=tt.error?tt.error:tt.transaction.error;ce(lt)}}catch(lt){ce(lt)}})}).catch(ce)});return _(k,T),k}function et(w,F){var T=this;w=M(w);var z=new m(function(k,X){T.ready().then(function(){pt(T._dbInfo,D,function(ce,me){if(ce)return X(ce);try{var Ee=me.objectStore(T._dbInfo.storeName),pe=Ee.delete(w);me.oncomplete=function(){k()},me.onerror=function(){X(pe.error)},me.onabort=function(){var Te=pe.error?pe.error:pe.transaction.error;X(Te)}}catch(Te){X(Te)}})}).catch(X)});return _(z,F),z}function Pt(w){var F=this,T=new m(function(z,k){F.ready().then(function(){pt(F._dbInfo,D,function(X,ce){if(X)return k(X);try{var me=ce.objectStore(F._dbInfo.storeName),Ee=me.clear();ce.oncomplete=function(){z()},ce.onabort=ce.onerror=function(){var pe=Ee.error?Ee.error:Ee.transaction.error;k(pe)}}catch(pe){k(pe)}})}).catch(k)});return _(T,w),T}function ot(w){var F=this,T=new m(function(z,k){F.ready().then(function(){pt(F._dbInfo,Y,function(X,ce){if(X)return k(X);try{var me=ce.objectStore(F._dbInfo.storeName),Ee=me.count();Ee.onsuccess=function(){z(Ee.result)},Ee.onerror=function(){k(Ee.error)}}catch(pe){k(pe)}})}).catch(k)});return _(T,w),T}function Jt(w,F){var T=this,z=new m(function(k,X){if(w<0){k(null);return}T.ready().then(function(){pt(T._dbInfo,Y,function(ce,me){if(ce)return X(ce);try{var Ee=me.objectStore(T._dbInfo.storeName),pe=!1,Te=Ee.openKeyCursor();Te.onsuccess=function(){var Oe=Te.result;if(!Oe){k(null);return}w===0||pe?k(Oe.key):(pe=!0,Oe.advance(w))},Te.onerror=function(){X(Te.error)}}catch(Oe){X(Oe)}})}).catch(X)});return _(z,F),z}function Dt(w){var F=this,T=new m(function(z,k){F.ready().then(function(){pt(F._dbInfo,Y,function(X,ce){if(X)return k(X);try{var me=ce.objectStore(F._dbInfo.storeName),Ee=me.openKeyCursor(),pe=[];Ee.onsuccess=function(){var Te=Ee.result;if(!Te){z(pe);return}pe.push(Te.key),Te.continue()},Ee.onerror=function(){k(Ee.error)}}catch(Te){k(Te)}})}).catch(k)});return _(T,w),T}function Rt(w,F){F=x.apply(this,arguments);var T=this.config();w=typeof w!="function"&&w||{},w.name||(w.name=w.name||T.name,w.storeName=w.storeName||T.storeName);var z=this,k;if(!w.name)k=m.reject("Invalid arguments");else{var X=w.name===T.name&&z._dbInfo.db,ce=X?m.resolve(z._dbInfo.db):le(w).then(function(me){var Ee=L[w.name],pe=Ee.forages;Ee.db=me;for(var Te=0;Te<pe.length;Te++)pe[Te]._dbInfo.db=me;return me});w.storeName?k=ce.then(function(me){if(me.objectStoreNames.contains(w.storeName)){var Ee=me.version+1;A(w);var pe=L[w.name],Te=pe.forages;me.close();for(var Oe=0;Oe<Te.length;Oe++){var tt=Te[Oe];tt._dbInfo.db=null,tt._dbInfo.version=Ee}var lt=new m(function(Nt,Gt){var an=f.open(w.name,Ee);an.onerror=function(zn){var Er=an.result;Er.close(),Gt(zn)},an.onupgradeneeded=function(){var zn=an.result;zn.deleteObjectStore(w.storeName)},an.onsuccess=function(){var zn=an.result;zn.close(),Nt(zn)}});return lt.then(function(Nt){pe.db=Nt;for(var Gt=0;Gt<Te.length;Gt++){var an=Te[Gt];an._dbInfo.db=Nt,G(an._dbInfo)}}).catch(function(Nt){throw(ne(w,Nt)||m.resolve()).catch(function(){}),Nt})}}):k=ce.then(function(me){A(w);var Ee=L[w.name],pe=Ee.forages;me.close();for(var Te=0;Te<pe.length;Te++){var Oe=pe[Te];Oe._dbInfo.db=null}var tt=new m(function(lt,Nt){var Gt=f.deleteDatabase(w.name);Gt.onerror=function(){var an=Gt.result;an&&an.close(),Nt(Gt.error)},Gt.onblocked=function(){console.warn('dropInstance blocked for database "'+w.name+'" until all open connections are closed')},Gt.onsuccess=function(){var an=Gt.result;an&&an.close(),lt(an)}});return tt.then(function(lt){Ee.db=lt;for(var Nt=0;Nt<pe.length;Nt++){var Gt=pe[Nt];G(Gt._dbInfo)}}).catch(function(lt){throw(ne(w,lt)||m.resolve()).catch(function(){}),lt})})}return _(k,F),k}var H={_driver:"asyncStorage",_initStorage:de,_support:d(),iterate:Ze,getItem:Ie,setItem:Ne,removeItem:et,clear:Pt,length:ot,key:Jt,keys:Dt,dropInstance:Rt};function Qt(){return typeof openDatabase=="function"}var St="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",kt="~~local_forage_type~",Xe=/^~~local_forage_type~([^~]+)~/,mt="__lfsc__:",Qe=mt.length,gt="arbf",nn="blob",U="si08",b="ui08",j="uic8",he="si16",xe="si32",ae="ur16",Je="ui32",Le="fl32",qe="fl64",Ke=Qe+gt.length,Me=Object.prototype.toString;function ze(w){var F=w.length*.75,T=w.length,z,k=0,X,ce,me,Ee;w[w.length-1]==="="&&(F--,w[w.length-2]==="="&&F--);var pe=new ArrayBuffer(F),Te=new Uint8Array(pe);for(z=0;z<T;z+=4)X=St.indexOf(w[z]),ce=St.indexOf(w[z+1]),me=St.indexOf(w[z+2]),Ee=St.indexOf(w[z+3]),Te[k++]=X<<2|ce>>4,Te[k++]=(ce&15)<<4|me>>2,Te[k++]=(me&3)<<6|Ee&63;return pe}function rt(w){var F=new Uint8Array(w),T="",z;for(z=0;z<F.length;z+=3)T+=St[F[z]>>2],T+=St[(F[z]&3)<<4|F[z+1]>>4],T+=St[(F[z+1]&15)<<2|F[z+2]>>6],T+=St[F[z+2]&63];return F.length%3===2?T=T.substring(0,T.length-1)+"=":F.length%3===1&&(T=T.substring(0,T.length-2)+"=="),T}function at(w,F){var T="";if(w&&(T=Me.call(w)),w&&(T==="[object ArrayBuffer]"||w.buffer&&Me.call(w.buffer)==="[object ArrayBuffer]")){var z,k=mt;w instanceof ArrayBuffer?(z=w,k+=gt):(z=w.buffer,T==="[object Int8Array]"?k+=U:T==="[object Uint8Array]"?k+=b:T==="[object Uint8ClampedArray]"?k+=j:T==="[object Int16Array]"?k+=he:T==="[object Uint16Array]"?k+=ae:T==="[object Int32Array]"?k+=xe:T==="[object Uint32Array]"?k+=Je:T==="[object Float32Array]"?k+=Le:T==="[object Float64Array]"?k+=qe:F(new Error("Failed to get type for BinaryArray"))),F(k+rt(z))}else if(T==="[object Blob]"){var X=new FileReader;X.onload=function(){var ce=kt+w.type+"~"+rt(this.result);F(mt+nn+ce)},X.readAsArrayBuffer(w)}else try{F(JSON.stringify(w))}catch(ce){console.error("Couldn't convert value into a JSON string: ",w),F(null,ce)}}function Ue(w){if(w.substring(0,Qe)!==mt)return JSON.parse(w);var F=w.substring(Ke),T=w.substring(Qe,Ke),z;if(T===nn&&Xe.test(F)){var k=F.match(Xe);z=k[1],F=F.substring(k[0].length)}var X=ze(F);switch(T){case gt:return X;case nn:return g([X],{type:z});case U:return new Int8Array(X);case b:return new Uint8Array(X);case j:return new Uint8ClampedArray(X);case he:return new Int16Array(X);case ae:return new Uint16Array(X);case xe:return new Int32Array(X);case Je:return new Uint32Array(X);case Le:return new Float32Array(X);case qe:return new Float64Array(X);default:throw new Error("Unkown type: "+T)}}var ht={serialize:at,deserialize:Ue,stringToBuffer:ze,bufferToString:rt};function q(w,F,T,z){w.executeSql("CREATE TABLE IF NOT EXISTS "+F.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],T,z)}function Fe(w){var F=this,T={db:null};if(w)for(var z in w)T[z]=typeof w[z]!="string"?w[z].toString():w[z];var k=new m(function(X,ce){try{T.db=openDatabase(T.name,String(T.version),T.description,T.size)}catch(me){return ce(me)}T.db.transaction(function(me){q(me,T,function(){F._dbInfo=T,X()},function(Ee,pe){ce(pe)})},ce)});return T.serializer=ht,k}function Se(w,F,T,z,k,X){w.executeSql(T,z,k,function(ce,me){me.code===me.SYNTAX_ERR?ce.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[F.storeName],function(Ee,pe){pe.rows.length?X(Ee,me):q(Ee,F,function(){Ee.executeSql(T,z,k,X)},X)},X):X(ce,me)},X)}function ke(w,F){var T=this;w=M(w);var z=new m(function(k,X){T.ready().then(function(){var ce=T._dbInfo;ce.db.transaction(function(me){Se(me,ce,"SELECT * FROM "+ce.storeName+" WHERE key = ? LIMIT 1",[w],function(Ee,pe){var Te=pe.rows.length?pe.rows.item(0).value:null;Te&&(Te=ce.serializer.deserialize(Te)),k(Te)},function(Ee,pe){X(pe)})})}).catch(X)});return _(z,F),z}function Ce(w,F){var T=this,z=new m(function(k,X){T.ready().then(function(){var ce=T._dbInfo;ce.db.transaction(function(me){Se(me,ce,"SELECT * FROM "+ce.storeName,[],function(Ee,pe){for(var Te=pe.rows,Oe=Te.length,tt=0;tt<Oe;tt++){var lt=Te.item(tt),Nt=lt.value;if(Nt&&(Nt=ce.serializer.deserialize(Nt)),Nt=w(Nt,lt.key,tt+1),Nt!==void 0){k(Nt);return}}k()},function(Ee,pe){X(pe)})})}).catch(X)});return _(z,F),z}function ve(w,F,T,z){var k=this;w=M(w);var X=new m(function(ce,me){k.ready().then(function(){F===void 0&&(F=null);var Ee=F,pe=k._dbInfo;pe.serializer.serialize(F,function(Te,Oe){Oe?me(Oe):pe.db.transaction(function(tt){Se(tt,pe,"INSERT OR REPLACE INTO "+pe.storeName+" (key, value) VALUES (?, ?)",[w,Te],function(){ce(Ee)},function(lt,Nt){me(Nt)})},function(tt){if(tt.code===tt.QUOTA_ERR){if(z>0){ce(ve.apply(k,[w,Ee,T,z-1]));return}me(tt)}})})}).catch(me)});return _(X,T),X}function Ye(w,F,T){return ve.apply(this,[w,F,T,1])}function vt(w,F){var T=this;w=M(w);var z=new m(function(k,X){T.ready().then(function(){var ce=T._dbInfo;ce.db.transaction(function(me){Se(me,ce,"DELETE FROM "+ce.storeName+" WHERE key = ?",[w],function(){k()},function(Ee,pe){X(pe)})})}).catch(X)});return _(z,F),z}function Yt(w){var F=this,T=new m(function(z,k){F.ready().then(function(){var X=F._dbInfo;X.db.transaction(function(ce){Se(ce,X,"DELETE FROM "+X.storeName,[],function(){z()},function(me,Ee){k(Ee)})})}).catch(k)});return _(T,w),T}function Bt(w){var F=this,T=new m(function(z,k){F.ready().then(function(){var X=F._dbInfo;X.db.transaction(function(ce){Se(ce,X,"SELECT COUNT(key) as c FROM "+X.storeName,[],function(me,Ee){var pe=Ee.rows.item(0).c;z(pe)},function(me,Ee){k(Ee)})})}).catch(k)});return _(T,w),T}function En(w,F){var T=this,z=new m(function(k,X){T.ready().then(function(){var ce=T._dbInfo;ce.db.transaction(function(me){Se(me,ce,"SELECT key FROM "+ce.storeName+" WHERE id = ? LIMIT 1",[w+1],function(Ee,pe){var Te=pe.rows.length?pe.rows.item(0).key:null;k(Te)},function(Ee,pe){X(pe)})})}).catch(X)});return _(z,F),z}function Qn(w){var F=this,T=new m(function(z,k){F.ready().then(function(){var X=F._dbInfo;X.db.transaction(function(ce){Se(ce,X,"SELECT key FROM "+X.storeName,[],function(me,Ee){for(var pe=[],Te=0;Te<Ee.rows.length;Te++)pe.push(Ee.rows.item(Te).key);z(pe)},function(me,Ee){k(Ee)})})}).catch(k)});return _(T,w),T}function Sr(w){return new m(function(F,T){w.transaction(function(z){z.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],function(k,X){for(var ce=[],me=0;me<X.rows.length;me++)ce.push(X.rows.item(me).name);F({db:w,storeNames:ce})},function(k,X){T(X)})},function(z){T(z)})})}function zs(w,F){F=x.apply(this,arguments);var T=this.config();w=typeof w!="function"&&w||{},w.name||(w.name=w.name||T.name,w.storeName=w.storeName||T.storeName);var z=this,k;return w.name?k=new m(function(X){var ce;w.name===T.name?ce=z._dbInfo.db:ce=openDatabase(w.name,"","",0),w.storeName?X({db:ce,storeNames:[w.storeName]}):X(Sr(ce))}).then(function(X){return new m(function(ce,me){X.db.transaction(function(Ee){function pe(lt){return new m(function(Nt,Gt){Ee.executeSql("DROP TABLE IF EXISTS "+lt,[],function(){Nt()},function(an,zn){Gt(zn)})})}for(var Te=[],Oe=0,tt=X.storeNames.length;Oe<tt;Oe++)Te.push(pe(X.storeNames[Oe]));m.all(Te).then(function(){ce()}).catch(function(lt){me(lt)})},function(Ee){me(Ee)})})}):k=m.reject("Invalid arguments"),_(k,F),k}var Ai={_driver:"webSQLStorage",_initStorage:Fe,_support:Qt(),iterate:Ce,getItem:ke,setItem:Ye,removeItem:vt,clear:Yt,length:Bt,key:En,keys:Qn,dropInstance:zs};function rs(){try{return typeof localStorage<"u"&&"setItem"in localStorage&&!!localStorage.setItem}catch(w){return!1}}function ss(w,F){var T=w.name+"/";return w.storeName!==F.storeName&&(T+=w.storeName+"/"),T}function Vs(){var w="_localforage_support_test";try{return localStorage.setItem(w,!0),localStorage.removeItem(w),!1}catch(F){return!0}}function Mr(){return!Vs()||localStorage.length>0}function Gs(w){var F=this,T={};if(w)for(var z in w)T[z]=w[z];return T.keyPrefix=ss(w,F._defaultConfig),Mr()?(F._dbInfo=T,T.serializer=ht,m.resolve()):m.reject()}function br(w){var F=this,T=F.ready().then(function(){for(var z=F._dbInfo.keyPrefix,k=localStorage.length-1;k>=0;k--){var X=localStorage.key(k);X.indexOf(z)===0&&localStorage.removeItem(X)}});return _(T,w),T}function os(w,F){var T=this;w=M(w);var z=T.ready().then(function(){var k=T._dbInfo,X=localStorage.getItem(k.keyPrefix+w);return X&&(X=k.serializer.deserialize(X)),X});return _(z,F),z}function Hs(w,F){var T=this,z=T.ready().then(function(){for(var k=T._dbInfo,X=k.keyPrefix,ce=X.length,me=localStorage.length,Ee=1,pe=0;pe<me;pe++){var Te=localStorage.key(pe);if(Te.indexOf(X)===0){var Oe=localStorage.getItem(Te);if(Oe&&(Oe=k.serializer.deserialize(Oe)),Oe=w(Oe,Te.substring(ce),Ee++),Oe!==void 0)return Oe}}});return _(z,F),z}function Vo(w,F){var T=this,z=T.ready().then(function(){var k=T._dbInfo,X;try{X=localStorage.key(w)}catch(ce){X=null}return X&&(X=X.substring(k.keyPrefix.length)),X});return _(z,F),z}function Go(w){var F=this,T=F.ready().then(function(){for(var z=F._dbInfo,k=localStorage.length,X=[],ce=0;ce<k;ce++){var me=localStorage.key(ce);me.indexOf(z.keyPrefix)===0&&X.push(me.substring(z.keyPrefix.length))}return X});return _(T,w),T}function Ho(w){var F=this,T=F.keys().then(function(z){return z.length});return _(T,w),T}function ko(w,F){var T=this;w=M(w);var z=T.ready().then(function(){var k=T._dbInfo;localStorage.removeItem(k.keyPrefix+w)});return _(z,F),z}function Wo(w,F,T){var z=this;w=M(w);var k=z.ready().then(function(){F===void 0&&(F=null);var X=F;return new m(function(ce,me){var Ee=z._dbInfo;Ee.serializer.serialize(F,function(pe,Te){if(Te)me(Te);else try{localStorage.setItem(Ee.keyPrefix+w,pe),ce(X)}catch(Oe){(Oe.name==="QuotaExceededError"||Oe.name==="NS_ERROR_DOM_QUOTA_REACHED")&&me(Oe),me(Oe)}})})});return _(k,T),k}function wr(w,F){if(F=x.apply(this,arguments),w=typeof w!="function"&&w||{},!w.name){var T=this.config();w.name=w.name||T.name,w.storeName=w.storeName||T.storeName}var z=this,k;return w.name?k=new m(function(X){w.storeName?X(ss(w,z._defaultConfig)):X(w.name+"/")}).then(function(X){for(var ce=localStorage.length-1;ce>=0;ce--){var me=localStorage.key(ce);me.indexOf(X)===0&&localStorage.removeItem(me)}}):k=m.reject("Invalid arguments"),_(k,F),k}var C={_driver:"localStorageWrapper",_initStorage:Gs,_support:rs(),iterate:Hs,getItem:os,setItem:Wo,removeItem:ko,clear:br,length:Ho,key:Vo,keys:Go,dropInstance:wr},J=function(F,T){return F===T||typeof F=="number"&&typeof T=="number"&&isNaN(F)&&isNaN(T)},te=function(F,T){for(var z=F.length,k=0;k<z;){if(J(F[k],T))return!0;k++}return!1},ie=Array.isArray||function(w){return Object.prototype.toString.call(w)==="[object Array]"},K={},Ae={},Pe={INDEXEDDB:H,WEBSQL:Ai,LOCALSTORAGE:C},$e=[Pe.INDEXEDDB._driver,Pe.WEBSQL._driver,Pe.LOCALSTORAGE._driver],Ve=["dropInstance"],ct=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(Ve),_t={description:"",driver:$e.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function it(w,F){w[F]=function(){var T=arguments;return w.ready().then(function(){return w[F].apply(w,T)})}}function Mt(){for(var w=1;w<arguments.length;w++){var F=arguments[w];if(F)for(var T in F)F.hasOwnProperty(T)&&(ie(F[T])?arguments[0][T]=F[T].slice():arguments[0][T]=F[T])}return arguments[0]}var zt=(function(){function w(F){u(this,w);for(var T in Pe)if(Pe.hasOwnProperty(T)){var z=Pe[T],k=z._driver;this[T]=k,K[k]||this.defineDriver(z)}this._defaultConfig=Mt({},_t),this._config=Mt({},this._defaultConfig,F),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return w.prototype.config=function(T){if((typeof T>"u"?"undefined":c(T))==="object"){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var z in T){if(z==="storeName"&&(T[z]=T[z].replace(/\W/g,"_")),z==="version"&&typeof T[z]!="number")return new Error("Database version must be a number.");this._config[z]=T[z]}return"driver"in T&&T.driver?this.setDriver(this._config.driver):!0}else return typeof T=="string"?this._config[T]:this._config},w.prototype.defineDriver=function(T,z,k){var X=new m(function(ce,me){try{var Ee=T._driver,pe=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!T._driver){me(pe);return}for(var Te=ct.concat("_initStorage"),Oe=0,tt=Te.length;Oe<tt;Oe++){var lt=Te[Oe],Nt=!te(Ve,lt);if((Nt||T[lt])&&typeof T[lt]!="function"){me(pe);return}}var Gt=function(){for(var Er=function(sh){return function(){var ic=new Error("Method "+sh+" is not implemented by the current driver"),rc=m.reject(ic);return _(rc,arguments[arguments.length-1]),rc}},ks=0,nc=Ve.length;ks<nc;ks++){var Xo=Ve[ks];T[Xo]||(T[Xo]=Er(Xo))}};Gt();var an=function(Er){K[Ee]&&console.info("Redefining LocalForage driver: "+Ee),K[Ee]=T,Ae[Ee]=Er,ce()};"_support"in T?T._support&&typeof T._support=="function"?T._support().then(an,me):an(!!T._support):an(!0)}catch(zn){me(zn)}});return S(X,z,k),X},w.prototype.driver=function(){return this._driver||null},w.prototype.getDriver=function(T,z,k){var X=K[T]?m.resolve(K[T]):m.reject(new Error("Driver not found."));return S(X,z,k),X},w.prototype.getSerializer=function(T){var z=m.resolve(ht);return S(z,T),z},w.prototype.ready=function(T){var z=this,k=z._driverSet.then(function(){return z._ready===null&&(z._ready=z._initDriver()),z._ready});return S(k,T,T),k},w.prototype.setDriver=function(T,z,k){var X=this;ie(T)||(T=[T]);var ce=this._getSupportedDrivers(T);function me(){X._config.driver=X.driver()}function Ee(Oe){return X._extend(Oe),me(),X._ready=X._initStorage(X._config),X._ready}function pe(Oe){return function(){var tt=0;function lt(){for(;tt<Oe.length;){var Nt=Oe[tt];return tt++,X._dbInfo=null,X._ready=null,X.getDriver(Nt).then(Ee).catch(lt)}me();var Gt=new Error("No available storage method found.");return X._driverSet=m.reject(Gt),X._driverSet}return lt()}}var Te=this._driverSet!==null?this._driverSet.catch(function(){return m.resolve()}):m.resolve();return this._driverSet=Te.then(function(){var Oe=ce[0];return X._dbInfo=null,X._ready=null,X.getDriver(Oe).then(function(tt){X._driver=tt._driver,me(),X._wrapLibraryMethodsWithReady(),X._initDriver=pe(ce)})}).catch(function(){me();var Oe=new Error("No available storage method found.");return X._driverSet=m.reject(Oe),X._driverSet}),S(this._driverSet,z,k),this._driverSet},w.prototype.supports=function(T){return!!Ae[T]},w.prototype._extend=function(T){Mt(this,T)},w.prototype._getSupportedDrivers=function(T){for(var z=[],k=0,X=T.length;k<X;k++){var ce=T[k];this.supports(ce)&&z.push(ce)}return z},w.prototype._wrapLibraryMethodsWithReady=function(){for(var T=0,z=ct.length;T<z;T++)it(this,ct[T])},w.prototype.createInstance=function(T){return new w(T)},w})(),jt=new zt;s.exports=jt},{3:3}]},{},[4])(4)})});var A0=df((zD,T0)=>{"use strict";var Wd=Math.abs,$R=Math.min;function eh(i,e,t,n){var s=Wd(i-e);return t==null&&(t=eh.DBL_EPSILON),n==null&&(n=t),s<=t||s<=n*$R(Wd(i),Wd(e))?!0:i===e}eh.FLT_EPSILON=11920929e-14;eh.DBL_EPSILON=2220446049250313e-31;T0.exports=eh});var q0=df((Bo,ec)=>{"use strict";(function(){var i,e="4.17.23",t=200,n="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",s="Expected a function",a="Invalid `variable` option passed into `_.template`",c="__lodash_hash_undefined__",u=500,h="__lodash_placeholder__",f=1,d=2,g=4,m=1,_=2,S=1,M=2,x=4,v=8,B=16,L=32,P=64,Y=128,D=256,O=512,V=30,I="...",A=800,G=16,ne=1,ee=2,le=3,fe=1/0,oe=9007199254740991,we=17976931348623157e292,se=NaN,Re=4294967295,He=Re-1,nt=Re>>>1,pt=[["ary",Y],["bind",S],["bindKey",M],["curry",v],["curryRight",B],["flip",O],["partial",L],["partialRight",P],["rearg",D]],Lt="[object Arguments]",de="[object Array]",Ie="[object AsyncFunction]",Ze="[object Boolean]",Ne="[object Date]",et="[object DOMException]",Pt="[object Error]",ot="[object Function]",Jt="[object GeneratorFunction]",Dt="[object Map]",Rt="[object Number]",H="[object Null]",Qt="[object Object]",St="[object Promise]",kt="[object Proxy]",Xe="[object RegExp]",mt="[object Set]",Qe="[object String]",gt="[object Symbol]",nn="[object Undefined]",U="[object WeakMap]",b="[object WeakSet]",j="[object ArrayBuffer]",he="[object DataView]",xe="[object Float32Array]",ae="[object Float64Array]",Je="[object Int8Array]",Le="[object Int16Array]",qe="[object Int32Array]",Ke="[object Uint8Array]",Me="[object Uint8ClampedArray]",ze="[object Uint16Array]",rt="[object Uint32Array]",at=/\b__p \+= '';/g,Ue=/\b(__p \+=) '' \+/g,ht=/(__e\(.*?\)|\b__t\)) \+\n'';/g,q=/&(?:amp|lt|gt|quot|#39);/g,Fe=/[&<>"']/g,Se=RegExp(q.source),ke=RegExp(Fe.source),Ce=/<%-([\s\S]+?)%>/g,ve=/<%([\s\S]+?)%>/g,Ye=/<%=([\s\S]+?)%>/g,vt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Yt=/^\w*$/,Bt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,En=/[\\^$.*+?()[\]{}|]/g,Qn=RegExp(En.source),Sr=/^\s+/,zs=/\s/,Ai=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,rs=/\{\n\/\* \[wrapped with (.+)\] \*/,ss=/,? & /,Vs=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Mr=/[()=,{}\[\]\/\s]/,Gs=/\\(\\)?/g,br=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,os=/\w*$/,Hs=/^[-+]0x[0-9a-f]+$/i,Vo=/^0b[01]+$/i,Go=/^\[object .+?Constructor\]$/,Ho=/^0o[0-7]+$/i,ko=/^(?:0|[1-9]\d*)$/,Wo=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,wr=/($^)/,C=/['\n\r\u2028\u2029\\]/g,J="\\ud800-\\udfff",te="\\u0300-\\u036f",ie="\\ufe20-\\ufe2f",K="\\u20d0-\\u20ff",Ae=te+ie+K,Pe="\\u2700-\\u27bf",$e="a-z\\xdf-\\xf6\\xf8-\\xff",Ve="\\xac\\xb1\\xd7\\xf7",ct="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",_t="\\u2000-\\u206f",it=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Mt="A-Z\\xc0-\\xd6\\xd8-\\xde",zt="\\ufe0e\\ufe0f",jt=Ve+ct+_t+it,w="['\u2019]",F="["+J+"]",T="["+jt+"]",z="["+Ae+"]",k="\\d+",X="["+Pe+"]",ce="["+$e+"]",me="[^"+J+jt+k+Pe+$e+Mt+"]",Ee="\\ud83c[\\udffb-\\udfff]",pe="(?:"+z+"|"+Ee+")",Te="[^"+J+"]",Oe="(?:\\ud83c[\\udde6-\\uddff]){2}",tt="[\\ud800-\\udbff][\\udc00-\\udfff]",lt="["+Mt+"]",Nt="\\u200d",Gt="(?:"+ce+"|"+me+")",an="(?:"+lt+"|"+me+")",zn="(?:"+w+"(?:d|ll|m|re|s|t|ve))?",Er="(?:"+w+"(?:D|LL|M|RE|S|T|VE))?",ks=pe+"?",nc="["+zt+"]?",Xo="(?:"+Nt+"(?:"+[Te,Oe,tt].join("|")+")"+nc+ks+")*",Jd="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",sh="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ic=nc+ks+Xo,rc="(?:"+[X,Oe,tt].join("|")+")"+ic,tv="(?:"+[Te+z+"?",z,Oe,tt,F].join("|")+")",nv=RegExp(w,"g"),iv=RegExp(z,"g"),oh=RegExp(Ee+"(?="+Ee+")|"+tv+ic,"g"),rv=RegExp([lt+"?"+ce+"+"+zn+"(?="+[T,lt,"$"].join("|")+")",an+"+"+Er+"(?="+[T,lt+Gt,"$"].join("|")+")",lt+"?"+Gt+"+"+zn,lt+"+"+Er,sh,Jd,k,rc].join("|"),"g"),sv=RegExp("["+Nt+J+Ae+zt+"]"),ov=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,av=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],cv=-1,rn={};rn[xe]=rn[ae]=rn[Je]=rn[Le]=rn[qe]=rn[Ke]=rn[Me]=rn[ze]=rn[rt]=!0,rn[Lt]=rn[de]=rn[j]=rn[Ze]=rn[he]=rn[Ne]=rn[Pt]=rn[ot]=rn[Dt]=rn[Rt]=rn[Qt]=rn[Xe]=rn[mt]=rn[Qe]=rn[U]=!1;var tn={};tn[Lt]=tn[de]=tn[j]=tn[he]=tn[Ze]=tn[Ne]=tn[xe]=tn[ae]=tn[Je]=tn[Le]=tn[qe]=tn[Dt]=tn[Rt]=tn[Qt]=tn[Xe]=tn[mt]=tn[Qe]=tn[gt]=tn[Ke]=tn[Me]=tn[ze]=tn[rt]=!0,tn[Pt]=tn[ot]=tn[U]=!1;var lv={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},uv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},hv={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},fv={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},dv=parseFloat,pv=parseInt,Kd=typeof global=="object"&&global&&global.Object===Object&&global,mv=typeof self=="object"&&self&&self.Object===Object&&self,Sn=Kd||mv||Function("return this")(),ah=typeof Bo=="object"&&Bo&&!Bo.nodeType&&Bo,as=ah&&typeof ec=="object"&&ec&&!ec.nodeType&&ec,Qd=as&&as.exports===ah,ch=Qd&&Kd.process,fi=(function(){try{var Z=as&&as.require&&as.require("util").types;return Z||ch&&ch.binding&&ch.binding("util")}catch(ue){}})(),jd=fi&&fi.isArrayBuffer,ep=fi&&fi.isDate,tp=fi&&fi.isMap,np=fi&&fi.isRegExp,ip=fi&&fi.isSet,rp=fi&&fi.isTypedArray;function jn(Z,ue,re){switch(re.length){case 0:return Z.call(ue);case 1:return Z.call(ue,re[0]);case 2:return Z.call(ue,re[0],re[1]);case 3:return Z.call(ue,re[0],re[1],re[2])}return Z.apply(ue,re)}function gv(Z,ue,re,We){for(var xt=-1,Ht=Z==null?0:Z.length;++xt<Ht;){var _n=Z[xt];ue(We,_n,re(_n),Z)}return We}function di(Z,ue){for(var re=-1,We=Z==null?0:Z.length;++re<We&&ue(Z[re],re,Z)!==!1;);return Z}function _v(Z,ue){for(var re=Z==null?0:Z.length;re--&&ue(Z[re],re,Z)!==!1;);return Z}function sp(Z,ue){for(var re=-1,We=Z==null?0:Z.length;++re<We;)if(!ue(Z[re],re,Z))return!1;return!0}function Tr(Z,ue){for(var re=-1,We=Z==null?0:Z.length,xt=0,Ht=[];++re<We;){var _n=Z[re];ue(_n,re,Z)&&(Ht[xt++]=_n)}return Ht}function sc(Z,ue){var re=Z==null?0:Z.length;return!!re&&Ws(Z,ue,0)>-1}function lh(Z,ue,re){for(var We=-1,xt=Z==null?0:Z.length;++We<xt;)if(re(ue,Z[We]))return!0;return!1}function on(Z,ue){for(var re=-1,We=Z==null?0:Z.length,xt=Array(We);++re<We;)xt[re]=ue(Z[re],re,Z);return xt}function Ar(Z,ue){for(var re=-1,We=ue.length,xt=Z.length;++re<We;)Z[xt+re]=ue[re];return Z}function uh(Z,ue,re,We){var xt=-1,Ht=Z==null?0:Z.length;for(We&&Ht&&(re=Z[++xt]);++xt<Ht;)re=ue(re,Z[xt],xt,Z);return re}function vv(Z,ue,re,We){var xt=Z==null?0:Z.length;for(We&&xt&&(re=Z[--xt]);xt--;)re=ue(re,Z[xt],xt,Z);return re}function hh(Z,ue){for(var re=-1,We=Z==null?0:Z.length;++re<We;)if(ue(Z[re],re,Z))return!0;return!1}var xv=fh("length");function yv(Z){return Z.split("")}function Sv(Z){return Z.match(Vs)||[]}function op(Z,ue,re){var We;return re(Z,function(xt,Ht,_n){if(ue(xt,Ht,_n))return We=Ht,!1}),We}function oc(Z,ue,re,We){for(var xt=Z.length,Ht=re+(We?1:-1);We?Ht--:++Ht<xt;)if(ue(Z[Ht],Ht,Z))return Ht;return-1}function Ws(Z,ue,re){return ue===ue?Dv(Z,ue,re):oc(Z,ap,re)}function Mv(Z,ue,re,We){for(var xt=re-1,Ht=Z.length;++xt<Ht;)if(We(Z[xt],ue))return xt;return-1}function ap(Z){return Z!==Z}function cp(Z,ue){var re=Z==null?0:Z.length;return re?ph(Z,ue)/re:se}function fh(Z){return function(ue){return ue==null?i:ue[Z]}}function dh(Z){return function(ue){return Z==null?i:Z[ue]}}function lp(Z,ue,re,We,xt){return xt(Z,function(Ht,_n,en){re=We?(We=!1,Ht):ue(re,Ht,_n,en)}),re}function bv(Z,ue){var re=Z.length;for(Z.sort(ue);re--;)Z[re]=Z[re].value;return Z}function ph(Z,ue){for(var re,We=-1,xt=Z.length;++We<xt;){var Ht=ue(Z[We]);Ht!==i&&(re=re===i?Ht:re+Ht)}return re}function mh(Z,ue){for(var re=-1,We=Array(Z);++re<Z;)We[re]=ue(re);return We}function wv(Z,ue){return on(ue,function(re){return[re,Z[re]]})}function up(Z){return Z&&Z.slice(0,pp(Z)+1).replace(Sr,"")}function ei(Z){return function(ue){return Z(ue)}}function gh(Z,ue){return on(ue,function(re){return Z[re]})}function qo(Z,ue){return Z.has(ue)}function hp(Z,ue){for(var re=-1,We=Z.length;++re<We&&Ws(ue,Z[re],0)>-1;);return re}function fp(Z,ue){for(var re=Z.length;re--&&Ws(ue,Z[re],0)>-1;);return re}function Ev(Z,ue){for(var re=Z.length,We=0;re--;)Z[re]===ue&&++We;return We}var Tv=dh(lv),Av=dh(uv);function Cv(Z){return"\\"+fv[Z]}function Rv(Z,ue){return Z==null?i:Z[ue]}function Xs(Z){return sv.test(Z)}function Iv(Z){return ov.test(Z)}function Pv(Z){for(var ue,re=[];!(ue=Z.next()).done;)re.push(ue.value);return re}function _h(Z){var ue=-1,re=Array(Z.size);return Z.forEach(function(We,xt){re[++ue]=[xt,We]}),re}function dp(Z,ue){return function(re){return Z(ue(re))}}function Cr(Z,ue){for(var re=-1,We=Z.length,xt=0,Ht=[];++re<We;){var _n=Z[re];(_n===ue||_n===h)&&(Z[re]=h,Ht[xt++]=re)}return Ht}function ac(Z){var ue=-1,re=Array(Z.size);return Z.forEach(function(We){re[++ue]=We}),re}function Lv(Z){var ue=-1,re=Array(Z.size);return Z.forEach(function(We){re[++ue]=[We,We]}),re}function Dv(Z,ue,re){for(var We=re-1,xt=Z.length;++We<xt;)if(Z[We]===ue)return We;return-1}function Uv(Z,ue,re){for(var We=re+1;We--;)if(Z[We]===ue)return We;return We}function qs(Z){return Xs(Z)?Fv(Z):xv(Z)}function Ci(Z){return Xs(Z)?Ov(Z):yv(Z)}function pp(Z){for(var ue=Z.length;ue--&&zs.test(Z.charAt(ue)););return ue}var Nv=dh(hv);function Fv(Z){for(var ue=oh.lastIndex=0;oh.test(Z);)++ue;return ue}function Ov(Z){return Z.match(oh)||[]}function Bv(Z){return Z.match(rv)||[]}var zv=function Z(ue){ue=ue==null?Sn:Rr.defaults(Sn.Object(),ue,Rr.pick(Sn,av));var re=ue.Array,We=ue.Date,xt=ue.Error,Ht=ue.Function,_n=ue.Math,en=ue.Object,vh=ue.RegExp,Vv=ue.String,pi=ue.TypeError,cc=re.prototype,Gv=Ht.prototype,Ys=en.prototype,lc=ue["__core-js_shared__"],uc=Gv.toString,Wt=Ys.hasOwnProperty,Hv=0,mp=(function(){var r=/[^.]+$/.exec(lc&&lc.keys&&lc.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})(),hc=Ys.toString,kv=uc.call(en),Wv=Sn._,Xv=vh("^"+uc.call(Wt).replace(En,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),fc=Qd?ue.Buffer:i,Ir=ue.Symbol,dc=ue.Uint8Array,gp=fc?fc.allocUnsafe:i,pc=dp(en.getPrototypeOf,en),_p=en.create,vp=Ys.propertyIsEnumerable,mc=cc.splice,xp=Ir?Ir.isConcatSpreadable:i,Yo=Ir?Ir.iterator:i,cs=Ir?Ir.toStringTag:i,gc=(function(){try{var r=ds(en,"defineProperty");return r({},"",{}),r}catch(o){}})(),qv=ue.clearTimeout!==Sn.clearTimeout&&ue.clearTimeout,Yv=We&&We.now!==Sn.Date.now&&We.now,$v=ue.setTimeout!==Sn.setTimeout&&ue.setTimeout,_c=_n.ceil,vc=_n.floor,xh=en.getOwnPropertySymbols,Zv=fc?fc.isBuffer:i,yp=ue.isFinite,Jv=cc.join,Kv=dp(en.keys,en),vn=_n.max,Ln=_n.min,Qv=We.now,jv=ue.parseInt,Sp=_n.random,ex=cc.reverse,yh=ds(ue,"DataView"),$o=ds(ue,"Map"),Sh=ds(ue,"Promise"),$s=ds(ue,"Set"),Zo=ds(ue,"WeakMap"),Jo=ds(en,"create"),xc=Zo&&new Zo,Zs={},tx=ps(yh),nx=ps($o),ix=ps(Sh),rx=ps($s),sx=ps(Zo),yc=Ir?Ir.prototype:i,Ko=yc?yc.valueOf:i,Mp=yc?yc.toString:i;function E(r){if(ln(r)&&!bt(r)&&!(r instanceof Ft)){if(r instanceof mi)return r;if(Wt.call(r,"__wrapped__"))return bm(r)}return new mi(r)}var Js=(function(){function r(){}return function(o){if(!cn(o))return{};if(_p)return _p(o);r.prototype=o;var l=new r;return r.prototype=i,l}})();function Sc(){}function mi(r,o){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=i}E.templateSettings={escape:Ce,evaluate:ve,interpolate:Ye,variable:"",imports:{_:E}},E.prototype=Sc.prototype,E.prototype.constructor=E,mi.prototype=Js(Sc.prototype),mi.prototype.constructor=mi;function Ft(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Re,this.__views__=[]}function ox(){var r=new Ft(this.__wrapped__);return r.__actions__=Yn(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Yn(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Yn(this.__views__),r}function ax(){if(this.__filtered__){var r=new Ft(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function cx(){var r=this.__wrapped__.value(),o=this.__dir__,l=bt(r),p=o<0,y=l?r.length:0,R=yy(0,y,this.__views__),N=R.start,W=R.end,Q=W-N,ge=p?W:N-1,_e=this.__iteratees__,be=_e.length,Be=0,je=Ln(Q,this.__takeCount__);if(!l||!p&&y==Q&&je==Q)return qp(r,this.__actions__);var ft=[];e:for(;Q--&&Be<je;){ge+=o;for(var At=-1,dt=r[ge];++At<be;){var Ut=_e[At],Ot=Ut.iteratee,ii=Ut.type,Hn=Ot(dt);if(ii==ee)dt=Hn;else if(!Hn){if(ii==ne)continue e;break e}}ft[Be++]=dt}return ft}Ft.prototype=Js(Sc.prototype),Ft.prototype.constructor=Ft;function ls(r){var o=-1,l=r==null?0:r.length;for(this.clear();++o<l;){var p=r[o];this.set(p[0],p[1])}}function lx(){this.__data__=Jo?Jo(null):{},this.size=0}function ux(r){var o=this.has(r)&&delete this.__data__[r];return this.size-=o?1:0,o}function hx(r){var o=this.__data__;if(Jo){var l=o[r];return l===c?i:l}return Wt.call(o,r)?o[r]:i}function fx(r){var o=this.__data__;return Jo?o[r]!==i:Wt.call(o,r)}function dx(r,o){var l=this.__data__;return this.size+=this.has(r)?0:1,l[r]=Jo&&o===i?c:o,this}ls.prototype.clear=lx,ls.prototype.delete=ux,ls.prototype.get=hx,ls.prototype.has=fx,ls.prototype.set=dx;function tr(r){var o=-1,l=r==null?0:r.length;for(this.clear();++o<l;){var p=r[o];this.set(p[0],p[1])}}function px(){this.__data__=[],this.size=0}function mx(r){var o=this.__data__,l=Mc(o,r);if(l<0)return!1;var p=o.length-1;return l==p?o.pop():mc.call(o,l,1),--this.size,!0}function gx(r){var o=this.__data__,l=Mc(o,r);return l<0?i:o[l][1]}function _x(r){return Mc(this.__data__,r)>-1}function vx(r,o){var l=this.__data__,p=Mc(l,r);return p<0?(++this.size,l.push([r,o])):l[p][1]=o,this}tr.prototype.clear=px,tr.prototype.delete=mx,tr.prototype.get=gx,tr.prototype.has=_x,tr.prototype.set=vx;function nr(r){var o=-1,l=r==null?0:r.length;for(this.clear();++o<l;){var p=r[o];this.set(p[0],p[1])}}function xx(){this.size=0,this.__data__={hash:new ls,map:new($o||tr),string:new ls}}function yx(r){var o=Uc(this,r).delete(r);return this.size-=o?1:0,o}function Sx(r){return Uc(this,r).get(r)}function Mx(r){return Uc(this,r).has(r)}function bx(r,o){var l=Uc(this,r),p=l.size;return l.set(r,o),this.size+=l.size==p?0:1,this}nr.prototype.clear=xx,nr.prototype.delete=yx,nr.prototype.get=Sx,nr.prototype.has=Mx,nr.prototype.set=bx;function us(r){var o=-1,l=r==null?0:r.length;for(this.__data__=new nr;++o<l;)this.add(r[o])}function wx(r){return this.__data__.set(r,c),this}function Ex(r){return this.__data__.has(r)}us.prototype.add=us.prototype.push=wx,us.prototype.has=Ex;function Ri(r){var o=this.__data__=new tr(r);this.size=o.size}function Tx(){this.__data__=new tr,this.size=0}function Ax(r){var o=this.__data__,l=o.delete(r);return this.size=o.size,l}function Cx(r){return this.__data__.get(r)}function Rx(r){return this.__data__.has(r)}function Ix(r,o){var l=this.__data__;if(l instanceof tr){var p=l.__data__;if(!$o||p.length<t-1)return p.push([r,o]),this.size=++l.size,this;l=this.__data__=new nr(p)}return l.set(r,o),this.size=l.size,this}Ri.prototype.clear=Tx,Ri.prototype.delete=Ax,Ri.prototype.get=Cx,Ri.prototype.has=Rx,Ri.prototype.set=Ix;function bp(r,o){var l=bt(r),p=!l&&ms(r),y=!l&&!p&&Nr(r),R=!l&&!p&&!y&&eo(r),N=l||p||y||R,W=N?mh(r.length,Vv):[],Q=W.length;for(var ge in r)(o||Wt.call(r,ge))&&!(N&&(ge=="length"||y&&(ge=="offset"||ge=="parent")||R&&(ge=="buffer"||ge=="byteLength"||ge=="byteOffset")||or(ge,Q)))&&W.push(ge);return W}function wp(r){var o=r.length;return o?r[Lh(0,o-1)]:i}function Px(r,o){return Nc(Yn(r),hs(o,0,r.length))}function Lx(r){return Nc(Yn(r))}function Mh(r,o,l){(l!==i&&!Ii(r[o],l)||l===i&&!(o in r))&&ir(r,o,l)}function Qo(r,o,l){var p=r[o];(!(Wt.call(r,o)&&Ii(p,l))||l===i&&!(o in r))&&ir(r,o,l)}function Mc(r,o){for(var l=r.length;l--;)if(Ii(r[l][0],o))return l;return-1}function Dx(r,o,l,p){return Pr(r,function(y,R,N){o(p,y,l(y),N)}),p}function Ep(r,o){return r&&Gi(o,Mn(o),r)}function Ux(r,o){return r&&Gi(o,Zn(o),r)}function ir(r,o,l){o=="__proto__"&&gc?gc(r,o,{configurable:!0,enumerable:!0,value:l,writable:!0}):r[o]=l}function bh(r,o){for(var l=-1,p=o.length,y=re(p),R=r==null;++l<p;)y[l]=R?i:rf(r,o[l]);return y}function hs(r,o,l){return r===r&&(l!==i&&(r=r<=l?r:l),o!==i&&(r=r>=o?r:o)),r}function gi(r,o,l,p,y,R){var N,W=o&f,Q=o&d,ge=o&g;if(l&&(N=y?l(r,p,y,R):l(r)),N!==i)return N;if(!cn(r))return r;var _e=bt(r);if(_e){if(N=My(r),!W)return Yn(r,N)}else{var be=Dn(r),Be=be==ot||be==Jt;if(Nr(r))return Zp(r,W);if(be==Qt||be==Lt||Be&&!y){if(N=Q||Be?{}:pm(r),!W)return Q?hy(r,Ux(N,r)):uy(r,Ep(N,r))}else{if(!tn[be])return y?r:{};N=by(r,be,W)}}R||(R=new Ri);var je=R.get(r);if(je)return je;R.set(r,N),km(r)?r.forEach(function(dt){N.add(gi(dt,o,l,dt,r,R))}):Gm(r)&&r.forEach(function(dt,Ut){N.set(Ut,gi(dt,o,l,Ut,r,R))});var ft=ge?Q?kh:Hh:Q?Zn:Mn,At=_e?i:ft(r);return di(At||r,function(dt,Ut){At&&(Ut=dt,dt=r[Ut]),Qo(N,Ut,gi(dt,o,l,Ut,r,R))}),N}function Nx(r){var o=Mn(r);return function(l){return Tp(l,r,o)}}function Tp(r,o,l){var p=l.length;if(r==null)return!p;for(r=en(r);p--;){var y=l[p],R=o[y],N=r[y];if(N===i&&!(y in r)||!R(N))return!1}return!0}function Ap(r,o,l){if(typeof r!="function")throw new pi(s);return sa(function(){r.apply(i,l)},o)}function jo(r,o,l,p){var y=-1,R=sc,N=!0,W=r.length,Q=[],ge=o.length;if(!W)return Q;l&&(o=on(o,ei(l))),p?(R=lh,N=!1):o.length>=t&&(R=qo,N=!1,o=new us(o));e:for(;++y<W;){var _e=r[y],be=l==null?_e:l(_e);if(_e=p||_e!==0?_e:0,N&&be===be){for(var Be=ge;Be--;)if(o[Be]===be)continue e;Q.push(_e)}else R(o,be,p)||Q.push(_e)}return Q}var Pr=em(Vi),Cp=em(Eh,!0);function Fx(r,o){var l=!0;return Pr(r,function(p,y,R){return l=!!o(p,y,R),l}),l}function bc(r,o,l){for(var p=-1,y=r.length;++p<y;){var R=r[p],N=o(R);if(N!=null&&(W===i?N===N&&!ni(N):l(N,W)))var W=N,Q=R}return Q}function Ox(r,o,l,p){var y=r.length;for(l=Et(l),l<0&&(l=-l>y?0:y+l),p=p===i||p>y?y:Et(p),p<0&&(p+=y),p=l>p?0:Xm(p);l<p;)r[l++]=o;return r}function Rp(r,o){var l=[];return Pr(r,function(p,y,R){o(p,y,R)&&l.push(p)}),l}function Tn(r,o,l,p,y){var R=-1,N=r.length;for(l||(l=Ey),y||(y=[]);++R<N;){var W=r[R];o>0&&l(W)?o>1?Tn(W,o-1,l,p,y):Ar(y,W):p||(y[y.length]=W)}return y}var wh=tm(),Ip=tm(!0);function Vi(r,o){return r&&wh(r,o,Mn)}function Eh(r,o){return r&&Ip(r,o,Mn)}function wc(r,o){return Tr(o,function(l){return ar(r[l])})}function fs(r,o){o=Dr(o,r);for(var l=0,p=o.length;r!=null&&l<p;)r=r[Hi(o[l++])];return l&&l==p?r:i}function Pp(r,o,l){var p=o(r);return bt(r)?p:Ar(p,l(r))}function Vn(r){return r==null?r===i?nn:H:cs&&cs in en(r)?xy(r):Ly(r)}function Th(r,o){return r>o}function Bx(r,o){return r!=null&&Wt.call(r,o)}function zx(r,o){return r!=null&&o in en(r)}function Vx(r,o,l){return r>=Ln(o,l)&&r<vn(o,l)}function Ah(r,o,l){for(var p=l?lh:sc,y=r[0].length,R=r.length,N=R,W=re(R),Q=1/0,ge=[];N--;){var _e=r[N];N&&o&&(_e=on(_e,ei(o))),Q=Ln(_e.length,Q),W[N]=!l&&(o||y>=120&&_e.length>=120)?new us(N&&_e):i}_e=r[0];var be=-1,Be=W[0];e:for(;++be<y&&ge.length<Q;){var je=_e[be],ft=o?o(je):je;if(je=l||je!==0?je:0,!(Be?qo(Be,ft):p(ge,ft,l))){for(N=R;--N;){var At=W[N];if(!(At?qo(At,ft):p(r[N],ft,l)))continue e}Be&&Be.push(ft),ge.push(je)}}return ge}function Gx(r,o,l,p){return Vi(r,function(y,R,N){o(p,l(y),R,N)}),p}function ea(r,o,l){o=Dr(o,r),r=vm(r,o);var p=r==null?r:r[Hi(vi(o))];return p==null?i:jn(p,r,l)}function Lp(r){return ln(r)&&Vn(r)==Lt}function Hx(r){return ln(r)&&Vn(r)==j}function kx(r){return ln(r)&&Vn(r)==Ne}function ta(r,o,l,p,y){return r===o?!0:r==null||o==null||!ln(r)&&!ln(o)?r!==r&&o!==o:Wx(r,o,l,p,ta,y)}function Wx(r,o,l,p,y,R){var N=bt(r),W=bt(o),Q=N?de:Dn(r),ge=W?de:Dn(o);Q=Q==Lt?Qt:Q,ge=ge==Lt?Qt:ge;var _e=Q==Qt,be=ge==Qt,Be=Q==ge;if(Be&&Nr(r)){if(!Nr(o))return!1;N=!0,_e=!1}if(Be&&!_e)return R||(R=new Ri),N||eo(r)?hm(r,o,l,p,y,R):_y(r,o,Q,l,p,y,R);if(!(l&m)){var je=_e&&Wt.call(r,"__wrapped__"),ft=be&&Wt.call(o,"__wrapped__");if(je||ft){var At=je?r.value():r,dt=ft?o.value():o;return R||(R=new Ri),y(At,dt,l,p,R)}}return Be?(R||(R=new Ri),vy(r,o,l,p,y,R)):!1}function Xx(r){return ln(r)&&Dn(r)==Dt}function Ch(r,o,l,p){var y=l.length,R=y,N=!p;if(r==null)return!R;for(r=en(r);y--;){var W=l[y];if(N&&W[2]?W[1]!==r[W[0]]:!(W[0]in r))return!1}for(;++y<R;){W=l[y];var Q=W[0],ge=r[Q],_e=W[1];if(N&&W[2]){if(ge===i&&!(Q in r))return!1}else{var be=new Ri;if(p)var Be=p(ge,_e,Q,r,o,be);if(!(Be===i?ta(_e,ge,m|_,p,be):Be))return!1}}return!0}function Dp(r){if(!cn(r)||Ay(r))return!1;var o=ar(r)?Xv:Go;return o.test(ps(r))}function qx(r){return ln(r)&&Vn(r)==Xe}function Yx(r){return ln(r)&&Dn(r)==mt}function $x(r){return ln(r)&&Gc(r.length)&&!!rn[Vn(r)]}function Up(r){return typeof r=="function"?r:r==null?Jn:typeof r=="object"?bt(r)?Op(r[0],r[1]):Fp(r):ng(r)}function Rh(r){if(!ra(r))return Kv(r);var o=[];for(var l in en(r))Wt.call(r,l)&&l!="constructor"&&o.push(l);return o}function Zx(r){if(!cn(r))return Py(r);var o=ra(r),l=[];for(var p in r)p=="constructor"&&(o||!Wt.call(r,p))||l.push(p);return l}function Ih(r,o){return r<o}function Np(r,o){var l=-1,p=$n(r)?re(r.length):[];return Pr(r,function(y,R,N){p[++l]=o(y,R,N)}),p}function Fp(r){var o=Xh(r);return o.length==1&&o[0][2]?gm(o[0][0],o[0][1]):function(l){return l===r||Ch(l,r,o)}}function Op(r,o){return Yh(r)&&mm(o)?gm(Hi(r),o):function(l){var p=rf(l,r);return p===i&&p===o?sf(l,r):ta(o,p,m|_)}}function Ec(r,o,l,p,y){r!==o&&wh(o,function(R,N){if(y||(y=new Ri),cn(R))Jx(r,o,N,l,Ec,p,y);else{var W=p?p(Zh(r,N),R,N+"",r,o,y):i;W===i&&(W=R),Mh(r,N,W)}},Zn)}function Jx(r,o,l,p,y,R,N){var W=Zh(r,l),Q=Zh(o,l),ge=N.get(Q);if(ge){Mh(r,l,ge);return}var _e=R?R(W,Q,l+"",r,o,N):i,be=_e===i;if(be){var Be=bt(Q),je=!Be&&Nr(Q),ft=!Be&&!je&&eo(Q);_e=Q,Be||je||ft?bt(W)?_e=W:dn(W)?_e=Yn(W):je?(be=!1,_e=Zp(Q,!0)):ft?(be=!1,_e=Jp(Q,!0)):_e=[]:oa(Q)||ms(Q)?(_e=W,ms(W)?_e=qm(W):(!cn(W)||ar(W))&&(_e=pm(Q))):be=!1}be&&(N.set(Q,_e),y(_e,Q,p,R,N),N.delete(Q)),Mh(r,l,_e)}function Bp(r,o){var l=r.length;if(l)return o+=o<0?l:0,or(o,l)?r[o]:i}function zp(r,o,l){o.length?o=on(o,function(R){return bt(R)?function(N){return fs(N,R.length===1?R[0]:R)}:R}):o=[Jn];var p=-1;o=on(o,ei(ut()));var y=Np(r,function(R,N,W){var Q=on(o,function(ge){return ge(R)});return{criteria:Q,index:++p,value:R}});return bv(y,function(R,N){return ly(R,N,l)})}function Kx(r,o){return Vp(r,o,function(l,p){return sf(r,p)})}function Vp(r,o,l){for(var p=-1,y=o.length,R={};++p<y;){var N=o[p],W=fs(r,N);l(W,N)&&na(R,Dr(N,r),W)}return R}function Qx(r){return function(o){return fs(o,r)}}function Ph(r,o,l,p){var y=p?Mv:Ws,R=-1,N=o.length,W=r;for(r===o&&(o=Yn(o)),l&&(W=on(r,ei(l)));++R<N;)for(var Q=0,ge=o[R],_e=l?l(ge):ge;(Q=y(W,_e,Q,p))>-1;)W!==r&&mc.call(W,Q,1),mc.call(r,Q,1);return r}function Gp(r,o){for(var l=r?o.length:0,p=l-1;l--;){var y=o[l];if(l==p||y!==R){var R=y;or(y)?mc.call(r,y,1):Nh(r,y)}}return r}function Lh(r,o){return r+vc(Sp()*(o-r+1))}function jx(r,o,l,p){for(var y=-1,R=vn(_c((o-r)/(l||1)),0),N=re(R);R--;)N[p?R:++y]=r,r+=l;return N}function Dh(r,o){var l="";if(!r||o<1||o>oe)return l;do o%2&&(l+=r),o=vc(o/2),o&&(r+=r);while(o);return l}function It(r,o){return Jh(_m(r,o,Jn),r+"")}function ey(r){return wp(to(r))}function ty(r,o){var l=to(r);return Nc(l,hs(o,0,l.length))}function na(r,o,l,p){if(!cn(r))return r;o=Dr(o,r);for(var y=-1,R=o.length,N=R-1,W=r;W!=null&&++y<R;){var Q=Hi(o[y]),ge=l;if(Q==="__proto__"||Q==="constructor"||Q==="prototype")return r;if(y!=N){var _e=W[Q];ge=p?p(_e,Q,W):i,ge===i&&(ge=cn(_e)?_e:or(o[y+1])?[]:{})}Qo(W,Q,ge),W=W[Q]}return r}var Hp=xc?function(r,o){return xc.set(r,o),r}:Jn,ny=gc?function(r,o){return gc(r,"toString",{configurable:!0,enumerable:!1,value:af(o),writable:!0})}:Jn;function iy(r){return Nc(to(r))}function _i(r,o,l){var p=-1,y=r.length;o<0&&(o=-o>y?0:y+o),l=l>y?y:l,l<0&&(l+=y),y=o>l?0:l-o>>>0,o>>>=0;for(var R=re(y);++p<y;)R[p]=r[p+o];return R}function ry(r,o){var l;return Pr(r,function(p,y,R){return l=o(p,y,R),!l}),!!l}function Tc(r,o,l){var p=0,y=r==null?p:r.length;if(typeof o=="number"&&o===o&&y<=nt){for(;p<y;){var R=p+y>>>1,N=r[R];N!==null&&!ni(N)&&(l?N<=o:N<o)?p=R+1:y=R}return y}return Uh(r,o,Jn,l)}function Uh(r,o,l,p){var y=0,R=r==null?0:r.length;if(R===0)return 0;o=l(o);for(var N=o!==o,W=o===null,Q=ni(o),ge=o===i;y<R;){var _e=vc((y+R)/2),be=l(r[_e]),Be=be!==i,je=be===null,ft=be===be,At=ni(be);if(N)var dt=p||ft;else ge?dt=ft&&(p||Be):W?dt=ft&&Be&&(p||!je):Q?dt=ft&&Be&&!je&&(p||!At):je||At?dt=!1:dt=p?be<=o:be<o;dt?y=_e+1:R=_e}return Ln(R,He)}function kp(r,o){for(var l=-1,p=r.length,y=0,R=[];++l<p;){var N=r[l],W=o?o(N):N;if(!l||!Ii(W,Q)){var Q=W;R[y++]=N===0?0:N}}return R}function Wp(r){return typeof r=="number"?r:ni(r)?se:+r}function ti(r){if(typeof r=="string")return r;if(bt(r))return on(r,ti)+"";if(ni(r))return Mp?Mp.call(r):"";var o=r+"";return o=="0"&&1/r==-fe?"-0":o}function Lr(r,o,l){var p=-1,y=sc,R=r.length,N=!0,W=[],Q=W;if(l)N=!1,y=lh;else if(R>=t){var ge=o?null:my(r);if(ge)return ac(ge);N=!1,y=qo,Q=new us}else Q=o?[]:W;e:for(;++p<R;){var _e=r[p],be=o?o(_e):_e;if(_e=l||_e!==0?_e:0,N&&be===be){for(var Be=Q.length;Be--;)if(Q[Be]===be)continue e;o&&Q.push(be),W.push(_e)}else y(Q,be,l)||(Q!==W&&Q.push(be),W.push(_e))}return W}function Nh(r,o){o=Dr(o,r);var l=-1,p=o.length;if(!p)return!0;for(var y=r==null||typeof r!="object"&&typeof r!="function";++l<p;){var R=o[l];if(typeof R=="string"){if(R==="__proto__"&&!Wt.call(r,"__proto__"))return!1;if(R==="constructor"&&l+1<p&&typeof o[l+1]=="string"&&o[l+1]==="prototype"){if(y&&l===0)continue;return!1}}}var N=vm(r,o);return N==null||delete N[Hi(vi(o))]}function Xp(r,o,l,p){return na(r,o,l(fs(r,o)),p)}function Ac(r,o,l,p){for(var y=r.length,R=p?y:-1;(p?R--:++R<y)&&o(r[R],R,r););return l?_i(r,p?0:R,p?R+1:y):_i(r,p?R+1:0,p?y:R)}function qp(r,o){var l=r;return l instanceof Ft&&(l=l.value()),uh(o,function(p,y){return y.func.apply(y.thisArg,Ar([p],y.args))},l)}function Fh(r,o,l){var p=r.length;if(p<2)return p?Lr(r[0]):[];for(var y=-1,R=re(p);++y<p;)for(var N=r[y],W=-1;++W<p;)W!=y&&(R[y]=jo(R[y]||N,r[W],o,l));return Lr(Tn(R,1),o,l)}function Yp(r,o,l){for(var p=-1,y=r.length,R=o.length,N={};++p<y;){var W=p<R?o[p]:i;l(N,r[p],W)}return N}function Oh(r){return dn(r)?r:[]}function Bh(r){return typeof r=="function"?r:Jn}function Dr(r,o){return bt(r)?r:Yh(r,o)?[r]:Mm(Xt(r))}var sy=It;function Ur(r,o,l){var p=r.length;return l=l===i?p:l,!o&&l>=p?r:_i(r,o,l)}var $p=qv||function(r){return Sn.clearTimeout(r)};function Zp(r,o){if(o)return r.slice();var l=r.length,p=gp?gp(l):new r.constructor(l);return r.copy(p),p}function zh(r){var o=new r.constructor(r.byteLength);return new dc(o).set(new dc(r)),o}function oy(r,o){var l=o?zh(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.byteLength)}function ay(r){var o=new r.constructor(r.source,os.exec(r));return o.lastIndex=r.lastIndex,o}function cy(r){return Ko?en(Ko.call(r)):{}}function Jp(r,o){var l=o?zh(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.length)}function Kp(r,o){if(r!==o){var l=r!==i,p=r===null,y=r===r,R=ni(r),N=o!==i,W=o===null,Q=o===o,ge=ni(o);if(!W&&!ge&&!R&&r>o||R&&N&&Q&&!W&&!ge||p&&N&&Q||!l&&Q||!y)return 1;if(!p&&!R&&!ge&&r<o||ge&&l&&y&&!p&&!R||W&&l&&y||!N&&y||!Q)return-1}return 0}function ly(r,o,l){for(var p=-1,y=r.criteria,R=o.criteria,N=y.length,W=l.length;++p<N;){var Q=Kp(y[p],R[p]);if(Q){if(p>=W)return Q;var ge=l[p];return Q*(ge=="desc"?-1:1)}}return r.index-o.index}function Qp(r,o,l,p){for(var y=-1,R=r.length,N=l.length,W=-1,Q=o.length,ge=vn(R-N,0),_e=re(Q+ge),be=!p;++W<Q;)_e[W]=o[W];for(;++y<N;)(be||y<R)&&(_e[l[y]]=r[y]);for(;ge--;)_e[W++]=r[y++];return _e}function jp(r,o,l,p){for(var y=-1,R=r.length,N=-1,W=l.length,Q=-1,ge=o.length,_e=vn(R-W,0),be=re(_e+ge),Be=!p;++y<_e;)be[y]=r[y];for(var je=y;++Q<ge;)be[je+Q]=o[Q];for(;++N<W;)(Be||y<R)&&(be[je+l[N]]=r[y++]);return be}function Yn(r,o){var l=-1,p=r.length;for(o||(o=re(p));++l<p;)o[l]=r[l];return o}function Gi(r,o,l,p){var y=!l;l||(l={});for(var R=-1,N=o.length;++R<N;){var W=o[R],Q=p?p(l[W],r[W],W,l,r):i;Q===i&&(Q=r[W]),y?ir(l,W,Q):Qo(l,W,Q)}return l}function uy(r,o){return Gi(r,qh(r),o)}function hy(r,o){return Gi(r,fm(r),o)}function Cc(r,o){return function(l,p){var y=bt(l)?gv:Dx,R=o?o():{};return y(l,r,ut(p,2),R)}}function Ks(r){return It(function(o,l){var p=-1,y=l.length,R=y>1?l[y-1]:i,N=y>2?l[2]:i;for(R=r.length>3&&typeof R=="function"?(y--,R):i,N&&Gn(l[0],l[1],N)&&(R=y<3?i:R,y=1),o=en(o);++p<y;){var W=l[p];W&&r(o,W,p,R)}return o})}function em(r,o){return function(l,p){if(l==null)return l;if(!$n(l))return r(l,p);for(var y=l.length,R=o?y:-1,N=en(l);(o?R--:++R<y)&&p(N[R],R,N)!==!1;);return l}}function tm(r){return function(o,l,p){for(var y=-1,R=en(o),N=p(o),W=N.length;W--;){var Q=N[r?W:++y];if(l(R[Q],Q,R)===!1)break}return o}}function fy(r,o,l){var p=o&S,y=ia(r);function R(){var N=this&&this!==Sn&&this instanceof R?y:r;return N.apply(p?l:this,arguments)}return R}function nm(r){return function(o){o=Xt(o);var l=Xs(o)?Ci(o):i,p=l?l[0]:o.charAt(0),y=l?Ur(l,1).join(""):o.slice(1);return p[r]()+y}}function Qs(r){return function(o){return uh(eg(jm(o).replace(nv,"")),r,"")}}function ia(r){return function(){var o=arguments;switch(o.length){case 0:return new r;case 1:return new r(o[0]);case 2:return new r(o[0],o[1]);case 3:return new r(o[0],o[1],o[2]);case 4:return new r(o[0],o[1],o[2],o[3]);case 5:return new r(o[0],o[1],o[2],o[3],o[4]);case 6:return new r(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new r(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var l=Js(r.prototype),p=r.apply(l,o);return cn(p)?p:l}}function dy(r,o,l){var p=ia(r);function y(){for(var R=arguments.length,N=re(R),W=R,Q=js(y);W--;)N[W]=arguments[W];var ge=R<3&&N[0]!==Q&&N[R-1]!==Q?[]:Cr(N,Q);if(R-=ge.length,R<l)return am(r,o,Rc,y.placeholder,i,N,ge,i,i,l-R);var _e=this&&this!==Sn&&this instanceof y?p:r;return jn(_e,this,N)}return y}function im(r){return function(o,l,p){var y=en(o);if(!$n(o)){var R=ut(l,3);o=Mn(o),l=function(W){return R(y[W],W,y)}}var N=r(o,l,p);return N>-1?y[R?o[N]:N]:i}}function rm(r){return sr(function(o){var l=o.length,p=l,y=mi.prototype.thru;for(r&&o.reverse();p--;){var R=o[p];if(typeof R!="function")throw new pi(s);if(y&&!N&&Dc(R)=="wrapper")var N=new mi([],!0)}for(p=N?p:l;++p<l;){R=o[p];var W=Dc(R),Q=W=="wrapper"?Wh(R):i;Q&&$h(Q[0])&&Q[1]==(Y|v|L|D)&&!Q[4].length&&Q[9]==1?N=N[Dc(Q[0])].apply(N,Q[3]):N=R.length==1&&$h(R)?N[W]():N.thru(R)}return function(){var ge=arguments,_e=ge[0];if(N&&ge.length==1&&bt(_e))return N.plant(_e).value();for(var be=0,Be=l?o[be].apply(this,ge):_e;++be<l;)Be=o[be].call(this,Be);return Be}})}function Rc(r,o,l,p,y,R,N,W,Q,ge){var _e=o&Y,be=o&S,Be=o&M,je=o&(v|B),ft=o&O,At=Be?i:ia(r);function dt(){for(var Ut=arguments.length,Ot=re(Ut),ii=Ut;ii--;)Ot[ii]=arguments[ii];if(je)var Hn=js(dt),ri=Ev(Ot,Hn);if(p&&(Ot=Qp(Ot,p,y,je)),R&&(Ot=jp(Ot,R,N,je)),Ut-=ri,je&&Ut<ge){var pn=Cr(Ot,Hn);return am(r,o,Rc,dt.placeholder,l,Ot,pn,W,Q,ge-Ut)}var Pi=be?l:this,lr=Be?Pi[r]:r;return Ut=Ot.length,W?Ot=Dy(Ot,W):ft&&Ut>1&&Ot.reverse(),_e&&Q<Ut&&(Ot.length=Q),this&&this!==Sn&&this instanceof dt&&(lr=At||ia(lr)),lr.apply(Pi,Ot)}return dt}function sm(r,o){return function(l,p){return Gx(l,r,o(p),{})}}function Ic(r,o){return function(l,p){var y;if(l===i&&p===i)return o;if(l!==i&&(y=l),p!==i){if(y===i)return p;typeof l=="string"||typeof p=="string"?(l=ti(l),p=ti(p)):(l=Wp(l),p=Wp(p)),y=r(l,p)}return y}}function Vh(r){return sr(function(o){return o=on(o,ei(ut())),It(function(l){var p=this;return r(o,function(y){return jn(y,p,l)})})})}function Pc(r,o){o=o===i?" ":ti(o);var l=o.length;if(l<2)return l?Dh(o,r):o;var p=Dh(o,_c(r/qs(o)));return Xs(o)?Ur(Ci(p),0,r).join(""):p.slice(0,r)}function py(r,o,l,p){var y=o&S,R=ia(r);function N(){for(var W=-1,Q=arguments.length,ge=-1,_e=p.length,be=re(_e+Q),Be=this&&this!==Sn&&this instanceof N?R:r;++ge<_e;)be[ge]=p[ge];for(;Q--;)be[ge++]=arguments[++W];return jn(Be,y?l:this,be)}return N}function om(r){return function(o,l,p){return p&&typeof p!="number"&&Gn(o,l,p)&&(l=p=i),o=cr(o),l===i?(l=o,o=0):l=cr(l),p=p===i?o<l?1:-1:cr(p),jx(o,l,p,r)}}function Lc(r){return function(o,l){return typeof o=="string"&&typeof l=="string"||(o=xi(o),l=xi(l)),r(o,l)}}function am(r,o,l,p,y,R,N,W,Q,ge){var _e=o&v,be=_e?N:i,Be=_e?i:N,je=_e?R:i,ft=_e?i:R;o|=_e?L:P,o&=~(_e?P:L),o&x||(o&=~(S|M));var At=[r,o,y,je,be,ft,Be,W,Q,ge],dt=l.apply(i,At);return $h(r)&&xm(dt,At),dt.placeholder=p,ym(dt,r,o)}function Gh(r){var o=_n[r];return function(l,p){if(l=xi(l),p=p==null?0:Ln(Et(p),292),p&&yp(l)){var y=(Xt(l)+"e").split("e"),R=o(y[0]+"e"+(+y[1]+p));return y=(Xt(R)+"e").split("e"),+(y[0]+"e"+(+y[1]-p))}return o(l)}}var my=$s&&1/ac(new $s([,-0]))[1]==fe?function(r){return new $s(r)}:uf;function cm(r){return function(o){var l=Dn(o);return l==Dt?_h(o):l==mt?Lv(o):wv(o,r(o))}}function rr(r,o,l,p,y,R,N,W){var Q=o&M;if(!Q&&typeof r!="function")throw new pi(s);var ge=p?p.length:0;if(ge||(o&=~(L|P),p=y=i),N=N===i?N:vn(Et(N),0),W=W===i?W:Et(W),ge-=y?y.length:0,o&P){var _e=p,be=y;p=y=i}var Be=Q?i:Wh(r),je=[r,o,l,p,y,_e,be,R,N,W];if(Be&&Iy(je,Be),r=je[0],o=je[1],l=je[2],p=je[3],y=je[4],W=je[9]=je[9]===i?Q?0:r.length:vn(je[9]-ge,0),!W&&o&(v|B)&&(o&=~(v|B)),!o||o==S)var ft=fy(r,o,l);else o==v||o==B?ft=dy(r,o,W):(o==L||o==(S|L))&&!y.length?ft=py(r,o,l,p):ft=Rc.apply(i,je);var At=Be?Hp:xm;return ym(At(ft,je),r,o)}function lm(r,o,l,p){return r===i||Ii(r,Ys[l])&&!Wt.call(p,l)?o:r}function um(r,o,l,p,y,R){return cn(r)&&cn(o)&&(R.set(o,r),Ec(r,o,i,um,R),R.delete(o)),r}function gy(r){return oa(r)?i:r}function hm(r,o,l,p,y,R){var N=l&m,W=r.length,Q=o.length;if(W!=Q&&!(N&&Q>W))return!1;var ge=R.get(r),_e=R.get(o);if(ge&&_e)return ge==o&&_e==r;var be=-1,Be=!0,je=l&_?new us:i;for(R.set(r,o),R.set(o,r);++be<W;){var ft=r[be],At=o[be];if(p)var dt=N?p(At,ft,be,o,r,R):p(ft,At,be,r,o,R);if(dt!==i){if(dt)continue;Be=!1;break}if(je){if(!hh(o,function(Ut,Ot){if(!qo(je,Ot)&&(ft===Ut||y(ft,Ut,l,p,R)))return je.push(Ot)})){Be=!1;break}}else if(!(ft===At||y(ft,At,l,p,R))){Be=!1;break}}return R.delete(r),R.delete(o),Be}function _y(r,o,l,p,y,R,N){switch(l){case he:if(r.byteLength!=o.byteLength||r.byteOffset!=o.byteOffset)return!1;r=r.buffer,o=o.buffer;case j:return!(r.byteLength!=o.byteLength||!R(new dc(r),new dc(o)));case Ze:case Ne:case Rt:return Ii(+r,+o);case Pt:return r.name==o.name&&r.message==o.message;case Xe:case Qe:return r==o+"";case Dt:var W=_h;case mt:var Q=p&m;if(W||(W=ac),r.size!=o.size&&!Q)return!1;var ge=N.get(r);if(ge)return ge==o;p|=_,N.set(r,o);var _e=hm(W(r),W(o),p,y,R,N);return N.delete(r),_e;case gt:if(Ko)return Ko.call(r)==Ko.call(o)}return!1}function vy(r,o,l,p,y,R){var N=l&m,W=Hh(r),Q=W.length,ge=Hh(o),_e=ge.length;if(Q!=_e&&!N)return!1;for(var be=Q;be--;){var Be=W[be];if(!(N?Be in o:Wt.call(o,Be)))return!1}var je=R.get(r),ft=R.get(o);if(je&&ft)return je==o&&ft==r;var At=!0;R.set(r,o),R.set(o,r);for(var dt=N;++be<Q;){Be=W[be];var Ut=r[Be],Ot=o[Be];if(p)var ii=N?p(Ot,Ut,Be,o,r,R):p(Ut,Ot,Be,r,o,R);if(!(ii===i?Ut===Ot||y(Ut,Ot,l,p,R):ii)){At=!1;break}dt||(dt=Be=="constructor")}if(At&&!dt){var Hn=r.constructor,ri=o.constructor;Hn!=ri&&"constructor"in r&&"constructor"in o&&!(typeof Hn=="function"&&Hn instanceof Hn&&typeof ri=="function"&&ri instanceof ri)&&(At=!1)}return R.delete(r),R.delete(o),At}function sr(r){return Jh(_m(r,i,Tm),r+"")}function Hh(r){return Pp(r,Mn,qh)}function kh(r){return Pp(r,Zn,fm)}var Wh=xc?function(r){return xc.get(r)}:uf;function Dc(r){for(var o=r.name+"",l=Zs[o],p=Wt.call(Zs,o)?l.length:0;p--;){var y=l[p],R=y.func;if(R==null||R==r)return y.name}return o}function js(r){var o=Wt.call(E,"placeholder")?E:r;return o.placeholder}function ut(){var r=E.iteratee||cf;return r=r===cf?Up:r,arguments.length?r(arguments[0],arguments[1]):r}function Uc(r,o){var l=r.__data__;return Ty(o)?l[typeof o=="string"?"string":"hash"]:l.map}function Xh(r){for(var o=Mn(r),l=o.length;l--;){var p=o[l],y=r[p];o[l]=[p,y,mm(y)]}return o}function ds(r,o){var l=Rv(r,o);return Dp(l)?l:i}function xy(r){var o=Wt.call(r,cs),l=r[cs];try{r[cs]=i;var p=!0}catch(R){}var y=hc.call(r);return p&&(o?r[cs]=l:delete r[cs]),y}var qh=xh?function(r){return r==null?[]:(r=en(r),Tr(xh(r),function(o){return vp.call(r,o)}))}:hf,fm=xh?function(r){for(var o=[];r;)Ar(o,qh(r)),r=pc(r);return o}:hf,Dn=Vn;(yh&&Dn(new yh(new ArrayBuffer(1)))!=he||$o&&Dn(new $o)!=Dt||Sh&&Dn(Sh.resolve())!=St||$s&&Dn(new $s)!=mt||Zo&&Dn(new Zo)!=U)&&(Dn=function(r){var o=Vn(r),l=o==Qt?r.constructor:i,p=l?ps(l):"";if(p)switch(p){case tx:return he;case nx:return Dt;case ix:return St;case rx:return mt;case sx:return U}return o});function yy(r,o,l){for(var p=-1,y=l.length;++p<y;){var R=l[p],N=R.size;switch(R.type){case"drop":r+=N;break;case"dropRight":o-=N;break;case"take":o=Ln(o,r+N);break;case"takeRight":r=vn(r,o-N);break}}return{start:r,end:o}}function Sy(r){var o=r.match(rs);return o?o[1].split(ss):[]}function dm(r,o,l){o=Dr(o,r);for(var p=-1,y=o.length,R=!1;++p<y;){var N=Hi(o[p]);if(!(R=r!=null&&l(r,N)))break;r=r[N]}return R||++p!=y?R:(y=r==null?0:r.length,!!y&&Gc(y)&&or(N,y)&&(bt(r)||ms(r)))}function My(r){var o=r.length,l=new r.constructor(o);return o&&typeof r[0]=="string"&&Wt.call(r,"index")&&(l.index=r.index,l.input=r.input),l}function pm(r){return typeof r.constructor=="function"&&!ra(r)?Js(pc(r)):{}}function by(r,o,l){var p=r.constructor;switch(o){case j:return zh(r);case Ze:case Ne:return new p(+r);case he:return oy(r,l);case xe:case ae:case Je:case Le:case qe:case Ke:case Me:case ze:case rt:return Jp(r,l);case Dt:return new p;case Rt:case Qe:return new p(r);case Xe:return ay(r);case mt:return new p;case gt:return cy(r)}}function wy(r,o){var l=o.length;if(!l)return r;var p=l-1;return o[p]=(l>1?"& ":"")+o[p],o=o.join(l>2?", ":" "),r.replace(Ai,`{
/* [wrapped with `+o+`] */
`)}function Ey(r){return bt(r)||ms(r)||!!(xp&&r&&r[xp])}function or(r,o){var l=typeof r;return o=o??oe,!!o&&(l=="number"||l!="symbol"&&ko.test(r))&&r>-1&&r%1==0&&r<o}function Gn(r,o,l){if(!cn(l))return!1;var p=typeof o;return(p=="number"?$n(l)&&or(o,l.length):p=="string"&&o in l)?Ii(l[o],r):!1}function Yh(r,o){if(bt(r))return!1;var l=typeof r;return l=="number"||l=="symbol"||l=="boolean"||r==null||ni(r)?!0:Yt.test(r)||!vt.test(r)||o!=null&&r in en(o)}function Ty(r){var o=typeof r;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?r!=="__proto__":r===null}function $h(r){var o=Dc(r),l=E[o];if(typeof l!="function"||!(o in Ft.prototype))return!1;if(r===l)return!0;var p=Wh(l);return!!p&&r===p[0]}function Ay(r){return!!mp&&mp in r}var Cy=lc?ar:ff;function ra(r){var o=r&&r.constructor,l=typeof o=="function"&&o.prototype||Ys;return r===l}function mm(r){return r===r&&!cn(r)}function gm(r,o){return function(l){return l==null?!1:l[r]===o&&(o!==i||r in en(l))}}function Ry(r){var o=zc(r,function(p){return l.size===u&&l.clear(),p}),l=o.cache;return o}function Iy(r,o){var l=r[1],p=o[1],y=l|p,R=y<(S|M|Y),N=p==Y&&l==v||p==Y&&l==D&&r[7].length<=o[8]||p==(Y|D)&&o[7].length<=o[8]&&l==v;if(!(R||N))return r;p&S&&(r[2]=o[2],y|=l&S?0:x);var W=o[3];if(W){var Q=r[3];r[3]=Q?Qp(Q,W,o[4]):W,r[4]=Q?Cr(r[3],h):o[4]}return W=o[5],W&&(Q=r[5],r[5]=Q?jp(Q,W,o[6]):W,r[6]=Q?Cr(r[5],h):o[6]),W=o[7],W&&(r[7]=W),p&Y&&(r[8]=r[8]==null?o[8]:Ln(r[8],o[8])),r[9]==null&&(r[9]=o[9]),r[0]=o[0],r[1]=y,r}function Py(r){var o=[];if(r!=null)for(var l in en(r))o.push(l);return o}function Ly(r){return hc.call(r)}function _m(r,o,l){return o=vn(o===i?r.length-1:o,0),function(){for(var p=arguments,y=-1,R=vn(p.length-o,0),N=re(R);++y<R;)N[y]=p[o+y];y=-1;for(var W=re(o+1);++y<o;)W[y]=p[y];return W[o]=l(N),jn(r,this,W)}}function vm(r,o){return o.length<2?r:fs(r,_i(o,0,-1))}function Dy(r,o){for(var l=r.length,p=Ln(o.length,l),y=Yn(r);p--;){var R=o[p];r[p]=or(R,l)?y[R]:i}return r}function Zh(r,o){if(!(o==="constructor"&&typeof r[o]=="function")&&o!="__proto__")return r[o]}var xm=Sm(Hp),sa=$v||function(r,o){return Sn.setTimeout(r,o)},Jh=Sm(ny);function ym(r,o,l){var p=o+"";return Jh(r,wy(p,Uy(Sy(p),l)))}function Sm(r){var o=0,l=0;return function(){var p=Qv(),y=G-(p-l);if(l=p,y>0){if(++o>=A)return arguments[0]}else o=0;return r.apply(i,arguments)}}function Nc(r,o){var l=-1,p=r.length,y=p-1;for(o=o===i?p:o;++l<o;){var R=Lh(l,y),N=r[R];r[R]=r[l],r[l]=N}return r.length=o,r}var Mm=Ry(function(r){var o=[];return r.charCodeAt(0)===46&&o.push(""),r.replace(Bt,function(l,p,y,R){o.push(y?R.replace(Gs,"$1"):p||l)}),o});function Hi(r){if(typeof r=="string"||ni(r))return r;var o=r+"";return o=="0"&&1/r==-fe?"-0":o}function ps(r){if(r!=null){try{return uc.call(r)}catch(o){}try{return r+""}catch(o){}}return""}function Uy(r,o){return di(pt,function(l){var p="_."+l[0];o&l[1]&&!sc(r,p)&&r.push(p)}),r.sort()}function bm(r){if(r instanceof Ft)return r.clone();var o=new mi(r.__wrapped__,r.__chain__);return o.__actions__=Yn(r.__actions__),o.__index__=r.__index__,o.__values__=r.__values__,o}function Ny(r,o,l){(l?Gn(r,o,l):o===i)?o=1:o=vn(Et(o),0);var p=r==null?0:r.length;if(!p||o<1)return[];for(var y=0,R=0,N=re(_c(p/o));y<p;)N[R++]=_i(r,y,y+=o);return N}function Fy(r){for(var o=-1,l=r==null?0:r.length,p=0,y=[];++o<l;){var R=r[o];R&&(y[p++]=R)}return y}function Oy(){var r=arguments.length;if(!r)return[];for(var o=re(r-1),l=arguments[0],p=r;p--;)o[p-1]=arguments[p];return Ar(bt(l)?Yn(l):[l],Tn(o,1))}var By=It(function(r,o){return dn(r)?jo(r,Tn(o,1,dn,!0)):[]}),zy=It(function(r,o){var l=vi(o);return dn(l)&&(l=i),dn(r)?jo(r,Tn(o,1,dn,!0),ut(l,2)):[]}),Vy=It(function(r,o){var l=vi(o);return dn(l)&&(l=i),dn(r)?jo(r,Tn(o,1,dn,!0),i,l):[]});function Gy(r,o,l){var p=r==null?0:r.length;return p?(o=l||o===i?1:Et(o),_i(r,o<0?0:o,p)):[]}function Hy(r,o,l){var p=r==null?0:r.length;return p?(o=l||o===i?1:Et(o),o=p-o,_i(r,0,o<0?0:o)):[]}function ky(r,o){return r&&r.length?Ac(r,ut(o,3),!0,!0):[]}function Wy(r,o){return r&&r.length?Ac(r,ut(o,3),!0):[]}function Xy(r,o,l,p){var y=r==null?0:r.length;return y?(l&&typeof l!="number"&&Gn(r,o,l)&&(l=0,p=y),Ox(r,o,l,p)):[]}function wm(r,o,l){var p=r==null?0:r.length;if(!p)return-1;var y=l==null?0:Et(l);return y<0&&(y=vn(p+y,0)),oc(r,ut(o,3),y)}function Em(r,o,l){var p=r==null?0:r.length;if(!p)return-1;var y=p-1;return l!==i&&(y=Et(l),y=l<0?vn(p+y,0):Ln(y,p-1)),oc(r,ut(o,3),y,!0)}function Tm(r){var o=r==null?0:r.length;return o?Tn(r,1):[]}function qy(r){var o=r==null?0:r.length;return o?Tn(r,fe):[]}function Yy(r,o){var l=r==null?0:r.length;return l?(o=o===i?1:Et(o),Tn(r,o)):[]}function $y(r){for(var o=-1,l=r==null?0:r.length,p={};++o<l;){var y=r[o];p[y[0]]=y[1]}return p}function Am(r){return r&&r.length?r[0]:i}function Zy(r,o,l){var p=r==null?0:r.length;if(!p)return-1;var y=l==null?0:Et(l);return y<0&&(y=vn(p+y,0)),Ws(r,o,y)}function Jy(r){var o=r==null?0:r.length;return o?_i(r,0,-1):[]}var Ky=It(function(r){var o=on(r,Oh);return o.length&&o[0]===r[0]?Ah(o):[]}),Qy=It(function(r){var o=vi(r),l=on(r,Oh);return o===vi(l)?o=i:l.pop(),l.length&&l[0]===r[0]?Ah(l,ut(o,2)):[]}),jy=It(function(r){var o=vi(r),l=on(r,Oh);return o=typeof o=="function"?o:i,o&&l.pop(),l.length&&l[0]===r[0]?Ah(l,i,o):[]});function eS(r,o){return r==null?"":Jv.call(r,o)}function vi(r){var o=r==null?0:r.length;return o?r[o-1]:i}function tS(r,o,l){var p=r==null?0:r.length;if(!p)return-1;var y=p;return l!==i&&(y=Et(l),y=y<0?vn(p+y,0):Ln(y,p-1)),o===o?Uv(r,o,y):oc(r,ap,y,!0)}function nS(r,o){return r&&r.length?Bp(r,Et(o)):i}var iS=It(Cm);function Cm(r,o){return r&&r.length&&o&&o.length?Ph(r,o):r}function rS(r,o,l){return r&&r.length&&o&&o.length?Ph(r,o,ut(l,2)):r}function sS(r,o,l){return r&&r.length&&o&&o.length?Ph(r,o,i,l):r}var oS=sr(function(r,o){var l=r==null?0:r.length,p=bh(r,o);return Gp(r,on(o,function(y){return or(y,l)?+y:y}).sort(Kp)),p});function aS(r,o){var l=[];if(!(r&&r.length))return l;var p=-1,y=[],R=r.length;for(o=ut(o,3);++p<R;){var N=r[p];o(N,p,r)&&(l.push(N),y.push(p))}return Gp(r,y),l}function Kh(r){return r==null?r:ex.call(r)}function cS(r,o,l){var p=r==null?0:r.length;return p?(l&&typeof l!="number"&&Gn(r,o,l)?(o=0,l=p):(o=o==null?0:Et(o),l=l===i?p:Et(l)),_i(r,o,l)):[]}function lS(r,o){return Tc(r,o)}function uS(r,o,l){return Uh(r,o,ut(l,2))}function hS(r,o){var l=r==null?0:r.length;if(l){var p=Tc(r,o);if(p<l&&Ii(r[p],o))return p}return-1}function fS(r,o){return Tc(r,o,!0)}function dS(r,o,l){return Uh(r,o,ut(l,2),!0)}function pS(r,o){var l=r==null?0:r.length;if(l){var p=Tc(r,o,!0)-1;if(Ii(r[p],o))return p}return-1}function mS(r){return r&&r.length?kp(r):[]}function gS(r,o){return r&&r.length?kp(r,ut(o,2)):[]}function _S(r){var o=r==null?0:r.length;return o?_i(r,1,o):[]}function vS(r,o,l){return r&&r.length?(o=l||o===i?1:Et(o),_i(r,0,o<0?0:o)):[]}function xS(r,o,l){var p=r==null?0:r.length;return p?(o=l||o===i?1:Et(o),o=p-o,_i(r,o<0?0:o,p)):[]}function yS(r,o){return r&&r.length?Ac(r,ut(o,3),!1,!0):[]}function SS(r,o){return r&&r.length?Ac(r,ut(o,3)):[]}var MS=It(function(r){return Lr(Tn(r,1,dn,!0))}),bS=It(function(r){var o=vi(r);return dn(o)&&(o=i),Lr(Tn(r,1,dn,!0),ut(o,2))}),wS=It(function(r){var o=vi(r);return o=typeof o=="function"?o:i,Lr(Tn(r,1,dn,!0),i,o)});function ES(r){return r&&r.length?Lr(r):[]}function TS(r,o){return r&&r.length?Lr(r,ut(o,2)):[]}function AS(r,o){return o=typeof o=="function"?o:i,r&&r.length?Lr(r,i,o):[]}function Qh(r){if(!(r&&r.length))return[];var o=0;return r=Tr(r,function(l){if(dn(l))return o=vn(l.length,o),!0}),mh(o,function(l){return on(r,fh(l))})}function Rm(r,o){if(!(r&&r.length))return[];var l=Qh(r);return o==null?l:on(l,function(p){return jn(o,i,p)})}var CS=It(function(r,o){return dn(r)?jo(r,o):[]}),RS=It(function(r){return Fh(Tr(r,dn))}),IS=It(function(r){var o=vi(r);return dn(o)&&(o=i),Fh(Tr(r,dn),ut(o,2))}),PS=It(function(r){var o=vi(r);return o=typeof o=="function"?o:i,Fh(Tr(r,dn),i,o)}),LS=It(Qh);function DS(r,o){return Yp(r||[],o||[],Qo)}function US(r,o){return Yp(r||[],o||[],na)}var NS=It(function(r){var o=r.length,l=o>1?r[o-1]:i;return l=typeof l=="function"?(r.pop(),l):i,Rm(r,l)});function Im(r){var o=E(r);return o.__chain__=!0,o}function FS(r,o){return o(r),r}function Fc(r,o){return o(r)}var OS=sr(function(r){var o=r.length,l=o?r[0]:0,p=this.__wrapped__,y=function(R){return bh(R,r)};return o>1||this.__actions__.length||!(p instanceof Ft)||!or(l)?this.thru(y):(p=p.slice(l,+l+(o?1:0)),p.__actions__.push({func:Fc,args:[y],thisArg:i}),new mi(p,this.__chain__).thru(function(R){return o&&!R.length&&R.push(i),R}))});function BS(){return Im(this)}function zS(){return new mi(this.value(),this.__chain__)}function VS(){this.__values__===i&&(this.__values__=Wm(this.value()));var r=this.__index__>=this.__values__.length,o=r?i:this.__values__[this.__index__++];return{done:r,value:o}}function GS(){return this}function HS(r){for(var o,l=this;l instanceof Sc;){var p=bm(l);p.__index__=0,p.__values__=i,o?y.__wrapped__=p:o=p;var y=p;l=l.__wrapped__}return y.__wrapped__=r,o}function kS(){var r=this.__wrapped__;if(r instanceof Ft){var o=r;return this.__actions__.length&&(o=new Ft(this)),o=o.reverse(),o.__actions__.push({func:Fc,args:[Kh],thisArg:i}),new mi(o,this.__chain__)}return this.thru(Kh)}function WS(){return qp(this.__wrapped__,this.__actions__)}var XS=Cc(function(r,o,l){Wt.call(r,l)?++r[l]:ir(r,l,1)});function qS(r,o,l){var p=bt(r)?sp:Fx;return l&&Gn(r,o,l)&&(o=i),p(r,ut(o,3))}function YS(r,o){var l=bt(r)?Tr:Rp;return l(r,ut(o,3))}var $S=im(wm),ZS=im(Em);function JS(r,o){return Tn(Oc(r,o),1)}function KS(r,o){return Tn(Oc(r,o),fe)}function QS(r,o,l){return l=l===i?1:Et(l),Tn(Oc(r,o),l)}function Pm(r,o){var l=bt(r)?di:Pr;return l(r,ut(o,3))}function Lm(r,o){var l=bt(r)?_v:Cp;return l(r,ut(o,3))}var jS=Cc(function(r,o,l){Wt.call(r,l)?r[l].push(o):ir(r,l,[o])});function eM(r,o,l,p){r=$n(r)?r:to(r),l=l&&!p?Et(l):0;var y=r.length;return l<0&&(l=vn(y+l,0)),Hc(r)?l<=y&&r.indexOf(o,l)>-1:!!y&&Ws(r,o,l)>-1}var tM=It(function(r,o,l){var p=-1,y=typeof o=="function",R=$n(r)?re(r.length):[];return Pr(r,function(N){R[++p]=y?jn(o,N,l):ea(N,o,l)}),R}),nM=Cc(function(r,o,l){ir(r,l,o)});function Oc(r,o){var l=bt(r)?on:Np;return l(r,ut(o,3))}function iM(r,o,l,p){return r==null?[]:(bt(o)||(o=o==null?[]:[o]),l=p?i:l,bt(l)||(l=l==null?[]:[l]),zp(r,o,l))}var rM=Cc(function(r,o,l){r[l?0:1].push(o)},function(){return[[],[]]});function sM(r,o,l){var p=bt(r)?uh:lp,y=arguments.length<3;return p(r,ut(o,4),l,y,Pr)}function oM(r,o,l){var p=bt(r)?vv:lp,y=arguments.length<3;return p(r,ut(o,4),l,y,Cp)}function aM(r,o){var l=bt(r)?Tr:Rp;return l(r,Vc(ut(o,3)))}function cM(r){var o=bt(r)?wp:ey;return o(r)}function lM(r,o,l){(l?Gn(r,o,l):o===i)?o=1:o=Et(o);var p=bt(r)?Px:ty;return p(r,o)}function uM(r){var o=bt(r)?Lx:iy;return o(r)}function hM(r){if(r==null)return 0;if($n(r))return Hc(r)?qs(r):r.length;var o=Dn(r);return o==Dt||o==mt?r.size:Rh(r).length}function fM(r,o,l){var p=bt(r)?hh:ry;return l&&Gn(r,o,l)&&(o=i),p(r,ut(o,3))}var dM=It(function(r,o){if(r==null)return[];var l=o.length;return l>1&&Gn(r,o[0],o[1])?o=[]:l>2&&Gn(o[0],o[1],o[2])&&(o=[o[0]]),zp(r,Tn(o,1),[])}),Bc=Yv||function(){return Sn.Date.now()};function pM(r,o){if(typeof o!="function")throw new pi(s);return r=Et(r),function(){if(--r<1)return o.apply(this,arguments)}}function Dm(r,o,l){return o=l?i:o,o=r&&o==null?r.length:o,rr(r,Y,i,i,i,i,o)}function Um(r,o){var l;if(typeof o!="function")throw new pi(s);return r=Et(r),function(){return--r>0&&(l=o.apply(this,arguments)),r<=1&&(o=i),l}}var jh=It(function(r,o,l){var p=S;if(l.length){var y=Cr(l,js(jh));p|=L}return rr(r,p,o,l,y)}),Nm=It(function(r,o,l){var p=S|M;if(l.length){var y=Cr(l,js(Nm));p|=L}return rr(o,p,r,l,y)});function Fm(r,o,l){o=l?i:o;var p=rr(r,v,i,i,i,i,i,o);return p.placeholder=Fm.placeholder,p}function Om(r,o,l){o=l?i:o;var p=rr(r,B,i,i,i,i,i,o);return p.placeholder=Om.placeholder,p}function Bm(r,o,l){var p,y,R,N,W,Q,ge=0,_e=!1,be=!1,Be=!0;if(typeof r!="function")throw new pi(s);o=xi(o)||0,cn(l)&&(_e=!!l.leading,be="maxWait"in l,R=be?vn(xi(l.maxWait)||0,o):R,Be="trailing"in l?!!l.trailing:Be);function je(pn){var Pi=p,lr=y;return p=y=i,ge=pn,N=r.apply(lr,Pi),N}function ft(pn){return ge=pn,W=sa(Ut,o),_e?je(pn):N}function At(pn){var Pi=pn-Q,lr=pn-ge,ig=o-Pi;return be?Ln(ig,R-lr):ig}function dt(pn){var Pi=pn-Q,lr=pn-ge;return Q===i||Pi>=o||Pi<0||be&&lr>=R}function Ut(){var pn=Bc();if(dt(pn))return Ot(pn);W=sa(Ut,At(pn))}function Ot(pn){return W=i,Be&&p?je(pn):(p=y=i,N)}function ii(){W!==i&&$p(W),ge=0,p=Q=y=W=i}function Hn(){return W===i?N:Ot(Bc())}function ri(){var pn=Bc(),Pi=dt(pn);if(p=arguments,y=this,Q=pn,Pi){if(W===i)return ft(Q);if(be)return $p(W),W=sa(Ut,o),je(Q)}return W===i&&(W=sa(Ut,o)),N}return ri.cancel=ii,ri.flush=Hn,ri}var mM=It(function(r,o){return Ap(r,1,o)}),gM=It(function(r,o,l){return Ap(r,xi(o)||0,l)});function _M(r){return rr(r,O)}function zc(r,o){if(typeof r!="function"||o!=null&&typeof o!="function")throw new pi(s);var l=function(){var p=arguments,y=o?o.apply(this,p):p[0],R=l.cache;if(R.has(y))return R.get(y);var N=r.apply(this,p);return l.cache=R.set(y,N)||R,N};return l.cache=new(zc.Cache||nr),l}zc.Cache=nr;function Vc(r){if(typeof r!="function")throw new pi(s);return function(){var o=arguments;switch(o.length){case 0:return!r.call(this);case 1:return!r.call(this,o[0]);case 2:return!r.call(this,o[0],o[1]);case 3:return!r.call(this,o[0],o[1],o[2])}return!r.apply(this,o)}}function vM(r){return Um(2,r)}var xM=sy(function(r,o){o=o.length==1&&bt(o[0])?on(o[0],ei(ut())):on(Tn(o,1),ei(ut()));var l=o.length;return It(function(p){for(var y=-1,R=Ln(p.length,l);++y<R;)p[y]=o[y].call(this,p[y]);return jn(r,this,p)})}),ef=It(function(r,o){var l=Cr(o,js(ef));return rr(r,L,i,o,l)}),zm=It(function(r,o){var l=Cr(o,js(zm));return rr(r,P,i,o,l)}),yM=sr(function(r,o){return rr(r,D,i,i,i,o)});function SM(r,o){if(typeof r!="function")throw new pi(s);return o=o===i?o:Et(o),It(r,o)}function MM(r,o){if(typeof r!="function")throw new pi(s);return o=o==null?0:vn(Et(o),0),It(function(l){var p=l[o],y=Ur(l,0,o);return p&&Ar(y,p),jn(r,this,y)})}function bM(r,o,l){var p=!0,y=!0;if(typeof r!="function")throw new pi(s);return cn(l)&&(p="leading"in l?!!l.leading:p,y="trailing"in l?!!l.trailing:y),Bm(r,o,{leading:p,maxWait:o,trailing:y})}function wM(r){return Dm(r,1)}function EM(r,o){return ef(Bh(o),r)}function TM(){if(!arguments.length)return[];var r=arguments[0];return bt(r)?r:[r]}function AM(r){return gi(r,g)}function CM(r,o){return o=typeof o=="function"?o:i,gi(r,g,o)}function RM(r){return gi(r,f|g)}function IM(r,o){return o=typeof o=="function"?o:i,gi(r,f|g,o)}function PM(r,o){return o==null||Tp(r,o,Mn(o))}function Ii(r,o){return r===o||r!==r&&o!==o}var LM=Lc(Th),DM=Lc(function(r,o){return r>=o}),ms=Lp((function(){return arguments})())?Lp:function(r){return ln(r)&&Wt.call(r,"callee")&&!vp.call(r,"callee")},bt=re.isArray,UM=jd?ei(jd):Hx;function $n(r){return r!=null&&Gc(r.length)&&!ar(r)}function dn(r){return ln(r)&&$n(r)}function NM(r){return r===!0||r===!1||ln(r)&&Vn(r)==Ze}var Nr=Zv||ff,FM=ep?ei(ep):kx;function OM(r){return ln(r)&&r.nodeType===1&&!oa(r)}function BM(r){if(r==null)return!0;if($n(r)&&(bt(r)||typeof r=="string"||typeof r.splice=="function"||Nr(r)||eo(r)||ms(r)))return!r.length;var o=Dn(r);if(o==Dt||o==mt)return!r.size;if(ra(r))return!Rh(r).length;for(var l in r)if(Wt.call(r,l))return!1;return!0}function zM(r,o){return ta(r,o)}function VM(r,o,l){l=typeof l=="function"?l:i;var p=l?l(r,o):i;return p===i?ta(r,o,i,l):!!p}function tf(r){if(!ln(r))return!1;var o=Vn(r);return o==Pt||o==et||typeof r.message=="string"&&typeof r.name=="string"&&!oa(r)}function GM(r){return typeof r=="number"&&yp(r)}function ar(r){if(!cn(r))return!1;var o=Vn(r);return o==ot||o==Jt||o==Ie||o==kt}function Vm(r){return typeof r=="number"&&r==Et(r)}function Gc(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=oe}function cn(r){var o=typeof r;return r!=null&&(o=="object"||o=="function")}function ln(r){return r!=null&&typeof r=="object"}var Gm=tp?ei(tp):Xx;function HM(r,o){return r===o||Ch(r,o,Xh(o))}function kM(r,o,l){return l=typeof l=="function"?l:i,Ch(r,o,Xh(o),l)}function WM(r){return Hm(r)&&r!=+r}function XM(r){if(Cy(r))throw new xt(n);return Dp(r)}function qM(r){return r===null}function YM(r){return r==null}function Hm(r){return typeof r=="number"||ln(r)&&Vn(r)==Rt}function oa(r){if(!ln(r)||Vn(r)!=Qt)return!1;var o=pc(r);if(o===null)return!0;var l=Wt.call(o,"constructor")&&o.constructor;return typeof l=="function"&&l instanceof l&&uc.call(l)==kv}var nf=np?ei(np):qx;function $M(r){return Vm(r)&&r>=-oe&&r<=oe}var km=ip?ei(ip):Yx;function Hc(r){return typeof r=="string"||!bt(r)&&ln(r)&&Vn(r)==Qe}function ni(r){return typeof r=="symbol"||ln(r)&&Vn(r)==gt}var eo=rp?ei(rp):$x;function ZM(r){return r===i}function JM(r){return ln(r)&&Dn(r)==U}function KM(r){return ln(r)&&Vn(r)==b}var QM=Lc(Ih),jM=Lc(function(r,o){return r<=o});function Wm(r){if(!r)return[];if($n(r))return Hc(r)?Ci(r):Yn(r);if(Yo&&r[Yo])return Pv(r[Yo]());var o=Dn(r),l=o==Dt?_h:o==mt?ac:to;return l(r)}function cr(r){if(!r)return r===0?r:0;if(r=xi(r),r===fe||r===-fe){var o=r<0?-1:1;return o*we}return r===r?r:0}function Et(r){var o=cr(r),l=o%1;return o===o?l?o-l:o:0}function Xm(r){return r?hs(Et(r),0,Re):0}function xi(r){if(typeof r=="number")return r;if(ni(r))return se;if(cn(r)){var o=typeof r.valueOf=="function"?r.valueOf():r;r=cn(o)?o+"":o}if(typeof r!="string")return r===0?r:+r;r=up(r);var l=Vo.test(r);return l||Ho.test(r)?pv(r.slice(2),l?2:8):Hs.test(r)?se:+r}function qm(r){return Gi(r,Zn(r))}function eb(r){return r?hs(Et(r),-oe,oe):r===0?r:0}function Xt(r){return r==null?"":ti(r)}var tb=Ks(function(r,o){if(ra(o)||$n(o)){Gi(o,Mn(o),r);return}for(var l in o)Wt.call(o,l)&&Qo(r,l,o[l])}),Ym=Ks(function(r,o){Gi(o,Zn(o),r)}),kc=Ks(function(r,o,l,p){Gi(o,Zn(o),r,p)}),nb=Ks(function(r,o,l,p){Gi(o,Mn(o),r,p)}),ib=sr(bh);function rb(r,o){var l=Js(r);return o==null?l:Ep(l,o)}var sb=It(function(r,o){r=en(r);var l=-1,p=o.length,y=p>2?o[2]:i;for(y&&Gn(o[0],o[1],y)&&(p=1);++l<p;)for(var R=o[l],N=Zn(R),W=-1,Q=N.length;++W<Q;){var ge=N[W],_e=r[ge];(_e===i||Ii(_e,Ys[ge])&&!Wt.call(r,ge))&&(r[ge]=R[ge])}return r}),ob=It(function(r){return r.push(i,um),jn($m,i,r)});function ab(r,o){return op(r,ut(o,3),Vi)}function cb(r,o){return op(r,ut(o,3),Eh)}function lb(r,o){return r==null?r:wh(r,ut(o,3),Zn)}function ub(r,o){return r==null?r:Ip(r,ut(o,3),Zn)}function hb(r,o){return r&&Vi(r,ut(o,3))}function fb(r,o){return r&&Eh(r,ut(o,3))}function db(r){return r==null?[]:wc(r,Mn(r))}function pb(r){return r==null?[]:wc(r,Zn(r))}function rf(r,o,l){var p=r==null?i:fs(r,o);return p===i?l:p}function mb(r,o){return r!=null&&dm(r,o,Bx)}function sf(r,o){return r!=null&&dm(r,o,zx)}var gb=sm(function(r,o,l){o!=null&&typeof o.toString!="function"&&(o=hc.call(o)),r[o]=l},af(Jn)),_b=sm(function(r,o,l){o!=null&&typeof o.toString!="function"&&(o=hc.call(o)),Wt.call(r,o)?r[o].push(l):r[o]=[l]},ut),vb=It(ea);function Mn(r){return $n(r)?bp(r):Rh(r)}function Zn(r){return $n(r)?bp(r,!0):Zx(r)}function xb(r,o){var l={};return o=ut(o,3),Vi(r,function(p,y,R){ir(l,o(p,y,R),p)}),l}function yb(r,o){var l={};return o=ut(o,3),Vi(r,function(p,y,R){ir(l,y,o(p,y,R))}),l}var Sb=Ks(function(r,o,l){Ec(r,o,l)}),$m=Ks(function(r,o,l,p){Ec(r,o,l,p)}),Mb=sr(function(r,o){var l={};if(r==null)return l;var p=!1;o=on(o,function(R){return R=Dr(R,r),p||(p=R.length>1),R}),Gi(r,kh(r),l),p&&(l=gi(l,f|d|g,gy));for(var y=o.length;y--;)Nh(l,o[y]);return l});function bb(r,o){return Zm(r,Vc(ut(o)))}var wb=sr(function(r,o){return r==null?{}:Kx(r,o)});function Zm(r,o){if(r==null)return{};var l=on(kh(r),function(p){return[p]});return o=ut(o),Vp(r,l,function(p,y){return o(p,y[0])})}function Eb(r,o,l){o=Dr(o,r);var p=-1,y=o.length;for(y||(y=1,r=i);++p<y;){var R=r==null?i:r[Hi(o[p])];R===i&&(p=y,R=l),r=ar(R)?R.call(r):R}return r}function Tb(r,o,l){return r==null?r:na(r,o,l)}function Ab(r,o,l,p){return p=typeof p=="function"?p:i,r==null?r:na(r,o,l,p)}var Jm=cm(Mn),Km=cm(Zn);function Cb(r,o,l){var p=bt(r),y=p||Nr(r)||eo(r);if(o=ut(o,4),l==null){var R=r&&r.constructor;y?l=p?new R:[]:cn(r)?l=ar(R)?Js(pc(r)):{}:l={}}return(y?di:Vi)(r,function(N,W,Q){return o(l,N,W,Q)}),l}function Rb(r,o){return r==null?!0:Nh(r,o)}function Ib(r,o,l){return r==null?r:Xp(r,o,Bh(l))}function Pb(r,o,l,p){return p=typeof p=="function"?p:i,r==null?r:Xp(r,o,Bh(l),p)}function to(r){return r==null?[]:gh(r,Mn(r))}function Lb(r){return r==null?[]:gh(r,Zn(r))}function Db(r,o,l){return l===i&&(l=o,o=i),l!==i&&(l=xi(l),l=l===l?l:0),o!==i&&(o=xi(o),o=o===o?o:0),hs(xi(r),o,l)}function Ub(r,o,l){return o=cr(o),l===i?(l=o,o=0):l=cr(l),r=xi(r),Vx(r,o,l)}function Nb(r,o,l){if(l&&typeof l!="boolean"&&Gn(r,o,l)&&(o=l=i),l===i&&(typeof o=="boolean"?(l=o,o=i):typeof r=="boolean"&&(l=r,r=i)),r===i&&o===i?(r=0,o=1):(r=cr(r),o===i?(o=r,r=0):o=cr(o)),r>o){var p=r;r=o,o=p}if(l||r%1||o%1){var y=Sp();return Ln(r+y*(o-r+dv("1e-"+((y+"").length-1))),o)}return Lh(r,o)}var Fb=Qs(function(r,o,l){return o=o.toLowerCase(),r+(l?Qm(o):o)});function Qm(r){return of(Xt(r).toLowerCase())}function jm(r){return r=Xt(r),r&&r.replace(Wo,Tv).replace(iv,"")}function Ob(r,o,l){r=Xt(r),o=ti(o);var p=r.length;l=l===i?p:hs(Et(l),0,p);var y=l;return l-=o.length,l>=0&&r.slice(l,y)==o}function Bb(r){return r=Xt(r),r&&ke.test(r)?r.replace(Fe,Av):r}function zb(r){return r=Xt(r),r&&Qn.test(r)?r.replace(En,"\\$&"):r}var Vb=Qs(function(r,o,l){return r+(l?"-":"")+o.toLowerCase()}),Gb=Qs(function(r,o,l){return r+(l?" ":"")+o.toLowerCase()}),Hb=nm("toLowerCase");function kb(r,o,l){r=Xt(r),o=Et(o);var p=o?qs(r):0;if(!o||p>=o)return r;var y=(o-p)/2;return Pc(vc(y),l)+r+Pc(_c(y),l)}function Wb(r,o,l){r=Xt(r),o=Et(o);var p=o?qs(r):0;return o&&p<o?r+Pc(o-p,l):r}function Xb(r,o,l){r=Xt(r),o=Et(o);var p=o?qs(r):0;return o&&p<o?Pc(o-p,l)+r:r}function qb(r,o,l){return l||o==null?o=0:o&&(o=+o),jv(Xt(r).replace(Sr,""),o||0)}function Yb(r,o,l){return(l?Gn(r,o,l):o===i)?o=1:o=Et(o),Dh(Xt(r),o)}function $b(){var r=arguments,o=Xt(r[0]);return r.length<3?o:o.replace(r[1],r[2])}var Zb=Qs(function(r,o,l){return r+(l?"_":"")+o.toLowerCase()});function Jb(r,o,l){return l&&typeof l!="number"&&Gn(r,o,l)&&(o=l=i),l=l===i?Re:l>>>0,l?(r=Xt(r),r&&(typeof o=="string"||o!=null&&!nf(o))&&(o=ti(o),!o&&Xs(r))?Ur(Ci(r),0,l):r.split(o,l)):[]}var Kb=Qs(function(r,o,l){return r+(l?" ":"")+of(o)});function Qb(r,o,l){return r=Xt(r),l=l==null?0:hs(Et(l),0,r.length),o=ti(o),r.slice(l,l+o.length)==o}function jb(r,o,l){var p=E.templateSettings;l&&Gn(r,o,l)&&(o=i),r=Xt(r),o=kc({},o,p,lm);var y=kc({},o.imports,p.imports,lm),R=Mn(y),N=gh(y,R),W,Q,ge=0,_e=o.interpolate||wr,be="__p += '",Be=vh((o.escape||wr).source+"|"+_e.source+"|"+(_e===Ye?br:wr).source+"|"+(o.evaluate||wr).source+"|$","g"),je="//# sourceURL="+(Wt.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++cv+"]")+`
`;r.replace(Be,function(dt,Ut,Ot,ii,Hn,ri){return Ot||(Ot=ii),be+=r.slice(ge,ri).replace(C,Cv),Ut&&(W=!0,be+=`' +
__e(`+Ut+`) +
'`),Hn&&(Q=!0,be+=`';
`+Hn+`;
__p += '`),Ot&&(be+=`' +
((__t = (`+Ot+`)) == null ? '' : __t) +
'`),ge=ri+dt.length,dt}),be+=`';
`;var ft=Wt.call(o,"variable")&&o.variable;if(!ft)be=`with (obj) {
`+be+`
}
`;else if(Mr.test(ft))throw new xt(a);be=(Q?be.replace(at,""):be).replace(Ue,"$1").replace(ht,"$1;"),be="function("+(ft||"obj")+`) {
`+(ft?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(W?", __e = _.escape":"")+(Q?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+be+`return __p
}`;var At=tg(function(){return Ht(R,je+"return "+be).apply(i,N)});if(At.source=be,tf(At))throw At;return At}function ew(r){return Xt(r).toLowerCase()}function tw(r){return Xt(r).toUpperCase()}function nw(r,o,l){if(r=Xt(r),r&&(l||o===i))return up(r);if(!r||!(o=ti(o)))return r;var p=Ci(r),y=Ci(o),R=hp(p,y),N=fp(p,y)+1;return Ur(p,R,N).join("")}function iw(r,o,l){if(r=Xt(r),r&&(l||o===i))return r.slice(0,pp(r)+1);if(!r||!(o=ti(o)))return r;var p=Ci(r),y=fp(p,Ci(o))+1;return Ur(p,0,y).join("")}function rw(r,o,l){if(r=Xt(r),r&&(l||o===i))return r.replace(Sr,"");if(!r||!(o=ti(o)))return r;var p=Ci(r),y=hp(p,Ci(o));return Ur(p,y).join("")}function sw(r,o){var l=V,p=I;if(cn(o)){var y="separator"in o?o.separator:y;l="length"in o?Et(o.length):l,p="omission"in o?ti(o.omission):p}r=Xt(r);var R=r.length;if(Xs(r)){var N=Ci(r);R=N.length}if(l>=R)return r;var W=l-qs(p);if(W<1)return p;var Q=N?Ur(N,0,W).join(""):r.slice(0,W);if(y===i)return Q+p;if(N&&(W+=Q.length-W),nf(y)){if(r.slice(W).search(y)){var ge,_e=Q;for(y.global||(y=vh(y.source,Xt(os.exec(y))+"g")),y.lastIndex=0;ge=y.exec(_e);)var be=ge.index;Q=Q.slice(0,be===i?W:be)}}else if(r.indexOf(ti(y),W)!=W){var Be=Q.lastIndexOf(y);Be>-1&&(Q=Q.slice(0,Be))}return Q+p}function ow(r){return r=Xt(r),r&&Se.test(r)?r.replace(q,Nv):r}var aw=Qs(function(r,o,l){return r+(l?" ":"")+o.toUpperCase()}),of=nm("toUpperCase");function eg(r,o,l){return r=Xt(r),o=l?i:o,o===i?Iv(r)?Bv(r):Sv(r):r.match(o)||[]}var tg=It(function(r,o){try{return jn(r,i,o)}catch(l){return tf(l)?l:new xt(l)}}),cw=sr(function(r,o){return di(o,function(l){l=Hi(l),ir(r,l,jh(r[l],r))}),r});function lw(r){var o=r==null?0:r.length,l=ut();return r=o?on(r,function(p){if(typeof p[1]!="function")throw new pi(s);return[l(p[0]),p[1]]}):[],It(function(p){for(var y=-1;++y<o;){var R=r[y];if(jn(R[0],this,p))return jn(R[1],this,p)}})}function uw(r){return Nx(gi(r,f))}function af(r){return function(){return r}}function hw(r,o){return r==null||r!==r?o:r}var fw=rm(),dw=rm(!0);function Jn(r){return r}function cf(r){return Up(typeof r=="function"?r:gi(r,f))}function pw(r){return Fp(gi(r,f))}function mw(r,o){return Op(r,gi(o,f))}var gw=It(function(r,o){return function(l){return ea(l,r,o)}}),_w=It(function(r,o){return function(l){return ea(r,l,o)}});function lf(r,o,l){var p=Mn(o),y=wc(o,p);l==null&&!(cn(o)&&(y.length||!p.length))&&(l=o,o=r,r=this,y=wc(o,Mn(o)));var R=!(cn(l)&&"chain"in l)||!!l.chain,N=ar(r);return di(y,function(W){var Q=o[W];r[W]=Q,N&&(r.prototype[W]=function(){var ge=this.__chain__;if(R||ge){var _e=r(this.__wrapped__),be=_e.__actions__=Yn(this.__actions__);return be.push({func:Q,args:arguments,thisArg:r}),_e.__chain__=ge,_e}return Q.apply(r,Ar([this.value()],arguments))})}),r}function vw(){return Sn._===this&&(Sn._=Wv),this}function uf(){}function xw(r){return r=Et(r),It(function(o){return Bp(o,r)})}var yw=Vh(on),Sw=Vh(sp),Mw=Vh(hh);function ng(r){return Yh(r)?fh(Hi(r)):Qx(r)}function bw(r){return function(o){return r==null?i:fs(r,o)}}var ww=om(),Ew=om(!0);function hf(){return[]}function ff(){return!1}function Tw(){return{}}function Aw(){return""}function Cw(){return!0}function Rw(r,o){if(r=Et(r),r<1||r>oe)return[];var l=Re,p=Ln(r,Re);o=ut(o),r-=Re;for(var y=mh(p,o);++l<r;)o(l);return y}function Iw(r){return bt(r)?on(r,Hi):ni(r)?[r]:Yn(Mm(Xt(r)))}function Pw(r){var o=++Hv;return Xt(r)+o}var Lw=Ic(function(r,o){return r+o},0),Dw=Gh("ceil"),Uw=Ic(function(r,o){return r/o},1),Nw=Gh("floor");function Fw(r){return r&&r.length?bc(r,Jn,Th):i}function Ow(r,o){return r&&r.length?bc(r,ut(o,2),Th):i}function Bw(r){return cp(r,Jn)}function zw(r,o){return cp(r,ut(o,2))}function Vw(r){return r&&r.length?bc(r,Jn,Ih):i}function Gw(r,o){return r&&r.length?bc(r,ut(o,2),Ih):i}var Hw=Ic(function(r,o){return r*o},1),kw=Gh("round"),Ww=Ic(function(r,o){return r-o},0);function Xw(r){return r&&r.length?ph(r,Jn):0}function qw(r,o){return r&&r.length?ph(r,ut(o,2)):0}return E.after=pM,E.ary=Dm,E.assign=tb,E.assignIn=Ym,E.assignInWith=kc,E.assignWith=nb,E.at=ib,E.before=Um,E.bind=jh,E.bindAll=cw,E.bindKey=Nm,E.castArray=TM,E.chain=Im,E.chunk=Ny,E.compact=Fy,E.concat=Oy,E.cond=lw,E.conforms=uw,E.constant=af,E.countBy=XS,E.create=rb,E.curry=Fm,E.curryRight=Om,E.debounce=Bm,E.defaults=sb,E.defaultsDeep=ob,E.defer=mM,E.delay=gM,E.difference=By,E.differenceBy=zy,E.differenceWith=Vy,E.drop=Gy,E.dropRight=Hy,E.dropRightWhile=ky,E.dropWhile=Wy,E.fill=Xy,E.filter=YS,E.flatMap=JS,E.flatMapDeep=KS,E.flatMapDepth=QS,E.flatten=Tm,E.flattenDeep=qy,E.flattenDepth=Yy,E.flip=_M,E.flow=fw,E.flowRight=dw,E.fromPairs=$y,E.functions=db,E.functionsIn=pb,E.groupBy=jS,E.initial=Jy,E.intersection=Ky,E.intersectionBy=Qy,E.intersectionWith=jy,E.invert=gb,E.invertBy=_b,E.invokeMap=tM,E.iteratee=cf,E.keyBy=nM,E.keys=Mn,E.keysIn=Zn,E.map=Oc,E.mapKeys=xb,E.mapValues=yb,E.matches=pw,E.matchesProperty=mw,E.memoize=zc,E.merge=Sb,E.mergeWith=$m,E.method=gw,E.methodOf=_w,E.mixin=lf,E.negate=Vc,E.nthArg=xw,E.omit=Mb,E.omitBy=bb,E.once=vM,E.orderBy=iM,E.over=yw,E.overArgs=xM,E.overEvery=Sw,E.overSome=Mw,E.partial=ef,E.partialRight=zm,E.partition=rM,E.pick=wb,E.pickBy=Zm,E.property=ng,E.propertyOf=bw,E.pull=iS,E.pullAll=Cm,E.pullAllBy=rS,E.pullAllWith=sS,E.pullAt=oS,E.range=ww,E.rangeRight=Ew,E.rearg=yM,E.reject=aM,E.remove=aS,E.rest=SM,E.reverse=Kh,E.sampleSize=lM,E.set=Tb,E.setWith=Ab,E.shuffle=uM,E.slice=cS,E.sortBy=dM,E.sortedUniq=mS,E.sortedUniqBy=gS,E.split=Jb,E.spread=MM,E.tail=_S,E.take=vS,E.takeRight=xS,E.takeRightWhile=yS,E.takeWhile=SS,E.tap=FS,E.throttle=bM,E.thru=Fc,E.toArray=Wm,E.toPairs=Jm,E.toPairsIn=Km,E.toPath=Iw,E.toPlainObject=qm,E.transform=Cb,E.unary=wM,E.union=MS,E.unionBy=bS,E.unionWith=wS,E.uniq=ES,E.uniqBy=TS,E.uniqWith=AS,E.unset=Rb,E.unzip=Qh,E.unzipWith=Rm,E.update=Ib,E.updateWith=Pb,E.values=to,E.valuesIn=Lb,E.without=CS,E.words=eg,E.wrap=EM,E.xor=RS,E.xorBy=IS,E.xorWith=PS,E.zip=LS,E.zipObject=DS,E.zipObjectDeep=US,E.zipWith=NS,E.entries=Jm,E.entriesIn=Km,E.extend=Ym,E.extendWith=kc,lf(E,E),E.add=Lw,E.attempt=tg,E.camelCase=Fb,E.capitalize=Qm,E.ceil=Dw,E.clamp=Db,E.clone=AM,E.cloneDeep=RM,E.cloneDeepWith=IM,E.cloneWith=CM,E.conformsTo=PM,E.deburr=jm,E.defaultTo=hw,E.divide=Uw,E.endsWith=Ob,E.eq=Ii,E.escape=Bb,E.escapeRegExp=zb,E.every=qS,E.find=$S,E.findIndex=wm,E.findKey=ab,E.findLast=ZS,E.findLastIndex=Em,E.findLastKey=cb,E.floor=Nw,E.forEach=Pm,E.forEachRight=Lm,E.forIn=lb,E.forInRight=ub,E.forOwn=hb,E.forOwnRight=fb,E.get=rf,E.gt=LM,E.gte=DM,E.has=mb,E.hasIn=sf,E.head=Am,E.identity=Jn,E.includes=eM,E.indexOf=Zy,E.inRange=Ub,E.invoke=vb,E.isArguments=ms,E.isArray=bt,E.isArrayBuffer=UM,E.isArrayLike=$n,E.isArrayLikeObject=dn,E.isBoolean=NM,E.isBuffer=Nr,E.isDate=FM,E.isElement=OM,E.isEmpty=BM,E.isEqual=zM,E.isEqualWith=VM,E.isError=tf,E.isFinite=GM,E.isFunction=ar,E.isInteger=Vm,E.isLength=Gc,E.isMap=Gm,E.isMatch=HM,E.isMatchWith=kM,E.isNaN=WM,E.isNative=XM,E.isNil=YM,E.isNull=qM,E.isNumber=Hm,E.isObject=cn,E.isObjectLike=ln,E.isPlainObject=oa,E.isRegExp=nf,E.isSafeInteger=$M,E.isSet=km,E.isString=Hc,E.isSymbol=ni,E.isTypedArray=eo,E.isUndefined=ZM,E.isWeakMap=JM,E.isWeakSet=KM,E.join=eS,E.kebabCase=Vb,E.last=vi,E.lastIndexOf=tS,E.lowerCase=Gb,E.lowerFirst=Hb,E.lt=QM,E.lte=jM,E.max=Fw,E.maxBy=Ow,E.mean=Bw,E.meanBy=zw,E.min=Vw,E.minBy=Gw,E.stubArray=hf,E.stubFalse=ff,E.stubObject=Tw,E.stubString=Aw,E.stubTrue=Cw,E.multiply=Hw,E.nth=nS,E.noConflict=vw,E.noop=uf,E.now=Bc,E.pad=kb,E.padEnd=Wb,E.padStart=Xb,E.parseInt=qb,E.random=Nb,E.reduce=sM,E.reduceRight=oM,E.repeat=Yb,E.replace=$b,E.result=Eb,E.round=kw,E.runInContext=Z,E.sample=cM,E.size=hM,E.snakeCase=Zb,E.some=fM,E.sortedIndex=lS,E.sortedIndexBy=uS,E.sortedIndexOf=hS,E.sortedLastIndex=fS,E.sortedLastIndexBy=dS,E.sortedLastIndexOf=pS,E.startCase=Kb,E.startsWith=Qb,E.subtract=Ww,E.sum=Xw,E.sumBy=qw,E.template=jb,E.times=Rw,E.toFinite=cr,E.toInteger=Et,E.toLength=Xm,E.toLower=ew,E.toNumber=xi,E.toSafeInteger=eb,E.toString=Xt,E.toUpper=tw,E.trim=nw,E.trimEnd=iw,E.trimStart=rw,E.truncate=sw,E.unescape=ow,E.uniqueId=Pw,E.upperCase=aw,E.upperFirst=of,E.each=Pm,E.eachRight=Lm,E.first=Am,lf(E,(function(){var r={};return Vi(E,function(o,l){Wt.call(E.prototype,l)||(r[l]=o)}),r})(),{chain:!1}),E.VERSION=e,di(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){E[r].placeholder=E}),di(["drop","take"],function(r,o){Ft.prototype[r]=function(l){l=l===i?1:vn(Et(l),0);var p=this.__filtered__&&!o?new Ft(this):this.clone();return p.__filtered__?p.__takeCount__=Ln(l,p.__takeCount__):p.__views__.push({size:Ln(l,Re),type:r+(p.__dir__<0?"Right":"")}),p},Ft.prototype[r+"Right"]=function(l){return this.reverse()[r](l).reverse()}}),di(["filter","map","takeWhile"],function(r,o){var l=o+1,p=l==ne||l==le;Ft.prototype[r]=function(y){var R=this.clone();return R.__iteratees__.push({iteratee:ut(y,3),type:l}),R.__filtered__=R.__filtered__||p,R}}),di(["head","last"],function(r,o){var l="take"+(o?"Right":"");Ft.prototype[r]=function(){return this[l](1).value()[0]}}),di(["initial","tail"],function(r,o){var l="drop"+(o?"":"Right");Ft.prototype[r]=function(){return this.__filtered__?new Ft(this):this[l](1)}}),Ft.prototype.compact=function(){return this.filter(Jn)},Ft.prototype.find=function(r){return this.filter(r).head()},Ft.prototype.findLast=function(r){return this.reverse().find(r)},Ft.prototype.invokeMap=It(function(r,o){return typeof r=="function"?new Ft(this):this.map(function(l){return ea(l,r,o)})}),Ft.prototype.reject=function(r){return this.filter(Vc(ut(r)))},Ft.prototype.slice=function(r,o){r=Et(r);var l=this;return l.__filtered__&&(r>0||o<0)?new Ft(l):(r<0?l=l.takeRight(-r):r&&(l=l.drop(r)),o!==i&&(o=Et(o),l=o<0?l.dropRight(-o):l.take(o-r)),l)},Ft.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},Ft.prototype.toArray=function(){return this.take(Re)},Vi(Ft.prototype,function(r,o){var l=/^(?:filter|find|map|reject)|While$/.test(o),p=/^(?:head|last)$/.test(o),y=E[p?"take"+(o=="last"?"Right":""):o],R=p||/^find/.test(o);y&&(E.prototype[o]=function(){var N=this.__wrapped__,W=p?[1]:arguments,Q=N instanceof Ft,ge=W[0],_e=Q||bt(N),be=function(Ut){var Ot=y.apply(E,Ar([Ut],W));return p&&Be?Ot[0]:Ot};_e&&l&&typeof ge=="function"&&ge.length!=1&&(Q=_e=!1);var Be=this.__chain__,je=!!this.__actions__.length,ft=R&&!Be,At=Q&&!je;if(!R&&_e){N=At?N:new Ft(this);var dt=r.apply(N,W);return dt.__actions__.push({func:Fc,args:[be],thisArg:i}),new mi(dt,Be)}return ft&&At?r.apply(this,W):(dt=this.thru(be),ft?p?dt.value()[0]:dt.value():dt)})}),di(["pop","push","shift","sort","splice","unshift"],function(r){var o=cc[r],l=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",p=/^(?:pop|shift)$/.test(r);E.prototype[r]=function(){var y=arguments;if(p&&!this.__chain__){var R=this.value();return o.apply(bt(R)?R:[],y)}return this[l](function(N){return o.apply(bt(N)?N:[],y)})}}),Vi(Ft.prototype,function(r,o){var l=E[o];if(l){var p=l.name+"";Wt.call(Zs,p)||(Zs[p]=[]),Zs[p].push({name:o,func:l})}}),Zs[Rc(i,M).name]=[{name:"wrapper",func:i}],Ft.prototype.clone=ox,Ft.prototype.reverse=ax,Ft.prototype.value=cx,E.prototype.at=OS,E.prototype.chain=BS,E.prototype.commit=zS,E.prototype.next=VS,E.prototype.plant=HS,E.prototype.reverse=kS,E.prototype.toJSON=E.prototype.valueOf=E.prototype.value=WS,E.prototype.first=E.prototype.head,Yo&&(E.prototype[Yo]=GS),E},Rr=zv();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Sn._=Rr,define(function(){return Rr})):as?((as.exports=Rr)._=Rr,ah._=Rr):Sn._=Rr}).call(Bo)});var qc=class i{messageService=An(hg);subGeometry=new og(1);geometryChanged=this.subGeometry.asObservable();updateGeometry(e){this.subGeometry.next(e)}showStartingCalculationMessage(){this.messageService.add({severity:"info",summary:"Info",detail:"Solving membrane model...",life:2e3})}showCalculationErrorMessage(e){this.messageService.add({severity:"error",summary:"Error",detail:e??"An error occurred during solving the membrane model.",life:4e3})}showErrorMessage(e){this.messageService.add({severity:"error",summary:"Error",detail:e,life:4e3})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Si({token:i,factory:i.\u0275fac})};var Yw={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$w={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vg=0,jf=1,Gg=2;var ed=1,Hg=2,$i=3,gr=0,Wn=1,Ei=2,vr=0,bs=1,td=2,nd=3,id=4,kg=5,Wr=100,Wg=101,Xg=102,qg=103,Yg=104,$g=200,Zg=201,Jg=202,Kg=203,gl=204,_l=205,Qg=206,jg=207,e_=208,t_=209,n_=210,i_=211,r_=212,s_=213,o_=214,$l=0,Zl=1,Jl=2,ws=3,Kl=4,Ql=5,jl=6,eu=7,rd=0,a_=1,c_=2,xr=0,l_=1,u_=2,h_=3,f_=4,d_=5,p_=6,m_=7;var Gf=300,Ps=301,Ls=302,tu=303,nu=304,Ha=306,vl=1e3,kr=1001,xl=1002,bi=1003,g_=1004;var ka=1005;var Fi=1006,iu=1007;var Jr=1008;var Zi=1009,sd=1010,od=1011,To=1012,ru=1013,Kr=1014,Ji=1015,Ao=1016,su=1017,ou=1018,Co=1020,ad=35902,cd=1021,ld=1022,Ti=1023,_o=1026,Ro=1027,ud=1028,au=1029,hd=1030,cu=1031;var lu=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,uu=35840,hu=35841,fu=35842,du=35843,pu=36196,mu=37492,gu=37496,_u=37808,vu=37809,xu=37810,yu=37811,Su=37812,Mu=37813,bu=37814,wu=37815,Eu=37816,Tu=37817,Au=37818,Cu=37819,Ru=37820,Iu=37821,$a=36492,Pu=36494,Lu=36495,fd=36283,Du=36284,Uu=36285,Nu=36286;var Sa=2300,yl=2301,ml=2302,Hf=2400,kf=2401,Wf=2402;var __=3200,v_=3201;var x_=0,y_=1,yr="",ai="srgb",wi="srgb-linear",Ma="linear",Zt="srgb";var Ss=7680;var Xf=519,S_=512,M_=513,b_=514,dd=515,w_=516,E_=517,T_=518,A_=519,Sl=35044,Fu=35048;var pd="300 es",Wi=2e3,ba=2001;var qi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}},Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fg=1234567,_a=Math.PI/180,vo=180/Math.PI;function Xi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function md(i,e){return(i%e+e)%e}function Zw(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Jw(i,e,t){return i!==e?(t-i)/(e-i):0}function va(i,e,t){return(1-t)*i+t*e}function Kw(i,e,t,n){return va(i,e,1-Math.exp(-t*n))}function Qw(i,e=1){return e-Math.abs(md(i,e*2)-e)}function jw(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function eE(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function tE(i,e){return i+Math.floor(Math.random()*(e-i+1))}function nE(i,e){return i+Math.random()*(e-i)}function iE(i){return i*(.5-Math.random())}function rE(i){i!==void 0&&(fg=i);let e=fg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sE(i){return i*_a}function oE(i){return i*vo}function aE(i){return(i&i-1)===0&&i!==0}function cE(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function lE(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function uE(i,e,t,n,s){let a=Math.cos,c=Math.sin,u=a(t/2),h=c(t/2),f=a((e+n)/2),d=c((e+n)/2),g=a((e-n)/2),m=c((e-n)/2),_=a((n-e)/2),S=c((n-e)/2);switch(s){case"XYX":i.set(u*d,h*g,h*m,u*f);break;case"YZY":i.set(h*m,u*d,h*g,u*f);break;case"ZXZ":i.set(h*g,h*m,u*d,u*f);break;case"XZX":i.set(u*d,h*S,h*_,u*f);break;case"YXY":i.set(h*_,u*d,h*S,u*f);break;case"ZYZ":i.set(h*S,h*_,u*d,u*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Za={DEG2RAD:_a,RAD2DEG:vo,generateUUID:Xi,clamp:Tt,euclideanModulo:md,mapLinear:Zw,inverseLerp:Jw,lerp:va,damp:Kw,pingpong:Qw,smoothstep:jw,smootherstep:eE,randInt:tE,randFloat:nE,randFloatSpread:iE,seededRandom:rE,degToRad:sE,radToDeg:oE,isPowerOfTwo:aE,ceilPowerOfTwo:cE,floorPowerOfTwo:lE,setQuaternionFromProperEuler:uE,normalize:$t,denormalize:Ni},st=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*n-c*s+e.x,this.y=a*s+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_r=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,c,u){let h=n[s+0],f=n[s+1],d=n[s+2],g=n[s+3],m=a[c+0],_=a[c+1],S=a[c+2],M=a[c+3];if(u===0){e[t+0]=h,e[t+1]=f,e[t+2]=d,e[t+3]=g;return}if(u===1){e[t+0]=m,e[t+1]=_,e[t+2]=S,e[t+3]=M;return}if(g!==M||h!==m||f!==_||d!==S){let x=1-u,v=h*m+f*_+d*S+g*M,B=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){let Y=Math.sqrt(L),D=Math.atan2(Y,v*B);x=Math.sin(x*D)/Y,u=Math.sin(u*D)/Y}let P=u*B;if(h=h*x+m*P,f=f*x+_*P,d=d*x+S*P,g=g*x+M*P,x===1-u){let Y=1/Math.sqrt(h*h+f*f+d*d+g*g);h*=Y,f*=Y,d*=Y,g*=Y}}e[t]=h,e[t+1]=f,e[t+2]=d,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,s,a,c){let u=n[s],h=n[s+1],f=n[s+2],d=n[s+3],g=a[c],m=a[c+1],_=a[c+2],S=a[c+3];return e[t]=u*S+d*g+h*_-f*m,e[t+1]=h*S+d*m+f*g-u*_,e[t+2]=f*S+d*_+u*m-h*g,e[t+3]=d*S-u*g-h*m-f*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,a=e._z,c=e._order,u=Math.cos,h=Math.sin,f=u(n/2),d=u(s/2),g=u(a/2),m=h(n/2),_=h(s/2),S=h(a/2);switch(c){case"XYZ":this._x=m*d*g+f*_*S,this._y=f*_*g-m*d*S,this._z=f*d*S+m*_*g,this._w=f*d*g-m*_*S;break;case"YXZ":this._x=m*d*g+f*_*S,this._y=f*_*g-m*d*S,this._z=f*d*S-m*_*g,this._w=f*d*g+m*_*S;break;case"ZXY":this._x=m*d*g-f*_*S,this._y=f*_*g+m*d*S,this._z=f*d*S+m*_*g,this._w=f*d*g-m*_*S;break;case"ZYX":this._x=m*d*g-f*_*S,this._y=f*_*g+m*d*S,this._z=f*d*S-m*_*g,this._w=f*d*g+m*_*S;break;case"YZX":this._x=m*d*g+f*_*S,this._y=f*_*g+m*d*S,this._z=f*d*S-m*_*g,this._w=f*d*g-m*_*S;break;case"XZY":this._x=m*d*g-f*_*S,this._y=f*_*g-m*d*S,this._z=f*d*S+m*_*g,this._w=f*d*g+m*_*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],a=t[8],c=t[1],u=t[5],h=t[9],f=t[2],d=t[6],g=t[10],m=n+u+g;if(m>0){let _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(d-h)*_,this._y=(a-f)*_,this._z=(c-s)*_}else if(n>u&&n>g){let _=2*Math.sqrt(1+n-u-g);this._w=(d-h)/_,this._x=.25*_,this._y=(s+c)/_,this._z=(a+f)/_}else if(u>g){let _=2*Math.sqrt(1+u-n-g);this._w=(a-f)/_,this._x=(s+c)/_,this._y=.25*_,this._z=(h+d)/_}else{let _=2*Math.sqrt(1+g-n-u);this._w=(c-s)/_,this._x=(a+f)/_,this._y=(h+d)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,a=e._z,c=e._w,u=t._x,h=t._y,f=t._z,d=t._w;return this._x=n*d+c*u+s*f-a*h,this._y=s*d+c*h+a*u-n*f,this._z=a*d+c*f+n*h-s*u,this._w=c*d-n*u-s*h-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,a=this._z,c=this._w,u=c*e._w+n*e._x+s*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=n,this._y=s,this._z=a,this;let h=1-u*u;if(h<=Number.EPSILON){let _=1-t;return this._w=_*c+t*this._w,this._x=_*n+t*this._x,this._y=_*s+t*this._y,this._z=_*a+t*this._z,this.normalize(),this}let f=Math.sqrt(h),d=Math.atan2(f,u),g=Math.sin((1-t)*d)/f,m=Math.sin(t*d)/f;return this._w=c*g+this._w*m,this._x=n*g+this._x*m,this._y=s*g+this._y*m,this._z=a*g+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*c,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,a=e.x,c=e.y,u=e.z,h=e.w,f=2*(c*s-u*n),d=2*(u*t-a*s),g=2*(a*n-c*t);return this.x=t+h*f+c*g-u*d,this.y=n+h*d+u*f-a*g,this.z=s+h*g+a*d-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,a=e.z,c=t.x,u=t.y,h=t.z;return this.x=s*h-a*u,this.y=a*c-n*h,this.z=n*u-s*c,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gf.copy(this).projectOnVector(e),this.sub(gf)}reflect(e){return this.sub(gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gf=new $,dg=new _r,wt=class i{constructor(e,t,n,s,a,c,u,h,f){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,c,u,h,f)}set(e,t,n,s,a,c,u,h,f){let d=this.elements;return d[0]=e,d[1]=s,d[2]=u,d[3]=t,d[4]=a,d[5]=h,d[6]=n,d[7]=c,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,a=this.elements,c=n[0],u=n[3],h=n[6],f=n[1],d=n[4],g=n[7],m=n[2],_=n[5],S=n[8],M=s[0],x=s[3],v=s[6],B=s[1],L=s[4],P=s[7],Y=s[2],D=s[5],O=s[8];return a[0]=c*M+u*B+h*Y,a[3]=c*x+u*L+h*D,a[6]=c*v+u*P+h*O,a[1]=f*M+d*B+g*Y,a[4]=f*x+d*L+g*D,a[7]=f*v+d*P+g*O,a[2]=m*M+_*B+S*Y,a[5]=m*x+_*L+S*D,a[8]=m*v+_*P+S*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],u=e[5],h=e[6],f=e[7],d=e[8];return t*c*d-t*u*f-n*a*d+n*u*h+s*a*f-s*c*h}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],u=e[5],h=e[6],f=e[7],d=e[8],g=d*c-u*f,m=u*h-d*a,_=f*a-c*h,S=t*g+n*m+s*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/S;return e[0]=g*M,e[1]=(s*f-d*n)*M,e[2]=(u*n-s*c)*M,e[3]=m*M,e[4]=(d*t-s*h)*M,e[5]=(s*a-u*t)*M,e[6]=_*M,e[7]=(n*h-f*t)*M,e[8]=(c*t-n*a)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,c,u){let h=Math.cos(a),f=Math.sin(a);return this.set(n*h,n*f,-n*(h*c+f*u)+c+e,-s*f,s*h,-s*(-f*c+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(_f.makeScale(e,t)),this}rotate(e){return this.premultiply(_f.makeRotation(-e)),this}translate(e,t){return this.premultiply(_f.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_f=new wt;function gd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function wa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function C_(){let i=wa("canvas");return i.style.display="block",i}var pg={};function Es(i){i in pg||(pg[i]=!0,console.warn(i))}function R_(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function I_(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function P_(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var mg=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gg=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hE(){let i={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Zt&&(s.r=mr(s.r),s.g=mr(s.g),s.b=mr(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Zt&&(s.r=go(s.r),s.g=go(s.g),s.b=go(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yr?Ma:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Es("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Es("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wi]:{primaries:e,whitePoint:n,transfer:Ma,toXYZ:mg,fromXYZ:gg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:n,transfer:Zt,toXYZ:mg,fromXYZ:gg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),i}var Vt=hE();function mr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function go(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var io,Ml=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{io===void 0&&(io=wa("canvas")),io.width=e.width,io.height=e.height;let s=io.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=io}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=mr(a[c]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mr(t[n]/255)*255):t[n]=mr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fE=0,xo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?a.push(vf(s[c].image)):a.push(vf(s[c]))}else a=vf(s);n.url=a}return t||(e.images[this.uuid]=n),n}};function vf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ml.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dE=0,xf=new $,Qr=(()=>{class i extends qi{constructor(t=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,s=kr,a=kr,c=Fi,u=Jr,h=Ti,f=Zi,d=i.DEFAULT_ANISOTROPY,g=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dE++}),this.uuid=Xi(),this.name="",this.source=new xo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=c,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=f,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xf).x}get height(){return this.source.getSize(xf).y}get depth(){return this.source.getSize(xf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let s=t[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&s&&a.isVector2&&s.isVector2||a&&s&&a.isVector3&&s.isVector3||a&&s&&a.isMatrix3&&s.isMatrix3?a.copy(s):this[n]=s}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vl:t.x=t.x-Math.floor(t.x);break;case kr:t.x=t.x<0?0:1;break;case xl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vl:t.y=t.y-Math.floor(t.y);break;case kr:t.y=t.y<0?0:1;break;case xl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=Gf,i.DEFAULT_ANISOTROPY=1,i})(),Kt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*n+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*n+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*n+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a,h=e.elements,f=h[0],d=h[4],g=h[8],m=h[1],_=h[5],S=h[9],M=h[2],x=h[6],v=h[10];if(Math.abs(d-m)<.01&&Math.abs(g-M)<.01&&Math.abs(S-x)<.01){if(Math.abs(d+m)<.1&&Math.abs(g+M)<.1&&Math.abs(S+x)<.1&&Math.abs(f+_+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let L=(f+1)/2,P=(_+1)/2,Y=(v+1)/2,D=(d+m)/4,O=(g+M)/4,V=(S+x)/4;return L>P&&L>Y?L<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(L),s=D/n,a=O/n):P>Y?P<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(P),n=D/s,a=V/s):Y<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(Y),n=O/a,s=V/a),this.set(n,s,a,t),this}let B=Math.sqrt((x-S)*(x-S)+(g-M)*(g-M)+(m-d)*(m-d));return Math.abs(B)<.001&&(B=1),this.x=(x-S)/B,this.y=(g-M)/B,this.z=(m-d)/B,this.w=Math.acos((f+_+v-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bl=class extends qi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);let s={width:e,height:t,depth:n.depth},a=new Qr(s);this.textures=[];let c=n.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Fi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new xo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yi=class extends bl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ea=class extends Qr{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bi,this.minFilter=bi,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var wl=class extends Qr{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bi,this.minFilter=bi,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ci=class{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Li):Li.fromBufferAttribute(a,c),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yc.copy(n.boundingBox)),Yc.applyMatrix4(e.matrixWorld),this.union(Yc)}let s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),$c.subVectors(this.max,fa),ro.subVectors(e.a,fa),so.subVectors(e.b,fa),oo.subVectors(e.c,fa),Fr.subVectors(so,ro),Or.subVectors(oo,so),_s.subVectors(ro,oo);let t=[0,-Fr.z,Fr.y,0,-Or.z,Or.y,0,-_s.z,_s.y,Fr.z,0,-Fr.x,Or.z,0,-Or.x,_s.z,0,-_s.x,-Fr.y,Fr.x,0,-Or.y,Or.x,0,-_s.y,_s.x,0];return!yf(t,ro,so,oo,$c)||(t=[1,0,0,0,1,0,0,0,1],!yf(t,ro,so,oo,$c))?!1:(Zc.crossVectors(Fr,Or),t=[Zc.x,Zc.y,Zc.z],yf(t,ro,so,oo,$c))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ur=[new $,new $,new $,new $,new $,new $,new $,new $],Li=new $,Yc=new ci,ro=new $,so=new $,oo=new $,Fr=new $,Or=new $,_s=new $,fa=new $,$c=new $,Zc=new $,vs=new $;function yf(i,e,t,n,s){for(let a=0,c=i.length-3;a<=c;a+=3){vs.fromArray(i,a);let u=s.x*Math.abs(vs.x)+s.y*Math.abs(vs.y)+s.z*Math.abs(vs.z),h=e.dot(vs),f=t.dot(vs),d=n.dot(vs);if(Math.max(-Math.max(h,f,d),Math.min(h,f,d))>u)return!1}return!0}var pE=new ci,da=new $,Sf=new $,Oi=class{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):pE.setFromPoints(e).getCenter(n);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);let t=da.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(da,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(Sf)),this.expandByPoint(da.copy(e.center).sub(Sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},hr=new $,Mf=new $,Jc=new $,Br=new $,bf=new $,Kc=new $,wf=new $,yo=class{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hr.copy(this.origin).addScaledVector(this.direction,t),hr.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Mf.copy(e).add(t).multiplyScalar(.5),Jc.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(Mf);let a=e.distanceTo(t)*.5,c=-this.direction.dot(Jc),u=Br.dot(this.direction),h=-Br.dot(Jc),f=Br.lengthSq(),d=Math.abs(1-c*c),g,m,_,S;if(d>0)if(g=c*h-u,m=c*u-h,S=a*d,g>=0)if(m>=-S)if(m<=S){let M=1/d;g*=M,m*=M,_=g*(g+c*m+2*u)+m*(c*g+m+2*h)+f}else m=a,g=Math.max(0,-(c*m+u)),_=-g*g+m*(m+2*h)+f;else m=-a,g=Math.max(0,-(c*m+u)),_=-g*g+m*(m+2*h)+f;else m<=-S?(g=Math.max(0,-(-c*a+u)),m=g>0?-a:Math.min(Math.max(-a,-h),a),_=-g*g+m*(m+2*h)+f):m<=S?(g=0,m=Math.min(Math.max(-a,-h),a),_=m*(m+2*h)+f):(g=Math.max(0,-(c*a+u)),m=g>0?a:Math.min(Math.max(-a,-h),a),_=-g*g+m*(m+2*h)+f);else m=c>0?-a:a,g=Math.max(0,-(c*m+u)),_=-g*g+m*(m+2*h)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Mf).addScaledVector(Jc,m),_}intersectSphere(e,t){hr.subVectors(e.center,this.origin);let n=hr.dot(this.direction),s=hr.dot(hr)-n*n,a=e.radius*e.radius;if(s>a)return null;let c=Math.sqrt(a-s),u=n-c,h=n+c;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,c,u,h,f=1/this.direction.x,d=1/this.direction.y,g=1/this.direction.z,m=this.origin;return f>=0?(n=(e.min.x-m.x)*f,s=(e.max.x-m.x)*f):(n=(e.max.x-m.x)*f,s=(e.min.x-m.x)*f),d>=0?(a=(e.min.y-m.y)*d,c=(e.max.y-m.y)*d):(a=(e.max.y-m.y)*d,c=(e.min.y-m.y)*d),n>c||a>s||((a>n||isNaN(n))&&(n=a),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-m.z)*g,h=(e.max.z-m.z)*g):(u=(e.max.z-m.z)*g,h=(e.min.z-m.z)*g),n>h||u>s)||((u>n||n!==n)&&(n=u),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hr)!==null}intersectTriangle(e,t,n,s,a){bf.subVectors(t,e),Kc.subVectors(n,e),wf.crossVectors(bf,Kc);let c=this.direction.dot(wf),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Br.subVectors(this.origin,e);let h=u*this.direction.dot(Kc.crossVectors(Br,Kc));if(h<0)return null;let f=u*this.direction.dot(bf.cross(Br));if(f<0||h+f>c)return null;let d=-u*Br.dot(wf);return d<0?null:this.at(d/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},sn=class i{constructor(e,t,n,s,a,c,u,h,f,d,g,m,_,S,M,x){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,c,u,h,f,d,g,m,_,S,M,x)}set(e,t,n,s,a,c,u,h,f,d,g,m,_,S,M,x){let v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=s,v[1]=a,v[5]=c,v[9]=u,v[13]=h,v[2]=f,v[6]=d,v[10]=g,v[14]=m,v[3]=_,v[7]=S,v[11]=M,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ao.setFromMatrixColumn(e,0).length(),a=1/ao.setFromMatrixColumn(e,1).length(),c=1/ao.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,a=e.z,c=Math.cos(n),u=Math.sin(n),h=Math.cos(s),f=Math.sin(s),d=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){let m=c*d,_=c*g,S=u*d,M=u*g;t[0]=h*d,t[4]=-h*g,t[8]=f,t[1]=_+S*f,t[5]=m-M*f,t[9]=-u*h,t[2]=M-m*f,t[6]=S+_*f,t[10]=c*h}else if(e.order==="YXZ"){let m=h*d,_=h*g,S=f*d,M=f*g;t[0]=m+M*u,t[4]=S*u-_,t[8]=c*f,t[1]=c*g,t[5]=c*d,t[9]=-u,t[2]=_*u-S,t[6]=M+m*u,t[10]=c*h}else if(e.order==="ZXY"){let m=h*d,_=h*g,S=f*d,M=f*g;t[0]=m-M*u,t[4]=-c*g,t[8]=S+_*u,t[1]=_+S*u,t[5]=c*d,t[9]=M-m*u,t[2]=-c*f,t[6]=u,t[10]=c*h}else if(e.order==="ZYX"){let m=c*d,_=c*g,S=u*d,M=u*g;t[0]=h*d,t[4]=S*f-_,t[8]=m*f+M,t[1]=h*g,t[5]=M*f+m,t[9]=_*f-S,t[2]=-f,t[6]=u*h,t[10]=c*h}else if(e.order==="YZX"){let m=c*h,_=c*f,S=u*h,M=u*f;t[0]=h*d,t[4]=M-m*g,t[8]=S*g+_,t[1]=g,t[5]=c*d,t[9]=-u*d,t[2]=-f*d,t[6]=_*g+S,t[10]=m-M*g}else if(e.order==="XZY"){let m=c*h,_=c*f,S=u*h,M=u*f;t[0]=h*d,t[4]=-g,t[8]=f*d,t[1]=m*g+M,t[5]=c*d,t[9]=_*g-S,t[2]=S*g-_,t[6]=u*d,t[10]=M*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mE,e,gE)}lookAt(e,t,n){let s=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),zr.crossVectors(n,si),zr.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),zr.crossVectors(n,si)),zr.normalize(),Qc.crossVectors(si,zr),s[0]=zr.x,s[4]=Qc.x,s[8]=si.x,s[1]=zr.y,s[5]=Qc.y,s[9]=si.y,s[2]=zr.z,s[6]=Qc.z,s[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,a=this.elements,c=n[0],u=n[4],h=n[8],f=n[12],d=n[1],g=n[5],m=n[9],_=n[13],S=n[2],M=n[6],x=n[10],v=n[14],B=n[3],L=n[7],P=n[11],Y=n[15],D=s[0],O=s[4],V=s[8],I=s[12],A=s[1],G=s[5],ne=s[9],ee=s[13],le=s[2],fe=s[6],oe=s[10],we=s[14],se=s[3],Re=s[7],He=s[11],nt=s[15];return a[0]=c*D+u*A+h*le+f*se,a[4]=c*O+u*G+h*fe+f*Re,a[8]=c*V+u*ne+h*oe+f*He,a[12]=c*I+u*ee+h*we+f*nt,a[1]=d*D+g*A+m*le+_*se,a[5]=d*O+g*G+m*fe+_*Re,a[9]=d*V+g*ne+m*oe+_*He,a[13]=d*I+g*ee+m*we+_*nt,a[2]=S*D+M*A+x*le+v*se,a[6]=S*O+M*G+x*fe+v*Re,a[10]=S*V+M*ne+x*oe+v*He,a[14]=S*I+M*ee+x*we+v*nt,a[3]=B*D+L*A+P*le+Y*se,a[7]=B*O+L*G+P*fe+Y*Re,a[11]=B*V+L*ne+P*oe+Y*He,a[15]=B*I+L*ee+P*we+Y*nt,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],c=e[1],u=e[5],h=e[9],f=e[13],d=e[2],g=e[6],m=e[10],_=e[14],S=e[3],M=e[7],x=e[11],v=e[15];return S*(+a*h*g-s*f*g-a*u*m+n*f*m+s*u*_-n*h*_)+M*(+t*h*_-t*f*m+a*c*m-s*c*_+s*f*d-a*h*d)+x*(+t*f*g-t*u*_-a*c*g+n*c*_+a*u*d-n*f*d)+v*(-s*u*d-t*h*g+t*u*m+s*c*g-n*c*m+n*h*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],c=e[4],u=e[5],h=e[6],f=e[7],d=e[8],g=e[9],m=e[10],_=e[11],S=e[12],M=e[13],x=e[14],v=e[15],B=g*x*f-M*m*f+M*h*_-u*x*_-g*h*v+u*m*v,L=S*m*f-d*x*f-S*h*_+c*x*_+d*h*v-c*m*v,P=d*M*f-S*g*f+S*u*_-c*M*_-d*u*v+c*g*v,Y=S*g*h-d*M*h-S*u*m+c*M*m+d*u*x-c*g*x,D=t*B+n*L+s*P+a*Y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/D;return e[0]=B*O,e[1]=(M*m*a-g*x*a-M*s*_+n*x*_+g*s*v-n*m*v)*O,e[2]=(u*x*a-M*h*a+M*s*f-n*x*f-u*s*v+n*h*v)*O,e[3]=(g*h*a-u*m*a-g*s*f+n*m*f+u*s*_-n*h*_)*O,e[4]=L*O,e[5]=(d*x*a-S*m*a+S*s*_-t*x*_-d*s*v+t*m*v)*O,e[6]=(S*h*a-c*x*a-S*s*f+t*x*f+c*s*v-t*h*v)*O,e[7]=(c*m*a-d*h*a+d*s*f-t*m*f-c*s*_+t*h*_)*O,e[8]=P*O,e[9]=(S*g*a-d*M*a-S*n*_+t*M*_+d*n*v-t*g*v)*O,e[10]=(c*M*a-S*u*a+S*n*f-t*M*f-c*n*v+t*u*v)*O,e[11]=(d*u*a-c*g*a-d*n*f+t*g*f+c*n*_-t*u*_)*O,e[12]=Y*O,e[13]=(d*M*s-S*g*s+S*n*m-t*M*m-d*n*x+t*g*x)*O,e[14]=(S*u*s-c*M*s-S*n*h+t*M*h+c*n*x-t*u*x)*O,e[15]=(c*g*s-d*u*s+d*n*h-t*g*h-c*n*m+t*u*m)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),a=1-n,c=e.x,u=e.y,h=e.z,f=a*c,d=a*u;return this.set(f*c+n,f*u-s*h,f*h+s*u,0,f*u+s*h,d*u+n,d*h-s*c,0,f*h-s*u,d*h+s*c,a*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,c){return this.set(1,n,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,a=t._x,c=t._y,u=t._z,h=t._w,f=a+a,d=c+c,g=u+u,m=a*f,_=a*d,S=a*g,M=c*d,x=c*g,v=u*g,B=h*f,L=h*d,P=h*g,Y=n.x,D=n.y,O=n.z;return s[0]=(1-(M+v))*Y,s[1]=(_+P)*Y,s[2]=(S-L)*Y,s[3]=0,s[4]=(_-P)*D,s[5]=(1-(m+v))*D,s[6]=(x+B)*D,s[7]=0,s[8]=(S+L)*O,s[9]=(x-B)*O,s[10]=(1-(m+M))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,a=ao.set(s[0],s[1],s[2]).length(),c=ao.set(s[4],s[5],s[6]).length(),u=ao.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Di.copy(this);let f=1/a,d=1/c,g=1/u;return Di.elements[0]*=f,Di.elements[1]*=f,Di.elements[2]*=f,Di.elements[4]*=d,Di.elements[5]*=d,Di.elements[6]*=d,Di.elements[8]*=g,Di.elements[9]*=g,Di.elements[10]*=g,t.setFromRotationMatrix(Di),n.x=a,n.y=c,n.z=u,this}makePerspective(e,t,n,s,a,c,u=Wi){let h=this.elements,f=2*a/(t-e),d=2*a/(n-s),g=(t+e)/(t-e),m=(n+s)/(n-s),_,S;if(u===Wi)_=-(c+a)/(c-a),S=-2*c*a/(c-a);else if(u===ba)_=-c/(c-a),S=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=f,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=d,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=_,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,a,c,u=Wi){let h=this.elements,f=1/(t-e),d=1/(n-s),g=1/(c-a),m=(t+e)*f,_=(n+s)*d,S,M;if(u===Wi)S=(c+a)*g,M=-2*g;else if(u===ba)S=a*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*f,h[4]=0,h[8]=0,h[12]=-m,h[1]=0,h[5]=2*d,h[9]=0,h[13]=-_,h[2]=0,h[6]=0,h[10]=M,h[14]=-S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ao=new $,Di=new sn,mE=new $(0,0,0),gE=new $(1,1,1),zr=new $,Qc=new $,si=new $,_g=new sn,vg=new _r,Ts=(()=>{class i{constructor(t=0,n=0,s=0,a=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,a=this._order){return this._x=t,this._y=n,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){let a=t.elements,c=a[0],u=a[4],h=a[8],f=a[1],d=a[5],g=a[9],m=a[2],_=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-m,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,S),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(f,c));break;case"ZYX":this._y=Math.asin(-Tt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(f,c)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-m,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return _g.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_g,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return vg.setFromEuler(this),this.setFromQuaternion(vg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),So=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_E=0,xg=new $,co=new _r,fr=new sn,jc=new $,pa=new $,vE=new $,xE=new _r,yg=new $(1,0,0),Sg=new $(0,1,0),Mg=new $(0,0,1),bg={type:"added"},yE={type:"removed"},lo={type:"childadded",child:null},Ef={type:"childremoved",child:null},jr=(()=>{class i extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new $,n=new Ts,s=new _r,a=new $(1,1,1);function c(){s.setFromEuler(n,!1)}function u(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new sn},normalMatrix:{value:new wt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return co.setFromAxisAngle(t,n),this.quaternion.multiply(co),this}rotateOnWorldAxis(t,n){return co.setFromAxisAngle(t,n),this.quaternion.premultiply(co),this}rotateX(t){return this.rotateOnAxis(yg,t)}rotateY(t){return this.rotateOnAxis(Sg,t)}rotateZ(t){return this.rotateOnAxis(Mg,t)}translateOnAxis(t,n){return xg.copy(t).applyQuaternion(this.quaternion),this.position.add(xg.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(yg,t)}translateY(t){return this.translateOnAxis(Sg,t)}translateZ(t){return this.translateOnAxis(Mg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?jc.copy(t):jc.set(t,n,s);let a=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt(pa,jc,this.up):fr.lookAt(jc,pa,this.up),this.quaternion.setFromRotationMatrix(fr),a&&(fr.extractRotation(a.matrixWorld),co.setFromRotationMatrix(fr),this.quaternion.premultiply(co.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bg),lo.child=t,this.dispatchEvent(lo),lo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(yE),Ef.child=t,this.dispatchEvent(Ef),Ef.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fr.multiply(t.parent.matrixWorld)),t.applyMatrix4(fr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bg),lo.child=t,this.dispatchEvent(lo),lo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,a=this.children.length;s<a;s++){let u=this.children[s].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);let a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,t,vE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,xE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let a=this.children;for(let c=0,u=a.length;c<u;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(h=>Ge(ye({},h),{boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(h=>ye({},h)),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function c(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(t.geometries,this.geometry);let h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){let f=h.shapes;if(Array.isArray(f))for(let d=0,g=f.length;d<g;d++){let m=f[d];c(t.shapes,m)}else c(t.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let h=[];for(let f=0,d=this.material.length;f<d;f++)h.push(c(t.materials,this.material[f]));a.material=h}else a.material=c(t.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){let f=this.animations[h];a.animations.push(c(t.animations,f))}}if(n){let h=u(t.geometries),f=u(t.materials),d=u(t.textures),g=u(t.images),m=u(t.shapes),_=u(t.skeletons),S=u(t.animations),M=u(t.nodes);h.length>0&&(s.geometries=h),f.length>0&&(s.materials=f),d.length>0&&(s.textures=d),g.length>0&&(s.images=g),m.length>0&&(s.shapes=m),_.length>0&&(s.skeletons=_),S.length>0&&(s.animations=S),M.length>0&&(s.nodes=M)}return s.object=a,s;function u(h){let f=[];for(let d in h){let g=h[d];delete g.metadata,f.push(g)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){let a=t.children[s];this.add(a.clone())}return this}}return i.DEFAULT_UP=new $(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),Ui=new $,dr=new $,Tf=new $,pr=new $,uo=new $,ho=new $,wg=new $,Af=new $,Cf=new $,Rf=new $,If=new Kt,Pf=new Kt,Lf=new Kt,Hr=class i{constructor(e=new $,t=new $,n=new $){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ui.subVectors(e,t),s.cross(Ui);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){Ui.subVectors(s,t),dr.subVectors(n,t),Tf.subVectors(e,t);let c=Ui.dot(Ui),u=Ui.dot(dr),h=Ui.dot(Tf),f=dr.dot(dr),d=dr.dot(Tf),g=c*f-u*u;if(g===0)return a.set(0,0,0),null;let m=1/g,_=(f*h-u*d)*m,S=(c*d-u*h)*m;return a.set(1-_-S,S,_)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,t,n,s,a,c,u,h){return this.getBarycoord(e,t,n,s,pr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,pr.x),h.addScaledVector(c,pr.y),h.addScaledVector(u,pr.z),h)}static getInterpolatedAttribute(e,t,n,s,a,c){return If.setScalar(0),Pf.setScalar(0),Lf.setScalar(0),If.fromBufferAttribute(e,t),Pf.fromBufferAttribute(e,n),Lf.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(If,a.x),c.addScaledVector(Pf,a.y),c.addScaledVector(Lf,a.z),c}static isFrontFacing(e,t,n,s){return Ui.subVectors(n,t),dr.subVectors(e,t),Ui.cross(dr).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),dr.subVectors(this.a,this.b),Ui.cross(dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,a=this.c,c,u;uo.subVectors(s,n),ho.subVectors(a,n),Af.subVectors(e,n);let h=uo.dot(Af),f=ho.dot(Af);if(h<=0&&f<=0)return t.copy(n);Cf.subVectors(e,s);let d=uo.dot(Cf),g=ho.dot(Cf);if(d>=0&&g<=d)return t.copy(s);let m=h*g-d*f;if(m<=0&&h>=0&&d<=0)return c=h/(h-d),t.copy(n).addScaledVector(uo,c);Rf.subVectors(e,a);let _=uo.dot(Rf),S=ho.dot(Rf);if(S>=0&&_<=S)return t.copy(a);let M=_*f-h*S;if(M<=0&&f>=0&&S<=0)return u=f/(f-S),t.copy(n).addScaledVector(ho,u);let x=d*S-_*g;if(x<=0&&g-d>=0&&_-S>=0)return wg.subVectors(a,s),u=(g-d)/(g-d+(_-S)),t.copy(s).addScaledVector(wg,u);let v=1/(x+M+m);return c=M*v,u=m*v,t.copy(n).addScaledVector(uo,c).addScaledVector(ho,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},L_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},el={h:0,s:0,l:0};function Df(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var yt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Vt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Vt.workingColorSpace){if(e=md(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let a=n<=.5?n*(1+t):n+t-n*t,c=2*n-a;this.r=Df(c,a,e+1/3),this.g=Df(c,a,e),this.b=Df(c,a,e-1/3)}return Vt.colorSpaceToWorking(this,s),this}setStyle(e,t=ai){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){let n=L_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Vt.workingToColorSpace(Nn.copy(this),e),Math.round(Tt(Nn.r*255,0,255))*65536+Math.round(Tt(Nn.g*255,0,255))*256+Math.round(Tt(Nn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vt.workingColorSpace){Vt.workingToColorSpace(Nn.copy(this),t);let n=Nn.r,s=Nn.g,a=Nn.b,c=Math.max(n,s,a),u=Math.min(n,s,a),h,f,d=(u+c)/2;if(u===c)h=0,f=0;else{let g=c-u;switch(f=d<=.5?g/(c+u):g/(2-c-u),c){case n:h=(s-a)/g+(s<a?6:0);break;case s:h=(a-n)/g+2;break;case a:h=(n-s)/g+4;break}h/=6}return e.h=h,e.s=f,e.l=d,e}getRGB(e,t=Vt.workingColorSpace){return Vt.workingToColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=ai){Vt.workingToColorSpace(Nn.copy(this),e);let t=Nn.r,n=Nn.g,s=Nn.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Vr),this.setHSL(Vr.h+e,Vr.s+t,Vr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vr),e.getHSL(el);let n=va(Vr.h,el.h,t),s=va(Vr.s,el.s,t),a=va(Vr.l,el.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nn=new yt;yt.NAMES=L_;var SE=0,Xr=class extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=bs,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=_l,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(n.blending=this.blending),this.side!==gr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gl&&(n.blendSrc=this.blendSrc),this.blendDst!==_l&&(n.blendDst=this.blendDst),this.blendEquation!==Wr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){let c=[];for(let u in a){let h=a[u];delete h.metadata,c.push(h)}return c}if(t){let a=s(e.textures),c=s(e.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Bi=class extends Xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ts,this.combine=rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var gn=new $,tl=new st,ME=0,wn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ME++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sl,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tl.fromBufferAttribute(this,t),tl.applyMatrix3(e),this.setXY(t,tl.x,tl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix3(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array),a=$t(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sl&&(e.usage=this.usage),e}};var Ta=class extends wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Aa=class extends wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var mn=class extends wn{constructor(e,t,n){super(new Float32Array(e),t,n)}},bE=0,Mi=new sn,Uf=new jr,fo=new $,oi=new ci,ma=new ci,bn=new $,Fn=class i extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gd(e)?Aa:Ta)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let a=new wt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,t,n){return Mi.makeTranslation(e,t,n),this.applyMatrix4(Mi),this}scale(e,t,n){return Mi.makeScale(e,t,n),this.applyMatrix4(Mi),this}lookAt(e){return Uf.lookAt(e),Uf.updateMatrix(),this.applyMatrix4(Uf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,a=e.length;s<a;s++){let c=e[s];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new mn(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let a=t[n];oi.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){let n=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){let u=t[a];ma.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(oi.min,ma.min),oi.expandByPoint(bn),bn.addVectors(oi.max,ma.max),oi.expandByPoint(bn)):(oi.expandByPoint(ma.min),oi.expandByPoint(ma.max))}oi.getCenter(n);let s=0;for(let a=0,c=e.count;a<c;a++)bn.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(bn));if(t)for(let a=0,c=t.length;a<c;a++){let u=t[a],h=this.morphTargetsRelative;for(let f=0,d=u.count;f<d;f++)bn.fromBufferAttribute(u,f),h&&(fo.fromBufferAttribute(e,f),bn.add(fo)),s=Math.max(s,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*n.count),4));let c=this.getAttribute("tangent"),u=[],h=[];for(let V=0;V<n.count;V++)u[V]=new $,h[V]=new $;let f=new $,d=new $,g=new $,m=new st,_=new st,S=new st,M=new $,x=new $;function v(V,I,A){f.fromBufferAttribute(n,V),d.fromBufferAttribute(n,I),g.fromBufferAttribute(n,A),m.fromBufferAttribute(a,V),_.fromBufferAttribute(a,I),S.fromBufferAttribute(a,A),d.sub(f),g.sub(f),_.sub(m),S.sub(m);let G=1/(_.x*S.y-S.x*_.y);isFinite(G)&&(M.copy(d).multiplyScalar(S.y).addScaledVector(g,-_.y).multiplyScalar(G),x.copy(g).multiplyScalar(_.x).addScaledVector(d,-S.x).multiplyScalar(G),u[V].add(M),u[I].add(M),u[A].add(M),h[V].add(x),h[I].add(x),h[A].add(x))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let V=0,I=B.length;V<I;++V){let A=B[V],G=A.start,ne=A.count;for(let ee=G,le=G+ne;ee<le;ee+=3)v(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}let L=new $,P=new $,Y=new $,D=new $;function O(V){Y.fromBufferAttribute(s,V),D.copy(Y);let I=u[V];L.copy(I),L.sub(Y.multiplyScalar(Y.dot(I))).normalize(),P.crossVectors(D,I);let G=P.dot(h[V])<0?-1:1;c.setXYZW(V,L.x,L.y,L.z,G)}for(let V=0,I=B.length;V<I;++V){let A=B[V],G=A.start,ne=A.count;for(let ee=G,le=G+ne;ee<le;ee+=3)O(e.getX(ee+0)),O(e.getX(ee+1)),O(e.getX(ee+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,_=n.count;m<_;m++)n.setXYZ(m,0,0,0);let s=new $,a=new $,c=new $,u=new $,h=new $,f=new $,d=new $,g=new $;if(e)for(let m=0,_=e.count;m<_;m+=3){let S=e.getX(m+0),M=e.getX(m+1),x=e.getX(m+2);s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,M),c.fromBufferAttribute(t,x),d.subVectors(c,a),g.subVectors(s,a),d.cross(g),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,x),u.add(d),h.add(d),f.add(d),n.setXYZ(S,u.x,u.y,u.z),n.setXYZ(M,h.x,h.y,h.z),n.setXYZ(x,f.x,f.y,f.z)}else for(let m=0,_=t.count;m<_;m+=3)s.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),d.subVectors(c,a),g.subVectors(s,a),d.cross(g),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(u,h){let f=u.array,d=u.itemSize,g=u.normalized,m=new f.constructor(h.length*d),_=0,S=0;for(let M=0,x=h.length;M<x;M++){u.isInterleavedBufferAttribute?_=h[M]*u.data.stride+u.offset:_=h[M]*d;for(let v=0;v<d;v++)m[S++]=f[_++]}return new wn(m,d,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let u in s){let h=s[u],f=e(h,n);t.setAttribute(u,f)}let a=this.morphAttributes;for(let u in a){let h=[],f=a[u];for(let d=0,g=f.length;d<g;d++){let m=f[d],_=e(m,n);h.push(_)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let u=0,h=c.length;u<h;u++){let f=c[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let h=this.parameters;for(let f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let h in n){let f=n[h];e.data.attributes[h]=f.toJSON(e.data)}let s={},a=!1;for(let h in this.morphAttributes){let f=this.morphAttributes[h],d=[];for(let g=0,m=f.length;g<m;g++){let _=f[g];d.push(_.toJSON(e.data))}d.length>0&&(s[h]=d,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));let u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let f in s){let d=s[f];this.setAttribute(f,d.clone(t))}let a=e.morphAttributes;for(let f in a){let d=[],g=a[f];for(let m=0,_=g.length;m<_;m++)d.push(g[m].clone(t));this.morphAttributes[f]=d}this.morphTargetsRelative=e.morphTargetsRelative;let c=e.groups;for(let f=0,d=c.length;f<d;f++){let g=c[f];this.addGroup(g.start,g.count,g.materialIndex)}let u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());let h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Eg=new sn,xs=new yo,nl=new Oi,Tg=new $,il=new $,rl=new $,sl=new $,Nf=new $,ol=new $,Ag=new $,al=new $,hn=class extends jr{constructor(e=new Fn,t=new Bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){let u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let u=this.morphTargetInfluences;if(a&&u){ol.set(0,0,0);for(let h=0,f=a.length;h<f;h++){let d=u[h],g=a[h];d!==0&&(Nf.fromBufferAttribute(g,e),c?ol.addScaledVector(Nf,d):ol.addScaledVector(Nf.sub(t),d))}t.add(ol)}return t}raycast(e,t){let n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nl.copy(n.boundingSphere),nl.applyMatrix4(a),xs.copy(e.ray).recast(e.near),!(nl.containsPoint(xs.origin)===!1&&(xs.intersectSphere(nl,Tg)===null||xs.origin.distanceToSquared(Tg)>(e.far-e.near)**2))&&(Eg.copy(a).invert(),xs.copy(e.ray).applyMatrix4(Eg),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,n){let s,a=this.geometry,c=this.material,u=a.index,h=a.attributes.position,f=a.attributes.uv,d=a.attributes.uv1,g=a.attributes.normal,m=a.groups,_=a.drawRange;if(u!==null)if(Array.isArray(c))for(let S=0,M=m.length;S<M;S++){let x=m[S],v=c[x.materialIndex],B=Math.max(x.start,_.start),L=Math.min(u.count,Math.min(x.start+x.count,_.start+_.count));for(let P=B,Y=L;P<Y;P+=3){let D=u.getX(P),O=u.getX(P+1),V=u.getX(P+2);s=cl(this,v,e,n,f,d,g,D,O,V),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let S=Math.max(0,_.start),M=Math.min(u.count,_.start+_.count);for(let x=S,v=M;x<v;x+=3){let B=u.getX(x),L=u.getX(x+1),P=u.getX(x+2);s=cl(this,c,e,n,f,d,g,B,L,P),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let S=0,M=m.length;S<M;S++){let x=m[S],v=c[x.materialIndex],B=Math.max(x.start,_.start),L=Math.min(h.count,Math.min(x.start+x.count,_.start+_.count));for(let P=B,Y=L;P<Y;P+=3){let D=P,O=P+1,V=P+2;s=cl(this,v,e,n,f,d,g,D,O,V),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let S=Math.max(0,_.start),M=Math.min(h.count,_.start+_.count);for(let x=S,v=M;x<v;x+=3){let B=x,L=x+1,P=x+2;s=cl(this,c,e,n,f,d,g,B,L,P),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};function wE(i,e,t,n,s,a,c,u){let h;if(e.side===Wn?h=n.intersectTriangle(c,a,s,!0,u):h=n.intersectTriangle(s,a,c,e.side===gr,u),h===null)return null;al.copy(u),al.applyMatrix4(i.matrixWorld);let f=t.ray.origin.distanceTo(al);return f<t.near||f>t.far?null:{distance:f,point:al.clone(),object:i}}function cl(i,e,t,n,s,a,c,u,h,f){i.getVertexPosition(u,il),i.getVertexPosition(h,rl),i.getVertexPosition(f,sl);let d=wE(i,e,t,n,il,rl,sl,Ag);if(d){let g=new $;Hr.getBarycoord(Ag,il,rl,sl,g),s&&(d.uv=Hr.getInterpolatedAttribute(s,u,h,f,g,new st)),a&&(d.uv1=Hr.getInterpolatedAttribute(a,u,h,f,g,new st)),c&&(d.normal=Hr.getInterpolatedAttribute(c,u,h,f,g,new $),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let m={a:u,b:h,c:f,normal:new $,materialIndex:0};Hr.getNormal(il,rl,sl,m.normal),d.face=m,d.barycoord=g}return d}var Mo=class i extends Fn{constructor(e=1,t=1,n=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:c};let u=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);let h=[],f=[],d=[],g=[],m=0,_=0;S("z","y","x",-1,-1,n,t,e,c,a,0),S("z","y","x",1,-1,n,t,-e,c,a,1),S("x","z","y",1,1,e,n,t,s,c,2),S("x","z","y",1,-1,e,n,-t,s,c,3),S("x","y","z",1,-1,e,t,n,s,a,4),S("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(h),this.setAttribute("position",new mn(f,3)),this.setAttribute("normal",new mn(d,3)),this.setAttribute("uv",new mn(g,2));function S(M,x,v,B,L,P,Y,D,O,V,I){let A=P/O,G=Y/V,ne=P/2,ee=Y/2,le=D/2,fe=O+1,oe=V+1,we=0,se=0,Re=new $;for(let He=0;He<oe;He++){let nt=He*G-ee;for(let pt=0;pt<fe;pt++){let Lt=pt*A-ne;Re[M]=Lt*B,Re[x]=nt*L,Re[v]=le,f.push(Re.x,Re.y,Re.z),Re[M]=0,Re[x]=0,Re[v]=D>0?1:-1,d.push(Re.x,Re.y,Re.z),g.push(pt/O),g.push(1-He/V),we+=1}}for(let He=0;He<V;He++)for(let nt=0;nt<O;nt++){let pt=m+nt+fe*He,Lt=m+nt+fe*(He+1),de=m+(nt+1)+fe*(He+1),Ie=m+(nt+1)+fe*He;h.push(pt,Lt,Ie),h.push(Lt,de,Ie),se+=6}u.addGroup(_,se,I),_+=se,m+=we}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ds(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function On(i){let e={};for(let t=0;t<i.length;t++){let n=Ds(i[t]);for(let s in n)e[s]=n[s]}return e}function EE(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _d(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Vt.workingColorSpace}var Ja={clone:Ds,merge:On},TE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,li=class extends Xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TE,this.fragmentShader=AE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=EE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ca=class extends jr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gr=new $,Cg=new st,Rg=new st,Kn=class extends Ca{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z),Gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z)}getViewSize(e,t){return this.getViewBounds(e,Cg,Rg),t.subVectors(Rg,Cg)}setViewOffset(e,t,n,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_a*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s,c=this.view;if(this.view!==null&&this.view.enabled){let h=c.fullWidth,f=c.fullHeight;a+=c.offsetX*s/h,t-=c.offsetY*n/f,s*=c.width/h,n*=c.height/f}let u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},po=-90,mo=1,El=class extends jr{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kn(po,mo,e,t);s.layers=this.layers,this.add(s);let a=new Kn(po,mo,e,t);a.layers=this.layers,this.add(a);let c=new Kn(po,mo,e,t);c.layers=this.layers,this.add(c);let u=new Kn(po,mo,e,t);u.layers=this.layers,this.add(u);let h=new Kn(po,mo,e,t);h.layers=this.layers,this.add(h);let f=new Kn(po,mo,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,a,c,u,h]=t;for(let f of t)this.remove(f);if(e===Wi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,c,u,h,f,d]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,c),e.setRenderTarget(n,2,s),e.render(t,u),e.setRenderTarget(n,3,s),e.render(t,h),e.setRenderTarget(n,4,s),e.render(t,f),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(g,m,_),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}},Ra=class extends Qr{constructor(e=[],t=Ps,n,s,a,c,u,h,f,d){super(e,t,n,s,a,c,u,h,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Tl=class extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ra(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Mo(5,5,5),a=new li({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:vr});a.uniforms.tEquirect.value=t;let c=new hn(s,a),u=t.minFilter;return t.minFilter===Jr&&(t.minFilter=Fi),new El(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,s);e.setRenderTarget(a)}},Ms=class extends jr{constructor(){super(),this.isGroup=!0,this.type="Group"}},CE={type:"move"},bo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,c=null,u=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(let M of e.hand.values()){let x=t.getJointPose(M,n),v=this._getHandJoint(f,M);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}let d=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],m=d.position.distanceTo(g.position),_=.02,S=.005;f.inputState.pinching&&m>_+S?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=_-S&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(CE)))}return u!==null&&(u.visible=s!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ms;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var qf=class extends jr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ts,this.environmentIntensity=1,this.environmentRotation=new Ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Al=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sl,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},kn=new $,zi=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array),a=$t(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new wn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Ff=new $,RE=new $,IE=new wt,ki=class{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ff.subVectors(n,t).cross(RE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ff),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||IE.getNormalMatrix(e),s=this.coplanarPoint(Ff).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ys=new Oi,PE=new st(.5,.5),ll=new $,Ia=class{constructor(e=new ki,t=new ki,n=new ki,s=new ki,a=new ki,c=new ki){this.planes=[e,t,n,s,a,c]}set(e,t,n,s,a,c){let u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(s),u[4].copy(a),u[5].copy(c),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wi){let n=this.planes,s=e.elements,a=s[0],c=s[1],u=s[2],h=s[3],f=s[4],d=s[5],g=s[6],m=s[7],_=s[8],S=s[9],M=s[10],x=s[11],v=s[12],B=s[13],L=s[14],P=s[15];if(n[0].setComponents(h-a,m-f,x-_,P-v).normalize(),n[1].setComponents(h+a,m+f,x+_,P+v).normalize(),n[2].setComponents(h+c,m+d,x+S,P+B).normalize(),n[3].setComponents(h-c,m-d,x-S,P-B).normalize(),n[4].setComponents(h-u,m-g,x-M,P-L).normalize(),t===Wi)n[5].setComponents(h+u,m+g,x+M,P+L).normalize();else if(t===ba)n[5].setComponents(u,g,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){ys.center.set(0,0,0);let t=PE.distanceTo(e.center);return ys.radius=.7071067811865476+t,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ll.x=s.normal.x>0?e.max.x:e.min.x,ll.y=s.normal.y>0?e.max.y:e.min.y,ll.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var As=class extends Xr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Cl=new $,Rl=new $,Ig=new sn,ga=new yo,ul=new Oi,Of=new $,Pg=new $,Il=class extends jr{constructor(e=new Fn,t=new As){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)Cl.fromBufferAttribute(t,s-1),Rl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Cl.distanceTo(Rl);e.setAttribute("lineDistance",new mn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(s),ul.radius+=a,e.ray.intersectsSphere(ul)===!1)return;Ig.copy(s).invert(),ga.copy(e.ray).applyMatrix4(Ig);let u=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=this.isLineSegments?2:1,d=n.index,m=n.attributes.position;if(d!==null){let _=Math.max(0,c.start),S=Math.min(d.count,c.start+c.count);for(let M=_,x=S-1;M<x;M+=f){let v=d.getX(M),B=d.getX(M+1),L=hl(this,e,ga,h,v,B,M);L&&t.push(L)}if(this.isLineLoop){let M=d.getX(S-1),x=d.getX(_),v=hl(this,e,ga,h,M,x,S-1);v&&t.push(v)}}else{let _=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let M=_,x=S-1;M<x;M+=f){let v=hl(this,e,ga,h,M,M+1,M);v&&t.push(v)}if(this.isLineLoop){let M=hl(this,e,ga,h,S-1,_,S-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){let u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}};function hl(i,e,t,n,s,a,c){let u=i.geometry.attributes.position;if(Cl.fromBufferAttribute(u,s),Rl.fromBufferAttribute(u,a),t.distanceSqToSegment(Cl,Rl,Of,Pg)>n)return;Of.applyMatrix4(i.matrixWorld);let f=e.ray.origin.distanceTo(Of);if(!(f<e.near||f>e.far))return{distance:f,point:Pg.clone().applyMatrix4(i.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:i}}var Lg=new $,Dg=new $,Cs=class extends Il{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)Lg.fromBufferAttribute(t,s),Dg.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Lg.distanceTo(Dg);e.setAttribute("lineDistance",new mn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Pa=class extends Qr{constructor(e,t,n=Kr,s,a,c,u=bi,h=bi,f,d=_o,g=1){if(d!==_o&&d!==Ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:e,height:t,depth:g};super(m,s,a,c,u,h,d,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var wo=class i extends Fn{constructor(e=1,t=1,n=1,s=32,a=1,c=!1,u=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:h};let f=this;s=Math.floor(s),a=Math.floor(a);let d=[],g=[],m=[],_=[],S=0,M=[],x=n/2,v=0;B(),c===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(d),this.setAttribute("position",new mn(g,3)),this.setAttribute("normal",new mn(m,3)),this.setAttribute("uv",new mn(_,2));function B(){let P=new $,Y=new $,D=0,O=(t-e)/n;for(let V=0;V<=a;V++){let I=[],A=V/a,G=A*(t-e)+e;for(let ne=0;ne<=s;ne++){let ee=ne/s,le=ee*h+u,fe=Math.sin(le),oe=Math.cos(le);Y.x=G*fe,Y.y=-A*n+x,Y.z=G*oe,g.push(Y.x,Y.y,Y.z),P.set(fe,O,oe).normalize(),m.push(P.x,P.y,P.z),_.push(ee,1-A),I.push(S++)}M.push(I)}for(let V=0;V<s;V++)for(let I=0;I<a;I++){let A=M[I][V],G=M[I+1][V],ne=M[I+1][V+1],ee=M[I][V+1];(e>0||I!==0)&&(d.push(A,G,ee),D+=3),(t>0||I!==a-1)&&(d.push(G,ne,ee),D+=3)}f.addGroup(v,D,0),v+=D}function L(P){let Y=S,D=new st,O=new $,V=0,I=P===!0?e:t,A=P===!0?1:-1;for(let ne=1;ne<=s;ne++)g.push(0,x*A,0),m.push(0,A,0),_.push(.5,.5),S++;let G=S;for(let ne=0;ne<=s;ne++){let le=ne/s*h+u,fe=Math.cos(le),oe=Math.sin(le);O.x=I*oe,O.y=x*A,O.z=I*fe,g.push(O.x,O.y,O.z),m.push(0,A,0),D.x=fe*.5+.5,D.y=oe*.5*A+.5,_.push(D.x,D.y),S++}for(let ne=0;ne<s;ne++){let ee=Y+ne,le=G+ne;P===!0?d.push(le,le+1,ee):d.push(le+1,le,ee),V+=3}f.addGroup(v,V,P===!0?1:2),v+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rs=class i extends wo{constructor(e=1,t=1,n=32,s=1,a=!1,c=0,u=Math.PI*2){super(0,e,t,n,s,a,c,u),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:c,thetaLength:u}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ui=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),a=0;t.push(0);for(let c=1;c<=e;c++)n=this.getPoint(c/e),a+=n.distanceTo(s),t.push(a),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,a=n.length,c;t?c=t:c=e*n[a-1];let u=0,h=a-1,f;for(;u<=h;)if(s=Math.floor(u+(h-u)/2),f=n[s]-c,f<0)u=s+1;else if(f>0)h=s-1;else{h=s;break}if(s=h,n[s]===c)return s/(a-1);let d=n[s],m=n[s+1]-d,_=(c-d)/m;return(s+_)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);let c=this.getPoint(s),u=this.getPoint(a),h=t||(c.isVector2?new st:new $);return h.copy(u).sub(c).normalize(),h}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new $,s=[],a=[],c=[],u=new $,h=new sn;for(let _=0;_<=e;_++){let S=_/e;s[_]=this.getTangentAt(S,new $)}a[0]=new $,c[0]=new $;let f=Number.MAX_VALUE,d=Math.abs(s[0].x),g=Math.abs(s[0].y),m=Math.abs(s[0].z);d<=f&&(f=d,n.set(1,0,0)),g<=f&&(f=g,n.set(0,1,0)),m<=f&&n.set(0,0,1),u.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],u),c[0].crossVectors(s[0],a[0]);for(let _=1;_<=e;_++){if(a[_]=a[_-1].clone(),c[_]=c[_-1].clone(),u.crossVectors(s[_-1],s[_]),u.length()>Number.EPSILON){u.normalize();let S=Math.acos(Tt(s[_-1].dot(s[_]),-1,1));a[_].applyMatrix4(h.makeRotationAxis(u,S))}c[_].crossVectors(s[_],a[_])}if(t===!0){let _=Math.acos(Tt(a[0].dot(a[e]),-1,1));_/=e,s[0].dot(u.crossVectors(a[0],a[e]))>0&&(_=-_);for(let S=1;S<=e;S++)a[S].applyMatrix4(h.makeRotationAxis(s[S],_*S)),c[S].crossVectors(s[S],a[S])}return{tangents:s,normals:a,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Eo=class extends ui{constructor(e=0,t=0,n=1,s=1,a=0,c=Math.PI*2,u=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=c,this.aClockwise=u,this.aRotation=h}getPoint(e,t=new st){let n=t,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,c=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(c?a=0:a=s),this.aClockwise===!0&&!c&&(a===s?a=-s:a=a-s);let u=this.aStartAngle+e*a,h=this.aX+this.xRadius*Math.cos(u),f=this.aY+this.yRadius*Math.sin(u);if(this.aRotation!==0){let d=Math.cos(this.aRotation),g=Math.sin(this.aRotation),m=h-this.aX,_=f-this.aY;h=m*d-_*g+this.aX,f=m*g+_*d+this.aY}return n.set(h,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Pl=class extends Eo{constructor(e,t,n,s,a,c){super(e,t,n,n,s,a,c),this.isArcCurve=!0,this.type="ArcCurve"}};function vd(){let i=0,e=0,t=0,n=0;function s(a,c,u,h){i=a,e=u,t=-3*a+3*c-2*u-h,n=2*a-2*c+u+h}return{initCatmullRom:function(a,c,u,h,f){s(c,u,f*(u-a),f*(h-c))},initNonuniformCatmullRom:function(a,c,u,h,f,d,g){let m=(c-a)/f-(u-a)/(f+d)+(u-c)/d,_=(u-c)/d-(h-c)/(d+g)+(h-u)/g;m*=d,_*=d,s(c,u,m,_)},calc:function(a){let c=a*a,u=c*a;return i+e*a+t*c+n*u}}}var fl=new $,Bf=new vd,zf=new vd,Vf=new vd,Ll=class extends ui{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new $){let n=t,s=this.points,a=s.length,c=(a-(this.closed?0:1))*e,u=Math.floor(c),h=c-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/a)+1)*a:h===0&&u===a-1&&(u=a-2,h=1);let f,d;this.closed||u>0?f=s[(u-1)%a]:(fl.subVectors(s[0],s[1]).add(s[0]),f=fl);let g=s[u%a],m=s[(u+1)%a];if(this.closed||u+2<a?d=s[(u+2)%a]:(fl.subVectors(s[a-1],s[a-2]).add(s[a-1]),d=fl),this.curveType==="centripetal"||this.curveType==="chordal"){let _=this.curveType==="chordal"?.5:.25,S=Math.pow(f.distanceToSquared(g),_),M=Math.pow(g.distanceToSquared(m),_),x=Math.pow(m.distanceToSquared(d),_);M<1e-4&&(M=1),S<1e-4&&(S=M),x<1e-4&&(x=M),Bf.initNonuniformCatmullRom(f.x,g.x,m.x,d.x,S,M,x),zf.initNonuniformCatmullRom(f.y,g.y,m.y,d.y,S,M,x),Vf.initNonuniformCatmullRom(f.z,g.z,m.z,d.z,S,M,x)}else this.curveType==="catmullrom"&&(Bf.initCatmullRom(f.x,g.x,m.x,d.x,this.tension),zf.initCatmullRom(f.y,g.y,m.y,d.y,this.tension),Vf.initCatmullRom(f.z,g.z,m.z,d.z,this.tension));return n.set(Bf.calc(h),zf.calc(h),Vf.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new $().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ug(i,e,t,n,s){let a=(n-e)*.5,c=(s-t)*.5,u=i*i,h=i*u;return(2*t-2*n+a+c)*h+(-3*t+3*n-2*a-c)*u+a*i+t}function LE(i,e){let t=1-i;return t*t*e}function DE(i,e){return 2*(1-i)*i*e}function UE(i,e){return i*i*e}function xa(i,e,t,n){return LE(i,e)+DE(i,t)+UE(i,n)}function NE(i,e){let t=1-i;return t*t*t*e}function FE(i,e){let t=1-i;return 3*t*t*i*e}function OE(i,e){return 3*(1-i)*i*i*e}function BE(i,e){return i*i*i*e}function ya(i,e,t,n,s){return NE(i,e)+FE(i,t)+OE(i,n)+BE(i,s)}var La=class extends ui{constructor(e=new st,t=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new st){let n=t,s=this.v0,a=this.v1,c=this.v2,u=this.v3;return n.set(ya(e,s.x,a.x,c.x,u.x),ya(e,s.y,a.y,c.y,u.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Dl=class extends ui{constructor(e=new $,t=new $,n=new $,s=new $){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new $){let n=t,s=this.v0,a=this.v1,c=this.v2,u=this.v3;return n.set(ya(e,s.x,a.x,c.x,u.x),ya(e,s.y,a.y,c.y,u.y),ya(e,s.z,a.z,c.z,u.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Da=class extends ui{constructor(e=new st,t=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new st){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new st){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ul=class extends ui{constructor(e=new $,t=new $){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new $){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ua=class extends ui{constructor(e=new st,t=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new st){let n=t,s=this.v0,a=this.v1,c=this.v2;return n.set(xa(e,s.x,a.x,c.x),xa(e,s.y,a.y,c.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nl=class extends ui{constructor(e=new $,t=new $,n=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new $){let n=t,s=this.v0,a=this.v1,c=this.v2;return n.set(xa(e,s.x,a.x,c.x),xa(e,s.y,a.y,c.y),xa(e,s.z,a.z,c.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new st){let n=t,s=this.points,a=(s.length-1)*e,c=Math.floor(a),u=a-c,h=s[c===0?c:c-1],f=s[c],d=s[c>s.length-2?s.length-1:c+1],g=s[c>s.length-3?s.length-1:c+2];return n.set(Ug(u,h.x,f.x,d.x,g.x),Ug(u,h.y,f.y,d.y,g.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new st().fromArray(s))}return this}},Ng=Object.freeze({__proto__:null,ArcCurve:Pl,CatmullRomCurve3:Ll,CubicBezierCurve:La,CubicBezierCurve3:Dl,EllipseCurve:Eo,LineCurve:Da,LineCurve3:Ul,QuadraticBezierCurve:Ua,QuadraticBezierCurve3:Nl,SplineCurve:Na}),Fl=class extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ng[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=n){let c=s[a]-n,u=this.curves[a],h=u.getLength(),f=h===0?0:1-c/h;return u.getPointAt(f,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,a=this.curves;s<a.length;s++){let c=a[s],u=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(u);for(let f=0;f<h.length;f++){let d=h[f];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ng[s.type]().fromJSON(s))}return this}},Fa=class extends Fl{constructor(e){super(),this.type="Path",this.currentPoint=new st,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Da(this.currentPoint.clone(),new st(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let a=new Ua(this.currentPoint.clone(),new st(e,t),new st(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,a,c){let u=new La(this.currentPoint.clone(),new st(e,t),new st(n,s),new st(a,c));return this.curves.push(u),this.currentPoint.set(a,c),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Na(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,a,c){let u=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+u,t+h,n,s,a,c),this}absarc(e,t,n,s,a,c){return this.absellipse(e,t,n,n,s,a,c),this}ellipse(e,t,n,s,a,c,u,h){let f=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+f,t+d,n,s,a,c,u,h),this}absellipse(e,t,n,s,a,c,u,h){let f=new Eo(e,t,n,s,a,c,u,h);if(this.curves.length>0){let g=f.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(f);let d=f.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Oa=class extends Fa{constructor(e){super(e),this.uuid=Xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Fa().fromJSON(s))}return this}};var Ba=class i extends Fn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let a=e/2,c=t/2,u=Math.floor(n),h=Math.floor(s),f=u+1,d=h+1,g=e/u,m=t/h,_=[],S=[],M=[],x=[];for(let v=0;v<d;v++){let B=v*m-c;for(let L=0;L<f;L++){let P=L*g-a;S.push(P,-B,0),M.push(0,0,1),x.push(L/u),x.push(1-v/h)}}for(let v=0;v<h;v++)for(let B=0;B<u;B++){let L=B+f*v,P=B+f*(v+1),Y=B+1+f*(v+1),D=B+1+f*v;_.push(L,P,D),_.push(P,Y,D)}this.setIndex(_),this.setAttribute("position",new mn(S,3)),this.setAttribute("normal",new mn(M,3)),this.setAttribute("uv",new mn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var qr=class extends Fn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,s=new $,a=new $;if(e.index!==null){let c=e.attributes.position,u=e.index,h=e.groups;h.length===0&&(h=[{start:0,count:u.count,materialIndex:0}]);for(let f=0,d=h.length;f<d;++f){let g=h[f],m=g.start,_=g.count;for(let S=m,M=m+_;S<M;S+=3)for(let x=0;x<3;x++){let v=u.getX(S+x),B=u.getX(S+(x+1)%3);s.fromBufferAttribute(c,v),a.fromBufferAttribute(c,B),Fg(s,a,n)===!0&&(t.push(s.x,s.y,s.z),t.push(a.x,a.y,a.z))}}}else{let c=e.attributes.position;for(let u=0,h=c.count/3;u<h;u++)for(let f=0;f<3;f++){let d=3*u+f,g=3*u+(f+1)%3;s.fromBufferAttribute(c,d),a.fromBufferAttribute(c,g),Fg(s,a,n)===!0&&(t.push(s.x,s.y,s.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new mn(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Fg(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}var Ol=class extends Xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=__,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bl=class extends Xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function dl(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function zE(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Is=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],a=t[n-1];e:{t:{let c;n:{i:if(!(e<s)){for(let u=n+2;;){if(s===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===u)break;if(a=s,s=t[++n],e<s)break t}c=t.length;break n}if(!(e>=a)){let u=t[1];e<u&&(n=2,a=u);for(let h=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=a,a=t[--n-1],e>=a)break t}c=n,n=0;break n}break e}for(;n<c;){let u=n+c>>>1;e<t[u]?c=u:n=u+1}if(s=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,s)}return this.interpolate_(n,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s;for(let c=0;c!==s;++c)t[c]=n[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zl=class extends Is{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hf,endingEnd:Hf}}intervalChanged_(e,t,n){let s=this.parameterPositions,a=e-2,c=e+1,u=s[a],h=s[c];if(u===void 0)switch(this.getSettings_().endingStart){case kf:a=e,u=2*t-n;break;case Wf:a=s.length-2,u=t+s[a]-s[a+1];break;default:a=e,u=n}if(h===void 0)switch(this.getSettings_().endingEnd){case kf:c=e,h=2*n-t;break;case Wf:c=1,h=n+s[1]-s[0];break;default:c=e-1,h=t}let f=(n-t)*.5,d=this.valueSize;this._weightPrev=f/(t-u),this._weightNext=f/(h-n),this._offsetPrev=a*d,this._offsetNext=c*d}interpolate_(e,t,n,s){let a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,h=e*u,f=h-u,d=this._offsetPrev,g=this._offsetNext,m=this._weightPrev,_=this._weightNext,S=(n-t)/(s-t),M=S*S,x=M*S,v=-m*x+2*m*M-m*S,B=(1+m)*x+(-1.5-2*m)*M+(-.5+m)*S+1,L=(-1-_)*x+(1.5+_)*M+.5*S,P=_*x-_*M;for(let Y=0;Y!==u;++Y)a[Y]=v*c[d+Y]+B*c[f+Y]+L*c[h+Y]+P*c[g+Y];return a}},Vl=class extends Is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,h=e*u,f=h-u,d=(n-t)/(s-t),g=1-d;for(let m=0;m!==u;++m)a[m]=c[f+m]*g+c[h+m]*d;return a}},Gl=class extends Is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},hi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=dl(t,this.TimeBufferType),this.values=dl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:dl(e.times,Array),values:dl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Sa:t=this.InterpolantFactoryMethodDiscrete;break;case yl:t=this.InterpolantFactoryMethodLinear;break;case ml:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sa;case this.InterpolantFactoryMethodLinear:return yl;case this.InterpolantFactoryMethodSmooth:return ml}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,a=0,c=s-1;for(;a!==s&&n[a]<e;)++a;for(;c!==-1&&n[c]>t;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);let u=this.getValueSize();this.times=n.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==a;u++){let h=n[u];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,h),e=!1;break}if(c!==null&&c>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,h,c),e=!1;break}c=h}if(s!==void 0&&zE(s))for(let u=0,h=s.length;u!==h;++u){let f=s[u];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,f),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ml,a=e.length-1,c=1;for(let u=1;u<a;++u){let h=!1,f=e[u],d=e[u+1];if(f!==d&&(u!==1||f!==e[0]))if(s)h=!0;else{let g=u*n,m=g-n,_=g+n;for(let S=0;S!==n;++S){let M=t[g+S];if(M!==t[m+S]||M!==t[_+S]){h=!0;break}}}if(h){if(u!==c){e[c]=e[u];let g=u*n,m=c*n;for(let _=0;_!==n;++_)t[m+_]=t[g+_]}++c}}if(a>0){e[c]=e[a];for(let u=a*n,h=c*n,f=0;f!==n;++f)t[h+f]=t[u+f];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};hi.prototype.ValueTypeName="";hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=yl;var Yr=class extends hi{constructor(e,t,n){super(e,t,n)}};Yr.prototype.ValueTypeName="bool";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=Sa;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}};Hl.prototype.ValueTypeName="color";var kl=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}};kl.prototype.ValueTypeName="number";var Wl=class extends Is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,h=(n-t)/(s-t),f=e*u;for(let d=f+u;f!==d;f+=4)_r.slerpFlat(a,0,c,f-u,c,f,h);return a}},za=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Wl(this.times,this.values,this.getValueSize(),e)}};za.prototype.ValueTypeName="quaternion";za.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends hi{constructor(e,t,n){super(e,t,n)}};$r.prototype.ValueTypeName="string";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=Sa;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;var Xl=class extends hi{constructor(e,t,n,s){super(e,t,n,s)}};Xl.prototype.ValueTypeName="vector";var ql=class extends Ca{constructor(e=-1,t=1,n=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=n-e,c=n+e,u=s+t,h=s-t;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,u-=d*this.view.offsetY,h=u-d*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Va=class extends Fn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Yl=class extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var xd="\\[\\]\\.:\\/",VE=new RegExp("["+xd+"]","g"),yd="[^"+xd+"]",GE="[^"+xd.replace("\\.","")+"]",HE=/((?:WC+[\/:])*)/.source.replace("WC",yd),kE=/(WCOD+)?/.source.replace("WCOD",GE),WE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yd),XE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yd),qE=new RegExp("^"+HE+kE+WE+XE+"$"),YE=["material","materials","bones","map"],Yf=class{constructor(e,t,n){let s=n||un.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=n.length;s!==a;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},un=(()=>{class i{constructor(t,n,s){this.path=n,this.parsedPath=s||i.parseTrackName(n),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,s){return t&&t.isAnimationObjectGroup?new i.Composite(t,n,s):new i(t,n,s)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(VE,"")}static parseTrackName(t){let n=qE.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let s={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},a=s.nodeName&&s.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let c=s.nodeName.substring(a+1);YE.indexOf(c)!==-1&&(s.nodeName=s.nodeName.substring(0,a),s.objectName=c)}if(s.propertyName===null||s.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return s}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let s=t.skeleton.getBoneByName(n);if(s!==void 0)return s}if(t.children){let s=function(c){for(let u=0;u<c.length;u++){let h=c[u];if(h.name===n||h.uuid===n)return h;let f=s(h.children);if(f)return f}return null},a=s(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let s=this.resolvedProperty;for(let a=0,c=s.length;a!==c;++a)t[n++]=s[a]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let s=this.resolvedProperty;for(let a=0,c=s.length;a!==c;++a)s[a]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let s=this.resolvedProperty;for(let a=0,c=s.length;a!==c;++a)s[a]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let s=this.resolvedProperty;for(let a=0,c=s.length;a!==c;++a)s[a]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,s=n.objectName,a=n.propertyName,c=n.propertyIndex;if(t||(t=i.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(s){let d=n.objectIndex;switch(s){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let g=0;g<t.length;g++)if(t[g].name===d){d=g;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[s]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[s]}if(d!==void 0){if(t[d]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}let u=t[a];if(u===void 0){let d=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+d+"."+a+" but it wasn't found.",t);return}let h=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?h=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(c!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[c]!==void 0&&(c=t.morphTargetDictionary[c])}f=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=c}else u.fromArray!==void 0&&u.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(f=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=a;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=Yf,i})();un.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};un.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};un.prototype.GetterByBindingType=[un.prototype._getValue_direct,un.prototype._getValue_array,un.prototype._getValue_arrayElement,un.prototype._getValue_toArray];un.prototype.SetterByBindingTypeAndVersioning=[[un.prototype._setValue_direct,un.prototype._setValue_direct_setNeedsUpdate,un.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[un.prototype._setValue_array,un.prototype._setValue_array_setNeedsUpdate,un.prototype._setValue_array_setMatrixWorldNeedsUpdate],[un.prototype._setValue_arrayElement,un.prototype._setValue_arrayElement_setNeedsUpdate,un.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[un.prototype._setValue_fromArray,un.prototype._setValue_fromArray_setNeedsUpdate,un.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var DI=new Float32Array(1);var Zr=class extends Al{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}};var Og=new sn,$f=class{constructor(e,t,n=0,s=1/0){this.ray=new yo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new So,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Og.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Og),this}intersectObject(e,t=!0,n=[]){return Zf(e,this,n,t),n.sort(Bg),n}intersectObjects(e,t=!0,n=[]){for(let s=0,a=e.length;s<a;s++)Zf(e[s],this,n,t);return n.sort(Bg),n}};function Bg(i,e){return i.distance-e.distance}function Zf(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let a=i.children;for(let c=0,u=a.length;c<u;c++)Zf(a[c],e,t,!0)}}var Jf=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var zg=new $,pl=new $,Ga=class{constructor(e=new $,t=new $){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){zg.subVectors(e,this.start),pl.subVectors(this.end,this.start);let n=pl.dot(pl),a=pl.dot(zg)/n;return t&&(a=Tt(a,0,1)),a}closestPointToPoint(e,t,n){let s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Kf=class extends Cs{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Fn;s.setAttribute("position",new mn(t,3)),s.setAttribute("color",new mn(n,3));let a=new As({vertexColors:!0,toneMapped:!1});super(s,a),this.type="AxesHelper"}setColors(e,t,n){let s=new yt,a=this.geometry.attributes.color.array;return s.set(e),s.toArray(a,0),s.toArray(a,3),s.set(t),s.toArray(a,6),s.toArray(a,9),s.set(n),s.toArray(a,12),s.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};var Qf=class extends qi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Sd(i,e,t,n){let s=$E(n);switch(t){case cd:return i*e;case ud:return i*e/s.components*s.byteLength;case au:return i*e/s.components*s.byteLength;case hd:return i*e*2/s.components*s.byteLength;case cu:return i*e*2/s.components*s.byteLength;case ld:return i*e*3/s.components*s.byteLength;case Ti:return i*e*4/s.components*s.byteLength;case lu:return i*e*4/s.components*s.byteLength;case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hu:case du:return Math.max(i,16)*Math.max(e,8)/4;case uu:case fu:return Math.max(i,8)*Math.max(e,8)/2;case pu:case mu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _u:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case yu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Su:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Mu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case bu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case wu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Eu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Au:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Cu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ru:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Iu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $a:case Pu:case Lu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fd:case Du:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Uu:case Nu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $E(i){switch(i){case Zi:case sd:return{byteLength:1,components:1};case To:case od:case Ao:return{byteLength:2,components:1};case su:case ou:return{byteLength:2,components:4};case Kr:case ru:case Ji:return{byteLength:4,components:1};case ad:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"178"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="178");function i0(){let i=null,e=!1,t=null,n=null;function s(a,c){t(a,c),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function JE(i){let e=new WeakMap;function t(u,h){let f=u.array,d=u.usage,g=f.byteLength,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,f,d),u.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)_=i.HALF_FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:g}}function n(u,h,f){let d=h.array,g=h.updateRanges;if(i.bindBuffer(f,u),g.length===0)i.bufferSubData(f,0,d);else{g.sort((_,S)=>_.start-S.start);let m=0;for(let _=1;_<g.length;_++){let S=g[m],M=g[_];M.start<=S.start+S.count+1?S.count=Math.max(S.count,M.start+M.count-S.start):(++m,g[m]=M)}g.length=m+1;for(let _=0,S=g.length;_<S;_++){let M=g[_];i.bufferSubData(f,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);let h=e.get(u);h&&(i.deleteBuffer(h.buffer),e.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){let d=e.get(u);(!d||d.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}let f=e.get(u);if(f===void 0)e.set(u,t(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,u,h),f.version=u.version}}return{get:s,remove:a,update:c}}var KE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,oT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_T=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ST=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,MT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ET=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AT="gl_FragColor = linearToOutputTexel( gl_FragColor );",CT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,IT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,UT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,WT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$T=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ZT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,o1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,d1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,m1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,g1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,x1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,y1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,T1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,C1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,D1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,U1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,N1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,F1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,B1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,V1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,W1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,X1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Z1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,J1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_A=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,SA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,CA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ct={alphahash_fragment:KE,alphahash_pars_fragment:QE,alphamap_fragment:jE,alphamap_pars_fragment:eT,alphatest_fragment:tT,alphatest_pars_fragment:nT,aomap_fragment:iT,aomap_pars_fragment:rT,batching_pars_vertex:sT,batching_vertex:oT,begin_vertex:aT,beginnormal_vertex:cT,bsdfs:lT,iridescence_fragment:uT,bumpmap_pars_fragment:hT,clipping_planes_fragment:fT,clipping_planes_pars_fragment:dT,clipping_planes_pars_vertex:pT,clipping_planes_vertex:mT,color_fragment:gT,color_pars_fragment:_T,color_pars_vertex:vT,color_vertex:xT,common:yT,cube_uv_reflection_fragment:ST,defaultnormal_vertex:MT,displacementmap_pars_vertex:bT,displacementmap_vertex:wT,emissivemap_fragment:ET,emissivemap_pars_fragment:TT,colorspace_fragment:AT,colorspace_pars_fragment:CT,envmap_fragment:RT,envmap_common_pars_fragment:IT,envmap_pars_fragment:PT,envmap_pars_vertex:LT,envmap_physical_pars_fragment:kT,envmap_vertex:DT,fog_vertex:UT,fog_pars_vertex:NT,fog_fragment:FT,fog_pars_fragment:OT,gradientmap_pars_fragment:BT,lightmap_pars_fragment:zT,lights_lambert_fragment:VT,lights_lambert_pars_fragment:GT,lights_pars_begin:HT,lights_toon_fragment:WT,lights_toon_pars_fragment:XT,lights_phong_fragment:qT,lights_phong_pars_fragment:YT,lights_physical_fragment:$T,lights_physical_pars_fragment:ZT,lights_fragment_begin:JT,lights_fragment_maps:KT,lights_fragment_end:QT,logdepthbuf_fragment:jT,logdepthbuf_pars_fragment:e1,logdepthbuf_pars_vertex:t1,logdepthbuf_vertex:n1,map_fragment:i1,map_pars_fragment:r1,map_particle_fragment:s1,map_particle_pars_fragment:o1,metalnessmap_fragment:a1,metalnessmap_pars_fragment:c1,morphinstance_vertex:l1,morphcolor_vertex:u1,morphnormal_vertex:h1,morphtarget_pars_vertex:f1,morphtarget_vertex:d1,normal_fragment_begin:p1,normal_fragment_maps:m1,normal_pars_fragment:g1,normal_pars_vertex:_1,normal_vertex:v1,normalmap_pars_fragment:x1,clearcoat_normal_fragment_begin:y1,clearcoat_normal_fragment_maps:S1,clearcoat_pars_fragment:M1,iridescence_pars_fragment:b1,opaque_fragment:w1,packing:E1,premultiplied_alpha_fragment:T1,project_vertex:A1,dithering_fragment:C1,dithering_pars_fragment:R1,roughnessmap_fragment:I1,roughnessmap_pars_fragment:P1,shadowmap_pars_fragment:L1,shadowmap_pars_vertex:D1,shadowmap_vertex:U1,shadowmask_pars_fragment:N1,skinbase_vertex:F1,skinning_pars_vertex:O1,skinning_vertex:B1,skinnormal_vertex:z1,specularmap_fragment:V1,specularmap_pars_fragment:G1,tonemapping_fragment:H1,tonemapping_pars_fragment:k1,transmission_fragment:W1,transmission_pars_fragment:X1,uv_pars_fragment:q1,uv_pars_vertex:Y1,uv_vertex:$1,worldpos_vertex:Z1,background_vert:J1,background_frag:K1,backgroundCube_vert:Q1,backgroundCube_frag:j1,cube_vert:eA,cube_frag:tA,depth_vert:nA,depth_frag:iA,distanceRGBA_vert:rA,distanceRGBA_frag:sA,equirect_vert:oA,equirect_frag:aA,linedashed_vert:cA,linedashed_frag:lA,meshbasic_vert:uA,meshbasic_frag:hA,meshlambert_vert:fA,meshlambert_frag:dA,meshmatcap_vert:pA,meshmatcap_frag:mA,meshnormal_vert:gA,meshnormal_frag:_A,meshphong_vert:vA,meshphong_frag:xA,meshphysical_vert:yA,meshphysical_frag:SA,meshtoon_vert:MA,meshtoon_frag:bA,points_vert:wA,points_frag:EA,shadow_vert:TA,shadow_frag:AA,sprite_vert:CA,sprite_frag:RA},De={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},Xn={basic:{uniforms:On([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:On([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new yt(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:On([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:On([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:On([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new yt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:On([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:On([De.points,De.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:On([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:On([De.common,De.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:On([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:On([De.sprite,De.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:On([De.common,De.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:On([De.lights,De.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};Xn.physical={uniforms:On([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};var Ou={r:0,b:0,g:0},Us=new Ts,IA=new sn;function PA(i,e,t,n,s,a,c){let u=new yt(0),h=a===!0?0:1,f,d,g=null,m=0,_=null;function S(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?t:e).get(P)),P}function M(L){let P=!1,Y=S(L);Y===null?v(u,h):Y&&Y.isColor&&(v(Y,1),P=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,c):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||P)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(L,P){let Y=S(P);Y&&(Y.isCubeTexture||Y.mapping===Ha)?(d===void 0&&(d=new hn(new Mo(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Ds(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(D,O,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Us.copy(P.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,Y.isCubeTexture&&Y.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),d.material.uniforms.envMap.value=Y,d.material.uniforms.flipEnvMap.value=Y.isCubeTexture&&Y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(IA.makeRotationFromEuler(Us)),d.material.toneMapped=Vt.getTransfer(Y.colorSpace)!==Zt,(g!==Y||m!==Y.version||_!==i.toneMapping)&&(d.material.needsUpdate=!0,g=Y,m=Y.version,_=i.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null)):Y&&Y.isTexture&&(f===void 0&&(f=new hn(new Ba(2,2),new li({name:"BackgroundMaterial",uniforms:Ds(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=Y,f.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,f.material.toneMapped=Vt.getTransfer(Y.colorSpace)!==Zt,Y.matrixAutoUpdate===!0&&Y.updateMatrix(),f.material.uniforms.uvTransform.value.copy(Y.matrix),(g!==Y||m!==Y.version||_!==i.toneMapping)&&(f.material.needsUpdate=!0,g=Y,m=Y.version,_=i.toneMapping),f.layers.enableAll(),L.unshift(f,f.geometry,f.material,0,0,null))}function v(L,P){L.getRGB(Ou,_d(i)),n.buffers.color.setClear(Ou.r,Ou.g,Ou.b,P,c)}function B(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,P=1){u.set(L),h=P,v(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,v(u,h)},render:M,addToRenderList:x,dispose:B}}function LA(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),a=s,c=!1;function u(A,G,ne,ee,le){let fe=!1,oe=g(ee,ne,G);a!==oe&&(a=oe,f(a.object)),fe=_(A,ee,ne,le),fe&&S(A,ee,ne,le),le!==null&&e.update(le,i.ELEMENT_ARRAY_BUFFER),(fe||c)&&(c=!1,P(A,G,ne,ee),le!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function h(){return i.createVertexArray()}function f(A){return i.bindVertexArray(A)}function d(A){return i.deleteVertexArray(A)}function g(A,G,ne){let ee=ne.wireframe===!0,le=n[A.id];le===void 0&&(le={},n[A.id]=le);let fe=le[G.id];fe===void 0&&(fe={},le[G.id]=fe);let oe=fe[ee];return oe===void 0&&(oe=m(h()),fe[ee]=oe),oe}function m(A){let G=[],ne=[],ee=[];for(let le=0;le<t;le++)G[le]=0,ne[le]=0,ee[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ne,attributeDivisors:ee,object:A,attributes:{},index:null}}function _(A,G,ne,ee){let le=a.attributes,fe=G.attributes,oe=0,we=ne.getAttributes();for(let se in we)if(we[se].location>=0){let He=le[se],nt=fe[se];if(nt===void 0&&(se==="instanceMatrix"&&A.instanceMatrix&&(nt=A.instanceMatrix),se==="instanceColor"&&A.instanceColor&&(nt=A.instanceColor)),He===void 0||He.attribute!==nt||nt&&He.data!==nt.data)return!0;oe++}return a.attributesNum!==oe||a.index!==ee}function S(A,G,ne,ee){let le={},fe=G.attributes,oe=0,we=ne.getAttributes();for(let se in we)if(we[se].location>=0){let He=fe[se];He===void 0&&(se==="instanceMatrix"&&A.instanceMatrix&&(He=A.instanceMatrix),se==="instanceColor"&&A.instanceColor&&(He=A.instanceColor));let nt={};nt.attribute=He,He&&He.data&&(nt.data=He.data),le[se]=nt,oe++}a.attributes=le,a.attributesNum=oe,a.index=ee}function M(){let A=a.newAttributes;for(let G=0,ne=A.length;G<ne;G++)A[G]=0}function x(A){v(A,0)}function v(A,G){let ne=a.newAttributes,ee=a.enabledAttributes,le=a.attributeDivisors;ne[A]=1,ee[A]===0&&(i.enableVertexAttribArray(A),ee[A]=1),le[A]!==G&&(i.vertexAttribDivisor(A,G),le[A]=G)}function B(){let A=a.newAttributes,G=a.enabledAttributes;for(let ne=0,ee=G.length;ne<ee;ne++)G[ne]!==A[ne]&&(i.disableVertexAttribArray(ne),G[ne]=0)}function L(A,G,ne,ee,le,fe,oe){oe===!0?i.vertexAttribIPointer(A,G,ne,le,fe):i.vertexAttribPointer(A,G,ne,ee,le,fe)}function P(A,G,ne,ee){M();let le=ee.attributes,fe=ne.getAttributes(),oe=G.defaultAttributeValues;for(let we in fe){let se=fe[we];if(se.location>=0){let Re=le[we];if(Re===void 0&&(we==="instanceMatrix"&&A.instanceMatrix&&(Re=A.instanceMatrix),we==="instanceColor"&&A.instanceColor&&(Re=A.instanceColor)),Re!==void 0){let He=Re.normalized,nt=Re.itemSize,pt=e.get(Re);if(pt===void 0)continue;let Lt=pt.buffer,de=pt.type,Ie=pt.bytesPerElement,Ze=de===i.INT||de===i.UNSIGNED_INT||Re.gpuType===ru;if(Re.isInterleavedBufferAttribute){let Ne=Re.data,et=Ne.stride,Pt=Re.offset;if(Ne.isInstancedInterleavedBuffer){for(let ot=0;ot<se.locationSize;ot++)v(se.location+ot,Ne.meshPerAttribute);A.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let ot=0;ot<se.locationSize;ot++)x(se.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let ot=0;ot<se.locationSize;ot++)L(se.location+ot,nt/se.locationSize,de,He,et*Ie,(Pt+nt/se.locationSize*ot)*Ie,Ze)}else{if(Re.isInstancedBufferAttribute){for(let Ne=0;Ne<se.locationSize;Ne++)v(se.location+Ne,Re.meshPerAttribute);A.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Ne=0;Ne<se.locationSize;Ne++)x(se.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let Ne=0;Ne<se.locationSize;Ne++)L(se.location+Ne,nt/se.locationSize,de,He,nt*Ie,nt/se.locationSize*Ne*Ie,Ze)}}else if(oe!==void 0){let He=oe[we];if(He!==void 0)switch(He.length){case 2:i.vertexAttrib2fv(se.location,He);break;case 3:i.vertexAttrib3fv(se.location,He);break;case 4:i.vertexAttrib4fv(se.location,He);break;default:i.vertexAttrib1fv(se.location,He)}}}}B()}function Y(){V();for(let A in n){let G=n[A];for(let ne in G){let ee=G[ne];for(let le in ee)d(ee[le].object),delete ee[le];delete G[ne]}delete n[A]}}function D(A){if(n[A.id]===void 0)return;let G=n[A.id];for(let ne in G){let ee=G[ne];for(let le in ee)d(ee[le].object),delete ee[le];delete G[ne]}delete n[A.id]}function O(A){for(let G in n){let ne=n[G];if(ne[A.id]===void 0)continue;let ee=ne[A.id];for(let le in ee)d(ee[le].object),delete ee[le];delete ne[A.id]}}function V(){I(),c=!0,a!==s&&(a=s,f(a.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:V,resetDefaultState:I,dispose:Y,releaseStatesOfGeometry:D,releaseStatesOfProgram:O,initAttributes:M,enableAttribute:x,disableUnusedAttributes:B}}function DA(i,e,t){let n;function s(f){n=f}function a(f,d){i.drawArrays(n,f,d),t.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawArraysInstanced(n,f,d,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,d,0,g);let _=0;for(let S=0;S<g;S++)_+=d[S];t.update(_,n,1)}function h(f,d,g,m){if(g===0)return;let _=e.get("WEBGL_multi_draw");if(_===null)for(let S=0;S<f.length;S++)c(f[S],d[S],m[S]);else{_.multiDrawArraysInstancedWEBGL(n,f,0,d,0,m,0,g);let S=0;for(let M=0;M<g;M++)S+=d[M]*m[M];t.update(S,n,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function UA(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let O=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(O){return!(O!==Ti&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(O){let V=O===Ao&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Zi&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ji&&!V)}function h(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp",d=h(f);d!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",d,"instead."),f=d);let g=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),B=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),P=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),Y=S>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:g,reverseDepthBuffer:m,maxTextures:_,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:B,maxVaryings:L,maxFragmentUniforms:P,vertexTextures:Y,maxSamples:D}}function NA(i){let e=this,t=null,n=0,s=!1,a=!1,c=new ki,u=new wt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){let _=g.length!==0||m||n!==0||s;return s=m,n=g.length,_},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,m){t=d(g,m,0)},this.setState=function(g,m,_){let S=g.clippingPlanes,M=g.clipIntersection,x=g.clipShadows,v=i.get(g);if(!s||S===null||S.length===0||a&&!x)a?d(null):f();else{let B=a?0:n,L=B*4,P=v.clippingState||null;h.value=P,P=d(S,m,L,_);for(let Y=0;Y!==L;++Y)P[Y]=t[Y];v.clippingState=P,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=B}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(g,m,_,S){let M=g!==null?g.length:0,x=null;if(M!==0){if(x=h.value,S!==!0||x===null){let v=_+M*4,B=m.matrixWorldInverse;u.getNormalMatrix(B),(x===null||x.length<v)&&(x=new Float32Array(v));for(let L=0,P=_;L!==M;++L,P+=4)c.copy(g[L]).applyMatrix4(B,u),c.normal.toArray(x,P),x[P+3]=c.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function FA(i){let e=new WeakMap;function t(c,u){return u===tu?c.mapping=Ps:u===nu&&(c.mapping=Ls),c}function n(c){if(c&&c.isTexture){let u=c.mapping;if(u===tu||u===nu)if(e.has(c)){let h=e.get(c).texture;return t(h,c.mapping)}else{let h=c.image;if(h&&h.height>0){let f=new Tl(h.height);return f.fromEquirectangularTexture(i,c),e.set(c,f),c.addEventListener("dispose",s),t(f.texture,c.mapping)}else return null}}return c}function s(c){let u=c.target;u.removeEventListener("dispose",s);let h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}var Po=4,D_=[.125,.215,.35,.446,.526,.582],Os=20,Md=new ql,U_=new yt,bd=null,wd=0,Ed=0,Td=!1,Fs=(1+Math.sqrt(5))/2,Io=1/Fs,N_=[new $(-Fs,Io,0),new $(Fs,Io,0),new $(-Io,0,Fs),new $(Io,0,Fs),new $(0,Fs,-Io),new $(0,Fs,Io),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],OA=new $,Vu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,a={}){let{size:c=256,position:u=OA}=a;bd=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,n,s,h,u),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bd,wd,Ed),this._renderer.xr.enabled=Td,e.scissorTest=!1,Bu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ps||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:Ao,format:Ti,colorSpace:wi,depthBuffer:!1},s=F_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=F_(e,t,n);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BA(a)),this._blurMaterial=zA(a,e,t)}return s}_compileMaterial(e){let t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,Md)}_sceneToCubeUV(e,t,n,s,a){let h=new Kn(90,1,t,n),f=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,_=g.toneMapping;g.getClearColor(U_),g.toneMapping=xr,g.autoClear=!1;let S=new Bi({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),M=new hn(new Mo,S),x=!1,v=e.background;v?v.isColor&&(S.color.copy(v),e.background=null,x=!0):(S.color.copy(U_),x=!0);for(let B=0;B<6;B++){let L=B%3;L===0?(h.up.set(0,f[B],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+d[B],a.y,a.z)):L===1?(h.up.set(0,0,f[B]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+d[B],a.z)):(h.up.set(0,f[B],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+d[B]));let P=this._cubeSize;Bu(s,L*P,B>2?P:0,P,P),g.setRenderTarget(s),x&&g.render(M,h),g.render(e,h)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=_,g.autoClear=m,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ps||e.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=B_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O_());let a=s?this._cubemapMaterial:this._equirectMaterial,c=new hn(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;let h=this._cubeSize;Bu(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(c,Md)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=N_[(s-a-1)%N_.length];this._blur(e,a-1,a,c,u)}t.autoClear=n}_blur(e,t,n,s,a){let c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,s,"latitudinal",a),this._halfBlur(c,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,c,u){let h=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,g=new hn(this._lodPlanes[s],f),m=f.uniforms,_=this._sizeLods[n]-1,S=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Os-1),M=a/S,x=isFinite(a)?1+Math.floor(d*M):Os;x>Os&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Os}`);let v=[],B=0;for(let O=0;O<Os;++O){let V=O/M,I=Math.exp(-V*V/2);v.push(I),O===0?B+=I:O<x&&(B+=2*I)}for(let O=0;O<v.length;O++)v[O]=v[O]/B;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=v,m.latitudinal.value=c==="latitudinal",u&&(m.poleAxis.value=u);let{_lodMax:L}=this;m.dTheta.value=S,m.mipInt.value=L-n;let P=this._sizeLods[s],Y=3*P*(s>L-Po?s-L+Po:0),D=4*(this._cubeSize-P);Bu(t,Y,D,3*P,2*P),h.setRenderTarget(t),h.render(g,Md)}};function BA(i){let e=[],t=[],n=[],s=i,a=i-Po+1+D_.length;for(let c=0;c<a;c++){let u=Math.pow(2,s);t.push(u);let h=1/u;c>i-Po?h=D_[c-i+Po-1]:c===0&&(h=0),n.push(h);let f=1/(u-2),d=-f,g=1+f,m=[d,d,g,d,g,g,d,d,g,g,d,g],_=6,S=6,M=3,x=2,v=1,B=new Float32Array(M*S*_),L=new Float32Array(x*S*_),P=new Float32Array(v*S*_);for(let D=0;D<_;D++){let O=D%3*2/3-1,V=D>2?0:-1,I=[O,V,0,O+2/3,V,0,O+2/3,V+1,0,O,V,0,O+2/3,V+1,0,O,V+1,0];B.set(I,M*S*D),L.set(m,x*S*D);let A=[D,D,D,D,D,D];P.set(A,v*S*D)}let Y=new Fn;Y.setAttribute("position",new wn(B,M)),Y.setAttribute("uv",new wn(L,x)),Y.setAttribute("faceIndex",new wn(P,v)),e.push(Y),s>Po&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function F_(i,e,t){let n=new Yi(i,e,t);return n.texture.mapping=Ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bu(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function zA(i,e,t){let n=new Float32Array(Os),s=new $(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function O_(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function B_(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Fd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function VA(i){let e=new WeakMap,t=null;function n(u){if(u&&u.isTexture){let h=u.mapping,f=h===tu||h===nu,d=h===Ps||h===Ls;if(f||d){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return t===null&&(t=new Vu(i)),g=f?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let _=u.image;return f&&_&&_.height>0||d&&_&&s(_)?(t===null&&(t=new Vu(i)),g=f?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",a),g.texture):null}}}return u}function s(u){let h=0,f=6;for(let d=0;d<f;d++)u[d]!==void 0&&h++;return h===f}function a(u){let h=u.target;h.removeEventListener("dispose",a);let f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function GA(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Es("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function HA(i,e,t,n){let s={},a=new WeakMap;function c(g){let m=g.target;m.index!==null&&e.remove(m.index);for(let S in m.attributes)e.remove(m.attributes[S]);m.removeEventListener("dispose",c),delete s[m.id];let _=a.get(m);_&&(e.remove(_),a.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function u(g,m){return s[m.id]===!0||(m.addEventListener("dispose",c),s[m.id]=!0,t.memory.geometries++),m}function h(g){let m=g.attributes;for(let _ in m)e.update(m[_],i.ARRAY_BUFFER)}function f(g){let m=[],_=g.index,S=g.attributes.position,M=0;if(_!==null){let B=_.array;M=_.version;for(let L=0,P=B.length;L<P;L+=3){let Y=B[L+0],D=B[L+1],O=B[L+2];m.push(Y,D,D,O,O,Y)}}else if(S!==void 0){let B=S.array;M=S.version;for(let L=0,P=B.length/3-1;L<P;L+=3){let Y=L+0,D=L+1,O=L+2;m.push(Y,D,D,O,O,Y)}}else return;let x=new(gd(m)?Aa:Ta)(m,1);x.version=M;let v=a.get(g);v&&e.remove(v),a.set(g,x)}function d(g){let m=a.get(g);if(m){let _=g.index;_!==null&&m.version<_.version&&f(g)}else f(g);return a.get(g)}return{get:u,update:h,getWireframeAttribute:d}}function kA(i,e,t){let n;function s(m){n=m}let a,c;function u(m){a=m.type,c=m.bytesPerElement}function h(m,_){i.drawElements(n,_,a,m*c),t.update(_,n,1)}function f(m,_,S){S!==0&&(i.drawElementsInstanced(n,_,a,m*c,S),t.update(_,n,S))}function d(m,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,a,m,0,S);let x=0;for(let v=0;v<S;v++)x+=_[v];t.update(x,n,1)}function g(m,_,S,M){if(S===0)return;let x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<m.length;v++)f(m[v]/c,_[v],M[v]);else{x.multiDrawElementsInstancedWEBGL(n,_,0,a,m,0,M,0,S);let v=0;for(let B=0;B<S;B++)v+=_[B]*M[B];t.update(v,n,1)}}this.setMode=s,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=g}function WA(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,u){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=u*(a/3);break;case i.LINES:t.lines+=u*(a/2);break;case i.LINE_STRIP:t.lines+=u*(a-1);break;case i.LINE_LOOP:t.lines+=u*a;break;case i.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function XA(i,e,t){let n=new WeakMap,s=new Kt;function a(c,u,h){let f=c.morphTargetInfluences,d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0,m=n.get(u);if(m===void 0||m.count!==g){let A=function(){V.dispose(),n.delete(u),u.removeEventListener("dispose",A)};var _=A;m!==void 0&&m.texture.dispose();let S=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,v=u.morphAttributes.position||[],B=u.morphAttributes.normal||[],L=u.morphAttributes.color||[],P=0;S===!0&&(P=1),M===!0&&(P=2),x===!0&&(P=3);let Y=u.attributes.position.count*P,D=1;Y>e.maxTextureSize&&(D=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);let O=new Float32Array(Y*D*4*g),V=new Ea(O,Y,D,g);V.type=Ji,V.needsUpdate=!0;let I=P*4;for(let G=0;G<g;G++){let ne=v[G],ee=B[G],le=L[G],fe=Y*D*4*G;for(let oe=0;oe<ne.count;oe++){let we=oe*I;S===!0&&(s.fromBufferAttribute(ne,oe),O[fe+we+0]=s.x,O[fe+we+1]=s.y,O[fe+we+2]=s.z,O[fe+we+3]=0),M===!0&&(s.fromBufferAttribute(ee,oe),O[fe+we+4]=s.x,O[fe+we+5]=s.y,O[fe+we+6]=s.z,O[fe+we+7]=0),x===!0&&(s.fromBufferAttribute(le,oe),O[fe+we+8]=s.x,O[fe+we+9]=s.y,O[fe+we+10]=s.z,O[fe+we+11]=le.itemSize===4?s.w:1)}}m={count:g,texture:V,size:new st(Y,D)},n.set(u,m),u.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let S=0;for(let x=0;x<f.length;x++)S+=f[x];let M=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(i,"morphTargetBaseInfluence",M),h.getUniforms().setValue(i,"morphTargetInfluences",f)}h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:a}}function qA(i,e,t,n){let s=new WeakMap;function a(h){let f=n.render.frame,d=h.geometry,g=e.get(h,d);if(s.get(g)!==f&&(e.update(g),s.set(g,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),s.get(h)!==f&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,f))),h.isSkinnedMesh){let m=h.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return g}function c(){s=new WeakMap}function u(h){let f=h.target;f.removeEventListener("dispose",u),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:c}}var r0=new Qr,z_=new Pa(1,1),s0=new Ea,o0=new wl,a0=new Ra,V_=[],G_=[],H_=new Float32Array(16),k_=new Float32Array(9),W_=new Float32Array(4);function Do(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,a=V_[s];if(a===void 0&&(a=new Float32Array(s),V_[s]=a),e!==0){n.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,i[c].toArray(a,u)}return a}function xn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gu(i,e){let t=G_[e];t===void 0&&(t=new Int32Array(e),G_[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function YA(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $A(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2fv(this.addr,e),yn(t,e)}}function ZA(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;i.uniform3fv(this.addr,e),yn(t,e)}}function JA(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4fv(this.addr,e),yn(t,e)}}function KA(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,n))return;W_.set(n),i.uniformMatrix2fv(this.addr,!1,W_),yn(t,n)}}function QA(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,n))return;k_.set(n),i.uniformMatrix3fv(this.addr,!1,k_),yn(t,n)}}function jA(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,n))return;H_.set(n),i.uniformMatrix4fv(this.addr,!1,H_),yn(t,n)}}function eC(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function tC(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2iv(this.addr,e),yn(t,e)}}function nC(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;i.uniform3iv(this.addr,e),yn(t,e)}}function iC(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4iv(this.addr,e),yn(t,e)}}function rC(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sC(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2uiv(this.addr,e),yn(t,e)}}function oC(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;i.uniform3uiv(this.addr,e),yn(t,e)}}function aC(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4uiv(this.addr,e),yn(t,e)}}function cC(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(z_.compareFunction=dd,a=z_):a=r0,t.setTexture2D(e||a,s)}function lC(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||o0,s)}function uC(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||a0,s)}function hC(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||s0,s)}function fC(i){switch(i){case 5126:return YA;case 35664:return $A;case 35665:return ZA;case 35666:return JA;case 35674:return KA;case 35675:return QA;case 35676:return jA;case 5124:case 35670:return eC;case 35667:case 35671:return tC;case 35668:case 35672:return nC;case 35669:case 35673:return iC;case 5125:return rC;case 36294:return sC;case 36295:return oC;case 36296:return aC;case 35678:case 36198:case 36298:case 36306:case 35682:return cC;case 35679:case 36299:case 36307:return lC;case 35680:case 36300:case 36308:case 36293:return uC;case 36289:case 36303:case 36311:case 36292:return hC}}function dC(i,e){i.uniform1fv(this.addr,e)}function pC(i,e){let t=Do(e,this.size,2);i.uniform2fv(this.addr,t)}function mC(i,e){let t=Do(e,this.size,3);i.uniform3fv(this.addr,t)}function gC(i,e){let t=Do(e,this.size,4);i.uniform4fv(this.addr,t)}function _C(i,e){let t=Do(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function vC(i,e){let t=Do(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xC(i,e){let t=Do(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function yC(i,e){i.uniform1iv(this.addr,e)}function SC(i,e){i.uniform2iv(this.addr,e)}function MC(i,e){i.uniform3iv(this.addr,e)}function bC(i,e){i.uniform4iv(this.addr,e)}function wC(i,e){i.uniform1uiv(this.addr,e)}function EC(i,e){i.uniform2uiv(this.addr,e)}function TC(i,e){i.uniform3uiv(this.addr,e)}function AC(i,e){i.uniform4uiv(this.addr,e)}function CC(i,e,t){let n=this.cache,s=e.length,a=Gu(t,s);xn(n,a)||(i.uniform1iv(this.addr,a),yn(n,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||r0,a[c])}function RC(i,e,t){let n=this.cache,s=e.length,a=Gu(t,s);xn(n,a)||(i.uniform1iv(this.addr,a),yn(n,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||o0,a[c])}function IC(i,e,t){let n=this.cache,s=e.length,a=Gu(t,s);xn(n,a)||(i.uniform1iv(this.addr,a),yn(n,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||a0,a[c])}function PC(i,e,t){let n=this.cache,s=e.length,a=Gu(t,s);xn(n,a)||(i.uniform1iv(this.addr,a),yn(n,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||s0,a[c])}function LC(i){switch(i){case 5126:return dC;case 35664:return pC;case 35665:return mC;case 35666:return gC;case 35674:return _C;case 35675:return vC;case 35676:return xC;case 5124:case 35670:return yC;case 35667:case 35671:return SC;case 35668:case 35672:return MC;case 35669:case 35673:return bC;case 5125:return wC;case 36294:return EC;case 36295:return TC;case 36296:return AC;case 35678:case 36198:case 36298:case 36306:case 35682:return CC;case 35679:case 36299:case 36307:return RC;case 35680:case 36300:case 36308:case 36293:return IC;case 36289:case 36303:case 36311:case 36292:return PC}}var Cd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fC(t.type)}},Rd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LC(t.type)}},Id=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let a=0,c=s.length;a!==c;++a){let u=s[a];u.setValue(e,t[u.id],n)}}},Ad=/(\w+)(\])?(\[|\.)?/g;function X_(i,e){i.seq.push(e),i.map[e.id]=e}function DC(i,e,t){let n=i.name,s=n.length;for(Ad.lastIndex=0;;){let a=Ad.exec(n),c=Ad.lastIndex,u=a[1],h=a[2]==="]",f=a[3];if(h&&(u=u|0),f===void 0||f==="["&&c+2===s){X_(t,f===void 0?new Cd(u,i,e):new Rd(u,i,e));break}else{let g=t.map[u];g===void 0&&(g=new Id(u),X_(t,g)),t=g}}}var Lo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);DC(a,c,this)}}setValue(e,t,n,s){let a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,c=t.length;a!==c;++a){let u=t[a],h=n[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,a=e.length;s!==a;++s){let c=e[s];c.id in t&&n.push(c)}return n}};function q_(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var UC=37297,NC=0;function FC(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){let u=c+1;n.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return n.join(`
`)}var Y_=new wt;function OC(i){Vt._getMatrix(Y_,Vt.workingColorSpace,i);let e=`mat3( ${Y_.elements.map(t=>t.toFixed(4))} )`;switch(Vt.getTransfer(i)){case Ma:return[e,"LinearTransferOETF"];case Zt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $_(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+FC(i.getShaderSource(e),c)}else return s}function BC(i,e){let t=OC(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function zC(i,e){let t;switch(e){case l_:t="Linear";break;case u_:t="Reinhard";break;case h_:t="Cineon";break;case f_:t="ACESFilmic";break;case p_:t="AgX";break;case m_:t="Neutral";break;case d_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var zu=new $;function VC(){Vt.getLuminanceCoefficients(zu);let i=zu.x.toFixed(4),e=zu.y.toFixed(4),t=zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GC(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ka).join(`
`)}function HC(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function kC(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let a=i.getActiveAttrib(e,s),c=a.name,u=1;a.type===i.FLOAT_MAT2&&(u=2),a.type===i.FLOAT_MAT3&&(u=3),a.type===i.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:i.getAttribLocation(e,c),locationSize:u}}return t}function Ka(i){return i!==""}function Z_(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function J_(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var WC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pd(i){return i.replace(WC,qC)}var XC=new Map;function qC(i,e){let t=Ct[e];if(t===void 0){let n=XC.get(e);if(n!==void 0)t=Ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pd(t)}var YC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function K_(i){return i.replace(YC,$C)}function $C(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Q_(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ZC(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ed?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function JC(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ps:case Ls:e="ENVMAP_TYPE_CUBE";break;case Ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KC(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ls&&(e="ENVMAP_MODE_REFRACTION"),e}function QC(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rd:e="ENVMAP_BLENDING_MULTIPLY";break;case a_:e="ENVMAP_BLENDING_MIX";break;case c_:e="ENVMAP_BLENDING_ADD";break}return e}function jC(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function eR(i,e,t,n){let s=i.getContext(),a=t.defines,c=t.vertexShader,u=t.fragmentShader,h=ZC(t),f=JC(t),d=KC(t),g=QC(t),m=jC(t),_=GC(t),S=HC(a),M=s.createProgram(),x,v,B=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Ka).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Ka).join(`
`),v.length>0&&(v+=`
`)):(x=[Q_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),v=[Q_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xr?"#define TONE_MAPPING":"",t.toneMapping!==xr?Ct.tonemapping_pars_fragment:"",t.toneMapping!==xr?zC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,BC("linearToOutputTexel",t.outputColorSpace),VC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ka).join(`
`)),c=Pd(c),c=Z_(c,t),c=J_(c,t),u=Pd(u),u=Z_(u,t),u=J_(u,t),c=K_(c),u=K_(u),t.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,x=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let L=B+x+c,P=B+v+u,Y=q_(s,s.VERTEX_SHADER,L),D=q_(s,s.FRAGMENT_SHADER,P);s.attachShader(M,Y),s.attachShader(M,D),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function O(G){if(i.debug.checkShaderErrors){let ne=s.getProgramInfoLog(M).trim(),ee=s.getShaderInfoLog(Y).trim(),le=s.getShaderInfoLog(D).trim(),fe=!0,oe=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(fe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,Y,D);else{let we=$_(s,Y,"vertex"),se=$_(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ne+`
`+we+`
`+se)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(ee===""||le==="")&&(oe=!1);oe&&(G.diagnostics={runnable:fe,programLog:ne,vertexShader:{log:ee,prefix:x},fragmentShader:{log:le,prefix:v}})}s.deleteShader(Y),s.deleteShader(D),V=new Lo(s,M),I=kC(s,M)}let V;this.getUniforms=function(){return V===void 0&&O(this),V};let I;this.getAttributes=function(){return I===void 0&&O(this),I};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(M,UC)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=NC++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=Y,this.fragmentShader=D,this}var tR=0,Ld=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Dd(e),t.set(e,n)),n}},Dd=class{constructor(e){this.id=tR++,this.code=e,this.usedTimes=0}};function nR(i,e,t,n,s,a,c){let u=new So,h=new Ld,f=new Set,d=[],g=s.logarithmicDepthBuffer,m=s.vertexTextures,_=s.precision,S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(I){return f.add(I),I===0?"uv":`uv${I}`}function x(I,A,G,ne,ee){let le=ne.fog,fe=ee.geometry,oe=I.isMeshStandardMaterial?ne.environment:null,we=(I.isMeshStandardMaterial?t:e).get(I.envMap||oe),se=we&&we.mapping===Ha?we.image.height:null,Re=S[I.type];I.precision!==null&&(_=s.getMaxPrecision(I.precision),_!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",_,"instead."));let He=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,nt=He!==void 0?He.length:0,pt=0;fe.morphAttributes.position!==void 0&&(pt=1),fe.morphAttributes.normal!==void 0&&(pt=2),fe.morphAttributes.color!==void 0&&(pt=3);let Lt,de,Ie,Ze;if(Re){let Bt=Xn[Re];Lt=Bt.vertexShader,de=Bt.fragmentShader}else Lt=I.vertexShader,de=I.fragmentShader,h.update(I),Ie=h.getVertexShaderID(I),Ze=h.getFragmentShaderID(I);let Ne=i.getRenderTarget(),et=i.state.buffers.depth.getReversed(),Pt=ee.isInstancedMesh===!0,ot=ee.isBatchedMesh===!0,Jt=!!I.map,Dt=!!I.matcap,Rt=!!we,H=!!I.aoMap,Qt=!!I.lightMap,St=!!I.bumpMap,kt=!!I.normalMap,Xe=!!I.displacementMap,mt=!!I.emissiveMap,Qe=!!I.metalnessMap,gt=!!I.roughnessMap,nn=I.anisotropy>0,U=I.clearcoat>0,b=I.dispersion>0,j=I.iridescence>0,he=I.sheen>0,xe=I.transmission>0,ae=nn&&!!I.anisotropyMap,Je=U&&!!I.clearcoatMap,Le=U&&!!I.clearcoatNormalMap,qe=U&&!!I.clearcoatRoughnessMap,Ke=j&&!!I.iridescenceMap,Me=j&&!!I.iridescenceThicknessMap,ze=he&&!!I.sheenColorMap,rt=he&&!!I.sheenRoughnessMap,at=!!I.specularMap,Ue=!!I.specularColorMap,ht=!!I.specularIntensityMap,q=xe&&!!I.transmissionMap,Fe=xe&&!!I.thicknessMap,Se=!!I.gradientMap,ke=!!I.alphaMap,Ce=I.alphaTest>0,ve=!!I.alphaHash,Ye=!!I.extensions,vt=xr;I.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(vt=i.toneMapping);let Yt={shaderID:Re,shaderType:I.type,shaderName:I.name,vertexShader:Lt,fragmentShader:de,defines:I.defines,customVertexShaderID:Ie,customFragmentShaderID:Ze,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:_,batching:ot,batchingColor:ot&&ee._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&ee.instanceColor!==null,instancingMorph:Pt&&ee.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ne===null?i.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:wi,alphaToCoverage:!!I.alphaToCoverage,map:Jt,matcap:Dt,envMap:Rt,envMapMode:Rt&&we.mapping,envMapCubeUVHeight:se,aoMap:H,lightMap:Qt,bumpMap:St,normalMap:kt,displacementMap:m&&Xe,emissiveMap:mt,normalMapObjectSpace:kt&&I.normalMapType===y_,normalMapTangentSpace:kt&&I.normalMapType===x_,metalnessMap:Qe,roughnessMap:gt,anisotropy:nn,anisotropyMap:ae,clearcoat:U,clearcoatMap:Je,clearcoatNormalMap:Le,clearcoatRoughnessMap:qe,dispersion:b,iridescence:j,iridescenceMap:Ke,iridescenceThicknessMap:Me,sheen:he,sheenColorMap:ze,sheenRoughnessMap:rt,specularMap:at,specularColorMap:Ue,specularIntensityMap:ht,transmission:xe,transmissionMap:q,thicknessMap:Fe,gradientMap:Se,opaque:I.transparent===!1&&I.blending===bs&&I.alphaToCoverage===!1,alphaMap:ke,alphaTest:Ce,alphaHash:ve,combine:I.combine,mapUv:Jt&&M(I.map.channel),aoMapUv:H&&M(I.aoMap.channel),lightMapUv:Qt&&M(I.lightMap.channel),bumpMapUv:St&&M(I.bumpMap.channel),normalMapUv:kt&&M(I.normalMap.channel),displacementMapUv:Xe&&M(I.displacementMap.channel),emissiveMapUv:mt&&M(I.emissiveMap.channel),metalnessMapUv:Qe&&M(I.metalnessMap.channel),roughnessMapUv:gt&&M(I.roughnessMap.channel),anisotropyMapUv:ae&&M(I.anisotropyMap.channel),clearcoatMapUv:Je&&M(I.clearcoatMap.channel),clearcoatNormalMapUv:Le&&M(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&M(I.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&M(I.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&M(I.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&M(I.sheenColorMap.channel),sheenRoughnessMapUv:rt&&M(I.sheenRoughnessMap.channel),specularMapUv:at&&M(I.specularMap.channel),specularColorMapUv:Ue&&M(I.specularColorMap.channel),specularIntensityMapUv:ht&&M(I.specularIntensityMap.channel),transmissionMapUv:q&&M(I.transmissionMap.channel),thicknessMapUv:Fe&&M(I.thicknessMap.channel),alphaMapUv:ke&&M(I.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(kt||nn),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!fe.attributes.uv&&(Jt||ke),fog:!!le,useFog:I.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:I.flatShading===!0&&I.wireframe===!1,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:et,skinning:ee.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:pt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:vt,decodeVideoTexture:Jt&&I.map.isVideoTexture===!0&&Vt.getTransfer(I.map.colorSpace)===Zt,decodeVideoTextureEmissive:mt&&I.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(I.emissiveMap.colorSpace)===Zt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===Ei,flipSided:I.side===Wn,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:Ye&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&I.extensions.multiDraw===!0||ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return Yt.vertexUv1s=f.has(1),Yt.vertexUv2s=f.has(2),Yt.vertexUv3s=f.has(3),f.clear(),Yt}function v(I){let A=[];if(I.shaderID?A.push(I.shaderID):(A.push(I.customVertexShaderID),A.push(I.customFragmentShaderID)),I.defines!==void 0)for(let G in I.defines)A.push(G),A.push(I.defines[G]);return I.isRawShaderMaterial===!1&&(B(A,I),L(A,I),A.push(i.outputColorSpace)),A.push(I.customProgramCacheKey),A.join()}function B(I,A){I.push(A.precision),I.push(A.outputColorSpace),I.push(A.envMapMode),I.push(A.envMapCubeUVHeight),I.push(A.mapUv),I.push(A.alphaMapUv),I.push(A.lightMapUv),I.push(A.aoMapUv),I.push(A.bumpMapUv),I.push(A.normalMapUv),I.push(A.displacementMapUv),I.push(A.emissiveMapUv),I.push(A.metalnessMapUv),I.push(A.roughnessMapUv),I.push(A.anisotropyMapUv),I.push(A.clearcoatMapUv),I.push(A.clearcoatNormalMapUv),I.push(A.clearcoatRoughnessMapUv),I.push(A.iridescenceMapUv),I.push(A.iridescenceThicknessMapUv),I.push(A.sheenColorMapUv),I.push(A.sheenRoughnessMapUv),I.push(A.specularMapUv),I.push(A.specularColorMapUv),I.push(A.specularIntensityMapUv),I.push(A.transmissionMapUv),I.push(A.thicknessMapUv),I.push(A.combine),I.push(A.fogExp2),I.push(A.sizeAttenuation),I.push(A.morphTargetsCount),I.push(A.morphAttributeCount),I.push(A.numDirLights),I.push(A.numPointLights),I.push(A.numSpotLights),I.push(A.numSpotLightMaps),I.push(A.numHemiLights),I.push(A.numRectAreaLights),I.push(A.numDirLightShadows),I.push(A.numPointLightShadows),I.push(A.numSpotLightShadows),I.push(A.numSpotLightShadowsWithMaps),I.push(A.numLightProbes),I.push(A.shadowMapType),I.push(A.toneMapping),I.push(A.numClippingPlanes),I.push(A.numClipIntersection),I.push(A.depthPacking)}function L(I,A){u.disableAll(),A.supportsVertexTextures&&u.enable(0),A.instancing&&u.enable(1),A.instancingColor&&u.enable(2),A.instancingMorph&&u.enable(3),A.matcap&&u.enable(4),A.envMap&&u.enable(5),A.normalMapObjectSpace&&u.enable(6),A.normalMapTangentSpace&&u.enable(7),A.clearcoat&&u.enable(8),A.iridescence&&u.enable(9),A.alphaTest&&u.enable(10),A.vertexColors&&u.enable(11),A.vertexAlphas&&u.enable(12),A.vertexUv1s&&u.enable(13),A.vertexUv2s&&u.enable(14),A.vertexUv3s&&u.enable(15),A.vertexTangents&&u.enable(16),A.anisotropy&&u.enable(17),A.alphaHash&&u.enable(18),A.batching&&u.enable(19),A.dispersion&&u.enable(20),A.batchingColor&&u.enable(21),A.gradientMap&&u.enable(22),I.push(u.mask),u.disableAll(),A.fog&&u.enable(0),A.useFog&&u.enable(1),A.flatShading&&u.enable(2),A.logarithmicDepthBuffer&&u.enable(3),A.reverseDepthBuffer&&u.enable(4),A.skinning&&u.enable(5),A.morphTargets&&u.enable(6),A.morphNormals&&u.enable(7),A.morphColors&&u.enable(8),A.premultipliedAlpha&&u.enable(9),A.shadowMapEnabled&&u.enable(10),A.doubleSided&&u.enable(11),A.flipSided&&u.enable(12),A.useDepthPacking&&u.enable(13),A.dithering&&u.enable(14),A.transmission&&u.enable(15),A.sheen&&u.enable(16),A.opaque&&u.enable(17),A.pointsUvs&&u.enable(18),A.decodeVideoTexture&&u.enable(19),A.decodeVideoTextureEmissive&&u.enable(20),A.alphaToCoverage&&u.enable(21),I.push(u.mask)}function P(I){let A=S[I.type],G;if(A){let ne=Xn[A];G=Ja.clone(ne.uniforms)}else G=I.uniforms;return G}function Y(I,A){let G;for(let ne=0,ee=d.length;ne<ee;ne++){let le=d[ne];if(le.cacheKey===A){G=le,++G.usedTimes;break}}return G===void 0&&(G=new eR(i,A,I,a),d.push(G)),G}function D(I){if(--I.usedTimes===0){let A=d.indexOf(I);d[A]=d[d.length-1],d.pop(),I.destroy()}}function O(I){h.remove(I)}function V(){h.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:P,acquireProgram:Y,releaseProgram:D,releaseShaderCache:O,programs:d,dispose:V}}function iR(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let u=i.get(c);return u===void 0&&(u={},i.set(c,u)),u}function n(c){i.delete(c)}function s(c,u,h){i.get(c)[u]=h}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function rR(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function j_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function e0(){let i=[],e=0,t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function c(g,m,_,S,M,x){let v=i[e];return v===void 0?(v={id:g.id,object:g,geometry:m,material:_,groupOrder:S,renderOrder:g.renderOrder,z:M,group:x},i[e]=v):(v.id=g.id,v.object=g,v.geometry=m,v.material=_,v.groupOrder=S,v.renderOrder=g.renderOrder,v.z=M,v.group=x),e++,v}function u(g,m,_,S,M,x){let v=c(g,m,_,S,M,x);_.transmission>0?n.push(v):_.transparent===!0?s.push(v):t.push(v)}function h(g,m,_,S,M,x){let v=c(g,m,_,S,M,x);_.transmission>0?n.unshift(v):_.transparent===!0?s.unshift(v):t.unshift(v)}function f(g,m){t.length>1&&t.sort(g||rR),n.length>1&&n.sort(m||j_),s.length>1&&s.sort(m||j_)}function d(){for(let g=e,m=i.length;g<m;g++){let _=i[g];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:u,unshift:h,finish:d,sort:f}}function sR(){let i=new WeakMap;function e(n,s){let a=i.get(n),c;return a===void 0?(c=new e0,i.set(n,[c])):s>=a.length?(c=new e0,a.push(c)):c=a[s],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function oR(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new yt};break;case"SpotLight":t={position:new $,direction:new $,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new $,halfWidth:new $,halfHeight:new $};break}return i[e.id]=t,t}}}function aR(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var cR=0;function lR(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function uR(i){let e=new oR,t=aR(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new $);let s=new $,a=new sn,c=new sn;function u(f){let d=0,g=0,m=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let _=0,S=0,M=0,x=0,v=0,B=0,L=0,P=0,Y=0,D=0,O=0;f.sort(lR);for(let I=0,A=f.length;I<A;I++){let G=f[I],ne=G.color,ee=G.intensity,le=G.distance,fe=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)d+=ne.r*ee,g+=ne.g*ee,m+=ne.b*ee;else if(G.isLightProbe){for(let oe=0;oe<9;oe++)n.probe[oe].addScaledVector(G.sh.coefficients[oe],ee);O++}else if(G.isDirectionalLight){let oe=e.get(G);if(oe.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){let we=G.shadow,se=t.get(G);se.shadowIntensity=we.intensity,se.shadowBias=we.bias,se.shadowNormalBias=we.normalBias,se.shadowRadius=we.radius,se.shadowMapSize=we.mapSize,n.directionalShadow[_]=se,n.directionalShadowMap[_]=fe,n.directionalShadowMatrix[_]=G.shadow.matrix,B++}n.directional[_]=oe,_++}else if(G.isSpotLight){let oe=e.get(G);oe.position.setFromMatrixPosition(G.matrixWorld),oe.color.copy(ne).multiplyScalar(ee),oe.distance=le,oe.coneCos=Math.cos(G.angle),oe.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),oe.decay=G.decay,n.spot[M]=oe;let we=G.shadow;if(G.map&&(n.spotLightMap[Y]=G.map,Y++,we.updateMatrices(G),G.castShadow&&D++),n.spotLightMatrix[M]=we.matrix,G.castShadow){let se=t.get(G);se.shadowIntensity=we.intensity,se.shadowBias=we.bias,se.shadowNormalBias=we.normalBias,se.shadowRadius=we.radius,se.shadowMapSize=we.mapSize,n.spotShadow[M]=se,n.spotShadowMap[M]=fe,P++}M++}else if(G.isRectAreaLight){let oe=e.get(G);oe.color.copy(ne).multiplyScalar(ee),oe.halfWidth.set(G.width*.5,0,0),oe.halfHeight.set(0,G.height*.5,0),n.rectArea[x]=oe,x++}else if(G.isPointLight){let oe=e.get(G);if(oe.color.copy(G.color).multiplyScalar(G.intensity),oe.distance=G.distance,oe.decay=G.decay,G.castShadow){let we=G.shadow,se=t.get(G);se.shadowIntensity=we.intensity,se.shadowBias=we.bias,se.shadowNormalBias=we.normalBias,se.shadowRadius=we.radius,se.shadowMapSize=we.mapSize,se.shadowCameraNear=we.camera.near,se.shadowCameraFar=we.camera.far,n.pointShadow[S]=se,n.pointShadowMap[S]=fe,n.pointShadowMatrix[S]=G.shadow.matrix,L++}n.point[S]=oe,S++}else if(G.isHemisphereLight){let oe=e.get(G);oe.skyColor.copy(G.color).multiplyScalar(ee),oe.groundColor.copy(G.groundColor).multiplyScalar(ee),n.hemi[v]=oe,v++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=g,n.ambient[2]=m;let V=n.hash;(V.directionalLength!==_||V.pointLength!==S||V.spotLength!==M||V.rectAreaLength!==x||V.hemiLength!==v||V.numDirectionalShadows!==B||V.numPointShadows!==L||V.numSpotShadows!==P||V.numSpotMaps!==Y||V.numLightProbes!==O)&&(n.directional.length=_,n.spot.length=M,n.rectArea.length=x,n.point.length=S,n.hemi.length=v,n.directionalShadow.length=B,n.directionalShadowMap.length=B,n.pointShadow.length=L,n.pointShadowMap.length=L,n.spotShadow.length=P,n.spotShadowMap.length=P,n.directionalShadowMatrix.length=B,n.pointShadowMatrix.length=L,n.spotLightMatrix.length=P+Y-D,n.spotLightMap.length=Y,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=O,V.directionalLength=_,V.pointLength=S,V.spotLength=M,V.rectAreaLength=x,V.hemiLength=v,V.numDirectionalShadows=B,V.numPointShadows=L,V.numSpotShadows=P,V.numSpotMaps=Y,V.numLightProbes=O,n.version=cR++)}function h(f,d){let g=0,m=0,_=0,S=0,M=0,x=d.matrixWorldInverse;for(let v=0,B=f.length;v<B;v++){let L=f[v];if(L.isDirectionalLight){let P=n.directional[g];P.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(x),g++}else if(L.isSpotLight){let P=n.spot[_];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(x),_++}else if(L.isRectAreaLight){let P=n.rectArea[S];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(x),c.identity(),a.copy(L.matrixWorld),a.premultiply(x),c.extractRotation(a),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),S++}else if(L.isPointLight){let P=n.point[m];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(x),m++}else if(L.isHemisphereLight){let P=n.hemi[M];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(x),M++}}}return{setup:u,setupView:h,state:n}}function t0(i){let e=new uR(i),t=[],n=[];function s(d){f.camera=d,t.length=0,n.length=0}function a(d){t.push(d)}function c(d){n.push(d)}function u(){e.setup(t)}function h(d){e.setupView(t,d)}let f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:f,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:c}}function hR(i){let e=new WeakMap;function t(s,a=0){let c=e.get(s),u;return c===void 0?(u=new t0(i),e.set(s,[u])):a>=c.length?(u=new t0(i),c.push(u)):u=c[a],u}function n(){e=new WeakMap}return{get:t,dispose:n}}var fR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pR(i,e,t){let n=new Ia,s=new st,a=new st,c=new Kt,u=new Ol({depthPacking:v_}),h=new Bl,f={},d=t.maxTextureSize,g={[gr]:Wn,[Wn]:gr,[Ei]:Ei},m=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:fR,fragmentShader:dR}),_=m.clone();_.defines.HORIZONTAL_PASS=1;let S=new Fn;S.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new hn(S,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ed;let v=this.type;this.render=function(D,O,V){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;let I=i.getRenderTarget(),A=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),ne=i.state;ne.setBlending(vr),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);let ee=v!==$i&&this.type===$i,le=v===$i&&this.type!==$i;for(let fe=0,oe=D.length;fe<oe;fe++){let we=D[fe],se=we.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",we,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;s.copy(se.mapSize);let Re=se.getFrameExtents();if(s.multiply(Re),a.copy(se.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(a.x=Math.floor(d/Re.x),s.x=a.x*Re.x,se.mapSize.x=a.x),s.y>d&&(a.y=Math.floor(d/Re.y),s.y=a.y*Re.y,se.mapSize.y=a.y)),se.map===null||ee===!0||le===!0){let nt=this.type!==$i?{minFilter:bi,magFilter:bi}:{};se.map!==null&&se.map.dispose(),se.map=new Yi(s.x,s.y,nt),se.map.texture.name=we.name+".shadowMap",se.camera.updateProjectionMatrix()}i.setRenderTarget(se.map),i.clear();let He=se.getViewportCount();for(let nt=0;nt<He;nt++){let pt=se.getViewport(nt);c.set(a.x*pt.x,a.y*pt.y,a.x*pt.z,a.y*pt.w),ne.viewport(c),se.updateMatrices(we,nt),n=se.getFrustum(),P(O,V,se.camera,we,this.type)}se.isPointLightShadow!==!0&&this.type===$i&&B(se,V),se.needsUpdate=!1}v=this.type,x.needsUpdate=!1,i.setRenderTarget(I,A,G)};function B(D,O){let V=e.update(M);m.defines.VSM_SAMPLES!==D.blurSamples&&(m.defines.VSM_SAMPLES=D.blurSamples,_.defines.VSM_SAMPLES=D.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Yi(s.x,s.y)),m.uniforms.shadow_pass.value=D.map.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(O,null,V,m,M,null),_.uniforms.shadow_pass.value=D.mapPass.texture,_.uniforms.resolution.value=D.mapSize,_.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(O,null,V,_,M,null)}function L(D,O,V,I){let A=null,G=V.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(G!==void 0)A=G;else if(A=V.isPointLight===!0?h:u,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){let ne=A.uuid,ee=O.uuid,le=f[ne];le===void 0&&(le={},f[ne]=le);let fe=le[ee];fe===void 0&&(fe=A.clone(),le[ee]=fe,O.addEventListener("dispose",Y)),A=fe}if(A.visible=O.visible,A.wireframe=O.wireframe,I===$i?A.side=O.shadowSide!==null?O.shadowSide:O.side:A.side=O.shadowSide!==null?O.shadowSide:g[O.side],A.alphaMap=O.alphaMap,A.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,A.map=O.map,A.clipShadows=O.clipShadows,A.clippingPlanes=O.clippingPlanes,A.clipIntersection=O.clipIntersection,A.displacementMap=O.displacementMap,A.displacementScale=O.displacementScale,A.displacementBias=O.displacementBias,A.wireframeLinewidth=O.wireframeLinewidth,A.linewidth=O.linewidth,V.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let ne=i.properties.get(A);ne.light=V}return A}function P(D,O,V,I,A){if(D.visible===!1)return;if(D.layers.test(O.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&A===$i)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,D.matrixWorld);let ee=e.update(D),le=D.material;if(Array.isArray(le)){let fe=ee.groups;for(let oe=0,we=fe.length;oe<we;oe++){let se=fe[oe],Re=le[se.materialIndex];if(Re&&Re.visible){let He=L(D,Re,I,A);D.onBeforeShadow(i,D,O,V,ee,He,se),i.renderBufferDirect(V,null,ee,He,D,se),D.onAfterShadow(i,D,O,V,ee,He,se)}}}else if(le.visible){let fe=L(D,le,I,A);D.onBeforeShadow(i,D,O,V,ee,fe,null),i.renderBufferDirect(V,null,ee,fe,D,null),D.onAfterShadow(i,D,O,V,ee,fe,null)}}let ne=D.children;for(let ee=0,le=ne.length;ee<le;ee++)P(ne[ee],O,V,I,A)}function Y(D){D.target.removeEventListener("dispose",Y);for(let V in f){let I=f[V],A=D.target.uuid;A in I&&(I[A].dispose(),delete I[A])}}}var mR={[$l]:Zl,[Jl]:jl,[Kl]:eu,[ws]:Ql,[Zl]:$l,[jl]:Jl,[eu]:Kl,[Ql]:ws};function gR(i,e){function t(){let q=!1,Fe=new Kt,Se=null,ke=new Kt(0,0,0,0);return{setMask:function(Ce){Se!==Ce&&!q&&(i.colorMask(Ce,Ce,Ce,Ce),Se=Ce)},setLocked:function(Ce){q=Ce},setClear:function(Ce,ve,Ye,vt,Yt){Yt===!0&&(Ce*=vt,ve*=vt,Ye*=vt),Fe.set(Ce,ve,Ye,vt),ke.equals(Fe)===!1&&(i.clearColor(Ce,ve,Ye,vt),ke.copy(Fe))},reset:function(){q=!1,Se=null,ke.set(-1,0,0,0)}}}function n(){let q=!1,Fe=!1,Se=null,ke=null,Ce=null;return{setReversed:function(ve){if(Fe!==ve){let Ye=e.get("EXT_clip_control");ve?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Fe=ve;let vt=Ce;Ce=null,this.setClear(vt)}},getReversed:function(){return Fe},setTest:function(ve){ve?Ne(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(ve){Se!==ve&&!q&&(i.depthMask(ve),Se=ve)},setFunc:function(ve){if(Fe&&(ve=mR[ve]),ke!==ve){switch(ve){case $l:i.depthFunc(i.NEVER);break;case Zl:i.depthFunc(i.ALWAYS);break;case Jl:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case Kl:i.depthFunc(i.EQUAL);break;case Ql:i.depthFunc(i.GEQUAL);break;case jl:i.depthFunc(i.GREATER);break;case eu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ke=ve}},setLocked:function(ve){q=ve},setClear:function(ve){Ce!==ve&&(Fe&&(ve=1-ve),i.clearDepth(ve),Ce=ve)},reset:function(){q=!1,Se=null,ke=null,Ce=null,Fe=!1}}}function s(){let q=!1,Fe=null,Se=null,ke=null,Ce=null,ve=null,Ye=null,vt=null,Yt=null;return{setTest:function(Bt){q||(Bt?Ne(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(Bt){Fe!==Bt&&!q&&(i.stencilMask(Bt),Fe=Bt)},setFunc:function(Bt,En,Qn){(Se!==Bt||ke!==En||Ce!==Qn)&&(i.stencilFunc(Bt,En,Qn),Se=Bt,ke=En,Ce=Qn)},setOp:function(Bt,En,Qn){(ve!==Bt||Ye!==En||vt!==Qn)&&(i.stencilOp(Bt,En,Qn),ve=Bt,Ye=En,vt=Qn)},setLocked:function(Bt){q=Bt},setClear:function(Bt){Yt!==Bt&&(i.clearStencil(Bt),Yt=Bt)},reset:function(){q=!1,Fe=null,Se=null,ke=null,Ce=null,ve=null,Ye=null,vt=null,Yt=null}}}let a=new t,c=new n,u=new s,h=new WeakMap,f=new WeakMap,d={},g={},m=new WeakMap,_=[],S=null,M=!1,x=null,v=null,B=null,L=null,P=null,Y=null,D=null,O=new yt(0,0,0),V=0,I=!1,A=null,G=null,ne=null,ee=null,le=null,fe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),oe=!1,we=0,se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(we=parseFloat(/^WebGL (\d)/.exec(se)[1]),oe=we>=1):se.indexOf("OpenGL ES")!==-1&&(we=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),oe=we>=2);let Re=null,He={},nt=i.getParameter(i.SCISSOR_BOX),pt=i.getParameter(i.VIEWPORT),Lt=new Kt().fromArray(nt),de=new Kt().fromArray(pt);function Ie(q,Fe,Se,ke){let Ce=new Uint8Array(4),ve=i.createTexture();i.bindTexture(q,ve),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<Se;Ye++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Fe,0,i.RGBA,1,1,ke,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(Fe+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return ve}let Ze={};Ze[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Ze[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ze[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ze[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),Ne(i.DEPTH_TEST),c.setFunc(ws),St(!1),kt(jf),Ne(i.CULL_FACE),H(vr);function Ne(q){d[q]!==!0&&(i.enable(q),d[q]=!0)}function et(q){d[q]!==!1&&(i.disable(q),d[q]=!1)}function Pt(q,Fe){return g[q]!==Fe?(i.bindFramebuffer(q,Fe),g[q]=Fe,q===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Fe),q===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Fe),!0):!1}function ot(q,Fe){let Se=_,ke=!1;if(q){Se=m.get(Fe),Se===void 0&&(Se=[],m.set(Fe,Se));let Ce=q.textures;if(Se.length!==Ce.length||Se[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,Ye=Ce.length;ve<Ye;ve++)Se[ve]=i.COLOR_ATTACHMENT0+ve;Se.length=Ce.length,ke=!0}}else Se[0]!==i.BACK&&(Se[0]=i.BACK,ke=!0);ke&&i.drawBuffers(Se)}function Jt(q){return S!==q?(i.useProgram(q),S=q,!0):!1}let Dt={[Wr]:i.FUNC_ADD,[Wg]:i.FUNC_SUBTRACT,[Xg]:i.FUNC_REVERSE_SUBTRACT};Dt[qg]=i.MIN,Dt[Yg]=i.MAX;let Rt={[$g]:i.ZERO,[Zg]:i.ONE,[Jg]:i.SRC_COLOR,[gl]:i.SRC_ALPHA,[n_]:i.SRC_ALPHA_SATURATE,[e_]:i.DST_COLOR,[Qg]:i.DST_ALPHA,[Kg]:i.ONE_MINUS_SRC_COLOR,[_l]:i.ONE_MINUS_SRC_ALPHA,[t_]:i.ONE_MINUS_DST_COLOR,[jg]:i.ONE_MINUS_DST_ALPHA,[i_]:i.CONSTANT_COLOR,[r_]:i.ONE_MINUS_CONSTANT_COLOR,[s_]:i.CONSTANT_ALPHA,[o_]:i.ONE_MINUS_CONSTANT_ALPHA};function H(q,Fe,Se,ke,Ce,ve,Ye,vt,Yt,Bt){if(q===vr){M===!0&&(et(i.BLEND),M=!1);return}if(M===!1&&(Ne(i.BLEND),M=!0),q!==kg){if(q!==x||Bt!==I){if((v!==Wr||P!==Wr)&&(i.blendEquation(i.FUNC_ADD),v=Wr,P=Wr),Bt)switch(q){case bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case td:i.blendFunc(i.ONE,i.ONE);break;case nd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case id:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case td:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case id:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}B=null,L=null,Y=null,D=null,O.set(0,0,0),V=0,x=q,I=Bt}return}Ce=Ce||Fe,ve=ve||Se,Ye=Ye||ke,(Fe!==v||Ce!==P)&&(i.blendEquationSeparate(Dt[Fe],Dt[Ce]),v=Fe,P=Ce),(Se!==B||ke!==L||ve!==Y||Ye!==D)&&(i.blendFuncSeparate(Rt[Se],Rt[ke],Rt[ve],Rt[Ye]),B=Se,L=ke,Y=ve,D=Ye),(vt.equals(O)===!1||Yt!==V)&&(i.blendColor(vt.r,vt.g,vt.b,Yt),O.copy(vt),V=Yt),x=q,I=!1}function Qt(q,Fe){q.side===Ei?et(i.CULL_FACE):Ne(i.CULL_FACE);let Se=q.side===Wn;Fe&&(Se=!Se),St(Se),q.blending===bs&&q.transparent===!1?H(vr):H(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),a.setMask(q.colorWrite);let ke=q.stencilWrite;u.setTest(ke),ke&&(u.setMask(q.stencilWriteMask),u.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),u.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),mt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Ne(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function St(q){A!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),A=q)}function kt(q){q!==Vg?(Ne(i.CULL_FACE),q!==G&&(q===jf?i.cullFace(i.BACK):q===Gg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),G=q}function Xe(q){q!==ne&&(oe&&i.lineWidth(q),ne=q)}function mt(q,Fe,Se){q?(Ne(i.POLYGON_OFFSET_FILL),(ee!==Fe||le!==Se)&&(i.polygonOffset(Fe,Se),ee=Fe,le=Se)):et(i.POLYGON_OFFSET_FILL)}function Qe(q){q?Ne(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function gt(q){q===void 0&&(q=i.TEXTURE0+fe-1),Re!==q&&(i.activeTexture(q),Re=q)}function nn(q,Fe,Se){Se===void 0&&(Re===null?Se=i.TEXTURE0+fe-1:Se=Re);let ke=He[Se];ke===void 0&&(ke={type:void 0,texture:void 0},He[Se]=ke),(ke.type!==q||ke.texture!==Fe)&&(Re!==Se&&(i.activeTexture(Se),Re=Se),i.bindTexture(q,Fe||Ze[q]),ke.type=q,ke.texture=Fe)}function U(){let q=He[Re];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function j(){try{i.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function he(){try{i.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xe(){try{i.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ae(){try{i.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Je(){try{i.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Le(){try{i.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function qe(){try{i.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ke(){try{i.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Me(){try{i.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ze(q){Lt.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),Lt.copy(q))}function rt(q){de.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),de.copy(q))}function at(q,Fe){let Se=f.get(Fe);Se===void 0&&(Se=new WeakMap,f.set(Fe,Se));let ke=Se.get(q);ke===void 0&&(ke=i.getUniformBlockIndex(Fe,q.name),Se.set(q,ke))}function Ue(q,Fe){let ke=f.get(Fe).get(q);h.get(Fe)!==ke&&(i.uniformBlockBinding(Fe,ke,q.__bindingPointIndex),h.set(Fe,ke))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Re=null,He={},g={},m=new WeakMap,_=[],S=null,M=!1,x=null,v=null,B=null,L=null,P=null,Y=null,D=null,O=new yt(0,0,0),V=0,I=!1,A=null,G=null,ne=null,ee=null,le=null,Lt.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:Ne,disable:et,bindFramebuffer:Pt,drawBuffers:ot,useProgram:Jt,setBlending:H,setMaterial:Qt,setFlipSided:St,setCullFace:kt,setLineWidth:Xe,setPolygonOffset:mt,setScissorTest:Qe,activeTexture:gt,bindTexture:nn,unbindTexture:U,compressedTexImage2D:b,compressedTexImage3D:j,texImage2D:Ke,texImage3D:Me,updateUBOMapping:at,uniformBlockBinding:Ue,texStorage2D:Le,texStorage3D:qe,texSubImage2D:he,texSubImage3D:xe,compressedTexSubImage2D:ae,compressedTexSubImage3D:Je,scissor:ze,viewport:rt,reset:ht}}function _R(i,e,t,n,s,a,c){let u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new st,d=new WeakMap,g,m=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(U){}function S(U,b){return _?new OffscreenCanvas(U,b):wa("canvas")}function M(U,b,j){let he=1,xe=nn(U);if((xe.width>j||xe.height>j)&&(he=j/Math.max(xe.width,xe.height)),he<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let ae=Math.floor(he*xe.width),Je=Math.floor(he*xe.height);g===void 0&&(g=S(ae,Je));let Le=b?S(ae,Je):g;return Le.width=ae,Le.height=Je,Le.getContext("2d").drawImage(U,0,0,ae,Je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ae+"x"+Je+")."),Le}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),U;return U}function x(U){return U.generateMipmaps}function v(U){i.generateMipmap(U)}function B(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function L(U,b,j,he,xe=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ae=b;if(b===i.RED&&(j===i.FLOAT&&(ae=i.R32F),j===i.HALF_FLOAT&&(ae=i.R16F),j===i.UNSIGNED_BYTE&&(ae=i.R8)),b===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(ae=i.R8UI),j===i.UNSIGNED_SHORT&&(ae=i.R16UI),j===i.UNSIGNED_INT&&(ae=i.R32UI),j===i.BYTE&&(ae=i.R8I),j===i.SHORT&&(ae=i.R16I),j===i.INT&&(ae=i.R32I)),b===i.RG&&(j===i.FLOAT&&(ae=i.RG32F),j===i.HALF_FLOAT&&(ae=i.RG16F),j===i.UNSIGNED_BYTE&&(ae=i.RG8)),b===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(ae=i.RG8UI),j===i.UNSIGNED_SHORT&&(ae=i.RG16UI),j===i.UNSIGNED_INT&&(ae=i.RG32UI),j===i.BYTE&&(ae=i.RG8I),j===i.SHORT&&(ae=i.RG16I),j===i.INT&&(ae=i.RG32I)),b===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),j===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),j===i.UNSIGNED_INT&&(ae=i.RGB32UI),j===i.BYTE&&(ae=i.RGB8I),j===i.SHORT&&(ae=i.RGB16I),j===i.INT&&(ae=i.RGB32I)),b===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),j===i.UNSIGNED_INT&&(ae=i.RGBA32UI),j===i.BYTE&&(ae=i.RGBA8I),j===i.SHORT&&(ae=i.RGBA16I),j===i.INT&&(ae=i.RGBA32I)),b===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),b===i.RGBA){let Je=xe?Ma:Vt.getTransfer(he);j===i.FLOAT&&(ae=i.RGBA32F),j===i.HALF_FLOAT&&(ae=i.RGBA16F),j===i.UNSIGNED_BYTE&&(ae=Je===Zt?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function P(U,b){let j;return U?b===null||b===Kr||b===Co?j=i.DEPTH24_STENCIL8:b===Ji?j=i.DEPTH32F_STENCIL8:b===To&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Kr||b===Co?j=i.DEPTH_COMPONENT24:b===Ji?j=i.DEPTH_COMPONENT32F:b===To&&(j=i.DEPTH_COMPONENT16),j}function Y(U,b){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==bi&&U.minFilter!==Fi?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function D(U){let b=U.target;b.removeEventListener("dispose",D),V(b),b.isVideoTexture&&d.delete(b)}function O(U){let b=U.target;b.removeEventListener("dispose",O),A(b)}function V(U){let b=n.get(U);if(b.__webglInit===void 0)return;let j=U.source,he=m.get(j);if(he){let xe=he[b.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&I(U),Object.keys(he).length===0&&m.delete(j)}n.remove(U)}function I(U){let b=n.get(U);i.deleteTexture(b.__webglTexture);let j=U.source,he=m.get(j);delete he[b.__cacheKey],c.memory.textures--}function A(U){let b=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(b.__webglFramebuffer[he]))for(let xe=0;xe<b.__webglFramebuffer[he].length;xe++)i.deleteFramebuffer(b.__webglFramebuffer[he][xe]);else i.deleteFramebuffer(b.__webglFramebuffer[he]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[he])}else{if(Array.isArray(b.__webglFramebuffer))for(let he=0;he<b.__webglFramebuffer.length;he++)i.deleteFramebuffer(b.__webglFramebuffer[he]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let he=0;he<b.__webglColorRenderbuffer.length;he++)b.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[he]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let j=U.textures;for(let he=0,xe=j.length;he<xe;he++){let ae=n.get(j[he]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),c.memory.textures--),n.remove(j[he])}n.remove(U)}let G=0;function ne(){G=0}function ee(){let U=G;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),G+=1,U}function le(U){let b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function fe(U,b){let j=n.get(U);if(U.isVideoTexture&&Qe(U),U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){let he=U.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(j,U,b);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+b)}function oe(U,b){let j=n.get(U);if(U.version>0&&j.__version!==U.version){Ze(j,U,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+b)}function we(U,b){let j=n.get(U);if(U.version>0&&j.__version!==U.version){Ze(j,U,b);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+b)}function se(U,b){let j=n.get(U);if(U.version>0&&j.__version!==U.version){Ne(j,U,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+b)}let Re={[vl]:i.REPEAT,[kr]:i.CLAMP_TO_EDGE,[xl]:i.MIRRORED_REPEAT},He={[bi]:i.NEAREST,[g_]:i.NEAREST_MIPMAP_NEAREST,[ka]:i.NEAREST_MIPMAP_LINEAR,[Fi]:i.LINEAR,[iu]:i.LINEAR_MIPMAP_NEAREST,[Jr]:i.LINEAR_MIPMAP_LINEAR},nt={[S_]:i.NEVER,[A_]:i.ALWAYS,[M_]:i.LESS,[dd]:i.LEQUAL,[b_]:i.EQUAL,[T_]:i.GEQUAL,[w_]:i.GREATER,[E_]:i.NOTEQUAL};function pt(U,b){if(b.type===Ji&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Fi||b.magFilter===iu||b.magFilter===ka||b.magFilter===Jr||b.minFilter===Fi||b.minFilter===iu||b.minFilter===ka||b.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Re[b.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Re[b.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Re[b.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,He[b.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,He[b.minFilter]),b.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,nt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===bi||b.minFilter!==ka&&b.minFilter!==Jr||b.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Lt(U,b){let j=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",D));let he=b.source,xe=m.get(he);xe===void 0&&(xe={},m.set(he,xe));let ae=le(b);if(ae!==U.__cacheKey){xe[ae]===void 0&&(xe[ae]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,j=!0),xe[ae].usedTimes++;let Je=xe[U.__cacheKey];Je!==void 0&&(xe[U.__cacheKey].usedTimes--,Je.usedTimes===0&&I(b)),U.__cacheKey=ae,U.__webglTexture=xe[ae].texture}return j}function de(U,b,j){return Math.floor(Math.floor(U/j)/b)}function Ie(U,b,j,he){let ae=U.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,j,he,b.data);else{ae.sort((Me,ze)=>Me.start-ze.start);let Je=0;for(let Me=1;Me<ae.length;Me++){let ze=ae[Je],rt=ae[Me],at=ze.start+ze.count,Ue=de(rt.start,b.width,4),ht=de(ze.start,b.width,4);rt.start<=at+1&&Ue===ht&&de(rt.start+rt.count-1,b.width,4)===Ue?ze.count=Math.max(ze.count,rt.start+rt.count-ze.start):(++Je,ae[Je]=rt)}ae.length=Je+1;let Le=i.getParameter(i.UNPACK_ROW_LENGTH),qe=i.getParameter(i.UNPACK_SKIP_PIXELS),Ke=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let Me=0,ze=ae.length;Me<ze;Me++){let rt=ae[Me],at=Math.floor(rt.start/4),Ue=Math.ceil(rt.count/4),ht=at%b.width,q=Math.floor(at/b.width),Fe=Ue,Se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),i.pixelStorei(i.UNPACK_SKIP_ROWS,q),t.texSubImage2D(i.TEXTURE_2D,0,ht,q,Fe,Se,j,he,b.data)}U.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Le),i.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ke)}}function Ze(U,b,j){let he=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(he=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(he=i.TEXTURE_3D);let xe=Lt(U,b),ae=b.source;t.bindTexture(he,U.__webglTexture,i.TEXTURE0+j);let Je=n.get(ae);if(ae.version!==Je.__version||xe===!0){t.activeTexture(i.TEXTURE0+j);let Le=Vt.getPrimaries(Vt.workingColorSpace),qe=b.colorSpace===yr?null:Vt.getPrimaries(b.colorSpace),Ke=b.colorSpace===yr||Le===qe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let Me=M(b.image,!1,s.maxTextureSize);Me=gt(b,Me);let ze=a.convert(b.format,b.colorSpace),rt=a.convert(b.type),at=L(b.internalFormat,ze,rt,b.colorSpace,b.isVideoTexture);pt(he,b);let Ue,ht=b.mipmaps,q=b.isVideoTexture!==!0,Fe=Je.__version===void 0||xe===!0,Se=ae.dataReady,ke=Y(b,Me);if(b.isDepthTexture)at=P(b.format===Ro,b.type),Fe&&(q?t.texStorage2D(i.TEXTURE_2D,1,at,Me.width,Me.height):t.texImage2D(i.TEXTURE_2D,0,at,Me.width,Me.height,0,ze,rt,null));else if(b.isDataTexture)if(ht.length>0){q&&Fe&&t.texStorage2D(i.TEXTURE_2D,ke,at,ht[0].width,ht[0].height);for(let Ce=0,ve=ht.length;Ce<ve;Ce++)Ue=ht[Ce],q?Se&&t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,Ue.width,Ue.height,ze,rt,Ue.data):t.texImage2D(i.TEXTURE_2D,Ce,at,Ue.width,Ue.height,0,ze,rt,Ue.data);b.generateMipmaps=!1}else q?(Fe&&t.texStorage2D(i.TEXTURE_2D,ke,at,Me.width,Me.height),Se&&Ie(b,Me,ze,rt)):t.texImage2D(i.TEXTURE_2D,0,at,Me.width,Me.height,0,ze,rt,Me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){q&&Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,at,ht[0].width,ht[0].height,Me.depth);for(let Ce=0,ve=ht.length;Ce<ve;Ce++)if(Ue=ht[Ce],b.format!==Ti)if(ze!==null)if(q){if(Se)if(b.layerUpdates.size>0){let Ye=Sd(Ue.width,Ue.height,b.format,b.type);for(let vt of b.layerUpdates){let Yt=Ue.data.subarray(vt*Ye/Ue.data.BYTES_PER_ELEMENT,(vt+1)*Ye/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,vt,Ue.width,Ue.height,1,ze,Yt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,0,Ue.width,Ue.height,Me.depth,ze,Ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ce,at,Ue.width,Ue.height,Me.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,0,Ue.width,Ue.height,Me.depth,ze,rt,Ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ce,at,Ue.width,Ue.height,Me.depth,0,ze,rt,Ue.data)}else{q&&Fe&&t.texStorage2D(i.TEXTURE_2D,ke,at,ht[0].width,ht[0].height);for(let Ce=0,ve=ht.length;Ce<ve;Ce++)Ue=ht[Ce],b.format!==Ti?ze!==null?q?Se&&t.compressedTexSubImage2D(i.TEXTURE_2D,Ce,0,0,Ue.width,Ue.height,ze,Ue.data):t.compressedTexImage2D(i.TEXTURE_2D,Ce,at,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Se&&t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,Ue.width,Ue.height,ze,rt,Ue.data):t.texImage2D(i.TEXTURE_2D,Ce,at,Ue.width,Ue.height,0,ze,rt,Ue.data)}else if(b.isDataArrayTexture)if(q){if(Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,at,Me.width,Me.height,Me.depth),Se)if(b.layerUpdates.size>0){let Ce=Sd(Me.width,Me.height,b.format,b.type);for(let ve of b.layerUpdates){let Ye=Me.data.subarray(ve*Ce/Me.data.BYTES_PER_ELEMENT,(ve+1)*Ce/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,Me.width,Me.height,1,ze,rt,Ye)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ze,rt,Me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,at,Me.width,Me.height,Me.depth,0,ze,rt,Me.data);else if(b.isData3DTexture)q?(Fe&&t.texStorage3D(i.TEXTURE_3D,ke,at,Me.width,Me.height,Me.depth),Se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ze,rt,Me.data)):t.texImage3D(i.TEXTURE_3D,0,at,Me.width,Me.height,Me.depth,0,ze,rt,Me.data);else if(b.isFramebufferTexture){if(Fe)if(q)t.texStorage2D(i.TEXTURE_2D,ke,at,Me.width,Me.height);else{let Ce=Me.width,ve=Me.height;for(let Ye=0;Ye<ke;Ye++)t.texImage2D(i.TEXTURE_2D,Ye,at,Ce,ve,0,ze,rt,null),Ce>>=1,ve>>=1}}else if(ht.length>0){if(q&&Fe){let Ce=nn(ht[0]);t.texStorage2D(i.TEXTURE_2D,ke,at,Ce.width,Ce.height)}for(let Ce=0,ve=ht.length;Ce<ve;Ce++)Ue=ht[Ce],q?Se&&t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,ze,rt,Ue):t.texImage2D(i.TEXTURE_2D,Ce,at,ze,rt,Ue);b.generateMipmaps=!1}else if(q){if(Fe){let Ce=nn(Me);t.texStorage2D(i.TEXTURE_2D,ke,at,Ce.width,Ce.height)}Se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ze,rt,Me)}else t.texImage2D(i.TEXTURE_2D,0,at,ze,rt,Me);x(b)&&v(he),Je.__version=ae.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Ne(U,b,j){if(b.image.length!==6)return;let he=Lt(U,b),xe=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+j);let ae=n.get(xe);if(xe.version!==ae.__version||he===!0){t.activeTexture(i.TEXTURE0+j);let Je=Vt.getPrimaries(Vt.workingColorSpace),Le=b.colorSpace===yr?null:Vt.getPrimaries(b.colorSpace),qe=b.colorSpace===yr||Je===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let Ke=b.isCompressedTexture||b.image[0].isCompressedTexture,Me=b.image[0]&&b.image[0].isDataTexture,ze=[];for(let ve=0;ve<6;ve++)!Ke&&!Me?ze[ve]=M(b.image[ve],!0,s.maxCubemapSize):ze[ve]=Me?b.image[ve].image:b.image[ve],ze[ve]=gt(b,ze[ve]);let rt=ze[0],at=a.convert(b.format,b.colorSpace),Ue=a.convert(b.type),ht=L(b.internalFormat,at,Ue,b.colorSpace),q=b.isVideoTexture!==!0,Fe=ae.__version===void 0||he===!0,Se=xe.dataReady,ke=Y(b,rt);pt(i.TEXTURE_CUBE_MAP,b);let Ce;if(Ke){q&&Fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,ht,rt.width,rt.height);for(let ve=0;ve<6;ve++){Ce=ze[ve].mipmaps;for(let Ye=0;Ye<Ce.length;Ye++){let vt=Ce[Ye];b.format!==Ti?at!==null?q?Se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,0,0,vt.width,vt.height,at,vt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,ht,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,0,0,vt.width,vt.height,at,Ue,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,ht,vt.width,vt.height,0,at,Ue,vt.data)}}}else{if(Ce=b.mipmaps,q&&Fe){Ce.length>0&&ke++;let ve=nn(ze[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,ht,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Me){q?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ze[ve].width,ze[ve].height,at,Ue,ze[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ht,ze[ve].width,ze[ve].height,0,at,Ue,ze[ve].data);for(let Ye=0;Ye<Ce.length;Ye++){let Yt=Ce[Ye].image[ve].image;q?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,0,0,Yt.width,Yt.height,at,Ue,Yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,ht,Yt.width,Yt.height,0,at,Ue,Yt.data)}}else{q?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,at,Ue,ze[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ht,at,Ue,ze[ve]);for(let Ye=0;Ye<Ce.length;Ye++){let vt=Ce[Ye];q?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,0,0,at,Ue,vt.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,ht,at,Ue,vt.image[ve])}}}x(b)&&v(i.TEXTURE_CUBE_MAP),ae.__version=xe.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function et(U,b,j,he,xe,ae){let Je=a.convert(j.format,j.colorSpace),Le=a.convert(j.type),qe=L(j.internalFormat,Je,Le,j.colorSpace),Ke=n.get(b),Me=n.get(j);if(Me.__renderTarget=b,!Ke.__hasExternalTextures){let ze=Math.max(1,b.width>>ae),rt=Math.max(1,b.height>>ae);xe===i.TEXTURE_3D||xe===i.TEXTURE_2D_ARRAY?t.texImage3D(xe,ae,qe,ze,rt,b.depth,0,Je,Le,null):t.texImage2D(xe,ae,qe,ze,rt,0,Je,Le,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),mt(b)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,xe,Me.__webglTexture,0,Xe(b)):(xe===i.TEXTURE_2D||xe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,he,xe,Me.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(U,b,j){if(i.bindRenderbuffer(i.RENDERBUFFER,U),b.depthBuffer){let he=b.depthTexture,xe=he&&he.isDepthTexture?he.type:null,ae=P(b.stencilBuffer,xe),Je=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=Xe(b);mt(b)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,ae,b.width,b.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,ae,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ae,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Je,i.RENDERBUFFER,U)}else{let he=b.textures;for(let xe=0;xe<he.length;xe++){let ae=he[xe],Je=a.convert(ae.format,ae.colorSpace),Le=a.convert(ae.type),qe=L(ae.internalFormat,Je,Le,ae.colorSpace),Ke=Xe(b);j&&mt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,qe,b.width,b.height):mt(b)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke,qe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,qe,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let he=n.get(b.depthTexture);he.__renderTarget=b,(!he.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),fe(b.depthTexture,0);let xe=he.__webglTexture,ae=Xe(b);if(b.depthTexture.format===_o)mt(b)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0);else if(b.depthTexture.format===Ro)mt(b)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Jt(U){let b=n.get(U),j=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){let he=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),he){let xe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,he.removeEventListener("dispose",xe)};he.addEventListener("dispose",xe),b.__depthDisposeCallback=xe}b.__boundDepthTexture=he}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");let he=U.texture.mipmaps;he&&he.length>0?ot(b.__webglFramebuffer[0],U):ot(b.__webglFramebuffer,U)}else if(j){b.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[he]),b.__webglDepthbuffer[he]===void 0)b.__webglDepthbuffer[he]=i.createRenderbuffer(),Pt(b.__webglDepthbuffer[he],U,!1);else{let xe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=b.__webglDepthbuffer[he];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,ae)}}else{let he=U.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Pt(b.__webglDepthbuffer,U,!1);else{let xe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(U,b,j){let he=n.get(U);b!==void 0&&et(he.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&Jt(U)}function Rt(U){let b=U.texture,j=n.get(U),he=n.get(b);U.addEventListener("dispose",O);let xe=U.textures,ae=U.isWebGLCubeRenderTarget===!0,Je=xe.length>1;if(Je||(he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture()),he.__version=b.version,c.memory.textures++),ae){j.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[Le]=[];for(let qe=0;qe<b.mipmaps.length;qe++)j.__webglFramebuffer[Le][qe]=i.createFramebuffer()}else j.__webglFramebuffer[Le]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let Le=0;Le<b.mipmaps.length;Le++)j.__webglFramebuffer[Le]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Je)for(let Le=0,qe=xe.length;Le<qe;Le++){let Ke=n.get(xe[Le]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=i.createTexture(),c.memory.textures++)}if(U.samples>0&&mt(U)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Le=0;Le<xe.length;Le++){let qe=xe[Le];j.__webglColorRenderbuffer[Le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[Le]);let Ke=a.convert(qe.format,qe.colorSpace),Me=a.convert(qe.type),ze=L(qe.internalFormat,Ke,Me,qe.colorSpace,U.isXRRenderTarget===!0),rt=Xe(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,ze,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,j.__webglColorRenderbuffer[Le])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),Pt(j.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),pt(i.TEXTURE_CUBE_MAP,b);for(let Le=0;Le<6;Le++)if(b.mipmaps&&b.mipmaps.length>0)for(let qe=0;qe<b.mipmaps.length;qe++)et(j.__webglFramebuffer[Le][qe],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,qe);else et(j.__webglFramebuffer[Le],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);x(b)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Je){for(let Le=0,qe=xe.length;Le<qe;Le++){let Ke=xe[Le],Me=n.get(Ke);t.bindTexture(i.TEXTURE_2D,Me.__webglTexture),pt(i.TEXTURE_2D,Ke),et(j.__webglFramebuffer,U,Ke,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,0),x(Ke)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Le=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Le=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Le,he.__webglTexture),pt(Le,b),b.mipmaps&&b.mipmaps.length>0)for(let qe=0;qe<b.mipmaps.length;qe++)et(j.__webglFramebuffer[qe],U,b,i.COLOR_ATTACHMENT0,Le,qe);else et(j.__webglFramebuffer,U,b,i.COLOR_ATTACHMENT0,Le,0);x(b)&&v(Le),t.unbindTexture()}U.depthBuffer&&Jt(U)}function H(U){let b=U.textures;for(let j=0,he=b.length;j<he;j++){let xe=b[j];if(x(xe)){let ae=B(U),Je=n.get(xe).__webglTexture;t.bindTexture(ae,Je),v(ae),t.unbindTexture()}}}let Qt=[],St=[];function kt(U){if(U.samples>0){if(mt(U)===!1){let b=U.textures,j=U.width,he=U.height,xe=i.COLOR_BUFFER_BIT,ae=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Je=n.get(U),Le=b.length>1;if(Le)for(let Ke=0;Ke<b.length;Ke++)t.bindFramebuffer(i.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Je.__webglMultisampledFramebuffer);let qe=U.texture.mipmaps;qe&&qe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Je.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Je.__webglFramebuffer);for(let Ke=0;Ke<b.length;Ke++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xe|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xe|=i.STENCIL_BUFFER_BIT)),Le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Je.__webglColorRenderbuffer[Ke]);let Me=n.get(b[Ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Me,0)}i.blitFramebuffer(0,0,j,he,0,0,j,he,xe,i.NEAREST),h===!0&&(Qt.length=0,St.length=0,Qt.push(i.COLOR_ATTACHMENT0+Ke),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Qt.push(ae),St.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,St)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Qt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Le)for(let Ke=0;Ke<b.length;Ke++){t.bindFramebuffer(i.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ke,i.RENDERBUFFER,Je.__webglColorRenderbuffer[Ke]);let Me=n.get(b[Ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ke,i.TEXTURE_2D,Me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Je.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){let b=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Xe(U){return Math.min(s.maxSamples,U.samples)}function mt(U){let b=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Qe(U){let b=c.render.frame;d.get(U)!==b&&(d.set(U,b),U.update())}function gt(U,b){let j=U.colorSpace,he=U.format,xe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||j!==wi&&j!==yr&&(Vt.getTransfer(j)===Zt?(he!==Ti||xe!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),b}function nn(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=ee,this.resetTextureUnits=ne,this.setTexture2D=fe,this.setTexture2DArray=oe,this.setTexture3D=we,this.setTextureCube=se,this.rebindTextures=Dt,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=et,this.useMultisampledRTT=mt}function vR(i,e){function t(n,s=yr){let a,c=Vt.getTransfer(s);if(n===Zi)return i.UNSIGNED_BYTE;if(n===su)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ou)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ad)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sd)return i.BYTE;if(n===od)return i.SHORT;if(n===To)return i.UNSIGNED_SHORT;if(n===ru)return i.INT;if(n===Kr)return i.UNSIGNED_INT;if(n===Ji)return i.FLOAT;if(n===Ao)return i.HALF_FLOAT;if(n===cd)return i.ALPHA;if(n===ld)return i.RGB;if(n===Ti)return i.RGBA;if(n===_o)return i.DEPTH_COMPONENT;if(n===Ro)return i.DEPTH_STENCIL;if(n===ud)return i.RED;if(n===au)return i.RED_INTEGER;if(n===hd)return i.RG;if(n===cu)return i.RG_INTEGER;if(n===lu)return i.RGBA_INTEGER;if(n===Wa||n===Xa||n===qa||n===Ya)if(c===Zt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Wa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Wa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ya)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===uu||n===hu||n===fu||n===du)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===uu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===du)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pu||n===mu||n===gu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===pu||n===mu)return c===Zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===gu)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_u||n===vu||n===xu||n===yu||n===Su||n===Mu||n===bu||n===wu||n===Eu||n===Tu||n===Au||n===Cu||n===Ru||n===Iu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===_u)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vu)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xu)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yu)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Su)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mu)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bu)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wu)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eu)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tu)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Au)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cu)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ru)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Iu)return c===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$a||n===Pu||n===Lu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===$a)return c===Zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fd||n===Du||n===Uu||n===Nu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===$a)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Du)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Co?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var xR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ud=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Qr,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new li({vertexShader:xR,fragmentShader:yR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new Ba(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nd=class extends qi{constructor(e,t){super();let n=this,s=null,a=1,c=null,u="local-floor",h=1,f=null,d=null,g=null,m=null,_=null,S=null,M=new Ud,x=t.getContextAttributes(),v=null,B=null,L=[],P=[],Y=new st,D=null,O=new Kn;O.viewport=new Kt;let V=new Kn;V.viewport=new Kt;let I=[O,V],A=new Yl,G=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(de){let Ie=L[de];return Ie===void 0&&(Ie=new bo,L[de]=Ie),Ie.getTargetRaySpace()},this.getControllerGrip=function(de){let Ie=L[de];return Ie===void 0&&(Ie=new bo,L[de]=Ie),Ie.getGripSpace()},this.getHand=function(de){let Ie=L[de];return Ie===void 0&&(Ie=new bo,L[de]=Ie),Ie.getHandSpace()};function ee(de){let Ie=P.indexOf(de.inputSource);if(Ie===-1)return;let Ze=L[Ie];Ze!==void 0&&(Ze.update(de.inputSource,de.frame,f||c),Ze.dispatchEvent({type:de.type,data:de.inputSource}))}function le(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",le),s.removeEventListener("inputsourceschange",fe);for(let de=0;de<L.length;de++){let Ie=P[de];Ie!==null&&(P[de]=null,L[de].disconnect(Ie))}G=null,ne=null,M.reset(),e.setRenderTarget(v),_=null,m=null,g=null,s=null,B=null,Lt.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(Y.width,Y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(de){a=de,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(de){u=de,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(de){f=de},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return g},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=function(de){return yi(this,null,function*(){if(s=de,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",le),s.addEventListener("inputsourceschange",fe),x.xrCompatible!==!0&&(yield t.makeXRCompatible()),D=e.getPixelRatio(),e.getSize(Y),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ze=null,Ne=null,et=null;x.depth&&(et=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ze=x.stencil?Ro:_o,Ne=x.stencil?Co:Kr);let Pt={colorFormat:t.RGBA8,depthFormat:et,scaleFactor:a};g=new XRWebGLBinding(s,t),m=g.createProjectionLayer(Pt),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),B=new Yi(m.textureWidth,m.textureHeight,{format:Ti,type:Zi,depthTexture:new Pa(m.textureWidth,m.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,Ze),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{let Ze={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(s,t,Ze),s.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),B=new Yi(_.framebufferWidth,_.framebufferHeight,{format:Ti,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=yield s.requestReferenceSpace(u),Lt.setContext(s),Lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function fe(de){for(let Ie=0;Ie<de.removed.length;Ie++){let Ze=de.removed[Ie],Ne=P.indexOf(Ze);Ne>=0&&(P[Ne]=null,L[Ne].disconnect(Ze))}for(let Ie=0;Ie<de.added.length;Ie++){let Ze=de.added[Ie],Ne=P.indexOf(Ze);if(Ne===-1){for(let Pt=0;Pt<L.length;Pt++)if(Pt>=P.length){P.push(Ze),Ne=Pt;break}else if(P[Pt]===null){P[Pt]=Ze,Ne=Pt;break}if(Ne===-1)break}let et=L[Ne];et&&et.connect(Ze)}}let oe=new $,we=new $;function se(de,Ie,Ze){oe.setFromMatrixPosition(Ie.matrixWorld),we.setFromMatrixPosition(Ze.matrixWorld);let Ne=oe.distanceTo(we),et=Ie.projectionMatrix.elements,Pt=Ze.projectionMatrix.elements,ot=et[14]/(et[10]-1),Jt=et[14]/(et[10]+1),Dt=(et[9]+1)/et[5],Rt=(et[9]-1)/et[5],H=(et[8]-1)/et[0],Qt=(Pt[8]+1)/Pt[0],St=ot*H,kt=ot*Qt,Xe=Ne/(-H+Qt),mt=Xe*-H;if(Ie.matrixWorld.decompose(de.position,de.quaternion,de.scale),de.translateX(mt),de.translateZ(Xe),de.matrixWorld.compose(de.position,de.quaternion,de.scale),de.matrixWorldInverse.copy(de.matrixWorld).invert(),et[10]===-1)de.projectionMatrix.copy(Ie.projectionMatrix),de.projectionMatrixInverse.copy(Ie.projectionMatrixInverse);else{let Qe=ot+Xe,gt=Jt+Xe,nn=St-mt,U=kt+(Ne-mt),b=Dt*Jt/gt*Qe,j=Rt*Jt/gt*Qe;de.projectionMatrix.makePerspective(nn,U,b,j,Qe,gt),de.projectionMatrixInverse.copy(de.projectionMatrix).invert()}}function Re(de,Ie){Ie===null?de.matrixWorld.copy(de.matrix):de.matrixWorld.multiplyMatrices(Ie.matrixWorld,de.matrix),de.matrixWorldInverse.copy(de.matrixWorld).invert()}this.updateCamera=function(de){if(s===null)return;let Ie=de.near,Ze=de.far;M.texture!==null&&(M.depthNear>0&&(Ie=M.depthNear),M.depthFar>0&&(Ze=M.depthFar)),A.near=V.near=O.near=Ie,A.far=V.far=O.far=Ze,(G!==A.near||ne!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),G=A.near,ne=A.far),O.layers.mask=de.layers.mask|2,V.layers.mask=de.layers.mask|4,A.layers.mask=O.layers.mask|V.layers.mask;let Ne=de.parent,et=A.cameras;Re(A,Ne);for(let Pt=0;Pt<et.length;Pt++)Re(et[Pt],Ne);et.length===2?se(A,O,V):A.projectionMatrix.copy(O.projectionMatrix),He(de,A,Ne)};function He(de,Ie,Ze){Ze===null?de.matrix.copy(Ie.matrixWorld):(de.matrix.copy(Ze.matrixWorld),de.matrix.invert(),de.matrix.multiply(Ie.matrixWorld)),de.matrix.decompose(de.position,de.quaternion,de.scale),de.updateMatrixWorld(!0),de.projectionMatrix.copy(Ie.projectionMatrix),de.projectionMatrixInverse.copy(Ie.projectionMatrixInverse),de.isPerspectiveCamera&&(de.fov=vo*2*Math.atan(1/de.projectionMatrix.elements[5]),de.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(m===null&&_===null))return h},this.setFoveation=function(de){h=de,m!==null&&(m.fixedFoveation=de),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=de)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(A)};let nt=null;function pt(de,Ie){if(d=Ie.getViewerPose(f||c),S=Ie,d!==null){let Ze=d.views;_!==null&&(e.setRenderTargetFramebuffer(B,_.framebuffer),e.setRenderTarget(B));let Ne=!1;Ze.length!==A.cameras.length&&(A.cameras.length=0,Ne=!0);for(let ot=0;ot<Ze.length;ot++){let Jt=Ze[ot],Dt=null;if(_!==null)Dt=_.getViewport(Jt);else{let H=g.getViewSubImage(m,Jt);Dt=H.viewport,ot===0&&(e.setRenderTargetTextures(B,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(B))}let Rt=I[ot];Rt===void 0&&(Rt=new Kn,Rt.layers.enable(ot),Rt.viewport=new Kt,I[ot]=Rt),Rt.matrix.fromArray(Jt.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Jt.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),ot===0&&(A.matrix.copy(Rt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Ne===!0&&A.cameras.push(Rt)}let et=s.enabledFeatures;if(et&&et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){let ot=g.getDepthInformation(Ze[0]);ot&&ot.isValid&&ot.texture&&M.init(e,ot,s.renderState)}}for(let Ze=0;Ze<L.length;Ze++){let Ne=P[Ze],et=L[Ze];Ne!==null&&et!==void 0&&et.update(Ne,Ie,f||c)}nt&&nt(de,Ie),Ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Ie}),S=null}let Lt=new i0;Lt.setAnimationLoop(pt),this.setAnimationLoop=function(de){nt=de},this.dispose=function(){}}},Ns=new Ts,SR=new sn;function MR(i,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function n(x,v){v.color.getRGB(x.fogColor.value,_d(i)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function s(x,v,B,L,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?a(x,v):v.isMeshToonMaterial?(a(x,v),g(x,v)):v.isMeshPhongMaterial?(a(x,v),d(x,v)):v.isMeshStandardMaterial?(a(x,v),m(x,v),v.isMeshPhysicalMaterial&&_(x,v,P)):v.isMeshMatcapMaterial?(a(x,v),S(x,v)):v.isMeshDepthMaterial?a(x,v):v.isMeshDistanceMaterial?(a(x,v),M(x,v)):v.isMeshNormalMaterial?a(x,v):v.isLineBasicMaterial?(c(x,v),v.isLineDashedMaterial&&u(x,v)):v.isPointsMaterial?h(x,v,B,L):v.isSpriteMaterial?f(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function a(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Wn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Wn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);let B=e.get(v),L=B.envMap,P=B.envMapRotation;L&&(x.envMap.value=L,Ns.copy(P),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),x.envMapRotation.value.setFromMatrix4(SR.makeRotationFromEuler(Ns)),x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function c(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function u(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function h(x,v,B,L){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*B,x.scale.value=L*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function f(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function d(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function g(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function m(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function _(x,v,B){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Wn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=B.texture,x.transmissionSamplerSize.value.set(B.width,B.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function S(x,v){v.matcap&&(x.matcap.value=v.matcap)}function M(x,v){let B=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(B.matrixWorld),x.nearDistance.value=B.shadow.camera.near,x.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bR(i,e,t,n){let s={},a={},c=[],u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(B,L){let P=L.program;n.uniformBlockBinding(B,P)}function f(B,L){let P=s[B.id];P===void 0&&(S(B),P=d(B),s[B.id]=P,B.addEventListener("dispose",x));let Y=L.program;n.updateUBOMapping(B,Y);let D=e.render.frame;a[B.id]!==D&&(m(B),a[B.id]=D)}function d(B){let L=g();B.__bindingPointIndex=L;let P=i.createBuffer(),Y=B.__size,D=B.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,Y,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,P),P}function g(){for(let B=0;B<u;B++)if(c.indexOf(B)===-1)return c.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(B){let L=s[B.id],P=B.uniforms,Y=B.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let D=0,O=P.length;D<O;D++){let V=Array.isArray(P[D])?P[D]:[P[D]];for(let I=0,A=V.length;I<A;I++){let G=V[I];if(_(G,D,I,Y)===!0){let ne=G.__offset,ee=Array.isArray(G.value)?G.value:[G.value],le=0;for(let fe=0;fe<ee.length;fe++){let oe=ee[fe],we=M(oe);typeof oe=="number"||typeof oe=="boolean"?(G.__data[0]=oe,i.bufferSubData(i.UNIFORM_BUFFER,ne+le,G.__data)):oe.isMatrix3?(G.__data[0]=oe.elements[0],G.__data[1]=oe.elements[1],G.__data[2]=oe.elements[2],G.__data[3]=0,G.__data[4]=oe.elements[3],G.__data[5]=oe.elements[4],G.__data[6]=oe.elements[5],G.__data[7]=0,G.__data[8]=oe.elements[6],G.__data[9]=oe.elements[7],G.__data[10]=oe.elements[8],G.__data[11]=0):(oe.toArray(G.__data,le),le+=we.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ne,G.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(B,L,P,Y){let D=B.value,O=L+"_"+P;if(Y[O]===void 0)return typeof D=="number"||typeof D=="boolean"?Y[O]=D:Y[O]=D.clone(),!0;{let V=Y[O];if(typeof D=="number"||typeof D=="boolean"){if(V!==D)return Y[O]=D,!0}else if(V.equals(D)===!1)return V.copy(D),!0}return!1}function S(B){let L=B.uniforms,P=0,Y=16;for(let O=0,V=L.length;O<V;O++){let I=Array.isArray(L[O])?L[O]:[L[O]];for(let A=0,G=I.length;A<G;A++){let ne=I[A],ee=Array.isArray(ne.value)?ne.value:[ne.value];for(let le=0,fe=ee.length;le<fe;le++){let oe=ee[le],we=M(oe),se=P%Y,Re=se%we.boundary,He=se+Re;P+=Re,He!==0&&Y-He<we.storage&&(P+=Y-He),ne.__data=new Float32Array(we.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=P,P+=we.storage}}}let D=P%Y;return D>0&&(P+=Y-D),B.__size=P,B.__cache={},this}function M(B){let L={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(L.boundary=4,L.storage=4):B.isVector2?(L.boundary=8,L.storage=8):B.isVector3||B.isColor?(L.boundary=16,L.storage=12):B.isVector4?(L.boundary=16,L.storage=16):B.isMatrix3?(L.boundary=48,L.storage=48):B.isMatrix4?(L.boundary=64,L.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),L}function x(B){let L=B.target;L.removeEventListener("dispose",x);let P=c.indexOf(L.__bindingPointIndex);c.splice(P,1),i.deleteBuffer(s[L.id]),delete s[L.id],delete a[L.id]}function v(){for(let B in s)i.deleteBuffer(s[B]);c=[],s={},a={}}return{bind:h,update:f,dispose:v}}var n0=class{constructor(e={}){let{canvas:t=C_(),context:n=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=c;let S=new Uint32Array(4),M=new Int32Array(4),x=null,v=null,B=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,Y=!1;this._outputColorSpace=ai;let D=0,O=0,V=null,I=-1,A=null,G=new Kt,ne=new Kt,ee=null,le=new yt(0),fe=0,oe=t.width,we=t.height,se=1,Re=null,He=null,nt=new Kt(0,0,oe,we),pt=new Kt(0,0,oe,we),Lt=!1,de=new Ia,Ie=!1,Ze=!1,Ne=new sn,et=new sn,Pt=new $,ot=new Kt,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Dt=!1;function Rt(){return V===null?se:1}let H=n;function Qt(C,J){return t.getContext(C,J)}try{let C={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"178"}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",ve,!1),H===null){let J="webgl2";if(H=Qt(J,C),H===null)throw Qt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let St,kt,Xe,mt,Qe,gt,nn,U,b,j,he,xe,ae,Je,Le,qe,Ke,Me,ze,rt,at,Ue,ht,q;function Fe(){St=new GA(H),St.init(),Ue=new vR(H,St),kt=new UA(H,St,e,Ue),Xe=new gR(H,St),kt.reverseDepthBuffer&&m&&Xe.buffers.depth.setReversed(!0),mt=new WA(H),Qe=new iR,gt=new _R(H,St,Xe,Qe,kt,Ue,mt),nn=new FA(P),U=new VA(P),b=new JE(H),ht=new LA(H,b),j=new HA(H,b,mt,ht),he=new qA(H,j,b,mt),ze=new XA(H,kt,gt),qe=new NA(Qe),xe=new nR(P,nn,U,St,kt,ht,qe),ae=new MR(P,Qe),Je=new sR,Le=new hR(St),Me=new PA(P,nn,U,Xe,he,_,h),Ke=new pR(P,he,kt),q=new bR(H,mt,kt,Xe),rt=new DA(H,St,mt),at=new kA(H,St,mt),mt.programs=xe.programs,P.capabilities=kt,P.extensions=St,P.properties=Qe,P.renderLists=Je,P.shadowMap=Ke,P.state=Xe,P.info=mt}Fe();let Se=new Nd(P,H);this.xr=Se,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let C=St.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=St.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(C){C!==void 0&&(se=C,this.setSize(oe,we,!1))},this.getSize=function(C){return C.set(oe,we)},this.setSize=function(C,J,te=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=C,we=J,t.width=Math.floor(C*se),t.height=Math.floor(J*se),te===!0&&(t.style.width=C+"px",t.style.height=J+"px"),this.setViewport(0,0,C,J)},this.getDrawingBufferSize=function(C){return C.set(oe*se,we*se).floor()},this.setDrawingBufferSize=function(C,J,te){oe=C,we=J,se=te,t.width=Math.floor(C*te),t.height=Math.floor(J*te),this.setViewport(0,0,C,J)},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(nt)},this.setViewport=function(C,J,te,ie){C.isVector4?nt.set(C.x,C.y,C.z,C.w):nt.set(C,J,te,ie),Xe.viewport(G.copy(nt).multiplyScalar(se).round())},this.getScissor=function(C){return C.copy(pt)},this.setScissor=function(C,J,te,ie){C.isVector4?pt.set(C.x,C.y,C.z,C.w):pt.set(C,J,te,ie),Xe.scissor(ne.copy(pt).multiplyScalar(se).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(C){Xe.setScissorTest(Lt=C)},this.setOpaqueSort=function(C){Re=C},this.setTransparentSort=function(C){He=C},this.getClearColor=function(C){return C.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(C=!0,J=!0,te=!0){let ie=0;if(C){let K=!1;if(V!==null){let Ae=V.texture.format;K=Ae===lu||Ae===cu||Ae===au}if(K){let Ae=V.texture.type,Pe=Ae===Zi||Ae===Kr||Ae===To||Ae===Co||Ae===su||Ae===ou,$e=Me.getClearColor(),Ve=Me.getClearAlpha(),ct=$e.r,_t=$e.g,it=$e.b;Pe?(S[0]=ct,S[1]=_t,S[2]=it,S[3]=Ve,H.clearBufferuiv(H.COLOR,0,S)):(M[0]=ct,M[1]=_t,M[2]=it,M[3]=Ve,H.clearBufferiv(H.COLOR,0,M))}else ie|=H.COLOR_BUFFER_BIT}J&&(ie|=H.DEPTH_BUFFER_BIT),te&&(ie|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Me.dispose(),Je.dispose(),Le.dispose(),Qe.dispose(),nn.dispose(),U.dispose(),he.dispose(),ht.dispose(),q.dispose(),xe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Sr),Se.removeEventListener("sessionend",zs),Ai.stop()};function ke(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Y=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),Y=!1;let C=mt.autoReset,J=Ke.enabled,te=Ke.autoUpdate,ie=Ke.needsUpdate,K=Ke.type;Fe(),mt.autoReset=C,Ke.enabled=J,Ke.autoUpdate=te,Ke.needsUpdate=ie,Ke.type=K}function ve(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ye(C){let J=C.target;J.removeEventListener("dispose",Ye),vt(J)}function vt(C){Yt(C),Qe.remove(C)}function Yt(C){let J=Qe.get(C).programs;J!==void 0&&(J.forEach(function(te){xe.releaseProgram(te)}),C.isShaderMaterial&&xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,J,te,ie,K,Ae){J===null&&(J=Jt);let Pe=K.isMesh&&K.matrixWorld.determinant()<0,$e=Vo(C,J,te,ie,K);Xe.setMaterial(ie,Pe);let Ve=te.index,ct=1;if(ie.wireframe===!0){if(Ve=j.getWireframeAttribute(te),Ve===void 0)return;ct=2}let _t=te.drawRange,it=te.attributes.position,Mt=_t.start*ct,zt=(_t.start+_t.count)*ct;Ae!==null&&(Mt=Math.max(Mt,Ae.start*ct),zt=Math.min(zt,(Ae.start+Ae.count)*ct)),Ve!==null?(Mt=Math.max(Mt,0),zt=Math.min(zt,Ve.count)):it!=null&&(Mt=Math.max(Mt,0),zt=Math.min(zt,it.count));let jt=zt-Mt;if(jt<0||jt===1/0)return;ht.setup(K,ie,$e,te,Ve);let w,F=rt;if(Ve!==null&&(w=b.get(Ve),F=at,F.setIndex(w)),K.isMesh)ie.wireframe===!0?(Xe.setLineWidth(ie.wireframeLinewidth*Rt()),F.setMode(H.LINES)):F.setMode(H.TRIANGLES);else if(K.isLine){let T=ie.linewidth;T===void 0&&(T=1),Xe.setLineWidth(T*Rt()),K.isLineSegments?F.setMode(H.LINES):K.isLineLoop?F.setMode(H.LINE_LOOP):F.setMode(H.LINE_STRIP)}else K.isPoints?F.setMode(H.POINTS):K.isSprite&&F.setMode(H.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Es("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),F.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(St.get("WEBGL_multi_draw"))F.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let T=K._multiDrawStarts,z=K._multiDrawCounts,k=K._multiDrawCount,X=Ve?b.get(Ve).bytesPerElement:1,ce=Qe.get(ie).currentProgram.getUniforms();for(let me=0;me<k;me++)ce.setValue(H,"_gl_DrawID",me),F.render(T[me]/X,z[me])}else if(K.isInstancedMesh)F.renderInstances(Mt,jt,K.count);else if(te.isInstancedBufferGeometry){let T=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,z=Math.min(te.instanceCount,T);F.renderInstances(Mt,jt,z)}else F.render(Mt,jt)};function Bt(C,J,te){C.transparent===!0&&C.side===Ei&&C.forceSinglePass===!1?(C.side=Wn,C.needsUpdate=!0,br(C,J,te),C.side=gr,C.needsUpdate=!0,br(C,J,te),C.side=Ei):br(C,J,te)}this.compile=function(C,J,te=null){te===null&&(te=C),v=Le.get(te),v.init(J),L.push(v),te.traverseVisible(function(K){K.isLight&&K.layers.test(J.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),C!==te&&C.traverseVisible(function(K){K.isLight&&K.layers.test(J.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();let ie=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Ae=K.material;if(Ae)if(Array.isArray(Ae))for(let Pe=0;Pe<Ae.length;Pe++){let $e=Ae[Pe];Bt($e,te,K),ie.add($e)}else Bt(Ae,te,K),ie.add(Ae)}),v=L.pop(),ie},this.compileAsync=function(C,J,te=null){let ie=this.compile(C,J,te);return new Promise(K=>{function Ae(){if(ie.forEach(function(Pe){Qe.get(Pe).currentProgram.isReady()&&ie.delete(Pe)}),ie.size===0){K(C);return}setTimeout(Ae,10)}St.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let En=null;function Qn(C){En&&En(C)}function Sr(){Ai.stop()}function zs(){Ai.start()}let Ai=new i0;Ai.setAnimationLoop(Qn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(C){En=C,Se.setAnimationLoop(C),C===null?Ai.stop():Ai.start()},Se.addEventListener("sessionstart",Sr),Se.addEventListener("sessionend",zs),this.render=function(C,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(J),J=Se.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,J,V),v=Le.get(C,L.length),v.init(J),L.push(v),et.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),de.setFromProjectionMatrix(et),Ze=this.localClippingEnabled,Ie=qe.init(this.clippingPlanes,Ze),x=Je.get(C,B.length),x.init(),B.push(x),Se.enabled===!0&&Se.isPresenting===!0){let Ae=P.xr.getDepthSensingMesh();Ae!==null&&rs(Ae,J,-1/0,P.sortObjects)}rs(C,J,0,P.sortObjects),x.finish(),P.sortObjects===!0&&x.sort(Re,He),Dt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Dt&&Me.addToRenderList(x,C),this.info.render.frame++,Ie===!0&&qe.beginShadows();let te=v.state.shadowsArray;Ke.render(te,C,J),Ie===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset();let ie=x.opaque,K=x.transmissive;if(v.setupLights(),J.isArrayCamera){let Ae=J.cameras;if(K.length>0)for(let Pe=0,$e=Ae.length;Pe<$e;Pe++){let Ve=Ae[Pe];Vs(ie,K,C,Ve)}Dt&&Me.render(C);for(let Pe=0,$e=Ae.length;Pe<$e;Pe++){let Ve=Ae[Pe];ss(x,C,Ve,Ve.viewport)}}else K.length>0&&Vs(ie,K,C,J),Dt&&Me.render(C),ss(x,C,J);V!==null&&O===0&&(gt.updateMultisampleRenderTarget(V),gt.updateRenderTargetMipmap(V)),C.isScene===!0&&C.onAfterRender(P,C,J),ht.resetDefaultState(),I=-1,A=null,L.pop(),L.length>0?(v=L[L.length-1],Ie===!0&&qe.setGlobalState(P.clippingPlanes,v.state.camera)):v=null,B.pop(),B.length>0?x=B[B.length-1]:x=null};function rs(C,J,te,ie){if(C.visible===!1)return;if(C.layers.test(J.layers)){if(C.isGroup)te=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(J);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||de.intersectsSprite(C)){ie&&ot.setFromMatrixPosition(C.matrixWorld).applyMatrix4(et);let Pe=he.update(C),$e=C.material;$e.visible&&x.push(C,Pe,$e,te,ot.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||de.intersectsObject(C))){let Pe=he.update(C),$e=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ot.copy(C.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ot.copy(Pe.boundingSphere.center)),ot.applyMatrix4(C.matrixWorld).applyMatrix4(et)),Array.isArray($e)){let Ve=Pe.groups;for(let ct=0,_t=Ve.length;ct<_t;ct++){let it=Ve[ct],Mt=$e[it.materialIndex];Mt&&Mt.visible&&x.push(C,Pe,Mt,te,ot.z,it)}}else $e.visible&&x.push(C,Pe,$e,te,ot.z,null)}}let Ae=C.children;for(let Pe=0,$e=Ae.length;Pe<$e;Pe++)rs(Ae[Pe],J,te,ie)}function ss(C,J,te,ie){let K=C.opaque,Ae=C.transmissive,Pe=C.transparent;v.setupLightsView(te),Ie===!0&&qe.setGlobalState(P.clippingPlanes,te),ie&&Xe.viewport(G.copy(ie)),K.length>0&&Mr(K,J,te),Ae.length>0&&Mr(Ae,J,te),Pe.length>0&&Mr(Pe,J,te),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Vs(C,J,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ie.id]===void 0&&(v.state.transmissionRenderTarget[ie.id]=new Yi(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float")?Ao:Zi,minFilter:Jr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vt.workingColorSpace}));let Ae=v.state.transmissionRenderTarget[ie.id],Pe=ie.viewport||G;Ae.setSize(Pe.z*P.transmissionResolutionScale,Pe.w*P.transmissionResolutionScale);let $e=P.getRenderTarget(),Ve=P.getActiveCubeFace(),ct=P.getActiveMipmapLevel();P.setRenderTarget(Ae),P.getClearColor(le),fe=P.getClearAlpha(),fe<1&&P.setClearColor(16777215,.5),P.clear(),Dt&&Me.render(te);let _t=P.toneMapping;P.toneMapping=xr;let it=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),v.setupLightsView(ie),Ie===!0&&qe.setGlobalState(P.clippingPlanes,ie),Mr(C,te,ie),gt.updateMultisampleRenderTarget(Ae),gt.updateRenderTargetMipmap(Ae),St.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let zt=0,jt=J.length;zt<jt;zt++){let w=J[zt],F=w.object,T=w.geometry,z=w.material,k=w.group;if(z.side===Ei&&F.layers.test(ie.layers)){let X=z.side;z.side=Wn,z.needsUpdate=!0,Gs(F,te,ie,T,z,k),z.side=X,z.needsUpdate=!0,Mt=!0}}Mt===!0&&(gt.updateMultisampleRenderTarget(Ae),gt.updateRenderTargetMipmap(Ae))}P.setRenderTarget($e,Ve,ct),P.setClearColor(le,fe),it!==void 0&&(ie.viewport=it),P.toneMapping=_t}function Mr(C,J,te){let ie=J.isScene===!0?J.overrideMaterial:null;for(let K=0,Ae=C.length;K<Ae;K++){let Pe=C[K],$e=Pe.object,Ve=Pe.geometry,ct=Pe.group,_t=Pe.material;_t.allowOverride===!0&&ie!==null&&(_t=ie),$e.layers.test(te.layers)&&Gs($e,J,te,Ve,_t,ct)}}function Gs(C,J,te,ie,K,Ae){C.onBeforeRender(P,J,te,ie,K,Ae),C.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(P,J,te,ie,C,Ae),K.transparent===!0&&K.side===Ei&&K.forceSinglePass===!1?(K.side=Wn,K.needsUpdate=!0,P.renderBufferDirect(te,J,ie,K,C,Ae),K.side=gr,K.needsUpdate=!0,P.renderBufferDirect(te,J,ie,K,C,Ae),K.side=Ei):P.renderBufferDirect(te,J,ie,K,C,Ae),C.onAfterRender(P,J,te,ie,K,Ae)}function br(C,J,te){J.isScene!==!0&&(J=Jt);let ie=Qe.get(C),K=v.state.lights,Ae=v.state.shadowsArray,Pe=K.state.version,$e=xe.getParameters(C,K.state,Ae,J,te),Ve=xe.getProgramCacheKey($e),ct=ie.programs;ie.environment=C.isMeshStandardMaterial?J.environment:null,ie.fog=J.fog,ie.envMap=(C.isMeshStandardMaterial?U:nn).get(C.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&C.envMap===null?J.environmentRotation:C.envMapRotation,ct===void 0&&(C.addEventListener("dispose",Ye),ct=new Map,ie.programs=ct);let _t=ct.get(Ve);if(_t!==void 0){if(ie.currentProgram===_t&&ie.lightsStateVersion===Pe)return Hs(C,$e),_t}else $e.uniforms=xe.getUniforms(C),C.onBeforeCompile($e,P),_t=xe.acquireProgram($e,Ve),ct.set(Ve,_t),ie.uniforms=$e.uniforms;let it=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(it.clippingPlanes=qe.uniform),Hs(C,$e),ie.needsLights=Ho(C),ie.lightsStateVersion=Pe,ie.needsLights&&(it.ambientLightColor.value=K.state.ambient,it.lightProbe.value=K.state.probe,it.directionalLights.value=K.state.directional,it.directionalLightShadows.value=K.state.directionalShadow,it.spotLights.value=K.state.spot,it.spotLightShadows.value=K.state.spotShadow,it.rectAreaLights.value=K.state.rectArea,it.ltc_1.value=K.state.rectAreaLTC1,it.ltc_2.value=K.state.rectAreaLTC2,it.pointLights.value=K.state.point,it.pointLightShadows.value=K.state.pointShadow,it.hemisphereLights.value=K.state.hemi,it.directionalShadowMap.value=K.state.directionalShadowMap,it.directionalShadowMatrix.value=K.state.directionalShadowMatrix,it.spotShadowMap.value=K.state.spotShadowMap,it.spotLightMatrix.value=K.state.spotLightMatrix,it.spotLightMap.value=K.state.spotLightMap,it.pointShadowMap.value=K.state.pointShadowMap,it.pointShadowMatrix.value=K.state.pointShadowMatrix),ie.currentProgram=_t,ie.uniformsList=null,_t}function os(C){if(C.uniformsList===null){let J=C.currentProgram.getUniforms();C.uniformsList=Lo.seqWithValue(J.seq,C.uniforms)}return C.uniformsList}function Hs(C,J){let te=Qe.get(C);te.outputColorSpace=J.outputColorSpace,te.batching=J.batching,te.batchingColor=J.batchingColor,te.instancing=J.instancing,te.instancingColor=J.instancingColor,te.instancingMorph=J.instancingMorph,te.skinning=J.skinning,te.morphTargets=J.morphTargets,te.morphNormals=J.morphNormals,te.morphColors=J.morphColors,te.morphTargetsCount=J.morphTargetsCount,te.numClippingPlanes=J.numClippingPlanes,te.numIntersection=J.numClipIntersection,te.vertexAlphas=J.vertexAlphas,te.vertexTangents=J.vertexTangents,te.toneMapping=J.toneMapping}function Vo(C,J,te,ie,K){J.isScene!==!0&&(J=Jt),gt.resetTextureUnits();let Ae=J.fog,Pe=ie.isMeshStandardMaterial?J.environment:null,$e=V===null?P.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:wi,Ve=(ie.isMeshStandardMaterial?U:nn).get(ie.envMap||Pe),ct=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,_t=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),it=!!te.morphAttributes.position,Mt=!!te.morphAttributes.normal,zt=!!te.morphAttributes.color,jt=xr;ie.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(jt=P.toneMapping);let w=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,F=w!==void 0?w.length:0,T=Qe.get(ie),z=v.state.lights;if(Ie===!0&&(Ze===!0||C!==A)){let tt=C===A&&ie.id===I;qe.setState(ie,C,tt)}let k=!1;ie.version===T.__version?(T.needsLights&&T.lightsStateVersion!==z.state.version||T.outputColorSpace!==$e||K.isBatchedMesh&&T.batching===!1||!K.isBatchedMesh&&T.batching===!0||K.isBatchedMesh&&T.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&T.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&T.instancing===!1||!K.isInstancedMesh&&T.instancing===!0||K.isSkinnedMesh&&T.skinning===!1||!K.isSkinnedMesh&&T.skinning===!0||K.isInstancedMesh&&T.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&T.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&T.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&T.instancingMorph===!1&&K.morphTexture!==null||T.envMap!==Ve||ie.fog===!0&&T.fog!==Ae||T.numClippingPlanes!==void 0&&(T.numClippingPlanes!==qe.numPlanes||T.numIntersection!==qe.numIntersection)||T.vertexAlphas!==ct||T.vertexTangents!==_t||T.morphTargets!==it||T.morphNormals!==Mt||T.morphColors!==zt||T.toneMapping!==jt||T.morphTargetsCount!==F)&&(k=!0):(k=!0,T.__version=ie.version);let X=T.currentProgram;k===!0&&(X=br(ie,J,K));let ce=!1,me=!1,Ee=!1,pe=X.getUniforms(),Te=T.uniforms;if(Xe.useProgram(X.program)&&(ce=!0,me=!0,Ee=!0),ie.id!==I&&(I=ie.id,me=!0),ce||A!==C){Xe.buffers.depth.getReversed()?(Ne.copy(C.projectionMatrix),I_(Ne),P_(Ne),pe.setValue(H,"projectionMatrix",Ne)):pe.setValue(H,"projectionMatrix",C.projectionMatrix),pe.setValue(H,"viewMatrix",C.matrixWorldInverse);let lt=pe.map.cameraPosition;lt!==void 0&&lt.setValue(H,Pt.setFromMatrixPosition(C.matrixWorld)),kt.logarithmicDepthBuffer&&pe.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&pe.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,me=!0,Ee=!0)}if(K.isSkinnedMesh){pe.setOptional(H,K,"bindMatrix"),pe.setOptional(H,K,"bindMatrixInverse");let tt=K.skeleton;tt&&(tt.boneTexture===null&&tt.computeBoneTexture(),pe.setValue(H,"boneTexture",tt.boneTexture,gt))}K.isBatchedMesh&&(pe.setOptional(H,K,"batchingTexture"),pe.setValue(H,"batchingTexture",K._matricesTexture,gt),pe.setOptional(H,K,"batchingIdTexture"),pe.setValue(H,"batchingIdTexture",K._indirectTexture,gt),pe.setOptional(H,K,"batchingColorTexture"),K._colorsTexture!==null&&pe.setValue(H,"batchingColorTexture",K._colorsTexture,gt));let Oe=te.morphAttributes;if((Oe.position!==void 0||Oe.normal!==void 0||Oe.color!==void 0)&&ze.update(K,te,X),(me||T.receiveShadow!==K.receiveShadow)&&(T.receiveShadow=K.receiveShadow,pe.setValue(H,"receiveShadow",K.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Te.envMap.value=Ve,Te.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&J.environment!==null&&(Te.envMapIntensity.value=J.environmentIntensity),me&&(pe.setValue(H,"toneMappingExposure",P.toneMappingExposure),T.needsLights&&Go(Te,Ee),Ae&&ie.fog===!0&&ae.refreshFogUniforms(Te,Ae),ae.refreshMaterialUniforms(Te,ie,se,we,v.state.transmissionRenderTarget[C.id]),Lo.upload(H,os(T),Te,gt)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Lo.upload(H,os(T),Te,gt),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&pe.setValue(H,"center",K.center),pe.setValue(H,"modelViewMatrix",K.modelViewMatrix),pe.setValue(H,"normalMatrix",K.normalMatrix),pe.setValue(H,"modelMatrix",K.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){let tt=ie.uniformsGroups;for(let lt=0,Nt=tt.length;lt<Nt;lt++){let Gt=tt[lt];q.update(Gt,X),q.bind(Gt,X)}}return X}function Go(C,J){C.ambientLightColor.needsUpdate=J,C.lightProbe.needsUpdate=J,C.directionalLights.needsUpdate=J,C.directionalLightShadows.needsUpdate=J,C.pointLights.needsUpdate=J,C.pointLightShadows.needsUpdate=J,C.spotLights.needsUpdate=J,C.spotLightShadows.needsUpdate=J,C.rectAreaLights.needsUpdate=J,C.hemisphereLights.needsUpdate=J}function Ho(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(C,J,te){let ie=Qe.get(C);ie.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),Qe.get(C.texture).__webglTexture=J,Qe.get(C.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:te,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,J){let te=Qe.get(C);te.__webglFramebuffer=J,te.__useDefaultFramebuffer=J===void 0};let ko=H.createFramebuffer();this.setRenderTarget=function(C,J=0,te=0){V=C,D=J,O=te;let ie=!0,K=null,Ae=!1,Pe=!1;if(C){let Ve=Qe.get(C);if(Ve.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(H.FRAMEBUFFER,null),ie=!1;else if(Ve.__webglFramebuffer===void 0)gt.setupRenderTarget(C);else if(Ve.__hasExternalTextures)gt.rebindTextures(C,Qe.get(C.texture).__webglTexture,Qe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let it=C.depthTexture;if(Ve.__boundDepthTexture!==it){if(it!==null&&Qe.has(it)&&(C.width!==it.image.width||C.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(C)}}let ct=C.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Pe=!0);let _t=Qe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(_t[J])?K=_t[J][te]:K=_t[J],Ae=!0):C.samples>0&&gt.useMultisampledRTT(C)===!1?K=Qe.get(C).__webglMultisampledFramebuffer:Array.isArray(_t)?K=_t[te]:K=_t,G.copy(C.viewport),ne.copy(C.scissor),ee=C.scissorTest}else G.copy(nt).multiplyScalar(se).floor(),ne.copy(pt).multiplyScalar(se).floor(),ee=Lt;if(te!==0&&(K=ko),Xe.bindFramebuffer(H.FRAMEBUFFER,K)&&ie&&Xe.drawBuffers(C,K),Xe.viewport(G),Xe.scissor(ne),Xe.setScissorTest(ee),Ae){let Ve=Qe.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ve.__webglTexture,te)}else if(Pe){let Ve=Qe.get(C.texture),ct=J;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ve.__webglTexture,te,ct)}else if(C!==null&&te!==0){let Ve=Qe.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ve.__webglTexture,te)}I=-1},this.readRenderTargetPixels=function(C,J,te,ie,K,Ae,Pe,$e=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ve=Ve[Pe]),Ve){Xe.bindFramebuffer(H.FRAMEBUFFER,Ve);try{let ct=C.textures[$e],_t=ct.format,it=ct.type;if(!kt.textureFormatReadable(_t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=C.width-ie&&te>=0&&te<=C.height-K&&(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+$e),H.readPixels(J,te,ie,K,Ue.convert(_t),Ue.convert(it),Ae))}finally{let ct=V!==null?Qe.get(V).__webglFramebuffer:null;Xe.bindFramebuffer(H.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=function(C,J,te,ie,K,Ae,Pe,$e=0){return yi(this,null,function*(){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ve=Ve[Pe]),Ve)if(J>=0&&J<=C.width-ie&&te>=0&&te<=C.height-K){Xe.bindFramebuffer(H.FRAMEBUFFER,Ve);let ct=C.textures[$e],_t=ct.format,it=ct.type;if(!kt.textureFormatReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Mt),H.bufferData(H.PIXEL_PACK_BUFFER,Ae.byteLength,H.STREAM_READ),C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+$e),H.readPixels(J,te,ie,K,Ue.convert(_t),Ue.convert(it),0);let zt=V!==null?Qe.get(V).__webglFramebuffer:null;Xe.bindFramebuffer(H.FRAMEBUFFER,zt);let jt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),yield R_(H,jt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Mt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ae),H.deleteBuffer(Mt),H.deleteSync(jt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(C,J=null,te=0){let ie=Math.pow(2,-te),K=Math.floor(C.image.width*ie),Ae=Math.floor(C.image.height*ie),Pe=J!==null?J.x:0,$e=J!==null?J.y:0;gt.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,te,0,0,Pe,$e,K,Ae),Xe.unbindTexture()};let Wo=H.createFramebuffer(),wr=H.createFramebuffer();this.copyTextureToTexture=function(C,J,te=null,ie=null,K=0,Ae=null){Ae===null&&(K!==0?(Es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=K,K=0):Ae=0);let Pe,$e,Ve,ct,_t,it,Mt,zt,jt,w=C.isCompressedTexture?C.mipmaps[Ae]:C.image;if(te!==null)Pe=te.max.x-te.min.x,$e=te.max.y-te.min.y,Ve=te.isBox3?te.max.z-te.min.z:1,ct=te.min.x,_t=te.min.y,it=te.isBox3?te.min.z:0;else{let Oe=Math.pow(2,-K);Pe=Math.floor(w.width*Oe),$e=Math.floor(w.height*Oe),C.isDataArrayTexture?Ve=w.depth:C.isData3DTexture?Ve=Math.floor(w.depth*Oe):Ve=1,ct=0,_t=0,it=0}ie!==null?(Mt=ie.x,zt=ie.y,jt=ie.z):(Mt=0,zt=0,jt=0);let F=Ue.convert(J.format),T=Ue.convert(J.type),z;J.isData3DTexture?(gt.setTexture3D(J,0),z=H.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(gt.setTexture2DArray(J,0),z=H.TEXTURE_2D_ARRAY):(gt.setTexture2D(J,0),z=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,J.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,J.unpackAlignment);let k=H.getParameter(H.UNPACK_ROW_LENGTH),X=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ce=H.getParameter(H.UNPACK_SKIP_PIXELS),me=H.getParameter(H.UNPACK_SKIP_ROWS),Ee=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,w.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,w.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ct),H.pixelStorei(H.UNPACK_SKIP_ROWS,_t),H.pixelStorei(H.UNPACK_SKIP_IMAGES,it);let pe=C.isDataArrayTexture||C.isData3DTexture,Te=J.isDataArrayTexture||J.isData3DTexture;if(C.isDepthTexture){let Oe=Qe.get(C),tt=Qe.get(J),lt=Qe.get(Oe.__renderTarget),Nt=Qe.get(tt.__renderTarget);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,lt.__webglFramebuffer),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Gt=0;Gt<Ve;Gt++)pe&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Qe.get(C).__webglTexture,K,it+Gt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Qe.get(J).__webglTexture,Ae,jt+Gt)),H.blitFramebuffer(ct,_t,Pe,$e,Mt,zt,Pe,$e,H.DEPTH_BUFFER_BIT,H.NEAREST);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||Qe.has(C)){let Oe=Qe.get(C),tt=Qe.get(J);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,Wo),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,wr);for(let lt=0;lt<Ve;lt++)pe?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Oe.__webglTexture,K,it+lt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Oe.__webglTexture,K),Te?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,tt.__webglTexture,Ae,jt+lt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,tt.__webglTexture,Ae),K!==0?H.blitFramebuffer(ct,_t,Pe,$e,Mt,zt,Pe,$e,H.COLOR_BUFFER_BIT,H.NEAREST):Te?H.copyTexSubImage3D(z,Ae,Mt,zt,jt+lt,ct,_t,Pe,$e):H.copyTexSubImage2D(z,Ae,Mt,zt,ct,_t,Pe,$e);Xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Te?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(z,Ae,Mt,zt,jt,Pe,$e,Ve,F,T,w.data):J.isCompressedArrayTexture?H.compressedTexSubImage3D(z,Ae,Mt,zt,jt,Pe,$e,Ve,F,w.data):H.texSubImage3D(z,Ae,Mt,zt,jt,Pe,$e,Ve,F,T,w):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ae,Mt,zt,Pe,$e,F,T,w.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ae,Mt,zt,w.width,w.height,F,w.data):H.texSubImage2D(H.TEXTURE_2D,Ae,Mt,zt,Pe,$e,F,T,w);H.pixelStorei(H.UNPACK_ROW_LENGTH,k),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,X),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ce),H.pixelStorei(H.UNPACK_SKIP_ROWS,me),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ee),Ae===0&&J.generateMipmaps&&H.generateMipmap(z),Xe.unbindTexture()},this.copyTextureToTexture3D=function(C,J,te=null,ie=null,K=0){return Es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,J,te,ie,K)},this.initRenderTarget=function(C){Qe.get(C).__webglFramebuffer===void 0&&gt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?gt.setTextureCube(C,0):C.isData3DTexture?gt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?gt.setTexture2DArray(C,0):gt.setTexture2D(C,0),Xe.unbindTexture()},this.resetState=function(){D=0,O=0,V=null,Xe.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Vt._getUnpackColorSpace()}};var c0=(i,e,t="")=>`View3dModel-${i}-${e}${t}`;var VL=(i,e)=>`MembraneResults-${i}-${e}`;var wR=2220446049250313e-31;function ku(i,e,t,n){let s=Math.abs(i-e);return t==null&&(t=wR),n==null&&(n=t),s<=t||s<=n*Math.min(Math.abs(i),Math.abs(e))?!0:i===e}var es=class extends Error{constructor(e){super(e)}};function Bd(i,e){let t=e?.injector??An(Wc),n=new sg,s=i(n).subscribe();t.get(la).onDestroy(()=>s.unsubscribe());let a=(c,u)=>{if(TR(c))return n.next(c),{destroy:rg};let h=AR(),f=u?.injector??h??t;if(typeof c=="function"){let g=gs(()=>{let m=c();no(()=>n.next(m))},{injector:f});return s.add({unsubscribe:()=>g.destroy()}),g}let d=c.subscribe(g=>n.next(g));return s.add(d),f!==t&&f.get(la).onDestroy(()=>d.unsubscribe()),{destroy:()=>d.unsubscribe()}};return a.destroy=s.unsubscribe.bind(s),a}function TR(i){return typeof i!="function"&&!cg(i)}function AR(){try{return An(Wc)}catch(i){return}}var h0=new ci,Wu=new $,Uo=class extends Va{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new mn(e,3)),this.setAttribute("uv",new mn(t,2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new Zr(t,6,1);return this.setAttribute("instanceStart",new zi(n,3,0)),this.setAttribute("instanceEnd",new zi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new Zr(t,6,1);return this.setAttribute("instanceColorStart",new zi(n,3,0)),this.setAttribute("instanceColorEnd",new zi(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new qr(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),h0.setFromBufferAttribute(t),this.boundingBox.union(h0))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let a=0,c=e.count;a<c;a++)Wu.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Wu)),Wu.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(Wu));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};De.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new st(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Xn.line={uniforms:Ja.merge([De.common,De.fog,De.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var ts=class extends li{constructor(e){super({type:"LineMaterial",uniforms:Ja.clone(Xn.line.uniforms),vertexShader:Xn.line.vertexShader,fragmentShader:Xn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var zd=new Kt,f0=new $,d0=new $,Cn=new Kt,Rn=new Kt,Ki=new Kt,Vd=new $,Gd=new sn,In=new Ga,p0=new $,Xu=new ci,qu=new Oi,Qi=new Kt,ji,Bs;function m0(i,e,t){return Qi.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),Qi.multiplyScalar(1/Qi.w),Qi.x=Bs/t.width,Qi.y=Bs/t.height,Qi.applyMatrix4(i.projectionMatrixInverse),Qi.multiplyScalar(1/Qi.w),Math.abs(Math.max(Qi.x,Qi.y))}function CR(i,e){let t=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,a=n.attributes.instanceEnd,c=Math.min(n.instanceCount,s.count);for(let u=0,h=c;u<h;u++){In.start.fromBufferAttribute(s,u),In.end.fromBufferAttribute(a,u),In.applyMatrix4(t);let f=new $,d=new $;ji.distanceSqToSegment(In.start,In.end,d,f),d.distanceTo(f)<Bs*.5&&e.push({point:d,pointOnLine:f,distance:ji.origin.distanceTo(d),object:i,face:null,faceIndex:u,uv:null,uv1:null})}}function RR(i,e,t){let n=e.projectionMatrix,a=i.material.resolution,c=i.matrixWorld,u=i.geometry,h=u.attributes.instanceStart,f=u.attributes.instanceEnd,d=Math.min(u.instanceCount,h.count),g=-e.near;ji.at(1,Ki),Ki.w=1,Ki.applyMatrix4(e.matrixWorldInverse),Ki.applyMatrix4(n),Ki.multiplyScalar(1/Ki.w),Ki.x*=a.x/2,Ki.y*=a.y/2,Ki.z=0,Vd.copy(Ki),Gd.multiplyMatrices(e.matrixWorldInverse,c);for(let m=0,_=d;m<_;m++){if(Cn.fromBufferAttribute(h,m),Rn.fromBufferAttribute(f,m),Cn.w=1,Rn.w=1,Cn.applyMatrix4(Gd),Rn.applyMatrix4(Gd),Cn.z>g&&Rn.z>g)continue;if(Cn.z>g){let L=Cn.z-Rn.z,P=(Cn.z-g)/L;Cn.lerp(Rn,P)}else if(Rn.z>g){let L=Rn.z-Cn.z,P=(Rn.z-g)/L;Rn.lerp(Cn,P)}Cn.applyMatrix4(n),Rn.applyMatrix4(n),Cn.multiplyScalar(1/Cn.w),Rn.multiplyScalar(1/Rn.w),Cn.x*=a.x/2,Cn.y*=a.y/2,Rn.x*=a.x/2,Rn.y*=a.y/2,In.start.copy(Cn),In.start.z=0,In.end.copy(Rn),In.end.z=0;let M=In.closestPointToPointParameter(Vd,!0);In.at(M,p0);let x=Za.lerp(Cn.z,Rn.z,M),v=x>=-1&&x<=1,B=Vd.distanceTo(p0)<Bs*.5;if(v&&B){In.start.fromBufferAttribute(h,m),In.end.fromBufferAttribute(f,m),In.start.applyMatrix4(c),In.end.applyMatrix4(c);let L=new $,P=new $;ji.distanceSqToSegment(In.start,In.end,P,L),t.push({point:P,pointOnLine:L,distance:ji.origin.distanceTo(P),object:i,face:null,faceIndex:m,uv:null,uv1:null})}}}var Yu=class extends hn{constructor(e=new Uo,t=new ts({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let c=0,u=0,h=t.count;c<h;c++,u+=2)f0.fromBufferAttribute(t,c),d0.fromBufferAttribute(n,c),s[u]=u===0?0:s[u-1],s[u+1]=s[u]+f0.distanceTo(d0);let a=new Zr(s,2,1);return e.setAttribute("instanceDistanceStart",new zi(a,1,0)),e.setAttribute("instanceDistanceEnd",new zi(a,1,1)),this}raycast(e,t){let n=this.material.worldUnits,s=e.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let a=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ji=e.ray;let c=this.matrixWorld,u=this.geometry,h=this.material;Bs=h.linewidth+a,u.boundingSphere===null&&u.computeBoundingSphere(),qu.copy(u.boundingSphere).applyMatrix4(c);let f;if(n)f=Bs*.5;else{let g=Math.max(s.near,qu.distanceToPoint(ji.origin));f=m0(s,g,h.resolution)}if(qu.radius+=f,ji.intersectsSphere(qu)===!1)return;u.boundingBox===null&&u.computeBoundingBox(),Xu.copy(u.boundingBox).applyMatrix4(c);let d;if(n)d=Bs*.5;else{let g=Math.max(s.near,Xu.distanceToPoint(ji.origin));d=m0(s,g,h.resolution)}Xu.expandByScalar(d),ji.intersectsBox(Xu)!==!1&&(n?CR(this,t):RR(this,s,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(zd),this.material.uniforms.resolution.value.set(zd.z,zd.w))}};var No=class extends Uo{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setPositions(n),this}setColors(e){let t=e.length-3,n=new Float32Array(2*t);for(let s=0;s<t;s+=3)n[2*s]=e[s],n[2*s+1]=e[s+1],n[2*s+2]=e[s+2],n[2*s+3]=e[s+3],n[2*s+4]=e[s+4],n[2*s+5]=e[s+5];return super.setColors(n),this}setFromPoints(e){let t=e.length-1,n=new Float32Array(6*t);for(let s=0;s<t;s++)n[6*s]=e[s].x,n[6*s+1]=e[s].y,n[6*s+2]=e[s].z||0,n[6*s+3]=e[s+1].x,n[6*s+4]=e[s+1].y,n[6*s+5]=e[s+1].z||0;return super.setPositions(n),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}};var $u=class extends Yu{constructor(e=new No,t=new ts({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}};var Zu=class{constructor(e,t=32){this.isLut=!0,this.lut=[],this.map=[],this.n=0,this.minV=0,this.maxV=1,this.setColorMap(e,t)}set(e){return e.isLut===!0&&this.copy(e),this}setMin(e){return this.minV=e,this}setMax(e){return this.maxV=e,this}setColorMap(e,t=32){this.map=Hd[e]||Hd.rainbow,this.n=t;let n=1/this.n,s=new yt,a=new yt;this.lut.length=0,this.lut.push(new yt(this.map[0][1]));for(let c=1;c<t;c++){let u=c*n;for(let h=0;h<this.map.length-1;h++)if(u>this.map[h][0]&&u<=this.map[h+1][0]){let f=this.map[h][0],d=this.map[h+1][0];s.setHex(this.map[h][1],wi),a.setHex(this.map[h+1][1],wi);let g=new yt().lerpColors(s,a,(u-f)/(d-f));this.lut.push(g)}}return this.lut.push(new yt(this.map[this.map.length-1][1])),this}copy(e){return this.lut=e.lut,this.map=e.map,this.n=e.n,this.minV=e.minV,this.maxV=e.maxV,this}getColor(e){e=Za.clamp(e,this.minV,this.maxV),e=(e-this.minV)/(this.maxV-this.minV);let t=Math.round(e*this.n);return this.lut[t]}addColorMap(e,t){return Hd[e]=t,this}createCanvas(){let e=document.createElement("canvas");return e.width=1,e.height=this.n,this.updateCanvas(e),e}updateCanvas(e){let t=e.getContext("2d",{alpha:!1}),n=t.getImageData(0,0,1,this.n),s=n.data,a=0,c=1/this.n,u=new yt,h=new yt,f=new yt;for(let d=1;d>=0;d-=c)for(let g=this.map.length-1;g>=0;g--)if(d<this.map[g][0]&&d>=this.map[g-1][0]){let m=this.map[g-1][0],_=this.map[g][0];u.setHex(this.map[g-1][1],wi),h.setHex(this.map[g][1],wi),f.lerpColors(u,h,(d-m)/(_-m)),s[a*4]=Math.round(f.r*255),s[a*4+1]=Math.round(f.g*255),s[a*4+2]=Math.round(f.b*255),s[a*4+3]=255,a+=1}return t.putImageData(n,0,0),e}},Hd={rainbow:[[0,255],[.2,65535],[.5,65280],[.8,16776960],[1,16711680]],cooltowarm:[[0,3952322],[.2,10206463],[.5,14474460],[.8,16163717],[1,11797542]],blackbody:[[0,0],[.2,7864320],[.5,15086080],[.8,16776960],[1,16777215]],grayscale:[[0,0],[.2,4210752],[.5,8355712],[.8,12566463],[1,16777215]]};var g0=Symbol("");function _0(i){return new Proxy(i,{has(e,t){return!!this.get(e,t,void 0)},get(e,t){let n=no(e);return!PR(n)||!(t in n)?(Xc(e[t])&&e[t][g0]&&delete e[t],e[t]):(Xc(e[t])||(Object.defineProperty(e,t,{value:ua(()=>e()[t]),configurable:!0}),e[t][g0]=!0),_0(e[t]))}})}var IR=[WeakSet,WeakMap,Promise,Date,Error,RegExp,ArrayBuffer,DataView,Function];function PR(i){if(i===null||typeof i!="object"||LR(i))return!1;let e=Object.getPrototypeOf(i);if(e===Object.prototype)return!0;for(;e&&e!==Object.prototype;){if(IR.includes(e.constructor))return!1;e=Object.getPrototypeOf(e)}return e===Object.prototype}function LR(i){return typeof i?.[Symbol.iterator]=="function"}var DR=new WeakMap,qn=Symbol("");function qt(i,...e){let t=no(()=>Fo(i)),n=e.reduce((c,u)=>ye(ye({},c),typeof u=="function"?u(c):u),t),s=i[qn],a=Reflect.ownKeys(i[qn]);for(let c of Reflect.ownKeys(n))if(a.includes(c)){let u=c;t[u]!==n[u]&&s[u].set(n[u])}NR(i)}function Fo(i){let e=i[qn];return Reflect.ownKeys(i[qn]).reduce((t,n)=>{let s=e[n]();return Ge(ye({},t),{[n]:s})},{})}function UR(i){return DR.get(i[qn])||[]}function NR(i){let e=UR(i);for(let t of e){let n=no(()=>Fo(i));t(n)}}function Ju(...i){let e=[...i],t=typeof e[0]=="function"?{}:e.shift(),n=e;return(()=>{class a{constructor(){let u=n.reduce((M,x)=>x(M),FR()),{stateSignals:h,props:f,methods:d,hooks:g}=u,m=ye(ye(ye({},h),f),d);this[qn]=u[qn];for(let M of Reflect.ownKeys(m))this[M]=m[M];let{onInit:_,onDestroy:S}=g;_&&_(),S&&An(la).onDestroy(S)}static \u0275fac=function(h){return new(h||a)};static \u0275prov=Si({token:a,factory:a.\u0275fac,providedIn:t.providedIn||null})}return a})()}function FR(){return{[qn]:{},stateSignals:{},props:{},methods:{},hooks:{}}}function Oo(...i){let e=typeof i[0]=="function"?i:i.slice(1);return t=>e.reduce((n,s)=>s(n),t)}function OR(i){return e=>{let t=i(ye(ye(ye({[qn]:e[qn]},e.stateSignals),e.props),e.methods));return Ge(ye({},e),{props:ye(ye({},e.props),t)})}}function ns(i){return OR(e=>{let t=i(e);return Reflect.ownKeys(t).reduce((s,a)=>{let c=t[a];return Ge(ye({},s),{[a]:Xc(c)?c:ua(c)})},{})})}function Ku(i){return e=>{let t=ye(ye(ye({[qn]:e[qn]},e.stateSignals),e.props),e.methods),n=typeof i=="function"?i(t):i,s=(a,c)=>c?()=>{a&&a(),c(t)}:a;return Ge(ye({},e),{hooks:{onInit:s(e.hooks.onInit,n.onInit),onDestroy:s(e.hooks.onDestroy,n.onDestroy)}})}}function is(i){return e=>{let t=i(ye(ye(ye({[qn]:e[qn]},e.stateSignals),e.props),e.methods));return Ge(ye({},e),{methods:ye(ye({},e.methods),t)})}}function er(i){return e=>{let t=typeof i=="function"?i():i,n=Reflect.ownKeys(t),s=e[qn],a={};for(let c of n)s[c]=ug(t[c]),a[c]=_0(s[c]);return Ge(ye({},e),{stateSignals:ye(ye({},e.stateSignals),a)})}}var BR={minStress:0,maxStress:0,disp:0};function v0(){return Oo(er(BR),ns(i=>({midStress:ua(()=>(i.maxStress()+i.minStress())/2),visible:()=>!(i.maxStress()===0&&i.minStress()===0)})),is((i=>({setExtremes:(e,t,n)=>qt(i,s=>zR(s,e,t,n)),setStresses:(e,t)=>qt(i,n=>VR(n,e,t))}))))}var zR=(i,e,t,n)=>Ge(ye({},i),{minStress:e,maxStress:t,disp:n}),VR=(i,e,t)=>Ge(ye({},i),{minStress:e,maxStress:t});var GR={selectedConfiguration:{selectedLoadCase:"",selectedResultType:null,displacementScaleFactor:1},configuration:null};function x0(){return Oo(er(GR),ns(i=>({})),is((i=>({setConfiguration:e=>qt(i,t=>HR(t,e)),setSelectedConfiguration:e=>qt(i,t=>kR(t,e))}))))}var HR=(i,e)=>Ge(ye({},i),{configuration:e?ye({},e):null,selectedConfiguration:Ge(ye({},i.selectedConfiguration),{selectedLoadCase:e?.loadCases[0]??"",selectedResultType:e?.resultTypes?e.resultTypes[0]:null})}),kR=(i,e)=>Ge(ye({},i),{selectedConfiguration:ye({},e)});var WR={},Qu=Ju(er(WR),v0(),x0(),Ku({onInit(i){gs(()=>{let e=Fo(i);console.log(`${new Date().toLocaleTimeString()} state`,e)})}}));var XR="rainbow",qR=100,y0=new yt(66/255,161/255,245/255),ju=class i{lut=new Zu(XR,qR);store=An(Qu);stressChanged=[];subsribeStressChanged(e){e(this.store.maxStress),e(this.store.minStress)}setExtremes(e,t,n){this.lut.setMin(e),this.lut.setMax(t),this.store.setExtremes(e,t,n)}setStress(e,t){this.lut.setMin(e),this.lut.setMax(t),this.store.setStresses(e,t)}getColor(e){return ku(e,0)?y0:this.lut.getColor(e)}getBasicColor(){return y0}getColorRange(e=10){let t=(this.lut.maxV-this.lut.minV)/e,n=this.lut.minV;return new Array(e+1).fill(0).map((a,c)=>n+c*t).map(a=>this.lut.getColor(a)).map(a=>a?.getHexString()).map(a=>`#${a}`)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Si({token:i,factory:i.\u0275fac})};var S0=new Bi({color:8744029}),kd=1,M0=.5,YR=10;function b0(i,e,t,n){let s=new Rs(M0,kd,YR);return s.rotateZ(n),s.scale(t,t,t),s.translate(i,e-kd*t/2,0),s}var w0=(i,e,t)=>{let n=b0(i,e,t,0);return new hn(n,S0)},E0=(i,e,t)=>{let n=b0(i,e,t,Math.PI/2);return n.translate(M0*t,kd*t/2,0),new hn(n,S0)};var th=pf(A0()),z0=pf(u0());var I0=new Bi({color:9662683,opacity:.6,transparent:!0}),Qa=.1,Xd=.5,C0=.05,R0=1,ZR=(i,e,t,n)=>{let s=new Rs(Qa,Xd,10);return s.scale(t,t,t),s.translate(i,-Xd*t/2+e,0),s.rotateZ(n),new hn(s,I0)},JR=(i,e,t,n,s)=>{let a=new wo(C0,C0,R0*t,10);return a.scale(n,n,n),a.translate(i,-R0/2*n*t-Xd*n+e,0),a.rotateZ(s),new hn(a,I0)},Bn=(i,e,t,n,s)=>{let a=[],c=JR(i,e,t,n,s),u=ZR(i,e,n,s);return a.push(c),a.push(u),a},P0=(i,e,t,n)=>Bn(i,e,t,n,0),L0=(i,e,t,n)=>Bn(e,-i,t,n,Math.PI/2),D0=(i,e,t,n)=>Bn(-i,-e,t,n,Math.PI),U0=(i,e,t,n)=>Bn(-e,i,t,n,-Math.PI/2),N0=(i,e,t,n)=>{let s=2*Qa*n,a=Bn(i-s,e,t,n,0),c=Bn(i,e,t,n,0),u=Bn(i+s,e,t,n,0);return[...a,...c,...u]},F0=(i,e,t,n)=>{let s=2*Qa*n,a=Bn(e-s,-i,t,n,Math.PI/2),c=Bn(e,-i,t,n,Math.PI/2),u=Bn(e+s,-i,t,n,Math.PI/2);return[...a,...c,...u]},O0=(i,e,t,n)=>{let s=2*Qa*n,a=Bn(-(i-s),-e,t,n,Math.PI),c=Bn(-i,-e,t,n,Math.PI),u=Bn(-(i+s),-e,t,n,Math.PI);return[...a,...c,...u]},B0=(i,e,t,n)=>{let s=2*Qa*n,a=Bn(-(e-s),i,t,n,-Math.PI/2),c=Bn(-e,i,t,n,-Math.PI/2),u=Bn(-(e+s),i,t,n,-Math.PI/2);return[...a,...c,...u]};var KR="black",QR="blue",nh=class i{legendService=An(ju);store=An(Qu);scene;uuid="";mesh=null;wireframe=null;otherMeshes=[];scale=1;selectedParams;cX=0;cY=0;cZ=0;dx=0;dy=0;dz=0;constructor(){this.legendService.subsribeStressChanged(Bd(mf(ca(()=>this.generateModel(!1))))),Bd(mf(lg(()=>this.selectedParams!==void 0),ca(()=>this.generateModel(!0))))(this.store.selectedConfiguration)}injectScene(e){this.scene=e}resetView(){this.clean3dObject()}getResults(e){return this.mesh&&this.selectedParams?.resultType?this.selectedParams.faces[e].results:[]}getMeshForRaycasting(){return this.mesh&&this.selectedParams?.resultType?this.mesh:null}setFinished(e,t,n){return yi(this,null,function*(){let s={resultTypes:n,loadCases:t};this.uuid=e,this.store.setConfiguration(s),yield this.generateModel(!0)})}generateModel(e){return yi(this,null,function*(){if(!this.store.configuration())return;let t=yield z0.getItem(c0(this.uuid,this.store.selectedConfiguration().selectedLoadCase,this.store.selectedConfiguration().selectedResultType??""));if(!t)return;this.selectedParams=t,this.clean3dObject();let n=this.selectedParams.faces.flatMap(d=>d.vertices),s=n.reduce((d,g)=>Math.max(d,g.x),-1/0),a=n.reduce((d,g)=>Math.max(d,g.y),-1/0),c=n.reduce((d,g)=>Math.max(d,g.z),-1/0),u=n.reduce((d,g)=>Math.min(d,g.x),1/0),h=n.reduce((d,g)=>Math.min(d,g.y),1/0),f=n.reduce((d,g)=>Math.min(d,g.z),1/0);this.dx=s-u,this.dy=a-h,this.dz=c-f,this.cX=-(s+u)/2,this.cY=-(a+h)/2,this.cZ=-(c+f)/2,this.generateFaces(e),this.createWireframe(),this.generateSupports(),this.generateLoads(),this.createBorders()})}clean3dObject(){this.wireframe&&(this.scene.remove(this.wireframe),this.wireframe=null),this.mesh&&(this.scene.remove(this.mesh),this.mesh=null),this.scene&&this.scene.remove(...this.otherMeshes),this.otherMeshes=[]}generateFaces(e){if(!this.selectedParams)return;let n=this.selectedParams.faces.flatMap(_=>_.vertices.flatMap(S=>[S.ux,S.uy,S.uz])).map(_=>Math.abs(_)).reduce((_,S)=>Math.max(_,S),0);this.scale=n===0||!this.store.selectedConfiguration().displacementScaleFactor?1:this.store.selectedConfiguration().displacementScaleFactor/100*Math.max(this.dx,this.dy,this.dz)/n;let s=new Fn,a=this.selectedParams.faces.flatMap(_=>_.vertices.flatMap(S=>S)).filter(_=>_.value).map(_=>_.value);if(e){let _=a.length===0?0:a.reduce((M,x)=>Math.max(M,x),-1/0),S=a.length===0?0:a.reduce((M,x)=>Math.min(M,x),1/0);this.legendService.setExtremes(S,_,n)}let c=[],u=[];for(let _ of this.selectedParams.faces){let S=_.vertices[0],M=_.vertices[1],x=_.vertices[2],v=this.legendService.getColor(S?.value??0),B=this.legendService.getColor(M?.value??0),L=this.legendService.getColor(x?.value??0);c.push(S.x+this.scale*S.ux+this.cX,S.y+this.scale*S.uy+this.cY,S.z+this.scale*S.uz+this.cZ),c.push(M.x+this.scale*M.ux+this.cX,M.y+this.scale*M.uy+this.cY,M.z+this.scale*M.uz+this.cZ),c.push(x.x+this.scale*x.ux+this.cX,x.y+this.scale*x.uy+this.cY,x.z+this.scale*x.uz+this.cZ),u.push(v.r,v.g,v.b),u.push(B.r,B.g,B.b),u.push(L.r,L.g,L.b)}let h=new Float32Array(c),f=new Float32Array(u),d=new wn(h,3);d.setUsage(Fu),s.setAttribute("position",d);let g=new wn(f,3);g.setUsage(Fu),s.setAttribute("color",g);let m=new Bi({vertexColors:!0,side:Ei});this.mesh=new hn(s,m),this.scene.add(this.mesh)}createWireframe(){if(!this.mesh)return;let e=new As({color:KR,linewidth:2});if(this.selectedParams?.wireframeFaces.length===0||!this.selectedParams){let t=new qr(this.mesh.geometry);this.wireframe=new Cs(t,e)}else{let t=[];for(let u of this.selectedParams.wireframeFaces){let h=u.vertices[0],f=u.vertices[1],d=u.vertices[2];t.push(h.x+this.scale*h.ux+this.cX,h.y+this.scale*h.uy+this.cY,h.z+this.scale*h.uz+this.cZ),t.push(f.x+this.scale*f.ux+this.cX,f.y+this.scale*f.uy+this.cY,f.z+this.scale*f.uz+this.cZ),t.push(d.x+this.scale*d.ux+this.cX,d.y+this.scale*d.uy+this.cY,d.z+this.scale*d.uz+this.cZ)}let n=new Float32Array(t),s=new wn(n,3),a=new Fn;a.setAttribute("position",s);let c=new qr(a);this.wireframe=new Cs(c,e)}this.wireframe.material.depthTest=!1,this.wireframe.material.opacity=.25,this.wireframe.material.transparent=!0,this.scene.add(this.wireframe)}createBorders(){if(this.mesh&&this.selectedParams)for(let e of this.selectedParams.borders){let t=new Oa;t.moveTo(e.points[0].x+this.cX,e.points[0].y+this.cY),e.points.slice(1).forEach(h=>t.lineTo(h.x+this.cX,h.y+this.cY)),t.lineTo(e.points[0].x+this.cX,e.points[0].y+this.cY);let s=t.getPoints().flatMap(h=>[h.x,h.y,0]),a=new No;a.setPositions(s);let c=new ts({color:QR,linewidth:1}),u=new $u(a,c);u.computeLineDistances(),this.scene.add(u),this.otherMeshes.push(u)}}generateSupports(){if(!this.selectedParams)return;let e=Math.min(this.selectedParams.height,this.selectedParams.width)*.05,t=this.selectedParams.supports;for(let n of t){let a=this.selectedParams.faces.flatMap(h=>h.vertices).find(h=>(0,th.default)(n.x,h.x)&&(0,th.default)(n.y,h.y)&&(0,th.default)(n.z,h.z));if(!a)throw new es("Node for support not found");let c=n.x+a.ux*this.scale,u=n.y+a.uy*this.scale;if(n.uy){let h=w0(c,u,e).translateX(this.cX).translateY(this.cY).translateZ(this.cZ);this.scene.add(h),this.otherMeshes.push(h)}if(n.ux){let h=E0(c,u,e).translateX(this.cX).translateY(this.cY).translateZ(this.cZ);this.scene.add(h),this.otherMeshes.push(h)}}}generateLoads(){if(!this.selectedParams)return;let e=Math.min(this.selectedParams.height,this.selectedParams.width)*.1,t=this.selectedParams.loads;if(!t||t.length===0)return;let n=t.reduce((u,h)=>Math.max(Math.abs(u),Math.abs(h.valueX)),0),s=t.reduce((u,h)=>Math.max(Math.abs(u),Math.abs(h.valueY)),0),a=t.reduce((u,h)=>Math.max(Math.abs(u),Math.abs(h.valueZ)),0),c=Math.max(n,s,a);for(let u of t){let h=new $(u.valueX,u.valueY,u.valueZ);if(h.length()===0)continue;h.normalize();let f=u.x+this.cX,d=u.y+this.cY,g=Math.abs(u.valueX)/c*1,m=Math.abs(u.valueY)/c*1;if(u.valueX<0){let _=u.type=="point"?L0(f,d,g,e):F0(f,d,g,e);this.scene.add(..._),this.otherMeshes.push(..._)}else if(u.valueX>0){let _=u.type=="point"?U0(f,d,g,e):B0(f,d,g,e);this.scene.add(..._),this.otherMeshes.push(..._)}if(u.valueY<0){let _=u.type=="point"?D0(f,d,m,e):O0(f,d,m,e);this.scene.add(..._),this.otherMeshes.push(..._)}else if(u.valueY>0){let _=u.type=="point"?P0(f,d,m,e):N0(f,d,m,e);this.scene.add(..._),this.otherMeshes.push(..._)}}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Si({token:i,factory:i.\u0275fac})};var ja={name:"default-section",thickness:1};var V0={name:"default-material",modulusOfElasticity:21e10,poissonsRatio:.3,weight:78.5};var G0={sectionProperties:[],materials:[],rectangles:[],polygons:[],supports:[],loadCases:[],resultPoints:[],meshingConfiguration:{maxMeshArea:.1,refinementPoints:[]},solverConfiguration:{solverType:"lusolve"}},H0={solverConfiguration:{solverType:"lusolve"},meshingConfiguration:{maxMeshArea:.05,refinementPoints:[{x:0,y:0,radius:.4,maxArea:.01},{x:1.5,y:0,radius:.4,maxArea:.01},{x:2,y:1,radius:.4,maxArea:.005}]},resultPoints:[{x:1,y:.5,name:"p1"}],sectionProperties:[ye({},ja),Ge(ye({},ja),{name:"thickness-2",thickness:.5})],materials:[ye({},V0)],rectangles:[{name:"geo1",x:0,y:0,width:2,height:1,sectionName:"default-section",materialName:"default-material"},{name:"geo2",x:3,y:1,width:2,height:2,sectionName:"default-section",materialName:"default-material"},{name:"geo3",x:6,y:0,width:2,height:1,sectionName:"default-section",materialName:"default-material"},{name:"geo4",x:3.45,y:3,width:1,height:.28,sectionName:"default-section",materialName:"default-material"}],polygons:[{name:"pol1",points:"2,0 3,1 3,3 2,1",sectionName:"default-section",materialName:"default-material"},{name:"pol2",points:"5,1 6,0 6,1 5,3",sectionName:"default-section",materialName:"default-material"}],supports:[{x:2,y:0,fixedX:!0,fixedY:!0},{x:6,y:0,fixedX:!1,fixedY:!0}],loadCases:[{name:"loadCase1",includeDeadLoad:!1,pointLoads:[{x:1,y:.48,fx:0,fy:0},{x:2,y:0,fx:0,fy:-1}],distributedLoads:[{geometryName:"geo1",fx:0,fy:-.5}]},{name:"loadCase2",includeDeadLoad:!1,pointLoads:[{x:.72,y:.5,fx:0,fy:0},{x:.5,y:.54,fx:0,fy:0}],distributedLoads:[{geometryName:"geo2",fx:0,fy:-1},{geometryName:"geo2",fx:0,fy:-1}]}]};var k0={name:"pol",points:"0,0 1,0 1,1 0,1",sectionName:"",materialName:""},ih=i=>{let e=(i.points??"").trim().split(/\s+/).map(n=>n.split(",")),t=[];for(let[n,s]of e){let a=parseFloat(n),c=parseFloat(s);if(Number.isFinite(a)&&Number.isFinite(c))t.push({x:a,y:c});else throw new es("Invalid vertex coordinates")}return{vertices:t}};var W0=i=>({vertices:[{x:i.x,y:i.y},{x:i.x+i.width,y:i.y},{x:i.x+i.width,y:i.y+i.height},{x:i.x,y:i.y+i.height}]}),X0={x:0,y:0,width:100,height:100,name:"default",sectionName:"",materialName:""};var Y0=pf(q0());var jR={geometry:ye({},H0)};function $0(){return Oo(er(jR),ns(i=>({geometryNames:()=>{let e=i.geometry.rectangles()?.map(n=>n.name)??[],t=i.geometry.polygons()?.map(n=>n.name)??[];return Y0.uniq([...e,...t])}})),is((i=>({addSectionProperty:()=>qt(i,e=>eI(e)),removeSectionProperty:e=>qt(i,t=>tI(t,e)),addRectangle:()=>qt(i,e=>nI(e)),removeRectangle:e=>qt(i,t=>iI(t,e)),addPolygon:()=>qt(i,e=>rI(e)),removePolygon:e=>qt(i,t=>sI(t,e)),addResultPoint:()=>qt(i,e=>oI(e)),removeResultPoint:e=>qt(i,t=>aI(t,e)),addRefinementPoint:()=>qt(i,e=>cI(e)),removeRefinementPoint:e=>qt(i,t=>lI(t,e)),addSupport:()=>qt(i,e=>uI(e)),removeSupport:e=>qt(i,t=>hI(t,e)),addLoadCase:()=>qt(i,e=>fI(e)),removeLoadCase:e=>qt(i,t=>dI(t,e)),addPointLoad:e=>qt(i,t=>pI(t,e)),removePointLoad:(e,t)=>qt(i,n=>mI(n,e,t)),addDistributedLoad:e=>qt(i,t=>gI(t,e)),removeDistributedLoad:(e,t)=>qt(i,n=>_I(n,e,t))}))))}function eI(i){return Ge(ye({},i),{geometry:Ge(ye({},i.geometry),{sectionProperties:[...i.geometry.sectionProperties,ye({},ja)]})})}function tI(i,e){return Ge(ye({},i),{geometry:Ge(ye({},i.geometry),{sectionProperties:i.geometry.sectionProperties.filter((t,n)=>n!==e)})})}function nI(i){return Ge(ye({},i),{geometry:Ge(ye({},i.geometry),{rectangles:[...i.geometry.rectangles,ye({},X0)]})})}function iI(i,e){return Ge(ye({},i),{geometry:Ge(ye({},i.geometry),{rectangles:i.geometry.rectangles.filter((t,n)=>n!==e)})})}function rI(i){return Ge(ye({},i),{geometry:Ge(ye({},i.geometry),{polygons:[...i.geometry.polygons,ye({},k0)]})})}function sI(i,e){return Ge(ye({},i),{geometry:Ge(ye({},i.geometry),{polygons:i.geometry.polygons.filter((t,n)=>n!==e)})})}function oI(i){return Ge(ye({},i),{geometry:Ge(ye({},i.geometry),{resultPoints:[...i.geometry.resultPoints,{x:0,y:0,name:`p${i.geometry.resultPoints.length+1}`}]})})}function aI(i,e){return Ge(ye({},i),{geometry:Ge(ye({},i.geometry),{resultPoints:i.geometry.resultPoints.filter((t,n)=>n!==e)})})}function cI(i){return Ge(ye({},i),{geometry:Ge(ye({},i.geometry),{meshingConfiguration:Ge(ye({},i.geometry.meshingConfiguration),{refinementPoints:[...i.geometry.meshingConfiguration.refinementPoints,{x:0,y:0,radius:.1,maxArea:.001}]})})})}function lI(i,e){return Ge(ye({},i),{geometry:Ge(ye({},i.geometry),{meshingConfiguration:Ge(ye({},i.geometry.meshingConfiguration),{refinementPoints:i.geometry.meshingConfiguration.refinementPoints.filter((t,n)=>n!==e)})})})}function uI(i){return Ge(ye({},i),{geometry:Ge(ye({},i.geometry),{supports:[...i.geometry.supports,{x:0,y:0,fixedX:!0,fixedY:!0}]})})}function hI(i,e){return Ge(ye({},i),{geometry:Ge(ye({},i.geometry),{supports:i.geometry.supports.filter((t,n)=>n!==e)})})}function fI(i){return Ge(ye({},i),{geometry:Ge(ye({},i.geometry),{loadCases:[...i.geometry.loadCases,{name:`loadCase${i.geometry.loadCases.length+1}`,pointLoads:[],distributedLoads:[],includeDeadLoad:!1}]})})}function dI(i,e){return Ge(ye({},i),{geometry:Ge(ye({},i.geometry),{loadCases:i.geometry.loadCases.filter((t,n)=>n!==e)})})}function pI(i,e){let t=i.geometry.loadCases.map((n,s)=>s===e?Ge(ye({},n),{pointLoads:[...n.pointLoads,{x:0,y:0,fx:0,fy:0}]}):n);return Ge(ye({},i),{geometry:Ge(ye({},i.geometry),{loadCases:ye({},t)})})}function mI(i,e,t){let n=i.geometry.loadCases.map((s,a)=>a===e?Ge(ye({},s),{pointLoads:s.pointLoads.filter((c,u)=>u!==t)}):s);return Ge(ye({},i),{geometry:Ge(ye({},i.geometry),{loadCases:ye({},n)})})}function gI(i,e){let t=i.geometry.loadCases.map((n,s)=>s===e?Ge(ye({},n),{distributedLoads:[...n.distributedLoads,{geometryName:"",fx:0,fy:0}]}):n);return Ge(ye({},i),{geometry:Ge(ye({},i.geometry),{loadCases:ye({},t)})})}function _I(i,e,t){let n=i.geometry.loadCases.map((s,a)=>a===e?Ge(ye({},s),{distributedLoads:s.distributedLoads.filter((c,u)=>u!==t)}):s);return Ge(ye({},i),{geometry:Ge(ye({},i.geometry),{loadCases:ye({},n)})})}var vI={errors:[],progress:null,calculationUuid:""},Z0=Ju(er(vI),$0(),ns(i=>({hasErrors:()=>i.errors().length>0,hasProgress:()=>i.progress()!==null&&i.progress()?.message!=="Finished all load cases"&&i.progress()?.message!==null&&i.progress()?.message!==""})),is((i=>({setErrors:(...e)=>qt(i,t=>Ge(ye({},t),{errors:e})),setProgress:e=>qt(i,t=>xI(t,e)),setCalculationUuid:e=>qt(i,t=>Ge(ye({},t),{calculationUuid:e})),resetCalculations:()=>qt(i,e=>Ge(ye({},e),{calculationUuid:"",progress:null}))}))),Ku({onInit(i){gs(()=>{let e=Fo(i);console.log(`${new Date().toLocaleTimeString()} membrane state`,e)})}}));function xI(i,e){if(e===null)return Ge(ye({},i),{progress:null});let t=ye({},i);return e.message&&(t=Ge(ye({},t),{progress:Ge(ye({},t.progress),{message:e.message})})),e.subMessage&&(t=Ge(ye({},t),{progress:Ge(ye({},t.progress),{subMessage:e.subMessage})})),e.progressValue&&(t=Ge(ye({},t),{progress:Ge(ye({},t.progress),{progressValue:e.progressValue})})),t}var Pn=[];for(let i=0;i<256;++i)Pn.push((i+256).toString(16).slice(1));function J0(i,e=0){return(Pn[i[e+0]]+Pn[i[e+1]]+Pn[i[e+2]]+Pn[i[e+3]]+"-"+Pn[i[e+4]]+Pn[i[e+5]]+"-"+Pn[i[e+6]]+Pn[i[e+7]]+"-"+Pn[i[e+8]]+Pn[i[e+9]]+"-"+Pn[i[e+10]]+Pn[i[e+11]]+Pn[i[e+12]]+Pn[i[e+13]]+Pn[i[e+14]]+Pn[i[e+15]]).toLowerCase()}var qd,yI=new Uint8Array(16);function Yd(){if(!qd){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");qd=crypto.getRandomValues.bind(crypto)}return qd(yI)}var SI=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),$d={randomUUID:SI};function MI(i,e,t){if($d.randomUUID&&!e&&!i)return $d.randomUUID();i=i||{};let n=i.random??i.rng?.()??Yd();if(n.length<16)throw new Error("Random bytes length must be >= 16");if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){if(t=t||0,t<0||t+16>e.length)throw new RangeError(`UUID byte range ${t}:${t+15} is out of buffer bounds`);for(let s=0;s<16;++s)e[t+s]=n[s];return e}return J0(n)}var tc=MI;var bI="Triangulator";var rh=class i{triangulate(e){return yi(this,null,function*(){if(typeof Blazor>"u")throw new Error("Blazor runtime must be started externally before calling triangulate.");try{yield Blazor.start()}catch(c){}let t=null,n=5,s=1e3;for(let c=1;c<=n;c++)try{t=yield DotNet.invokeMethodAsync(bI,"Triangulate",JSON.stringify(e));break}catch(u){if(c<n)yield new Promise(h=>setTimeout(h,s));else throw u}return JSON.parse(t)})}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Si({token:i,factory:i.\u0275fac})};function K0(i,e){let t=[...i.rectangles.map(c=>W0(c)),...i.polygons.map(c=>ih(c))],n=[...i.loadCases.flatMap(c=>c.pointLoads.map(u=>u)),...i.supports.flatMap(c=>c),...i.resultPoints,...i.meshingConfiguration.refinementPoints],s=i.meshingConfiguration.refinementPoints.map(c=>EI(c));return{polygons:t.map(c=>wI(c)),maxArea:i.meshingConfiguration.maxMeshArea,refinementPoints:s,points:n.map(c=>Q0(c)),uuid:e}}var Q0=i=>({x:i.x,y:i.y}),wI=i=>({vertices:i.vertices.map(e=>Q0(e))}),EI=i=>({x:i.x,y:i.y,radius:i.radius,maxArea:i.maxArea});function fn(i){return typeof i=="number"&&Number.isFinite(i)}function zo(i,e,t){let n=new Set;return i.forEach((s,a)=>{let c=(s.name??"").trim();c?n.has(c)?t.push(`${e}[${a}]: duplicate name "${c}"`):n.add(c):t.push(`${e}[${a}]: missing name`)}),n}function j0(i){let e=[],t=[];if(!i)return{valid:!1,errors:["Geometry is null or undefined"],warnings:t};(!i.solverConfiguration||!["lusolve","iterative"].includes(i.solverConfiguration.solverType))&&e.push("Invalid or missing solverConfiguration.solverType (expected 'lusolve' or 'iterative')");let n=i.meshingConfiguration;n?((!fn(n.maxMeshArea)||n.maxMeshArea<=0)&&e.push("meshingConfiguration.maxTriangleArea should be > 0"),(n.refinementPoints??[]).forEach((h,f)=>{(!fn(h.x)||!fn(h.y))&&e.push(`refinementPoints[${f}]: invalid coordinates`),(!fn(h.radius)||h.radius<=0)&&e.push(`refinementPoints[${f}]: radius should be > 0`),(!fn(h.maxArea)||h.maxArea<=0)&&e.push(`refinementPoints[${f}]: maxArea should be > 0`)})):e.push("Missing meshingConfiguration");let s=zo(i.sectionProperties??[],"sectionProperties",e);(i.sectionProperties??[]).forEach((h,f)=>{(!fn(h.thickness)||h.thickness<=0)&&e.push(`sectionProperties[${f}]: thickness should be > 0`)});let a=zo(i.materials??[],"materials",e);(i.materials??[]).forEach((h,f)=>{(!fn(h.modulusOfElasticity)||h.modulusOfElasticity<=0)&&e.push(`materials[${f}]: modulusOfElasticity should be > 0`),(!fn(h.poissonsRatio)||h.poissonsRatio<=0)&&e.push(`materials[${f}]: poissonsRatio missing or invalid`),(!fn(h.weight)||h.weight<=0)&&t.push(`materials[${f}]: weight is missing or negative`)}),zo(i.rectangles??[],"rectangles",e),(i.rectangles??[]).forEach((h,f)=>{(!fn(h.x)||!fn(h.y))&&e.push(`rectangles[${f}]: invalid x/y`),(!fn(h.width)||h.width<=0)&&e.push(`rectangles[${f}]: width should be > 0`),(!fn(h.height)||h.height<=0)&&e.push(`rectangles[${f}]: height should be > 0`),h.sectionName&&!s.has(h.sectionName)&&e.push(`rectangles[${f}]: sectionName "${h.sectionName}" not found`),h.materialName&&!a.has(h.materialName)&&e.push(`rectangles[${f}]: materialName "${h.materialName}" not found`)}),zo(i.polygons??[],"polygons",e),(i.polygons??[]).forEach((h,f)=>{try{let d=ih(h);(!d.vertices||d.vertices.length<3)&&e.push(`polygons[${f}]: requires at least 3 valid vertices`)}catch(d){e.push(`polygons[${f}]: invalid coordinates format`)}h.sectionName&&!s.has(h.sectionName)&&e.push(`polygons[${f}]: sectionName "${h.sectionName}" not found`),h.materialName&&!a.has(h.materialName)&&e.push(`polygons[${f}]: materialName "${h.materialName}" not found`)}),(i.supports??[]).forEach((h,f)=>{(!fn(h.x)||!fn(h.y))&&e.push(`supports[${f}]: invalid x/y`),(typeof h.fixedX!="boolean"||typeof h.fixedY!="boolean")&&e.push(`supports[${f}]: fixedX/fixedY must be boolean`)}),zo(i.loadCases??[],"loadCases",e);let c=new Set([...(i.rectangles??[]).map(h=>h.name??""),...(i.polygons??[]).map(h=>h.name??"")]);return(i.loadCases??[]).forEach((h,f)=>{(h.pointLoads??[]).forEach((d,g)=>{(!fn(d.x)||!fn(d.y))&&e.push(`loadCases[${f}].pointLoads[${g}]: invalid x/y`),(!fn(d.fx)||!fn(d.fy))&&e.push(`loadCases[${f}].pointLoads[${g}]: invalid fx/fy`)}),(h.distributedLoads??[]).forEach((d,g)=>{c.has(d.geometryName)||e.push(`loadCases[${f}].distributedLoads[${g}]: geometryName "${d.geometryName}" not found`),(!fn(d.fx)||!fn(d.fy))&&e.push(`loadCases[${f}].distributedLoads[${g}]: invalid fx/fy`)})}),{valid:e.length===0,errors:e,warnings:t}}function Zd(i,e){let t=Array.isArray(i)?[...i]:ye({},i);for(let n in i){if(e[n]===void 0||e[n]===null){t[n]=i[n];continue}typeof i[n]=="object"&&!Array.isArray(i[n])&&typeof e[n]=="object"?t[n]=Zd(i[n],e[n]):t[n]=e[n]}return t}var ev=class i{store=An(Z0);membraneMessageService=An(qc);view3DService=An(nh);triangulationService=An(rh);geometry;geometryUuid=tc();constructor(){this.membraneMessageService.geometryChanged.pipe(ca(e=>ag(this.createMesh(e)))).subscribe()}createMesh(e){return yi(this,null,function*(){if(this.store.resetCalculations(),typeof Worker>"u")return console.error("Web Workers are not supported in this environment."),Promise.reject("Web Workers are not supported in this environment.");if(this.geometryUuid=tc(),ku(e.meshingConfiguration.maxMeshArea,0))return Promise.resolve();let t=K0(e,this.geometryUuid),n=yield this.triangulationService.triangulate(t);if(n.uuid!==this.geometryUuid)return Promise.resolve();this.view3DService.resetView();let s=new Worker(new URL("worker-HFLDYMOS.js",import.meta.url),{type:"module"});s.postMessage({geometry:e,uuid:this.geometryUuid,baseTriangles:n.triangles});let c=yield new Promise(u=>{s.onmessage=({data:h})=>{let f=h;if(f.uuid!==this.geometryUuid){u(null);return}this.geometry=e,u(f)}});if(s.terminate(),!(!c||c.uuid!==this.geometryUuid))try{yield this.view3DService.setFinished(this.geometryUuid,this.geometry?.loadCases.map(u=>u.name)??[],[])}catch(u){if(u instanceof es)return;throw u}})}solve(){return yi(this,null,function*(){if(typeof Worker>"u")return console.error("Web Workers are not supported in this environment."),Promise.reject("Web Workers are not supported in this environment.");this.store.setCalculationUuid(tc()),this.membraneMessageService.showStartingCalculationMessage();let e=new Worker(new URL("worker-3U6ELGBP.js",import.meta.url),{type:"module"});e.postMessage({geometry:this.geometry,geometryUuid:this.geometryUuid,solverUuid:this.store.calculationUuid()});let n=yield new Promise((s,a)=>{e.onmessage=({data:c})=>{let u=c;u.geometryUuid!==this.geometryUuid||u.solverUuid!==this.store.calculationUuid()?s(null):u.resultType==="Progress"&&u.progress?this.store.setProgress({message:u.progress.message,subMessage:u.progress.subMessage,progressValue:u.progress.progressValue}):u.resultType==="Finished"?s(u):u.resultType==="Error"&&(this.store.setErrors(u.errorMessage??"An error occurred during solving the membrane model."),this.membraneMessageService.showCalculationErrorMessage(u.errorMessage),a("An error occurred during solving the membrane model."))}});e.onmessage=null,e.terminate(),!(!n||n.geometryUuid!==this.geometryUuid||n.solverUuid!==this.store.calculationUuid())&&(yield this.view3DService.setFinished(this.store.calculationUuid(),n.loadCases??[],["sxx","sxy","syy"]))})}updateGeometry(e){try{let t=Zd(G0,e),n=j0(t);n.valid?(this.membraneMessageService.updateGeometry(e),this.store.setErrors()):this.store.setErrors(...n.errors)}catch(t){this.store.setErrors(`Parsing Error: ${t.message}`);return}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Si({token:i,factory:i.\u0275fac})};export{qc as a,Yw as b,$w as c,Za as d,st as e,_r as f,$ as g,yo as h,yt as i,Kn as j,qf as k,ki as l,$f as m,Jf as n,Kf as o,Qf as p,n0 as q,VL as r,Qu as s,ju as t,A0 as u,u0 as v,es as w,Bd as x,nh as y,ja as z,H0 as A,rh as B,k0 as C,X0 as D,q0 as E,Z0 as F,ev as G};
