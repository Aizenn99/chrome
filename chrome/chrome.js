let myleads = []
const inputel = document.getElementById("input.el")
const inputbtn = document.getElementById("input-btn")
const ulel = document.getElementById("ul.el")
let inputid = document.getElementById("input-btn")

inputid.addEventListener("click",function(){
    myleads.push(inputel.value)
    inputel.value = ""
    renderlist()
})
function renderlist() {
let listitems = ""
for (i=0 ;i <myleads.length;i++){
    listitems +=` <li>
     <a href=' target=' _blank'> ${myleads[i]}</a> 
     </li> `
   
}
ulel.innerHTML = listitems
}