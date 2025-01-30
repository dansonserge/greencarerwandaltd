export interface MenuItem {
    name: string;
    route: string;
    isHomeLink: boolean;
  }


export const navLinks : MenuItem[]= [
    {
        name: 'Home',
        route: '/#/home',
        isHomeLink: true
    },
    {
        name: 'Products',
        route: '/#/products',
        isHomeLink: true
    },
    {
        name: 'Services',
        route: '/#/services',
        isHomeLink: true
    },
    {
        name: 'About us',
        route: '/#/about-us',
        isHomeLink: true
    },
    {
        name: 'Contact us',
        route: '/#/contact-us',
        isHomeLink: true
    },
];