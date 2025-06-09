
const shirtsData = [
    {
      id: 1,
      name: "Classic White Shirt",
      img: "./assets/shirts/shirt1.jpg",
      description: "Soft cotton fabric perfect for any season.",
      price: 1299
    },
    {
      id: 2,
      name: "Denim Button-Up",
      img: "./assets/shirts/shirt2.jpg",
      description: "Stylish denim shirt for a rugged look.",
      price: 1699
    },
    {
      id: 3,
      name: "Black Slim Fit",
      img: "./assets/shirts/shirt3.png",
      description: "Elegant black shirt with a slim fit design.",
      price: 1499
    },
    {
      id: 4,
      name: "Flannel Checkered Shirt",
      img: "./assets/shirts/shirt15.png",
      description: "Warm and cozy flannel perfect for winter.",
      price: 1799
    },
    {
      id: 5,
      name: "Sky Blue Formal Shirt",
      img: "./assets/shirts/shirt5.jpg",
      description: "Light blue formal shirt ideal for office wear.",
      price: 1399
    },
    {
      id: 6,
      name: "Linen Summer Shirt",
      img: "./assets/shirts/shirt6.jpg",
      description: "Breezy linen fabric for hot weather.",
      price: 1599
    },
    {
      id: 7,
      name: "Olive Green Military Shirt",
      img: "./assets/shirts/shirt7.png",
      description: "Military-inspired design with front pockets.",
      price: 1899
    },
    {
      id: 8,
      name: "Graphic Tee - Tokyo Nights",
      img: "./assets/shirts/shirt8.jpg",
      description: "Trendy graphic tee with urban artwork.",
      price: 1099
    },
    {
      id: 9,
      name: "Navy Blue Polo Shirt",
      img: "./assets/shirts/shirt9.png",
      description: "Classic polo shirt for casual outings.",
      price: 1299
    },
    {
      id: 10,
      name: "Striped Cotton Shirt",
      img: "./assets/shirts/shirt10.jpg",
      description: "Vertical stripes for a slimming effect.",
      price: 1499
    },
    {
      id: 11,
      name: "Pastel Pink Casual Shirt",
      img: "./assets/shirts/shirt11.jpg",
      description: "Soft pastel tone for a relaxed vibe.",
      price: 1349
    },
    {
      id: 12,
      name: "Khaki Outdoor Shirt",
      img: "./assets/shirts/shirt12.png",
      description: "Durable outdoor shirt with roll-up sleeves.",
      price: 1699
    },
    {
      id: 13,
      name: "Minimalist White Tee",
      img: "./assets/shirts/shirt13.png",
      description: "Plain white T-shirt with a clean finish.",
      price: 999
    },
    {
      id: 14,
      name: "Bold Red Casual Shirt",
      img: "./assets/shirts/shirt14.png",
      description: "Make a statement with this vibrant red shirt.",
      price: 1449
    },
    {
      id: 15,
      name: "Beige Mandarin Collar",
      img: "./assets/shirts/shirt15.png",
      description: "Modern design with a mandarin collar.",
      price: 1599
    },
    {
      id: 16,
      name: "Charcoal Grey Dress Shirt",
      img: "./assets/shirts/shirt16.jpg",
      description: "Sharp charcoal shirt for business settings.",
      price: 1749
    },
    {
      id: 17,
      name: "Printed Vacation Shirt",
      img: "./assets/shirts/shirt17.jpg",
      description: "Colorful prints made for vacation vibes.",
      price: 1399
    },
    {
      id: 18,
      name: "Plaid Work Shirt",
      img: "./assets/shirts/shirt18.jpg",
      description: "Classic plaid pattern ideal for daily use.",
      price: 1599
    },
    {
      id: 19,
      name: "Sage Green Relaxed Fit",
      img: "./assets/shirts/shirt19.jpg",
      description: "Relaxed fit shirt in a soft sage hue.",
      price: 1499
    },
    {
      id: 20,
      name: "Maroon Casual Shirt",
      img: "./assets/shirts/shirt20.jpg",
      description: "Elegant maroon color with a smooth finish.",
      price: 1499
    }
  ];

  
  
  const shoesData = [
    {
      id: 1,
      name: "Classic White Sneakers",
      img: "./assets/shoes/shoe1.jpg",
      description: "Timeless white sneakers perfect for any outfit.",
      price: 2499
    },
    {
      id: 2,
      name: "Black Running Shoes",
      img: "./assets/shoes/shoe2.png",
      description: "Lightweight running shoes with superior grip.",
      price: 2999
    },
    {
      id: 3,
      name: "Brown Leather Loafers",
      img: "./assets/shoes/shoe3.png",
      description: "Elegant loafers made from genuine leather.",
      price: 3299
    },
    {
      id: 4,
      name: "Canvas Slip-Ons",
      img: "./assets/shoes/shoe4.png",
      description: "Breathable canvas shoes for everyday use.",
      price: 1899
    },
    {
      id: 5,
      name: "Chunky Sports Trainers",
      img: "./assets/shoes/shoe5.jpg",
      description: "Bold trainers with thick sole design.",
      price: 3499
    },
    {
      id: 6,
      name: "Beige Desert Boots",
      img: "./assets/shoes/shoe6.jpg",
      description: "Sturdy desert boots perfect for outdoor wear.",
      price: 2799
    },
    {
      id: 7,
      name: "Formal Oxford Shoes",
      img: "./assets/shoes/shoe7.jpg",
      description: "Classic oxfords crafted for office elegance.",
      price: 3999
    },
    {
      id: 8,
      name: "High-Top Skate Shoes",
      img: "./assets/shoes/shoe8.png",
      description: "Supportive high-tops for skaters and streetwear lovers.",
      price: 2699
    },
    {
      id: 9,
      name: "Minimalist Grey Trainers",
      img: "./assets/shoes/shoe9.png",
      description: "Simple and modern design in soft grey.",
      price: 2599
    },
    {
      id: 10,
      name: "Slip-On Formal Moccasins",
      img: "./assets/shoes/shoe1.jpg",
      description: "No-lace moccasins for smart occasions.",
      price: 2899
    },
    {
      id: 11,
      name: "Retro Blue Runners",
      img: "./assets/shoes/shoe11.png",
      description: "Retro-inspired shoes with suede and mesh.",
      price: 3099
    },
    {
      id: 12,
      name: "Hiking Trail Boots",
      img: "./assets/shoes/shoe12.jpg",
      description: "Rugged boots for trails and rough terrain.",
      price: 4499
    },
    {
      id: 13,
      name: "All-Black Sneakers",
      img: "./assets/shoes/shoe13.jpg",
      description: "Fully black sneakers with a sleek vibe.",
      price: 2399
    },
    {
      id: 14,
      name: "Red Sports Shoes",
      img: "./assets/shoes/shoe14.png",
      description: "Bright red trainers built for action.",
      price: 2799
    },
    {
      id: 15,
      name: "Tan Suede Loafers",
      img: "./assets/shoes/shoe15.png",
      description: "Soft suede material with a stylish design.",
      price: 2999
    },
    {
      id: 16,
      name: "Navy Blue Boat Shoes",
      img: "./assets/shoes/shoe16.jpg",
      description: "Casual boat shoes for summer style.",
      price: 2699
    },
    {
      id: 17,
      name: "White Court Shoes",
      img: "./assets/shoes/shoe17.png",
      description: "Clean court shoes suitable for sports and style.",
      price: 2499
    },
    {
      id: 18,
      name: "Combat Lace-Up Boots",
      img: "./assets/shoes/shoe18.png",
      description: "Strong lace-up boots for rugged terrain.",
      price: 3899
    },
    {
      id: 19,
      name: "Lightweight Gym Trainers",
      img: "./assets/shoes/shoe19.webp",
      description: "Built for gym workouts and active days.",
      price: 2299
    },
    {
      id: 20,
      name: "Casual Espadrille Shoes",
      img: "./assets/shoes/shoe20.jpg",
      description: "Stylish espadrilles with breathable upper.",
      price: 1999
    }
  ];
  

  const bagsData = [
    {
      id: 1,
      name: "Classic Leather Backpack",
      img: "./assets/bags/bag1.jpg",
      description: "Premium leather backpack for work or travel.",
      price: 3499
    },
    {
      id: 2,
      name: "Casual Canvas Tote Bag",
      img: "./assets/bags/bag2.jpg",
      description: "Lightweight tote with roomy interior.",
      price: 1799
    },
    {
      id: 3,
      name: "Elegant Handbag",
      img: "./assets/bags/bag3.png",
      description: "Stylish handbag with gold accents.",
      price: 2699
    },
    {
      id: 4,
      name: "Nylon Travel Duffel",
      img: "./assets/bags/bag4.jpg",
      description: "Durable water-resistant duffel bag.",
      price: 2999
    },
    {
      id: 5,
      name: "Mini Crossbody Purse",
      img: "./assets/bags/bag5.jpg",
      description: "Compact purse with adjustable strap.",
      price: 1499
    },
    {
      id: 6,
      name: "Laptop Messenger Bag",
      img: "./assets/bags/bag6.jpg",
      description: "Padded messenger for laptops and gadgets.",
      price: 3199
    },
    {
      id: 7,
      name: "Vintage Leather Sling",
      img: "./assets/bags/bag7.png",
      description: "Rustic brown leather sling bag.",
      price: 2399
    },
    {
      id: 8,
      name: "Sporty Gym Bag",
      img: "./assets/bags/bag8.jpg",
      description: "Spacious gym bag with side pockets.",
      price: 1899
    },
    {
      id: 9,
      name: "Quilted Shoulder Bag",
      img: "./assets/bags/bag9.jpeg",
      description: "Chic quilted bag with chain strap.",
      price: 2899
    },
    {
      id: 10,
      name: "Waterproof Hiking Backpack",
      img: "./assets/bags/bag10.png",
      description: "Strong outdoor bag with hydration pocket.",
      price: 3599
    },
    {
      id: 11,
      name: "Eco-Friendly Jute Bag",
      img: "./assets/bags/bag11.png",
      description: "Natural jute bag for shopping use.",
      price: 999
    },
    {
      id: 12,
      name: "Compact Belt Bag",
      img: "./assets/bags/bag12.png",
      description: "Trendy waist bag for hands-free use.",
      price: 1299
    },
    {
      id: 13,
      name: "Formal Briefcase",
      img: "./assets/bags/bag13.png",
      description: "Structured briefcase for office needs.",
      price: 3999
    },
    {
      id: 14,
      name: "Trendy Bucket Bag",
      img: "./assets/bags/bag14.png",
      description: "Unique bucket shape with drawstring.",
      price: 2099
    },
    {
      id: 15,
      name: "Transparent PVC Bag",
      img: "./assets/bags/bag15.png",
      description: "Modern see-through design bag.",
      price: 1599
    },
    {
      id: 16,
      name: "Nylon Foldable Travel Bag",
      img: "./assets/bags/bag16.png",
      description: "Foldable travel bag for easy packing.",
      price: 1899
    },
    {
      id: 17,
      name: "Studded Evening Clutch",
      img: "./assets/bags/bag17.png",
      description: "Bold clutch with metal studs.",
      price: 1399
    },
    {
      id: 18,
      name: "Messenger Crossbody Bag",
      img: "./assets/bags/bag18.jpg",
      description: "Functional crossbody with multiple zips.",
      price: 1699
    },
    {
      id: 19,
      name: "Roll-Top Laptop Backpack",
      img: "./assets/bags/bag19.jpg",
      description: "Sleek roll-top backpack for tech gear.",
      price: 2899
    },
    {
      id: 20,
      name: "Luxury Designer Handbag",
      img: "./assets/bags/bag20.png",
      description: "Premium handbag with elegant finish.",
      price: 4999
    }
  ];
  
  

