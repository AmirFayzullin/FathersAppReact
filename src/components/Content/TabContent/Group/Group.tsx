import { IGroup } from "@constants/content/Interface";
import { Flex, Text } from "@mantine/core";
import { ReactElement, useMemo } from "react";
import { Section } from "./Section/Section";

/**
 * Интерфейс описывает пропсы компонента Group
 */
interface IGroupProps {
  /**
   * Данные группы контента приложения
   */
  group: IGroup;
}

/**
 * Компонент группы
 * @param {IGroupProps} props - пропсы
 */
export function Group(props: IGroupProps): ReactElement {
  const sections = useMemo(
    () => props.group.children.map((s) => <Section key={s.name} section={s} />),
    [props.group.children]
  );
  return (
    <Flex direction="column" align="center" gap="md">
      <Text size="xl" fw="bolder">
        {props.group.name}
      </Text>
      {sections}
    </Flex>
  );
}
