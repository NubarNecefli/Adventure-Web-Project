let product = document.getElementById ("product")


function getData () {

    product.innerHTML=""
    let data = JSON.parse (localStorage.getItem("cart")) || [];
    data.forEach((item,index) =>{

        let div= document.createElement ('div')
        div.className="box"
        div.innerHTML= `
        
        <img src= "${item.image}" alt = "image" >
                <p>${item.name}</p>
                <p>${item.price}</p>
                <button onclick= "removeToCart(${index})"> add to cart</button>
    
        `
        product.appendChild(div)
   
    })
}
getData()




// removeToCart
function removeToCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cart));
    getData()
}



// display
function display(data) {
    product.innerHTML = ""
    data.forEach((item, index) => {
        let div = document.createElement('div');
        div.className = "box";
        div.innerHTML = `
    <img src="${item.image}" alt="">
    <p>${item.title}</p>
    <h3>${item.price}$</h3>
    <button onclick="removeToCart(${index})"> Add To cart</button>
    `
        product.appendChild(div)
    })
}




// Sort
let max = document.getElementById("max");
let min = document.getElementById("min");


max.addEventListener("click", maxFunc)
min.addEventListener("click", minFunc)


function maxFunc() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let data = cart.sort((a, b) => (b.price - a.price));
    display(data)
}
function minFunc() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let data = cart.sort((a, b) => (a.price - b.price));
    display(data)
}




// search
let form = document.getElementById("form");
form.addEventListener("submit", formFunc)

function formFunc(e){
    e.preventDefault()
    let inp = document.getElementById("inp");
    let val = inp.value;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let data = cart.filter((item) => item.title.toLowerCase().includes(val.toLowerCase()))
    display(data)
}

































































