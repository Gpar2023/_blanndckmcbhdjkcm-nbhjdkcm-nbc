// Create a button element
const fullscreenButton = document.createElement('button');
fullscreenButton.textContent = 'FULLSCREEN';

// Style the button
fullscreenButton.style.padding = '10px 20px';
fullscreenButton.style.backgroundColor = 'blue';
fullscreenButton.style.color = 'white';
fullscreenButton.style.border = 'none';
fullscreenButton.style.borderRadius = '5px';

// Append the button to the body
document.body.appendChild(fullscreenButton);

// Redirect to the fullscreen URL on button click
fullscreenButton.addEventListener('click', () => {
    window.location.href = 'https://gg-opensocial.googleusercontent.com/gadgets/ifr?container=ig&url=https://cdn.jsdelivr.net/gh/sk1bx/element@1dd0b99d2004b84795f2745a5eb3468deb1c38a4/ts2.xml';
});
