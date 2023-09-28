/**
 * WebRunner - JS SDK
 */
(function () {





    let jsBridgeApi = {
        runtimeInfo: {
            platform: 'web',
            isNative: false,
            version: {
                name: '0.0.0',
                code: 0,
            },
        },
        showToast(message) {
            console.debug('Toast: ', message);
        },
        openShare(title, text) {
            console.debug('title: ', title, '\ntext: ', text)
        },
    };



    function createApiForAndroid(jsBridgeApi, androidJsBridgeApi) {
        window.androidJsBridgeCallback = {
            // TODO
        };

        jsBridgeApi.runtimeInfo = {
            platform: 'android',
            isNative: true,
            version: {
                name: androidJsBridgeApi.getVersionName(),
                code: androidJsBridgeApi.getVersionCode(),
            },
        };

        jsBridgeApi.showToast = function (message) {
            androidJsBridgeApi.showToast(message);
        };

        return jsBridgeApi;
    }






    if (!!window.androidJsBridgeInternalApi) {
        window.androidJsBridgeInternalCallback = (callbackId, ...args) => {

        }






    } else {


    }
})();
