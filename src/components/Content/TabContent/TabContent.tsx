import { ITab } from "@constants/content/Interface";
import { SimpleGrid } from "@mantine/core";
import { ReactElement, useEffect, useMemo } from "react";
import { Group } from "./Group/Group";

const MAX_GROUPS_COUNT = 3;

/**
 * Функция валидирует пропсы компонента TabContent.
 * Если количество групп более 3, будет выброшена ошибка
 * @param {ITabContentProps} props - пропсы копонента TabContent
 */
function validate(props: ITabContentProps): void {
  const groupsCount = props.tab.children.length;
  if (groupsCount > 3) {
    throw new Error(
      `Вкладка "${props.tab.name}" содержит ${groupsCount} групп(-ы). Допустимое количество ${MAX_GROUPS_COUNT}`
    );
  }
}

/**
 * Интерфейс описывает пропсы компонента TabContentProps
 */
interface ITabContentProps {
  /**
   * Данные вкладки
   */
  tab: ITab;
}

/**
 * Компонент контента вкладки
 * @param {ITabContentProps} props - пропсы
 * @returns
 */
export function TabContent(props: ITabContentProps): ReactElement {
  useEffect(() => validate(props), [props]);

  const groups = useMemo(
    () => props.tab.children.map((g) => <Group key={g.name} group={g} />),
    [props.tab.children]
  );

  return (
    <SimpleGrid cols={MAX_GROUPS_COUNT} spacing="md" p="md">
      {groups}
    </SimpleGrid>
  );
}
