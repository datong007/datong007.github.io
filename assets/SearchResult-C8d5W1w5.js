import{u as M,f as se,g as te,h as U,i as ae,P as le,t as re,j as ue,k as L,l as R,m as ie,n as Y,p as t,q as oe,R as T,s as ne,v as ce,x as ve,C as Ee,y as pe,z as he,A as de,B as ye,D as Be,E as me,F as Ae,G as $,H as j,I as ge,J as k,K as Ce}from"./app-C1MbIijA.js";const fe=["/","/posts/mission.html","/posts/%E5%AE%A2%E6%88%B7%E5%AE%9A%E5%88%B6%E6%A1%88%E4%BE%8B.html","/posts/%E6%B8%94%E5%85%B7%E8%A3%85%E5%A4%87.html","/posts/%E9%92%93%E9%B1%BC%E6%8A%80%E5%B7%A7%E5%92%8C%E6%8C%87%E5%8D%97.html","/posts/paper/HCI.html","/posts/paper/LLM.html","/posts/%E8%81%94%E7%B3%BB%E6%88%91/%E8%81%8A%E8%81%8A%E5%90%A7.html","/posts/%E6%9C%80%E6%96%B0%E6%83%85%E6%8A%A5/13%20Fishing/%E6%96%B0%E6%AC%BE%20Muse%20Black%20%E9%92%93%E7%AB%BF%EF%BC%9A%E5%BB%B6%E7%BB%AD%E7%BB%8F%E5%85%B8%EF%BC%8C%E5%86%8D%E5%88%9B%E6%96%B0%E9%AB%98.html","/posts/%E6%9C%80%E6%96%B0%E6%83%85%E6%8A%A5/13%20Fishing/%E6%96%B0%E8%89%B2%E5%BD%A9%E5%8F%91%E5%B8%83%EF%BC%9AX-Rap%E5%92%B8%E6%B0%B4%E7%B3%BB%E5%88%97%E7%94%B5%E5%8A%A8%E9%B8%A1%E4%B8%8E%E7%B4%AB%E8%89%B2%E9%A6%99%E8%8D%89%E8%89%B2%EF%BC%8C%E8%AE%A9%E4%BD%A0%E5%9C%A8%E8%BF%91%E6%B5%B7%E4%B8%8E%E8%BF%9C%E6%B4%8B%E9%92%93%E9%B1%BC%E4%B8%AD%E7%8B%AC%E9%A2%86%E9%A3%8E%E9%AA%9A.html","/404.html"],He="SEARCH_PRO_QUERY_HISTORY",B=M(He,[]),Re=()=>{const{queryHistoryCount:a}=k,l=a>0;return{enabled:l,queryHistory:B,addQueryHistory:r=>{l&&(B.value=Array.from(new Set([r,...B.value.slice(0,a-1)])))},removeQueryHistory:r=>{B.value=[...B.value.slice(0,r),...B.value.slice(r+1)]}}},b=a=>fe[a.id]+("anchor"in a?`#${a.anchor}`:""),ke="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:_}=k,m=M(ke,[]),Fe=()=>{const a=_>0;return{enabled:a,resultHistory:m,addResultHistory:l=>{if(a){const r={link:b(l),display:l.display};"header"in l&&(r.header=l.header),m.value=[r,...m.value.slice(0,_-1)]}},removeResultHistory:l=>{m.value=[...m.value.slice(0,l),...m.value.slice(l+1)]}}},De=a=>{const l=Ee(),r=U(),F=pe(),i=L(0),C=R(()=>i.value>0),h=he([]);return de(()=>{const{search:d,terminate:D}=ye(),A=ge(c=>{const g=c.join(" "),{searchFilter:Q=p=>p,splitWord:w,suggestionsFilter:P,...y}=l.value;g?(i.value+=1,d(c.join(" "),r.value,y).then(p=>Q(p,g,r.value,F.value)).then(p=>{i.value-=1,h.value=p}).catch(p=>{console.warn(p),i.value-=1,i.value||(h.value=[])})):h.value=[]},k.searchDelay-k.suggestDelay);Y([a,r],([c])=>A(c),{immediate:!0}),Be(()=>{D()})}),{isSearching:C,results:h}};var we=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=te(),F=U(),i=ae(le),{enabled:C,addQueryHistory:h,queryHistory:d,removeQueryHistory:D}=Re(),{enabled:A,resultHistory:c,addResultHistory:g,removeResultHistory:Q}=Fe(),w=C||A,P=re(a,"queries"),{results:y,isSearching:p}=De(P),u=ue({isQuery:!0,index:0}),v=L(0),E=L(0),I=R(()=>w&&(d.value.length>0||c.value.length>0)),q=R(()=>y.value.length>0),x=R(()=>y.value[v.value]||null),z=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:d.value.length-1):u.index=s-1},G=()=>{const{isQuery:e,index:s}=u;s===(e?d.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},J=()=>{v.value=v.value>0?v.value-1:y.value.length-1,E.value=x.value.contents.length-1},K=()=>{v.value=v.value<y.value.length-1?v.value+1:0,E.value=0},V=()=>{E.value<x.value.contents.length-1?E.value+=1:K()},X=()=>{E.value>0?E.value-=1:J()},S=e=>e.map(s=>Ce(s)?s:t(s[0],s[1])),N=e=>{if(e.type==="customField"){const s=me[e.index]||"$content",[o,H=""]=Ae(s)?s[F.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",S([o,...n,H])))}return e.display.map(s=>t("div",S(s)))},f=()=>{v.value=0,E.value=0,l("updateQuery",""),l("close")},W=()=>C?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),d.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:o=>{o.preventDefault(),o.stopPropagation(),D(s)}})]))])):null,Z=()=>A?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>t(T,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{f()}},()=>[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>S(o)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:j,onClick:o=>{o.preventDefault(),o.stopPropagation(),Q(s)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(q.value){if(e.key==="ArrowUp")X();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const s=x.value.contents[E.value];h(a.queries.join(" ")),g(s),r.push(b(s)),f()}}else if(A){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",d.value[s]),e.preventDefault()):(r.push(c.value[s].link),f())}}}}),Y([v,E],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!q.value:!I.value}],id:"search-pro-results"},a.queries.length?p.value?t(oe,{hint:i.value.searching}):q.value?t("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:s},o)=>{const H=v.value===o;return t("li",{class:["search-pro-result-list-item",{active:H}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const O=H&&E.value===ee;return t(T,{to:b(n),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{h(a.queries.join(" ")),g(n),f()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",N(n))])])})])})):i.value.emptyResult:w?I.value?[W(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{we as default};
