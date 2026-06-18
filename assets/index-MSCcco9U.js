import{i as e,r as t,t as n}from"./rolldown-runtime-aKtaBQYM.js";import{A as r,B as i,C as a,D as o,E as s,F as c,I as l,L as u,M as d,N as f,O as p,P as m,R as h,S as g,T as _,_ as v,a as y,b,c as x,d as S,f as C,g as w,h as T,i as E,j as D,k as O,l as k,m as ee,n as te,o as ne,p as A,r as re,s as j,t as ie,u as ae,v as oe,w as M,x as se,y as ce,z as N}from"./editor-DTRQFOrh.js";import{n as le,t as ue}from"./markdown-Ry0USG2Z.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var de=typeof window<`u`,fe,P=e=>fe=e,pe=Symbol();function F(e){return e&&typeof e==`object`&&Object.prototype.toString.call(e)===`[object Object]`&&typeof e.toJSON!=`function`}var I;(function(e){e.direct=`direct`,e.patchObject=`patch object`,e.patchFunction=`patch function`})(I||={});var me=typeof window==`object`&&window.window===window?window:typeof self==`object`&&self.self===self?self:typeof global==`object`&&global.global===global?global:typeof globalThis==`object`?globalThis:{HTMLElement:null};function L(e,{autoBom:t=!1}={}){return t&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([`﻿`,e],{type:e.type}):e}function R(e,t,n){let r=new XMLHttpRequest;r.open(`GET`,e),r.responseType=`blob`,r.onload=function(){ge(r.response,t,n)},r.onerror=function(){console.error(`could not download file`)},r.send()}function z(e){let t=new XMLHttpRequest;t.open(`HEAD`,e,!1);try{t.send()}catch{}return t.status>=200&&t.status<=299}function B(e){try{e.dispatchEvent(new MouseEvent(`click`))}catch{let t=new MouseEvent(`click`,{bubbles:!0,cancelable:!0,view:window,detail:0,screenX:80,screenY:20,clientX:80,clientY:20,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,button:0,relatedTarget:null});e.dispatchEvent(t)}}var V=typeof navigator==`object`?navigator:{userAgent:``},he=/Macintosh/.test(V.userAgent)&&/AppleWebKit/.test(V.userAgent)&&!/Safari/.test(V.userAgent),ge=de?typeof HTMLAnchorElement<`u`&&`download`in HTMLAnchorElement.prototype&&!he?_e:`msSaveOrOpenBlob`in V?ve:ye:()=>{};function _e(e,t=`download`,n){let r=document.createElement(`a`);r.download=t,r.rel=`noopener`,typeof e==`string`?(r.href=e,r.origin===location.origin?B(r):z(r.href)?R(e,t,n):(r.target=`_blank`,B(r))):(r.href=URL.createObjectURL(e),setTimeout(function(){URL.revokeObjectURL(r.href)},4e4),setTimeout(function(){B(r)},0))}function ve(e,t=`download`,n){if(typeof e==`string`)if(z(e))R(e,t,n);else{let t=document.createElement(`a`);t.href=e,t.target=`_blank`,setTimeout(function(){B(t)})}else navigator.msSaveOrOpenBlob(L(e,n),t)}function ye(e,t,n,r){if(r||=open(``,`_blank`),r&&(r.document.title=r.document.body.innerText=`downloading...`),typeof e==`string`)return R(e,t,n);let i=e.type===`application/octet-stream`,a=/constructor/i.test(String(me.HTMLElement))||`safari`in me,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&a||he)&&typeof FileReader<`u`){let t=new FileReader;t.onloadend=function(){let e=t.result;if(typeof e!=`string`)throw r=null,Error(`Wrong reader.result type`);e=o?e:e.replace(/^data:[^;]*;/,`data:attachment/file;`),r?r.location.href=e:location.assign(e),r=null},t.readAsDataURL(e)}else{let t=URL.createObjectURL(e);r?r.location.assign(t):location.href=t,r=null,setTimeout(function(){URL.revokeObjectURL(t)},4e4)}}var{assign:be}=Object;function xe(){let e=p(!0),t=e.run(()=>c({})),n=[],r=[],i=d({install(e){P(i),i._a=e,e.provide(pe,i),e.config.globalProperties.$pinia=i,r.forEach(e=>n.push(e)),r=[]},use(e){return this._a?n.push(e):r.push(e),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}var Se=()=>{};function Ce(e,t,n,r=Se){e.add(t);let i=()=>{e.delete(t)&&r()};return!n&&O()&&f(i),i}function H(e,...t){e.forEach(e=>{e(...t)})}var we=e=>e(),U=Symbol(),Te=Symbol();function Ee(e,t){e instanceof Map&&t instanceof Map?t.forEach((t,n)=>e.set(n,t)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(let n in t){if(!t.hasOwnProperty(n))continue;let i=t[n],a=e[n];F(a)&&F(i)&&e.hasOwnProperty(n)&&!D(i)&&!r(i)?e[n]=Ee(a,i):e[n]=i}return e}var De=Symbol();function Oe(e){return!F(e)||!Object.prototype.hasOwnProperty.call(e,De)}var{assign:W}=Object;function G(e){return!!(D(e)&&e.effect)}function ke(e,t,n,r){let{state:i,actions:a,getters:o}=t,s=n.state.value[e],c;function l(){return s||(n.state.value[e]=i?i():{}),W(u(n.state.value[e]),a,Object.keys(o||{}).reduce((t,r)=>(t[r]=d(x(()=>{P(n);let t=n._s.get(e);return o[r].call(t,t)})),t),{}))}return c=Ae(e,l,t,n,r,!0),c}function Ae(e,t,n={},i,a,o){let u,d=W({actions:{}},n),f={deep:!0},h,g,_=new Set,v=new Set,y=i.state.value[e];!o&&!y&&(i.state.value[e]={}),c({});let x;function S(t){let n;h=g=!1,typeof t==`function`?(t(i.state.value[e]),n={type:I.patchFunction,storeId:e,events:void 0}):(Ee(i.state.value[e],t),n={type:I.patchObject,payload:t,storeId:e,events:void 0});let r=x=Symbol();b().then(()=>{x===r&&(h=!0)}),g=!0,H(_,n,i.state.value[e])}let C=o?function(){let{state:e}=n,t=e?e():{};this.$patch(e=>{W(e,t)})}:Se;function w(){u.stop(),_.clear(),v.clear(),i._s.delete(e)}let T=(t,n=``)=>{if(U in t)return t[Te]=n,t;let r=function(){P(i);let n=Array.from(arguments),a=new Set,o=new Set;function s(e){a.add(e)}function c(e){o.add(e)}H(v,{args:n,name:r[Te],store:E,after:s,onError:c});let l;try{l=t.apply(this&&this.$id===e?this:E,n)}catch(e){throw H(o,e),e}return l instanceof Promise?l.then(e=>(H(a,e),e)).catch(e=>(H(o,e),Promise.reject(e))):(H(a,l),l)};return r[U]=!0,r[Te]=n,r},E=m({_p:i,$id:e,$onAction:Ce.bind(null,v),$patch:S,$reset:C,$subscribe(t,n={}){let r=Ce(_,t,n.detached,()=>a()),a=u.run(()=>s(()=>i.state.value[e],r=>{(n.flush===`sync`?g:h)&&t({storeId:e,type:I.direct,events:void 0},r)},W({},f,n)));return r},$dispose:w});i._s.set(e,E);let O=(i._a&&i._a.runWithContext||we)(()=>i._e.run(()=>(u=p()).run(()=>t({action:T}))));for(let t in O){let n=O[t];D(n)&&!G(n)||r(n)?o||(y&&Oe(n)&&(D(n)?n.value=y[t]:Ee(n,y[t])),i.state.value[e][t]=n):typeof n==`function`&&(O[t]=T(n,t),d.actions[t]=n)}return W(E,O),W(l(E),O),Object.defineProperty(E,"$state",{get:()=>i.state.value[e],set:e=>{S(t=>{W(t,e)})}}),i._p.forEach(e=>{W(E,u.run(()=>e({store:E,app:i._a,pinia:i,options:d})))}),y&&o&&n.hydrate&&n.hydrate(E.$state,y),h=!0,g=!0,E}function K(e,t,n){let r,i=typeof t==`function`;r=i?n:t;function a(n,a){let o=v();return n||=o?oe(pe,null):null,n&&P(n),n=fe,n._s.has(e)||(i?Ae(e,t,r,n):ke(e,r,n)),n._s.get(e)}return a.$id=e,a}function q(e){return[e.email,e.phone,e.city,e.github,e.website,e.portfolio,e.linkedin].filter(e=>e&&e!==``).join(` · `)}var J=`
  .content { max-width: 100%; }
  .content > *:first-child { margin-top: 0; }
  .content h2 {
    font-size: 15px; font-weight: 700; margin: 28px 0 12px;
    padding-bottom: 6px; letter-spacing: 0.04em;
  }
  .content h3 { font-size: 14px; font-weight: 700; margin: 18px 0 6px; }
  .content p { margin: 0 0 10px; line-height: 1.65; }
  .content ul, .content ol { margin: 6px 0 12px; padding-left: 1.3em; }
  .content li { margin: 4px 0; line-height: 1.6; }
  .content strong { font-weight: 700; }
  .content em { font-style: italic; opacity: 0.85; }
  .content hr { border: none; margin: 20px 0; }
  .content pre {
    max-width: 100%; overflow-x: auto; font-size: 12px;
    padding: 12px 14px; border-radius: 6px; line-height: 1.5;
  }
  .content code { font-size: 0.9em; padding: 1px 5px; border-radius: 3px; }
  .content table { width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 13px; }
  .content th, .content td { padding: 8px 10px; border: 1px solid currentColor; opacity: 0.9; }
