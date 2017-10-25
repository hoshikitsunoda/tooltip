const getTips = () => {
  return fetch('/tooltips')
    .then(res => res.json())
}