function shirts(){
    let allProductDiv = document.querySelector("#all-products");
    shirtsData.forEach((e) =>{
      let collection  = `
      <div class="product" id="${e.id}">
      <div class="img-div">
          <img src="${e.img}">
      </div>
      <h4>${e.name}</h4>
      <p>${e.description}</p>
      <div class="buy-div">
          <button class="buy-button">Buy </button>
          <h4>Rs. ${e.price}</h4>
      </div>
      </div>`;
      allProductDiv.innerHTML += collection;
    })
  }
  shirts();
// Page number Logic
function pageNumber(){
  let page = document.querySelectorAll(".numbers");
  page.forEach((p) =>{

    p.addEventListener("click",function (target) {
      
      page.forEach((del)=>{
        del.removeAttribute("id");
      })
      target.currentTarget.id = "active";
      let value = target.currentTarget.textContent;

      // --------------Data starts
      let heading = document.querySelector("#heading");
      let allProductDiv = document.querySelector("#all-products");
      if(value == 1){
        heading.innerText = "";
        heading.innerText = "Shirts";

        allProductDiv.innerHTML = "";
        renderAllProducts(shirtsData);
      }
      else if(value == 2){
        heading.innerText = "";
        heading.innerText = "Shoes";

        allProductDiv.innerHTML = "";
        renderAllProducts(shoesData);
      }
      else{
        heading.innerText = "";
        heading.innerText = "Bags";

        allProductDiv.innerHTML = "";
        renderAllProducts(bagsData);
      }

    })

  })
}
pageNumber();


