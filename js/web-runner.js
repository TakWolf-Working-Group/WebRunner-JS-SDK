(function () {
    if (window.webRunner) {
        return;
    }

    if (!window.jsBridge) {
        return;
    }
    let jsBridge = window.jsBridge;

    window.webRunner = {
        showToast(message) {
            jsBridge.callService('showToast', message).then()
        },
        openShare(data) {
            jsBridge.callService('openShare', JSON.stringify(data)).then()
        },
        openAppDetailsSettings() {
            jsBridge.callService('openAppDetailsSettings').then()
        },
        checkPermission(permission) {
            return jsBridge.callService('checkPermission', permission).then(isGranted => isGranted === 'true')
        },
        requestPermission(permission) {
            return jsBridge.callService('requestPermission', permission).then(isGranted => isGranted === 'true')
        },
    };
})();
