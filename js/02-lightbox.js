import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

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

const optionsForCaption = {
	captionsData: 'alt',
	captionDelay: 250,
};

const gallery = new SimpleLightbox('.gallery__link', optionsForCaption);



