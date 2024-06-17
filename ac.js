function changeContent(id) {
  var contents = document.querySelectorAll('.tab-content')
  contents.forEach(function (content) {
    if (content.id === id) {
      content.classList.add('active')
    } else {
      content.classList.remove('active')
    }
  })
}

function toggleAccordion(element) {
  var content = element.nextElementSibling
  if (content.classList.contains('active')) {
    content.classList.remove('active')
  } else {
    var accordions = document.querySelectorAll('.accordion-content')
    accordions.forEach(function (acc) {
      acc.classList.remove('active')
    })
    content.classList.add('active')
  }
}
