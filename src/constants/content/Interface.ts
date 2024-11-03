/**
 * Перечисление типов элементов секции
 */
export enum SectionItemType {
  /**
   * Тип "copy", кнопка копирования текста в буфер обмена
   */
  copy = "copy",
  /**
   * Тип "explorer", кнопка открытия проводника
   */
  explorer = "explorer",
}

/**
 * Интерфейс описывает элемент секции
 */
export interface ISectionItem {
  /**
   * Тип элемента
   */
  type: SectionItemType;
  /**
   * Название элемента
   */
  name: string;
}

/**
 * Интерфейс описывает элемент секции, кнопку копирования текста в буфер обмена
 */
export interface ISectionCopyItem extends ISectionItem {
  /**
   * Тип элемента
   */
  type: SectionItemType.copy;
  /**
   * Текст для копирования
   */
  text: string;
}

/**
 * Интерфейс описывает элемент секции, кнопку открытия проводника
 */
export interface ISectionExplorerItem extends ISectionItem {
  /**
   * Тип элемента
   */
  type: SectionItemType.explorer;
  /**
   * Путь до папки
   */
  link: string;
}

export type SectionItemUnionType = ISectionCopyItem | ISectionExplorerItem;

/**
 * Интерфейс описывает узел, обладающий дочерними элементами
 */
export interface IParent<T extends Array<any>> {
  /**
   * Дочерние элементы
   */
  children: T;
}

/**
 * Интерфейс описывает секцию
 */
export interface ISection extends IParent<SectionItemUnionType[]> {
  /**
   * Название секции
   */
  name: string;
}

/**
 * Интерфейс описывает группу
 */
export interface IGroup extends IParent<ISection[]> {
  /**
   * Название группы
   */
  name: string;
}

/**
 * Интерфейс описывает вкладку
 */
export interface ITab extends IParent<IGroup[]> {
  /**
   * Название вкладки
   */
  name: string;
}

export type ContentType = ITab[];
