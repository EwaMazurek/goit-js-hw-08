import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

galleryItems.forEach(img => {
  gallery.insertAdjacentHTML(
    'beforeend',
    `<a class="gallery__item" href=${img.original}>
<img class="gallery__image" src=${img.preview} alt=${img.description} />
</a>`
  );
});

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
console.log(galleryItems);
