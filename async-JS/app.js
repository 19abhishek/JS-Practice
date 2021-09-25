//Async-Await can only be used inside a function

const btn = document.querySelector('button');

const getPosition = (opts) => {
    const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(success => {
            resolve(success);
        }, failure => {
            reject(failure);
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
    .catch(err => {
        console.log(err);
        console.log('Here we go!');
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

//Async-Await
async function trackUserHandler5() {
    const posData = await getPosition();
    const timerData = await setTimer(2000);
    console.log(posData, timerData);
}

//Async-Await Error Handling
async function trackUserHandler() {
    let posData;
    let timerData;
    try {
        posData = await getPosition();
        timerData = await setTimer(2000);
    } catch (error) {
        console.log(error);
    }
    console.log(posData, timerData);
}

//Promise Property
Promise.race([getPosition(), setTimer(1000)]).then(data => {
    console.log(data);
});

Promise.all([getPosition(), setTimer(1000)]).then(promiseData => {
    console.log(promiseData);
});

Promise.allSettled([getPosition(), setTimer(1000)]).then(promiseData => {
    console.log(promiseData);
});

btn.addEventListener('click', trackUserHandler);    