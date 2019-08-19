// disetiap dom selection saya beri nomor sesuai dengan nomor method yang berkaitan


// dom selection nav 
// no 1
const kanan = document.querySelector('nav .kanan');
const navAboutMe = kanan.querySelector('a[href="#aboutMe"]');
const navMyBackground = kanan.querySelector('a[href="#myBackground"]');
const liKanan = kanan.querySelectorAll('li');
const bars = document.querySelector('nav .bars');


// dom selection class container tag aside
// no 2
// class aboutMe
const aboutMe = document.querySelector('.aboutMe');
const iAboutMe = aboutMe.querySelector('i');
const aboutMeP = document.querySelector('.aboutMe div.hide');

// class myBackground
const myBackground = document.querySelector('.myBackground');
const iMyBackground = myBackground.querySelector('i');
const myBackgroundP = document.querySelector('.myBackground div.hide');


// dom selection section class carouselMenu , class carouselMenu-button
// no 3
const btnPrev = document.querySelector('.carouselMenu-button .button-prev');
const carouselMenuCard = document.querySelectorAll('.carouselMenu-card');
const btnNext = document.querySelector('.carouselMenu-button .button-next');

// dom selection section class carouselMenu , class carouselBox-card
const carouselBoxCard = document.querySelector('.carouselBox-card');


// method yang ada di nav
// no 1
navAboutMe.addEventListener('click', function () {
    aboutMeP.classList.remove('hide');
    if (iAboutMe.classList.contains('fa-chevron-down')) return iAboutMe.classList.replace('fa-chevron-down', 'fa-chevron-up');
});

navMyBackground.addEventListener('click', function () {
    myBackgroundP.classList.remove('hide');
    if (iMyBackground.classList.contains('fa-chevron-down')) return iMyBackground.classList.replace('fa-chevron-down', 'fa-chevron-up');
});

bars.addEventListener('click', function () {
    kanan.classList.toggle('hide');
    kanan.style.marginLeft = '57vw';
    kanan.style.textAlign = 'right';
    kanan.style.marginTop = '-4vw';
    for (let i = 0; i < liKanan.length; i++) {
        liKanan[i].style.display = 'block';
        liKanan[i].style.marginRight = '4vw';
        liKanan[i].style.marginTop = '-1vw';
        liKanan[i].style.marginBottom = '-4vw';
    }
});


// method yang ada di aside
// no 2
aboutMe.addEventListener('click', function () {
    aboutMeP.classList.toggle('hide');
    if (iAboutMe.classList.contains('fa-chevron-up')) return iAboutMe.classList.replace('fa-chevron-up', 'fa-chevron-down');
    return iAboutMe.classList.replace('fa-chevron-down', 'fa-chevron-up');
});
aboutMe.addEventListener('mouseover', function () {
    aboutMe.style.cursor = "pointer";
});

myBackground.addEventListener('click', function () {
    myBackgroundP.classList.toggle('hide');
    if (iMyBackground.classList.contains('fa-chevron-up')) return iMyBackground.classList.replace('fa-chevron-up', 'fa-chevron-down');
    return iMyBackground.classList.replace('fa-chevron-down', 'fa-chevron-up');
});
myBackground.addEventListener('mouseover', function () {
    myBackground.style.cursor = 'pointer';
});

// section class carouselMenu , class carouselMenu-button
// no 3
let i = 0;
btnPrev.addEventListener('click', function () {
    carouselMenuCard[0].style.display = 'block';
    carouselMenuCard[1].style.display = 'block';
    carouselMenuCard[2].style.display = 'block';
    carouselMenuCard[3].style.display = 'block';
    for (i; i <= carouselMenuCard.length; i++) {
        console.log(i);
        console.log(carouselMenuCard[i]);
        if (carouselMenuCard[i].classList.contains('khusus1')) {
            carouselMenuCard[i].style.display = 'none';
            carouselBoxCard.appendChild(carouselMenuCard[i + 3]);
            carouselMenuCard[i + 3].style.display = 'block';
            console.log('bababab');
            ++i;
            break;
        } else if (carouselMenuCard[i].classList.contains('khusus2')) {
            carouselMenuCard[i].style.display = 'none';
            carouselBoxCard.appendChild(carouselMenuCard[i - 1]);
            carouselMenuCard[i - 1].style.display = 'block';
            ++i;
            break;
        } else if (carouselMenuCard[i].classList.contains('khusus3')) {
            carouselMenuCard[i].style.display = 'none';
            carouselBoxCard.appendChild(carouselMenuCard[i - 1]);
            carouselMenuCard[i - 1].style.display = 'block';
            ++i;
            break;
        } else if (carouselMenuCard[i].classList.contains('khusus4')) {
            carouselMenuCard[i].style.display = 'none';
            carouselBoxCard.appendChild(carouselMenuCard[i - 1]);
            carouselMenuCard[i - 1].style.display = 'block';
            console.log('sekarang i ke :' + i);
            i = i - 3;
            console.log('sekarang i ke :' + i);
            break;
        }
    }
});

btnNext.addEventListener('click', function () {
    carouselMenuCard[0].style.display = 'block';
    carouselMenuCard[1].style.display = 'block';
    carouselMenuCard[2].style.display = 'block';
    carouselMenuCard[3].style.display = 'block';
    for (i; i <= carouselMenuCard.length; i++) {
        console.log(i);
        console.log(carouselMenuCard[i]);
        if (carouselMenuCard[i].classList.contains('khusus3')) {
            carouselMenuCard[i].style.display = 'none';
            carouselBoxCard.insertBefore(carouselMenuCard[i + 1], carouselMenuCard[i - 2]);
            carouselMenuCard[i + 1].style.display = 'block';
            console.log('bababab');
            --i;
            break;
        } else if (carouselMenuCard[i].classList.contains('khusus2')) {
            carouselMenuCard[i].style.display = 'none';
            carouselBoxCard.insertBefore(carouselMenuCard[i + 1], carouselMenuCard[i + 2]);
            carouselMenuCard[i + 1].style.display = 'block';
            --i;
            console.log(i);
            break;
        } else if (carouselMenuCard[i].classList.contains('khusus1')) {
            carouselMenuCard[i].style.display = 'none';
            carouselBoxCard.insertBefore(carouselMenuCard[i + 1], carouselMenuCard[i + 2]);
            carouselMenuCard[i + 1].style.display = 'block';
            i += 3;
            break;
        } else if (carouselMenuCard[i].classList.contains('khusus4')) {
            carouselMenuCard[i].style.display = 'none';
            carouselBoxCard.insertBefore(carouselMenuCard[i - 3], carouselMenuCard[3 - 2]);
            carouselMenuCard[i - 3].style.display = 'block';
            console.log('sekarang i ke :' + i);
            i = i - 1;
            console.log('sekarang i ke :' + i);
            break;
        }
    }
});