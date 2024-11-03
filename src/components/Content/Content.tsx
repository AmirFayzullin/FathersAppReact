import { CONTENT } from "@constants/content/content";
import { ContentType, ITab } from "@constants/content/Interface";
import { Tabs, Text } from "@mantine/core";
import { ReactElement, useEffect, useMemo } from "react";
import { TabContent } from "./TabContent/TabContent";

/**
 * Интерфейс описывает возвращаемое из buildTabs значение
 */
interface IBuildTabsReturn {
  /**
   * Кнопки вкладок
   */
  tabs: ReactElement[];
  /**
   * Контент вкладок
   */
  contents: ReactElement[];
}

/**
 * Функция строит вкладки по контенту
 * @param {ContentType} content - контент приложения
 * @returns {IBuildTabsReturn} объект с конфигурациями кнопок вкладок и их контентом
 */
function buildTabs(content: ContentType): IBuildTabsReturn {
  return content.reduce(
    (acc: IBuildTabsReturn, cur: ITab): IBuildTabsReturn => {
      return {
        tabs: [
          ...acc.tabs,
          <Tabs.Tab key={cur.name} value={cur.name} ml="sm">
            <Text size="lg" fw="bold">
              {cur.name}
            </Text>
          </Tabs.Tab>,
        ],
        contents: [
          ...acc.contents,
          <Tabs.Panel key={cur.name} value={cur.name}>
            <TabContent tab={cur} />
          </Tabs.Panel>,
        ],
      };
    },
    {
      tabs: [],
      contents: [],
    }
  );
}

/**
 * Компонент вкладок
 * @returns {ReactElement}
 */
export function Content(): ReactElement {
  const { contents, tabs } = useMemo(() => buildTabs(CONTENT), []);
  return (
    <>
      <Tabs
        variant="outline"
        keepMounted={false}
        defaultValue={CONTENT[0].name}
      >
        <Tabs.List>{tabs}</Tabs.List>

        {contents}
      </Tabs>
    </>
  );
}
