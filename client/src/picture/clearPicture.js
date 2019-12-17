export default function clearPicture() {
  let picture = document.getElementById('picture')

  while (picture.hasChildNodes()) {
    picture.removeChild(picture.firstChild)
  }
}
