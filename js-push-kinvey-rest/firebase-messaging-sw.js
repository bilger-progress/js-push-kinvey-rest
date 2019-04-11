if ("function" === typeof importScripts) {
    importScripts("https://www.gstatic.com/firebasejs/5.9.3/firebase-app.js");
    importScripts("https://www.gstatic.com/firebasejs/5.9.3/firebase-messaging.js");

    const configWorker = {
        apiKey: "xxx",
        authDomain: "xxx",
        databaseURL: "xxx",
        projectId: "xxx",
        storageBucket: "xxx",
        messagingSenderId: "xxx"
    };
    firebase.initializeApp(configWorker);
}