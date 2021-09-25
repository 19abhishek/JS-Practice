const btn = document.querySelector('button');

const getPosition = (opts) => {
    const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(success => {
            resolve(success);
        }, failure => {
            
        }, opts);
    });
    return promise;
}

const setTimer = (duration) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, duration);
    });
    return promise;
}

function trackUserHandler3() {
    let positionData;
    getPosition()
    .then(posData => {
        positionData = posData;
        return setTimer(2000);
    })
    .then(data => {
        console.log(data, positionData);
    });
    // navigator.geolocation.getCurrentPosition(
    //     posData => {
    //         setTimer(1000).then((data) => {
    //             console.log(data, posData);
    //         });
    //     }, error => {
    //         console.log(error);
    //     }
    // );
    setTimeout(() => {
        console.log('Timer Done');
    }, 0);
    console.log('Getting Position');
}

function trackUserHandler2() {
    navigator.geolocation.getCurrentPosition(
        posData => {
            setTimer(1000).then((data) => {
                console.log(data, posData);
            });
        }, error => {
            console.log(error);
        }
    );
    setTimeout(() => {
        console.log('Timer Done');
    }, 0);
    console.log('Getting Position');
}

function trackUserHandler() {
    navigator.geolocation.getCurrentPosition(
        posData => {
            setTimeout(() => {
                console.log(posData);
            }, 2000);
        }, error => {
            console.log(error);
        }
    );
    setTimeout(() => {
        console.log('Timer Done');
    }, 0);
    console.log('Getting Position');
}

btn.addEventListener('click', trackUserHandler3);    