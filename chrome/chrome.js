let myleads = []
const inputel = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulel = document.getElementById("ul-el")
const deletebtn = document.getElementById("delete-btn")

let myleadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"))
console.log(myleadsfromlocalstorage)

// Check if there are leads in localStorage and render them
if (myleadsfromlocalstorage) {
    myleads = myleadsfromlocalstorage
    renderlist()
}

// Event listener for the button click
inputbtn.addEventListener("click", function () {
    myleads.push(inputel.value)
    inputel.value = ""

    // Save the leads to localStorage
    localStorage.setItem("myleads", JSON.stringify(myleads))
    renderlist()
})

deletebtn.addEventListener("dblclick",function(){
    localStorage.clear()
     myleads = []
    renderlist()
})

// Function to render the list of leads
function renderlist() {
    let listitems = ""
    for (let i = 0; i < myleads.length; i++) {
        listitems += `<li>
            <a href='${myleads[i]}' target='_blank'>${myleads[i]}</a>
        </li>`
    }
    ulel.innerHTML = listitems
}

