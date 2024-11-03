import {
  ContentType,
  IGroup,
  ISection,
  ISectionCopyItem,
  ISectionExplorerItem,
  ISectionItem,
  ITab,
  SectionItemType,
} from "@constants/content/Interface";

const buttonValidator: Record<
  SectionItemType,
  (item: ISectionItem) => boolean
> = {
  [SectionItemType.copy]: validateCopyButton,
  [SectionItemType.explorer]: validateExplorerButton,
};

function isString(value: any): boolean {
  return typeof value === "string";
}

function isArray(value: any): boolean {
  return value instanceof Array;
}

function validateCopyButton(sectionItem: ISectionItem): boolean {
  const text = (sectionItem as ISectionCopyItem).text;
  if (!text || !isString(text)) {
    throw new Error(
      `Некорректное значение свойства text кнопки ${sectionItem.name}`
    );
  }

  return true;
}

function validateExplorerButton(sectionItem: ISectionItem): boolean {
  const link = (sectionItem as ISectionExplorerItem).link;
  if (!link || !isString(link)) {
    throw new Error(
      `Некорректное значение свойства link кнопки ${sectionItem.name}`
    );
  }

  return true;
}

function validateSectionItem(sectionItem: ISectionItem): boolean {
  if (!isString(sectionItem.name) || !sectionItem.name) {
    throw new Error(`Некорректное значение свойства name кнопки`);
  }

  if (
    !sectionItem.type ||
    !Object.values(SectionItemType).includes(sectionItem.type)
  ) {
    throw new Error(
      `Некорректное значение свойства type кнопки ${sectionItem.name}`
    );
  }

  return true && buttonValidator[sectionItem.type](sectionItem);
}

function validateSection(section: ISection): boolean {
  if (!isString(section.name) || !section.name) {
    throw new Error(`Некорректное значение свойства name секции`);
  }

  if (!isArray(section.children)) {
    throw new Error(
      `Свойство children секии ${section.name} должны быть массивом`
    );
  }

  return true && section.children.every(validateSectionItem);
}

function validateGroup(group: IGroup): boolean {
  if (!isString(group.name) || !group.name) {
    throw new Error(`Некорректное значение свойства name группы`);
  }

  if (!isArray(group.children)) {
    throw new Error(
      `Свойство children группы ${group.name} должны быть массивом`
    );
  }

  return true && group.children.every(validateSection);
}

function validateTab(tab: ITab): boolean {
  if (!isString(tab.name) || !tab.name) {
    throw new Error(`Некорректное значение свойства name вкладки`);
  }

  if (!isArray(tab.children)) {
    throw new Error(
      `Свойство children вкладки ${tab.name} должны быть массивом`
    );
  }

  return true && tab.children.every(validateGroup);
}

export function validateContent(content: ContentType) {
  return content.every(validateTab);
}
