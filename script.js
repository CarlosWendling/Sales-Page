function load() {
    fetch("dados.json").then((response) => {
        response.json().then((dados) => {
            dados.products.map((product) => {
                const container = document.querySelector('.container')
                
                const card = document.createElement('div')
                card.classList.add('card')

                const img = document.createElement('img')
                img.src = product.image
                img.alt = `A ${product.name} photo.`

                const cardBody = document.createElement('div')
                card.classList.add('card-body')

                const title = document.createElement('h5')
                title.textContent = product.name

                const price = document.createElement('p')
                price.classList.add('product-price')
                price.textContent = product.price - product.discount
                    
                const description = document.createElement('p')
                description.textContent = product.description
                
                const btnSec = document.createElement('section')
                btnSec.innerHTML =
                `
                    <input type="button" class="btn" value="Adicionar ao carrinho">
                `

                cardBody.appendChild(title)
                cardBody.appendChild(price)
                cardBody.appendChild(description)
                cardBody.appendChild(btnSec)
                

                card.appendChild(img)
                card.appendChild(cardBody)

                container.appendChild(card)
            })
        })
    })
}

load()

const filterElement = document.querySelector('#search-bar')

const cards = document.querySelectorAll('.card')

filterElement.addEventListener('input', filterCards)

function filterCards() {
    if (filterElement.value != '') {
        for (let card of cards) {
            let title = card.document.querySelector('h5')
            title = title.textContent.toLowerCase()
            let filterText = filterElement.value.toLowerCase()
            
            if (!title.includes(filterText)) {
                card.style.visibility = 'none'
            }
            else {
                card.style.visibility = 'visible'
            }
        }
    } else {
        card.style.visibility = 'visible'
    }
}