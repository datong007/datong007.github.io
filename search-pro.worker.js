const V=Object.entries,et=Object.fromEntries,st="ENTRIES",L="KEYS",T="VALUES",_="";class D{set;_type;_path;constructor(t,s){const n=t._tree,o=Array.from(n.keys());this.set=t,this._type=s,this._path=o.length>0?[{node:n,keys:o}]:[]}next(){const t=this.dive();return this.backtrack(),t}dive(){if(this._path.length===0)return{done:!0,value:void 0};const{node:t,keys:s}=E(this._path);if(E(s)===_)return{done:!1,value:this.result()};const n=t.get(E(s));return this._path.push({node:n,keys:Array.from(n.keys())}),this.dive()}backtrack(){if(this._path.length===0)return;const t=E(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}key(){return this.set._prefix+this._path.map(({keys:t})=>E(t)).filter(t=>t!==_).join("")}value(){return E(this._path).node.get(_)}result(){switch(this._type){case T:return this.value();case L:return this.key();default:return[this.key(),this.value()]}}[Symbol.iterator](){return this}}const E=e=>e[e.length-1],nt=(e,t,s)=>{const n=new Map;if(t===void 0)return n;const o=t.length+1,u=o+s,i=new Uint8Array(u*o).fill(s+1);for(let r=0;r<o;++r)i[r]=r;for(let r=1;r<u;++r)i[r*o]=r;return R(e,t,s,n,i,1,o,""),n},R=(e,t,s,n,o,u,i,r)=>{const d=u*i;t:for(const c of e.keys())if(c===_){const a=o[d-1];a<=s&&n.set(r,[e.get(c),a])}else{let a=u;for(let h=0;h<c.length;++h,++a){const g=c[h],m=i*a,p=m-i;let l=o[m];const f=Math.max(0,a-s-1),y=Math.min(i-1,a+s);for(let F=f;F<y;++F){const v=g!==t[F],z=o[p+F]+ +v,A=o[p+F+1]+1,w=o[m+F]+1,j=o[m+F+1]=Math.min(z,A,w);j<l&&(l=j)}if(l>s)continue t}R(e.get(c),t,s,n,o,a,i,r+c)}};class C{_tree;_prefix;_size=void 0;constructor(t=new Map,s=""){this._tree=t,this._prefix=s}atPrefix(t){if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");const[s,n]=x(this._tree,t.slice(this._prefix.length));if(s===void 0){const[o,u]=O(n);for(const i of o.keys())if(i!==_&&i.startsWith(u)){const r=new Map;return r.set(i.slice(u.length),o.get(i)),new C(r,t)}}return new C(s,t)}clear(){this._size=void 0,this._tree.clear()}delete(t){return this._size=void 0,ot(this._tree,t)}entries(){return new D(this,st)}forEach(t){for(const[s,n]of this)t(s,n,this)}fuzzyGet(t,s){return nt(this._tree,t,s)}get(t){const s=k(this._tree,t);return s!==void 0?s.get(_):void 0}has(t){const s=k(this._tree,t);return s!==void 0&&s.has(_)}keys(){return new D(this,L)}set(t,s){if(typeof t!="string")throw new Error("key must be a string");return this._size=void 0,I(this._tree,t).set(_,s),this}get size(){if(this._size)return this._size;this._size=0;const t=this.entries();for(;!t.next().done;)this._size+=1;return this._size}update(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=I(this._tree,t);return n.set(_,s(n.get(_))),this}fetch(t,s){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;const n=I(this._tree,t);let o=n.get(_);return o===void 0&&n.set(_,o=s()),o}values(){return new D(this,T)}[Symbol.iterator](){return this.entries()}static from(t){const s=new C;for(const[n,o]of t)s.set(n,o);return s}static fromObject(t){return C.from(Object.entries(t))}}const x=(e,t,s=[])=>{if(t.length===0||e==null)return[e,s];for(const n of e.keys())if(n!==_&&t.startsWith(n))return s.push([e,n]),x(e.get(n),t.slice(n.length),s);return s.push([e,t]),x(void 0,"",s)},k=(e,t)=>{if(t.length===0||e==null)return e;for(const s of e.keys())if(s!==_&&t.startsWith(s))return k(e.get(s),t.slice(s.length))},I=(e,t)=>{const s=t.length;t:for(let n=0;e&&n<s;){for(const u of e.keys())if(u!==_&&t[n]===u[0]){const i=Math.min(s-n,u.length);let r=1;for(;r<i&&t[n+r]===u[r];)++r;const d=e.get(u);if(r===u.length)e=d;else{const c=new Map;c.set(u.slice(r),d),e.set(t.slice(n,n+r),c),e.delete(u),e=c}n+=r;continue t}const o=new Map;return e.set(t.slice(n),o),o}return e},ot=(e,t)=>{const[s,n]=x(e,t);if(s!==void 0){if(s.delete(_),s.size===0)W(n);else if(s.size===1){const[o,u]=s.entries().next().value;q(n,o,u)}}},W=e=>{if(e.length===0)return;const[t,s]=O(e);if(t.delete(s),t.size===0)W(e.slice(0,-1));else if(t.size===1){const[n,o]=t.entries().next().value;n!==_&&q(e.slice(0,-1),n,o)}},q=(e,t,s)=>{if(e.length===0)return;const[n,o]=O(e);n.set(o+t,s),n.delete(o)},O=e=>e[e.length-1],ut=(e,t)=>{const s=e._idToShortId.get(t);if(s!=null)return e._storedFields.get(s)},it=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u,M="or",$="and",rt="and_not",ct=(e,t)=>{e.includes(t)||e.push(t)},N=(e,t)=>{for(const s of t)e.includes(s)||e.push(s)},P=({score:e},{score:t})=>t-e,lt=()=>new Map,b=e=>{const t=new Map;for(const s of Object.keys(e))t.set(parseInt(s,10),e[s]);return t},G=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0,ht={[M]:(e,t)=>{for(const s of t.keys()){const n=e.get(s);if(n==null)e.set(s,t.get(s));else{const{score:o,terms:u,match:i}=t.get(s);n.score=n.score+o,n.match=Object.assign(n.match,i),N(n.terms,u)}}return e},[$]:(e,t)=>{const s=new Map;for(const n of t.keys()){const o=e.get(n);if(o==null)continue;const{score:u,terms:i,match:r}=t.get(n);N(o.terms,i),s.set(n,{score:o.score+u,terms:o.terms,match:Object.assign(o.match,r)})}return s},[rt]:(e,t)=>{for(const s of t.keys())e.delete(s);return e}},dt=(e,t,s,n,o,u)=>{const{k:i,b:r,d}=u;return Math.log(1+(s-t+.5)/(t+.5))*(d+e*(i+1)/(e+i*(1-r+r*n/o)))},at=e=>(t,s,n)=>{const o=typeof e.fuzzy=="function"?e.fuzzy(t,s,n):e.fuzzy||!1,u=typeof e.prefix=="function"?e.prefix(t,s,n):e.prefix===!0;return{term:t,fuzzy:o,prefix:u}},H=(e,t,s,n)=>{for(const o of Object.keys(e._fieldIds))if(e._fieldIds[o]===s){e._options.logger("warn",`SlimSearch: document with ID ${e._documentIds.get(t)} has changed before removal: term "${n}" was not present in field "${o}". Removing a document after it has changed can corrupt the index!`,"version_conflict");return}},ft=(e,t,s,n)=>{if(!e._index.has(n)){H(e,s,t,n);return}const o=e._index.fetch(n,lt),u=o.get(t);u==null||u.get(s)==null?H(e,s,t,n):u.get(s)<=1?u.size<=1?o.delete(t):u.delete(s):u.set(s,u.get(s)-1),e._index.get(n).size===0&&e._index.delete(n)},gt={k:1.2,b:.7,d:.5},mt={idField:"id",extractField:(e,t)=>e[t],tokenize:e=>e.split(it),processTerm:e=>e.toLowerCase(),fields:void 0,searchOptions:void 0,storeFields:[],logger:(e,t)=>{typeof console?.[e]=="function"&&console[e](t)},autoVacuum:!0},J={combineWith:M,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:gt},pt={combineWith:$,prefix:(e,t,s)=>t===s.length-1},Ft={batchSize:1e3,batchWait:10},U={minDirtFactor:.1,minDirtCount:20},_t={...Ft,...U},K=Symbol("*"),yt=(e,t)=>{const s=new Map,n={...e._options.searchOptions,...t};for(const[o,u]of e._documentIds){const i=n.boostDocument?n.boostDocument(u,"",e._storedFields.get(o)):1;s.set(o,{score:i,terms:[],match:{}})}return s},X=(e,t=M)=>{if(e.length===0)return new Map;const s=t.toLowerCase(),n=ht[s];if(!n)throw new Error(`Invalid combination operator: ${t}`);return e.reduce(n)||new Map},S=(e,t,s,n,o,u,i,r,d=new Map)=>{if(o==null)return d;for(const c of Object.keys(u)){const a=u[c],h=e._fieldIds[c],g=o.get(h);if(g==null)continue;let m=g.size;const p=e._avgFieldLength[h];for(const l of g.keys()){if(!e._documentIds.has(l)){ft(e,h,l,s),m-=1;continue}const f=i?i(e._documentIds.get(l),s,e._storedFields.get(l)):1;if(!f)continue;const y=g.get(l),F=e._fieldLength.get(l)[h],v=dt(y,m,e._documentCount,F,p,r),z=n*a*f*v,A=d.get(l);if(A){A.score+=z,ct(A.terms,t);const w=G(A.match,s);w?w.push(c):A.match[s]=[c]}else d.set(l,{score:z,terms:[t],match:{[s]:[c]}})}}return d},At=(e,t,s)=>{const n={...e._options.searchOptions,...s},o=(n.fields||e._options.fields).reduce((l,f)=>({...l,[f]:G(n.boost,f)||1}),{}),{boostDocument:u,weights:i,maxFuzzy:r,bm25:d}=n,{fuzzy:c,prefix:a}={...J.weights,...i},h=e._index.get(t.term),g=S(e,t.term,t.term,1,h,o,u,d);let m,p;if(t.prefix&&(m=e._index.atPrefix(t.term)),t.fuzzy){const l=t.fuzzy===!0?.2:t.fuzzy,f=l<1?Math.min(r,Math.round(t.term.length*l)):l;f&&(p=e._index.fuzzyGet(t.term,f))}if(m)for(const[l,f]of m){const y=l.length-t.term.length;if(!y)continue;p?.delete(l);const F=a*l.length/(l.length+.3*y);S(e,t.term,l,F,f,o,u,d,g)}if(p)for(const l of p.keys()){const[f,y]=p.get(l);if(!y)continue;const F=c*l.length/(l.length+y);S(e,t.term,l,F,f,o,u,d,g)}return g},Y=(e,t,s={})=>{if(t===K)return yt(e,s);if(typeof t!="string"){const a={...s,...t,queries:void 0},h=t.queries.map(g=>Y(e,g,a));return X(h,a.combineWith)}const{tokenize:n,processTerm:o,searchOptions:u}=e._options,i={tokenize:n,processTerm:o,...u,...s},{tokenize:r,processTerm:d}=i,c=r(t).flatMap(a=>d(a)).filter(a=>!!a).map(at(i)).map(a=>At(e,a,i));return X(c,i.combineWith)},Q=(e,t,s={})=>{const n=Y(e,t,s),o=[];for(const[u,{score:i,terms:r,match:d}]of n){const c=r.length||1,a={id:e._documentIds.get(u),score:i*c,terms:Object.keys(d),queryTerms:r,match:d};Object.assign(a,e._storedFields.get(u)),(s.filter==null||s.filter(a))&&o.push(a)}return t===K&&s.boostDocument==null&&e._options.searchOptions.boostDocument==null||o.sort(P),o},Ct=(e,t,s={})=>{s={...e._options.autoSuggestOptions,...s};const n=new Map;for(const{score:u,terms:i}of Q(e,t,s)){const r=i.join(" "),d=n.get(r);d!=null?(d.score+=u,d.count+=1):n.set(r,{score:u,terms:i,count:1})}const o=[];for(const[u,{score:i,terms:r,count:d}]of n)o.push({suggestion:u,terms:r,score:i/d});return o.sort(P),o};class Et{_options;_index;_documentCount;_documentIds;_idToShortId;_fieldIds;_fieldLength;_avgFieldLength;_nextId;_storedFields;_dirtCount;_currentVacuum;_enqueuedVacuum;_enqueuedVacuumConditions;constructor(t){if(t?.fields==null)throw new Error('SlimSearch: option "fields" must be provided');const s=t.autoVacuum==null||t.autoVacuum===!0?_t:t.autoVacuum;this._options={...mt,...t,autoVacuum:s,searchOptions:{...J,...t.searchOptions||{}},autoSuggestOptions:{...pt,...t.autoSuggestOptions||{}}},this._index=new C,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=U,this.addFields(this._options.fields)}get isVacuuming(){return this._currentVacuum!=null}get dirtCount(){return this._dirtCount}get dirtFactor(){return this._dirtCount/(1+this._documentCount+this._dirtCount)}get documentCount(){return this._documentCount}get termCount(){return this._index.size}toJSON(){const t=[];for(const[s,n]of this._index){const o={};for(const[u,i]of n)o[u]=Object.fromEntries(i);t.push([s,o])}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:t,serializationVersion:2}}addFields(t){for(let s=0;s<t.length;s++)this._fieldIds[t[s]]=s}}const zt=({index:e,documentCount:t,nextId:s,documentIds:n,fieldIds:o,fieldLength:u,averageFieldLength:i,storedFields:r,dirtCount:d,serializationVersion:c},a)=>{if(c!==1&&c!==2)throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");const h=new Et(a);h._documentCount=t,h._nextId=s,h._documentIds=b(n),h._idToShortId=new Map,h._fieldIds=o,h._fieldLength=b(u),h._avgFieldLength=i,h._storedFields=b(r),h._dirtCount=d||0,h._index=new C;for(const[g,m]of h._documentIds)h._idToShortId.set(m,g);for(const[g,m]of e){const p=new Map;for(const l of Object.keys(m)){let f=m[l];c===1&&(f=f.ds),p.set(parseInt(l,10),b(f))}h._index.set(g,p)}return h},B=(e,t)=>{const s=e.toLowerCase(),n=t.toLowerCase(),o=[];let u=0,i=0;const r=(c,a=!1)=>{let h="";i===0?h=c.length>20?`… ${c.slice(-20)}`:c:a?h=c.length+i>100?`${c.slice(0,100-i)}… `:c:h=c.length>20?`${c.slice(0,20)} … ${c.slice(-20)}`:c,h&&o.push(h),i+=h.length,a||(o.push(["mark",t]),i+=t.length,i>=100&&o.push(" …"))};let d=s.indexOf(n,u);if(d===-1)return null;for(;d>=0;){const c=d+n.length;if(r(e.slice(u,d)),u=c,i>100)break;d=s.indexOf(n,u)}return i<100&&r(e.slice(u),!0),o},wt=(e,t)=>t.contents.reduce((s,[,n])=>s+n,0)-e.contents.reduce((s,[,n])=>s+n,0),xt=(e,t)=>Math.max(...t.contents.map(([,s])=>s))-Math.max(...e.contents.map(([,s])=>s)),Z=(e,t,s={})=>{const n={};return Q(t,e,{boost:{h:2,t:1,c:4},prefix:!0,...s}).forEach(o=>{const{id:u,terms:i,score:r}=o,d=u.includes("@"),c=u.includes("#"),[a,h]=u.split(/[#@]/),g=Number(a),m=i.sort((l,f)=>l.length-f.length).filter((l,f)=>i.slice(f+1).every(y=>!y.includes(l))),{contents:p}=n[g]??={title:"",contents:[]};if(d)p.push([{type:"customField",id:g,index:h,display:m.map(l=>o.c.map(f=>B(f,l))).flat().filter(l=>l!==null)},r]);else{const l=m.map(f=>B(o.h,f)).filter(f=>f!==null);if(l.length&&p.push([{type:c?"heading":"title",id:g,...c&&{anchor:h},display:l},r]),"t"in o)for(const f of o.t){const y=m.map(F=>B(f,F)).filter(F=>F!==null);y.length&&p.push([{type:"text",id:g,...c&&{anchor:h},display:y},r])}}}),V(n).sort(([,o],[,u])=>"max"==="total"?wt(o,u):xt(o,u)).map(([o,{title:u,contents:i}])=>{if(!u){const r=ut(t,o);r&&(u=r.h)}return{title:u,contents:i.map(([r])=>r)}})},tt=(e,t,s={})=>{const n=Ct(t,e,{fuzzy:.2,maxFuzzy:3,...s}).map(({suggestion:o})=>o);return e.includes(" ")?n:n.filter(o=>!o.includes(" "))},bt=et(V(JSON.parse("{\"/\":{\"documentCount\":23,\"nextId\":23,\"documentIds\":{\"0\":\"0\",\"1\":\"7\",\"2\":\"7#目录\",\"3\":\"7#什么是生产图\",\"4\":\"7#什么是预览图\",\"5\":\"7#生产图设计方法\",\"6\":\"7#预览图设计方法\",\"7\":\"8\",\"8\":\"8#定义\",\"9\":\"8#狭义定义\",\"10\":\"8#广义定义\",\"11\":\"8#英译\",\"12\":\"12\",\"13\":\"13\",\"14\":\"13#疫情后美国部分户外运动的新参与者留存率高达60-以上\",\"15\":\"13#人均gdp-美元-与户外运动发展规律\",\"16\":\"13#郊-野-趣-行春-钓-新-势-力解锁春日近郊n种玩法\",\"17\":\"13#塑料鱼饵中国前5强生产商排名及市场份额\",\"18\":\"13#adaptive-systems-forclimate-ready-fisheriesmanagement\",\"19\":\"13#在摩洛哥开创海洋空间规划\",\"20\":\"13#【美国环保协会】捕捞份额案例-日本共同渔业权制度\",\"21\":\"17\",\"22\":\"18\"},\"fieldIds\":{\"h\":0,\"t\":1,\"c\":2},\"fieldLength\":{\"0\":[1,9],\"1\":[1,5],\"2\":[1,4],\"3\":[1,14],\"4\":[1,9],\"5\":[1,88],\"6\":[1,30],\"7\":[1,29],\"8\":[1],\"9\":[1,4],\"10\":[1,8],\"11\":[1,15],\"12\":[1,6],\"13\":[1],\"14\":[2],\"15\":[3],\"16\":[8],\"17\":[1],\"18\":[5],\"19\":[1],\"20\":[4],\"21\":[1,95],\"22\":[1,3]},\"averageFieldLength\":[1.7391304347826086,21.433110367892972],\"storedFields\":{\"0\":{\"h\":\"Home\",\"t\":[\"Made By PingAGI 🐟 © 2024-present 【渔具创新工场】\"]},\"1\":{\"h\":\"商品定制｜如何在Preview设计器设计生产图与预览图\",\"t\":[\"生产图是您在工厂用来生产印刷产品时使用的文件，预览图是在店铺展示给消费者的产品效果图，商品定制插件Preview设计器提供了这两个文件所需的设计面板，您可以按照需要自由设计出想要的效果。\"]},\"2\":{\"h\":\"目录\",\"t\":[\"什么是生产图\",\"什么是预览图\",\"生产图设计方法\",\"预览图设计方法\"]},\"3\":{\"h\":\"什么是生产图\",\"t\":[\"生产是制作产品时，用于印刷样式的文件，包含了所有需要在打印物上呈现的图像、文本等元素。当消费者提交个性化订单后，Preview设计器会自动为您生成这个文件，您可以直接用于产品的生产印刷。\",\"备注：在绝大多数情况下，生产图会在提交订单后1小时内生成，若您发现文件长时间生成，请勿担心，您可以继续等待或与在线客服取得联系。\"]},\"4\":{\"h\":\"什么是预览图\",\"t\":[\"预览图是在店铺展示给消费者的产品效果图，当消费者在进行个性化操作时，定制器会根据您的设计以及消费者个性化的内容，实时展示产品效果，帮助您更好的展示产品。当消费者提交订单时，预览图将会同步添加到订单内并命名为“preview”\"]},\"5\":{\"h\":\"生产图设计方法\",\"t\":[\"设置生产图尺寸\",\"您可以点击【生产图尺寸】修改文件的宽与高，单位可选择 MM、INCH、PX 三种，并且可以设置 PPI 参数。\",\"备注：宽高请勿超过 16000 * 16000 PX\",\"调整元素的位置\",\"您可以调整选项在生产图上的效果，包括位置、大小、形状、旋转角度等。包含【图片选项】、【文字】、【弯曲文字】、【文件上传】四种选项。\",\"每一个选项在打印文件上都有一个蓝色的矩形框，矩形框的位置代表了选项内容的印刷位置\",\"您可以点击某个选项的矩形框或者在左侧选项列表中进行选中，进行选项位置的调整。\",\"您可以选中矩形框进行拖动，点击矩形框的四个角进行等比例缩放，点击矩形框的某个边进行拉长或缩短，点击旋转按钮进行旋转\",\"您可以点击【分组】进行批量选中这个分组下的所有选项，所有选项的最外围会出现一个大的矩形框，可点击这个矩形框进行批量的移动，缩放，旋转等\",\"如果您不希望某个选项出现在打印文件上，那么只需将这个选项的矩形框移动到打印文件区域之外的灰色区域即可。\",\"您可以使用右下角的【视图按钮】或者鼠标滚轮进行缩放视角，来帮助您更好的设计\",\"您可以在打印图内查看选项值的实际效果，选中图片选项的某张图，即可在打印图内展示，如过这个图片选项引用了素材，那么切换不同的 option 值即可查看素材内不同照片的效果，您可以在【文字】中输入预设文字，那么打印文件中即可展示文字效果\",\"左上角为【步骤回撤】按钮，您可以撤回上一步在画板上的编辑操作，也可以恢复到撤回之前的操作\",\"您可以通过鼠标左键范围选中画板上的元素，进行批量的操作处理，您需要把整个都包含起来才算选中\",\"打印文件内，各个选项的图层顺序与左侧选项列表中的选项上下顺序保持一致。鼠标点击想要调整的选项，上下拖动选项来调整图层顺序\",\"您可以使用一些快捷键来提升操作效率，例如：\",\"撤回上一步：ctrl+z（Windows版本），command+z（Mac版本）\",\"恢复上一步：ctrl+z+shift（Windows版本），command+z+shift（Mac版本）\",\"批量选中：按住shift时，点击不同定制项/分组，然后整体进行移动，缩放，旋转等操作\",\"全选定：ctrl+a（Windows版本），comman+a（Mac版本）\",\"通过键盘的方向键对元素进行移动操作\"]},\"6\":{\"h\":\"预览图设计方法\",\"t\":[\"预览图的操作方法与生产图一样，您可以查看上述内容。但预览图有一些特殊的地方：\",\"预览图可以设置背景，而生产图一般不需要。\",\"预览图与生产图的设计是独立的，每个元素在两张图上都各有一个坐标，相互独立。\",\"您需要先设计生产图，然后再设计预览图，当您首次进入【预览设置】时，定制器会自动基于生产图的设计为您初始化预览图，因此看起来两张图的效果会一致，但您可以再进行调整。\",\"若您后续调整了生产图，期望能够快速将预览图调整为跟生产图一致的效果，您可以点击【重置预览】，定制器会重新基于生产图为您初始化预览图\",\"左侧的选项列表上下顺序代表着元素的图层顺序，这可能与实际在产品页面上展示选项的顺序有所区别，如果您希望调整选项在产品页面的展示顺序，您可以点击【展示顺序】进行调整\",\"设计预览图时，您只能等比缩放元素的大小，并且无法添加新的选项。\"]},\"7\":{\"h\":\"\",\"t\":[\"来样加工是由外商提供样品、图纸，间或派出技术人员，由中方工厂按照对方质量、样式、款式、花色、规格、数量等要求，用中方工厂自己的原材料生产，产品由外商销售，中方工厂按合同规定外汇价格收取货款。由于这种交易不含有任何委托加工装配的性质，产品出口后收取的是成品的全部价款而不是工缴费。因此它属于正常的出口贸易。 中文名\",\"来样加工\",\"外文名\",\"processing according to buyer's sample\",\"属 性\",\"贸易方式\",\"出口收汇\",\"必须全部结汇\"]},\"8\":{\"h\":\"定义\"},\"9\":{\"h\":\"狭义定义\",\"t\":[\"按照外汇管理法规的规定，一般与普通贸易方式一样，出口收汇必须全部结汇。\"]},\"10\":{\"h\":\"广义定义\",\"t\":[\"来样加工也叫来料加工是由甲方提供材料和要求（要求含质量要求、数量、交期），由乙方按照要求加工成或生产出符合要求并按照规定交货的情况，甲方按照合同规定付给乙方加工费用（劳动报酬的）的情况\"]},\"11\":{\"h\":\"英译\",\"t\":[\"来料加工： processing with Given materials\",\"来样定制： made to order against buyer's samples\",\"（外贸用语）\"]},\"12\":{\"h\":\"聊聊吧\",\"t\":[\" pingagi@proton.me\",\"Pingagi - YouTube\"]},\"13\":{\"h\":\"行业报告\"},\"14\":{\"h\":\"疫情后美国部分户外运动的新参与者留存率高达60%以上\"},\"15\":{\"h\":\"人均GDP(美元)与户外运动发展规律\"},\"16\":{\"h\":\"郊 野 趣 行春 钓 新 势 力解锁春日近郊N种玩法\"},\"17\":{\"h\":\"塑料鱼饵中国前5强生产商排名及市场份额\"},\"18\":{\"h\":\"Adaptive Systems forClimate-Ready FisheriesManagement\"},\"19\":{\"h\":\"在摩洛哥开创海洋空间规划\"},\"20\":{\"h\":\"【美国环保协会】捕捞份额案例_-_日本共同渔业权制度\"},\"21\":{\"h\":\"轻定制\",\"t\":[\"各大平台都在不断地完善一些相关功能，今天来了解一下国际站的：\",\"国际站上线了轻定制商品买家下单功能，\",\"助力商家提升定制商品销量，\",\"也提高买家在线定制商品的下单体验。\",\"背景说明及规则要点\",\"背景说明：为了给买家提供更好的在线轻定制下单功能和体验，可交易轻定制商品和半托管轻定制商品的买家下单功能将于5月8号同步上线。本次公告的下单规则仅限非半托管轻定制订单\",\"规则要点：非半托管可交易轻定制商品预计于5月8日上线，商家可在商品发布页面“交易信息”模块最后一个组件“定制服务”中选择定制服务，并填写属性值对应的价格、moq或图片。买家如选择定制需求订单，商家有3天时间接单，接单后买家有7天时间支付，支付完成后商家需要在接单时约定的交货期内完成发货。\",\"建议行动点：商家可针对RTS品和询盘可交易品做好配置定制服务，轻定制接单时，商家需要上传和买家沟通确认的定制效果图，同时按轻定制服务要求合规履约。\",\"主要功能介绍\",\"适用商家群体：在国际站提供有定制商品服务的商家\",\"可交易轻定制的商品：配置过定制服务项目的RTS品和询盘可交易品\",\"特别提醒：存量配置过定制服务的RTS品和询盘可交易品，下单链路预计将在5月8号后从之前仅支持现货下单升级成支持现货下单和轻定制下单双模式。\",\"买家轻定制订单下单流程：买家可点击star order后再点击customization添加定制服务完成定制需求订单提交（submit order )，买家下单后不可直接支付，商家有3天时间接单，接单后买家有7天时间支付，支付完成后商家需要在接单时约定的交货期内完成发货。（*以实际上线为准）\",\"商家接单流程：商家会收到系统通知提醒接单，商家也可以自主进入My alibaba - 交易管理 - 所有订单 - 待确认订单 了解待接单情况，及时和买家沟通并在接单时间要求内完成接单。\",\"特别提醒：轻定制接单时，商家需要上传和买家沟通确认的定制效果图。\",\"非半托管 VS 半托管轻定制订单规则主要区别：\",\"常见问题解答\",\"问：买家下单支持轻定制的商品后，商家在3天接单期内拒绝接单的，是否会面临平台成交不卖处罚？\",\"答：不会处罚，轻定制订单接单期商家最终评估后不接单的，不构成成交不卖。\",\"问：非半托管轻定制订单的发货时间如何确定，是否属于到货保障订单？\",\"答：买卖家协商确定发货时间，是否属于到货保障订单根据卖家起草订单的到货保障订单生成条件。\",\"问：买家下单支持轻定制的商品后（非半托管订单），商家如不按时发货，是否会受平台处罚？\",\"答：任何订单都需要按约定时间及时发货，如未按时发货，将根据《阿里巴巴国际站交易违规处罚规则》《关于商家有责纠纷率指标统计口径的公告》及《商家原因导致订单达成后不发货规则升级FAQ》变更公告等平台规则处理。\",\"问：定制服务功能升级前存量设置的定制服务数据在升级后的如何处理？\",\"答：历史配置的定制服务项（logo/包装/图案/自定义定制服务）数据会保留，商家编辑历史商品时可根据实际定制能力修改，再次提交商品后便会更新为商家最新的数据。\",\"问：如何设置定制服务？\",\"答：商品发布功能4月29号开始发布新版本，预计5月9号对客全量。本次新版本中定制服务功能升级，商家可在商品发布页面“交易信息”模块最后一个组件“定制服务”中\",\"选择定制服务，并填写属性值对应的价格、moq或图片。\"]},\"22\":{\"h\":\"\",\"t\":[\"404 Not Found\"]}},\"dirtCount\":0,\"index\":[[\"not\",{\"1\":{\"22\":1}}],[\"404\",{\"1\":{\"22\":1}}],[\"选择定制服务\",{\"1\":{\"21\":1}}],[\"选中图片选项的某张图\",{\"1\":{\"5\":1}}],[\"本次新版本中定制服务功能升级\",{\"1\":{\"21\":1}}],[\"本次公告的下单规则仅限非半托管轻定制订单\",{\"1\":{\"21\":1}}],[\"预计5月9号对客全量\",{\"1\":{\"21\":1}}],[\"预览设置\",{\"1\":{\"6\":1}}],[\"预览图与生产图的设计是独立的\",{\"1\":{\"6\":1}}],[\"预览图可以设置背景\",{\"1\":{\"6\":1}}],[\"预览图的操作方法与生产图一样\",{\"1\":{\"6\":1}}],[\"预览图将会同步添加到订单内并命名为\",{\"1\":{\"4\":1}}],[\"预览图设计方法\",{\"0\":{\"6\":1},\"1\":{\"2\":1}}],[\"预览图是在店铺展示给消费者的产品效果图\",{\"1\":{\"1\":1,\"4\":1}}],[\"再次提交商品后便会更新为商家最新的数据\",{\"1\":{\"21\":1}}],[\"数据会保留\",{\"1\":{\"21\":1}}],[\"数量\",{\"1\":{\"10\":1}}],[\"数量等要求\",{\"1\":{\"7\":1}}],[\"自定义定制服务\",{\"1\":{\"21\":1}}],[\"logo\",{\"1\":{\"21\":1}}],[\"历史配置的定制服务项\",{\"1\":{\"21\":1}}],[\"变更公告等平台规则处理\",{\"1\":{\"21\":1}}],[\"及\",{\"1\":{\"21\":1}}],[\"及时和买家沟通并在接单时间要求内完成接单\",{\"1\":{\"21\":1}}],[\"关于商家有责纠纷率指标统计口径的公告\",{\"1\":{\"21\":1}}],[\"阿里巴巴国际站交易违规处罚规则\",{\"1\":{\"21\":1}}],[\"将根据\",{\"1\":{\"21\":1}}],[\"任何订单都需要按约定时间及时发货\",{\"1\":{\"21\":1}}],[\"买卖家协商确定发货时间\",{\"1\":{\"21\":1}}],[\"买家下单支持轻定制的商品后\",{\"1\":{\"21\":2}}],[\"买家下单后不可直接支付\",{\"1\":{\"21\":1}}],[\"买家可点击star\",{\"1\":{\"21\":1}}],[\"买家轻定制订单下单流程\",{\"1\":{\"21\":1}}],[\"买家如选择定制需求订单\",{\"1\":{\"21\":1}}],[\"是否会受平台处罚\",{\"1\":{\"21\":1}}],[\"是否会面临平台成交不卖处罚\",{\"1\":{\"21\":1}}],[\"是否属于到货保障订单根据卖家起草订单的到货保障订单生成条件\",{\"1\":{\"21\":1}}],[\"是否属于到货保障订单\",{\"1\":{\"21\":1}}],[\"不构成成交不卖\",{\"1\":{\"21\":1}}],[\"不会处罚\",{\"1\":{\"21\":1}}],[\"答\",{\"1\":{\"21\":5}}],[\"问\",{\"1\":{\"21\":5}}],[\"常见问题解答\",{\"1\":{\"21\":1}}],[\"半托管轻定制订单规则主要区别\",{\"1\":{\"21\":1}}],[\"vs\",{\"1\":{\"21\":1}}],[\"非半托管订单\",{\"1\":{\"21\":1}}],[\"非半托管轻定制订单的发货时间如何确定\",{\"1\":{\"21\":1}}],[\"非半托管\",{\"1\":{\"21\":1}}],[\"非半托管可交易轻定制商品预计于5月8日上线\",{\"1\":{\"21\":1}}],[\"了解待接单情况\",{\"1\":{\"21\":1}}],[\"待确认订单\",{\"1\":{\"21\":1}}],[\"所有订单\",{\"1\":{\"21\":1}}],[\"所有选项的最外围会出现一个大的矩形框\",{\"1\":{\"5\":1}}],[\"以实际上线为准\",{\"1\":{\"21\":1}}],[\"以上\",{\"0\":{\"14\":1}}],[\"下单链路预计将在5月8号后从之前仅支持现货下单升级成支持现货下单和轻定制下单双模式\",{\"1\":{\"21\":1}}],[\"存量配置过定制服务的rts品和询盘可交易品\",{\"1\":{\"21\":1}}],[\"特别提醒\",{\"1\":{\"21\":2}}],[\"配置过定制服务项目的rts品和询盘可交易品\",{\"1\":{\"21\":1}}],[\"适用商家群体\",{\"1\":{\"21\":1}}],[\"主要功能介绍\",{\"1\":{\"21\":1}}],[\"同时按轻定制服务要求合规履约\",{\"1\":{\"21\":1}}],[\"建议行动点\",{\"1\":{\"21\":1}}],[\"支付完成后商家需要在接单时约定的交货期内完成发货\",{\"1\":{\"21\":2}}],[\"接单后买家有7天时间支付\",{\"1\":{\"21\":2}}],[\"并填写属性值对应的价格\",{\"1\":{\"21\":2}}],[\"并且无法添加新的选项\",{\"1\":{\"6\":1}}],[\"并且可以设置\",{\"1\":{\"5\":1}}],[\"模块最后一个组件\",{\"1\":{\"21\":2}}],[\"交易管理\",{\"1\":{\"21\":1}}],[\"交易信息\",{\"1\":{\"21\":2}}],[\"交期\",{\"1\":{\"10\":1}}],[\"商品发布功能4月29号开始发布新版本\",{\"1\":{\"21\":1}}],[\"商品定制插件preview设计器提供了这两个文件所需的设计面板\",{\"1\":{\"1\":1}}],[\"商品定制｜如何在preview设计器设计生产图与预览图\",{\"0\":{\"1\":1}}],[\"商家编辑历史商品时可根据实际定制能力修改\",{\"1\":{\"21\":1}}],[\"商家原因导致订单达成后不发货规则升级faq\",{\"1\":{\"21\":1}}],[\"商家如不按时发货\",{\"1\":{\"21\":1}}],[\"商家在3天接单期内拒绝接单的\",{\"1\":{\"21\":1}}],[\"商家也可以自主进入my\",{\"1\":{\"21\":1}}],[\"商家会收到系统通知提醒接单\",{\"1\":{\"21\":1}}],[\"商家接单流程\",{\"1\":{\"21\":1}}],[\"商家需要上传和买家沟通确认的定制效果图\",{\"1\":{\"21\":2}}],[\"商家可针对rts品和询盘可交易品做好配置定制服务\",{\"1\":{\"21\":1}}],[\"商家可在商品发布页面\",{\"1\":{\"21\":2}}],[\"商家有3天时间接单\",{\"1\":{\"21\":2}}],[\"规则要点\",{\"1\":{\"21\":1}}],[\"规格\",{\"1\":{\"7\":1}}],[\"可交易轻定制的商品\",{\"1\":{\"21\":1}}],[\"可交易轻定制商品和半托管轻定制商品的买家下单功能将于5月8号同步上线\",{\"1\":{\"21\":1}}],[\"可点击这个矩形框进行批量的移动\",{\"1\":{\"5\":1}}],[\"为了给买家提供更好的在线轻定制下单功能和体验\",{\"1\":{\"21\":1}}],[\"背景说明\",{\"1\":{\"21\":1}}],[\"背景说明及规则要点\",{\"1\":{\"21\":1}}],[\"也提高买家在线定制商品的下单体验\",{\"1\":{\"21\":1}}],[\"也可以恢复到撤回之前的操作\",{\"1\":{\"5\":1}}],[\"助力商家提升定制商品销量\",{\"1\":{\"21\":1}}],[\"国际站上线了轻定制商品买家下单功能\",{\"1\":{\"21\":1}}],[\"今天来了解一下国际站的\",{\"1\":{\"21\":1}}],[\"各大平台都在不断地完善一些相关功能\",{\"1\":{\"21\":1}}],[\"各个选项的图层顺序与左侧选项列表中的选项上下顺序保持一致\",{\"1\":{\"5\":1}}],[\"轻定制订单接单期商家最终评估后不接单的\",{\"1\":{\"21\":1}}],[\"轻定制接单时\",{\"1\":{\"21\":2}}],[\"轻定制\",{\"0\":{\"21\":1}}],[\"日本共同渔业权制度\",{\"0\":{\"20\":1}}],[\"捕捞份额案例\",{\"0\":{\"20\":1}}],[\"美国环保协会\",{\"0\":{\"20\":1}}],[\"美元\",{\"0\":{\"15\":1}}],[\"在国际站提供有定制商品服务的商家\",{\"1\":{\"21\":1}}],[\"在摩洛哥开创海洋空间规划\",{\"0\":{\"19\":1}}],[\"在绝大多数情况下\",{\"1\":{\"3\":1}}],[\"found\",{\"1\":{\"22\":1}}],[\"forclimate\",{\"0\":{\"18\":1}}],[\"fisheriesmanagement\",{\"0\":{\"18\":1}}],[\"ready\",{\"0\":{\"18\":1}}],[\"塑料鱼饵中国前5强生产商排名及市场份额\",{\"0\":{\"17\":1}}],[\"力解锁春日近郊n种玩法\",{\"0\":{\"16\":1}}],[\"势\",{\"0\":{\"16\":1}}],[\"新\",{\"0\":{\"16\":1}}],[\"钓\",{\"0\":{\"16\":1}}],[\"行春\",{\"0\":{\"16\":1}}],[\"行业报告\",{\"0\":{\"13\":1}}],[\"趣\",{\"0\":{\"16\":1}}],[\"野\",{\"0\":{\"16\":1}}],[\"郊\",{\"0\":{\"16\":1}}],[\"与户外运动发展规律\",{\"0\":{\"15\":1}}],[\"人均gdp\",{\"0\":{\"15\":1}}],[\"疫情后美国部分户外运动的新参与者留存率高达60\",{\"0\":{\"14\":1}}],[\"youtube\",{\"1\":{\"12\":1}}],[\"聊聊吧\",{\"0\":{\"12\":1}}],[\"外贸用语\",{\"1\":{\"11\":1}}],[\"外文名\",{\"1\":{\"7\":1}}],[\"alibaba\",{\"1\":{\"21\":1}}],[\"adaptive\",{\"0\":{\"18\":1}}],[\"against\",{\"1\":{\"11\":1}}],[\"according\",{\"1\":{\"7\":1}}],[\"order后再点击customization添加定制服务完成定制需求订单提交\",{\"1\":{\"21\":1}}],[\"order\",{\"1\":{\"11\":1,\"21\":1}}],[\"option\",{\"1\":{\"5\":1}}],[\"given\",{\"1\":{\"11\":1}}],[\"with\",{\"1\":{\"11\":1}}],[\"windows版本\",{\"1\":{\"5\":3}}],[\"英译\",{\"0\":{\"11\":1}}],[\"的情况\",{\"1\":{\"10\":1}}],[\"劳动报酬的\",{\"1\":{\"10\":1}}],[\"甲方按照合同规定付给乙方加工费用\",{\"1\":{\"10\":1}}],[\"要求含质量要求\",{\"1\":{\"10\":1}}],[\"广义定义\",{\"0\":{\"10\":1}}],[\"一般与普通贸易方式一样\",{\"1\":{\"9\":1}}],[\"狭义定义\",{\"0\":{\"9\":1}}],[\"定制服务功能升级前存量设置的定制服务数据在升级后的如何处理\",{\"1\":{\"21\":1}}],[\"定制服务\",{\"1\":{\"21\":2}}],[\"定制器会重新基于生产图为您初始化预览图\",{\"1\":{\"6\":1}}],[\"定制器会自动基于生产图的设计为您初始化预览图\",{\"1\":{\"6\":1}}],[\"定制器会根据您的设计以及消费者个性化的内容\",{\"1\":{\"4\":1}}],[\"定义\",{\"0\":{\"8\":1}}],[\"必须全部结汇\",{\"1\":{\"7\":1}}],[\"出口收汇必须全部结汇\",{\"1\":{\"9\":1}}],[\"出口收汇\",{\"1\":{\"7\":1}}],[\"贸易方式\",{\"1\":{\"7\":1}}],[\"性\",{\"1\":{\"7\":1}}],[\"属\",{\"1\":{\"7\":1}}],[\"submit\",{\"1\":{\"21\":1}}],[\"systems\",{\"0\":{\"18\":1}}],[\"samples\",{\"1\":{\"11\":1}}],[\"sample\",{\"1\":{\"7\":1}}],[\"s\",{\"1\":{\"7\":1,\"11\":1}}],[\"buyer\",{\"1\":{\"7\":1,\"11\":1}}],[\"by\",{\"1\":{\"0\":1}}],[\"to\",{\"1\":{\"7\":1,\"11\":1}}],[\"因此它属于正常的出口贸易\",{\"1\":{\"7\":1}}],[\"因此看起来两张图的效果会一致\",{\"1\":{\"6\":1}}],[\"产品出口后收取的是成品的全部价款而不是工缴费\",{\"1\":{\"7\":1}}],[\"产品由外商销售\",{\"1\":{\"7\":1}}],[\"由乙方按照要求加工成或生产出符合要求并按照规定交货的情况\",{\"1\":{\"10\":1}}],[\"由于这种交易不含有任何委托加工装配的性质\",{\"1\":{\"7\":1}}],[\"由中方工厂按照对方质量\",{\"1\":{\"7\":1}}],[\"中\",{\"1\":{\"21\":1}}],[\"中选择定制服务\",{\"1\":{\"21\":1}}],[\"中文名\",{\"1\":{\"7\":1}}],[\"中方工厂按合同规定外汇价格收取货款\",{\"1\":{\"7\":1}}],[\"中输入预设文字\",{\"1\":{\"5\":1}}],[\"用中方工厂自己的原材料生产\",{\"1\":{\"7\":1}}],[\"用于印刷样式的文件\",{\"1\":{\"3\":1}}],[\"花色\",{\"1\":{\"7\":1}}],[\"款式\",{\"1\":{\"7\":1}}],[\"样式\",{\"1\":{\"7\":1}}],[\"间或派出技术人员\",{\"1\":{\"7\":1}}],[\"图案\",{\"1\":{\"21\":1}}],[\"图纸\",{\"1\":{\"7\":1}}],[\"图片选项\",{\"1\":{\"5\":1}}],[\"来样定制\",{\"1\":{\"11\":1}}],[\"来样加工也叫来料加工是由甲方提供材料和要求\",{\"1\":{\"10\":1}}],[\"来样加工\",{\"1\":{\"7\":1}}],[\"来样加工是由外商提供样品\",{\"1\":{\"7\":1}}],[\"来料加工\",{\"1\":{\"11\":1}}],[\"来帮助您更好的设计\",{\"1\":{\"5\":1}}],[\"设计预览图时\",{\"1\":{\"6\":1}}],[\"设置生产图尺寸\",{\"1\":{\"5\":1}}],[\"展示顺序\",{\"1\":{\"6\":1}}],[\"这可能与实际在产品页面上展示选项的顺序有所区别\",{\"1\":{\"6\":1}}],[\"左侧的选项列表上下顺序代表着元素的图层顺序\",{\"1\":{\"6\":1}}],[\"左上角为\",{\"1\":{\"5\":1}}],[\"重置预览\",{\"1\":{\"6\":1}}],[\"期望能够快速将预览图调整为跟生产图一致的效果\",{\"1\":{\"6\":1}}],[\"若您后续调整了生产图\",{\"1\":{\"6\":1}}],[\"若您发现文件长时间生成\",{\"1\":{\"3\":1}}],[\"但您可以再进行调整\",{\"1\":{\"6\":1}}],[\"但预览图有一些特殊的地方\",{\"1\":{\"6\":1}}],[\"时\",{\"1\":{\"6\":1}}],[\"当您首次进入\",{\"1\":{\"6\":1}}],[\"当消费者提交订单时\",{\"1\":{\"4\":1}}],[\"当消费者提交个性化订单后\",{\"1\":{\"3\":1}}],[\"当消费者在进行个性化操作时\",{\"1\":{\"4\":1}}],[\"然后再设计预览图\",{\"1\":{\"6\":1}}],[\"然后整体进行移动\",{\"1\":{\"5\":1}}],[\"相互独立\",{\"1\":{\"6\":1}}],[\"每个元素在两张图上都各有一个坐标\",{\"1\":{\"6\":1}}],[\"每一个选项在打印文件上都有一个蓝色的矩形框\",{\"1\":{\"5\":1}}],[\"而生产图一般不需要\",{\"1\":{\"6\":1}}],[\"通过键盘的方向键对元素进行移动操作\",{\"1\":{\"5\":1}}],[\"全选定\",{\"1\":{\"5\":1}}],[\"按照外汇管理法规的规定\",{\"1\":{\"9\":1}}],[\"按住shift时\",{\"1\":{\"5\":1}}],[\"按钮\",{\"1\":{\"5\":1}}],[\"批量选中\",{\"1\":{\"5\":1}}],[\"恢复上一步\",{\"1\":{\"5\":1}}],[\"comman+a\",{\"1\":{\"5\":1}}],[\"command+z+shift\",{\"1\":{\"5\":1}}],[\"command+z\",{\"1\":{\"5\":1}}],[\"ctrl+a\",{\"1\":{\"5\":1}}],[\"ctrl+z+shift\",{\"1\":{\"5\":1}}],[\"ctrl+z\",{\"1\":{\"5\":1}}],[\"撤回上一步\",{\"1\":{\"5\":1}}],[\"例如\",{\"1\":{\"5\":1}}],[\"上下拖动选项来调整图层顺序\",{\"1\":{\"5\":1}}],[\"鼠标点击想要调整的选项\",{\"1\":{\"5\":1}}],[\"打印文件内\",{\"1\":{\"5\":1}}],[\"您只能等比缩放元素的大小\",{\"1\":{\"6\":1}}],[\"您需要先设计生产图\",{\"1\":{\"6\":1}}],[\"您需要把整个都包含起来才算选中\",{\"1\":{\"5\":1}}],[\"您可以查看上述内容\",{\"1\":{\"6\":1}}],[\"您可以使用一些快捷键来提升操作效率\",{\"1\":{\"5\":1}}],[\"您可以使用右下角的\",{\"1\":{\"5\":1}}],[\"您可以通过鼠标左键范围选中画板上的元素\",{\"1\":{\"5\":1}}],[\"您可以撤回上一步在画板上的编辑操作\",{\"1\":{\"5\":1}}],[\"您可以在\",{\"1\":{\"5\":1}}],[\"您可以在打印图内查看选项值的实际效果\",{\"1\":{\"5\":1}}],[\"您可以选中矩形框进行拖动\",{\"1\":{\"5\":1}}],[\"您可以调整选项在生产图上的效果\",{\"1\":{\"5\":1}}],[\"您可以点击某个选项的矩形框或者在左侧选项列表中进行选中\",{\"1\":{\"5\":1}}],[\"您可以点击\",{\"1\":{\"5\":2,\"6\":2}}],[\"您可以继续等待或与在线客服取得联系\",{\"1\":{\"3\":1}}],[\"您可以直接用于产品的生产印刷\",{\"1\":{\"3\":1}}],[\"您可以按照需要自由设计出想要的效果\",{\"1\":{\"1\":1}}],[\"步骤回撤\",{\"1\":{\"5\":1}}],[\"值即可查看素材内不同照片的效果\",{\"1\":{\"5\":1}}],[\"那么打印文件中即可展示文字效果\",{\"1\":{\"5\":1}}],[\"那么切换不同的\",{\"1\":{\"5\":1}}],[\"那么只需将这个选项的矩形框移动到打印文件区域之外的灰色区域即可\",{\"1\":{\"5\":1}}],[\"如何设置定制服务\",{\"1\":{\"21\":1}}],[\"如未按时发货\",{\"1\":{\"21\":1}}],[\"如果您希望调整选项在产品页面的展示顺序\",{\"1\":{\"6\":1}}],[\"如果您不希望某个选项出现在打印文件上\",{\"1\":{\"5\":1}}],[\"如过这个图片选项引用了素材\",{\"1\":{\"5\":1}}],[\"即可在打印图内展示\",{\"1\":{\"5\":1}}],[\"或者鼠标滚轮进行缩放视角\",{\"1\":{\"5\":1}}],[\"视图按钮\",{\"1\":{\"5\":1}}],[\"旋转等操作\",{\"1\":{\"5\":1}}],[\"旋转等\",{\"1\":{\"5\":1}}],[\"旋转角度等\",{\"1\":{\"5\":1}}],[\"缩放\",{\"1\":{\"5\":2}}],[\"进行调整\",{\"1\":{\"6\":1}}],[\"进行批量的操作处理\",{\"1\":{\"5\":1}}],[\"进行批量选中这个分组下的所有选项\",{\"1\":{\"5\":1}}],[\"进行选项位置的调整\",{\"1\":{\"5\":1}}],[\"分组\",{\"1\":{\"5\":2}}],[\"点击不同定制项\",{\"1\":{\"5\":1}}],[\"点击旋转按钮进行旋转\",{\"1\":{\"5\":1}}],[\"点击矩形框的某个边进行拉长或缩短\",{\"1\":{\"5\":1}}],[\"点击矩形框的四个角进行等比例缩放\",{\"1\":{\"5\":1}}],[\"矩形框的位置代表了选项内容的印刷位置\",{\"1\":{\"5\":1}}],[\"四种选项\",{\"1\":{\"5\":1}}],[\"弯曲文字\",{\"1\":{\"5\":1}}],[\"文件上传\",{\"1\":{\"5\":1}}],[\"文字\",{\"1\":{\"5\":2}}],[\"文本等元素\",{\"1\":{\"3\":1}}],[\"形状\",{\"1\":{\"5\":1}}],[\"大小\",{\"1\":{\"5\":1}}],[\"包装\",{\"1\":{\"21\":1}}],[\"包含\",{\"1\":{\"5\":1}}],[\"包含了所有需要在打印物上呈现的图像\",{\"1\":{\"3\":1}}],[\"包括位置\",{\"1\":{\"5\":1}}],[\"调整元素的位置\",{\"1\":{\"5\":1}}],[\"16000\",{\"1\":{\"5\":2}}],[\"宽高请勿超过\",{\"1\":{\"5\":1}}],[\"参数\",{\"1\":{\"5\":1}}],[\"三种\",{\"1\":{\"5\":1}}],[\"inch\",{\"1\":{\"5\":1}}],[\"moq或图片\",{\"1\":{\"21\":2}}],[\"me\",{\"1\":{\"12\":1}}],[\"materials\",{\"1\":{\"11\":1}}],[\"mac版本\",{\"1\":{\"5\":3}}],[\"made\",{\"1\":{\"0\":1,\"11\":1}}],[\"mm\",{\"1\":{\"5\":1}}],[\"单位可选择\",{\"1\":{\"5\":1}}],[\"修改文件的宽与高\",{\"1\":{\"5\":1}}],[\"帮助您更好的展示产品\",{\"1\":{\"4\":1}}],[\"实时展示产品效果\",{\"1\":{\"4\":1}}],[\"请勿担心\",{\"1\":{\"3\":1}}],[\"备注\",{\"1\":{\"3\":1,\"5\":1}}],[\"生产是制作产品时\",{\"1\":{\"3\":1}}],[\"生产图尺寸\",{\"1\":{\"5\":1}}],[\"生产图会在提交订单后1小时内生成\",{\"1\":{\"3\":1}}],[\"生产图设计方法\",{\"0\":{\"5\":1},\"1\":{\"2\":1}}],[\"生产图是您在工厂用来生产印刷产品时使用的文件\",{\"1\":{\"1\":1}}],[\"什么是预览图\",{\"0\":{\"4\":1},\"1\":{\"2\":1}}],[\"什么是生产图\",{\"0\":{\"3\":1},\"1\":{\"2\":1}}],[\"目录\",{\"0\":{\"2\":1}}],[\"渔具创新工场\",{\"1\":{\"0\":1}}],[\"proton\",{\"1\":{\"12\":1}}],[\"processing\",{\"1\":{\"7\":1,\"11\":1}}],[\"preview\",{\"1\":{\"4\":1}}],[\"preview设计器会自动为您生成这个文件\",{\"1\":{\"3\":1}}],[\"present\",{\"1\":{\"0\":1}}],[\"ppi\",{\"1\":{\"5\":1}}],[\"px\",{\"1\":{\"5\":2}}],[\"pingagi\",{\"1\":{\"0\":1,\"12\":2}}],[\"2024\",{\"1\":{\"0\":1}}],[\"©\",{\"1\":{\"0\":1}}],[\"🐟\",{\"1\":{\"0\":1}}],[\"home\",{\"0\":{\"0\":1}}]],\"serializationVersion\":2}}")).map(([e,t])=>[e,zt(t,{fields:["h","t","c"],storeFields:["h","t","c"]})]));self.onmessage=({data:{type:e="all",query:t,locale:s,options:n,id:o}})=>{const u=bt[s];e==="suggest"?self.postMessage([e,o,tt(t,u,n)]):e==="search"?self.postMessage([e,o,Z(t,u,n)]):self.postMessage({suggestions:[e,o,tt(t,u,n)],results:[e,o,Z(t,u,n)]})};
//# sourceMappingURL=index.js.map
