document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('#next .item')
  let currentIndex = 0
  const interval = 3000

  function showItem(index) {
    items.forEach((item, i) => {
      item.style.display = i === index ? 'block' : 'none'
    })
  }

  function cycleItems() {
    currentIndex = (currentIndex + 1) % items.length
    showItem(currentIndex)
  }
  showItem(currentIndex)
  setInterval(cycleItems, interval)
})
