export default function clearPicture() {
	let picture = document.getElementById('picture')
	if (picture) {
		while (picture.hasChildNodes()) {
			picture.removeChild(picture.firstChild)
		}
	}
}
