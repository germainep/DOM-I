const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

/** *
 *  image section
 *** */
// Example: Update the img src for the logo
const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent.nav['img-src']);

const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent.cta['img-src']);

const midImage = document.getElementById('middle-img');
midImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

/** *
 *  Nav content
 */

const nav = document.getElementsByTagName('nav');
const navChildArray = Array.from(nav[0].children);

navChildArray.forEach((el, index) => {
  el.innerText = siteContent.nav[`nav-item-${index + 1}`];
});

/**
 * CTA content
 */

const cta = document.querySelector('.cta-text');
const ctaH1 = cta.children[0];
const ctaButton = cta.children[1];

ctaH1.innerText = siteContent.cta.h1;
ctaButton.innerText = siteContent.cta.button;

/**
 *  Main Content
 * */

const textContent = document.querySelectorAll('.text-content');
const features = textContent[0];
const about = textContent[1];
const services = textContent[2];
const product = textContent[3];
const vision = textContent[4];

features.children[0].innerText = siteContent['main-content']['features-h4'];
features.children[1].innerText = siteContent['main-content']['features-content'];

about.children[0].innerText = siteContent['main-content']['about-h4'];
about.children[1].innerText = siteContent['main-content']['about-content'];

services.children[0].innerText = siteContent['main-content']['services-h4'];
services.children[1].innerText = siteContent['main-content']['services-content'];

product.children[0].innerText = siteContent['main-content']['product-h4'];
product.children[1].innerText = siteContent['main-content']['product-content'];

vision.children[0].innerText = siteContent['main-content']['vision-h4'];
vision.children[1].innerText = siteContent['main-content']['vision-content'];

/**
 * Contact
 */

const contact = document.querySelector('.contact');
const contactH4 = contact.children[0];
const phone = contact.children[2];
const email = contact.children[3];
const address = contact.children[1];

contactH4.innerText = siteContent.contact['contact-h4'];
address.innerText = siteContent.contact.address;
phone.innerText = siteContent.contact.phone;
email.innerText = siteContent.contact.email;

/**
 * Footer
 */

const footer = document.querySelector('footer');
footer.children[0].innerText = siteContent.footer.copyright;
