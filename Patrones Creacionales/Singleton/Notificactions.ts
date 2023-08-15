class NotificationService {
  private static instance: NotificationService

  private constructor() {}

  public static getInstance() {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService()
    }

    return NotificationService.instance
  }

  public sendNotification(message: string): string {
    return `notificación enviada, mensaje: ${message}`
  }
}

const notificationServise = NotificationService.getInstance()
const message = notificationServise.sendNotification('Notificación de prueba!')
console.log(message)
