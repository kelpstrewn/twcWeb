/*! For license information please see 754.73252cc0.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[754],{6050:(e,t)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const s=window,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;let o=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const s=void 0!==t&&1===t.length;s&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(t,e))}return e}toString(){return this.cssText}};const a=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,n))(t)})(e):e;var l;const c=window,h=c.trustedTypes,d=h?h.emptyScript:"",u=c.reactiveElementPolyfillSupport,m={toAttribute(e,t){switch(t){case Boolean:e=e?d:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},p=(e,t)=>t!==e&&(t==t||e==e),g={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:p},v="finalized";let _=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,s)=>{const i=this._$Ep(s,t);void 0!==i&&(this._$Ev.set(i,s),e.push(i))})),e}static createProperty(e,t=g){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,s,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdate(e,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||g}static finalize(){if(this.hasOwnProperty(v))return!1;this[v]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of t)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Ep(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,s;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(s=e.hostConnected)||void 0===s||s.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{i?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const i=document.createElement("style"),n=s.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=t.cssText,e.appendChild(i)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t,s=g){var i;const n=this.constructor._$Ep(e,s);if(void 0!==n&&!0===s.reflect){const r=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:m).toAttribute(t,s.type);this._$El=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(e,t){var s;const i=this.constructor,n=i._$Ev.get(e);if(void 0!==n&&this._$El!==n){const e=i.getPropertyOptions(n),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(s=e.converter)||void 0===s?void 0:s.fromAttribute)?e.converter:m;this._$El=n,this[n]=r.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,s){let i=!0;void 0!==e&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||p)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(s)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};var f;_[v]=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:_}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.2");const $=window,E=$.trustedTypes,y=E?E.createPolicy("lit-html",{createHTML:e=>e}):void 0,b="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,S="?"+A,C=`<${S}>`,w=document,P=()=>w.createComment(""),N=e=>null===e||"object"!=typeof e&&"function"!=typeof e,k=Array.isArray,U="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,O=/>/g,R=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),x=/'/g,M=/"/g,L=/^(?:script|style|textarea|title)$/i,H=(D=1,(e,...t)=>({_$litType$:D,strings:e,values:t})),G=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),W=new WeakMap,B=w.createTreeWalker(w,129,null,!1);var D;class F{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,r=0;const o=e.length-1,a=this.parts,[l,c]=((e,t)=>{const s=e.length-1,i=[];let n,r=2===t?"<svg>":"",o=I;for(let l=0;l<s;l++){const t=e[l];let s,a,c=-1,h=0;for(;h<t.length&&(o.lastIndex=h,a=o.exec(t),null!==a);)h=o.lastIndex,o===I?"!--"===a[1]?o=T:void 0!==a[1]?o=O:void 0!==a[2]?(L.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=R):void 0!==a[3]&&(o=R):o===R?">"===a[0]?(o=n??I,c=-1):void 0===a[1]?c=-2:(c=o.lastIndex-a[2].length,s=a[1],o=void 0===a[3]?R:'"'===a[3]?M:x):o===M||o===x?o=R:o===T||o===O?o=I:(o=R,n=void 0);const d=o===R&&e[l+1].startsWith("/>")?" ":"";r+=o===I?t+C:c>=0?(i.push(s),t.slice(0,c)+b+t.slice(c)+A+d):t+A+(-2===c?(i.push(void 0),l):d)}const a=r+(e[s]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(a):a,i]})(e,t);if(this.el=F.createElement(l,s),B.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=B.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith(b)||t.startsWith(A)){const s=c[r++];if(e.push(t),void 0!==s){const e=i.getAttribute(s.toLowerCase()+b).split(A),t=/([.?@])?(.*)/.exec(s);a.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?K:"?"===t[1]?Y:"@"===t[1]?J:V})}else a.push({type:6,index:n})}for(const t of e)i.removeAttribute(t)}if(L.test(i.tagName)){const e=i.textContent.split(A),t=e.length-1;if(t>0){i.textContent=E?E.emptyScript:"";for(let s=0;s<t;s++)i.append(e[s],P()),B.nextNode(),a.push({type:2,index:++n});i.append(e[t],P())}}}else if(8===i.nodeType)if(i.data===S)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(A,e+1));)a.push({type:7,index:n}),e+=A.length-1}n++}}static createElement(e,t){const s=w.createElement("template");return s.innerHTML=e,s}}function j(e,t,s=e,i){var n,r,o,a;if(t===G)return t;let l=void 0!==i?null===(n=s._$Co)||void 0===n?void 0:n[i]:s._$Cl;const c=N(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,s,i)),void 0!==i?(null!==(o=(a=s)._$Co)&&void 0!==o?o:a._$Co=[])[i]=l:s._$Cl=l),void 0!==l&&(t=j(e,l._$AS(e,t.values),l,i)),t}class z{constructor(e,t,s,i){var n;this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cp=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=j(this,e,t),N(e)?e===Z||null==e||""===e?(this._$AH!==Z&&this._$AR(),this._$AH=Z):e!==this._$AH&&e!==G&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>k(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Z&&N(this._$AH)?this._$AA.nextSibling.data=e:this.$(w.createTextNode(e)),this._$AH=e}g(e){var t;const{values:s,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=F.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.v(s);else{const e=new class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:s},parts:i}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:w).importNode(s,!0);B.currentNode=n;let r=B.nextNode(),o=0,a=0,l=i[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new z(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new Q(r,this,e)),this._$AV.push(t),l=i[++a]}o!==(null==l?void 0:l.index)&&(r=B.nextNode(),o++)}return B.currentNode=w,n}v(e){let t=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}(n,this),t=e.u(this.options);e.v(s),this.$(t),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return void 0===t&&W.set(e.strings,t=new F(e)),t}T(e){k(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new z(this.k(P()),this.k(P()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class V{constructor(e,t,s,i,n){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,i){const n=this.strings;let r=!1;if(void 0===n)e=j(this,e,t,0),r=!N(e)||e!==this._$AH&&e!==G,r&&(this._$AH=e);else{const i=e;let o,a;for(e=n[0],o=0;o<n.length-1;o++)a=j(this,i[s+o],t,o),a===G&&(a=this._$AH[o]),r||(r=!N(a)||a!==this._$AH[o]),a===Z?e=Z:e!==Z&&(e+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!i&&this.j(e)}j(e){e===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class K extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Z?void 0:e}}const q=E?E.emptyScript:"";class Y extends V{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Z?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class J extends V{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){var s;if((e=null!==(s=j(this,e,t,0))&&void 0!==s?s:Z)===G)return;const i=this._$AH,n=e===Z&&i!==Z||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==Z&&(i===Z||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==s?s:this.element,e):this._$AH.handleEvent(e)}}class Q{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){j(this,e)}}const X=$.litHtmlPolyfillSupport;null==X||X(F,z),(null!==(f=$.litHtmlVersions)&&void 0!==f?f:$.litHtmlVersions=[]).push("2.7.4");var ee,te;let se=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,s)=>{var i,n;const r=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:t;let o=r._$litPart$;if(void 0===o){const e=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new z(t.insertBefore(P(),e),e,void 0,s??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return G}};se.finalized=!0,se._$litElement$=!0,null===(ee=globalThis.litElementHydrateSupport)||void 0===ee||ee.call(globalThis,{LitElement:se});const ie=globalThis.litElementPolyfillSupport;null==ie||ie({LitElement:se}),(null!==(te=globalThis.litElementVersions)&&void 0!==te?te:globalThis.litElementVersions=[]).push("3.3.2");const ne=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(s){s.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}};function re(e){return(t,s)=>void 0!==s?((e,t,s)=>{t.constructor.createProperty(s,e)})(e,t,s):ne(e,t)}var oe;null===(oe=window.HTMLSlotElement)||void 0===oe||oe.prototype.assignedElements;const ae=2;let le=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const ce=(e,t)=>{var s,i;const n=e._$AN;if(void 0===n)return!1;for(const r of n)null===(i=(s=r)._$AO)||void 0===i||i.call(s,t,!1),ce(r,t);return!0},he=e=>{let t,s;do{if(void 0===(t=e._$AM))break;s=t._$AN,s.delete(e),e=t}while(0===(null==s?void 0:s.size))},de=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(void 0===s)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),pe(t)}};function ue(e){void 0!==this._$AN?(he(this),this._$AM=e,de(this)):this._$AM=e}function me(e,t=!1,s=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(i))for(let r=s;r<i.length;r++)ce(i[r],!1),he(i[r]);else null!=i&&(ce(i,!1),he(i));else ce(this,e)}const pe=e=>{var t,s,i,n;e.type==ae&&(null!==(t=(i=e)._$AP)&&void 0!==t||(i._$AP=me),null!==(s=(n=e)._$AQ)&&void 0!==s||(n._$AQ=ue))};class ge extends le{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),de(this),this.isConnected=e._$AU}_$AO(e,t=!0){var s,i;e!==this.isConnected&&(this.isConnected=e,e?null===(s=this.reconnected)||void 0===s||s.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),t&&(ce(this,e),he(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class ve{}const _e=new WeakMap,fe=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends ge{render(e){return Z}update(e,[t]){var s;const i=t!==this.G;return i&&void 0!==this.G&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=t,this.ct=null===(s=e.options)||void 0===s?void 0:s.host,this.ot(this.lt=e.element)),Z}ot(e){var t;if("function"==typeof this.G){const s=null!==(t=this.ct)&&void 0!==t?t:globalThis;let i=_e.get(s);void 0===i&&(i=new WeakMap,_e.set(s,i)),void 0!==i.get(this.G)&&this.G.call(this.ct,void 0),i.set(this.G,e),void 0!==e&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t,s;return"function"==typeof this.G?null===(t=_e.get(null!==(e=this.ct)&&void 0!==e?e:globalThis))||void 0===t?void 0:t.get(this.G):null===(s=this.G)||void 0===s?void 0:s.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var $e=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,ye=(e,t,s,i)=>{for(var n,r=i>1?void 0:i?Ee(t,s):t,o=e.length-1;o>=0;o--)(n=e[o])&&(r=(i?n(t,s,r):n(r))||r);return i&&r&&$e(t,s,r),r};t.GiscusWidget=class extends se{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=new ve,this.messageEventHandler=this.handleMessageEvent.bind(this),this.hasLoaded=!1,this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var e;return null==(e=this._iframeRef)?void 0:e.value}get _host(){try{return new URL(this.host),this.host}catch{return this.GISCUS_DEFAULT_HOST}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(e){return`[giscus] An error occurred. Error message: "${e}".`}setupSession(){const e=location.href,t=new URL(e),s=localStorage.getItem(this.GISCUS_SESSION_KEY),i=t.searchParams.get("giscus")||"";if(this.__session="",i)return localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(i)),this.__session=i,t.searchParams.delete("giscus"),t.hash="",void history.replaceState(void 0,document.title,t.toString());if(s)try{this.__session=JSON.parse(s)}catch(n){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(null==n?void 0:n.message)} Session has been cleared.`)}}signOut(){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",this.update(new Map)}handleMessageEvent(e){if(e.origin!==this._host)return;const{data:t}=e;if("object"!=typeof t||!t.giscus)return;if(this.iframeRef&&t.giscus.resizeHeight&&(this.iframeRef.style.height=`${t.giscus.resizeHeight}px`),t.giscus.signOut)return console.log("[giscus] User has logged out. Session has been cleared."),void this.signOut();if(!t.giscus.error)return;const s=t.giscus.error;if(s.includes("Bad credentials")||s.includes("Invalid state value")||s.includes("State has expired")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY))return console.warn(`${this._formatError(s)} Session has been cleared.`),void this.signOut();console.error(`${this._formatError(s)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}s.includes("Discussion not found")?console.warn(`[giscus] ${s}. A new discussion will be created if a comment/reaction is submitted.`):console.error(`${this._formatError(s)} ${this.ERROR_SUGGESTION}`)}sendMessage(e){!this.iframeRef||!this.iframeRef.contentWindow||!this.hasLoaded||(console.log({host:this.host,_host:this._host}),this.iframeRef.contentWindow.postMessage({giscus:e},this._host))}updateConfig(){const e={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(e)}firstUpdated(){var e;null==(e=this.iframeRef)||e.addEventListener("load",(()=>{var e;null==(e=this.iframeRef)||e.classList.remove("loading"),this.hasLoaded=!0,this.updateConfig()}))}requestUpdate(e,t,s){this.hasUpdated&&"host"!==e?this.updateConfig():super.requestUpdate(e,t,s)}getMetaContent(e,t=!1){const s=t?`meta[property='og:${e}'],`:"",i=document.querySelector(s+`meta[name='${e}']`);return i?i.content:""}_getCleanedUrl(){const e=new URL(location.href);return e.searchParams.delete("giscus"),e.hash="",e}getTerm(){switch(this.mapping){case"url":return`${this._getCleanedUrl()}`;case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term||"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return"number"===this.mapping&&this.term||""}getIframeSrc(){const e=this._getCleanedUrl().toString(),t=`${e}${this.id?"#"+this.id:""}`,s=this.getMetaContent("description",!0),i=this.getMetaContent("giscus:backlink")||e,n={origin:t,session:this.__session,repo:this.repo,repoId:this.repoId||"",category:this.category||"",categoryId:this.categoryId||"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:s,backLink:i};return`${this._host}${this.lang?`/${this.lang}`:""}/widget?${new URLSearchParams(n)}`}render(){return H`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${fe(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}},t.GiscusWidget.styles=((e,...t)=>{const s=1===e.length?e[0]:t.reduce(((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1]),e[0]);return new o(s,e,n)})`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `,ye([re({reflect:!0})],t.GiscusWidget.prototype,"host",2),ye([re({reflect:!0})],t.GiscusWidget.prototype,"repo",2),ye([re({reflect:!0})],t.GiscusWidget.prototype,"repoId",2),ye([re({reflect:!0})],t.GiscusWidget.prototype,"category",2),ye([re({reflect:!0})],t.GiscusWidget.prototype,"categoryId",2),ye([re({reflect:!0})],t.GiscusWidget.prototype,"mapping",2),ye([re({reflect:!0})],t.GiscusWidget.prototype,"term",2),ye([re({reflect:!0})],t.GiscusWidget.prototype,"strict",2),ye([re({reflect:!0})],t.GiscusWidget.prototype,"reactionsEnabled",2),ye([re({reflect:!0})],t.GiscusWidget.prototype,"emitMetadata",2),ye([re({reflect:!0})],t.GiscusWidget.prototype,"inputPosition",2),ye([re({reflect:!0})],t.GiscusWidget.prototype,"theme",2),ye([re({reflect:!0})],t.GiscusWidget.prototype,"lang",2),ye([re({reflect:!0})],t.GiscusWidget.prototype,"loading",2),t.GiscusWidget=ye([function(e){return customElements.get(e)?e=>e:(e=>t=>{return"function"==typeof t?(s=e,i=t,customElements.define(s,i),i):((e,t)=>{const{kind:s,elements:i}=t;return{kind:s,elements:i,finisher(t){customElements.define(e,t)}}})(e,t);var s,i})(e)}("giscus-widget")],t.GiscusWidget)},8071:(e,t,s)=>{const i=s(5893),n=s(7294);e.exports=function({id:e,host:t,repo:r,repoId:o,category:a,categoryId:l,mapping:c,term:h,strict:d,reactionsEnabled:u,emitMetadata:m,inputPosition:p,theme:g,lang:v,loading:_}){const[f,$]=n.useState(!1);return n.useEffect((()=>{f||(Promise.resolve().then((()=>s(6050))),$(!0))}),[]),f?i.jsx("giscus-widget",{id:e,host:t,repo:r,repoid:o,category:a,categoryid:l,mapping:c,term:h,strict:d,reactionsenabled:u,emitmetadata:m,inputposition:p,theme:g,lang:v,loading:_}):null}},9058:(e,t,s)=>{s.d(t,{Z:()=>g});var i=s(7294),n=s(6010),r=s(7961),o=s(7524),a=s(9960),l=s(5999);const c={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function h(e){let{sidebar:t}=e;return i.createElement("aside",{className:"col col--3"},i.createElement("nav",{className:(0,n.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,l.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},i.createElement("div",{className:(0,n.Z)(c.sidebarItemTitle,"margin-bottom--md")},t.title),i.createElement("ul",{className:(0,n.Z)(c.sidebarItemList,"clean-list")},t.items.map((e=>i.createElement("li",{key:e.permalink,className:c.sidebarItem},i.createElement(a.Z,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title)))))))}var d=s(3102);function u(e){let{sidebar:t}=e;return i.createElement("ul",{className:"menu__list"},t.items.map((e=>i.createElement("li",{key:e.permalink,className:"menu__list-item"},i.createElement(a.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function m(e){return i.createElement(d.Zo,{component:u,props:e})}function p(e){let{sidebar:t}=e;const s=(0,o.i)();return t?.items.length?"mobile"===s?i.createElement(m,{sidebar:t}):i.createElement(h,{sidebar:t}):null}function g(e){const{sidebar:t,toc:s,children:o,...a}=e,l=t&&t.items.length>0;return i.createElement(r.Z,a,i.createElement("div",{className:"container margin-vert--lg"},i.createElement("div",{className:"row"},i.createElement(p,{sidebar:t}),i.createElement("main",{className:(0,n.Z)("col",{"col--7":l,"col--9 col--offset-1":!l}),itemScope:!0,itemType:"http://schema.org/Blog"},o),s&&i.createElement("div",{className:"col col--2"},s))))}},756:(e,t,s)=>{s.d(t,{Z:()=>H});var i=s(7294),n=s(6010),r=s(9460),o=s(4996);function a(e){let{children:t,className:s}=e;const{frontMatter:n,assets:a}=(0,r.C)(),{withBaseUrl:l}=(0,o.C)(),c=a.image??n.image;return i.createElement("article",{className:s,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&i.createElement("meta",{itemProp:"image",content:l(c,{absolute:!0})}),t)}var l=s(9960);const c={title:"title_f1Hy"};function h(e){let{className:t}=e;const{metadata:s,isBlogPostPage:o}=(0,r.C)(),{permalink:a,title:h}=s,d=o?"h1":"h2";return i.createElement(d,{className:(0,n.Z)(c.title,t),itemProp:"headline"},o?h:i.createElement(l.Z,{itemProp:"url",to:a},h))}var d=s(5999),u=s(2263);const m=["zero","one","two","few","many","other"];function p(e){return m.filter((t=>e.includes(t)))}const g={locale:"en",pluralForms:p(["one","other"]),select:e=>1===e?"one":"other"};function v(){const{i18n:{currentLocale:e}}=(0,u.Z)();return(0,i.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:p(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),g}}),[e])}function _(){const e=v();return{selectMessage:(t,s)=>function(e,t,s){const i=e.split("|");if(1===i.length)return i[0];i.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);const n=s.select(t),r=s.pluralForms.indexOf(n);return i[Math.min(r,i.length-1)]}(s,t,e)}}const f={container:"container_mt6G"};function $(e){let{readingTime:t}=e;const s=function(){const{selectMessage:e}=_();return t=>{const s=Math.ceil(t);return e(s,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return i.createElement(i.Fragment,null,s(t))}function E(e){let{date:t,formattedDate:s}=e;return i.createElement("time",{dateTime:t,itemProp:"datePublished"},s)}function y(){return i.createElement(i.Fragment,null," \xb7 ")}function b(e){let{className:t}=e;const{metadata:s}=(0,r.C)(),{date:o,formattedDate:a,readingTime:l}=s;return i.createElement("div",{className:(0,n.Z)(f.container,"margin-vert--md",t)},i.createElement(E,{date:o,formattedDate:a}),void 0!==l&&i.createElement(i.Fragment,null,i.createElement(y,null),i.createElement($,{readingTime:l})))}function A(e){return e.href?i.createElement(l.Z,e):i.createElement(i.Fragment,null,e.children)}function S(e){let{author:t,className:s}=e;const{name:r,title:o,url:a,imageURL:l,email:c}=t,h=a||c&&`mailto:${c}`||void 0;return i.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",s)},l&&i.createElement(A,{href:h,className:"avatar__photo-link"},i.createElement("img",{className:"avatar__photo",src:l,alt:r})),r&&i.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},i.createElement("div",{className:"avatar__name"},i.createElement(A,{href:h,itemProp:"url"},i.createElement("span",{itemProp:"name"},r))),o&&i.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const C={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function w(e){let{className:t}=e;const{metadata:{authors:s},assets:o}=(0,r.C)();if(0===s.length)return null;const a=s.every((e=>{let{name:t}=e;return!t}));return i.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",a?C.imageOnlyAuthorRow:"row",t)},s.map(((e,t)=>i.createElement("div",{className:(0,n.Z)(!a&&"col col--6",a?C.imageOnlyAuthorCol:C.authorCol),key:t},i.createElement(S,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function P(){return i.createElement("header",null,i.createElement(h,null),i.createElement(b,null),i.createElement(w,null))}var N=s(8780),k=s(1506);function U(e){let{children:t,className:s}=e;const{isBlogPostPage:o}=(0,r.C)();return i.createElement("div",{id:o?N.blogPostContainerID:void 0,className:(0,n.Z)("markdown",s),itemProp:"articleBody"},i.createElement(k.Z,null,t))}var I=s(4881),T=s(6233),O=s(7462);function R(){return i.createElement("b",null,i.createElement(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function x(e){const{blogPostTitle:t,...s}=e;return i.createElement(l.Z,(0,O.Z)({"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},s),i.createElement(R,null))}const M={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function L(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:s,title:o,editUrl:a,hasTruncateMarker:l}=e,c=!t&&l,h=s.length>0;return h||c||a?i.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&M.blogPostFooterDetailsFull)},h&&i.createElement("div",{className:(0,n.Z)("col",{"col--9":c})},i.createElement(T.Z,{tags:s})),t&&a&&i.createElement("div",{className:"col margin-top--sm"},i.createElement(I.Z,{editUrl:a})),c&&i.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":h})},i.createElement(x,{blogPostTitle:o,to:e.permalink}))):null}function H(e){let{children:t,className:s}=e;const o=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return i.createElement(a,{className:(0,n.Z)(o,s)},i.createElement(P,null),i.createElement(U,null,t),i.createElement(L,null))}},4881:(e,t,s)=>{s.d(t,{Z:()=>h});var i=s(7294),n=s(5999),r=s(5281),o=s(7462),a=s(6010);const l={iconEdit:"iconEdit_Z9Sw"};function c(e){let{className:t,...s}=e;return i.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,a.Z)(l.iconEdit,t),"aria-hidden":"true"},s),i.createElement("g",null,i.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function h(e){let{editUrl:t}=e;return i.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},i.createElement(c,null),i.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2244:(e,t,s)=>{s.d(t,{Z:()=>o});var i=s(7294),n=s(6010),r=s(9960);function o(e){const{permalink:t,title:s,subLabel:o,isNext:a}=e;return i.createElement(r.Z,{className:(0,n.Z)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&i.createElement("div",{className:"pagination-nav__sublabel"},o),i.createElement("div",{className:"pagination-nav__label"},s))}},6233:(e,t,s)=>{s.d(t,{Z:()=>h});var i=s(7294),n=s(6010),r=s(5999),o=s(9960);const a={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function l(e){let{permalink:t,label:s,count:r}=e;return i.createElement(o.Z,{href:t,className:(0,n.Z)(a.tag,r?a.tagWithCount:a.tagRegular)},s,r&&i.createElement("span",null,r))}const c={tags:"tags_jXut",tag:"tag_QGVx"};function h(e){let{tags:t}=e;return i.createElement(i.Fragment,null,i.createElement("b",null,i.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),i.createElement("ul",{className:(0,n.Z)(c.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:s}=e;return i.createElement("li",{key:s,className:c.tag},i.createElement(l,{label:t,permalink:s}))}))))}},9460:(e,t,s)=>{s.d(t,{C:()=>a,n:()=>o});var i=s(7294),n=s(902);const r=i.createContext(null);function o(e){let{children:t,content:s,isBlogPostPage:n=!1}=e;const o=function(e){let{content:t,isBlogPostPage:s}=e;return(0,i.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:s})),[t,s])}({content:s,isBlogPostPage:n});return i.createElement(r.Provider,{value:o},t)}function a(){const e=(0,i.useContext)(r);if(null===e)throw new n.i6("BlogPostProvider");return e}},5251:(e,t,s)=>{s(7418);var i=s(7294),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;n=r("react.element"),t.Fragment=r("react.fragment")}var o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var i,r={},c=null,h=null;for(i in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(h=t.ref),t)a.call(t,i)&&!l.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:n,type:e,key:c,ref:h,props:r,_owner:o.current}}t.jsx=c,t.jsxs=c},5893:(e,t,s)=>{e.exports=s(5251)},9861:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s(8071)}}]);