import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as m}from"./assets/vendor-a71e76b7.js";const n=document.querySelector(".form");n.addEventListener("submit",c);function a(r,e){const s=Math.random()>.3;new Promise((t,o)=>{setTimeout(()=>{s?t(`✅ Fulfilled promise ${r} in ${e}ms`):o(`❌ Rejected promise ${r} in ${e}ms`)},e)}).then(t=>{m.show({title:"Warning",message:t,color:"green"})}).catch(t=>{m.show({title:"Error",message:t,color:"red",position:"topRight"})})}function c(r){r.preventDefault();const e=new FormData(n);let s=Number(e.get("delay"));const i=Number(e.get("step")),t=e.get("amount");for(let o=1;o<=t;o+=1)a(o,s),s+=i}
//# sourceMappingURL=commonHelpers3.js.map
