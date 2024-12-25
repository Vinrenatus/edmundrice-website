export interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface News {
  id: number;
  title: string;
  content: string;
  date: string;
  image: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  type: 'image' | 'video';
  url: string;
  description: string;
}