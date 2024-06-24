
// selecting the popup and the button
const btn1 = document.getElementById("pop")

const overlay = document.getElementById("container_overlay")

const popup = document.getElementById("container_popup")

// select the book details screen and add to the page

const pop = document.getElementById("container")

const title = document.getElementById("book_title");

const author = document.getElementById("book_author");

const descrp = document.getElementById("book_description");

const btn2 = document.getElementById("add")

const btn3 = document.getElementById("del")

// popup button
btn1.addEventListener("click",function(){
    overlay.style.display = "block"
    popup.style.display = "block"
})


// add button in popup box
btn2.addEventListener("click",function(event){
    event.preventDefault();
    const list_item = document.createElement("div");
    list_item.setAttribute("id","container_pop");
    list_item.innerHTML = `<h1>${title.value}</h1>
    <h5>${author.value}</h5>
    <p>${descrp.value}</p>
    <button id="btn" onclick={delet(event)}>Delete</button>`
    pop.append(list_item)
    overlay.style.display = "none"
    popup.style.display = "none"
})

// delete button in popup box
btn3.addEventListener("click",function(event){
    event.preventDefault();
    overlay.style.display = "none"
    popup.style.display = "none"
})

// deletng the add item in the list
const delet = (event) =>{
    event.target.parentElement.remove();
}
