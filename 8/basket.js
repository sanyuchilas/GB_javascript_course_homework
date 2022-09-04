const productsMock = [
  { id: 1, name: 'Example 1', price: 1.12, count: 0 },
  { id: 2, name: 'Example 2', price: 52.12, count: 0 },
  { id: 3, name: 'Example 3', price: 32, count: 0 },
]
const productIds = new Set()

const basket = document.querySelector('.basket')
const basketTotalValue = document.querySelector('.basketTotalValue')
const basketProductsList = document.querySelector('.basketProductsList')
const cartIconWrap = document.querySelector('.cartIconWrap')
const createProductMarkup = ({id, name, count, price}) => 
  `
    <div class="basketProduct row">
      <div>${name}</div>
      <div>${count} шт.</div>
      <div>$${price.toFixed(2)}</div>
      <div>$${(count * price).toFixed(2)}</div>
    </div>
  `

export default function addToCart(productId) {
  if (!productId) return
  
  let totalPrice = 0
  
  basketProductsList.innerHTML = ''

  productIds.add(productId)

  cartIconWrap.querySelector('span').textContent++

  productIds.forEach(id => {
    const product = productsMock[id - 1]

    if (id === productId) {
      product.count++
    }

    basketProductsList
      .insertAdjacentHTML('beforeend', createProductMarkup(product))
   
    totalPrice += product.count * product.price
  })

  basketTotalValue.textContent = 
    'Товаров в корзине на сумму: $' + totalPrice.toFixed(2)
}

cartIconWrap.addEventListener('click', event => basket.classList.toggle('hidden'))