`;function Y(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function je(e){let t=Y(e.meta.name||``),n=Y(e.meta.role||``),r=Y(q(e.meta)),{htmlContent:i}=e;return{css:`
            body { background: #e5e7eb; font-family: "Times New Roman", "Noto Serif SC", serif; color: #111827; }
            .page {
              width: 100%; max-width: 800px; min-height: 100vh; margin: 36px auto;
              background: #fff; padding: 56px 72px 72px;
              box-shadow: 0 2px 12px rgba(0,0,0,0.06);
            }
            .resume-header { text-align: center; margin-bottom: 32px; }
            .resume-name { font-size: 28px; font-weight: 700; letter-spacing: 0.04em; margin-bottom: 6px; }
            .resume-role { font-size: 14px; font-style: italic; color: #374151; margin-bottom: 8px; }
            .resume-contact { font-size: 12px; color: #6b7280; }
            .content h2 {
              color: #111827; border-bottom: 1px solid #111827;
              font-size: 14px; font-variant: small-caps; letter-spacing: 0.06em;
            }
            .content h3 { font-size: 14px; font-weight: 700; }
            .content p { text-align: justify; }
            .content em { color: #6b7280; }
            .content pre { background: #f9fafb; color: #374151; border: 1px solid #d1d5db; font-size: 11px; }
            .content code { background: #f3f4f6; color: #1f2937; }
            body.mode-mobile { background: #fff; }
            body.mode-mobile .page { margin: 0; padding: 40px 28px 56px; box-shadow: none; }
            ${J}
          `,html:`
            <header class="resume-header">
              <h1 class="resume-name">${t}</h1>
              <div class="resume-role">${n}</div>
              <div class="resume-contact">${r}</div>
            </header>
            <div class="content">${i}</div>
          `}}var Me={id:`academic`,name:`学术履历 (Academic)`,badge:`学术`,description:`规范学术格式，适合科研、教职、留学申请。`,accent:`#1f2937`,chips:[`姓名`,`学位`,`机构`],render:je};function Ne(e){let t=Y(e.meta.name||``),n=Y(e.meta.role||``),r=Y(q(e.meta)),{htmlContent:i}=e;return{css:`
            body { background: #d1fae5; font-family: "Inter", "PingFang SC", sans-serif; color: #1f2937; font-size: 13px; }
            .page {
              width: 100%; max-width: 780px; min-height: 100vh; margin: 24px auto;
              background: #fff; padding: 32px 40px 40px;
              box-shadow: 0 2px 16px rgba(5,150,105,0.1);
            }
            .resume-header {
              display: flex; flex-wrap: wrap; align-items: baseline; gap: 8px 16px;
              padding-bottom: 12px; margin-bottom: 4px;
              border-bottom: 2px solid #059669;
            }
            .resume-name { font-size: 22px; font-weight: 800; color: #047857; }
            .resume-role { font-size: 13px; color: #059669; font-weight: 600; }
            .resume-contact { font-size: 11px; color: #6b7280; width: 100%; }
            .content h2 { font-size: 12px; color: #047857; border-bottom: 1px solid #a7f3d0; margin: 16px 0 8px; }
            .content h3 { font-size: 12px; margin: 10px 0 4px; }
            .content p { margin: 0 0 6px; line-height: 1.5; font-size: 12px; }
            .content ul, .content ol { margin: 4px 0 8px; }
            .content li { margin: 2px 0; font-size: 12px; line-height: 1.45; }
            .content strong { color: #047857; }
            .content em { color: #6b7280; font-size: 11px; }
            .content pre { background: #ecfdf5; font-size: 10px; padding: 8px 10px; }
            .content code { background: #d1fae5; color: #047857; font-size: 11px; }
            body.mode-mobile { background: #fff; }
            body.mode-mobile .page { margin: 0; padding: 24px 20px 32px; box-shadow: none; }
            ${J}
          `,html:`
            <header class="resume-header">
              <h1 class="resume-name">${t}</h1>
              <span class="resume-role">${n}</span>
              <div class="resume-contact">${r}</div>
            </header>
            <div class="content">${i}</div>
          `}}var Pe={id:`compact`,name:`紧凑一页 (Compact)`,badge:`紧凑`,description:`小字号高密度排版，力求内容塞进一页 A4。`,accent:`#059669`,chips:[`姓名`,`职位`,`一行`],render:Ne};function Fe(e){let t=Y(e.meta.name||``),n=Y(e.meta.role||``),r=Y(q(e.meta)),{htmlContent:i}=e;return{css:`
            body { background: #fce7f3; font-family: "Inter", "PingFang SC", sans-serif; color: #4a044e; }
            .page {
              width: 100%; max-width: 800px; min-height: 100vh; margin: 32px auto;
              background: #fff; overflow: hidden;
              box-shadow: 0 12px 40px rgba(219,39,119,0.15); border-radius: 16px;
            }
            .resume-hero {
              background: linear-gradient(135deg, #db2777 0%, #7c3aed 50%, #2563eb 100%);
              color: #fff; padding: 48px 48px 40px;
            }
            .resume-name { font-size: 38px; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 10px; }
            .resume-role {
              display: inline-block; font-size: 13px; font-weight: 600;
              background: rgba(255,255,255,0.2); padding: 6px 14px; border-radius: 999px;
              margin-bottom: 14px; backdrop-filter: blur(4px);
            }
            .resume-contact { font-size: 13px; opacity: 0.9; }
            .resume-body { padding: 36px 48px 56px; }
            .content h2 {
              color: #db2777; border-bottom: none;
              display: inline-block; background: linear-gradient(90deg, #fce7f3, transparent);
              padding: 4px 12px 4px 0; border-radius: 4px;
            }
            .content h3 { color: #7c3aed; }
            .content strong { color: #db2777; }
            .content em { color: #a855f7; }
            .content li::marker { color: #db2777; }
            .content pre { background: #fdf4ff; color: #6b21a8; border: 1px solid #f0abfc; }
            .content code { background: #fce7f3; color: #be185d; }
            body.mode-mobile { background: #fff; }
            body.mode-mobile .page { margin: 0; border-radius: 0; box-shadow: none; }
            body.mode-mobile .resume-hero { padding: 36px 28px 32px; }
            body.mode-mobile .resume-body { padding: 28px 24px 48px; }
            body.mode-mobile .resume-name { font-size: 30px; }
            ${J}
          `,html:`
            <header class="resume-hero">
              <h1 class="resume-name">${t}</h1>
              <div class="resume-role">${n}</div>
              <div class="resume-contact">${r}</div>
            </header>
            <div class="resume-body">
              <div class="content">${i}</div>
            </div>
          `}}var Ie={id:`creative`,name:`创意渐变 (Creative)`,badge:`创意`,description:`渐变页眉与色块标签，适合设计、新媒体岗位。`,accent:`#db2777`,chips:[`姓名`,`头衔`,`社交`],render:Fe};function Le(e){let t=Y(e.meta.name||``),n=Y(e.meta.role||``),r=Y(q(e.meta)),{htmlContent:i}=e;return{css:`
            body { background: #020617; font-family: "Inter", "JetBrains Mono", sans-serif; color: #d1fae5; }
            .page {
              width: 100%; max-width: 820px; min-height: 100vh; margin: 34px auto;
              background: linear-gradient(180deg, #06111f 0%, #020617 100%);
              padding: 46px 52px 64px; border-radius: 20px;
              border: 1px solid rgba(34,197,94,0.32);
              box-shadow: 0 0 0 1px rgba(34,197,94,0.12), 0 22px 60px rgba(0,0,0,0.45), 0 0 54px rgba(34,197,94,0.12);
            }
            .resume-header { position: relative; padding-bottom: 30px; margin-bottom: 10px; border-bottom: 1px solid rgba(34,197,94,0.28); }
            .resume-header::before { content: ""; position: absolute; top: -16px; right: 0; width: 120px; height: 120px; background: radial-gradient(circle, rgba(34,197,94,0.18), transparent 66%); pointer-events: none; }
            .resume-name { font-size: 38px; line-height: 1.1; font-weight: 900; color: #bbf7d0; letter-spacing: -0.03em; margin-bottom: 10px; text-shadow: 0 0 22px rgba(34,197,94,0.18); }
            .resume-role { display: inline-flex; font-size: 13px; color: #22c55e; border: 1px solid rgba(34,197,94,0.32); background: rgba(34,197,94,0.08); border-radius: 999px; padding: 5px 12px; margin-bottom: 14px; font-weight: 800; }
            .resume-contact { font-size: 12px; color: #93c5fd; }
            .content h2 { color: #86efac; border-bottom: 1px solid rgba(34,197,94,0.24); }
            .content h3 { color: #bfdbfe; }
            .content p, .content li { color: #cbd5e1; }
            .content strong { color: #22c55e; }
            .content em { color: #94a3b8; }
            .content li::marker { color: #22c55e; }
            .content pre { background: #020617; color: #bbf7d0; border: 1px solid rgba(34,197,94,0.24); }
            .content code { background: rgba(34,197,94,0.12); color: #86efac; }
            body.mode-mobile { background: #020617; }
            body.mode-mobile .page { margin: 0; border-radius: 0; box-shadow: none; padding: 40px 26px 56px; }
            body.mode-mobile .resume-name { font-size: 30px; }
            ${J}
          `,html:`
            <header class="resume-header">
              <h1 class="resume-name">${t}</h1>
              <div class="resume-role">${n}</div>
              <div class="resume-contact">${r}</div>
            </header>
            <div class="content">${i}</div>
          `}}var Re={id:`dark`,name:`暗色霓虹 (Dark)`,badge:`暗色`,description:`暗色背景、荧光强调，适合技术、AI、开发者作品集。`,accent:`#22c55e`,chips:[`暗色`,`霓虹`,`技术`],render:Le};function ze(e){let t=Y(e.meta.name||``),n=Y(e.meta.role||``),r=Y(q(e.meta)),{htmlContent:i}=e;return{css:`
            body { background: #f5f0eb; font-family: "Noto Serif SC", "Playfair Display", serif; color: #3d2c1e; }
            .page {
              width: 100%; max-width: 780px; min-height: 100vh; margin: 40px auto;
              background: #fffcf8; padding: 64px 68px 80px;
              box-shadow: 0 2px 20px rgba(61,44,30,0.08);
              border-top: 4px solid #92400e;
            }
            .resume-header { text-align: center; margin-bottom: 40px; }
            .resume-name {
              font-family: "Playfair Display", "Noto Serif SC", serif;
              font-size: 40px; font-weight: 900; color: #78350f; letter-spacing: 0.06em; margin-bottom: 10px;
            }
            .resume-role { font-size: 14px; color: #a16207; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 16px; }
            .resume-contact { font-size: 13px; color: #78716c; }
            .resume-divider { width: 60px; height: 1px; background: #d6b38a; margin: 0 auto 36px; }
            .content h2 { color: #92400e; border-bottom: 1px solid #e7d5c4; font-family: "Playfair Display", serif; letter-spacing: 0.08em; }
            .content h3 { color: #78350f; }
            .content strong { color: #92400e; }
            .content em { color: #a8a29e; }
            .content pre { background: #faf5f0; color: #57534e; border: 1px solid #e7d5c4; }
            .content code { background: #fef3c7; color: #92400e; }
            body.mode-mobile { background: #fffcf8; }
            body.mode-mobile .page { margin: 0; padding: 48px 28px 64px; box-shadow: none; }
            ${J}
          `,html:`
            <header class="resume-header">
              <h1 class="resume-name">${t}</h1>
              <div class="resume-role">${n}</div>
              <div class="resume-contact">${r}</div>
            </header>
            <div class="resume-divider"></div>
            <div class="content">${i}</div>
          `}}var Be={id:`elegant`,name:`优雅衬线 (Elegant)`,badge:`优雅`,description:`Playfair 衬线标题，适合咨询、金融、品牌类岗位。`,accent:`#92400e`,chips:[`姓名`,`职称`,`联络`],render:ze};function Ve(e){let t=Y(e.meta.name||``),n=Y(e.meta.role||``),r=Y(q(e.meta)),{htmlContent:i}=e;return{css:`
            body { background: #fff1f2; font-family: "Playfair Display", "Noto Serif SC", serif; color: #1f2937; }
            .page {
              width: 100%; max-width: 820px; min-height: 100vh; margin: 36px auto;
              background: #fff; padding: 58px 62px 76px;
              box-shadow: 0 18px 50px rgba(225,29,72,0.10);
              border: 1px solid #ffe4e6;
            }
            .resume-header { display: grid; grid-template-columns: 1fr auto; gap: 20px; align-items: end; padding-bottom: 28px; border-bottom: 6px solid #111827; margin-bottom: 18px; }
            .resume-name { font-size: 50px; line-height: 0.95; font-weight: 900; letter-spacing: -0.06em; color: #111827; max-width: 520px; }
            .resume-side { writing-mode: vertical-rl; text-orientation: mixed; color: #e11d48; font-family: "Inter", sans-serif; font-size: 11px; font-weight: 900; letter-spacing: 0.18em; }
            .resume-role { font-family: "Inter", sans-serif; display: inline-block; margin-top: 18px; font-size: 13px; font-weight: 900; color: #e11d48; letter-spacing: 0.08em; text-transform: uppercase; }
            .resume-contact { font-family: "Inter", sans-serif; font-size: 12px; color: #64748b; margin-top: 10px; }
            .content { font-family: "Noto Serif SC", serif; }
            .content h2 { font-family: "Inter", sans-serif; color: #111827; border-bottom: 1px solid #fecdd3; font-size: 13px; }
            .content h3 { color: #9f1239; }
            .content strong { color: #e11d48; }
            .content em { color: #64748b; }
            .content li::marker { color: #e11d48; }
            .content pre { background: #fff1f2; color: #881337; border: 1px solid #fecdd3; }
            .content code { background: #ffe4e6; color: #be123c; }
            body.mode-mobile { background: #fff; }
            body.mode-mobile .page { margin: 0; padding: 44px 26px 56px; box-shadow: none; border: none; }
            body.mode-mobile .resume-header { grid-template-columns: 1fr; border-bottom-width: 4px; }
            body.mode-mobile .resume-side { writing-mode: initial; }
            body.mode-mobile .resume-name { font-size: 36px; }
            ${J}
          `,html:`
            <header class="resume-header">
              <div>
                <h1 class="resume-name">${t}</h1>
                <div class="resume-role">${n}</div>
                <div class="resume-contact">${r}</div>
              </div>
              <div class="resume-side">PORTFOLIO / RESUME</div>
            </header>
            <div class="content">${i}</div>
          `}}var He={id:`magazine`,name:`杂志排版 (Magazine)`,badge:`杂志`,description:`大标题与杂志式留白，适合品牌、内容、设计和个人 IP。`,accent:`#e11d48`,chips:[`封面`,`个人IP`,`设计`],render:Ve};function Ue(e){let t=Y(e.meta.name||``),n=Y(e.meta.role||``),r=Y(q(e.meta)),{htmlContent:i}=e;return{css:`
            body { background: #f5f5f4; font-family: "Inter", "PingFang SC", sans-serif; color: #292524; }
            .page {
              width: 100%; max-width: 720px; min-height: 100vh; margin: 48px auto;
              background: #fff; padding: 80px 72px 96px;
              box-shadow: 0 1px 3px rgba(0,0,0,0.04);
            }
            .resume-header { margin-bottom: 48px; }
            .resume-name { font-size: 42px; font-weight: 300; letter-spacing: -0.02em; line-height: 1.1; margin-bottom: 12px; }
            .resume-role { font-size: 15px; color: #78716c; font-weight: 400; margin-bottom: 16px; }
            .resume-contact { font-size: 13px; color: #a8a29e; }
            .content h2 { color: #292524; border-bottom: none; font-weight: 600; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; margin-top: 40px; }
            .content h3 { font-weight: 600; font-size: 14px; }
            .content em { color: #a8a29e; font-size: 13px; }
            .content pre { background: #fafaf9; color: #57534e; border: 1px solid #e7e5e4; }
            .content code { background: #f5f5f4; color: #57534e; }
            body.mode-mobile { background: #fff; }
            body.mode-mobile .page { margin: 0; padding: 48px 28px 64px; box-shadow: none; }
            body.mode-mobile .resume-name { font-size: 32px; }
            ${J}
          `,html:`
            <header class="resume-header">
              <h1 class="resume-name">${t}</h1>
              <div class="resume-role">${n}</div>
              <div class="resume-contact">${r}</div>
            </header>
            <div class="content">${i}</div>
          `}}var We={id:`minimal`,name:`极简留白 (Minimal)`,badge:`极简`,description:`大留白、细线条，适合设计类与互联网岗位。`,accent:`#334155`,chips:[`姓名`,`方向`,`联系`],render:Ue};function Ge(e){let t=Y(e.meta.name||``),n=Y(e.meta.role||``),r=Y(q(e.meta)),{htmlContent:i}=e;return{css:`
            body { background: #eff6ff; font-family: "Inter", "PingFang SC", sans-serif; color: #0f172a; }
            .page {
              width: 100%; max-width: 860px; min-height: 100vh; margin: 34px auto;
              background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
              padding: 0; overflow: hidden; border-radius: 18px;
              box-shadow: 0 18px 46px rgba(37,99,235,0.12), 0 0 0 1px rgba(37,99,235,0.10);
            }
            .resume-header { padding: 42px 48px 32px; background: radial-gradient(circle at 8% 10%, #dbeafe, transparent 34%), linear-gradient(135deg, #ffffff 0%, #eff6ff 100%); border-bottom: 1px solid #dbeafe; }
            .resume-kicker { display: inline-flex; align-items: center; height: 26px; padding: 0 10px; border-radius: 999px; color: #2563eb; background: #dbeafe; font-size: 11px; font-weight: 800; margin-bottom: 14px; }
            .resume-name { font-size: 38px; line-height: 1.1; font-weight: 900; letter-spacing: -0.04em; color: #1e3a8a; margin-bottom: 10px; }
            .resume-role { font-size: 15px; color: #1d4ed8; font-weight: 700; margin-bottom: 12px; }
            .resume-contact { font-size: 12px; color: #64748b; }
            .resume-body { padding: 34px 48px 58px; }
            .content h2 { color: #1d4ed8; border-bottom: 1px solid #bfdbfe; }
            .content h3 { color: #0f172a; }
            .content strong { color: #2563eb; }
            .content em { color: #64748b; }
            .content li::marker { color: #2563eb; }
            .content pre { background: #eff6ff; color: #1e3a8a; border: 1px solid #bfdbfe; }
            .content code { background: #dbeafe; color: #1d4ed8; }
            body.mode-mobile { background: #fff; }
            body.mode-mobile .page { margin: 0; border-radius: 0; box-shadow: none; }
            body.mode-mobile .resume-header { padding: 38px 26px 28px; }
            body.mode-mobile .resume-body { padding: 28px 24px 48px; }
            body.mode-mobile .resume-name { font-size: 30px; }
            ${J}
          `,html:`
            <header class="resume-header">
              <div class="resume-kicker">PRODUCT RESUME</div>
              <h1 class="resume-name">${t}</h1>
              <div class="resume-role">${n}</div>
              <div class="resume-contact">${r}</div>
            </header>
            <div class="resume-body">
              <div class="content">${i}</div>
            </div>
          `}}var Ke={id:`product`,name:`产品清爽 (Product)`,badge:`产品`,description:`蓝白产品文档感，适合互联网、产品经理、运营与综合岗位。`,accent:`#2563eb`,chips:[`产品感`,`蓝白`,`清爽`],render:Ge};function qe(e){let t=Y(e.meta.name||``),n=Y(e.meta.role||``),r=Y(q(e.meta)),{htmlContent:i}=e;return{css:`
            body { background: #e8ecf1; font-family: "Noto Serif SC", "PingFang SC", serif; color: #1a1a2e; }
            .page {
              width: 100%; max-width: 800px; min-height: 100vh; margin: 36px auto;
              background: #fff; padding: 56px 64px 72px;
              box-shadow: 0 4px 24px rgba(0,0,0,0.08);
            }
            .resume-header {
              text-align: center; padding-bottom: 28px; margin-bottom: 8px;
              border-bottom: 2px solid #1e40af;
            }
            .resume-name { font-size: 36px; font-weight: 900; color: #1e40af; letter-spacing: 0.12em; margin-bottom: 8px; }
            .resume-role { font-size: 16px; color: #475569; font-weight: 500; margin-bottom: 12px; }
            .resume-contact { font-size: 13px; color: #64748b; letter-spacing: 0.02em; }
            .content h2 { color: #1e40af; border-bottom: 1px solid #cbd5e1; text-transform: uppercase; }
            .content h3 { color: #1e293b; }
            .content strong { color: #1e40af; }
            .content em { color: #64748b; }
            .content pre { background: #f1f5f9; color: #334155; }
            .content code { background: #e2e8f0; color: #1e40af; }
            body.mode-mobile { background: #fff; }
            body.mode-mobile .page { margin: 0; padding: 40px 28px 56px; box-shadow: none; }
            body.mode-mobile .resume-name { font-size: 28px; }
            ${J}
          `,html:`
            <header class="resume-header">
              <h1 class="resume-name">${t}</h1>
              <div class="resume-role">${n}</div>
              <div class="resume-contact">${r}</div>
            </header>
            <div class="content">${i}</div>
          `}}var Je={id:`professional`,name:`商务正式 (Professional)`,badge:`商务简历`,description:`适合传统行业与校招，字段映射为姓名、职位和联系方式。`,accent:`#1e40af`,chips:[`姓名`,`职位`,`联系`],render:qe};function Ye(e){let t=Y(e.meta.name||``),n=Y(e.meta.role||``),r=Y(q(e.meta)),{htmlContent:i}=e;return{css:`
            body { background: #d1d5db; font-family: "Inter", "PingFang SC", sans-serif; color: #1f2937; }
            .page {
              width: 100%; max-width: 900px; min-height: 100vh; margin: 32px auto;
              background: #fff; display: flex; box-shadow: 0 8px 32px rgba(0,0,0,0.12);
            }
            .resume-sidebar {
              flex: 0 0 260px; background: linear-gradient(180deg, #0f766e 0%, #115e59 100%);
              color: #fff; padding: 48px 28px 40px; display: flex; flex-direction: column;
            }
            .resume-name { font-size: 28px; font-weight: 800; line-height: 1.25; margin-bottom: 10px; }
            .resume-role {
              font-size: 13px; font-weight: 600; opacity: 0.9; margin-bottom: 32px;
              padding-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.25);
            }
            .resume-contact { font-size: 12px; line-height: 1.8; opacity: 0.85; margin-top: auto; }
            .resume-main { flex: 1; padding: 48px 44px 56px; min-width: 0; }
            .content h2 { color: #0f766e; border-bottom: 2px solid #99f6e4; }
            .content h3 { color: #134e4a; }
            .content strong { color: #0f766e; }
            .content em { color: #6b7280; }
            .content pre { background: #f0fdfa; color: #134e4a; }
            .content code { background: #ccfbf1; color: #0f766e; }
            body.mode-mobile { background: #fff; }
            body.mode-mobile .page { margin: 0; flex-direction: column; box-shadow: none; }
            body.mode-mobile .resume-sidebar { flex: none; padding: 36px 24px 28px; }
            body.mode-mobile .resume-main { padding: 32px 24px 48px; }
            ${J}
          `,html:`
            <aside class="resume-sidebar">
              <h1 class="resume-name">${t}</h1>
              <div class="resume-role">${n}</div>
              <div class="resume-contact">${r}</div>
            </aside>
            <main class="resume-main">
              <div class="content">${i}</div>
            </main>
          `}}var Xe={id:`sidebar`,name:`双栏侧栏 (Sidebar)`,badge:`双栏`,description:`左侧色块展示个人信息，右侧为经历正文。`,accent:`#0f766e`,chips:[`姓名`,`岗位`,`侧栏`],render:Ye};function Ze(e){let t=Y(e.meta.name||``),n=Y(e.meta.role||``),r=Y(q(e.meta)),{htmlContent:i}=e,a=t.toLowerCase().replace(/\s+/g,`-`);return{css:`
            body { background: #0f172a; font-family: "JetBrains Mono", "Inter", monospace; color: #e2e8f0; }
            .page {
              width: 100%; max-width: 820px; min-height: 100vh; margin: 32px auto;
              background: #1e1e2e; padding: 0 0 48px;
              box-shadow: 0 0 40px rgba(124, 58, 237, 0.15);
              border: 1px solid #312e81;
              border-radius: 8px; overflow: hidden;
            }
            .resume-header {
              background: #181825; padding: 16px 24px;
              border-bottom: 1px solid #313244;
              display: flex; align-items: center; gap: 8px;
            }
            .terminal-dots { display: flex; gap: 6px; }
            .terminal-dots span { width: 12px; height: 12px; border-radius: 50%; }
            .terminal-dots span:nth-child(1) { background: #f38ba8; }
            .terminal-dots span:nth-child(2) { background: #fab387; }
            .terminal-dots span:nth-child(3) { background: #a6e3a1; }
            .terminal-title { font-size: 12px; color: #6c7086; margin-left: 8px; }
            .resume-intro { padding: 32px 40px 0; }
            .resume-name { font-size: 32px; font-weight: 700; color: #cba6f7; margin-bottom: 6px; }
            .resume-role { font-size: 14px; color: #a6e3a1; margin-bottom: 4px; }
            .resume-role::before { content: "$ role --set "; color: #6c7086; }
            .resume-contact { font-size: 12px; color: #89b4fa; margin-bottom: 8px; }
            .resume-contact::before { content: "# contact: "; color: #6c7086; }
            .resume-body { padding: 16px 40px 0; }
            .content h2 { color: #cba6f7; border-bottom: 1px dashed #45475a; font-family: "JetBrains Mono", monospace; }
            .content h3 { color: #f9e2af; font-family: "Inter", sans-serif; }
            .content strong { color: #89b4fa; }
            .content em { color: #6c7086; }
            .content li::marker { color: #a6e3a1; }
            .content pre { background: #11111b; color: #cdd6f4; border: 1px solid #313244; }
            .content code { background: #313244; color: #f38ba8; }
            body.mode-mobile { background: #1e1e2e; }
            body.mode-mobile .page { margin: 0; border-radius: 0; border: none; }
            body.mode-mobile .resume-intro, body.mode-mobile .resume-body { padding-left: 24px; padding-right: 24px; }
            ${J}
          `,html:`
            <header class="resume-header">
              <div class="terminal-dots"><span></span><span></span><span></span></div>
              <span class="terminal-title">~/resume/${a}</span>
            </header>
            <div class="resume-intro">
              <h1 class="resume-name">${t}</h1>
              <div class="resume-role">${n}</div>
              <div class="resume-contact">${r}</div>
            </div>
            <div class="resume-body">
              <div class="content">${i}</div>
            </div>
          `}}var Qe={id:`tech`,name:`技术极客 (Tech)`,badge:`技术`,description:`等宽字体点缀、代码风装饰，适合研发与数据岗位。`,accent:`#7c3aed`,chips:[`Name`,`Role`,`Links`],render:Ze};function $e(e){let t=Y(e.meta.name||``),n=Y(e.meta.role||``),r=Y(q(e.meta)),{htmlContent:i}=e;return{css:`
            body { background: #fff7ed; font-family: "Inter", "PingFang SC", sans-serif; color: #1f2937; }
            .page {
              width: 100%; max-width: 840px; min-height: 100vh; margin: 34px auto;
              background: #fff; padding: 48px 58px 68px;
              box-shadow: 0 14px 42px rgba(249,115,22,0.12);
              border-radius: 18px;
            }
            .resume-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; padding-bottom: 26px; margin-bottom: 8px; border-bottom: 1px solid #fed7aa; }
            .resume-name { font-size: 36px; line-height: 1.1; font-weight: 900; color: #9a3412; letter-spacing: -0.04em; margin-bottom: 8px; }
            .resume-role { font-size: 14px; color: #ea580c; font-weight: 800; }
            .resume-contact { max-width: 260px; text-align: right; font-size: 12px; color: #78716c; line-height: 1.7; }
            .content { position: relative; padding-left: 26px; }
            .content::before { content: ""; position: absolute; top: 18px; bottom: 0; left: 6px; width: 2px; background: linear-gradient(180deg, #fb923c, #fed7aa); }
            .content h2 { position: relative; color: #c2410c; border-bottom: 1px solid #fed7aa; }
            .content h2::before { content: ""; position: absolute; left: -26px; top: 8px; width: 12px; height: 12px; border-radius: 50%; background: #f97316; box-shadow: 0 0 0 4px #ffedd5; }
            .content h3 { color: #7c2d12; }
            .content strong { color: #ea580c; }
            .content em { color: #78716c; }
            .content li::marker { color: #f97316; }
            .content pre { background: #fff7ed; color: #7c2d12; border: 1px solid #fed7aa; }
            .content code { background: #ffedd5; color: #c2410c; }
            body.mode-mobile { background: #fff; }
            body.mode-mobile .page { margin: 0; padding: 38px 24px 56px; border-radius: 0; box-shadow: none; }
            body.mode-mobile .resume-header { flex-direction: column; }
            body.mode-mobile .resume-contact { text-align: left; max-width: none; }
            body.mode-mobile .resume-name { font-size: 30px; }
            ${J}
          `,html:`
            <header class="resume-header">
              <div>
                <h1 class="resume-name">${t}</h1>
                <div class="resume-role">${n}</div>
              </div>
              <div class="resume-contact">${r}</div>
            </header>
            <div class="content">${i}</div>
          `}}var et={id:`timeline`,name:`时间轴履历 (Timeline)`,badge:`时间轴`,description:`左侧时间轴视觉，适合突出项目经历、工作节点和成长路径。`,accent:`#f97316`,chips:[`经历`,`节点`,`项目`],render:$e},X=[Je,We,Xe,Qe,Be,Ie,Me,Pe,Ke,Re,He,et],tt={professional:Je,minimal:We,sidebar:Xe,tech:Qe,elegant:Be,creative:Ie,academic:Me,compact:Pe,product:Ke,dark:Re,magazine:He,timeline:et};function Z(e){return tt[e]??Je}function nt(e){return Z(e)}function Q(){return X}function rt(e){return e in tt}var it=`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Noto+Serif+SC:wght@400;500;600;700;900&family=Playfair+Display:wght@700;900&display=swap`,at=`
* { box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; }
html, body { overflow-x: hidden; max-width: 100%; }
.page { max-width: 100%; overflow-x: hidden; }
.content pre { max-width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }

body.mode-a4 {
  background: #e8ecf1;
}
body.mode-a4 .page {
  width: 100%;
  max-width: 210mm;
  min-height: 297mm;
  margin: 0 auto;
  box-shadow: none;
}

@media print {
  @page { margin: 10mm; size: A4; }
  html, body { overflow: visible !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { background: transparent !important; }
  .page { box-shadow: none !important; margin: 0 auto !important; min-height: auto !important; max-width: 210mm !important; }
  .content h2, .content h3 { page-break-after: avoid; }
  .content pre, .content table, .content tr { page-break-inside: avoid; }
}
`;function ot(e){return e===`mobile`?`mode-mobile`:e===`a4`?`mode-a4`:`mode-desktop`}function st(e,t){let{css:n,html:r}=e.render(t);return`<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
<link href="${it}" rel="stylesheet" />
<style>
${at}
${n}
</style>
</head>
<body class="${ot(t.device)}">
<div class="page">${r}</div>
</body>
</html>`}function ct(e,t){try{let n=localStorage.getItem(e);return n===null?t:JSON.parse(n)}catch{return t}}function lt(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function ut(e,t=``){try{return localStorage.getItem(e)??t}catch{return t}}function dt(e,t){try{localStorage.setItem(e,t)}catch{}}var ft=`resume-studio:theme`,pt=K(`theme`,{state:()=>({currentThemeId:ct(ft,`professional`)}),getters:{themes:()=>Q(),currentTheme(e){return nt(e.currentThemeId)??Q()[0]}},actions:{setTheme(e){this.currentThemeId=e,lt(ft,e)}}}),mt=K(`preview`,{state:()=>({device:`desktop`,updating:!1,desktopIframe:null,mobileIframe:null}),getters:{activeIframe(e){return e.device===`mobile`?e.mobileIframe:e.desktopIframe}},actions:{setDevice(e){this.device=e},setDesktopIframe(e){this.desktopIframe=e},setMobileIframe(e){this.mobileIframe=e},setUpdating(e){this.updating=e}}}),ht={class:`app-header`},gt={class:`header-toolbar`},_t={class:`header-group header-group--theme`},vt=[`value`],yt=[`value`],bt=[`aria-expanded`],xt={class:`header-dropdown-head`},St={class:`theme-badge`},Ct={class:`theme-config-chips`},wt={class:`header-group header-export`},Tt={class:`header-export-actions`},Et={class:`header-device`},Dt={class:`device-switcher`,role:`tablist`},Ot=[`aria-selected`],kt=[`aria-selected`],At=w({__name:`AppHeader`,props:{panelConfig:{}},emits:[`themeChange`,`fileUpload`,`exportPdf`,`exportWord`],setup(e,{emit:t}){let n=e,r=t,s=pt(),l=mt(),u=c(!1),d=c(null),f=c(null),p=x(()=>n.panelConfig.chips);function m(e){let t=e.target.value;r(`themeChange`,t)}function _(e){let t=e.target;r(`fileUpload`,t.files?.[0]),t.value=``}function v(e){l.setDevice(e)}function b(e){if(!u.value)return;let t=e.target;d.value&&!d.value.contains(t)&&(u.value=!1)}return se(()=>document.addEventListener(`click`,b)),g(()=>document.removeEventListener(`click`,b)),(t,n)=>(a(),C(`header`,ht,[n[17]||=A(`<div class="panel-brand header-brand"><div class="brand-mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div><div class="brand-info"><div class="brand-name">Resume Preview</div><div class="brand-desc">Markdown 简历排版引擎</div></div></div>`,1),k(`div`,gt,[k(`div`,_t,[n[7]||=k(`label`,{class:`header-label`,for:`header-theme-select`},`排版风格`,-1),k(`select`,{id:`header-theme-select`,class:`header-select theme-select`,"aria-label":`排版风格`,value:h(s).currentThemeId,onChange:m},[(a(!0),C(j,null,M(h(s).themes,e=>(a(),C(`option`,{key:e.id,value:e.id},i(e.name),9,yt))),128))],40,vt)]),k(`div`,{ref_key:`metaDropdownRef`,ref:d,class:`header-group header-dropdown`},[k(`button`,{class:`header-btn header-btn--ghost`,type:`button`,"aria-label":`风格`,"aria-expanded":u.value,"aria-haspopup":`true`,onClick:n[0]||=ne(e=>u.value=!u.value,[`stop`])},[...n[8]||=[A(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg><span class="header-btn-text">风格</span>`,2)]],8,bt),o(k(`div`,{class:`header-dropdown-panel`,onClick:n[1]||=ne(()=>{},[`stop`])},[k(`div`,xt,[k(`span`,St,i(e.panelConfig.badge),1),k(`strong`,null,i(e.panelConfig.title),1),k(`p`,null,i(e.panelConfig.desc),1)]),k(`div`,Ct,[(a(!0),C(j,null,M(p.value,e=>(a(),C(`span`,{key:e},i(e),1))),128))])],512),[[y,u.value]])],512),n[13]||=k(`div`,{class:`header-divider`,"aria-hidden":`true`},null,-1),k(`button`,{class:`header-btn header-btn--ghost`,type:`button`,"aria-label":`内容导入`,onClick:n[2]||=e=>f.value?.click()},[n[9]||=A(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg><span class="header-btn-text">内容导入</span><span class="header-btn-text header-btn-text--short">导入</span>`,3),k(`input`,{ref_key:`fileInputRef`,ref:f,type:`file`,accept:`.md`,hidden:``,"aria-label":`上传 Markdown 文件`,onChange:_},null,544)]),n[14]||=k(`div`,{class:`header-divider`,"aria-hidden":`true`},null,-1),k(`div`,wt,[n[12]||=k(`span`,{class:`header-label`},`导出与分享`,-1),k(`div`,Tt,[k(`button`,{class:`header-btn header-btn--primary`,type:`button`,"aria-label":`下载高清 PDF`,onClick:n[3]||=e=>r(`exportPdf`)},[...n[10]||=[A(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg><span class="header-btn-text">下载高清 PDF</span><span class="header-btn-text header-btn-text--short">PDF</span>`,3)]]),k(`button`,{class:`header-btn header-btn--secondary`,type:`button`,"aria-label":`下载 Word`,onClick:n[4]||=e=>r(`exportWord`)},[...n[11]||=[A(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M8 13h8"></path><path d="M8 17h6"></path></svg><span class="header-btn-text">下载 Word</span><span class="header-btn-text header-btn-text--short">Word</span>`,3)]])])])]),k(`div`,Et,[k(`div`,Dt,[k(`button`,{class:N([`device-tab`,{active:h(l).device===`desktop`}]),"data-device":`pc`,role:`tab`,"aria-selected":h(l).device===`desktop`,type:`button`,onClick:n[5]||=e=>v(`desktop`)},[...n[15]||=[k(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[k(`rect`,{x:`2`,y:`3`,width:`20`,height:`14`,rx:`2`}),k(`line`,{x1:`8`,y1:`21`,x2:`16`,y2:`21`}),k(`line`,{x1:`12`,y1:`17`,x2:`12`,y2:`21`})],-1),ee(` Desktop `,-1)]],10,Ot),k(`button`,{class:N([`device-tab`,{active:h(l).device===`mobile`}]),"data-device":`iphone`,role:`tab`,"aria-selected":h(l).device===`mobile`,type:`button`,onClick:n[6]||=e=>v(`mobile`)},[...n[16]||=[k(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[k(`rect`,{x:`5`,y:`2`,width:`14`,height:`20`,rx:`2`}),k(`line`,{x1:`12`,y1:`18`,x2:`12.01`,y2:`18`})],-1),ee(` Mobile `,-1)]],10,kt)])])]))}}),jt=[{id:`it`,name:`IT / 研发`},{id:`ai`,name:`AI / Agent`},{id:`product`,name:`产品 / 设计`},{id:`game`,name:`游戏 / 媒体`},{id:`ops`,name:`运营 / 市场`},{id:`trade`,name:`外贸 / 跨境`},{id:`intl`,name:`海归 / 外籍`},{id:`medical`,name:`医疗 / 健康`},{id:`edu`,name:`教育 / 培训`},{id:`finance`,name:`财务 / 法务`},{id:`hr`,name:`人事 / 行政`},{id:`logistics`,name:`物流 / 运输`},{id:`food`,name:`餐饮 / 零售`},{id:`service`,name:`生活服务 / 技工`},{id:`design`,name:`设计 / 建筑 / 室内`},{id:`other`,name:`其他`}],Mt=[{id:`intl`,test:e=>/海归|外籍|Foreign|Expat|ESL Instructor|Returnee/.test(e)},{id:`ai`,test:e=>/Agent/.test(e)},{id:`design`,test:e=>/室内|软装|家装|空间设计|家居顾问|工业设计师|橱柜|全屋定制|建筑设计师/.test(e)},{id:`trade`,test:e=>/外贸|报关|跨境|进出口|海外销售/.test(e)},{id:`game`,test:e=>/游戏|UE关卡|UE界面|杂志编辑|内容编辑|广告导演|纪录片导演|商业摄影师|婚礼摄影师|游戏编辑|游戏文案|游戏策划|游戏运营|游戏主播|带货主播/.test(e)},{id:`medical`,test:e=>/医生|护士|护工|月嫂|HIS|心理|口腔|全科|急诊|手术|社区护士|养老护工/.test(e)},{id:`edu`,test:e=>/教师|老师|幼师|托育|培训|英语/.test(e)&&!/翻译|口译/.test(e)},{id:`finance`,test:e=>/会计|出纳|审计|律师|财务/.test(e)},{id:`hr`,test:e=>/HR|人事|前台|行政|招聘/.test(e)},{id:`ops`,test:e=>/运营|商务|拓展|公众号|新媒体|翻译|口译|项目经理|交付工程师|数据分析师|房产中介|商场导购/.test(e)&&!/跨境|外贸|游戏运营|跨境电商/.test(e)},{id:`product`,test:e=>/产品经理|B端产品|UI设计师|视觉设计师/.test(e)},{id:`it`,test:e=>/工程师|开发|架构|测试|运维|DevOps|Linux|网管|网络安全|安全运营|嵌入式|算法|前端|后端|全栈|实习|总监|顾问|首席|数字化|研发|自动化测试|测试开发|网安|机房|实施|HIS|资深|高级前端|前端架构|基础平台|产品技术/.test(e)},{id:`logistics`,test:e=>/快递|外卖|司机|货车|物流|网约车|出租|配送|分拣/.test(e)},{id:`food`,test:e=>/餐厅|厨师/.test(e)},{id:`service`,test:e=>/保洁|保安|物业|美发|美容|酒店|客房|客服|钟点|育儿|月嫂|健身|瑜伽|服务员|工人|木工|电工|水电|工厂|质检|汽修|种植|农技|汽车维修|汽车美容/.test(e)}];function Nt(e){let t=e.replace(/\.md$/i,``),n=t.lastIndexOf(`-`);return n>0?t.slice(0,n):t}function Pt(e){let t=Nt(e);for(let e of Mt)if(e.test(t))return e.id;return`other`}function Ft(e){let t=Pt(e);return jt.find(e=>e.id===t)?.name??`其他`}function It(e,t){return e.map(e=>{let n=e.replace(/\.md$/i,``),r=n.lastIndexOf(`-`),i=r>0?n.slice(0,r):n,a=r>0?n.slice(r+1):``,o=Pt(e);return{value:e,label:t(e),categoryId:o,categoryName:Ft(e),role:i,person:a}})}function Lt(e){let t=new Map;for(let n of e){let e=t.get(n.categoryId)??[];e.push(n),t.set(n.categoryId,e)}return jt.map(e=>({id:e.id,name:e.name,items:t.get(e.id)??[]})).filter(e=>e.items.length>0)}function Rt(e,t,n){let r=e;n&&n!==`all`&&(r=r.filter(e=>e.categoryId===n));let i=t.trim().toLowerCase();return i?r.filter(e=>[e.label,e.role,e.person,e.categoryName,e.value].join(` `).toLowerCase().includes(i)):r}function zt(e){return`/markdown-resume/${e.replace(/^\//,``)}`}var Bt=`高级前端工程师-张三.md`,Vt=`高级前端工程师-张三.md,安全运营-张三.md,保安员-李四.md,保洁员-王五.md,报关员-赵六.md,财务会计-钱七.md,餐厅服务员-孙八.md,测试开发工程师-周九.md,产品经理-吴十.md,成本会计-张甲.md,出纳-李甲.md,出租车司机-王甲.md,厨师-赵甲.md,带货主播-钱甲.md,电工-孙甲.md,电话客服-周甲.md,房产中介-吴甲.md,工厂普工-陈甲.md,工业设计师-刘甲.md,工业设计师-杨甲.md,公众号运营-黄甲.md,广告导演-林甲.md,海归产品经理-张归.md,海归金融分析师-王归.md,海归算法工程师-李归.md,海归战略咨询-赵归.md,海外销售-何甲.md,海外销售经理-冯甲.md,护士-唐甲.md,婚礼摄影师-韩甲.md,货车司机-曹甲.md,机房网管-沈甲.md,基础平台首席架构师-张乙.md,急诊护士-李乙.md,纪录片导演-王乙.md,家装顾问-赵乙.md,建筑工人-钱乙.md,建筑设计师-孙乙.md,建筑设计师-周乙.md,健身教练-吴乙.md,交付工程师-陈乙.md,交付工程师-郑乙.md,酒店前台-刘乙.md,客房服务员-杨乙.md,口腔医生-黄乙.md,口译翻译-林乙.md,跨境电商运营-冯乙.md,跨境电商运营-何乙.md,快递分拣员-唐乙.md,快递员-韩乙.md,律师助理-曹乙.md,美发师-沈乙.md,美容师-张丙.md,内容编辑-李丙.md,农技员-王丙.md,汽车美容-赵丙.md,汽车维修工-钱丙.md,前端架构负责人-孙丙.md,前端开发-周丙.md,前台接待-吴丙.md,嵌入式工程师-陈丙.md,嵌入式工程师-郑丙.md,全科医生-刘丙.md,全栈开发实习-杨丙.md,人事专员-黄丙.md,软装设计师-林丙.md,商场保洁-何丙.md,商场导购-冯丙.md,商务经理-唐丙.md,商务拓展-韩丙.md,商业摄影师-曹丙.md,社区护士-沈丙.md,审计助理-张丁.md,视觉设计师-李丁.md,室内设计师-王丁.md,手术室护士-赵丁.md,数据分析师-钱丁.md,数据分析师-孙丁.md,数字化交付总监-周丁.md,水电工-吴丁.md,算法工程师-陈丁.md,算法工程师-郑丁.md,托育老师-刘丁.md,外籍产品顾问-David.md,外籍软件工程师-Michael.md,外籍市场营销-Sarah.md,外籍英文教师-John.md,外卖配送员-杨丁.md,外卖骑手-黄丁.md,外贸跟单员-林丁.md,外贸业务员-何丁.md,网管-冯丁.md,网络安全-唐丁.md,网约车司机-韩丁.md,物流调度-曹丁.md,物业保安-沈丁.md,项目经理-李戊.md,项目经理-张戊.md,心理咨询师-王戊.md,心理咨询师-赵戊.md,新媒体运营-钱戊.md,行政前台-孙戊.md,研发总监-周戊.md,养老护工-吴戊.md,英语翻译-郑戊.md,英语老师-陈戊.md,游戏编辑-刘戊.md,游戏策划-杨戊.md,游戏文案-黄戊.md,游戏运营-林戊.md,游戏主播-何戊.md,幼师-冯戊.md,瑜伽教练-唐戊.md,育儿嫂-韩戊.md,月嫂-曹戊.md,杂志编辑-沈戊.md,在线客服-张己.md,执业律师-李己.md,质检员-王己.md,中学教师-赵己.md,钟点工-钱己.md,种植员-孙己.md,装修木工-周己.md,资深产品技术专家-吴己.md,资深全栈技术顾问-郑己.md,自动化测试-陈己.md,Agent后端开发工程师-刘己.md,Agent后端开发工程师-杨己.md,Agent架构师-黄己.md,Agent架构师-林己.md,Agent开发工程师-冯己.md,Agent开发工程师-何己.md,Agent前端开发工程师-韩己.md,Agent前端开发工程师-唐己.md,B端产品经理-曹己.md,DevOps工程师-沈己.md,HIS工程师-李庚.md,HIS工程师-张庚.md,HR招聘专员-王庚.md,Linux运维-赵庚.md,UE关卡设计师-钱庚.md,UE界面设计师-孙庚.md,UI设计师-周庚.md`.split(`,`);function Ht(e){return[...new Set(e)].sort((e,t)=>e===`高级前端工程师-张三.md`?-1:t===`高级前端工程师-张三.md`?1:e.localeCompare(t,`zh-CN`))}function Ut(e){let t=e.replace(/\.md$/i,``),n=t.lastIndexOf(`-`);if(n<=0)return t;let r=t.slice(0,n),i=t.slice(n+1);return e===`高级前端工程师-张三.md`?`默认 · ${r} · ${i}`:`${r} · ${i}`}async function Wt(){try{let e=await fetch(zt(`templates/manifest.json`),{cache:`no-store`});if(e.ok){let t=await e.json();if(t.length)return Ht(t)}}catch{}return Ht([...Vt])}async function Gt(e){let t=await fetch(zt(`templates/${encodeURIComponent(e)}`),{cache:`no-store`});if(!t.ok)throw Error(`无法加载 ${e}`);return t.text()}function Kt(e){let t=String(e).match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!t)return{meta:{},body:String(e).trim()};let n={};return t[1].split(`
`).forEach(e=>{let t=e.indexOf(`:`);if(t===-1)return;let r=e.slice(0,t).trim(),i=e.slice(t+1).trim();r&&(n[r]=i)}),{meta:n,body:t[2].trim()}}function qt(e){return`---\n${Object.entries(e).filter(([,e])=>e!=null).map(([e,t])=>`${e}: ${t??``}`).join(`
`)}\n---`}function Jt(e){let t=e.trim();return t?t.split(/^##\s+/m).filter(Boolean).map((e,t)=>{let n=e.split(`
`),r=(n[0]??``).trim(),i=n.slice(1).join(`
`).trim();return{id:`section-${t}-${Xt(r)}`,title:r,body:i}}):[]}function Yt(e){return e.filter(e=>e.title.trim()||e.body.trim()).map(e=>`## ${e.title.trim()}\n\n${e.body.trim()}`.trim()).join(`

`)}function Xt(e){return e.toLowerCase().replace(/\s+/g,`-`).replace(/[^\w\u4e00-\u9fa5-]/g,``).slice(0,24)}function Zt(e){let t=Yt(e.sections);return`${qt(e.meta)}\n\n${t}\n`.trim()+`
`}function Qt(e){let{meta:t,body:n}=Kt(e),r=Jt(n);return{meta:t,sections:r,rawMarkdown:Zt({meta:t,sections:r})}}ue.setOptions({gfm:!0,breaks:!1});function $t(e){let t=ue.parse(e||``);return le.sanitize(t)}var en=K(`resume`,{state:()=>({meta:{},sections:[],rawMarkdown:``}),getters:{markdown(){return Zt({meta:this.meta,sections:this.sections})}},actions:{loadFromMarkdown(e){let t=Qt(e);this.meta={...t.meta},this.sections=t.sections.map(e=>({...e})),this.rawMarkdown=t.rawMarkdown},setMarkdownContent(e){let t=Qt(e);this.meta={...t.meta},this.sections=t.sections.map(e=>({...e})),this.rawMarkdown=t.rawMarkdown},setMetaField(e,t){this.meta={...this.meta,[e]:t}}}}),tn=`resume-preview-template`,nn=K(`template`,{state:()=>({files:[],currentFile:ut(tn,Bt),loading:!1}),getters:{hint(e){return e.files.length?`已发现 ${e.files.length} 个模版 · 当前 ${e.currentFile}`:`扫描 templates 目录 应聘职位-姓名.md`},options(e){return e.files.map(e=>({value:e,label:Ut(e)}))}},actions:{async bootstrap(){this.files=await Wt(),!this.files.includes(this.currentFile)&&this.files.length&&(this.currentFile=this.files[0])},async loadCurrent(e={}){let{persist:t=!0}=e;this.loading=!0;try{let e=await Gt(this.currentFile);en().loadFromMarkdown(e),t&&dt(tn,this.currentFile)}finally{this.loading=!1}},async selectTemplate(e){this.currentFile=e,await this.loadCurrent()},async reload(){await this.loadCurrent({persist:!1})}}}),rn={class:`panel-card`},an={class:`template-toolbar`},on={class:`template-search`},sn=[`value`],cn=[`value`],ln=[`label`],un=[`value`],dn=[`value`],fn={class:`panel-title-hint template-hint`},pn={key:0,class:`template-filter-count`},mn=w({__name:`TemplateSection`,setup(e){let t=nn(),n=c(``),r=c(`all`),l=x(()=>It(t.files,Ut)),u=x(()=>Rt(l.value,n.value,r.value)),d=x(()=>Lt(u.value)),f=x(()=>!n.value.trim()&&r.value===`all`),p=x(()=>u.value.length);s(()=>t.currentFile,e=>{e&&!u.value.some(t=>t.value===e)&&(n.value.trim()||r.value!==`all`)&&(n.value=``,r.value=`all`)});async function m(e){let n=e.target.value;if(!(!n||n===t.currentFile))try{await t.selectTemplate(n)}catch(r){console.error(r),alert(`切换模版失败：${n}`),e.target.value=t.currentFile}}function g(){n.value=``,r.value=`all`}return(e,s)=>(a(),C(`section`,rn,[s[4]||=A(`<h2 class="panel-title"><span class="panel-title-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg></span><span class="panel-title-text">简历模版</span></h2>`,1),k(`div`,an,[k(`div`,on,[s[2]||=k(`svg`,{class:`template-search-icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"aria-hidden":`true`},[k(`circle`,{cx:`11`,cy:`11`,r:`7`}),k(`path`,{d:`M20 20l-3-3`})],-1),o(k(`input`,{"onUpdate:modelValue":s[0]||=e=>n.value=e,type:`search`,class:`template-search-input`,placeholder:`搜索职位、姓名、分组…`,"aria-label":`搜索简历模版`},null,512),[[E,n.value]]),n.value||r.value!==`all`?(a(),C(`button`,{key:0,type:`button`,class:`template-search-clear`,"aria-label":`清除筛选`,onClick:g},` × `)):S(``,!0)]),o(k(`select`,{"onUpdate:modelValue":s[1]||=e=>r.value=e,class:`template-category-select`,"aria-label":`模版分组`},[s[3]||=k(`option`,{value:`all`},`全部分组`,-1),(a(!0),C(j,null,M(h(jt),e=>(a(),C(`option`,{key:e.id,value:e.id},i(e.name),9,sn))),128))],512),[[re,r.value]])]),k(`select`,{class:`theme-select template-select`,"aria-label":`简历模版`,value:h(t).currentFile,onChange:m},[f.value?(a(!0),C(j,{key:0},M(d.value,e=>(a(),C(`optgroup`,{key:e.id,label:e.name},[(a(!0),C(j,null,M(e.items,e=>(a(),C(`option`,{key:e.value,value:e.value},i(e.label),9,un))),128))],8,ln))),128)):(a(!0),C(j,{key:1},M(u.value,e=>(a(),C(`option`,{key:e.value,value:e.value},i(e.categoryName)+` · `+i(e.label),9,dn))),128))],40,cn),k(`p`,fn,[k(`span`,null,i(h(t).hint),1),n.value||r.value!==`all`?(a(),C(`span`,pn,` · 筛选 `+i(p.value)+` 个 `,1)):S(``,!0)])]))}}),hn={id:`editorPanel`,class:`editor-panel`},gn={class:`panel-body editor-panel-body`},_n=w({__name:`EditorPanel`,props:{markdownContent:{required:!0},markdownContentModifiers:{}},emits:ce([`contentChange`,`contentBlur`],[`update:markdownContent`]),setup(e,{emit:t}){let n=_(e,`markdownContent`),r=t;return(e,t)=>(a(),C(`aside`,hn,[k(`div`,gn,[T(mn),T(h(ie),{modelValue:n.value,"onUpdate:modelValue":t[0]||=e=>n.value=e,theme:`light`,language:`zh-CN`,preview:!1,"toolbars-exclude":[`preview`,`previewOnly`,`htmlPreview`,`github`],class:`markdown-editor`,onOnChange:t[1]||=e=>r(`contentChange`),onOnBlur:t[2]||=e=>r(`contentBlur`)},null,8,[`modelValue`])])]))}}),vn=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},yn=vn(_n,[[`__scopeId`,`data-v-740bd344`]]);function bn(e,t=120){let n=null;return((...r)=>{n&&clearTimeout(n),n=setTimeout(()=>e(...r),t)})}var xn=[`id`],Sn=300,Cn=w({__name:`IframePreview`,props:{device:{}},setup(e){let t=e,n=en(),r=mt(),i=pt(),o=c(null),l=x(()=>n.sections.map(e=>`## ${e.title}\n\n${e.body}`).join(`

`));function u(){return r.device===t.device}function d(){let e=i.currentTheme;if(!e||!o.value||t.device===`mobile`&&!u())return;r.setUpdating(!0);let a=st(e,{meta:{...n.meta,theme:e.id},htmlContent:$t(l.value),device:t.device});o.value.srcdoc=a,r.setUpdating(!1)}let f=bn(d,Sn);return se(d),s(()=>n.markdown,f),s(()=>[i.currentThemeId,t.device,r.device],()=>d()),s(o,e=>{t.device===`desktop`?r.setDesktopIframe(e):r.setMobileIframe(e)}),(t,n)=>(a(),C(`iframe`,{id:e.device===`desktop`?`previewIframePc`:`previewIframeMobile`,ref_key:`iframeRef`,ref:o,"data-preview":``,title:`Resume Preview`},null,8,xn))}}),wn={id:`deviceStage`,class:`device-stage`},Tn={class:`pc-frame`},En={class:`iphone-frame`},Dn={class:`iphone-screen`},On=w({__name:`PreviewStage`,setup(e){let t=mt(),n=x(()=>t.device);return(e,t)=>(a(),C(`div`,wn,[k(`div`,{class:N([`device-view`,{"is-active":n.value===`desktop`}]),"data-device-view":`pc`},[k(`div`,Tn,[t[0]||=A(`<div class="pc-topbar"><span class="window-btn close"></span><span class="window-btn minimize"></span><span class="window-btn maximize"></span><div class="pc-url"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> resume-preview.local </div><div style="width:48px;"></div></div>`,1),T(Cn,{device:`desktop`})])],2),k(`div`,{class:N([`device-view`,{"is-active":n.value===`mobile`}]),"data-device-view":`iphone`},[k(`div`,En,[k(`div`,Dn,[t[1]||=k(`div`,{class:`iphone-dynamic-island`},null,-1),T(Cn,{device:`mobile`}),t[2]||=k(`div`,{class:`iphone-home-indicator`},null,-1)])])],2)]))}}),kn={class:`preview-panel`},An=w({__name:`PreviewPanel`,setup(e){return(e,t)=>(a(),C(`main`,kn,[T(On)]))}});async function jn(e){return e.text()}function Mn(e,t={}){if(!e?.contentWindow)return;let n=t.title??`Resume`,r=e.contentWindow,i=document.title;document.title=n,r.focus(),r.print(),window.setTimeout(()=>{document.title=i},500)}function Nn(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),window.setTimeout(()=>URL.revokeObjectURL(n),1e3)}function Pn(e,t,n=`text/plain;charset=utf-8`){Nn(new Blob([e],{type:n}),t)}function Fn(e,t=`resume.doc`){Pn(`<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:w="urn:schemas-microsoft-com:office:word"
      xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta charset="utf-8">
<title>Resume</title>
<!--[if gte mso 9]><xml><w:WordDocument><w:View>Print</w:View></w:WordDocument></xml><![endif]-->
<style>
body { font-family: "Microsoft YaHei", Arial, sans-serif; font-size: 11pt; line-height: 1.5; color: #222; }
h1,h2,h3 { color: #111; }
</style>
</head>
<body>${e}</body>
</html>`,t,`application/msword;charset=utf-8`)}var In={professional:{badge:`商务简历`,title:`正式配置`,accent:`#1e40af`,desc:`适合传统行业与校招，字段映射为姓名、职位和联系方式。`,chips:[`姓名`,`职位`,`联系`]},minimal:{badge:`极简`,title:`留白配置`,accent:`#334155`,desc:`大留白、细线条，适合设计类与互联网岗位。`,chips:[`姓名`,`方向`,`联系`]},sidebar:{badge:`双栏`,title:`侧栏配置`,accent:`#0f766e`,desc:`左侧色块展示个人信息，右侧为经历正文。`,chips:[`姓名`,`岗位`,`侧栏`]},tech:{badge:`极客`,title:`终端配置`,accent:`#059669`,desc:`深色终端风，适合工程师与开源贡献者。`,chips:[`姓名`,`Stack`,`GitHub`]},elegant:{badge:`衬线`,title:`优雅配置`,accent:`#78350f`,desc:`衬线字体与经典排版，适合咨询、金融、法务。`,chips:[`姓名`,`头衔`,`联系`]},creative:{badge:`创意`,title:`渐变配置`,accent:`#7c3aed`,desc:`渐变背景与大胆排版，适合设计、品牌、创意岗位。`,chips:[`姓名`,`标签`,`作品`]},academic:{badge:`学术`,title:`履历配置`,accent:`#1d4ed8`,desc:`严谨结构，适合科研、高校、PhD 申请。`,chips:[`姓名`,`机构`,`发表`]},compact:{badge:`紧凑`,title:`一页配置`,accent:`#475569`,desc:`小字号高密度排版，力求内容塞进一页 A4。`,chips:[`姓名`,`职位`,`技能`]},product:{badge:`产品`,title:`清爽配置`,accent:`#0891b2`,desc:`卡片式模块，适合产品经理与运营岗位。`,chips:[`姓名`,`方向`,`项目`]},dark:{badge:`暗色`,title:`霓虹配置`,accent:`#a855f7`,desc:`暗色背景霓虹点缀，适合创意与技术跨界。`,chips:[`姓名`,`角色`,`链接`]},magazine:{badge:`杂志`,title:`排版配置`,accent:`#dc2626`,desc:`杂志式大标题与分栏，适合媒体、内容、市场。`,chips:[`姓名`,`栏目`,`亮点`]},timeline:{badge:`时间轴`,title:`节点配置`,accent:`#2563eb`,desc:`纵向时间轴串联经历，适合长履历展示。`,chips:[`经历`,`节点`,`项目`]}};function Ln(e){let t=e.replace(`#`,``).trim(),n=t.length===3?t.split(``).map(e=>e+e).join(``):t,r=Number.parseInt(n,16);return{r:r>>16&255,g:r>>8&255,b:r&255}}function Rn(e,t){let{r:n,g:r,b:i}=Ln(e),a=e=>Math.max(0,Math.min(255,e)),o=e=>a(e+t).toString(16).padStart(2,`0`);return`#${o(n)}${o(r)}${o(i)}`}function zn(e){let{r:t,g:n,b:r}=Ln(e),i=document.documentElement;i.style.setProperty(`--accent`,e),i.style.setProperty(`--accent-hover`,Rn(e,-24)),i.style.setProperty(`--accent-soft`,`rgba(${t}, ${n}, ${r}, 0.10)`),i.style.setProperty(`--accent-muted`,`rgba(${t}, ${n}, ${r}, 0.28)`),i.style.setProperty(`--shadow-glow`,`0 0 0 3px rgba(${t}, ${n}, ${r}, 0.18)`)}function $(e){return In[e]??In.professional}var Bn=e(n(((e,n)=>{(function(t){if(typeof e==`object`&&n!==void 0)n.exports=t();else if(typeof define==`function`&&define.amd)define([],t);else{var r=typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:this;r.localforage=t()}})(function(){return(function e(n,r,i){function a(s,c){if(!r[s]){if(!n[s]){var l=typeof t==`function`&&t;if(!c&&l)return l(s,!0);if(o)return o(s,!0);var u=Error(`Cannot find module '`+s+`'`);throw u.code=`MODULE_NOT_FOUND`,u}var d=r[s]={exports:{}};n[s][0].call(d.exports,function(e){var t=n[s][1][e];return a(t||e)},d,d.exports,e,n,r,i)}return r[s].exports}for(var o=typeof t==`function`&&t,s=0;s<i.length;s++)a(i[s]);return a})({1:[function(e,t,n){(function(e){var n=e.MutationObserver||e.WebKitMutationObserver,r;if(n){var i=0,a=new n(u),o=e.document.createTextNode(``);a.observe(o,{characterData:!0}),r=function(){o.data=i=++i%2}}else if(!e.setImmediate&&e.MessageChannel!==void 0){var s=new e.MessageChannel;s.port1.onmessage=u,r=function(){s.port2.postMessage(0)}}else r=`document`in e&&`onreadystatechange`in e.document.createElement(`script`)?function(){var t=e.document.createElement(`script`);t.onreadystatechange=function(){u(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(u,0)};var c,l=[];function u(){c=!0;for(var e,t,n=l.length;n;){for(t=l,l=[],e=-1;++e<n;)t[e]();n=l.length}c=!1}t.exports=d;function d(e){l.push(e)===1&&!c&&r()}}).call(this,typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{})},{}],2:[function(e,t,n){var r=e(1);function i(){}var a={},o=[`REJECTED`],s=[`FULFILLED`],c=[`PENDING`];t.exports=l;function l(e){if(typeof e!=`function`)throw TypeError(`resolver must be a function`);this.state=c,this.queue=[],this.outcome=void 0,e!==i&&p(this,e)}l.prototype.catch=function(e){return this.then(null,e)},l.prototype.then=function(e,t){if(typeof e!=`function`&&this.state===s||typeof t!=`function`&&this.state===o)return this;var n=new this.constructor(i);return this.state===c?this.queue.push(new u(n,e,t)):d(n,this.state===s?e:t,this.outcome),n};function u(e,t,n){this.promise=e,typeof t==`function`&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),typeof n==`function`&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}u.prototype.callFulfilled=function(e){a.resolve(this.promise,e)},u.prototype.otherCallFulfilled=function(e){d(this.promise,this.onFulfilled,e)},u.prototype.callRejected=function(e){a.reject(this.promise,e)},u.prototype.otherCallRejected=function(e){d(this.promise,this.onRejected,e)};function d(e,t,n){r(function(){var r;try{r=t(n)}catch(t){return a.reject(e,t)}r===e?a.reject(e,TypeError(`Cannot resolve promise with itself`)):a.resolve(e,r)})}a.resolve=function(e,t){var n=m(f,t);if(n.status===`error`)return a.reject(e,n.value);var r=n.value;if(r)p(e,r);else{e.state=s,e.outcome=t;for(var i=-1,o=e.queue.length;++i<o;)e.queue[i].callFulfilled(t)}return e},a.reject=function(e,t){e.state=o,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e};function f(e){var t=e&&e.then;if(e&&(typeof e==`object`||typeof e==`function`)&&typeof t==`function`)return function(){t.apply(e,arguments)}}function p(e,t){var n=!1;function r(t){n||(n=!0,a.reject(e,t))}function i(t){n||(n=!0,a.resolve(e,t))}function o(){t(i,r)}var s=m(o);s.status===`error`&&r(s.value)}function m(e,t){var n={};try{n.value=e(t),n.status=`success`}catch(e){n.status=`error`,n.value=e}return n}l.resolve=h;function h(e){return e instanceof this?e:a.resolve(new this(i),e)}l.reject=g;function g(e){var t=new this(i);return a.reject(t,e)}l.all=_;function _(e){var t=this;if(Object.prototype.toString.call(e)!==`[object Array]`)return this.reject(TypeError(`must be an array`));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=Array(n),s=0,c=-1,l=new this(i);++c<n;)u(e[c],c);return l;function u(e,i){t.resolve(e).then(c,function(e){r||(r=!0,a.reject(l,e))});function c(e){o[i]=e,++s===n&&!r&&(r=!0,a.resolve(l,o))}}}l.race=v;function v(e){var t=this;if(Object.prototype.toString.call(e)!==`[object Array]`)return this.reject(TypeError(`must be an array`));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=-1,s=new this(i);++o<n;)c(e[o]);return s;function c(e){t.resolve(e).then(function(e){r||(r=!0,a.resolve(s,e))},function(e){r||(r=!0,a.reject(s,e))})}}},{1:1}],3:[function(e,t,n){(function(t){typeof t.Promise!=`function`&&(t.Promise=e(2))}).call(this,typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{})},{2:2}],4:[function(e,t,n){var r=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e};function i(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function a(){try{if(typeof indexedDB<`u`)return indexedDB;if(typeof webkitIndexedDB<`u`)return webkitIndexedDB;if(typeof mozIndexedDB<`u`)return mozIndexedDB;if(typeof OIndexedDB<`u`)return OIndexedDB;if(typeof msIndexedDB<`u`)return msIndexedDB}catch{return}}var o=a();function s(){try{if(!o||!o.open)return!1;var e=typeof openDatabase<`u`&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t=typeof fetch==`function`&&fetch.toString().indexOf(`[native code`)!==-1;return(!e||t)&&typeof indexedDB<`u`&&typeof IDBKeyRange<`u`}catch{return!1}}function c(e,t){e||=[],t||={};try{return new Blob(e,t)}catch(i){if(i.name!==`TypeError`)throw i;for(var n=new(typeof BlobBuilder<`u`?BlobBuilder:typeof MSBlobBuilder<`u`?MSBlobBuilder:typeof MozBlobBuilder<`u`?MozBlobBuilder:WebKitBlobBuilder),r=0;r<e.length;r+=1)n.append(e[r]);return n.getBlob(t.type)}}typeof Promise>`u`&&e(3);var l=Promise;function u(e,t){t&&e.then(function(e){t(null,e)},function(e){t(e)})}function d(e,t,n){typeof t==`function`&&e.then(t),typeof n==`function`&&e.catch(n)}function f(e){return typeof e!=`string`&&(console.warn(e+` used as a key, but it is not a string.`),e=String(e)),e}function p(){if(arguments.length&&typeof arguments[arguments.length-1]==`function`)return arguments[arguments.length-1]}var m=`local-forage-detect-blob-support`,h=void 0,g={},_=Object.prototype.toString,v=`readonly`,y=`readwrite`;function b(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),i=0;i<t;i++)r[i]=e.charCodeAt(i);return n}function x(e){return new l(function(t){var n=e.transaction(m,y),r=c([``]);n.objectStore(m).put(r,`key`),n.onabort=function(e){e.preventDefault(),e.stopPropagation(),t(!1)},n.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/);t(navigator.userAgent.match(/Edge\//)||!e||parseInt(e[1],10)>=43)}}).catch(function(){return!1})}function S(e){return typeof h==`boolean`?l.resolve(h):x(e).then(function(e){return h=e,h})}function C(e){var t=g[e.name],n={};n.promise=new l(function(e,t){n.resolve=e,n.reject=t}),t.deferredOperations.push(n),t.dbReady?t.dbReady=t.dbReady.then(function(){return n.promise}):t.dbReady=n.promise}function w(e){var t=g[e.name].deferredOperations.pop();if(t)return t.resolve(),t.promise}function T(e,t){var n=g[e.name].deferredOperations.pop();if(n)return n.reject(t),n.promise}function E(e,t){return new l(function(n,r){if(g[e.name]=g[e.name]||ie(),e.db)if(t)C(e),e.db.close();else return n(e.db);var i=[e.name];t&&i.push(e.version);var a=o.open.apply(o,i);t&&(a.onupgradeneeded=function(t){var n=a.result;try{n.createObjectStore(e.storeName),t.oldVersion<=1&&n.createObjectStore(m)}catch(n){if(n.name===`ConstraintError`)console.warn(`The database "`+e.name+`" has been upgraded from version `+t.oldVersion+` to version `+t.newVersion+`, but the storage "`+e.storeName+`" already exists.`);else throw n}}),a.onerror=function(e){e.preventDefault(),r(a.error)},a.onsuccess=function(){var t=a.result;t.onversionchange=function(e){e.target.close()},n(t),w(e)}})}function D(e){return E(e,!1)}function O(e){return E(e,!0)}function k(e,t){if(!e.db)return!0;var n=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,i=e.version>e.db.version;if(r&&(e.version!==t&&console.warn(`The database "`+e.name+`" can't be downgraded from version `+e.db.version+` to version `+e.version+`.`),e.version=e.db.version),i||n){if(n){var a=e.db.version+1;a>e.version&&(e.version=a)}return!0}return!1}function ee(e){return new l(function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(n){t({__local_forage_encoded_blob:!0,data:btoa(n.target.result||``),type:e.type})},r.readAsBinaryString(e)})}function te(e){return c([b(atob(e.data))],{type:e.type})}function ne(e){return e&&e.__local_forage_encoded_blob}function A(e){var t=this,n=t._initReady().then(function(){var e=g[t._dbInfo.name];if(e&&e.dbReady)return e.dbReady});return d(n,e,e),n}function re(e){C(e);for(var t=g[e.name],n=t.forages,r=0;r<n.length;r++){var i=n[r];i._dbInfo.db&&(i._dbInfo.db.close(),i._dbInfo.db=null)}return e.db=null,D(e).then(function(t){return e.db=t,k(e)?O(e):t}).then(function(r){e.db=t.db=r;for(var i=0;i<n.length;i++)n[i]._dbInfo.db=r}).catch(function(t){throw T(e,t),t})}function j(e,t,n,r){r===void 0&&(r=1);try{n(null,e.db.transaction(e.storeName,t))}catch(i){if(r>0&&(!e.db||i.name===`InvalidStateError`||i.name===`NotFoundError`))return l.resolve().then(function(){if(!e.db||i.name===`NotFoundError`&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),O(e)}).then(function(){return re(e).then(function(){j(e,t,n,r-1)})}).catch(n);n(i)}}function ie(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function ae(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=e[r];var i=g[n.name];i||(i=ie(),g[n.name]=i),i.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=A);var a=[];function o(){return l.resolve()}for(var s=0;s<i.forages.length;s++){var c=i.forages[s];c!==t&&a.push(c._initReady().catch(o))}var u=i.forages.slice(0);return l.all(a).then(function(){return n.db=i.db,D(n)}).then(function(e){return n.db=e,k(n,t._defaultConfig.version)?O(n):e}).then(function(e){n.db=i.db=e,t._dbInfo=n;for(var r=0;r<u.length;r++){var a=u[r];a!==t&&(a._dbInfo.db=n.db,a._dbInfo.version=n.version)}})}function oe(e,t){var n=this;e=f(e);var r=new l(function(t,r){n.ready().then(function(){j(n._dbInfo,v,function(i,a){if(i)return r(i);try{var o=a.objectStore(n._dbInfo.storeName).get(e);o.onsuccess=function(){var e=o.result;e===void 0&&(e=null),ne(e)&&(e=te(e)),t(e)},o.onerror=function(){r(o.error)}}catch(e){r(e)}})}).catch(r)});return u(r,t),r}function M(e,t){var n=this,r=new l(function(t,r){n.ready().then(function(){j(n._dbInfo,v,function(i,a){if(i)return r(i);try{var o=a.objectStore(n._dbInfo.storeName).openCursor(),s=1;o.onsuccess=function(){var n=o.result;if(n){var r=n.value;ne(r)&&(r=te(r));var i=e(r,n.key,s++);i===void 0?n.continue():t(i)}else t()},o.onerror=function(){r(o.error)}}catch(e){r(e)}})}).catch(r)});return u(r,t),r}function se(e,t,n){var r=this;e=f(e);var i=new l(function(n,i){var a;r.ready().then(function(){return a=r._dbInfo,_.call(t)===`[object Blob]`?S(a.db).then(function(e){return e?t:ee(t)}):t}).then(function(t){j(r._dbInfo,y,function(a,o){if(a)return i(a);try{var s=o.objectStore(r._dbInfo.storeName);t===null&&(t=void 0);var c=s.put(t,e);o.oncomplete=function(){t===void 0&&(t=null),n(t)},o.onabort=o.onerror=function(){i(c.error?c.error:c.transaction.error)}}catch(e){i(e)}})}).catch(i)});return u(i,n),i}function ce(e,t){var n=this;e=f(e);var r=new l(function(t,r){n.ready().then(function(){j(n._dbInfo,y,function(i,a){if(i)return r(i);try{var o=a.objectStore(n._dbInfo.storeName).delete(e);a.oncomplete=function(){t()},a.onerror=function(){r(o.error)},a.onabort=function(){r(o.error?o.error:o.transaction.error)}}catch(e){r(e)}})}).catch(r)});return u(r,t),r}function N(e){var t=this,n=new l(function(e,n){t.ready().then(function(){j(t._dbInfo,y,function(r,i){if(r)return n(r);try{var a=i.objectStore(t._dbInfo.storeName).clear();i.oncomplete=function(){e()},i.onabort=i.onerror=function(){n(a.error?a.error:a.transaction.error)}}catch(e){n(e)}})}).catch(n)});return u(n,e),n}function le(e){var t=this,n=new l(function(e,n){t.ready().then(function(){j(t._dbInfo,v,function(r,i){if(r)return n(r);try{var a=i.objectStore(t._dbInfo.storeName).count();a.onsuccess=function(){e(a.result)},a.onerror=function(){n(a.error)}}catch(e){n(e)}})}).catch(n)});return u(n,e),n}function ue(e,t){var n=this,r=new l(function(t,r){if(e<0){t(null);return}n.ready().then(function(){j(n._dbInfo,v,function(i,a){if(i)return r(i);try{var o=a.objectStore(n._dbInfo.storeName),s=!1,c=o.openKeyCursor();c.onsuccess=function(){var n=c.result;if(!n){t(null);return}e===0||s?t(n.key):(s=!0,n.advance(e))},c.onerror=function(){r(c.error)}}catch(e){r(e)}})}).catch(r)});return u(r,t),r}function de(e){var t=this,n=new l(function(e,n){t.ready().then(function(){j(t._dbInfo,v,function(r,i){if(r)return n(r);try{var a=i.objectStore(t._dbInfo.storeName).openKeyCursor(),o=[];a.onsuccess=function(){var t=a.result;if(!t){e(o);return}o.push(t.key),t.continue()},a.onerror=function(){n(a.error)}}catch(e){n(e)}})}).catch(n)});return u(n,e),n}function fe(e,t){t=p.apply(this,arguments);var n=this.config();e=typeof e!=`function`&&e||{},e.name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r=this,i;if(!e.name)i=l.reject(`Invalid arguments`);else{var a=e.name===n.name&&r._dbInfo.db?l.resolve(r._dbInfo.db):D(e).then(function(t){var n=g[e.name],r=n.forages;n.db=t;for(var i=0;i<r.length;i++)r[i]._dbInfo.db=t;return t});i=e.storeName?a.then(function(t){if(t.objectStoreNames.contains(e.storeName)){var n=t.version+1;C(e);var r=g[e.name],i=r.forages;t.close();for(var a=0;a<i.length;a++){var s=i[a];s._dbInfo.db=null,s._dbInfo.version=n}return new l(function(t,r){var i=o.open(e.name,n);i.onerror=function(e){i.result.close(),r(e)},i.onupgradeneeded=function(){i.result.deleteObjectStore(e.storeName)},i.onsuccess=function(){var e=i.result;e.close(),t(e)}}).then(function(e){r.db=e;for(var t=0;t<i.length;t++){var n=i[t];n._dbInfo.db=e,w(n._dbInfo)}}).catch(function(t){throw(T(e,t)||l.resolve()).catch(function(){}),t})}}):a.then(function(t){C(e);var n=g[e.name],r=n.forages;t.close();for(var i=0;i<r.length;i++){var a=r[i];a._dbInfo.db=null}return new l(function(t,n){var r=o.deleteDatabase(e.name);r.onerror=function(){var e=r.result;e&&e.close(),n(r.error)},r.onblocked=function(){console.warn(`dropInstance blocked for database "`+e.name+`" until all open connections are closed`)},r.onsuccess=function(){var e=r.result;e&&e.close(),t(e)}}).then(function(e){n.db=e;for(var t=0;t<r.length;t++){var i=r[t];w(i._dbInfo)}}).catch(function(t){throw(T(e,t)||l.resolve()).catch(function(){}),t})})}return u(i,t),i}var P={_driver:`asyncStorage`,_initStorage:ae,_support:s(),iterate:M,getItem:oe,setItem:se,removeItem:ce,clear:N,length:le,key:ue,keys:de,dropInstance:fe};function pe(){return typeof openDatabase==`function`}var F=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,I=`~~local_forage_type~`,me=/^~~local_forage_type~([^~]+)~/,L=`__lfsc__:`,R=L.length,z=`arbf`,B=`blob`,V=`si08`,he=`ui08`,ge=`uic8`,_e=`si16`,ve=`si32`,ye=`ur16`,be=`ui32`,xe=`fl32`,Se=`fl64`,Ce=R+z.length,H=Object.prototype.toString;function we(e){var t=e.length*.75,n=e.length,r,i=0,a,o,s,c;e[e.length-1]===`=`&&(t--,e[e.length-2]===`=`&&t--);var l=new ArrayBuffer(t),u=new Uint8Array(l);for(r=0;r<n;r+=4)a=F.indexOf(e[r]),o=F.indexOf(e[r+1]),s=F.indexOf(e[r+2]),c=F.indexOf(e[r+3]),u[i++]=a<<2|o>>4,u[i++]=(o&15)<<4|s>>2,u[i++]=(s&3)<<6|c&63;return l}function U(e){var t=new Uint8Array(e),n=``,r;for(r=0;r<t.length;r+=3)n+=F[t[r]>>2],n+=F[(t[r]&3)<<4|t[r+1]>>4],n+=F[(t[r+1]&15)<<2|t[r+2]>>6],n+=F[t[r+2]&63];return t.length%3==2?n=n.substring(0,n.length-1)+`=`:t.length%3==1&&(n=n.substring(0,n.length-2)+`==`),n}function Te(e,t){var n=``;if(e&&(n=H.call(e)),e&&(n===`[object ArrayBuffer]`||e.buffer&&H.call(e.buffer)===`[object ArrayBuffer]`)){var r,i=L;e instanceof ArrayBuffer?(r=e,i+=z):(r=e.buffer,n===`[object Int8Array]`?i+=V:n===`[object Uint8Array]`?i+=he:n===`[object Uint8ClampedArray]`?i+=ge:n===`[object Int16Array]`?i+=_e:n===`[object Uint16Array]`?i+=ye:n===`[object Int32Array]`?i+=ve:n===`[object Uint32Array]`?i+=be:n===`[object Float32Array]`?i+=xe:n===`[object Float64Array]`?i+=Se:t(Error(`Failed to get type for BinaryArray`))),t(i+U(r))}else if(n===`[object Blob]`){var a=new FileReader;a.onload=function(){var n=I+e.type+`~`+U(this.result);t(L+B+n)},a.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(n){console.error(`Couldn't convert value into a JSON string: `,e),t(null,n)}}function Ee(e){if(e.substring(0,R)!==L)return JSON.parse(e);var t=e.substring(Ce),n=e.substring(R,Ce),r;if(n===B&&me.test(t)){var i=t.match(me);r=i[1],t=t.substring(i[0].length)}var a=we(t);switch(n){case z:return a;case B:return c([a],{type:r});case V:return new Int8Array(a);case he:return new Uint8Array(a);case ge:return new Uint8ClampedArray(a);case _e:return new Int16Array(a);case ye:return new Uint16Array(a);case ve:return new Int32Array(a);case be:return new Uint32Array(a);case xe:return new Float32Array(a);case Se:return new Float64Array(a);default:throw Error(`Unkown type: `+n)}}var De={serialize:Te,deserialize:Ee,stringToBuffer:we,bufferToString:U};function Oe(e,t,n,r){e.executeSql(`CREATE TABLE IF NOT EXISTS `+t.storeName+` (id INTEGER PRIMARY KEY, key unique, value)`,[],n,r)}function W(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=typeof e[r]==`string`?e[r]:e[r].toString();var i=new l(function(e,r){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(e){return r(e)}n.db.transaction(function(i){Oe(i,n,function(){t._dbInfo=n,e()},function(e,t){r(t)})},r)});return n.serializer=De,i}function G(e,t,n,r,i,a){e.executeSql(n,r,i,function(e,o){o.code===o.SYNTAX_ERR?e.executeSql(`SELECT name FROM sqlite_master WHERE type='table' AND name = ?`,[t.storeName],function(e,s){s.rows.length?a(e,o):Oe(e,t,function(){e.executeSql(n,r,i,a)},a)},a):a(e,o)},a)}function ke(e,t){var n=this;e=f(e);var r=new l(function(t,r){n.ready().then(function(){var i=n._dbInfo;i.db.transaction(function(n){G(n,i,`SELECT * FROM `+i.storeName+` WHERE key = ? LIMIT 1`,[e],function(e,n){var r=n.rows.length?n.rows.item(0).value:null;r&&=i.serializer.deserialize(r),t(r)},function(e,t){r(t)})})}).catch(r)});return u(r,t),r}function Ae(e,t){var n=this,r=new l(function(t,r){n.ready().then(function(){var i=n._dbInfo;i.db.transaction(function(n){G(n,i,`SELECT * FROM `+i.storeName,[],function(n,r){for(var a=r.rows,o=a.length,s=0;s<o;s++){var c=a.item(s),l=c.value;if(l&&=i.serializer.deserialize(l),l=e(l,c.key,s+1),l!==void 0){t(l);return}}t()},function(e,t){r(t)})})}).catch(r)});return u(r,t),r}function K(e,t,n,r){var i=this;e=f(e);var a=new l(function(a,o){i.ready().then(function(){t===void 0&&(t=null);var s=t,c=i._dbInfo;c.serializer.serialize(t,function(t,l){l?o(l):c.db.transaction(function(n){G(n,c,`INSERT OR REPLACE INTO `+c.storeName+` (key, value) VALUES (?, ?)`,[e,t],function(){a(s)},function(e,t){o(t)})},function(t){if(t.code===t.QUOTA_ERR){if(r>0){a(K.apply(i,[e,s,n,r-1]));return}o(t)}})})}).catch(o)});return u(a,n),a}function q(e,t,n){return K.apply(this,[e,t,n,1])}function J(e,t){var n=this;e=f(e);var r=new l(function(t,r){n.ready().then(function(){var i=n._dbInfo;i.db.transaction(function(n){G(n,i,`DELETE FROM `+i.storeName+` WHERE key = ?`,[e],function(){t()},function(e,t){r(t)})})}).catch(r)});return u(r,t),r}function Y(e){var t=this,n=new l(function(e,n){t.ready().then(function(){var r=t._dbInfo;r.db.transaction(function(t){G(t,r,`DELETE FROM `+r.storeName,[],function(){e()},function(e,t){n(t)})})}).catch(n)});return u(n,e),n}function je(e){var t=this,n=new l(function(e,n){t.ready().then(function(){var r=t._dbInfo;r.db.transaction(function(t){G(t,r,`SELECT COUNT(key) as c FROM `+r.storeName,[],function(t,n){var r=n.rows.item(0).c;e(r)},function(e,t){n(t)})})}).catch(n)});return u(n,e),n}function Me(e,t){var n=this,r=new l(function(t,r){n.ready().then(function(){var i=n._dbInfo;i.db.transaction(function(n){G(n,i,`SELECT key FROM `+i.storeName+` WHERE id = ? LIMIT 1`,[e+1],function(e,n){t(n.rows.length?n.rows.item(0).key:null)},function(e,t){r(t)})})}).catch(r)});return u(r,t),r}function Ne(e){var t=this,n=new l(function(e,n){t.ready().then(function(){var r=t._dbInfo;r.db.transaction(function(t){G(t,r,`SELECT key FROM `+r.storeName,[],function(t,n){for(var r=[],i=0;i<n.rows.length;i++)r.push(n.rows.item(i).key);e(r)},function(e,t){n(t)})})}).catch(n)});return u(n,e),n}function Pe(e){return new l(function(t,n){e.transaction(function(r){r.executeSql(`SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'`,[],function(n,r){for(var i=[],a=0;a<r.rows.length;a++)i.push(r.rows.item(a).name);t({db:e,storeNames:i})},function(e,t){n(t)})},function(e){n(e)})})}function Fe(e,t){t=p.apply(this,arguments);var n=this.config();e=typeof e!=`function`&&e||{},e.name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r=this,i=e.name?new l(function(t){var i=e.name===n.name?r._dbInfo.db:openDatabase(e.name,``,``,0);e.storeName?t({db:i,storeNames:[e.storeName]}):t(Pe(i))}).then(function(e){return new l(function(t,n){e.db.transaction(function(r){function i(e){return new l(function(t,n){r.executeSql(`DROP TABLE IF EXISTS `+e,[],function(){t()},function(e,t){n(t)})})}for(var a=[],o=0,s=e.storeNames.length;o<s;o++)a.push(i(e.storeNames[o]));l.all(a).then(function(){t()}).catch(function(e){n(e)})},function(e){n(e)})})}):l.reject(`Invalid arguments`);return u(i,t),i}var Ie={_driver:`webSQLStorage`,_initStorage:W,_support:pe(),iterate:Ae,getItem:ke,setItem:q,removeItem:J,clear:Y,length:je,key:Me,keys:Ne,dropInstance:Fe};function Le(){try{return typeof localStorage<`u`&&`setItem`in localStorage&&!!localStorage.setItem}catch{return!1}}function Re(e,t){var n=e.name+`/`;return e.storeName!==t.storeName&&(n+=e.storeName+`/`),n}function ze(){var e=`_localforage_support_test`;try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch{return!0}}function Be(){return!ze()||localStorage.length>0}function Ve(e){var t=this,n={};if(e)for(var r in e)n[r]=e[r];return n.keyPrefix=Re(e,t._defaultConfig),Be()?(t._dbInfo=n,n.serializer=De,l.resolve()):l.reject()}function He(e){var t=this,n=t.ready().then(function(){for(var e=t._dbInfo.keyPrefix,n=localStorage.length-1;n>=0;n--){var r=localStorage.key(n);r.indexOf(e)===0&&localStorage.removeItem(r)}});return u(n,e),n}function Ue(e,t){var n=this;e=f(e);var r=n.ready().then(function(){var t=n._dbInfo,r=localStorage.getItem(t.keyPrefix+e);return r&&=t.serializer.deserialize(r),r});return u(r,t),r}function We(e,t){var n=this,r=n.ready().then(function(){for(var t=n._dbInfo,r=t.keyPrefix,i=r.length,a=localStorage.length,o=1,s=0;s<a;s++){var c=localStorage.key(s);if(c.indexOf(r)===0){var l=localStorage.getItem(c);if(l&&=t.serializer.deserialize(l),l=e(l,c.substring(i),o++),l!==void 0)return l}}});return u(r,t),r}function Ge(e,t){var n=this,r=n.ready().then(function(){var t=n._dbInfo,r;try{r=localStorage.key(e)}catch{r=null}return r&&=r.substring(t.keyPrefix.length),r});return u(r,t),r}function Ke(e){var t=this,n=t.ready().then(function(){for(var e=t._dbInfo,n=localStorage.length,r=[],i=0;i<n;i++){var a=localStorage.key(i);a.indexOf(e.keyPrefix)===0&&r.push(a.substring(e.keyPrefix.length))}return r});return u(n,e),n}function qe(e){var t=this.keys().then(function(e){return e.length});return u(t,e),t}function Je(e,t){var n=this;e=f(e);var r=n.ready().then(function(){var t=n._dbInfo;localStorage.removeItem(t.keyPrefix+e)});return u(r,t),r}function Ye(e,t,n){var r=this;e=f(e);var i=r.ready().then(function(){t===void 0&&(t=null);var n=t;return new l(function(i,a){var o=r._dbInfo;o.serializer.serialize(t,function(t,r){if(r)a(r);else try{localStorage.setItem(o.keyPrefix+e,t),i(n)}catch(e){(e.name===`QuotaExceededError`||e.name===`NS_ERROR_DOM_QUOTA_REACHED`)&&a(e),a(e)}})})});return u(i,n),i}function Xe(e,t){if(t=p.apply(this,arguments),e=typeof e!=`function`&&e||{},!e.name){var n=this.config();e.name=e.name||n.name,e.storeName=e.storeName||n.storeName}var r=this,i=e.name?new l(function(t){e.storeName?t(Re(e,r._defaultConfig)):t(e.name+`/`)}).then(function(e){for(var t=localStorage.length-1;t>=0;t--){var n=localStorage.key(t);n.indexOf(e)===0&&localStorage.removeItem(n)}}):l.reject(`Invalid arguments`);return u(i,t),i}var Ze={_driver:`localStorageWrapper`,_initStorage:Ve,_support:Le(),iterate:We,getItem:Ue,setItem:Ye,removeItem:Je,clear:He,length:qe,key:Ge,keys:Ke,dropInstance:Xe},Qe=function(e,t){return e===t||typeof e==`number`&&typeof t==`number`&&isNaN(e)&&isNaN(t)},$e=function(e,t){for(var n=e.length,r=0;r<n;){if(Qe(e[r],t))return!0;r++}return!1},et=Array.isArray||function(e){return Object.prototype.toString.call(e)===`[object Array]`},X={},tt={},Z={INDEXEDDB:P,WEBSQL:Ie,LOCALSTORAGE:Ze},nt=[Z.INDEXEDDB._driver,Z.WEBSQL._driver,Z.LOCALSTORAGE._driver],Q=[`dropInstance`],rt=[`clear`,`getItem`,`iterate`,`key`,`keys`,`length`,`removeItem`,`setItem`].concat(Q),it={description:``,driver:nt.slice(),name:`localforage`,size:4980736,storeName:`keyvaluepairs`,version:1};function at(e,t){e[t]=function(){var n=arguments;return e.ready().then(function(){return e[t].apply(e,n)})}}function ot(){for(var e=1;e<arguments.length;e++){var t=arguments[e];if(t)for(var n in t)t.hasOwnProperty(n)&&(et(t[n])?arguments[0][n]=t[n].slice():arguments[0][n]=t[n])}return arguments[0]}t.exports=new(function(){function e(t){for(var n in i(this,e),Z)if(Z.hasOwnProperty(n)){var r=Z[n],a=r._driver;this[n]=a,X[a]||this.defineDriver(r)}this._defaultConfig=ot({},it),this._config=ot({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(function(){})}return e.prototype.config=function(e){if((e===void 0?`undefined`:r(e))===`object`){if(this._ready)return Error(`Can't call config() after localforage has been used.`);for(var t in e){if(t===`storeName`&&(e[t]=e[t].replace(/\W/g,`_`)),t===`version`&&typeof e[t]!=`number`)return Error(`Database version must be a number.`);this._config[t]=e[t]}return`driver`in e&&e.driver?this.setDriver(this._config.driver):!0}else if(typeof e==`string`)return this._config[e];else return this._config},e.prototype.defineDriver=function(e,t,n){var r=new l(function(t,n){try{var r=e._driver,i=Error(`Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver`);if(!e._driver){n(i);return}for(var a=rt.concat(`_initStorage`),o=0,s=a.length;o<s;o++){var c=a[o];if((!$e(Q,c)||e[c])&&typeof e[c]!=`function`){n(i);return}}(function(){for(var t=function(e){return function(){var t=Error(`Method `+e+` is not implemented by the current driver`),n=l.reject(t);return u(n,arguments[arguments.length-1]),n}},n=0,r=Q.length;n<r;n++){var i=Q[n];e[i]||(e[i]=t(i))}})();var d=function(n){X[r]&&console.info(`Redefining LocalForage driver: `+r),X[r]=e,tt[r]=n,t()};`_support`in e?e._support&&typeof e._support==`function`?e._support().then(d,n):d(!!e._support):d(!0)}catch(e){n(e)}});return d(r,t,n),r},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(e,t,n){var r=X[e]?l.resolve(X[e]):l.reject(Error(`Driver not found.`));return d(r,t,n),r},e.prototype.getSerializer=function(e){var t=l.resolve(De);return d(t,e),t},e.prototype.ready=function(e){var t=this,n=t._driverSet.then(function(){return t._ready===null&&(t._ready=t._initDriver()),t._ready});return d(n,e,e),n},e.prototype.setDriver=function(e,t,n){var r=this;et(e)||(e=[e]);var i=this._getSupportedDrivers(e);function a(){r._config.driver=r.driver()}function o(e){return r._extend(e),a(),r._ready=r._initStorage(r._config),r._ready}function s(e){return function(){var t=0;function n(){for(;t<e.length;){var i=e[t];return t++,r._dbInfo=null,r._ready=null,r.getDriver(i).then(o).catch(n)}a();var s=Error(`No available storage method found.`);return r._driverSet=l.reject(s),r._driverSet}return n()}}var c=this._driverSet===null?l.resolve():this._driverSet.catch(function(){return l.resolve()});return this._driverSet=c.then(function(){var e=i[0];return r._dbInfo=null,r._ready=null,r.getDriver(e).then(function(e){r._driver=e._driver,a(),r._wrapLibraryMethodsWithReady(),r._initDriver=s(i)})}).catch(function(){a();var e=Error(`No available storage method found.`);return r._driverSet=l.reject(e),r._driverSet}),d(this._driverSet,t,n),this._driverSet},e.prototype.supports=function(e){return!!tt[e]},e.prototype._extend=function(e){ot(this,e)},e.prototype._getSupportedDrivers=function(e){for(var t=[],n=0,r=e.length;n<r;n++){var i=e[n];this.supports(i)&&t.push(i)}return t},e.prototype._wrapLibraryMethodsWithReady=function(){for(var e=0,t=rt.length;e<t;e++)at(this,rt[e])},e.prototype.createInstance=function(t){return new e(t)},e}())},{3:3}]},{},[4])(4)})}))(),1),Vn=`editor-state`,Hn=Bn.default.createInstance({name:`markdown-resume-vue3`,storeName:`editor`});function Un(){return Hn.getItem(Vn)}function Wn(e){return Hn.setItem(Vn,e)}var Gn=600;function Kn(){let e=en(),t=pt(),n=mt(),r=nn(),i=c(!1),a=null,o=!1,l=x({get:()=>e.markdown,set:t=>{e.setMarkdownContent(t)}}),u=x(()=>$(t.currentThemeId));function d(e){!e||!rt(e)||t.currentThemeId!==e&&t.setTheme(e)}function f(){o&&(a&&=(clearTimeout(a),null),Wn({themeId:t.currentThemeId,markdownContent:e.markdown,activeDevice:n.device}))}function p(){o&&(a&&clearTimeout(a),a=setTimeout(f,Gn))}function m(n){t.setTheme(n),e.setMetaField(`theme`,n),zn($(n).accent),f()}async function h(n){if(!n)return;let r=await jn(n);e.loadFromMarkdown(r),d(e.meta.theme),zn($(t.currentThemeId).accent),f()}async function _(){n.setDevice(`desktop`),await b(),await b(),Mn(n.desktopIframe,{title:e.meta.name||`Resume`})}function v(){let t=e.sections.map(e=>`<h2>${Y(e.title)}</h2>${$t(e.body)}`).join(``);Fn(`<h1>${Y(e.meta.name??``)}</h1><p>${Y(e.meta.role??``)}</p>${t}`)}return se(async()=>{try{await r.bootstrap();let a=await Un();a?.markdownContent?.trim()?(e.loadFromMarkdown(a.markdownContent),a.themeId&&rt(a.themeId)&&t.setTheme(a.themeId),a.activeDevice&&n.setDevice(a.activeDevice)):(await r.loadCurrent(),d(e.meta.theme)),zn($(t.currentThemeId).accent),o=!0,i.value=!0}catch(e){console.error(e),alert(`无法加载简历模版，请刷新页面重试。`)}}),g(()=>{f()}),s(()=>t.currentThemeId,e=>zn($(e).accent)),s(()=>n.device,f),s(()=>e.meta.theme,e=>{o&&d(e)}),s(()=>r.currentFile,()=>{o&&(d(e.meta.theme),zn($(t.currentThemeId).accent),f())}),{ready:i,markdownContent:l,panelConfig:u,onThemeChange:m,onImportFile:h,onExportPdf:_,onExportWord:v,scheduleIdleSave:p,flushSave:f}}var qn={key:0,class:`app`},Jn={class:`workspace`},Yn={key:1,class:`boot-screen`},Xn=vn(w({__name:`StudioLayout`,setup(e){let{ready:t,markdownContent:n,panelConfig:r,onThemeChange:i,onImportFile:o,onExportPdf:s,onExportWord:c,scheduleIdleSave:l,flushSave:u}=Kn();return(e,d)=>h(t)?(a(),C(`div`,qn,[T(At,{"panel-config":h(r),onThemeChange:h(i),onFileUpload:h(o),onExportPdf:h(s),onExportWord:h(c)},null,8,[`panel-config`,`onThemeChange`,`onFileUpload`,`onExportPdf`,`onExportWord`]),k(`div`,Jn,[T(yn,{"markdown-content":h(n),"onUpdate:markdownContent":d[0]||=e=>D(n)?n.value=e:null,onContentChange:h(l),onContentBlur:h(u)},null,8,[`markdown-content`,`onContentChange`,`onContentBlur`]),T(An)])])):(a(),C(`div`,Yn,`正在加载 Resume Preview…`))}}),[[`__scopeId`,`data-v-39ed559f`]]),Zn=w({__name:`App`,setup(e){return(e,t)=>(a(),ae(Xn))}});function Qn(){document.documentElement.dataset.app=`resume-studio`}Qn(),te(Zn).use(xe()).mount(`#app`);