// yaha nichy sra wo code likha hy jo suggest bar mn filter kryga items ko or products div ky andar bhi

function renderAllProducts(data) {
  let allProductDiv = document.querySelector("#all-products");
  allProductDiv.innerHTML = ""; 
  let productsHTML = "";

  data.forEach((item) => {
    productsHTML += `
      <div class="product" id="${item.id}">
        <div class="img-div">
            <img src="${item.img}">
        </div>
        <h4>${item.name}</h4>
        <p>${item.description}</p>
        <div class="buy-div">
            <button class="buy-button">Buy</button>
            <h4>Rs. ${item.price}</h4>
        </div>
      </div>`;
  });

  allProductDiv.innerHTML = productsHTML;
  buyBotton(); 
}

function itemsFilter(){
  let input = document.querySelectorAll(".search-input");
  let suggest = document.querySelectorAll(".suggest");
  let activeData; //ye variable pass ho rha hy agay function ky throw 
  input.forEach((inputFocus) =>{
      inputFocus.addEventListener("focus", ()=>{
      // yhaa list ko block kia ja rha jo ky suggestion ayengy input mn 
      suggest.forEach((list) =>{
        list.style.display = "block";
      })


      // yaha sra baki input sy related code hy
      inputFocus.addEventListener("input",(val)=>{
      let inputVal = val.currentTarget.value;
        if (inputVal == ""){
          suggest.forEach((s)=>{
            s.innerHTML = "";
          })
          // upper wlaa function yaha call ho rha hy 
           renderAllProducts(activeData);
        }
        else{
        
          // yaha sy active element filter hoga 
        let pageNumber = document.querySelectorAll(".numbers");

        pageNumber.forEach((pgNum) => {


          if(pgNum.id == "active"){
            
            function InputFilter(data){
              suggest.forEach((s) => {
                 s.innerHTML = "";
               }); 
                // input val upper jo input banaya hy oski value ly kr araha hy 
                let filterData = data.filter(function (ele){
                  return  ele.name.toLowerCase().startsWith(inputVal.toLowerCase());
                })
                // ye if wla code check kr rha hy agar suggest bar khali hy to all product div ky sray data ko show kro
                 if (filterData.length === 0) {
                  // activeData ka data nichy sy switch case arhaa hy ye wo data ly rha hy switch case sy jis page par hain wo data show krayega ye
                  renderAllProducts(activeData); 
                  return; 
                  }
                filterData.forEach((fil) =>{
                  let contain = `
                    <div class="suggest-bars">
                    <i class="ri-arrow-right-line"></i>
                    <h4>${fil.name}</h4>
                    </div>`;

                    suggest.forEach((sug)=>{
                      sug.innerHTML += contain;
                    })
                  })
                  // yaha tk ka sra suggestion bar tk ak code hy 
                  
                  renderAllProducts(filterData);
            }

      
            let pageNumText = pgNum.innerText;

            
              switch (pageNumText){
                case "1":
                  activeData = shirtsData;
                  break;
                case "2":
                  activeData = shoesData;
                  break;
                default:
                  activeData = bagsData;
              }

              InputFilter(activeData);
          }
        })
        }
    })
    })



    inputFocus.addEventListener("blur", ()=>{
      suggest.forEach((list) =>{
        list.style.display = "none";
      })
    })
  })

 
}
itemsFilter();

function buyBotton(){
  let buyButton = document.querySelectorAll(".buy-button");
  
  buyButton.forEach((button) => {
  button.addEventListener("click", (b) => {
    alert("Item add to cart")
    b.currentTarget.disabled = true;

    let proName = b.currentTarget.closest(".product").querySelector("h4");
    let price = b.currentTarget.closest(".product").querySelector(".buy-div h4");
    // console.log(proName.innerText);
    // console.log(price.innerText);

    let box = {
      name: proName.innerText,
      price: price.innerText,
    };
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(box);
    localStorage.setItem("cart", JSON.stringify(cart))
  });
});

}
buyBotton();


