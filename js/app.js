const { createApp } = Vue

createApp({
    data() {
        return {
            runtimeInfo: window.jsBridgeApi.runtimeInfo,
            userAgent: navigator.userAgent,
            demoImageBase64: 'data:image/png;base64,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',
        }
    },
    methods: {
        onBtnShowAlertDialog() {
            alert('这是 Alert 对话框')
        },
        onBtnShowConfirmDialog() {
            confirm('这是 Confirm 对话框 ')
        },
        onBtnShowPromptDialog() {
            prompt('这是 Prompt 对话框，请输入：', '这是默认值')
        },
        onBtnShowToast() {
            jsBridgeApi.showToast('这是 Toast 消息')
        },
    },
}).mount('#app')
