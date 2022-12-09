import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const imagesContainer = document.querySelector('.gallery');
const imagesMarkup = createGalleryCards(galleryItems);

imagesContainer.insertAdjacentHTML('beforeend', imagesMarkup);

imagesContainer.addEventListener('click', onClick);

const lightbox = new SimpleLightbox('.gallery__item', {
    captionsData: 'alt',
    captionsDelay: 250,
});

function onClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
    return;
    }

console.log(evt.target.nodeName);
}

function createGalleryCards(images) {
    return images
    .map(({ preview, original, description }) => {
    return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    })
    .join('');
}