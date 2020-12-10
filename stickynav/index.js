const initNavbar = ({ selector = 'header', scrollLimit = 0, activeClass = 'active' }) => {
  const handleScroll = () => {
    const element = document.querySelector(selector)

    if (window.scrollY > scrollLimit) {
      if (!element.classList.contains(activeClass)) element.classList.add(activeClass)
    } else {
      if (element.classList.contains(activeClass)) element.classList.remove(activeClass)
    }
  }

  window.onscroll = handleScroll
}
