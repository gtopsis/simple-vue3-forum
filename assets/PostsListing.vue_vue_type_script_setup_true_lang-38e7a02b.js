import{x as N,r as T,y as E,c as f,z as y,d as P,s as F,u as U,a as o,o as _,b as m,w as e,e as t,f as l,t as v,i as I,g as b,j as k,h as x,q as j,A as z,B as M,v as R,_ as q,l as H,F as O}from"./index-ca8dec90.js";const et=N("Posts",()=>{const a=T(E.posts),r=n=>{const s={...n,edited:{at:1,by:"string",moderated:!1},publishedAt:Math.floor(Date.now()/1e3),id:"string",reactions:void 0};a.value.push(s)},d=f(()=>y(a.value,"userId")),p=f(()=>y(a.value,"threadId"));return{posts:a,addPost:r,getPostsByUserId:d,getPostsByThreadId:p}}),$=a=>(z("data-v-2db9f1f7"),a=a(),M(),a),G={class:"text-black"},J={class:"mb-0"},K={class:"text-grey-darken-2"},Q={key:0},W=$(()=>l("div",{class:"justify-self-end"},null,-1)),X=P({__name:"PostItem",props:{post:{}},setup(a){const r=a,d=j(()=>R(()=>import("./BaseDateAgo-e2e476a2.js"),["assets/BaseDateAgo-e2e476a2.js","assets/BaseDateAgo.vue_vue_type_script_setup_true_lang-a542b779.js","assets/index-ca8dec90.js","assets/index-90e09854.css"])),{getUserById:p}=F(U()),n=f(()=>{var s;return p.value((s=r.post)==null?void 0:s.userId)});return(s,Z)=>{const B=o("v-card-text"),w=o("v-avatar"),u=o("v-col"),S=o("v-icon"),g=o("v-row"),A=o("v-list-item-title"),C=o("v-list-item-subtitle"),D=o("v-list-item"),V=o("v-card-actions"),L=o("v-card");return _(),m(L,{class:"post mx-auto mb-2",loading:""},{default:e(()=>[t(B,{class:"post-text py-2"},{default:e(()=>[l("span",G,v(s.post.text),1)]),_:1}),t(V,null,{default:e(()=>[t(D,{class:"w-100 pa-0"},{prepend:e(()=>[t(g,{align:"center","no-gutters":""},{default:e(()=>[t(u,{cols:"auto",class:"mr-2"},{default:e(()=>{var c;return[t(w,{color:"grey-darken-3",image:(c=n.value)==null?void 0:c.avatar,size:"30"},null,8,["image"])]}),_:1}),t(u,{cols:"auto"},{default:e(()=>{var c,i,h;return[l("p",J,[l("small",null,v((c=n.value)==null?void 0:c.name),1),(i=n.value)!=null&&i.isModerator?(_(),m(S,{key:0,icon:"mdi-eye-check-outline"})):I("",!0)]),l("p",null,[l("small",K,v((h=n.value)==null?void 0:h.username),1)])]}),_:1})]),_:1})]),append:e(()=>[t(g,{"no-gutters":""},{default:e(()=>[t(u,{class:"pa-0",cols:"12"},{default:e(()=>[l("small",null,[b("Created "),t(k(d),{timestamp:s.post.publishedAt},null,8,["timestamp"])])]),_:1}),t(u,{class:"pa-0",cols:"12"},{default:e(()=>{var c,i;return[(c=s.post.edited)!=null&&c.at?(_(),x("small",Q,[b("Last edited "),t(k(d),{timestamp:(i=s.post.edited)==null?void 0:i.at},null,8,["timestamp"])])):I("",!0)]}),_:1})]),_:1}),W]),default:e(()=>[t(A,{class:"text-black"}),t(C,{class:""})]),_:1})]),_:1})]),_:1})}}});const Y=q(X,[["__scopeId","data-v-2db9f1f7"]]),st=P({__name:"PostsListing",props:{posts:{}},setup(a){return(r,d)=>{const p=o("v-row"),n=o("v-container");return _(),m(n,{fluid:""},{default:e(()=>[t(p,{class:"posts"},{default:e(()=>[(_(!0),x(O,null,H(r.posts,s=>(_(),m(Y,{key:s.id,post:s},null,8,["post"]))),128))]),_:1})]),_:1})}}});export{st as _,et as u};
