(()=>{const t=document.getElementById("name"),e=document.getElementById("email"),n=document.getElementById("password"),i=document.getElementById("confirmPassword");function o(t){const e=t.nextElementSibling;t.addEventListener("input",(n=>{e.textContent="",t.validity.tooShort?e.textContent=` The ${t.getAttribute("id")} is too short`:t.validity.valid||(e.textContent=`Please enter a valid ${t.getAttribute("id")}`)}))}document.getElementById("signup"),o(t),o(e),o(n),function(t,e){const n=e.nextElementSibling;e.addEventListener("input",(i=>{e.value!==t.value?n.textContent="Please enter matching passwords":n.textContent=""}))}(n,i)})();