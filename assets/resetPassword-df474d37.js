import{_ as l,a as d,o as i,c as n,b as o,t as c,j as m,d as p,v as u}from"./index-fbe45917.js";const w={data(){return{email:"",error:""}},methods:{async resetPassword(){try{const e=await d.post("https://servicedeskinz2023.azurewebsites.net/api/account/resetPasswordGetEmail",{email:this.email}).then(localStorage.setItem("emailReset",this.email),setTimeout(()=>{window.location.href="/set-new-password"},1e3))}catch(e){console.log(e),this.error=e.response.data}}}},h={key:0};function f(e,s,_,v,t,a){return i(),n("div",null,[o("div",null,[t.error?(i(),n("p",h,c(t.error),1)):m("",!0),p(o("input",{type:"text",id:"email","onUpdate:modelValue":s[0]||(s[0]=r=>t.email=r),required:""},null,512),[[u,t.email]]),o("button",{onClick:s[1]||(s[1]=(...r)=>a.resetPassword&&a.resetPassword(...r))},"Resetuj hasło")])])}const k=l(w,[["render",f]]);export{k as default};
