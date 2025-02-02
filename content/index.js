navigation.addEventListener("navigate", (e) => {
  const watcher = new Watcher(Sender);

  watcher.subscribe({
    nodeSelector: '[data-testid="ad-price-container"] > h3',
    schedule: {
      cron: "0 9 * * *",
      timeZone: "UTC",
      options: {
        repeatEvery: "daily",
        daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        exceptions: ["2025-01-01"],
      },
    },
  });
});
