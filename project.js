// const loadallproduct = () => {
//     fetch('https://fakestoreapi.com/products')
//         .then(res => res.json())
//         .then((data) => {
//             displayProduuct(data);
//         })
// };

// const displayProduuct = (products) => {
//     const productcontain = document.getElementById("product-container");

//     products.forEach((product) => {
//         const div = document.createElement("div");
//         div.classList.add("card");

//         div.innerHTML = `
//             <img class="card-img" src="${product.image}" alt="${product.title}">
//             <h5>${product.title.slice(0, 50)}</h5>
//             <h3>Price: ${product.price}$</h3>
//             <p>${product.description.slice(0, 50)}</p>
//             <button onclick="singleproduct('${product.id}')">Details</button>
//             <button onclick="handleAddToCart('${product.title.slice(0, 10)}', ${product.price})" >Add to Cart</button>
//         `;

//         productcontain.appendChild(div);
//     });
// };


// const handleAddToCart= (name, price) =>{
//     const cartcount= document.getElementById("count").innerText;
//     let convertedcount = parseInt(cartcount);
//     convertedcount= convertedcount+ 1;
//     document.getElementById("count").innerText=convertedcount;

//     const container= document.getElementById("cart-main-container");
//     console.log(name, price);

//     const div= document.createElement("div");
//     div.classList.add("cart-info");
//     div.innerHTML = `
//     <p>${name}</p>
//     <h3 class="price">${price}$</h3>
//     `;
//     container.appendChild(div);
//     updatetotal();
// };

// const updatetotal=() =>{
//     const allprices=document.getElementsByClassName("price");
//     let count=0;
//     for (const element of allprices){
//         count= count+ parseFloat(element.innerText);
//     }
//     document.getElementById("total").innerText = count.toFixed(2);
// };

// const singleproduct = (id) => {
//     fetch(`https://fakestoreapi.com/products/${id}`)
//         .then(res => res.json())
//         .then(product => {
//         })
//         .catch(error => console.error('Error fetching product details:', error));
// };

// loadallproduct();

const loadallproduct = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then((data) => {
            displayProduuct(data);
        });
};

const displayProduuct = (products) => {
    const productcontain = document.getElementById("product-container");

    products.forEach((product) => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <h5>${product.title.slice(0, 50)}</h5>
            <h3>Price: ${product.price}$</h3>
            <p>${product.description.slice(0, 50)}</p>
            <button class="btn btn-primary  justify-content-center" onclick="showProductDetails('${product.id}')">Details</button>
            <button class="btn btn-success  justify-content-center" onclick="handleAddToCart('${product.title.slice(0, 10)}', ${product.price})">Add to Cart</button>
        `;

        productcontain.appendChild(div);
    });
};

const handleAddToCart = (name, price) => {
    const cartcount = document.getElementById("count").innerText;
    let convertedcount = parseInt(cartcount);
    convertedcount = convertedcount + 1;
    document.getElementById("count").innerText = convertedcount;

    const container = document.getElementById("cart-main-container");

    const div = document.createElement("div");
    div.classList.add("cart-info");
    div.innerHTML = `
    <p>${name}</p>
    <h3 class="price">${price}$</h3>
    `;
    container.appendChild(div);
    updatetotal();
    
};

const updatetotal = () => {
    const allprices = document.getElementsByClassName("price");
    let count = 0;
    for (const element of allprices) {
        count = count + parseFloat(element.innerText);
    }
    document.getElementById("total").innerText = count.toFixed(2);
};


const resetCount = () => {
    document.getElementById("count").innerText = "0";
    const container = document.getElementById("cart-main-container");
    container.innerHTML = "";
};


const showProductDetails = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(product => {
            const modalTitle = document.getElementById("productModalLabel");
            const modalBody = document.getElementById("productDetails");

            modalTitle.innerText = product.title;
            modalBody.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="img-fluid mb-3">
                <p>${product.description}</p>
                <p>Category: ${product.category}</p>
                <p>Price: ${product.price}$</p>
            `;

            $('#productModal').modal('show');
        });
};

loadallproduct();

const searchProducts = () => {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const productCards = document.querySelectorAll(".card");

    productCards.forEach(card => {
        const title = card.querySelector("h5").textContent.toLowerCase();

        if (title.includes(searchInput)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
};

// Add an event listener to the search input field
document.getElementById("searchInput").addEventListener("input", searchProducts);
