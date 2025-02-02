class Watcher {
  sender = null;

  constructor(Sender) {
    this.sender = new Sender();
  }

  subscribe({ nodeSelector, schedule }) {
    const node = document.querySelector(nodeSelector);
    const textContent = node.textContent;
    const watchObejct = {
      id: "2",
      label: "Track price",
      selector: nodeSelector,
      lastChecked: new Date().toJSON().split("T"),
      metadata: {
        changeId: Date.now() / 2,
        dateCheck: new Date().toJSON().split("T")[1],
        newContent: "",
        oldContent: textContent,
        subscriptionId: "2",
      },
      pageUrl: location.href,
      schedule: schedule,
    };
    this.sender.createSubscription(watchObejct).then((data) => {
      setTimeout(() => {
        document.querySelector(nodeSelector).textContent =
          data.metadata.newContent;
      }, 2000);
    });
  }
}
