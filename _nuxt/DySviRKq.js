import{P as b,r as c,aD as w}from"./JACn959u.js";function S(l){const v=b(),r=c([]),o=c(null),m=c(null),p=()=>{o.value=l.value.querySelector("span.destination").dataset.destination,m.value=l.value.querySelector("span.formname").dataset.formname,l.value.querySelectorAll(".input-wrapper").forEach(t=>{const a=t.querySelector(".input");r.value.push({name:a.name,label:a.dataset.name,value:a.value})}),l.value.querySelectorAll(".selector.options").forEach(t=>{const a=t.querySelector(".label-text");r.value.push({name:a.dataset.name,label:a.dataset.label,value:a.dataset.selectedOption})}),d()},d=async()=>{let t,a,f,n;n=o.value?o.value:"sales@clearstreet.io";const s=[...w(r.value)],h={label:"Inquiry type",name:"00NNr000001qWb7",value:m.value};if(l.value!==null&&s.unshift(h),s.forEach(e=>{(e.name==="work-email"||e.name==="email")&&(t=e.value),(e.name==="first_name"||e.name==="first-name"||e.name==="full-name"||e.name==="name")&&(a=e.value),(e.name==="last_name"||e.name==="last-name"||e.name==="full-name"||e.name==="name")&&(f=e.value)}),!a||typeof a!="string")throw new Error("Please enter fill the fields");if(!t||typeof t!="string"||!t.includes("@")||!t.includes("."))throw new Error("Email badly formated");JSON.stringify({email:t,destinationEmail:n,firstName:a,items:s});let i="&oid=00D5Y000001NJBF&debug=1&debugEmail=ptank@clearstreet.io&retUrl=https://www.clearstreet.io&lead_source=ClearStreet Website&recordType=0125Y0000023vaT";s.forEach(e=>{const u=`&${e.name}=${e.value}`;i=i+u});const y={method:"POST",mode:"no-cors"};await fetch(`https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8${i}`,y).then(e=>e.text()).then(e=>console.log(e)).catch(e=>console.log("error",e)),await $fetch("/api/brevo",{body:{firstName:a,lastName:f,email:t,destinationEmail:n,items:s},method:"post"}).then(e=>{setTimeout(()=>{l.value.reset(),l.value.querySelectorAll(".input-wrapper .input").forEach(u=>u.classList.remove("filled")),r.value=[]},50),setTimeout(()=>{v.emit("hide-form")},250)})};return{formData:r,submitForm:d,validadeForm:p}}export{S as u};
