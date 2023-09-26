const { createApp } = Vue

createApp({
    data() {
        return {
            userAgent: navigator.userAgent,
        }
    },
    methods: {
        onBtnAlert() {
            alert("提示消息")
            confirm("确认框")
            prompt("请输入", "这里是默认值")
        },
    }
}).mount('#app')
