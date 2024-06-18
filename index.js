document.addEventListener('DOMContentLoaded', function () {
  const slides = [
    {
      img: '/img/homehome.png',
      title: "What is 'Bow Data'?",
      description:
        '강아지의 종류 및 특징, 관련 상식, 최신 뉴스, 강아지 용품 추천 등 강아지와 관련된 유용한 정보들을 제공합니다. 강아지와 관련된 유용한 정보들을 제공하여 사람들이 강아지를 한 생명체로 존중하며 책임감 있게 행동할 수 있는 세상을 만드는데 도움이 되는 것이 이 프로젝트의 목표입니다. 이곳에는 Pedia, Data, News, Supplies, Team 페이지가 있습니다.',
    },
    {
      img: '/img/pediahome.jpg',
      title: 'Pedia',
      description: '강아지의 종류와 그 특징에 대해 설명하는 페이지입니다.',
    },
    {
      img: '/img/datahome.png',
      title: 'Data',
      description:
        '강아지와 관련된 상식, 서적, 유튜브 채널 등에 대해 설명하는 페이지입니다.',
    },
    {
      img: '/img/newshome.png',
      title: 'News',
      description: '강아지와 관련된 최신 뉴스를 알려주는 페이지입니다.',
    },
    {
      img: '/img/supplieshome.jpg',
      title: 'Supplies',
      description: '강아지와 관련된 용품을 추천하는 페이지입니다.',
    },
    {
      img: '/img/teamhome.png',
      title: 'Team',
      description:
        '팀 Bow Data와 그 팀원들에 대해 소개하는 페이지입니다. 팀 프로젝트에서 각 팀원들이 맡은 역할과 관련 정보들, 프로젝트 진행 흐름 등을 알 수 있습니다.',
    },
  ]

  let currentIndex = 0
  const slideContainer = document.createElement('div')
  slideContainer.classList.add('slide-container')

  const imgElement = document.createElement('img')
  const titleElement = document.createElement('h3')
  const descriptionElement = document.createElement('p')

  const updateSlide = (index) => {
    imgElement.src = slides[index].img
    titleElement.textContent = slides[index].title
    descriptionElement.innerHTML = slides[index].description
      .split('\n')
      .join('<br>')
  }

  updateSlide(currentIndex)
  slideContainer.appendChild(imgElement)
  slideContainer.appendChild(titleElement)
  slideContainer.appendChild(descriptionElement)

  const createButton = (direction) => {
    const button = document.createElement('button')
    button.textContent = direction === 'left' ? '<' : '>'
    button.classList.add('slide-button', direction)
    button.addEventListener('click', () => {
      currentIndex =
        (currentIndex + (direction === 'left' ? -1 : 1) + slides.length) %
        slides.length
      updateSlide(currentIndex)
    })
    return button
  }

  const leftButton = createButton('left')
  const rightButton = createButton('right')

  slideContainer.appendChild(leftButton)
  slideContainer.appendChild(rightButton)

  const mainSection = document.querySelector('.main .container')
  mainSection.innerHTML = ''
  mainSection.appendChild(slideContainer)

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length
    updateSlide(currentIndex)
  }, 5000)
})
