let product = document.getElementById ("product");
let btn = document.getElementById ("btn");

let page = 1;
let limit = 4;

btn.addEventListener ("click", getData)

async function getData () {
    

    axios.get (`https://65680f2a9927836bd97406ef.mockapi.io/food/products?page=${page}&limit=${limit}`)
    .then ((res) => {
        db = res.data;
        db.forEach((item) =>{
            let div = document.createElement('div')
            div.className = "box"
            div.innerHTML = `
            
            <img src= "${item.image}" alt = "image" >
            <p>${item.name}</p>
            <p>${item.price}</p>
            <button onclick= "addToCart(${item.id})"> add to cart</button>
            
            `
            product.appendChild(div)
        })
    })
}
getData()


function addToCart (index) {
    let cart =JSON.parse (localStorage.getItem("cart")) || [];
    cart.push(db.find((item) => item.id == index));
    localStorage.setItem("cart", JSON.stringify(cart))
    console.log (cart)
}

const name = document.getElementById ('name');
const surname = document.getElementById ('surname');
const submit = document.getElementById ('myform');

submit.addEventListener('submit', function (event) {
  event.preventDefault();

  fetch('https://65680f2a9927836bd97406ef.mockapi.io/food/products', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
   name:name.value,
   surname:surname.value,
   myform: myform.value,
      }),
  })
  .then((response) => response.json()) 
  .then(data =>{
      console.log( data );
  })
})




function updateData(id) {

  console.log(id);
}

function deleteData(id) {
  fetch(`https://65680f2a9927836bd97406ef.mockapi.io/food/products`, {
      method: 'DELETE',
  })
      .then(response => response.json())
      .then(data => {
          console.log( data);
          getAllData(); 
      })
      .catch(error => console.error('Error deleting data:', error));
    }

