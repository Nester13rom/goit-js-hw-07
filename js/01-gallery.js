import { galleryItems } from './gallery-items.js';
// Change code below this line

const markupGallery = document.querySelector('.gallery');

(function () {
	const markup = galleryItems.map(({ preview, original, description }) => `
	<li class="gallery__item">
		<a class="gallery__link" href="${original}">
			<img
				class="gallery__image"
				src="${preview}"
				data-source="${original}"
				alt="${description}"
			/>
		</a>
	</li>
	`).join('');
	markupGallery.insertAdjacentHTML('beforeend', markup)
})();

markupGallery.addEventListener('click', onClick);

function onClick(evt) {
	evt.preventDefault();

	if (!evt.target.classList.contains('gallery__image')) {
		return;
	}

	const dataLink = evt.target.dataset.source;

	const data = galleryItems.find(({ original }) => original === dataLink);

	console.log(data);

	const instance = basicLightbox.create(`
   <div>
		<img
			class="gallery__image"
			src="${data.original}"
			data-source="${data.original}"
			alt="${data.description}"
			/>
	</div>
`);

	instance.show();

	document.addEventListener('keydown', onKeyEscapeClose);

	function onKeyEscapeClose (evt) {
	if (evt.code === 'Escape') {
		instance.close()
		document.removeEventListener('keydown', onKeyEscapeClose);
		};
	};
}


