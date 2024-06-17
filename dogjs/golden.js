const container = document.createElement('div')
container.className = 'container'

const boxes = [
  {
    title: '특징',
    content: `
          <p>키는 51~61cm, 몸무게는 25~40kg 사이입니다.</p>
          <p>
            리트리버는 사냥개 중에서도
            <b>총에 맞은 새를 물어오는 것 (Retriever)을 목적으로 교배된 견종</b
            >입니다. 이름 또한 되돌아오다의 Retrive에 er을 붙인 모양새입니다.
          </p>
          <p>
            이들의 발에는 <b>물갈퀴</b>가 있습니다. 그에 걸맞게 수영을 잘해고
            대체적으로 물을 좋아하는 편이라 애견인들 사이에서는 '물트리버' 라는
            별명으로 통하기도 합니다.
          </p>
        `,
  },
  {
    title: '성격',
    content: `
            <p>
            대체로 온화한 성격을 지닙니다. 강형욱 훈련사는 골든 리트리버의
            온화한 성격에 대해 "100개의 옐로카드를 가졌고, 한숨 자고 나면
            옐로카드가 전부 회복된다"라고 설명하기도 할만큼 누군가 자신을
            괴롭히더라도 99번까지는 봐줄 만큼 <b>인내심이 좋습니다</b>.
          </p>
          <p>
            <b>똑똑한 견종 탑 5 안에 들어갈 만큼 머리가 좋습니다.</b> 특별한
            훈련 기술 없이도 웬만한 애견 훈련쯤은 어렵지 않게 가르칠 수 있고,
            개량 번식 되기를 사람들과 어울려 일하게 만들어진 견종이다 보니
            사회성 또한 탁월합니다.
          </p>
          <p class="highlight">
            <b> 대상이 사람이 아닌 경우</b> 이 견종도 다른 견종이랑 똑같이 영역
            분쟁이나 서열 다툼도 확실히 하며 특히 암컷은 싸움도 피하지 않습니다.
          </p>
        `,
  },
  {
    title: '주의할 점',
    content: `
            <p>
            <b>털이 정말 많이 빠집니다.</b> 정도의 차이가 있을 뿐 일 년 내내
            털이 빠지며 여름에 빠지는 털은 상상을 초월합니다. 실내에서 기를 경우
            청소를 게을리하면 서부 영화에서나 보이는 회전초가 집 곳곳에
            굴러다니는 모습을 볼 수 있으므로 로봇청소기는 거의 필수라고 할 수
            있습니다.
          </p>
          <p>
            얌전하다는 이미지와는 달리
            <b>생후 2년이 지나기까지는 굉장히 활달</b>합니다. 머리 좋은 개는
            대개 이런데, 머리가 좋다는 것은 호기심이 많다는 뜻이며 이는 곧 이곳
            저곳 잘 들쑤실 수 잇다는 것입니다. 골든 리트리버는 4개월만 되어도
            소형견의 크기를 훌쩍 넘기에 골든 리트리버 견주들은 이 기간을
            <b>마의 2년</b> 이라 부릅니다.
          </p>
          <p>
            애견카페는 데려가지 않는게 좋습니다. 카페 내에서 익히게 되는
            경쟁심으로 인해 순한 성격이 사나워지게 되어 다른 개들과 싸울 수도
            있습니다.
          </p>
          <p>
            먹성이 매우 좋습니다. 세계적으로 보면 <b>비만 리트리버</b>들이 적지
            않으므로 식단과 활동량 측면에서 견주의 세심한 주의가 요구됩니다.
          </p>
        `,
  },
]

boxes.forEach((box) => {
  const boxDiv = document.createElement('div')
  boxDiv.className = 'box'

  const h2 = document.createElement('h2')
  h2.textContent = box.title
  boxDiv.appendChild(h2)

  const contentDiv = document.createElement('div')
  contentDiv.innerHTML = box.content
  boxDiv.appendChild(contentDiv)

  container.appendChild(boxDiv)
})

document.getElementById('boxes').appendChild(container)
