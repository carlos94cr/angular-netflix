export interface NavInterface {
    logo: ImageInterface;
    links: LinkInterface[];
    search: ImageInterface;
    notifications: ImageInterface;
}

export interface HeroInterface {
    title: string;
    gallery: ImageInterface[]
}

export interface ImageInterface {
    src: string;
    alt: string;
}

export interface FilmsInterface{
    title: string;
    gallery: ImageInterface[]
}

export interface LinkInterface {
    text: string;
    link: string;
}