class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');

        locateUserBtn.addEventListener('click', this.locateUserHandler);
        addressForm.addEventListener('submit', this.findAddressHandler);
    }

    locateUserHandler() {
        if(!navigator.geolocation){
            alert('Location is not available! Kindly use a different browser.');
            return;
        }
        navigator.geolocation.getCurrentPosition(successResult => {
            console.log(successResult);
            const location = {
                latitude: successResult.coords.latitude,
                longitude: successResult.coords.longitude
            };
            console.log(location);
        }, error => {
            alert('Unofrtunately your location could not be fetched!!');
        });
    }

    findAddressHandler() {
        
    }
}

const pf = new PlaceFinder();