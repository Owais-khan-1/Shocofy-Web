function pushToWrapper() {
  let wrapper = document.querySelector("#pro-wrapper");
  wrapper.innerHTML = "";
  let cartItem = JSON.parse(localStorage.getItem("cart"));
  cartItem.forEach((item) => {
    console.log(item.name);
    console.log(item.price);

    let container = `<div class="product">
                            <h3>${item.name}</h3>
                            <h3>${item.price}</h3>
                            <i class="ri-close-line remove"></i>
                        </div>`;

    wrapper.innerHTML += container;
  });
}
pushToWrapper();

function removeItem(){
  let iTag = document.querySelectorAll(".remove");
  iTag.forEach((i)=>{
      i.addEventListener("click", ()=>{
        let productDiv = i.closest(".product")
        let name = productDiv.querySelector("h3:nth-child(1)").innerText
        console.log(name)

        let cart = JSON.parse(localStorage.getItem("cart"))
        let updatedCart = cart.filter(((item)=>{
          return name != item.name
        }))
        console.log(updatedCart)

        localStorage.setItem("cart", JSON.stringify(updatedCart));

        productDiv.remove();
        bill();
      })
  })
}
removeItem();

function bill(){
    let amount = document.querySelector("#order h4")
    let data = JSON.parse(localStorage.getItem("cart"))
    let total = 0
    data.forEach((d)=>{
      let price = d.price
      let finalPrice = Number(price.replace("Rs. ",""));
      console.log(finalPrice)
      total += finalPrice;
    })
    amount.innerText = `Rs. ${total}`
}
bill();

function placeOrder() {

  let btn = document.querySelector("#order button");
  
  btn.addEventListener("click", () => {
    let input = document.querySelectorAll("#form input");
    let toggle = false;
    input.forEach((inp) => {
      if (inp.value.trim() === "") {
        toggle = true
        inp.value = "";
      }
    });
    if(!toggle){
      localStorage.clear();
      alert("Order Placed")
      window.location.reload();
    }
    else{
      alert("Fill the form Correctly")
    }

  });
}
placeOrder();
