const siteContent = {
  'nav': {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  'cta': {
    'h1': 'DOM Is Awesome',
    'button': 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4':'Features',
    'features-content': 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4':'About',
    'about-content': 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4':'Services',
    'services-content': 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4':'Product',
    'product-content': 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4':'Vision',
    'vision-content': 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  'contact': {
    'contact-h4' : 'Contact',
    'address' : '123 Way 456 Street Somewhere, USA',
    'phone' : '1 (888) 888-8888',
    'email' : 'sales@greatidea.io',
  },
  'footer': {
    'copyright' : 'Copyright Great Idea! 2018'
  },
};


// ### Changing Nav Bar ### //
let logoImg = document.querySelector('#logo-img');
logoImg.src = siteContent['nav']['img-src'];

// Setting text contents of every anchor tag in nav
const navBarAnchors = document.querySelectorAll('a');
navBarAnchors[0].textContent = siteContent['nav']['nav-item-1'];
navBarAnchors[1].textContent = siteContent['nav']['nav-item-2'];
navBarAnchors[2].textContent = siteContent['nav']['nav-item-3'];
navBarAnchors[3].textContent = siteContent['nav']['nav-item-4'];
navBarAnchors[4].textContent = siteContent['nav']['nav-item-5'];
navBarAnchors[5].textContent = siteContent['nav']['nav-item-6'];


// ### Changing CTA Section ### //
const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

const ctaImg = document.querySelector('.cta img');
ctaImg.src = siteContent['cta']['img-src'];


// ### Changing Main Section ### //
//Converting MCTextContent into an array. Referencing the index per subsection of content
const mainContentTextDivs = document.querySelectorAll('.main-content .text-content');
const mcTextDivsArray = Array.from(mainContentTextDivs);

// Features Subsection
const featuresH4 = mcTextDivsArray[0].querySelector('h4');
featuresH4.textContent = siteContent['main-content']['features-h4'];
const featuresP = mcTextDivsArray[0].querySelector('p');
featuresP.textContent = siteContent['main-content']['features-content'];

// About Subsection
const aboutH4 = mcTextDivsArray[1].querySelector('h4');
aboutH4.textContent = siteContent['main-content']['about-h4'];
const aboutP = mcTextDivsArray[1].querySelector('p');
aboutP.textContent = siteContent['main-content']['about-content'];

// Setting Main-Content Image
const mainContentImage = document.querySelector('.middle-img');
mainContentImage.src = siteContent['main-content']['middle-img-src'];

// Services Subsection
const servicesH4 = mcTextDivsArray[2].querySelector('h4');
servicesH4.textContent = siteContent['main-content']['services-h4'];
const servicesP = mcTextDivsArray[2].querySelector('p');
servicesP.textContent = siteContent['main-content']['services-content'];

// Product Subsection
const productH4 = mcTextDivsArray[3].querySelector('h4');
productH4.textContent = siteContent['main-content']['product-h4'];
const productP = mcTextDivsArray[3].querySelector('p');
productP.textContent = siteContent['main-content']['product-content'];

// vision Subsection
const visionH4 = mcTextDivsArray[4].querySelector('h4');
visionH4.textContent = siteContent['main-content']['vision-h4'];
const visionP = mcTextDivsArray[4].querySelector('p');
visionP.textContent = siteContent['main-content']['vision-content'];
