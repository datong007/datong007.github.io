import{u as j,f as te,g as se,h as z,i as ae,P as le,t as ie,j as oe,k as x,l as q,m as re,n as N,p as s,q as ne,R as b,s as ue,v as pe,x as ce,C as he,y as me,z as ve,A as de,B as Ee,D as ye,E as Be,F as ge,G as O,H as G,I as fe,J as H,K as Ae}from"./app-CevbgVWL.js";const Ce=["/","/posts/3D%20software%20design.html","/posts/AI%20toolbox.html","/posts/Amount%20of%20test%20equipment.html","/posts/Carp%20Bait%20Companies.html","/posts/Cross-category%20cargo%20grouping%20service.html","/posts/Customized%20according%20to%20drawings.html","/posts/Flexible%20customization.html","/posts/Let's%20talk.html","/posts/Light%20customization.html","/posts/Private%20mold.html","/posts/Product%20appreciation.html","/posts/Product%20testing.html","/posts/Quality%20traceability.html","/posts/Sample%20customization.html","/posts/Testing%20of%20raw%20materials.html","/posts/Warranty%20capability.html","/posts/%E5%9B%BE%E7%89%87URL.html","/posts/%E8%A1%8C%E4%B8%9A%E8%B5%84%E8%AE%AF.html","/posts/gifs/%E5%85%A8%E7%90%83%E7%9F%A5%E5%90%8D%E6%B8%94%E5%85%B7%E5%93%81%E7%89%8C.html","/posts/gifs/%E5%AD%97%E6%AF%8D%E5%AF%BC%E8%88%AA.html","/posts/fishing%20equipment/ACCESSORY%20BOX/MB%E7%B3%BB%E5%88%97.html","/posts/fishing%20equipment/BAIT%20CAGE/MDD%E7%B3%BB%E5%88%97.html","/posts/fishing%20equipment/BAIT%20CAGE/MDE%E7%B3%BB%E5%88%97.html","/posts/fishing%20equipment/BAIT%20CAGE/MDF%E7%B3%BB%E5%88%97.html","/posts/fishing%20equipment/BAIT%20TRAY/MDJ%E7%B3%BB%E5%88%97.html","/posts/fishing%20equipment/CARP/MDA%E7%B3%BB%E5%88%97.html","/posts/fishing%20equipment/CARP/MDB%E7%B3%BB%E5%88%97.html","/posts/fishing%20equipment/CARP/MDC%E7%B3%BB%E5%88%97.html","/posts/fishing%20equipment/FISHHOOK/FISHHOOK.html","/posts/fishing%20equipment/METAL%20FITTINGS/MDI%E7%B3%BB%E5%88%97.html","/posts/fishing%20equipment/PIN/PIN.html","/posts/fishing%20equipment/PLASTIC%20PARTS/MDH%E7%B3%BB%E5%88%97.html","/posts/fishing%20equipment/SCALE%20LEAD/SCALE%20LEAD.html","/posts/fishing%20equipment/SPACE%20BEANS/SPACE%20BEANS.html","/posts/fishing%20equipment/SWIVEL/SWIVEL.html","/posts/fishing%20equipment/WEIGHTS/MDG%E7%B3%BB%E5%88%97.html","/posts/Latest%20information/Best%20seller/6%E6%9C%88%E7%95%85%E9%94%80%E5%93%81.html","/posts/Latest%20information/Brand%20Dynamics/Flylords.html","/posts/Latest%20information/Brand%20Dynamics/Preston%20Innovations.html","/posts/Latest%20information/Brand%20Dynamics/simano.html","/posts/Latest%20information/Fishing%20gear%20exhibition/Show%20information.html","/posts/Latest%20information/fishing%20tournament/%E6%9C%AA%E5%91%BD%E5%90%8D%201.html","/posts/Latest%20information/fishing%20tournament/%E6%9C%AA%E5%91%BD%E5%90%8D.html","/posts/Latest%20information/fishing%20tournament/%E9%92%93%E9%B1%BC%E8%B5%9B%E4%BA%8B.html","/404.html"],De="SEARCH_PRO_QUERY_HISTORY",y=j(De,[]),qe=()=>{const{queryHistoryCount:a}=H,l=a>0;return{enabled:l,queryHistory:y,addQueryHistory:i=>{l&&(y.value=Array.from(new Set([i,...y.value.slice(0,a-1)])))},removeQueryHistory:i=>{y.value=[...y.value.slice(0,i),...y.value.slice(i+1)]}}},F=a=>Ce[a.id]+("anchor"in a?`#${a.anchor}`:""),He="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:$}=H,B=j(He,[]),Se=()=>{const a=$>0;return{enabled:a,resultHistory:B,addResultHistory:l=>{if(a){const i={link:F(l),display:l.display};"header"in l&&(i.header=l.header),B.value=[i,...B.value.slice(0,$-1)]}},removeResultHistory:l=>{B.value=[...B.value.slice(0,l),...B.value.slice(l+1)]}}},Le=a=>{const l=he(),i=z(),S=me(),r=x(0),A=q(()=>r.value>0),v=ve([]);return de(()=>{const{search:d,terminate:L}=Ee(),g=fe(p=>{const f=p.join(" "),{searchFilter:R=m=>m,splitWord:I,suggestionsFilter:Q,...E}=l.value;f?(r.value+=1,d(p.join(" "),i.value,E).then(m=>R(m,f,i.value,S.value)).then(m=>{r.value-=1,v.value=m}).catch(m=>{console.warn(m),r.value-=1,r.value||(v.value=[])})):v.value=[]},H.searchDelay-H.suggestDelay);N([a,i],([p])=>g(p),{immediate:!0}),ye(()=>{L()})}),{isSearching:A,results:v}};var Ie=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const i=se(),S=z(),r=ae(le),{enabled:A,addQueryHistory:v,queryHistory:d,removeQueryHistory:L}=qe(),{enabled:g,resultHistory:p,addResultHistory:f,removeResultHistory:R}=Se(),I=A||g,Q=ie(a,"queries"),{results:E,isSearching:m}=Le(Q),o=oe({isQuery:!0,index:0}),c=x(0),h=x(0),T=q(()=>I&&(d.value.length>0||p.value.length>0)),k=q(()=>E.value.length>0),w=q(()=>E.value[c.value]||null),U=()=>{const{isQuery:e,index:t}=o;t===0?(o.isQuery=!e,o.index=e?p.value.length-1:d.value.length-1):o.index=t-1},Y=()=>{const{isQuery:e,index:t}=o;t===(e?d.value.length-1:p.value.length-1)?(o.isQuery=!e,o.index=0):o.index=t+1},_=()=>{c.value=c.value>0?c.value-1:E.value.length-1,h.value=w.value.contents.length-1},W=()=>{c.value=c.value<E.value.length-1?c.value+1:0,h.value=0},K=()=>{h.value<w.value.contents.length-1?h.value+=1:W()},V=()=>{h.value>0?h.value-=1:_()},P=e=>e.map(t=>Ae(t)?t:s(t[0],t[1])),J=e=>{if(e.type==="customField"){const t=Be[e.index]||"$content",[n,D=""]=ge(t)?t[S.value].split("$content"):t.split("$content");return e.display.map(u=>s("div",P([n,...u,D])))}return e.display.map(t=>s("div",P(t)))},C=()=>{c.value=0,h.value=0,l("updateQuery",""),l("close")},X=()=>A?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},r.value.queryHistory),d.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:o.isQuery&&o.index===t}],onClick:()=>{l("updateQuery",e)}},[s(O,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:G,onClick:n=>{n.preventDefault(),n.stopPropagation(),L(t)}})]))])):null,Z=()=>g?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},r.value.resultHistory),p.value.map((e,t)=>s(b,{to:e.link,class:["search-pro-result-item",{active:!o.isQuery&&o.index===t}],onClick:()=>{C()}},()=>[s(O,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(n=>P(n)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:G,onClick:n=>{n.preventDefault(),n.stopPropagation(),R(t)}})]))])):null;return re("keydown",e=>{if(a.isFocusing){if(k.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const t=w.value.contents[h.value];v(a.queries.join(" ")),f(t),i.push(F(t)),C()}}else if(g){if(e.key==="ArrowUp")U();else if(e.key==="ArrowDown")Y();else if(e.key==="Enter"){const{index:t}=o;o.isQuery?(l("updateQuery",d.value[t]),e.preventDefault()):(i.push(p.value[t].link),C())}}}}),N([c,h],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!k.value:!T.value}],id:"search-pro-results"},a.queries.length?m.value?s(ne,{hint:r.value.searching}):k.value?s("ul",{class:"search-pro-result-list"},E.value.map(({title:e,contents:t},n)=>{const D=c.value===n;return s("li",{class:["search-pro-result-list-item",{active:D}]},[s("div",{class:"search-pro-result-title"},e||r.value.defaultTitle),t.map((u,ee)=>{const M=D&&h.value===ee;return s(b,{to:F(u),class:["search-pro-result-item",{active:M,"aria-selected":M}],onClick:()=>{v(a.queries.join(" ")),f(u),C()}},()=>[u.type==="text"?null:s(u.type==="title"?ue:u.type==="heading"?pe:ce,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[u.type==="text"&&u.header?s("div",{class:"content-header"},u.header):null,s("div",J(u))])])})])})):r.value.emptyResult:I?T.value?[X(),Z()]:r.value.emptyHistory:r.value.emptyResult)}});export{Ie as default};
