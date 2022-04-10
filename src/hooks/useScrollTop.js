import { useEffect } from 'react'

const ScrollTop = (pointer, selector) => {
  useEffect(() => {
    if (pointer) {
      RedirectScrollTop(selector)
    }
  }, [pointer])

  const RedirectScrollTop = selector => {
    const element = document.getElementById(selector)
    element.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }

  return {
    RedirectScrollTop
  }
}

export default ScrollTop
