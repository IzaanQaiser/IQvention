(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[362],{4690:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,r.Z)("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]])},8004:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,r.Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},2549:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,r.Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},936:function(e){e.exports={style:{fontFamily:"'__Inter_4b197e', '__Inter_Fallback_4b197e'",fontStyle:"normal"},className:"__className_4b197e"}},3552:function(e,t,n){"use strict";n.d(t,{aU:function(){return ea},x8:function(){return el},dk:function(){return es},zt:function(){return en},fC:function(){return eo},Dx:function(){return ei},l_:function(){return er}});var r,o=n(2265),i=n(4887);function s(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}var a=n(2210),l=n(7437),u=n(7256),c=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=o.forwardRef((e,n)=>{let{asChild:r,...o}=e,i=r?u.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(i,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function d(e,t){e&&i.flushSync(()=>e.dispatchEvent(t))}function f(e){let t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...e)=>t.current?.(...e),[])}var m="dismissableLayer.update",p=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),v=o.forwardRef((e,t)=>{let{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:i,onPointerDownOutside:u,onFocusOutside:d,onInteractOutside:v,onDismiss:h,...g}=e,E=o.useContext(p),[x,b]=o.useState(null),T=x?.ownerDocument??globalThis?.document,[,C]=o.useState({}),N=(0,a.e)(t,e=>b(e)),L=Array.from(E.layers),[P]=[...E.layersWithOutsidePointerEventsDisabled].slice(-1),S=L.indexOf(P),R=x?L.indexOf(x):-1,k=E.layersWithOutsidePointerEventsDisabled.size>0,M=R>=S,O=function(e,t=globalThis?.document){let n=f(e),r=o.useRef(!1),i=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!r.current){let r=function(){w("dismissableLayer.pointerDownOutside",n,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",i.current),i.current=r,t.addEventListener("click",i.current,{once:!0})):r()}else t.removeEventListener("click",i.current);r.current=!1},o=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",e),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...E.branches].some(e=>e.contains(t));!M||n||(u?.(e),v?.(e),e.defaultPrevented||h?.())},T),$=function(e,t=globalThis?.document){let n=f(e),r=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!r.current&&w("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target,n=[...E.branches].some(e=>e.contains(t));n||(d?.(e),v?.(e),e.defaultPrevented||h?.())},T);return!function(e,t=globalThis?.document){let n=f(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{let t=R===E.layers.size-1;t&&(i?.(e),!e.defaultPrevented&&h&&(e.preventDefault(),h()))},T),o.useEffect(()=>{if(x)return n&&(0===E.layersWithOutsidePointerEventsDisabled.size&&(r=T.body.style.pointerEvents,T.body.style.pointerEvents="none"),E.layersWithOutsidePointerEventsDisabled.add(x)),E.layers.add(x),y(),()=>{n&&1===E.layersWithOutsidePointerEventsDisabled.size&&(T.body.style.pointerEvents=r)}},[x,T,n,E]),o.useEffect(()=>()=>{x&&(E.layers.delete(x),E.layersWithOutsidePointerEventsDisabled.delete(x),y())},[x,E]),o.useEffect(()=>{let e=()=>C({});return document.addEventListener(m,e),()=>document.removeEventListener(m,e)},[]),(0,l.jsx)(c.div,{...g,ref:N,style:{pointerEvents:k?M?"auto":"none":void 0,...e.style},onFocusCapture:s(e.onFocusCapture,$.onFocusCapture),onBlurCapture:s(e.onBlurCapture,$.onBlurCapture),onPointerDownCapture:s(e.onPointerDownCapture,O.onPointerDownCapture)})});v.displayName="DismissableLayer";var h=o.forwardRef((e,t)=>{let n=o.useContext(p),r=o.useRef(null),i=(0,a.e)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,l.jsx)(c.div,{...e,ref:i})});function y(){let e=new CustomEvent(m);document.dispatchEvent(e)}function w(e,t,n,{discrete:r}){let o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?d(o,i):o.dispatchEvent(i)}h.displayName="DismissableLayerBranch";var g=globalThis?.document?o.useLayoutEffect:()=>{},E=o.forwardRef((e,t)=>{let{container:n,...r}=e,[s,a]=o.useState(!1);g(()=>a(!0),[]);let u=n||s&&globalThis?.document?.body;return u?i.createPortal((0,l.jsx)(c.div,{...r,ref:t}),u):null});E.displayName="Portal";var x=e=>{let t,n;let{present:r,children:i}=e,s=function(e){var t;let[n,r]=o.useState(),i=o.useRef({}),s=o.useRef(e),a=o.useRef("none"),l=e?"mounted":"unmounted",[u,c]=(t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},o.useReducer((e,n)=>{let r=t[e][n];return r??e},l));return o.useEffect(()=>{let e=b(i.current);a.current="mounted"===u?e:"none"},[u]),g(()=>{let t=i.current,n=s.current,r=n!==e;if(r){let r=a.current,o=b(t);e?c("MOUNT"):"none"===o||t?.display==="none"?c("UNMOUNT"):n&&r!==o?c("ANIMATION_OUT"):c("UNMOUNT"),s.current=e}},[e,c]),g(()=>{if(n){let e;let t=n.ownerDocument.defaultView??window,r=r=>{let o=b(i.current),a=o.includes(r.animationName);if(r.target===n&&a&&(c("ANIMATION_END"),!s.current)){let r=n.style.animationFillMode;n.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===n.style.animationFillMode&&(n.style.animationFillMode=r)})}},o=e=>{e.target===n&&(a.current=b(i.current))};return n.addEventListener("animationstart",o),n.addEventListener("animationcancel",r),n.addEventListener("animationend",r),()=>{t.clearTimeout(e),n.removeEventListener("animationstart",o),n.removeEventListener("animationcancel",r),n.removeEventListener("animationend",r)}}c("ANIMATION_END")},[n,c]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:o.useCallback(e=>{e&&(i.current=getComputedStyle(e)),r(e)},[])}}(r),l="function"==typeof i?i({present:s.isPresent}):o.Children.only(i),u=(0,a.e)(s.ref,(t=Object.getOwnPropertyDescriptor(l.props,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?l.ref:(t=Object.getOwnPropertyDescriptor(l,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?l.props.ref:l.props.ref||l.ref),c="function"==typeof i;return c||s.isPresent?o.cloneElement(l,{ref:u}):null};function b(e){return e?.animationName||"none"}x.displayName="Presence";var T=o.forwardRef((e,t)=>(0,l.jsx)(c.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));T.displayName="VisuallyHidden";var C="ToastProvider",[N,L,P]=function(e){let t=e+"CollectionProvider",[n,r]=function(e,t=[]){let n=[],r=()=>{let t=n.map(e=>o.createContext(e));return function(n){let r=n?.[e]||t;return o.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let i=o.createContext(r),s=n.length;function a(t){let{scope:n,children:r,...a}=t,u=n?.[e][s]||i,c=o.useMemo(()=>a,Object.values(a));return(0,l.jsx)(u.Provider,{value:c,children:r})}return n=[...n,r],a.displayName=t+"Provider",[a,function(n,a){let l=a?.[e][s]||i,u=o.useContext(l);if(u)return u;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e),i=o[`__scope${r}`];return{...t,...i}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}(t),[i,s]=n(t,{collectionRef:{current:null},itemMap:new Map}),c=e=>{let{scope:t,children:n}=e,r=o.useRef(null),s=o.useRef(new Map).current;return(0,l.jsx)(i,{scope:t,itemMap:s,collectionRef:r,children:n})};c.displayName=t;let d=e+"CollectionSlot",f=o.forwardRef((e,t)=>{let{scope:n,children:r}=e,o=s(d,n),i=(0,a.e)(t,o.collectionRef);return(0,l.jsx)(u.g7,{ref:i,children:r})});f.displayName=d;let m=e+"CollectionItemSlot",p="data-radix-collection-item",v=o.forwardRef((e,t)=>{let{scope:n,children:r,...i}=e,c=o.useRef(null),d=(0,a.e)(t,c),f=s(m,n);return o.useEffect(()=>(f.itemMap.set(c,{ref:c,...i}),()=>void f.itemMap.delete(c))),(0,l.jsx)(u.g7,{[p]:"",ref:d,children:r})});return v.displayName=m,[{Provider:c,Slot:f,ItemSlot:v},function(t){let n=s(e+"CollectionConsumer",t),r=o.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`)),r=Array.from(n.itemMap.values()),o=r.sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current));return o},[n.collectionRef,n.itemMap]);return r},r]}("Toast"),[S,R]=function(e,t=[]){let n=[],r=()=>{let t=n.map(e=>o.createContext(e));return function(n){let r=n?.[e]||t;return o.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let i=o.createContext(r),s=n.length;n=[...n,r];let a=t=>{let{scope:n,children:r,...a}=t,u=n?.[e]?.[s]||i,c=o.useMemo(()=>a,Object.values(a));return(0,l.jsx)(u.Provider,{value:c,children:r})};return a.displayName=t+"Provider",[a,function(n,a){let l=a?.[e]?.[s]||i,u=o.useContext(l);if(u)return u;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e),i=o[`__scope${r}`];return{...t,...i}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}("Toast",[P]),[k,M]=S(C),O=e=>{let{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:s=50,children:a}=e,[u,c]=o.useState(null),[d,f]=o.useState(0),m=o.useRef(!1),p=o.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${C}\`. Expected non-empty \`string\`.`),(0,l.jsx)(N.Provider,{scope:t,children:(0,l.jsx)(k,{scope:t,label:n,duration:r,swipeDirection:i,swipeThreshold:s,toastCount:d,viewport:u,onViewportChange:c,onToastAdd:o.useCallback(()=>f(e=>e+1),[]),onToastRemove:o.useCallback(()=>f(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:m,isClosePausedRef:p,children:a})})};O.displayName=C;var $="ToastViewport",D=["F8"],j="toast.viewportPause",_="toast.viewportResume",I=o.forwardRef((e,t)=>{let{__scopeToast:n,hotkey:r=D,label:i="Notifications ({hotkey})",...s}=e,u=M($,n),d=L(n),f=o.useRef(null),m=o.useRef(null),p=o.useRef(null),v=o.useRef(null),y=(0,a.e)(t,v,u.onViewportChange),w=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),g=u.toastCount>0;o.useEffect(()=>{let e=e=>{let t=0!==r.length&&r.every(t=>e[t]||e.code===t);t&&v.current?.focus()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[r]),o.useEffect(()=>{let e=f.current,t=v.current;if(g&&e&&t){let n=()=>{if(!u.isClosePausedRef.current){let e=new CustomEvent(j);t.dispatchEvent(e),u.isClosePausedRef.current=!0}},r=()=>{if(u.isClosePausedRef.current){let e=new CustomEvent(_);t.dispatchEvent(e),u.isClosePausedRef.current=!1}},o=t=>{let n=!e.contains(t.relatedTarget);n&&r()},i=()=>{let t=e.contains(document.activeElement);t||r()};return e.addEventListener("focusin",n),e.addEventListener("focusout",o),e.addEventListener("pointermove",n),e.addEventListener("pointerleave",i),window.addEventListener("blur",n),window.addEventListener("focus",r),()=>{e.removeEventListener("focusin",n),e.removeEventListener("focusout",o),e.removeEventListener("pointermove",n),e.removeEventListener("pointerleave",i),window.removeEventListener("blur",n),window.removeEventListener("focus",r)}}},[g,u.isClosePausedRef]);let E=o.useCallback(({tabbingDirection:e})=>{let t=d(),n=t.map(t=>{let n=t.ref.current,r=[n,...function(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}(n)];return"forwards"===e?r:r.reverse()});return("forwards"===e?n.reverse():n).flat()},[d]);return o.useEffect(()=>{let e=v.current;if(e){let t=t=>{let n=t.altKey||t.ctrlKey||t.metaKey,r="Tab"===t.key&&!n;if(r){let n=document.activeElement,r=t.shiftKey,o=t.target===e;if(o&&r){m.current?.focus();return}let i=E({tabbingDirection:r?"backwards":"forwards"}),s=i.findIndex(e=>e===n);et(i.slice(s+1))?t.preventDefault():r?m.current?.focus():p.current?.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[d,E]),(0,l.jsxs)(h,{ref:f,role:"region","aria-label":i.replace("{hotkey}",w),tabIndex:-1,style:{pointerEvents:g?void 0:"none"},children:[g&&(0,l.jsx)(W,{ref:m,onFocusFromOutsideViewport:()=>{let e=E({tabbingDirection:"forwards"});et(e)}}),(0,l.jsx)(N.Slot,{scope:n,children:(0,l.jsx)(c.ol,{tabIndex:-1,...s,ref:y})}),g&&(0,l.jsx)(W,{ref:p,onFocusFromOutsideViewport:()=>{let e=E({tabbingDirection:"backwards"});et(e)}})]})});I.displayName=$;var A="ToastFocusProxy",W=o.forwardRef((e,t)=>{let{__scopeToast:n,onFocusFromOutsideViewport:r,...o}=e,i=M(A,n);return(0,l.jsx)(T,{"aria-hidden":!0,tabIndex:0,...o,ref:t,style:{position:"fixed"},onFocus:e=>{let t=e.relatedTarget,n=!i.viewport?.contains(t);n&&r()}})});W.displayName=A;var F="Toast",B=o.forwardRef((e,t)=>{let{forceMount:n,open:r,defaultOpen:i,onOpenChange:a,...u}=e,[c=!0,d]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,i]=function({defaultProp:e,onChange:t}){let n=o.useState(e),[r]=n,i=o.useRef(r),s=f(t);return o.useEffect(()=>{i.current!==r&&(s(r),i.current=r)},[r,i,s]),n}({defaultProp:t,onChange:n}),s=void 0!==e,a=s?e:r,l=f(n),u=o.useCallback(t=>{if(s){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else i(t)},[s,e,i,l]);return[a,u]}({prop:r,defaultProp:i,onChange:a});return(0,l.jsx)(x,{present:n||c,children:(0,l.jsx)(K,{open:c,...u,ref:t,onClose:()=>d(!1),onPause:f(e.onPause),onResume:f(e.onResume),onSwipeStart:s(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:s(e.onSwipeMove,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${n}px`)}),onSwipeCancel:s(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:s(e.onSwipeEnd,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${n}px`),d(!1)})})})});B.displayName=F;var[z,H]=S(F,{onClose(){}}),K=o.forwardRef((e,t)=>{let{__scopeToast:n,type:r="foreground",duration:u,open:d,onClose:m,onEscapeKeyDown:p,onPause:h,onResume:y,onSwipeStart:w,onSwipeMove:g,onSwipeCancel:E,onSwipeEnd:x,...b}=e,T=M(F,n),[C,L]=o.useState(null),P=(0,a.e)(t,e=>L(e)),S=o.useRef(null),R=o.useRef(null),k=u||T.duration,O=o.useRef(0),$=o.useRef(k),D=o.useRef(0),{onToastAdd:I,onToastRemove:A}=T,W=f(()=>{let e=C?.contains(document.activeElement);e&&T.viewport?.focus(),m()}),B=o.useCallback(e=>{e&&e!==1/0&&(window.clearTimeout(D.current),O.current=new Date().getTime(),D.current=window.setTimeout(W,e))},[W]);o.useEffect(()=>{let e=T.viewport;if(e){let t=()=>{B($.current),y?.()},n=()=>{let e=new Date().getTime()-O.current;$.current=$.current-e,window.clearTimeout(D.current),h?.()};return e.addEventListener(j,n),e.addEventListener(_,t),()=>{e.removeEventListener(j,n),e.removeEventListener(_,t)}}},[T.viewport,k,h,y,B]),o.useEffect(()=>{d&&!T.isClosePausedRef.current&&B(k)},[d,k,T.isClosePausedRef,B]),o.useEffect(()=>(I(),()=>A()),[I,A]);let H=o.useMemo(()=>C?function e(t){let n=[],r=Array.from(t.childNodes);return r.forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&n.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let r=t.ariaHidden||t.hidden||"none"===t.style.display,o=""===t.dataset.radixToastAnnounceExclude;if(!r){if(o){let e=t.dataset.radixToastAnnounceAlt;e&&n.push(e)}else n.push(...e(t))}}}),n}(C):null,[C]);return T.viewport?(0,l.jsxs)(l.Fragment,{children:[H&&(0,l.jsx)(U,{__scopeToast:n,role:"status","aria-live":"foreground"===r?"assertive":"polite","aria-atomic":!0,children:H}),(0,l.jsx)(z,{scope:n,onClose:W,children:i.createPortal((0,l.jsx)(N.ItemSlot,{scope:n,children:(0,l.jsx)(v,{asChild:!0,onEscapeKeyDown:s(p,()=>{T.isFocusedToastEscapeKeyDownRef.current||W(),T.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,l.jsx)(c.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":d?"open":"closed","data-swipe-direction":T.swipeDirection,...b,ref:P,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:s(e.onKeyDown,e=>{"Escape"!==e.key||(p?.(e.nativeEvent),e.nativeEvent.defaultPrevented||(T.isFocusedToastEscapeKeyDownRef.current=!0,W()))}),onPointerDown:s(e.onPointerDown,e=>{0===e.button&&(S.current={x:e.clientX,y:e.clientY})}),onPointerMove:s(e.onPointerMove,e=>{if(!S.current)return;let t=e.clientX-S.current.x,n=e.clientY-S.current.y,r=!!R.current,o=["left","right"].includes(T.swipeDirection),i=["left","up"].includes(T.swipeDirection)?Math.min:Math.max,s=o?i(0,t):0,a=o?0:i(0,n),l="touch"===e.pointerType?10:2,u={x:s,y:a},c={originalEvent:e,delta:u};r?(R.current=u,Q("toast.swipeMove",g,c,{discrete:!1})):ee(u,T.swipeDirection,l)?(R.current=u,Q("toast.swipeStart",w,c,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>l||Math.abs(n)>l)&&(S.current=null)}),onPointerUp:s(e.onPointerUp,e=>{let t=R.current,n=e.target;if(n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),R.current=null,S.current=null,t){let n=e.currentTarget,r={originalEvent:e,delta:t};ee(t,T.swipeDirection,T.swipeThreshold)?Q("toast.swipeEnd",x,r,{discrete:!0}):Q("toast.swipeCancel",E,r,{discrete:!0}),n.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})})}),T.viewport)})]}):null}),U=e=>{let{__scopeToast:t,children:n,...r}=e,i=M(F,t),[s,a]=o.useState(!1),[u,c]=o.useState(!1);return function(e=()=>{}){let t=f(e);g(()=>{let e=0,n=0;return e=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(n)}},[t])}(()=>a(!0)),o.useEffect(()=>{let e=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(e)},[]),u?null:(0,l.jsx)(E,{asChild:!0,children:(0,l.jsx)(T,{...r,children:s&&(0,l.jsxs)(l.Fragment,{children:[i.label," ",n]})})})},X=o.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e;return(0,l.jsx)(c.div,{...r,ref:t})});X.displayName="ToastTitle";var V=o.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e;return(0,l.jsx)(c.div,{...r,ref:t})});V.displayName="ToastDescription";var Y="ToastAction",Z=o.forwardRef((e,t)=>{let{altText:n,...r}=e;return n.trim()?(0,l.jsx)(J,{altText:n,asChild:!0,children:(0,l.jsx)(G,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${Y}\`. Expected non-empty \`string\`.`),null)});Z.displayName=Y;var q="ToastClose",G=o.forwardRef((e,t)=>{let{__scopeToast:n,...r}=e,o=H(q,n);return(0,l.jsx)(J,{asChild:!0,children:(0,l.jsx)(c.button,{type:"button",...r,ref:t,onClick:s(e.onClick,o.onClose)})})});G.displayName=q;var J=o.forwardRef((e,t)=>{let{__scopeToast:n,altText:r,...o}=e;return(0,l.jsx)(c.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...o,ref:t})});function Q(e,t,n,{discrete:r}){let o=n.originalEvent.currentTarget,i=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?d(o,i):o.dispatchEvent(i)}var ee=(e,t,n=0)=>{let r=Math.abs(e.x),o=Math.abs(e.y),i=r>o;return"left"===t||"right"===t?i&&r>n:!i&&o>n};function et(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}var en=O,er=I,eo=B,ei=X,es=V,ea=Z,el=G},9628:function(e,t,n){"use strict";let r,o;n.d(t,{v:function(){return B}});var i=n(4101),s=n(961),a=n(2265),l=n(6567),u=n(7636);let c=new WeakMap;function d({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=c.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function f(e){e.forEach(d)}let m=new Set;var p=n(2868),v=n(9815);let h=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),y=()=>({time:0,x:h(),y:h()}),w={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function g(e,t,n,r){let o=n[t],{length:i,position:s}=w[t],a=o.current,l=n.time;o.current=e[`scroll${s}`],o.scrollLength=e[`scroll${i}`]-e[`client${i}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=(0,p.Y)(0,o.scrollLength,o.current);let u=r-l;o.velocity=u>50?0:(0,v.R)(o.current-a,u)}let E={All:[[0,0],[1,1]]},x={start:0,center:.5,end:1};function b(e,t,n=0){let r=0;if(e in x&&(e=x[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}let T=[0,0];var C=n(7015),N=n(9448);let L={x:0,y:0};var P=n(6846);let S=new WeakMap,R=new WeakMap,k=new WeakMap,M=e=>e===document.documentElement?window:e;function O(e,{container:t=document.documentElement,...n}={}){let i=k.get(t);i||(i=new Set,k.set(t,i));let s=y(),a=function(e,t,n,r={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{g(e,"x",n,t),g(e,"y",n,t),n.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=E.All}=n,{target:o=e,axis:i="y"}=n,s="y"===i?"height":"width",a=o!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){let e=r.getBoundingClientRect();r=r.parentElement;let t=r.getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let o=null,i=r.parentNode;for(;!o;)"svg"===i.tagName&&(o=i),i=r.parentNode;r=o}else break;return n}(o,e):L,l=o===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in o&&"svg"!==o.tagName?o.getBBox():{width:o.clientWidth,height:o.clientHeight},u={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let c=!t[i].interpolate,d=r.length;for(let e=0;e<d;e++){let n=function(e,t,n,r){let o=Array.isArray(e)?e:T,i=0;return"number"==typeof e?o=[e,e]:"string"==typeof e&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,x[e]?e:"0"]),b(o[0],n,r)-b(o[1],t)}(r[e],u[s],l[s],a[i]);c||n===t[i].interpolatorOffsets[e]||(c=!0),t[i].offset[e]=n}c&&(t[i].interpolate=(0,C.s)(t[i].offset,(0,N.Y)(r)),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}(e,n,r)},notify:()=>t(n)}}(t,e,s,n);if(i.add(a),!S.has(t)){let e=()=>{for(let e of i)e.measure()},n=()=>{for(let e of i)e.update(P.frameData.timestamp)},s=()=>{for(let e of i)e.notify()},a=()=>{P.Wi.read(e,!1,!0),P.Wi.read(n,!1,!0),P.Wi.update(s,!1,!0)};S.set(t,a);let l=M(t);window.addEventListener("resize",a,{passive:!0}),t!==document.documentElement&&R.set(t,"function"==typeof t?(m.add(t),o||(o=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};m.forEach(e=>e(t))},window.addEventListener("resize",o)),()=>{m.delete(t),!m.size&&o&&(o=void 0)}):function(e,t){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(f));let n=(0,u.I)(e);return n.forEach(e=>{let n=c.get(e);n||(n=new Set,c.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{n.forEach(e=>{let n=c.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(t,a)),l.addEventListener("scroll",a,{passive:!0})}let l=S.get(t);return P.Wi.read(l,!1,!0),()=>{var e;(0,P.Pn)(l);let n=k.get(t);if(!n||(n.delete(a),n.size))return;let r=S.get(t);S.delete(t),r&&(M(t).removeEventListener("scroll",r),null===(e=R.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}function $(e,t){let n;let r=()=>{let{currentTime:r}=t,o=null===r?0:r.value,i=o/100;n!==i&&e(i),n=i};return P.Wi.update(r,!0),()=>(0,P.Pn)(r)}var D=n(9657);let j=new Map;function _({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),j.has(t)||j.set(t,{});let r=j.get(t);return r[n]||(r[n]=(0,D.t)()?new ScrollTimeline({source:t,axis:n}):function({source:e,container:t,axis:n="y"}){e&&(t=e);let r={value:0},o=O(e=>{r.value=100*e[n].progress},{container:t,axis:n});return{currentTime:r,cancel:o}}({source:t,axis:n})),r[n]}function I(e){return e&&(e.target||e.offset)}var A=n(538);function W(e,t){(0,l.K)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let F=()=>({scrollX:(0,i.BX)(0),scrollY:(0,i.BX)(0),scrollXProgress:(0,i.BX)(0),scrollYProgress:(0,i.BX)(0)});function B({container:e,target:t,layoutEffect:n=!0,...r}={}){let o=(0,s.h)(F),i=n?A.L:a.useEffect;return i(()=>(W("target",t),W("container",e),function(e,{axis:t="y",...n}={}){let r={axis:t,...n};return"function"==typeof e?2===e.length||I(r)?O(t=>{e(t[r.axis].progress,t)},r):$(e,_(r)):function(e,t){if(I(t))return e.pause(),O(n=>{e.time=e.duration*n[t.axis].progress},t);{let n=_(t);return e.attachTimeline(n,e=>(e.pause(),$(t=>{e.time=e.duration*t},n)))}}(e,r)}((e,{x:t,y:n})=>{o.scrollX.set(t.current),o.scrollXProgress.set(t.progress),o.scrollY.set(n.current),o.scrollYProgress.set(n.progress)},{...r,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),o}},1350:function(e,t,n){"use strict";n.d(t,{f:function(){return l}});var r=n(2265),o=["light","dark"],i="(prefers-color-scheme: dark)",s="undefined"==typeof window,a=r.createContext(void 0),l=e=>r.useContext(a)?e.children:r.createElement(c,{...e}),u=["light","dark"],c=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:s=!0,storageKey:l="theme",themes:c=u,defaultTheme:v=n?"system":"light",attribute:h="data-theme",value:y,children:w,nonce:g})=>{let[E,x]=r.useState(()=>f(l,v)),[b,T]=r.useState(()=>f(l)),C=y?Object.values(y):c,N=r.useCallback(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=p());let i=y?y[r]:r,a=t?m():null,l=document.documentElement;if("class"===h?(l.classList.remove(...C),i&&l.classList.add(i)):i?l.setAttribute(h,i):l.removeAttribute(h),s){let e=o.includes(v)?v:null,t=o.includes(r)?r:e;l.style.colorScheme=t}null==a||a()},[]),L=r.useCallback(e=>{let t="function"==typeof e?e(e):e;x(t);try{localStorage.setItem(l,t)}catch(e){}},[e]),P=r.useCallback(t=>{T(p(t)),"system"===E&&n&&!e&&N("system")},[E,e]);r.useEffect(()=>{let e=window.matchMedia(i);return e.addListener(P),P(e),()=>e.removeListener(P)},[P]),r.useEffect(()=>{let e=e=>{e.key===l&&L(e.newValue||v)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[L]),r.useEffect(()=>{N(null!=e?e:E)},[e,E]);let S=r.useMemo(()=>({theme:E,setTheme:L,forcedTheme:e,resolvedTheme:"system"===E?b:E,themes:n?[...c,"system"]:c,systemTheme:n?b:void 0}),[E,L,e,b,n,c]);return r.createElement(a.Provider,{value:S},r.createElement(d,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:s,storageKey:l,themes:c,defaultTheme:v,attribute:h,value:y,children:w,attrs:C,nonce:g}),w)},d=r.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:s,enableColorScheme:a,defaultTheme:l,value:u,attrs:c,nonce:d})=>{let f="system"===l,m="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,p=a?(o.includes(l)?l:null)?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,r=!0)=>{let i=u?u[e]:e,s=t?e+"|| ''":`'${i}'`,l="";return a&&r&&!t&&o.includes(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===n?t||i?l+=`c.add(${s})`:l+="null":i&&(l+=`d[s](n,${s})`),l},h=e?`!function(){${m}${v(e)}}()`:s?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${i}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${u?`var x=${JSON.stringify(u)};`:""}${v(u?"x[e]":"e",!0)}}${f?"":"else{"+v(l,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${u?`var x=${JSON.stringify(u)};`:""}${v(u?"x[e]":"e",!0)}}else{${v(l,!1,!1)};}${p}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:h}})}),f=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},m=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},p=e=>(e||(e=window.matchMedia(i)),e.matches?"dark":"light")}}]);