import { clickHandlers } from "@components/Content/TabContent/Group/Section/Button/handlers";
import { icons } from "@components/Content/TabContent/Group/Section/Button/icons";
import { CONTENT } from "@constants/content/content";
import {
  Spotlight as MantineSpotlight,
  SpotlightActionData,
  SpotlightActionGroupData,
} from "@mantine/spotlight";
import { ReactElement, useMemo } from "react";

function buildActions(): (SpotlightActionGroupData | SpotlightActionData)[] {
  return CONTENT.map((tab) => {
    const actions = tab.children.map((group) =>
      group.children.map((section) =>
        section.children.map((item): SpotlightActionData => {
          const path = `${tab.name} > ${group.name} > ${section.name} > ${item.name}`;
          const Icon = icons[item.type];

          return {
            id: path,
            label: item.name,
            description: path,
            onClick: () => clickHandlers[item.type](item),
            leftSection: <Icon />,
          };
        })
      )
    );

    return {
      group: tab.name,
      actions: actions.flat(3),
    };
  }).flat();
}

/**
 * Компонент поиска
 * @returns
 */
export function Spotlight(): ReactElement {
  const actions = useMemo(() => buildActions(), []);

  return (
    <MantineSpotlight
      actions={actions}
      shortcut="Ctrl + k"
      nothingFound="Nothing found..."
      highlightQuery
      limit={5}
      searchProps={{
        placeholder: "Search...",
      }}
      styles={{
        inner: {
          left: 0,
        },
      }}
    />
  );
}
