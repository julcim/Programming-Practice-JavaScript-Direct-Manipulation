const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const fileNames = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];


/* Declaring the alternative text for each image file */

const altText = {
    'pic1.jpg': 'Human eye close up',
    'pic2.jpg': 'Gray and slightly yellow rock',
    'pic3.jpg': 'Purple and white flowers',
    'pic4.jpg': 'Art from ancient egypt',
    'pic5.jpg': 'Large moth on a leaf'
}

/* Looping through images */

for (const fileName of fileNames) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${fileName}`);
    newImage.setAttribute('alt', altText[fileName]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}


/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const button = btn.getAttribute('class');
    if (button === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
