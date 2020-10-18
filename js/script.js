import items from './gallery-items.js';

const refs = {
    galleryEl: document.querySelector('ul.js-gallery'),
    modalEl: document.querySelector('.js-lightbox'),
    modalImageEl: document.querySelector('.lightbox__image'),
    closeButtonEl: document.querySelector('.lightbox__button')
};

const makeGalleryItem = ({ preview, original, description }) => {
    return`
    <li class="gallery__item">
        <a
        class="gallery__link"
        href="${original}">
            <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
        </a>
    </li>`;
};

const makeGalleryList = items.map(makeGalleryItem).join('');

refs.galleryEl.innerHTML = makeGalleryList;

refs.galleryEl.addEventListener('click', onClickOpenModal);
refs.closeButtonEl.addEventListener('click', onClickCloseModal);

function onClickOpenModal(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    refs.modalEl.classList.add('is-open');
    refs.modalImageEl.src = evt.target.dataset.source;
    refs.modalImageEl.alt = evt.target.alt;
}

function onClickCloseModal(evt) {
    refs.modalEl.classList.remove('is-open');
    refs.modalImageEl.src = '';
    refs.modalImageEl.alt = '';
}
