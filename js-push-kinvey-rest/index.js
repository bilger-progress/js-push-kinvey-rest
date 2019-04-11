// TODO: Add Kinvey App info.
const kinveyAppKey = "xxx";
const kinveyUserAuth = "xxx";

// TODO: Add Firebase project config.
const config = {
    apiKey: "xxx",
    authDomain: "xxx",
    databaseURL: "xxx",
    projectId: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx"
};
firebase.initializeApp(config);

// Initialize FCM.
const messaging = firebase.messaging();
messaging.requestPermission()
    .then(() => {
        console.log("Have persmission!");
        return messaging.getToken();
    })
    .then((token) => {
        console.log(token);
        registerKinveyPush(token);
    })
    .catch(error => console.error(error));

// Register for Kinvey Push using the REST API.
function registerKinveyPush(token) {
    new Request({
        url: "https://baas.kinvey.com/push/" + kinveyAppKey + "/register-device",
        method: "POST",
        data: JSON.stringify({
            platform: "android",
            deviceId: token
        }),
        headers: {
            "Authorization": kinveyUserAuth,
            "Content-Type": "application/json"
        },
        emulation: false,
        urlEncoded: false,
        onSuccess: (data => console.log(data)),
        onFailure: (error => console.error(error))
    }).send();
}

// Handle new messages.
messaging.onMessage(payload => console.log(JSON.stringify(payload)));