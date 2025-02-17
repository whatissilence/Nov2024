
export class Slider {
  currentSlide = 0;
  isSliding = false;
  slidingIntervalId;

  constructor(params) {
    if (!Array.isArray(params.images) || !params.images.length) {
      throw new Error('No images specified');
    }

    if (!params.sliderId) {
      throw new Error('Slider ID is required');
    }

    const defaultOptions = {
      sliderId: '',
      images: [],
      slideTime: 1,
      isDotsHidden: false,
      isPlayButtonHidden: false,
      primaryColor: '#67b6d0'
    }

    const options = {
      ...defaultOptions,
      ...params,
    };

    this.sliderId = `#${options.sliderId}`;
    this.images = options.images;
    this.slideCount = options.images.length;
    this.slideTime = options.slideTime;
    this.isDotsHidden = options.isDotsHidden;
    this.isPlayButtonHidden = options.isPlayButtonHidden;

    this.primaryColor = options.primaryColor;

    this.prepareElements();
    this.makeDomSubscriptions();
  }

  prepareElements() {
    this.generateImgs();
    if (!this.isDotsHidden) {
      this.generateDots();
    } else {
      document.querySelector(`${this.sliderId} .slide-buttons`).remove();
    }

    this.paintElements();

    this.imgContainerElem = document.querySelector(`${this.sliderId} .image-container`);
    this.firstImageElem = document.querySelector(`${this.sliderId} img`);

    if(this.isPlayButtonHidden) {
      document.querySelector(`${this.sliderId} .start-sliding`).remove();
    }
  }

  paintElements() {
    document.querySelector(`${this.sliderId} .left`).style.backgroundColor = this.primaryColor;
    document.querySelector(`${this.sliderId} .right`).style.backgroundColor = this.primaryColor;

    const playButton = document.querySelector(`${this.sliderId} .start-sliding-button`);
    if (playButton) {
      playButton.style.backgroundColor = this.primaryColor;
    }
  }

  makeDomSubscriptions() {
    document.querySelector(`${this.sliderId} .left`).addEventListener('click', this.onLeftClick.bind(this));
    document.querySelector(`${this.sliderId} .right`).addEventListener('click', this.onRightClick.bind(this));

    if(!this.isDotsHidden) {
      document.querySelector(`${this.sliderId} .slide-buttons`).addEventListener('click', event => {
        this.onDotClick(event); // тому що тут в самій функції нам потрібен event
      });
    }

    if (!this.isPlayButtonHidden) {
      document.querySelector(`${this.sliderId} .start-sliding-button`).addEventListener('click', event => {
        this.startStopSliding(event); // тому що тут в самій функції нам потрібен event
      });
    }
  }

  generateImgs() {
    let resultHtml = '';
    this.images.forEach(imgLink => {
      resultHtml += `<img src="img/${imgLink}" alt="">`;
    })
    document.querySelector(`${this.sliderId} .image-container`).innerHTML = resultHtml;
  }

  generateDots() {
    let resultHtml = '';
    this.images.forEach((_, index) => {
      resultHtml += `<div class="slide-button" data-img="${index}"></div>`;
    })
    document.querySelector(`${this.sliderId} .slide-buttons`).innerHTML = resultHtml;
    this.makeDotActive(this.currentSlide);
  }

  onLeftClick() {
    this.currentSlide--;

    if(this.currentSlide < 0) {
      this.currentSlide = this.slideCount - 1;
    }

    this.imgContainerElem.style.transform = `translate(-${this.currentSlide * this.firstImageElem.offsetWidth}px)`;
    this.refreshActiveDot();
  }

  onRightClick() {
    this.currentSlide++;

    if(this.currentSlide === this.slideCount) {
      this.currentSlide = 0;
    }

    this.imgContainerElem.style.transform = `translate(-${this.currentSlide * this.firstImageElem.offsetWidth}px)`;
    this.refreshActiveDot();
  }

  onDotClick(event) {
    if (!event.target.classList.contains('slide-button')) {
      return;
    }

    this.currentSlide = event.target.dataset.img;
    this.imgContainerElem.style.transform = `translate(-${this.currentSlide * this.firstImageElem.offsetWidth}px)`;

    this.refreshActiveDot();
  }

  refreshActiveDot() {
    if(this.isDotsHidden) {
      return;
    }

    this.makeDotsInactive();
    this.makeDotActive(this.currentSlide);
  }

  startStopSliding(event) {
    this.isSliding = !this.isSliding;
    event.target.classList.toggle('stopped');

    if (this.isSliding) {
      this.slidingIntervalId = setInterval(this.onRightClick.bind(this), this.slideTime * 1000);
    } else {
      clearInterval(this.slidingIntervalId);
      this.slidingIntervalId = null;
    }
  }

  makeDotActive(current) {
    const activeDot = document.querySelector(`${this.sliderId} div[data-img="${current}"]`);
    activeDot.style.backgroundColor = this.primaryColor;
    activeDot.style.borderColor = this.primaryColor;
  }

  makeDotsInactive() {
    const dotsElements = document.querySelectorAll(`${this.sliderId} .slide-button`);
    [...dotsElements].forEach(dot => {
      dot.style.backgroundColor = '';
      dot.style.borderColor = '';
    })

  }
}