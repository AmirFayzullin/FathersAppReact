import {
  ISectionCopyItem,
  ISectionExplorerItem,
  ISectionItem,
  SectionItemType,
} from "@constants/content/Interface";
import {
  INotification,
  NotificationSystem,
  NotificationType,
} from "@utils/NotificationsSystem";

/**
 * Обработчик ошибки обработки клика
 * @param error объект сообщения для уведомления
 * @param defaultMessage дефолтное сообщение, если у исходного не найдена детализация
 */
function handleError(
  error: INotification,
  defaultMessage: NotificationType
): void {
  if (!error.message) {
    NotificationSystem.error(defaultMessage);
  } else {
    NotificationSystem.error(error);
  }
}

/**
 * Интерфейс описывает сигнатуру обработчика клика
 */
interface IClickHandler {
  (button: ISectionItem): Promise<void>;
}

/**
 * Функция обработчик клика кнопки копирования
 * @param button данные кнопки контента приложения
 */
async function handleCopy(button: ISectionItem): Promise<void> {
  try {
    if (!("clipboard" in window.navigator)) {
      throw new Error(
        "В вашем брузере не поддерживается ClipboardAPI. Попробуйте открыть приложение в другом браузере"
      );
    }

    const text = (button as ISectionCopyItem).text;

    if (!text) {
      throw new Error(
        `Невозможно скопировать текст в буфер обмена. Кнопке ${button.name} не задано свойство text`
      );
    }

    await navigator.clipboard.writeText(text);

    NotificationSystem.success("Скопировано!");
  } catch (err) {
    handleError(err as INotification, "Ошибка копирования в буфер обмена");
  }
}

/**
 * Функция обработчик клика кнопки открытия проводника
 * @param button данные кнопки контента приложения
 */
async function handleOpenExplorer(button: ISectionItem): Promise<void> {
  try {
    const link = (button as ISectionExplorerItem).link;

    if (!link) {
      throw new Error(
        `Невозможно открыть проводник, у кнопки ${button.name} не указано свойство link`
      );
    }

    window.open(`expproto://${link}`);
  } catch (err) {
    handleError(err as INotification, "Ошибка открытия проводника");
  }
}

/**
 * Объект с обработчиками клика кнопок по типу кнопки
 */
export const clickHandlers: Record<SectionItemType, IClickHandler> = {
  /**
   * обработчик клика кнопки копирования
   */
  [SectionItemType.copy]: handleCopy,
  /**
   * Обработчик клика кнопки открытия проводника
   */
  [SectionItemType.explorer]: handleOpenExplorer,
};
