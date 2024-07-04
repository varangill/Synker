interface CarouselBundle {
  image: string;
  caption: string;
}

class Carousel {
  private _images: CarouselBundle[];

  constructor(images: CarouselBundle[] = []) {
    this._images = images;
  }

  // Images
  getImages(): CarouselBundle[] {
    return this._images;
  }

  setImages(images: CarouselBundle[]): void {
    this._images = images;
  }

  addImage(image: CarouselBundle): void {
    this._images.push(image);
  }

  removeImage(index: number): void {
    this._images.splice(index, 1);
  }
}

export { Carousel };
export type { CarouselBundle };
