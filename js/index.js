const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])
logo.src = siteContent["nav"]["img-src"]

let headerImage = document.getElementById("cta-img");
headerImage.src = siteContent["cta"]["img-src"]

let middleImage = document.getElementById("middle-img");
middleImage.src = siteContent["main-content"]["middle-img-src"]


let multipleSelections = document.querySelectorAll('a');

multipleSelections[0].textContent = siteContent["nav"]["nav-item-1"]
multipleSelections[1].textContent = siteContent["nav"]["nav-item-2"]
multipleSelections[2].textContent = siteContent["nav"]["nav-item-3"]
multipleSelections[3].textContent = siteContent["nav"]["nav-item-4"]
multipleSelections[4].textContent = siteContent["nav"]["nav-item-5"]
multipleSelections[5].textContent = siteContent["nav"]["nav-item-6"]

let buttonTag = document.querySelector('button');
buttonTag.textContent = siteContent["cta"]["button"]

let buttonText = document.querySelector('h1');
buttonText.textContent = siteContent['cta']['h1']

let textContentDiv = document.querySelectorAll(".text-content");
// console.log(textContentDiv);
textContentDiv[0].querySelector('h4').textContent = siteContent['main-content']['features-h4'];
textContentDiv[0].querySelector('p').textContent = siteContent['main-content']['features-content'];
textContentDiv[1].querySelector('h4').textContent = siteContent['main-content']['about-h4'];
textContentDiv[1].querySelector('p').textContent = siteContent['main-content']['about-content'];
textContentDiv[2].querySelector('h4').textContent = siteContent['main-content']['services-h4'];
textContentDiv[2].querySelector('p').textContent = siteContent['main-content']['services-content'];
textContentDiv[3].querySelector('h4').textContent = siteContent['main-content']['product-h4'];
textContentDiv[3].querySelector('p').textContent = siteContent['main-content']['product-content'];
textContentDiv[4].querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
textContentDiv[4].querySelector('p').textContent = siteContent['main-content']['vision-content'];

let contactSection = document.querySelector('.contact');
contactSection.querySelector('h4').textContent = siteContent["contact"]["contact-h4"];

let contactTags = document.querySelectorAll('p');
contactTags[5].textContent = siteContent["contact"]["address"];
contactTags[6].textContent = siteContent["contact"]["phone"];
contactTags[7].textContent = siteContent["contact"]["email"];

let footerTag = document.querySelector("footer");
footerTag.textContent = siteContent["footer"]["copyright"]