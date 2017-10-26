const getTips = () => {
  return fetch('/tooltips')
    .then(res => res.json())
}

const $box = document.createElement('div')
const $topLeft = document.createElement('div')
const $topRight = document.createElement('div')
const $bottomLeft = document.createElement('div')
const $bottomRight = document.createElement('div')

const renderTip = (tip) => {

  const tips = tip.map((data) => {
    return data.tip
  })

  const pickTip = (data, prop) => {
    var result = []
    for (var i = 0; i < data.length; i++) {
      const newResult = prop[i]
      result.push(newResult)
    }
    console.log(result)
    return result
  }

  const theTip = pickTip(tip, tips)

  $topLeft.textContent = theTip[0]
  $topRight.textContent = theTip[1]
  $bottomLeft.textContent = theTip[2]
  $bottomRight.textContent = theTip[3]

  $box.append($topLeft, $topRight, $bottomLeft, $bottomRight)
  return $box
}

const $topLeftButton = document.getElementById('topLeft')
const $topRightButton = document.getElementById('topRight')
const $bottomLeftButton = document.getElementById('bottomLeft')
const $buttomRightButton = document.getElementById('bottomRight')

getTips()
  .then(data => renderTip(data))
  .then(data => $topLeftButton.addEventListener('mouseenter', () => {
    document.body.appendChild($topLeft)
  }), $topRightButton.addEventListener('mouseenter', () => {
    document.body.appendChild($topRight)
  }), $bottomLeftButton.addEventListener('mouseenter', () => {
    document.body.appendChild($bottomLeft)
  }), $buttomRightButton.addEventListener('mouseenter', () => {
    document.body.appendChild($bottomRight)
  }))
