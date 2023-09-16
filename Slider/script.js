// Image class for slide's information and image
class Image {
  constructor(title, description, imageURL) {
    this.title = title;
    this.description = description;
    this.imageURL = imageURL;
  }
}

// Selected elements
const sliderForm = document.querySelector('.slider-form');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const imageInput = document.getElementById('imageFile');

const titleError = document.querySelector('.title-error');
const descriptionError = document.querySelector('.description-error');
const imageError = document.querySelector('.image-error');

const sliderEl = document.querySelector('.slider');

// Main class for slider functionality
class Slider {
  _slides = [];
  _slideCount = 0;

  _slideContainer;

  _newImage;
  _title;
  _description;
  _imageURL;

  _btnRight;
  _btnLeft;

  constructor() {
    this._init();

    sliderForm.addEventListener('submit', this._handleFormSubmit.bind(this));

    this._inputHandler(titleInput, this._inputChangeHandler, titleError);
    this._inputHandler(
      descriptionInput,
      this._inputChangeHandler,
      descriptionError
    );
    imageInput.addEventListener('change', this._imageChangeHandler.bind(this));

    this._slideBtnHandler(this._btnRight, 'right');
    this._slideBtnHandler(this._btnLeft, 'left');

    window.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') this._slideHandler('right');
      if (e.key === 'ArrowLeft') this._slideHandler('left');
    });
  }

  _init() {
    sliderEl.innerHTML =
      '<p class="empty-slider-msg">Start adding images to generate slider.</p> <div class="slide-container"></div>';
    this._slideContainer = document.querySelector('.slide-container');
    this._generateSliderBtn();

    titleInput.focus();
  }

  _slideBtnHandler(btn, direction) {
    btn.addEventListener('click', this._slideHandler.bind(this, direction));
  }

  _inputHandler(inputEl, handlerFn, errorEl) {
    inputEl.addEventListener('input', handlerFn.bind(this, errorEl));
  }

  _handleFormSubmit(e) {
    e.preventDefault();

    this._title = e.target[0].value;
    this._description = e.target[1].value;
    const imageFile = e.target[2].files;

    const checkInputValidity = input => {
      return input.length !== 0;
    };

    const removeHiddenClass = errorEl => {
      errorEl.classList.remove('hidden');
    };

    const titleIsValid = checkInputValidity(this._title);
    const descriptionIsValid = checkInputValidity(this._description);
    const imageIsValid = imageFile.length !== 0;

    if (!titleIsValid) removeHiddenClass(titleError);
    if (!descriptionIsValid) removeHiddenClass(descriptionError);
    if (!imageIsValid) removeHiddenClass(imageError);

    const formIsValid = titleIsValid && descriptionIsValid && imageIsValid;

    if (!formIsValid) return;

    this._imageURL = URL.createObjectURL(imageFile[0]);

    this._createImage();
    this._slides.push(this._newImage);

    if (this._slides.length === 1) this._initSlider();
    this._generateSlides();

    this._resetInputs();

    this._slideCount = 0;
  }

  _inputChangeHandler(errorEl, e) {
    if (e.target.value.trim().length !== 0) {
      errorEl.classList.add('hidden');
      return;
    }
  }

  _imageChangeHandler(e) {
    if (e.target.files[0].length !== 0) {
      imageError.classList.add('hidden');
    }
  }

  _resetInputs() {
    titleInput.value = '';
    descriptionInput.value = '';
    imageInput.value = '';

    titleInput.focus();
  }

  _createImage() {
    this._newImage = new Image(this._title, this._description, this._imageURL);
  }

  _initSlider() {
    sliderEl.removeChild(document.querySelector('.empty-slider-msg'));
    sliderEl.style.height = '63.5rem';

    this._btnLeft.classList.remove('hidden');
    this._btnRight.classList.remove('hidden');
  }

  _createBtn(html, btnClass) {
    const btn = document.createElement('button');

    btn.innerHTML = html;
    btn.classList.add(...['btn', btnClass, 'hidden']);

    sliderEl.insertAdjacentElement('afterbegin', btn);

    return btn;
  }

  _generateSliderBtn() {
    const btnRight = this._createBtn('&rarr;', 'btn--right');
    const btnLeft = this._createBtn('&larr;', 'btn--left');

    this._btnRight = btnRight;
    this._btnLeft = btnLeft;
  }

  _generateSlides() {
    const slideMarkup = this._slides
      .map((slideData, i) => {
        return `<div style="transform: translateX(${
          i * 100
        }%); height: 63.5rem" class="slide">
            <img
            class="slide-img"
            src=${slideData.imageURL}
            alt=${slideData.title}
            />

            <div class="slide-text-content">
            <h5 class="slide-title">${slideData.title}</h5>
            <p class="slide-description">
                ${slideData.description}
            </p>
            </div>
        </div>`;
      })
      .join('');

    this._slideContainer.innerHTML = '';
    this._slideContainer.insertAdjacentHTML('afterbegin', slideMarkup);
  }

  _slideHandler(direction) {
    const slides = document.querySelectorAll('.slide');

    if (direction === 'right') {
      if (this._slideCount === slides.length - 1) {
        this._slideCount = 0;
      } else {
        this._slideCount++;
      }
    } else if (direction === 'left') {
      if (this._slideCount === 0) {
        this._slideCount = slides.length - 1;
      } else {
        this._slideCount--;
      }
    }

    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${
        i * 100 - 100 * this._slideCount
      }%)`;
    });
  }
}

const slider = new Slider();
