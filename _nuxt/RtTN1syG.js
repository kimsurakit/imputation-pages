import{N as i}from"#entry";function k(t,e,r){const o=r.originalEvent.target,n=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:r});e&&o.addEventListener(t,e,{once:!0}),o.dispatchEvent(n)}/**
 * @license lucide-vue-next v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),m=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,o)=>o?o.toUpperCase():r.toLowerCase()),p=t=>{const e=m(t);return e.charAt(0).toUpperCase()+e.slice(1)},C=(...t)=>t.filter((e,r,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===r).join(" ").trim(),w=t=>t==="";/**
 * @license lucide-vue-next v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=({name:t,iconNode:e,absoluteStrokeWidth:r,"absolute-stroke-width":o,strokeWidth:n,"stroke-width":a,size:c=s.width,color:h=s.stroke,...l},{slots:u})=>i("svg",{...s,...l,width:c,height:c,stroke:h,"stroke-width":w(r)||w(o)||r===!0||o===!0?Number(n||a||s["stroke-width"])*24/Number(c):n||a||s["stroke-width"],class:C("lucide",l.class,...t?[`lucide-${d(p(t))}-icon`,`lucide-${d(t)}`]:["lucide-icon"])},[...e.map(g=>i(...g)),...u.default?[u.default()]:[]]);/**
 * @license lucide-vue-next v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=(t,e)=>(r,{slots:o,attrs:n})=>i(f,{...n,...r,iconNode:e,name:t},o);export{E as c,k as h};
