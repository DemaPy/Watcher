## Watcher
> Track anything you want in the internet, subscribe yourself or others for changes.

### App functionality
> User can have multiple subscriptions for 1 page. \
> When something has changed, user will be notified via email. \
> User can save subscription. \
> User can set execution time. \
> User can set email addresses: \
  -email should be verified \
  -email should confirm notification

### App models
```
interface SubscriptionMetadata {
    changeId: string
    subscriptionId: string
    dateCheck: string
    oldContent: string
    newContent: string
}
```
```
interface ScheduleOptions {
    repeatEvery: string
    daysOfWeek: string[]
    exceptions: string[]
}
```
```
interface SubscriptionSchedule {
    cron: string
    timeZone: string
    options: ScheduleOptions
}
```
```
interface Subscription {
    id: string
    label: string
    pageUrl: string
    selector: string
    schedule: SubscriptionSchedule 
    lastChecked: string
    metadata: SubscriptionMetadata
}
```
```
interface User {
    email: string
    subscriptions: Subscription[]
}
```
```
interface Email {
    label: string
    emailId: string
    email: string
    verified: boolean
    verifiedAt: string
    createdAt: string
}
```
```
interface EmailSubscription {
    linkId: string
    emailId: string
    subscriptionId: string
    receiveNotifications: boolean
}
```

### Models map
> thanks to https://github.com/3rd for implementing such tool: https://tsdiagram.com/ \

<img width="1726" alt="image" src="https://github.com/user-attachments/assets/ac528269-de38-48d9-9aab-9ee982270580" />
