import { useEffect, useState } from 'react'

const useOverlay = () => {
  const [active, setActive] = useState(false)
  const [text, setText] = useState('Cargando...')

  useEffect(() => {
    if (text) {
      const textOverlay = document.querySelector('p.text_loader')

      textOverlay.textContent = text
    }
  }, [text])

  useEffect(() => {
    if (active) {
      const spanner = document.querySelector('div.spanner')

      spanner.classList.add('show')

      const overlay = document.querySelector('div.overlay')

      overlay.classList.add('show')
    } else {
      const spanner = document.querySelector('div.spanner')

      spanner.classList.remove('show')

      const overlay = document.querySelector('div.overlay')

      overlay.classList.remove('show')
    }
  }, [active])

  return {
    setActive,
    setText,
    text,
  }
}

export default useOverlay
