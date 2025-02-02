import { handleSubscribe } from "./subscribe.js"
import { notFound } from "./notFound.js"

export const eventHandlerRegister = {
    'notFound': notFound,

    'subscribe': handleSubscribe,
}