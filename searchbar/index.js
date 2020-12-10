const initSearchbar = ({
  searchbar = '#searchbar',
  searchItem = '.search-item',
  container = '.searchlist-container'
}) => {
  const searchbarElement = document.querySelector(searchbar)
  const containerElement = document.querySelector(container)
  const items = document.querySelectorAll(searchItem)

  searchbarElement.onkeyup = () => {
    const value = searchbarElement.value
    containerElement.innerHTML = ''
    let itemsToRender = items

    if (value) {
      let _items = []

      for (let i = 0; i < items.length; i++) {
        const item = items[i]
        const searchparams = item.getAttribute('searchtexts')
        const paramsArr = searchparams.split(',')
        let matches = false

        for (let j = 0; j < paramsArr.length; j++) {
          const param = paramsArr[j]

          if (
            param.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
            value.toLocaleLowerCase().includes(param.toLocaleLowerCase())
          ) {
            matches = true
            break
          }
        }

        if (matches) _items.push(item)
      }

      itemsToRender = _items
    }

    for (let i = 0; i < itemsToRender.length; i++) {
      const item = itemsToRender[i]
      containerElement.appendChild(item)
    }
  }
}
