const initAccordions = () => {
  const accordionItems = document.querySelectorAll('.accordion-item-title')

  for (let i = 0; i < accordionItems.length; i++) {
    const accordionItem = accordionItems[i]
    accordionItem.addEventListener('click', function (e) {
      e.target.parentNode.classList.toggle('active')
    })
  }
}