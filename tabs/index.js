const initTabs = ({
  wrapperSelector = '#tabs',
  containerSelector = '.tabs-container'
}) => {
  const buttons = document.querySelectorAll('[data-tab-target]')
  const containers = document.querySelectorAll(`${wrapperSelector} ${containerSelector} > *`)

  if (!buttons || !containers) return

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i]
    button.onclick = function () {
      const target = this.getAttribute('data-tab-target')

      // Remove existin active class
      for (let j = 0; j < buttons.length; j++) {
        const _btn = buttons[j]
        const _cnt = containers[j]

        _btn.classList.remove('active')
        _cnt.classList.remove('active')
      }

      // Add active class
      this.classList.add('active')
      document.querySelector(target).classList.add('active')
    }
  }
}
