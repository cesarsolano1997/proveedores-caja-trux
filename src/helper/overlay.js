export default function ActiveOverlay() {
  const spanner = document.querySelector('div.spanner')

  spanner.classList.add('show')

  const overlay = document.querySelector('div.overlay')

  overlay.classList.add('show')
}
