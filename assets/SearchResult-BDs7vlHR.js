import{u as U,f as se,g as te,h as Y,i as ae,P as le,j as re,k as ue,l as b,m as Q,n as ie,w as M,p as t,q as oe,R as $,s as ne,v as ce,x as ve,C as pe,y as de,z as he,A as ye,B as me,D as ge,E as fe,F as He,G as j,H as I,I as Ee,J as q,K as Re}from"./app-BFRsvRzQ.js";const ke=["/","/posts/mission.html","/posts/%E4%BA%A7%E5%93%81%E7%B1%BB%E5%9E%8B/%E9%92%93%E7%AE%B1/mb705.html","/posts/%E4%BA%A7%E5%93%81%E7%B1%BB%E5%9E%8B/%E9%92%93%E7%AE%B1/VS-705.html","/404.html"],we="SEARCH_PRO_QUERY_HISTORY",g=U(we,[]),Qe=()=>{const{queryHistoryCount:a}=q,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:r=>{l&&(g.value=Array.from(new Set([r,...g.value.slice(0,a-1)])))},removeQueryHistory:r=>{g.value=[...g.value.slice(0,r),...g.value.slice(r+1)]}}},F=a=>ke[a.id]+("anchor"in a?`#${a.anchor}`:""),qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:_}=q,f=U(qe,[]),xe=()=>{const a=_>0;return{enabled:a,resultHistory:f,addResultHistory:l=>{if(a){const r={link:F(l),display:l.display};"header"in l&&(r.header=l.header),f.value=[r,...f.value.slice(0,_-1)]}},removeResultHistory:l=>{f.value=[...f.value.slice(0,l),...f.value.slice(l+1)]}}},Ae=a=>{const l=pe(),r=Y(),x=de(),i=b(0),R=Q(()=>i.value>0),h=he([]);return ye(()=>{const{search:y,terminate:A}=me(),H=Ee(c=>{const E=c.join(" "),{searchFilter:B=d=>d,splitWord:S,suggestionsFilter:P,...m}=l.value;E?(i.value+=1,y(c.join(" "),r.value,m).then(d=>B(d,E,r.value,x.value)).then(d=>{i.value-=1,h.value=d}).catch(d=>{console.warn(d),i.value-=1,i.value||(h.value=[])})):h.value=[]},q.searchDelay-q.suggestDelay);M([a,r],([c])=>H(c),{immediate:!0}),ge(()=>{A()})}),{isSearching:R,results:h}};var Se=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const r=te(),x=Y(),i=ae(le),{enabled:R,addQueryHistory:h,queryHistory:y,removeQueryHistory:A}=Qe(),{enabled:H,resultHistory:c,addResultHistory:E,removeResultHistory:B}=xe(),S=R||H,P=re(a,"queries"),{results:m,isSearching:d}=Ae(P),u=ue({isQuery:!0,index:0}),v=b(0),p=b(0),O=Q(()=>S&&(y.value.length>0||c.value.length>0)),C=Q(()=>m.value.length>0),D=Q(()=>m.value[v.value]||null),V=()=>{const{isQuery:e,index:s}=u;s===0?(u.isQuery=!e,u.index=e?c.value.length-1:y.value.length-1):u.index=s-1},z=()=>{const{isQuery:e,index:s}=u;s===(e?y.value.length-1:c.value.length-1)?(u.isQuery=!e,u.index=0):u.index=s+1},G=()=>{v.value=v.value>0?v.value-1:m.value.length-1,p.value=D.value.contents.length-1},J=()=>{v.value=v.value<m.value.length-1?v.value+1:0,p.value=0},K=()=>{p.value<D.value.contents.length-1?p.value+=1:J()},N=()=>{p.value>0?p.value-=1:G()},L=e=>e.map(s=>Re(s)?s:t(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=fe[e.index]||"$content",[o,w=""]=He(s)?s[x.value].split("$content"):s.split("$content");return e.display.map(n=>t("div",L([o,...n,w])))}return e.display.map(s=>t("div",L(s)))},k=()=>{v.value=0,p.value=0,l("updateQuery",""),l("close")},X=()=>R?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.queryHistory),y.value.map((e,s)=>t("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===s}],onClick:()=>{l("updateQuery",e)}},[t(j,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),A(s)}})]))])):null,Z=()=>H?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,s)=>t($,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===s}],onClick:()=>{k()}},()=>[t(j,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(o=>L(o)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:o=>{o.preventDefault(),o.stopPropagation(),B(s)}})]))])):null;return ie("keydown",e=>{if(a.isFocusing){if(C.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const s=D.value.contents[p.value];h(a.queries.join(" ")),E(s),r.push(F(s)),k()}}else if(H){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")z();else if(e.key==="Enter"){const{index:s}=u;u.isQuery?(l("updateQuery",y.value[s]),e.preventDefault()):(r.push(c.value[s].link),k())}}}}),M([v,p],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!C.value:!O.value}],id:"search-pro-results"},a.queries.length?d.value?t(oe,{hint:i.value.searching}):C.value?t("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:s},o)=>{const w=v.value===o;return t("li",{class:["search-pro-result-list-item",{active:w}]},[t("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),s.map((n,ee)=>{const T=w&&p.value===ee;return t($,{to:F(n),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{h(a.queries.join(" ")),E(n),k()}},()=>[n.type==="text"?null:t(n.type==="title"?ne:n.type==="heading"?ce:ve,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",W(n))])])})])})):i.value.emptyResult:S?O.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Se as default};
