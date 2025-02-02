class Sender {
  async #send(payload) {
    const response = await chrome.runtime.sendMessage(payload);
    return response;
  }

  async createSubscription(payload) {
    const data = {
      // TODO: make types the same in both sw and content.
      type: "subscribe",
      ...payload,
    };
    const response = await this.#send(data);
    return response;
  }
}
