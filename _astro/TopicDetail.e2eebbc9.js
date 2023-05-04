import{p as u,h as a,F as O,_ as R}from"./hooks.module.ee390651.js";import{C as z}from"./close.3a539829.js";import{S as T}from"./spinner.164b1eeb.js";import{a as F}from"./http.b4d93ef7.js";import{i as G}from"./jwt.2bcbdb7f.js";import{i as I,t as C,r as E}from"./resource-progress.55c34731.js";import{p as N,s as j}from"./page.d4f83d9f.js";import{o as e}from"./jsxRuntime.module.760e3403.js";import{_ as M}from"./preact.module.e54f245b.js";const P="/_astro/check.46a63738.svg",B="/_astro/reset.c24545cf.svg";function K(c,t){u(()=>{const s=r=>{r.key.toLowerCase()===c.toLowerCase()&&t()};return window.addEventListener("keydown",s),()=>{window.removeEventListener("keydown",s)}},[])}function J(c){u(()=>{function t(s){const{resourceType:r,resourceId:l,topicId:d}=s.detail;c({resourceType:r,resourceId:l,topicId:d})}return window.addEventListener("roadmap.topic.click",t),window.addEventListener("best-practice.topic.click",t),()=>{window.removeEventListener("roadmap.topic.click",t),window.removeEventListener("best-practice.topic.click",t)}},[])}function Q(c,t){u(()=>{const s=r=>{!c?.current?.contains(r.target)&&t()};return document.addEventListener("mousedown",s),document.addEventListener("touchstart",s),()=>{document.removeEventListener("mousedown",s),document.removeEventListener("touchstart",s)}},[c])}function V(c){u(()=>{function t(s){const{resourceType:r,resourceId:l,topicId:d}=s.detail;c({resourceType:r,resourceId:l,topicId:d})}return window.addEventListener("best-practice.topic.toggle",t),()=>{window.removeEventListener("best-practice.topic.toggle",t)}},[])}function ce(){const[c,t]=a(!1),[s,r]=a(!1),[l,d]=a(""),[S,D]=a(""),[x,k]=a(),[b,g]=a(!0),w=O(()=>!G(),[]),y=R(null),[m,_]=a(""),[h,q]=a(""),[f,H]=a("roadmap"),$=()=>{const o=document.querySelector("#login-popup");if(!o)return;o.classList.remove("hidden"),o.classList.add("flex");const n=o.querySelector("[autofocus]");n&&n.focus()},L=o=>{g(!0),C({topicId:m,resourceId:h,resourceType:f},o).then(()=>{k(o),t(!1),E(m,o)}).catch(n=>{alert(n.message),console.error(n)}).finally(()=>{g(!1)})};return u(()=>{!m||!h||!f||(g(!0),I({topicId:m,resourceId:h,resourceType:f}).then(o=>{g(!1),k(o)}).catch(console.error))},[m,h,f]),Q(y,()=>{t(!1)}),K("Escape",()=>{t(!1)}),V(({topicId:o,resourceType:n,resourceId:p})=>{if(w){$();return}N.set("Updating"),I({topicId:o,resourceId:p,resourceType:n}).then(i=>C({topicId:o,resourceId:p,resourceType:n},!i)).then(i=>E(o,i)).catch(i=>{alert(i.message),console.error(i)}).finally(()=>{N.set("")})}),J(({topicId:o,resourceType:n,resourceId:p})=>{r(!0),t(!0),j.set(!0),_(o),H(n),q(p);const i=o.replaceAll(":","/"),U=n==="roadmap"?`/${p}/${i}`:`/best-practices/${p}/${i}`;F(U,{},{headers:{Accept:"text/html"}}).then(({response:v})=>{if(!v){d("Topic not found.");return}const A=new DOMParser().parseFromString(v,"text/html")?.getElementById("main-content")?.outerHTML||"";r(!1),D(A)}).catch(v=>{d("Something went wrong. Please try again later."),r(!1)})}),c?e("div",{children:[e("div",{ref:y,className:"fixed right-0 top-0 z-40 h-screen w-full overflow-y-auto bg-white p-4 sm:max-w-[600px] sm:p-6",children:[s&&e("div",{className:"flex w-full justify-center",children:e("img",{src:T,alt:"Loading",className:"h-6 w-6 animate-spin fill-blue-600 text-gray-200 sm:h-12 sm:w-12"})}),!s&&!l&&e(M,{children:[e("div",{className:"mb-2",children:[w&&e("button",{"data-popup":"login-popup",className:"inline-flex items-center rounded-md bg-green-600 p-1 px-2 text-sm text-white hover:bg-green-700",onClick:()=>t(!1),children:[e("img",{alt:"Check",class:"w-3",src:P}),e("span",{className:"ml-2",children:"Mark as Done"})]}),!w&&e(M,{children:[b&&e("button",{className:"inline-flex cursor-default items-center rounded-md border border-gray-300 bg-white p-1 px-2 text-sm text-black",children:[e("img",{alt:"Check",class:"h-4 w-4 animate-spin",src:T}),e("span",{className:"ml-2",children:"Updating Status.."})]}),!b&&!x&&e("button",{className:"inline-flex items-center rounded-md border border-green-600 bg-green-600 p-1 px-2 text-sm text-white hover:bg-green-700",onClick:()=>L(!0),children:[e("img",{alt:"Check",class:"w-3",src:P}),e("span",{className:"ml-2",children:"Mark as Done"})]}),!b&&x&&e("button",{className:"inline-flex items-center rounded-md border border-red-600 bg-red-600 p-1 px-2 text-sm text-white hover:bg-red-700",onClick:()=>L(!1),children:[e("img",{alt:"Check",class:"h-4",src:B}),e("span",{className:"ml-2",children:"Mark as Pending"})]})]}),e("button",{type:"button",id:"close-topic",className:"absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900",onClick:()=>t(!1),children:e("img",{alt:"Close",class:"h-5 w-5",src:z})})]}),e("div",{id:"topic-content",className:"prose prose-quoteless prose-h1:mb-2.5 prose-h1:mt-7 prose-h2:mb-3 prose-h2:mt-0 prose-h3:mb-[5px] prose-h3:mt-[10px] prose-p:mb-2 prose-p:mt-0 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-gray-700 prose-li:m-0 prose-li:mb-0.5",dangerouslySetInnerHTML:{__html:S}})]})]}),e("div",{class:"fixed inset-0 z-30 bg-gray-900 bg-opacity-50 dark:bg-opacity-80"})]}):null}export{ce as TopicDetail};
