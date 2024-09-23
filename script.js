let divContainer = document.querySelector('.container')

fetch("dados.json").then((response) => {
    response.json().then((dados) => {
        dados.products.map((product) => {
            divContainer.innerHTML += 
            `
            <div class="card">
                <img src="${product.image}" class="product-img" alt="A ${product.name} photo.">
                <div class="card-body">
                    <h5 class="product-name">${product.name}</h5>
                    <p class="product-price">R$ ${product.price - product.discount}</p>
                    <p class="product-description">${product.description}</p>
                </div>
            </div>
            `
        })
    })
})