export interface Image {
  id: string;
   urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  likes: number;
  user: {
    name: string;
  };
}

export interface Params {
  isOpen: boolean;
  url: string;
  alt: string;
}

export interface Photos {
   results: Image[];
  totalPages: number;
}
 