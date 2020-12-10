const initImageShow = () => {
  const backdrop = document.querySelector('.imageshow-backdrop')
  const backdropImg = document.querySelector('.imageshow-backdrop img')
  const backdropClose = document.querySelector('.imageshow-backdrop .imageshow-close')

  backdropImg.onclick = e => e.stopPropagation()

  const openBackdrop = ({ url }) => {
    backdropImg.src = url
    backdrop.classList.add('active')
  }

  const closeBackdrop = () => {
    backdropImg.src = ''
    backdrop.classList.remove('active')
  }

  if (!backdrop.getAttribute('dont-close-onclick')) backdrop.onclick = closeBackdrop
  backdropClose.onclick = closeBackdrop

  const images = document.querySelectorAll('[data-imageshow-src]')

  for (let i = 0; i < images.length; i++) {
    const image = images[i]
    const url = image.getAttribute('data-imageshow-src')

    image.onclick = () => openBackdrop({ url })
  }

  return { openBackdrop, closeBackdrop }
}
