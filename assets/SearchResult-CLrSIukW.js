import{u as _,f as se,g as te,h as Y,i as le,P as ae,t as re,j as ue,k as L,l as D,m as ie,n as M,p as t,q as oe,R as T,s as ne,v as ce,x as ve,C as pe,y as Ee,z as he,A as de,B as ye,D as me,E as Ae,F as Be,G as $,H as j,I as ge,J as k,K as fe}from"./app-XTF4S7kg.js";const He=["/","/posts/3D%E8%BD%AF%E4%BB%B6%E8%AE%BE%E8%AE%A1.html","/posts/Instagram.html","/posts/Youtube.html","/posts/%E5%8E%9F%E6%9D%90%E6%96%99%E6%A3%80%E9%AA%8C.html","/posts/%E5%9B%BE%E7%89%87URL.html","/posts/%E5%AE%A2%E6%88%B7%E6%A1%88%E4%BE%8B.html","/posts/%E6%88%90%E5%93%81%E6%A3%80%E9%AA%8C.html","/posts/%E6%9D%A5%E5%9B%BE%E5%AE%9A%E5%88%B6.html","/posts/%E6%9D%A5%E6%A0%B7%E5%AE%9A%E5%88%B6.html","/posts/%E6%9F%94%E6%80%A7%E5%AE%9A%E5%88%B6.html","/posts/%E6%B5%8B%E8%AF%95%E8%AE%BE%E5%A4%87%E9%87%8F.html","/posts/%E7%A7%81%E6%9C%89%E6%A8%A1%E5%85%B7.html","/posts/%E8%81%8A%E8%81%8A%E5%90%A7.html","/posts/%E8%A1%8C%E4%B8%9A%E6%8A%A5%E5%91%8A.html","/posts/%E8%B4%A8%E4%BF%9D%E8%83%BD%E5%8A%9B.html","/posts/%E8%B4%A8%E9%87%8F%E8%BF%BD%E6%BA%AF%E8%83%BD%E5%8A%9B.html","/posts/%E8%B7%A8%E5%93%81%E7%B1%BB%E7%BB%84%E8%B4%A7%E6%9C%8D%E5%8A%A1.html","/posts/%E8%BD%BB%E5%AE%9A%E5%88%B6.html","/404.html"],Re="SEARCH_PRO_QUERY_HISTORY",m=_(Re,[]),De=()=>{const{queryHistoryCount:l}=k,a=l>0;return{enabled:a,queryHistory:m,addQueryHistory:r=>{a&&(m.value=Array.from(new Set([r,...m.value.slice(0,l-1)])))},removeQueryHistory:r=>{m.value=[...m.value.slice(0,r),...m.value.slice(r+1)]}}},b=l=>He[l.id]+("anchor"in l?`#${l.anchor}`:""),ke="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:U}=k,A=_(ke,[]),Ce=()=>{const l=U>0;return{enabled:l,resultHistory:A,addResultHistory:a=>{if(l){const r={link:b(a),display:a.display};"header"in a&&(r.header=a.header),A.value=[r,...A.value.slice(0,U-1)]}},removeResultHistory:a=>{A.value=[...A.value.slice(0,a),...A.value.slice(a+1)]}}},Qe=l=>{const a=pe(),r=Y(),C=Ee(),i=L(0),f=D(()=>i.value>0),h=he([]);return de(()=>{const{search:d,terminate:Q}=ye(),B=ge(c=>{const g=c.join(" "),{searchFilter:w=E=>E,splitWord:F,suggestionsFilter:P,...y}=a.value;g?(i.value+=1,d(c.join(" "),r.value,y).then(E=>w(E,g,r.value,C.value)).then(E=>{i.value-=1,h.value=E}).catch(E=>{console.warn(E),i.value-=1,i.value||(h.value=[])})):h.value=[]},k.searchDelay-k.suggestDelay);M([l,r],([c])=>B(c),{immediate:!0}),me(()=>{Q()})}),{isSearching:f,results:h}};var Fe=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(l,{emit:a}){const r=te(),C=Y(),i=le(ae),{enabled:f,addQueryHistory:h,queryHistory:d,removeQueryHistory:Q}=De(),{enabled:B,resultHistory:c,addResultHistory:g,removeResultHistory:w}=Ce(),F=f||B,P=re(l,"queries"),{results:y,isSearching:E}=Qe(P),u=ue({isQuery:!0,index:0}),v=L(0),p=L(0),I=D(()=>F&&(d.value.length>0||c.value.length>0)),q=D(()=>y.value.length>0),x=D(()=>y.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:d.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?d.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:y.value.length-1,p.value=x.value.contents.length-1},K=()=>{v.value=v.value<y.value.length-1?v.value+1:0,p.value=0},V=()=>{p.value<x.value.contents.length-1?p.value+=1:K()},N=()=>{p.value>0?p.value-=1:J()},S=e=>e.map(s=>fe(s)?s:t(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=Ae[e.index]||"$content",[o,R=""]=Be(s)?s[C.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",S([o,...n,R])))}return e.display.map(s=>t("div",S(s)))},H=()=>{v.value=0,p.value=0,a("updateQuery",""),a("close")},X=()=>f?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),d.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{a("updateQuery",e)}},[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:o=>{o.preventDefault(),o.stopPropagation(),Q(s)}})]))])):null,Z=()=>B?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>t(T,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{H()}},()=>[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>S(o)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:o=>{o.preventDefault(),o.stopPropagation(),w(s)}})]))])):null;return ie("keydown",e=>{if(l.isFocusing){if(q.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const s=x.value.contents[p.value];h(l.queries.join(" ")),g(s),r.push(b(s)),H()}}else if(B){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(a("updateQuery",d.value[s]),e.preventDefault()):(r.push(c.value[s].link),H())}}}}),M([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:l.queries.length?!q.value:!I.value}],id:"search-pro-results"},l.queries.length?E.value?t(oe,{hint:i.value.searching}):q.value?t("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:s},o)=>{const R=v.value===o;return t("li",{class:["search-pro-result-list-item",{active:R}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const O=R&&p.value===ee;return t(T,{to:b(n),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{h(l.queries.join(" ")),g(n),H()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",W(n))])])})])})):i.value.emptyResult:F?I.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Fe as default};
