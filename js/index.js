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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let a = document.querySelectorAll("a");
let navWords = Object.values(siteContent.nav);
for (let i = 0; i < a.length; i++) {
  a[i].textContent = navWords[i];
}

let main = document.querySelector("h1");
main.textContent = siteContent["cta"]["h1"];

let mainButton = document.querySelector("button");
mainButton.textContent = siteContent["cta"]["button"];

let codeSnip = document.getElementById("cta-img");
codeSnip.setAttribute('src', siteContent["cta"]["img-src"]);

let topTitles = [siteContent["main-content"]["features-h4"], siteContent["main-content"]["about-h4"]]
let topTitle= document.querySelectorAll(".top-content h4");
for (let i = 0; i < topTitle.length; i++) {
  topTitle[i].textContent = topTitles[i];
}

let topParas = [siteContent["main-content"]["features-content"], siteContent["main-content"]["about-content"]]
let topPara= document.querySelectorAll(".top-content p");
for (let i = 0; i < topPara.length; i++) {
  topPara[i].textContent = topParas[i];
}

let codeSnips = document.getElementById("middle-img");
codeSnips.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let bottomTitles = [siteContent["main-content"]["services-h4"],
                    siteContent["main-content"]["product-h4"],
                    siteContent["main-content"]["vision-h4"]]
let bottomTitle= document.querySelectorAll(".bottom-content h4");
for (let i = 0; i < bottomTitle.length; i++) {
  bottomTitle[i].textContent = bottomTitles[i];
}

let bottomParas = [siteContent["main-content"]["services-content"],
                    siteContent["main-content"]["product-content"],
                    siteContent["main-content"]["vision-content"]]
let bottomPara= document.querySelectorAll(".bottom-content p");
for (let i = 0; i < bottomPara.length; i++) {
  bottomPara[i].textContent = bottomParas[i];
}

let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];


let contactPS = [siteContent["contact"]["address"],
                    siteContent["contact"]["phone"],
                    siteContent["contact"]["email"]]
let contactP = document.querySelectorAll(".contact p");
for (let i = 0; i < contactP.length; i++) {
  contactP[i].textContent = contactPS[i];
}

let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];


