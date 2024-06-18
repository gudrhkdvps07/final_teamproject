const container = document.createElement('div')
container.className = 'container'

const boxes = [
  {
    title: '특징',
    content: `
          <p>
            키는 23~31cm, 몸무게는 5.4kg~8.2kg 사이입니다.
            <b>다리가 짧은편</b>으로, 성견임에도 아장아장 뒤뚱뒤뚱 걷습니다.
            너비가 있는 체형입니다.
          </p>
          <p>
            <b>이름처럼 특유의 복슬복슬한 털을 갖고있습니다.</b> 풍성하게
            부풀어오른 듯한 느낌으로 잘 관리해 놓으면 마치 솜사탕이나 목화 같은
            모습이 됩니다. 보기와 다르게 털 빠짐은 없는 편에 속합니다. 머리
            모양을 커다란 원형으로 미용하는 경우가 많은데, 비숑을 키우고 있는
            주인들은 이 머리 모양을 <b>'하이바'라는 애칭</b>으로 부릅니다.
          </p>
          <p class="highlight">
            비숑프리제의 수명은 대략 13~16년입니다. 그중에는 21년으로 장수한
            기록이 있는 비숑프리제도 있습니다.
          </p>
        `,
  },
  {
    title: '성격',
    content: `
            <p>
            인상은 전반적으로 웃는 상에 <b>활발하고 명랑</b>하여 고양이,
            앵무새와도 잘 지낼 만큼 성격도 좋습니다. 가끔 그 명랑함이 지나쳐
            자신들의 내면 에너지를 발산할 때가 있는데 비숑 견주들은 다른
            견주들이 그렇듯 이를 <b>비숑 타임</b>이라고 표현합니다. 엄청
            뛰어다니고 산책 중에 다른 개를 만나면 특유의 친화력으로 반갑다고
            상대 견공 주변을 우다다 하기도 합니다. 주변에
            <b>너무 호기심과 관심이 많고 주의가 산만</b>해서, 주인의 지시와
            교류에 집중해서 특정 행동이나 반응을 하도록
            <b>훈련시키기가 어렵습니다.</b>
          </p>
          <p>
            <b>독립심이 강해</b> 혼자 집을 지키게 해도 얌전하며, 헛짖음이나
            하울링을 잘하지 않습니다. 또한 낙천적인 면모도 있어 특별한 경우가
            아니라면 더더욱 <b>짖지 않는 편</b>입니다.
          </p>

        `,
  },
  {
    title: '주의할 점',
    content: `
<p>
            모질이 가늘어 미용하기가 쉽지 않아 다른 견종보다
            <b>미용비가 많이 나오는 편</b>입니다. 사실 애초에 흔히 사진에서 볼
            수 있는 비숑 프리제의 모양새를 만드는 미용을 할 수 있는 샵 자체가
            극히 적습니다. 국내에서 키우는 사람도 적은 편이고, 빗질의 경우
            배냇털은 하루에 두 번, 성견은 하루에 한 번 정도 맘먹고 해줘야 털이
            엉키지 않습니다.
          </p>
          <p>
            비숑프리제는 일반적으로 다리의 뼈가 가늘기 떄문에
            <b>골절되기 쉽거나 슬개골 탈구</b> 등으로 인해 걷기 힘들어지는
            경우도 있습니다. 만일 걸을 때 다리를 들고 걷거나 절뚝 거리는 등 파행
            증상이 보이면 수의사의 진찰을 받아야 합니다.
          </p>

          <p>
            어릴때 사회성을 기르지 않으면 잘 짖는 강아지가 될 수 있고, 이때는
            목소리가 매우 우렁차기 때문에 <b>훈육에 있어 주의</b>가 필요합니다.
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
