import { ISection } from "@constants/content/Interface";
import { Flex, Paper, Text } from "@mantine/core";
import { ReactElement, useMemo } from "react";
import { Button } from "./Button/Button";

/**
 * Интерфейс описывает пропсы компонента Section
 */
interface ISectionProps {
  /**
   * Данные секции контента приложения
   */
  section: ISection;
}

/**
 * Компонент секции
 * @param props пропсы
 * @returns разметка
 */
export function Section(props: ISectionProps): ReactElement {
  const buttons = useMemo(
    () => props.section.children.map((b) => <Button key={b.name} button={b} />),
    [props.section.children]
  );
  return (
    <Paper bg="dark.5" w="100%">
      <Flex direction="column" p="sm" gap="sm">
        <Text size="lg">{props.section.name}</Text>
        {buttons}
      </Flex>
    </Paper>
  );
}
