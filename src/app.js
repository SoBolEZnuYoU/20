import { getRandomColor } from "./utils"

export function initApp() {
	const button = document.createElement('button')
	button.className = 'button'
	button.innerText = 'Изменить цвет страницы'

	document.querySelector('body').append(button)

	button.addEventListener('click', () => {
		document.body.style.backgroundColor = getRandomColor()
	})
}