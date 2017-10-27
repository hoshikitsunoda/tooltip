const $box = document.querySelector('container')
const $topLeft = document.querySelector('.top-left')
const $topRight = document.querySelector('.top-right')
const $bottomRight = document.querySelector('.bottom-right')
const $bottomLeft = document.querySelector('.bottom-left')

const getTips = () => {
  return fetch('/tooltips')
    .then(res => res.json())
}

const renderTip = (tip) => {

  const tips = tip.map((data) => {
    return data.tip
  })

  $topLeft.setAttribute('data-toggle', tips[0])
  $topRight.setAttribute('data-toggle', tips[1])
  $bottomLeft.setAttribute('data-toggle', tips[2] + '!')
  $bottomRight.setAttribute('data-toggle', tips[3] + '!')
}

getTips()
  .then(data => renderTip(data))

const buttons = document.querySelectorAll('.button')

buttons.forEach(element => {
  element.addEventListener('mouseover', event => {
    const { top, bottom, left, right } = element.getBoundingClientRect()
    if (top > 30 && window.innerWidth - right > 120) {
      element.classList.remove('top')
      element.classList.add('right')
    } else if (bottom > 30 && window.innerWidth - right > 120) {
      element.classList.remove('top')
      element.classList.add('bottom')
    } else if (left > 120 && window.innerHeight - top > 120) {
      element.classList.remove('top')
      element.classList.add('left')
    } else {
      element.classList.add('top')
    }
  })
})
