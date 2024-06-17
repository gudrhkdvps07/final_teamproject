function updatePrice_sizer() {
  const numberSelect = document.getElementById('number')
  const totalPriceElement = document.getElementById('total-price')
  const number = parseInt(numberSelect.value, 10)

  const pricePerUnit = 1900
  let totalPrice

  if (number >= 20) {
    totalPrice = pricePerUnit * number * 0.97
  } else if (number >= 15) {
    totalPrice = pricePerUnit * number * 0.97
  } else if (number >= 10) {
    totalPrice = pricePerUnit * number * 0.97
  } else if (number >= 5) {
    totalPrice = pricePerUnit * number * 0.97
  } else {
    totalPrice = pricePerUnit * number
  }

  totalPriceElement.textContent = `${totalPrice
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`
}

function addToCart() {
  const number = document.getElementById('number').value
  const flavor = document.getElementById('flavor').value
  const imageUrl = document.getElementById('product-image').src
  const url = `cart.html?number=${number}&flavor=${flavor}&image=${encodeURIComponent(
    imageUrl
  )}`
  window.location.href = url
}

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search)
  const number = parseInt(params.get('number'), 10)
  const flavor = params.get('flavor')
  const imageUrl = decodeURIComponent(params.get('image'))

  const pricePerUnit = 1900
  let totalPrice

  if (number >= 5) {
    totalPrice = pricePerUnit * number * 0.97
  } else {
    totalPrice = pricePerUnit * number
  }

  const totalPriceFormatted = `${totalPrice
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`

  const flavorText = flavor === 'none' ? '선택 안함' : flavor

  document.getElementById('cart-image').src = imageUrl
  document.getElementById('cart-details').innerHTML = `
        <strong>갯수:</strong> ${number}개<br>
        <strong>맛:</strong> ${flavorText}<br>
        <strong>총 금액:</strong> ${totalPriceFormatted}
    `
})
