function changeContent(evt, contentName) {
  var i, tabcontent, tablinks
  tabcontent = document.getElementsByClassName('tab-content')
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none'
  }
  tablinks = document.getElementsByClassName('tab-link')
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '')
  }
  document.getElementById(contentName).style.display = 'block'
  evt.currentTarget.className += ' active'
}

// Quiz
const quizData = [
  {
    question: '1. 개의 시야는 몇 도까지 볼 수 있나요?',
    options: ['180도', '220도', '290도'],
    answer: '290도',
  },
  {
    question: '2. 높은 소리는 개에게 어떤 영향을 미치나요?',
    options: ['행동을 억제한다', '흥분시키고 움직임을 부추긴다', '무반응이다'],
    answer: '흥분시키고 움직임을 부추긴다',
  },
  {
    question:
      '3. 개의 몸에는 땀샘이 거의 없습니다. 개는 어떻게 체온 조절을 하나요?',
    options: ['물을 마신다', '팬팅을 한다', '그늘에서 쉰다'],
    answer: '팬팅을 한다',
  },
]

function changeContent(event, tabId) {
  document
    .querySelectorAll('.tab-content')
    .forEach((content) => content.classList.remove('active'))
  document
    .querySelectorAll('.tab-link')
    .forEach((link) => link.classList.remove('active'))
  document.getElementById(tabId).classList.add('active')
  event.currentTarget.classList.add('active')
}

function loadQuiz() {
  const quizContainer = document.getElementById('quiz-container')
  quizData.forEach((quiz, index) => {
    const quizElement = document.createElement('div')
    quizElement.className = 'quiz-item'
    quizElement.innerHTML = `
      <p>${quiz.question}</p>
      ${quiz.options
        .map(
          (option) => `
        <label>
          <input type="radio" name="quiz${index}" value="${option}">
          ${option}
        </label>`
        )
        .join('')}
    `
    quizContainer.appendChild(quizElement)
  })
}

function submitQuiz() {
  let score = 0
  quizData.forEach((quiz, index) => {
    const selectedOption = document.querySelector(
      `input[name="quiz${index}"]:checked`
    )
    if (selectedOption && selectedOption.value === quiz.answer) {
      score++
    }
  })
  alert(`당신의 점수는 ${score} / ${quizData.length} 입니다.`)
}

document.addEventListener('DOMContentLoaded', loadQuiz)

// 도서 정리
function sortBooks() {
  const sortBy = document.getElementById('sort-books').value
  const booksContainer = document.getElementById('usage2')
  const books = Array.from(booksContainer.getElementsByClassName('book'))

  books.sort((a, b) => {
    let aValue = parseInt(
      a.querySelector('p:nth-child(4)').innerText.replace(/[^0-9]/g, '')
    )
    let bValue = parseInt(
      b.querySelector('p:nth-child(4)').innerText.replace(/[^0-9]/g, '')
    )

    return sortBy === 'price-lo' ? aValue - bValue : bValue - aValue
  })

  books.forEach((book) => booksContainer.appendChild(book))
}

// 도서 검색
function filterBooks() {
  const searchInput = document.getElementById('book-search').value.toLowerCase()
  const books = document.getElementsByClassName('book')

  for (let book of books) {
    const title = book.querySelector('h2').innerText.toLowerCase()
    if (title.includes(searchInput)) {
      book.style.display = ''
    } else {
      book.style.display = 'none'
    }
  }
}
