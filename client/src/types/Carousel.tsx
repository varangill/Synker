interface ICarouselBundle {
  image: string;
  caption: string;
}

interface ICarousel {
  images: ICarouselBundle[];
}

export type { ICarouselBundle, ICarousel };
