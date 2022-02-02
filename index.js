function createWineElement(wineObject) {
	const div = document.createElement('div');

	// div.innerText = JSON.stringify(wineObject);

	const name = document.createElement('h3');
	name.innerText = wineObject.wine;
	div.appendChild(name);

	const image = document.createElement('img');
	image.src = wineObject.image;
	div.appendChild(image);

	return div;
}

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.sampleapis.com/wines/reds');

xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		const data = JSON.parse(xhr.responseText).slice(0, 10);

		for (const wine of data) {
			document.querySelector('#wines').appendChild(createWineElement(wine));
		}
	}
});

xhr.send(null);
