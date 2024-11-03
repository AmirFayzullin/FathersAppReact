import { SectionItemType } from "@constants/content/Interface";
import { FC } from "react";
import { IconClipboard, IconFolder } from "@tabler/icons-react";

/**
 * Объект с иконками кнопки в зависимости от ее типа
 */
export const icons: Record<SectionItemType, FC> = {
  /**
   * Иконка кнопки копирования в буфер обмена
   */
  [SectionItemType.copy]: IconClipboard,
  /**
   * Иконка кнопки открытия проводника
   */
  [SectionItemType.explorer]: IconFolder,
};
