const container = document.createElement('div')
container.className = 'container'

const boxes = [
  {
    title: '특징',
    content: `
          <p>
            키는 45~55cm, 몸무게는 15~20kg 사이입니다.
            <b>다리가 매우 길어서 체고가 높은 편</b>으로, 저먼 셰퍼드나
            골든리트리버의 체고에 크게 밀리지 않습니다.
          </p>
          <p>
            이들의 겉털은 강하고 윤택하며, 전체적으로
            <b>탄탄하고 균형잡힌 체형</b>입니다. 턱이 튼튼하고 귀가 앞으로 약간
            숙여져 있어 소리에 민감하게 움직입니다.
          </p>
        `,
  },
  {
    title: '성격',
    content: `
            <p>
            일반적으로 <b>지능도 개 품종 전체의 평균치보다 높아서</b> 말을 못
            알아듣는다거나 하는 일은 별로 없습니다. 오히려 순발력이 매우 뛰어난
            편이라 앉아, 엎드려 훈련을 잘 따르는 편입니다.
          </p>
          <p>
            사는 곳만큼은 깨끗하게 유지하려고 하는 본능이 강하게 있어
            <b>집과 먼 곳에서 대소변을 보려는 습성</b>이 있습니다. 개체에 따라
            다르지만 심하면 마려울 때마다 짖어대며 주인을 집사처럼 부르거나 비가
            와서 주인이 하루 이틀 데리고 나가지 않으면 나갈 때까지
            <b>대소변을 며칠이고 참는 모습</b>도 보입니다.
          </p>
          <p>
            특유의 집요함과 근성 때문에 산책, 방목 등을 통해
            <b>기분전환을 자주</b>
            시켜줘야 합니다.
          </p>
          <p>
            기본적으로
            <b> 집을 잘 지키는 개체들이 ‘훌륭한 개’로 평가되어 번식</b>해온
            개체에 따라 다르기는 하나 가족 외의 사람에게 경계심을 가지는 경우가
            많습니다.
          </p>
        `,
  },
  {
    title: '주의할 점',
    content: `
          <p>
            이중모인 탓에 봄, 가을에 <b>털이 정말 많이 빠집니다.</b> 특히 생후
            1년의 첫 털갈이 때 배냇털이 빠지면서 본 털이 나는데, 이때
            <b>피부병에 걸렸다 싶을 정도로 흉하게 빠지며</b> 후에 있을 일반적인
            털갈이와 다르게 기간도 길고 털의 양도 어마어마해 마당이나 방 한켠에
            회전초마냥 굴러다니는 진풍경을 볼 수 있습니다.
          </p>
          <p>
            진돗개와 같은 중형~대형견의 경우 간혹 <b>위확장증</b>의 위험성이 좀
            있기도하고 개체에 따라서는 관절이형성 같은 것이 생길 우려도 조금
            있습니다.
          </p>

          <p class="highlight">
            진돗개들은 <b>몹시높은 공격성(aggression), 사나움</b>을 지니고 있는
            견종이기 때문에 외출시 입마개는 필수입니다. 미국에서는
            <b>안락사를 가장 자주 당하는 견종</b>이기도 하며 가출 확률도 가장
            높은 수준으로 기록되어 있습니다.
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
