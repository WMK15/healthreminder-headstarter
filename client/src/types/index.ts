export type INavLink = {
    imgURL: string;
    route: string;
    label: string;
  };
    
  export type IUser = {
    id: string;
    password: string;
    name: string;
    username: string;
    email: string;
    imageUrl?: string;
    bio?: string;
  };