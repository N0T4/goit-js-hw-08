import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
createGallery(galleryItems);

function createGallery(galleryData) {
  gallery.innerHTML = galleryData
    .map(
      galleryItem => `<li class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
  </a>
</li>`
    )
    .join('');
}

let galleryModalWindow = new SimpleLightbox('.gallery__link', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});