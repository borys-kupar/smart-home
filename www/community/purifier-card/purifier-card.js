/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const A="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,C=(A,C,I=null)=>{for(;C!==I;){const I=C.nextSibling;A.removeChild(C),C=I}},I=`{{lit-${String(Math.random()).slice(2)}}}`,E=`\x3c!--${I}--\x3e`,g=new RegExp(`${I}|${E}`);class Q{constructor(A,C){this.parts=[],this.element=C;const E=[],Q=[],M=document.createTreeWalker(C.content,133,null,!1);let h=0,Y=-1,o=0;const{strings:F,values:{length:D}}=A;for(;o<D;){const A=M.nextNode();if(null!==A){if(Y++,1===A.nodeType){if(A.hasAttributes()){const C=A.attributes,{length:I}=C;let E=0;for(let A=0;A<I;A++)B(C[A].name,"$lit$")&&E++;for(;E-- >0;){const C=F[o],I=w.exec(C)[2],E=I.toLowerCase()+"$lit$",Q=A.getAttribute(E);A.removeAttribute(E);const B=Q.split(g);this.parts.push({type:"attribute",index:Y,name:I,strings:B}),o+=B.length-1}}"TEMPLATE"===A.tagName&&(Q.push(A),M.currentNode=A.content)}else if(3===A.nodeType){const C=A.data;if(C.indexOf(I)>=0){const I=A.parentNode,Q=C.split(g),M=Q.length-1;for(let C=0;C<M;C++){let E,g=Q[C];if(""===g)E=i();else{const A=w.exec(g);null!==A&&B(A[2],"$lit$")&&(g=g.slice(0,A.index)+A[1]+A[2].slice(0,-"$lit$".length)+A[3]),E=document.createTextNode(g)}I.insertBefore(E,A),this.parts.push({type:"node",index:++Y})}""===Q[M]?(I.insertBefore(i(),A),E.push(A)):A.data=Q[M],o+=M}}else if(8===A.nodeType)if(A.data===I){const C=A.parentNode;null!==A.previousSibling&&Y!==h||(Y++,C.insertBefore(i(),A)),h=Y,this.parts.push({type:"node",index:Y}),null===A.nextSibling?A.data="":(E.push(A),Y--),o++}else{let C=-1;for(;-1!==(C=A.data.indexOf(I,C+1));)this.parts.push({type:"node",index:-1}),o++}}else M.currentNode=Q.pop()}for(const A of E)A.parentNode.removeChild(A)}}const B=(A,C)=>{const I=A.length-C.length;return I>=0&&A.slice(I)===C},M=A=>-1!==A.index,i=()=>document.createComment(""),w=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(A,C){const{element:{content:I},parts:E}=A,g=document.createTreeWalker(I,133,null,!1);let Q=o(E),B=E[Q],M=-1,i=0;const w=[];let h=null;for(;g.nextNode();){M++;const A=g.currentNode;for(A.previousSibling===h&&(h=null),C.has(A)&&(w.push(A),null===h&&(h=A)),null!==h&&i++;void 0!==B&&B.index===M;)B.index=null!==h?-1:B.index-i,Q=o(E,Q),B=E[Q]}w.forEach((A=>A.parentNode.removeChild(A)))}const Y=A=>{let C=11===A.nodeType?0:1;const I=document.createTreeWalker(A,133,null,!1);for(;I.nextNode();)C++;return C},o=(A,C=-1)=>{for(let I=C+1;I<A.length;I++){const C=A[I];if(M(C))return I}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const F=new WeakMap,D=A=>"function"==typeof A&&F.has(A),K={},G={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class U{constructor(A,C,I){this.__parts=[],this.template=A,this.processor=C,this.options=I}update(A){let C=0;for(const I of this.__parts)void 0!==I&&I.setValue(A[C]),C++;for(const A of this.__parts)void 0!==A&&A.commit()}_clone(){const C=A?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),I=[],E=this.template.parts,g=document.createTreeWalker(C,133,null,!1);let Q,B=0,i=0,w=g.nextNode();for(;B<E.length;)if(Q=E[B],M(Q)){for(;i<Q.index;)i++,"TEMPLATE"===w.nodeName&&(I.push(w),g.currentNode=w.content),null===(w=g.nextNode())&&(g.currentNode=I.pop(),w=g.nextNode());if("node"===Q.type){const A=this.processor.handleTextExpression(this.options);A.insertAfterNode(w.previousSibling),this.__parts.push(A)}else this.__parts.push(...this.processor.handleAttributeExpressions(w,Q.name,Q.strings,this.options));B++}else this.__parts.push(void 0),B++;return A&&(document.adoptNode(C),customElements.upgrade(C)),C}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const R=` ${I} `;class S{constructor(A,C,I,E){this.strings=A,this.values=C,this.type=I,this.processor=E}getHTML(){const A=this.strings.length-1;let C="",g=!1;for(let Q=0;Q<A;Q++){const A=this.strings[Q],B=A.lastIndexOf("\x3c!--");g=(B>-1||g)&&-1===A.indexOf("--\x3e",B+1);const M=w.exec(A);C+=null===M?A+(g?R:E):A.substr(0,M.index)+M[1]+M[2]+"$lit$"+M[3]+I}return C+=this.strings[A],C}getTemplateElement(){const A=document.createElement("template");return A.innerHTML=this.getHTML(),A}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const J=A=>null===A||!("object"==typeof A||"function"==typeof A),k=A=>Array.isArray(A)||!(!A||!A[Symbol.iterator]);class c{constructor(A,C,I){this.dirty=!0,this.element=A,this.name=C,this.strings=I,this.parts=[];for(let A=0;A<I.length-1;A++)this.parts[A]=this._createPart()}_createPart(){return new L(this)}_getValue(){const A=this.strings,C=A.length-1;let I="";for(let E=0;E<C;E++){I+=A[E];const C=this.parts[E];if(void 0!==C){const A=C.value;if(J(A)||!k(A))I+="string"==typeof A?A:String(A);else for(const C of A)I+="string"==typeof C?C:String(C)}}return I+=A[C],I}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class L{constructor(A){this.value=void 0,this.committer=A}setValue(A){A===K||J(A)&&A===this.value||(this.value=A,D(A)||(this.committer.dirty=!0))}commit(){for(;D(this.value);){const A=this.value;this.value=K,A(this)}this.value!==K&&this.committer.commit()}}class s{constructor(A){this.value=void 0,this.__pendingValue=void 0,this.options=A}appendInto(A){this.startNode=A.appendChild(i()),this.endNode=A.appendChild(i())}insertAfterNode(A){this.startNode=A,this.endNode=A.nextSibling}appendIntoPart(A){A.__insert(this.startNode=i()),A.__insert(this.endNode=i())}insertAfterPart(A){A.__insert(this.startNode=i()),this.endNode=A.endNode,A.endNode=this.startNode}setValue(A){this.__pendingValue=A}commit(){if(null===this.startNode.parentNode)return;for(;D(this.__pendingValue);){const A=this.__pendingValue;this.__pendingValue=K,A(this)}const A=this.__pendingValue;A!==K&&(J(A)?A!==this.value&&this.__commitText(A):A instanceof S?this.__commitTemplateResult(A):A instanceof Node?this.__commitNode(A):k(A)?this.__commitIterable(A):A===G?(this.value=G,this.clear()):this.__commitText(A))}__insert(A){this.endNode.parentNode.insertBefore(A,this.endNode)}__commitNode(A){this.value!==A&&(this.clear(),this.__insert(A),this.value=A)}__commitText(A){const C=this.startNode.nextSibling,I="string"==typeof(A=null==A?"":A)?A:String(A);C===this.endNode.previousSibling&&3===C.nodeType?C.data=I:this.__commitNode(document.createTextNode(I)),this.value=A}__commitTemplateResult(A){const C=this.options.templateFactory(A);if(this.value instanceof U&&this.value.template===C)this.value.update(A.values);else{const I=new U(C,A.processor,this.options),E=I._clone();I.update(A.values),this.__commitNode(E),this.value=I}}__commitIterable(A){Array.isArray(this.value)||(this.value=[],this.clear());const C=this.value;let I,E=0;for(const g of A)I=C[E],void 0===I&&(I=new s(this.options),C.push(I),0===E?I.appendIntoPart(this):I.insertAfterPart(C[E-1])),I.setValue(g),I.commit(),E++;E<C.length&&(C.length=E,this.clear(I&&I.endNode))}clear(A=this.startNode){C(this.startNode.parentNode,A.nextSibling,this.endNode)}}class a{constructor(A,C,I){if(this.value=void 0,this.__pendingValue=void 0,2!==I.length||""!==I[0]||""!==I[1])throw new Error("Boolean attributes can only contain a single expression");this.element=A,this.name=C,this.strings=I}setValue(A){this.__pendingValue=A}commit(){for(;D(this.__pendingValue);){const A=this.__pendingValue;this.__pendingValue=K,A(this)}if(this.__pendingValue===K)return;const A=!!this.__pendingValue;this.value!==A&&(A?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=A),this.__pendingValue=K}}class x extends c{constructor(A,C,I){super(A,C,I),this.single=2===I.length&&""===I[0]&&""===I[1]}_createPart(){return new m(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class m extends L{}let V=!1;(()=>{try{const A={get capture(){return V=!0,!1}};window.addEventListener("test",A,A),window.removeEventListener("test",A,A)}catch(A){}})();class j{constructor(A,C,I){this.value=void 0,this.__pendingValue=void 0,this.element=A,this.eventName=C,this.eventContext=I,this.__boundHandleEvent=A=>this.handleEvent(A)}setValue(A){this.__pendingValue=A}commit(){for(;D(this.__pendingValue);){const A=this.__pendingValue;this.__pendingValue=K,A(this)}if(this.__pendingValue===K)return;const A=this.__pendingValue,C=this.value,I=null==A||null!=C&&(A.capture!==C.capture||A.once!==C.once||A.passive!==C.passive),E=null!=A&&(null==C||I);I&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),E&&(this.__options=u(A),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=A,this.__pendingValue=K}handleEvent(A){"function"==typeof this.value?this.value.call(this.eventContext||this.element,A):this.value.handleEvent(A)}}const u=A=>A&&(V?{capture:A.capture,passive:A.passive,once:A.once}:A.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function e(A){let C=q.get(A.type);void 0===C&&(C={stringsArray:new WeakMap,keyString:new Map},q.set(A.type,C));let E=C.stringsArray.get(A.strings);if(void 0!==E)return E;const g=A.strings.join(I);return E=C.keyString.get(g),void 0===E&&(E=new Q(A,A.getTemplateElement()),C.keyString.set(g,E)),C.stringsArray.set(A.strings,E),E}const q=new Map,l=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const p=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(A,C,I,E){const g=C[0];if("."===g){return new x(A,C.slice(1),I).parts}if("@"===g)return[new j(A,C.slice(1),E.eventContext)];if("?"===g)return[new a(A,C.slice(1),I)];return new c(A,C,I).parts}handleTextExpression(A){return new s(A)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const O=(A,...C)=>new S(A,C,"html",p)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,y=(A,C)=>`${A}--${C}`;let Z=!0;void 0===window.ShadyCSS?Z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Z=!1);const t=A=>C=>{const E=y(C.type,A);let g=q.get(E);void 0===g&&(g={stringsArray:new WeakMap,keyString:new Map},q.set(E,g));let B=g.stringsArray.get(C.strings);if(void 0!==B)return B;const M=C.strings.join(I);if(B=g.keyString.get(M),void 0===B){const I=C.getTemplateElement();Z&&window.ShadyCSS.prepareTemplateDom(I,A),B=new Q(C,I),g.keyString.set(M,B)}return g.stringsArray.set(C.strings,B),B},T=["html","svg"],W=new Set,r=(A,C,I)=>{W.add(A);const E=I?I.element:document.createElement("template"),g=C.querySelectorAll("style"),{length:Q}=g;if(0===Q)return void window.ShadyCSS.prepareTemplateStyles(E,A);const B=document.createElement("style");for(let A=0;A<Q;A++){const C=g[A];C.parentNode.removeChild(C),B.textContent+=C.textContent}(A=>{T.forEach((C=>{const I=q.get(y(C,A));void 0!==I&&I.keyString.forEach((A=>{const{element:{content:C}}=A,I=new Set;Array.from(C.querySelectorAll("style")).forEach((A=>{I.add(A)})),h(A,I)}))}))})(A);const M=E.content;I?function(A,C,I=null){const{element:{content:E},parts:g}=A;if(null==I)return void E.appendChild(C);const Q=document.createTreeWalker(E,133,null,!1);let B=o(g),M=0,i=-1;for(;Q.nextNode();)for(i++,Q.currentNode===I&&(M=Y(C),I.parentNode.insertBefore(C,I));-1!==B&&g[B].index===i;){if(M>0){for(;-1!==B;)g[B].index+=M,B=o(g,B);return}B=o(g,B)}}(I,B,M.firstChild):M.insertBefore(B,M.firstChild),window.ShadyCSS.prepareTemplateStyles(E,A);const i=M.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==i)C.insertBefore(i.cloneNode(!0),C.firstChild);else if(I){M.insertBefore(B,M.firstChild);const A=new Set;A.add(B),h(I,A)}};window.JSCompiler_renameProperty=(A,C)=>A;const H={toAttribute(A,C){switch(C){case Boolean:return A?"":null;case Object:case Array:return null==A?A:JSON.stringify(A)}return A},fromAttribute(A,C){switch(C){case Boolean:return null!==A;case Number:return null===A?null:Number(A);case Object:case Array:return JSON.parse(A)}return A}},z=(A,C)=>C!==A&&(C==C||A==A),n={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:z};class N extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise((A=>this._enableUpdatingResolver=A)),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const A=[];return this._classProperties.forEach(((C,I)=>{const E=this._attributeNameForProperty(I,C);void 0!==E&&(this._attributeToPropertyMap.set(E,I),A.push(E))})),A}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const A=Object.getPrototypeOf(this)._classProperties;void 0!==A&&A.forEach(((A,C)=>this._classProperties.set(C,A)))}}static createProperty(A,C=n){if(this._ensureClassProperties(),this._classProperties.set(A,C),C.noAccessor||this.prototype.hasOwnProperty(A))return;const I="symbol"==typeof A?Symbol():"__"+A,E=this.getPropertyDescriptor(A,I,C);void 0!==E&&Object.defineProperty(this.prototype,A,E)}static getPropertyDescriptor(A,C,I){return{get(){return this[C]},set(I){const E=this[A];this[C]=I,this._requestUpdate(A,E)},configurable:!0,enumerable:!0}}static getPropertyOptions(A){return this._classProperties&&this._classProperties.get(A)||n}static finalize(){const A=Object.getPrototypeOf(this);if(A.hasOwnProperty("finalized")||A.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const A=this.properties,C=[...Object.getOwnPropertyNames(A),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(A):[]];for(const I of C)this.createProperty(I,A[I])}}static _attributeNameForProperty(A,C){const I=C.attribute;return!1===I?void 0:"string"==typeof I?I:"string"==typeof A?A.toLowerCase():void 0}static _valueHasChanged(A,C,I=z){return I(A,C)}static _propertyValueFromAttribute(A,C){const I=C.type,E=C.converter||H,g="function"==typeof E?E:E.fromAttribute;return g?g(A,I):A}static _propertyValueToAttribute(A,C){if(void 0===C.reflect)return;const I=C.type,E=C.converter;return(E&&E.toAttribute||H.toAttribute)(A,I)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((A,C)=>{if(this.hasOwnProperty(C)){const A=this[C];delete this[C],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(C,A)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((A,C)=>this[C]=A)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(A,C,I){C!==I&&this._attributeToProperty(A,I)}_propertyToAttribute(A,C,I=n){const E=this.constructor,g=E._attributeNameForProperty(A,I);if(void 0!==g){const A=E._propertyValueToAttribute(C,I);if(void 0===A)return;this._updateState=8|this._updateState,null==A?this.removeAttribute(g):this.setAttribute(g,A),this._updateState=-9&this._updateState}}_attributeToProperty(A,C){if(8&this._updateState)return;const I=this.constructor,E=I._attributeToPropertyMap.get(A);if(void 0!==E){const A=I.getPropertyOptions(E);this._updateState=16|this._updateState,this[E]=I._propertyValueFromAttribute(C,A),this._updateState=-17&this._updateState}}_requestUpdate(A,C){let I=!0;if(void 0!==A){const E=this.constructor,g=E.getPropertyOptions(A);E._valueHasChanged(this[A],C,g.hasChanged)?(this._changedProperties.has(A)||this._changedProperties.set(A,C),!0!==g.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(A,g))):I=!1}!this._hasRequestedUpdate&&I&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(A,C){return this._requestUpdate(A,C),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(A){}const A=this.performUpdate();return null!=A&&await A,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let A=!1;const C=this._changedProperties;try{A=this.shouldUpdate(C),A?this.update(C):this._markUpdated()}catch(C){throw A=!1,this._markUpdated(),C}A&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(C)),this.updated(C))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(A){return!0}update(A){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((A,C)=>this._propertyToAttribute(C,this[C],A))),this._reflectingProperties=void 0),this._markUpdated()}updated(A){}firstUpdated(A){}}N.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const d="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol();class P{constructor(A,C){if(C!==X)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=A}get styleSheet(){return void 0===this._styleSheet&&(d?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const b=A=>new P(String(A),X),v=(A,...C)=>{const I=C.reduce(((C,I,E)=>C+(A=>{if(A instanceof P)return A.cssText;if("number"==typeof A)return A;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${A}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(I)+A[E+1]),A[0]);return new P(I,X)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const f={};class _ extends N{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const A=this.getStyles();if(void 0===A)this._styles=[];else if(Array.isArray(A)){const C=(A,I)=>A.reduceRight(((A,I)=>Array.isArray(I)?C(I,A):(A.add(I),A)),I),I=C(A,new Set),E=[];I.forEach((A=>E.unshift(A))),this._styles=E}else this._styles=[A]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const A=this.constructor._styles;0!==A.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?d?this.renderRoot.adoptedStyleSheets=A.map((A=>A.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(A.map((A=>A.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(A){const C=this.render();super.update(A),C!==f&&this.constructor.render(C,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((A=>{const C=document.createElement("style");C.textContent=A.cssText,this.renderRoot.appendChild(C)})))}render(){return f}}_.finalized=!0,_.render=(A,I,E)=>{if(!E||"object"!=typeof E||!E.scopeName)throw new Error("The `scopeName` option is required.");const g=E.scopeName,Q=l.has(I),B=Z&&11===I.nodeType&&!!I.host,M=B&&!W.has(g),i=M?document.createDocumentFragment():I;if(((A,I,E)=>{let g=l.get(I);void 0===g&&(C(I,I.firstChild),l.set(I,g=new s(Object.assign({templateFactory:e},E))),g.appendInto(I)),g.setValue(A),g.commit()})(A,i,Object.assign({templateFactory:t(g)},E)),M){const A=l.get(i);l.delete(i);const E=A.value instanceof U?A.value.template:void 0;r(g,i,E),C(I,I.firstChild),I.appendChild(i),l.set(I,A)}!Q&&B&&window.ShadyCSS.styleElement(I.host)};var $=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,AA="[^\\s]+",CA=/\[([^]*?)\]/gm;function IA(A,C){for(var I=[],E=0,g=A.length;E<g;E++)I.push(A[E].substr(0,C));return I}var EA=function(A){return function(C,I){var E=I[A].map((function(A){return A.toLowerCase()})).indexOf(C.toLowerCase());return E>-1?E:null}};function gA(A){for(var C=[],I=1;I<arguments.length;I++)C[I-1]=arguments[I];for(var E=0,g=C;E<g.length;E++){var Q=g[E];for(var B in Q)A[B]=Q[B]}return A}var QA=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],BA=["January","February","March","April","May","June","July","August","September","October","November","December"],MA=IA(BA,3),iA={dayNamesShort:IA(QA,3),dayNames:QA,monthNamesShort:MA,monthNames:BA,amPm:["am","pm"],DoFn:function(A){return A+["th","st","nd","rd"][A%10>3?0:(A-A%10!=10?1:0)*A%10]}},wA=gA({},iA),hA=function(A,C){for(void 0===C&&(C=2),A=String(A);A.length<C;)A="0"+A;return A},YA={D:function(A){return String(A.getDate())},DD:function(A){return hA(A.getDate())},Do:function(A,C){return C.DoFn(A.getDate())},d:function(A){return String(A.getDay())},dd:function(A){return hA(A.getDay())},ddd:function(A,C){return C.dayNamesShort[A.getDay()]},dddd:function(A,C){return C.dayNames[A.getDay()]},M:function(A){return String(A.getMonth()+1)},MM:function(A){return hA(A.getMonth()+1)},MMM:function(A,C){return C.monthNamesShort[A.getMonth()]},MMMM:function(A,C){return C.monthNames[A.getMonth()]},YY:function(A){return hA(String(A.getFullYear()),4).substr(2)},YYYY:function(A){return hA(A.getFullYear(),4)},h:function(A){return String(A.getHours()%12||12)},hh:function(A){return hA(A.getHours()%12||12)},H:function(A){return String(A.getHours())},HH:function(A){return hA(A.getHours())},m:function(A){return String(A.getMinutes())},mm:function(A){return hA(A.getMinutes())},s:function(A){return String(A.getSeconds())},ss:function(A){return hA(A.getSeconds())},S:function(A){return String(Math.round(A.getMilliseconds()/100))},SS:function(A){return hA(Math.round(A.getMilliseconds()/10),2)},SSS:function(A){return hA(A.getMilliseconds(),3)},a:function(A,C){return A.getHours()<12?C.amPm[0]:C.amPm[1]},A:function(A,C){return A.getHours()<12?C.amPm[0].toUpperCase():C.amPm[1].toUpperCase()},ZZ:function(A){var C=A.getTimezoneOffset();return(C>0?"-":"+")+hA(100*Math.floor(Math.abs(C)/60)+Math.abs(C)%60,4)},Z:function(A){var C=A.getTimezoneOffset();return(C>0?"-":"+")+hA(Math.floor(Math.abs(C)/60),2)+":"+hA(Math.abs(C)%60,2)}},oA=function(A){return+A-1},FA=[null,"[1-9]\\d?"],DA=[null,AA],KA=["isPm",AA,function(A,C){var I=A.toLowerCase();return I===C.amPm[0]?0:I===C.amPm[1]?1:null}],GA=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(A){var C=(A+"").match(/([+-]|\d\d)/gi);if(C){var I=60*+C[1]+parseInt(C[2],10);return"+"===C[0]?I:-I}return 0}],UA=(EA("monthNamesShort"),EA("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var RA=function(A,C,I){if(void 0===C&&(C=UA.default),void 0===I&&(I={}),"number"==typeof A&&(A=new Date(A)),"[object Date]"!==Object.prototype.toString.call(A)||isNaN(A.getTime()))throw new Error("Invalid Date pass to format");var E=[];C=(C=UA[C]||C).replace(CA,(function(A,C){return E.push(C),"@@@"}));var g=gA(gA({},wA),I);return(C=C.replace($,(function(C){return YA[C](A,g)}))).replace(/@@@/g,(function(){return E.shift()}))},SA=(function(){try{(new Date).toLocaleDateString("i")}catch(A){return"RangeError"===A.name}}(),function(){try{(new Date).toLocaleString("i")}catch(A){return"RangeError"===A.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(A){return"RangeError"===A.name}}(),function(A,C,I,E){E=E||{},I=null==I?{}:I;var g=new Event(C,{bubbles:void 0===E.bubbles||E.bubbles,cancelable:Boolean(E.cancelable),composed:void 0===E.composed||E.composed});return g.detail=I,A.dispatchEvent(g),g});var JA={name:"Purifier Card",description:"Purifier card allows you to control your smart purifier.",not_available:"Entity is not avaialable",toggle_power:"Turn on/off"},kA={on:"On",off:"Off"},cA={Auto:"Auto",Silent:"Silent",Favorite:"Favorite",Fan:"Fan"},LA={missing_entity:"Specifying entity is required!",xiaomi_miio_level_without_speed:"speed is required along with xiaomi_miio_favorite_level property!"},sA={entity:"Entity (Required)",compact_view:"Compact View",compact_view_aria_label_on:"Toggle compact view on",compact_view_aria_label_off:"Toggle compact view off",show_name:"Show Name",show_name_aria_label_on:"Toggle display name on",show_name_aria_label_off:"Toggle display name off",show_state:"Show State",show_state_aria_label_on:"Toggle display state on",show_state_aria_label_off:"Toggle display state off",show_toolbar:"Show Toolbar",show_toolbar_aria_label_on:"Toggle display toolbar on",show_toolbar_aria_label_off:"Toggle display toolbar off",code_only_note:"Note: Setting actions and stats options are available exclusively using Code Editor."},aA={common:JA,state:kA,speed:cA,error:LA,editor:sA},xA=Object.freeze({__proto__:null,common:JA,state:kA,speed:cA,error:LA,editor:sA,default:aA}),mA={name:"Очищувач повітря",description:'Картка "Очищувач повітря" дозволяє керувати розумним очищувачем повітря.',not_available:"Очищувач повітря недоступний",toggle_power:"Увімкнути/Вимкнути"},VA={on:"Увімкнений",off:"Вимкнений"},jA={Auto:"Авто",Silent:"Тихий",Favorite:"Улюблений",Fan:"Вентилятор"},uA={missing_entity:"Сутність є обов’язковим полем!і",xiaomi_miio_level_without_speed:"Поле speed є обов’язковим разом з xiaomi_miio_favorite_level!"},eA={entity:"Об’єкт (Required)",compact_view:"Компактний перегляд",compact_view_aria_label_on:"Увімкнути компактний перегляд",compact_view_aria_label_off:"Вимкнути компактний перегляд",show_name:"Показувати ім’я?",show_name_aria_label_on:"Показати ім’я",show_name_aria_label_off:"Приховати ім’я",show_state:"Показувати стан?",show_state_aria_label_on:"Показати стан",show_state_aria_label_off:"Приховати стан",show_toolbar:"Показувати панель дій?",show_toolbar_aria_label_on:"Показати панель дій",show_toolbar_aria_label_off:"Приховати панель дій",code_only_note:"Увага: Опції actions та stats доступні виключно через редактор коду."},qA={common:mA,state:VA,speed:jA,error:uA,editor:eA},lA=Object.freeze({__proto__:null,common:mA,state:VA,speed:jA,error:uA,editor:eA,default:qA}),pA={name:"Purifier Card",description:"Purifier kartı hava temizleyicinizi kontrol etmenize yardımcı olur.",not_available:"Varlık müsait değil",toggle_power:"Kapat/Aç"},OA={on:"Açık",off:"Kapalı"},yA={Auto:"Otomatik",Silent:"Sessiz",Favorite:"Favori",Fan:"Fan"},ZA={missing_entity:"Varlığı belirtmeniz gereklidir!",xiaomi_miio_level_without_speed:"Hız xiaomi_miio_favorite_level için gereklidir!"},tA={entity:"Varlık (Gerekli)",compact_view:"Kompakt Görünüm",compact_view_aria_label_on:"Kompakt Görünümü aç",compact_view_aria_label_off:"Kompakt Görünümü kapat",show_name:"Show Name",show_name_aria_label_on:"İsim gösterimini aç",show_name_aria_label_off:"İsim gösterimini kapat",show_state:"Show State",show_state_aria_label_on:"Durum gösterimini aç",show_state_aria_label_off:"Durum gösterimini kapat",show_toolbar:"Show Toolbar",show_toolbar_aria_label_on:"Araç çubuğu gösterimini aç",show_toolbar_aria_label_off:"Araç çubuğu gösterimini kapat",code_only_note:"Not: Aksiyon ataması ve istatistik seçenekleri şu anda Kod Editörü kullanımı ile mümkündür."},TA={common:pA,state:OA,speed:yA,error:ZA,editor:tA},WA=Object.freeze({__proto__:null,common:pA,state:OA,speed:yA,error:ZA,editor:tA,default:TA}),rA={name:"Carte purificateur",description:"La carte purificateur vous permet de contrôler votre purificateur d'air intelligent.",not_available:"Le purificateur n'est pas disponible",toggle_power:"Allumer/éteindre"},HA={on:"Allumé",off:"Éteint"},zA={Auto:"Auto",Silent:"Nuit",Favorite:"Favori",Fan:"Manuel"},nA={missing_entity:"Il est obligatoire de spécifier une entité!",xiaomi_miio_level_without_speed:"speed est obligatoire avec la propriété xiaomi_miio_favorite_level!"},NA={entity:"Entité (obligatoire)",compact_view:"Vue compacte",compact_view_aria_label_on:"Activer la vue compacte",compact_view_aria_label_off:"Désactiver la vue compacte",show_name:"Afficher le nom",show_name_aria_label_on:"Activer affichage du nom",show_name_aria_label_off:"Désactiver affichage du nom",show_state:"Afficher l'état",show_state_aria_label_on:"Activer l'affichage de l'état",show_state_aria_label_off:"Désactiver l'affichage de l'état",show_toolbar:"Afficher la barre d'outils",show_toolbar_aria_label_on:"Activer l'affichage de la barre d'outils",show_toolbar_aria_label_off:"Désactiver l'affichage de la barre d'outils",code_only_note:"Remarque: Les options de réglage des actions et statistiques sont disponibles exclusivement en utilisant l'éditeur de code."},dA={common:rA,state:HA,speed:zA,error:nA,editor:NA},XA={name:"Purifier Card",description:"Purifier-kortet lar deg kontrollere din smarte purifier.",not_available:"Enhet er ikke tilgjengelig",toggle_power:"Slå på/av"},PA={on:"På",off:"Av"},bA={Auto:"Auto",Silent:"Stille",Favorite:"Favoritt",Fan:"Vifte"},vA={missing_entity:"Spesifiserende enhet kreves!",xiaomi_miio_level_without_speed:"hastighet kreves sammen med eiendommen xiaomi_miio_favorite_level!"},fA={entity:"Enhet (påkrevd)",compact_view:"Kompakt visning",compact_view_aria_label_on:"Slå på kompakt visning",compact_view_aria_label_off:"Slå av kompakt visning",show_name:"Show Name",show_name_aria_label_on:"Slå visningsnavnet på",show_name_aria_label_off:"Slå visningsnavnet av",show_state:"Show State",show_state_aria_label_on:"Slå skjermstatus på",show_state_aria_label_off:"Slå skjermstatus av",show_toolbar:"Show Toolbar",show_toolbar_aria_label_on:"Slå skjermverktøylinjen på",show_toolbar_aria_label_off:"Slå skjermverktøylinjen av",code_only_note:"Merk: Innstillingshandlinger og statistikkalternativer er eksklusivt tilgjengelige ved hjelp av Code Editor."},_A={common:XA,state:PA,speed:bA,error:vA,editor:fA},$A={en:xA,uk:lA,fr:Object.freeze({__proto__:null,common:rA,state:HA,speed:zA,error:nA,editor:NA,default:dA}),tr:WA,nb:Object.freeze({__proto__:null,common:XA,state:PA,speed:bA,error:vA,editor:fA,default:_A})};function AC(A,C,I){const[E,g]=A.split(".");let Q;try{Q=JSON.parse(localStorage.getItem("selectedLanguage"))}catch(A){Q=localStorage.getItem("selectedLanguage")}const B=(Q||navigator.language.split("-")[0]||"en").replace(/['"]+/g,"").replace("-","_");let M;try{M=$A[B][E][g]}catch(A){M=$A.en[E][g]}if(void 0===M&&(M=$A.en[E][g]),void 0!==M)return""!==C&&""!==I&&(M=M.replace(C,I)),M}customElements.define("purifier-card-editor",class extends _{static get properties(){return{hass:Object,_config:Object,_toggle:Boolean}}setConfig(A){this._config=A,this._config.entity||(this._config.entity=this.getEntitiesByType("fan")[0]||"",SA(this,"config-changed",{config:this._config}))}get _entity(){return this._config&&this._config.entity||""}get _show_name(){return this._config?this._config.show_name||!0:""}get _show_state(){return this._config?this._config.show_state||!0:""}get _show_toolbar(){return this._config&&this._config.show_toolbar||!0}get _compact_view(){return this._config&&this._config.compact_view||!1}getEntitiesByType(A){return Object.keys(this.hass.states).filter((C=>C.substr(0,C.indexOf("."))===A))}render(){if(!this.hass)return O``;const A=this.getEntitiesByType("fan");return O`
      <div class="card-config">
        <paper-dropdown-menu
          label="${AC("editor.entity")}"
          @value-changed=${this._valueChanged}
          .configValue=${"entity"}
        >
          <paper-listbox
            slot="dropdown-content"
            .selected=${A.indexOf(this._entity)}
          >
            ${A.map((A=>O` <paper-item>${A}</paper-item> `))}
          </paper-listbox>
        </paper-dropdown-menu>

        <p class="option">
          <ha-switch
            aria-label=${AC(this._show_name?"editor.show_name_aria_label_off":"editor.show_name_aria_label_on")}
            .checked=${!1!==this._show_name}
            .configValue=${"show_name"}
            @change=${this._valueChanged}
          >
          </ha-switch>
          ${AC("editor.show_name")}
        </p>

        <p class="option">
          <ha-switch
            aria-label=${AC(this._show_state?"editor.show_state_aria_label_off":"editor.show_state_aria_label_on")}
            .checked=${!1!==this._show_state}
            .configValue=${"show_state"}
            @change=${this._valueChanged}
          >
          </ha-switch>
          ${AC("editor.show_state")}
        </p>

        <p class="option">
          <ha-switch
            aria-label=${AC(this._show_name?"editor.show_toolbar_aria_label_off":"editor.show_toolbar_aria_label_on")}
            .checked=${!1!==this._show_toolbar}
            .configValue=${"show_toolbar"}
            @change=${this._valueChanged}
          >
          </ha-switch>
          ${AC("editor.show_toolbar")}
        </p>

        <strong>
          ${AC("editor.code_only_note")}
        </strong>
      </div>
    `}_valueChanged(A){if(!this._config||!this.hass)return;const C=A.target;this["_"+C.configValue]!==C.value&&(C.configValue&&(""===C.value?delete this._config[C.configValue]:this._config={...this._config,[C.configValue]:void 0!==C.checked?C.checked:C.value}),SA(this,"config-changed",{config:this._config}))}static get styles(){return v`
      .card-config paper-dropdown-menu {
        width: 100%;
      }

      .option {
        display: flex;
        align-items: center;
      }

      .option ha-switch {
        margin-right: 10px;
      }
    `}});var CC=v`
  :host {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  ha-card {
    flex-direction: column;
    flex: 1;
    position: relative;
    padding: 0px;
    border-radius: 4px;
    overflow: hidden;
  }

  .fill-gap {
    flex-grow: 1;
  }

  .preview {
    background-color: var(--primary-color);
    cursor: pointer;
    overflow: hidden;
    position: relative;
  }

  .header {
    display: flex;
    color: var(--text-primary-color);
  }

  .image {
    background: center / contain no-repeat;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image.working {
  }

  .image.standby {
  }

  .image.compact {
    background-image: none;
    height: auto;
  }

  .preview.not-available {
    filter: grayscale(1);
  }

  .number-off {
    opacity: 0.2;
  }

  .current-aqi {
    font-size: 48px;
    font-weight: bold;
    line-height: 48px;
    padding: 5px 10px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.6);
    color: var(--text-primary-color);
  }

  .current-aqi sup {
    font-size: 16px;
    line-height: 16px;
    font-weight: normal;
  }

  .state {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .state-text {
    color: var(--text-primary-color);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-left: calc(20px + 9px); /* size + margin of spinner */
  }

  .state ha-circular-progress {
    --mdc-theme-primary: var(
      --card-background-color
    ); /* hack to override the color */
    min-width: 24px;
    width: 24px;
    height: 24px;
    margin-left: 9px;
  }

  .friendly-name {
    text-align: center;
    font-weight: bold;
    color: var(--text-primary-color);
    font-size: 16px;
  }

  .not-available {
    text-align: center;
    color: var(--text-primary-color);
    font-size: 16px;
  }

  .metadata {
    margin: 10px auto;
  }

  .stats {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    color: var(--text-primary-color);
  }

  .stats-block {
    margin: 10px 0px;
    text-align: center;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    flex-grow: 1;
  }
  .stats-block:last-child {
    border: 0px;
  }
  .stats-value {
    font-size: 20px;
    font-weight: bold;
  }

  ha-icon {
    color: #fff;
  }

  .toolbar {
    background: var(--lovelace-background, var(--primary-background-color));
    min-height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .toolbar ha-icon-button {
    color: var(--primary-color);
    flex-direction: column;
    width: 44px;
    height: 44px;
    --mdc-icon-button-size: 44px;
    margin: 5px 0;
    opacity: 0.5;
  }

  .toolbar ha-icon-button.active {
    opacity: 1;
  }

  .toolbar ha-icon-button:first-child {
    margin-left: 5px;
  }

  .toolbar ha-icon-button:last-child {
    margin-right: 5px;
  }

  .toolbar paper-button {
    color: var(--primary-color);
    flex-direction: column;
    margin-right: 10px;
    padding: 15px 10px;
    cursor: pointer;
  }

  .toolbar ha-icon-button:active,
  .toolbar paper-button:active {
    opacity: 0.4;
    background: rgba(0, 0, 0, 0.1);
  }

  .toolbar paper-button {
    color: var(--primary-color);
    flex-direction: row;
  }

  .toolbar ha-icon {
    color: var(--primary-color);
    padding-right: 15px;
  }
`;customElements.get("ha-icon-button")||customElements.define("ha-icon-button",class extends(customElements.get("paper-icon-button")){});customElements.define("purifier-card",class extends _{static get properties(){return{hass:Object,config:Object,requestInProgress:Boolean}}static get styles(){return CC}static async getConfigElement(){return document.createElement("purifier-card-editor")}static getStubConfig(A,C){const[I]=C.filter((A=>"fan"===A.substr(0,A.indexOf("."))));return{entity:I||""}}get entity(){return this.hass.states[this.config.entity]}get showName(){return void 0===this.config.show_name||this.config.show_name}get showState(){return void 0===this.config.show_state||this.config.show_state}get showToolbar(){return void 0===this.config.show_toolbar||this.config.show_toolbar}get compactView(){return void 0!==this.config.compact_view&&this.config.compact_view}setConfig(A){if(!A.entity)throw new Error(AC("error.missing_entity"));this.config=A}getCardSize(){return 2}shouldUpdate(A){return function(A,C,I){if(C.has("config")||I)return!0;if(A.config.entity){var E=C.get("hass");return!E||E.states[A.config.entity]!==A.hass.states[A.config.entity]}return!1}(this,A)}updated(A){A.get("hass")&&A.get("hass").states[this.config.entity]!==this.hass.states[this.config.entity]&&(this.requestInProgress=!1)}handleMore(){SA(this,"hass-more-info",{entityId:this.entity.entity_id},{bubbles:!0,composed:!0})}handleSpeed(A){const C=A.target.getAttribute("value");this.callService("fan.set_speed",{speed:C})}callService(A,C={},I=!0){const[E,g]=A.split(".");this.hass.callService(E,g,{entity_id:this.config.entity,...C}),I&&(this.requestInProgress=!0,this.requestUpdate())}renderSpeed(){const{attributes:{speed:A,speed_list:C}}=this.entity;if(!C)return O``;const I=C.indexOf(A);return O`
      <paper-menu-button
        slot="dropdown-trigger"
        .horizontalAlign=${"right"}
        .verticalAlign=${"top"}
        .verticalOffset=${40}
        .noAnimations=${!0}
        @click="${A=>A.stopPropagation()}"
      >
        <paper-button slot="dropdown-trigger">
          <ha-icon icon="mdi:fan"></ha-icon>
          <span show=${!0}>
            ${AC("speed."+A)||A}
          </span>
        </paper-button>
        <paper-listbox
          slot="dropdown-content"
          selected=${I}
          @click="${A=>this.handleSpeed(A)}"
        >
          ${C.map((A=>O`<paper-item value=${A}
                >${AC("speed."+A)||A}</paper-item
              >`))}
        </paper-listbox>
      </paper-menu-button>
    `}renderAQI(){const{attributes:{aqi:A}}=this.entity;let C="";return A<10?C=O`<span class="number-off">00</span>`:A<100&&(C=O`<span class="number-off">0</span>`),O`
      <div class="current-aqi">
        ${C}<span class="number-on">${A}</span>
        <sup>AQI</sup>
      </div>
    `}renderName(){const{attributes:{friendly_name:A}}=this.entity;return this.showName?O`
      <div class="friendly-name">
        ${A}
      </div>
    `:O``}renderState(){const{state:A}=this.entity,C=AC("state."+A)||A;return this.showState?O`
      <div class="state">
        <span class="state-text" alt=${C}>
          ${C}
        </span>
        <ha-circular-progress
          .active=${this.requestInProgress}
          size="small"
        ></ha-circular-progress>
      </div>
    `:O``}renderStats(){const{stats:A=[]}=this.config;return(A||[]).map((({entity_id:A,attribute:C,unit:I,subtitle:E})=>{if(!A&&!C)return O``;const g=A?this.hass.states[A].state:this.entity.attributes[C];return O`
        <div class="stats-block">
          <span class="stats-value">${g}</span>
          ${I}
          <div class="stats-subtitle">${E}</div>
        </div>
      `}))}renderToolbar(){const{actions:A=[]}=this.config,{state:C,attributes:I}=this.entity;if(!this.showToolbar)return O``;const E=A.map((({name:A,icon:C,service:E,service_data:g,speed:Q,xiaomi_miio_favorite_level:B})=>{const M=E||Q===I.speed&&B===I.favorite_level||Q===I.speed&&!B;return O`
          <ha-icon-button
            icon="${C}"
            title="${A}"
            class="${M?"active":""}"
            @click="${()=>{if(E&&this.callService(E,g),Q&&this.callService("fan.set_speed",{speed:Q}),Q&&B&&(this.callService("fan.set_speed",{speed:Q}),setTimeout((()=>{this.callService("xiaomi_miio.fan_set_favorite_level",{level:B})}),500)),!Q&&B)throw new Error(AC("error.xiaomi_miio_level_without_speed"))}}"
          ></ha-icon-button>
        `}));return O`
      <div class="toolbar">
        <ha-icon-button
          icon="hass:power"
          class="${"on"===C?"active":""}"
          title="${AC("common.toggle_power")}"
          @click="${()=>this.callService("fan.toggle")}"
        >
        </ha-icon-button>

        <div class="fill-gap"></div>

        ${E}
      </div>
    `}render(){if(!this.entity)return O`
        <ha-card>
          <div class="preview not-available">
            <div class="metadata">
              <div class="not-available">
                ${AC("common.not_available")}
              </div>
            <div>
          </div>
        </ha-card>
      `;const{state:A}=this.entity,C="on"===A?"working":"standby",I=this.compactView?"compact":C;return O`
      <ha-card>
        <div
          class="preview"
          @click="${()=>this.handleMore()}"
          ?more-info="true"
        >
          <div class="header">
            <div class="speed">
              ${this.renderSpeed()}
            </div>
          </div>

          <div class="image ${I}">
            ${this.renderAQI()}
          </div>

          <div class="metadata">
            ${this.renderName()} ${this.renderState()}
          </div>

          <div class="stats">
            ${this.renderStats()}
          </div>
        </div>

        ${this.renderToolbar()}
      </ha-card>
    `}}),window.customCards=window.customCards||[],window.customCards.push({preview:!0,type:"purifier-card",name:AC("common.name"),description:AC("common.description")});