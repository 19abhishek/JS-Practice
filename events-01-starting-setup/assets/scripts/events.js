const button = document.querySelector('button');

const btnHandler = event => {
    event.target.disabled = true;
    console.log(event);
}

const buttonEvent = () => {
    console.log('Button Clicked!');
}

button.addEventListener('click', buttonEvent);