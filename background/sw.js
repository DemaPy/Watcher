import {
    eventHandlerRegister
} from "./handlers/index.js"

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type in eventHandlerRegister) {
        eventHandlerRegister[message.type](message, sender, sendResponse)
        return true
    }
    eventHandlerRegister['notFound'](message, sender, sendResponse)
})
