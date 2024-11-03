import { NotificationData, notifications } from "@mantine/notifications";

export interface INotification extends Error {}

export type NotificationType = INotification | string;

export class NotificationSystem {
  static error(notification: NotificationType) {
    notifications.show({
      ...NotificationSystem.getBaseConfig(notification),
      color: "red",
    });
  }

  static success(notification: NotificationType) {
    notifications.show({
      ...NotificationSystem.getBaseConfig(notification),
      color: "green",
    });
  }

  private static getBaseConfig(
    notification: NotificationType
  ): NotificationData {
    if (typeof notification === "string") {
      return {
        title: notification,
        message: "",
      };
    }

    return {
      title: notification.name,
      message: notification.message,
    };
  }
}
