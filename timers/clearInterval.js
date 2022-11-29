const timeOut = 1000
const checking = () => console.log('cheking')

let interval = setInterval(checking, timeOut)

setTimeout ( () => {
    clearInterval(interval)
}, 5000)