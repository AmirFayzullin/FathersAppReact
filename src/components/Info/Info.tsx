import {
  Container,
  Kbd,
  Paper,
  Text,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { ReactElement } from "react";

/**
 * Компонент содержимого подсказки, показываемого по наведению
 */
function TooltipContent(): ReactElement {
  return (
    <Paper p="sm" radius="md" bg="dark.5">
      <Text c="white">
        Spotlight - <Kbd>Ctrl + k</Kbd>
      </Text>
    </Paper>
  );
}

/**
 * Компонент подсказки
 * @returns
 */
export function Info(): ReactElement {
  const mantineTheme = useMantineTheme();

  return (
    <Container pos="fixed" right={10} bottom={10}>
      <Tooltip label={<TooltipContent />} bg="transparent">
        <IconInfoCircle
          size={32}
          color={mantineTheme.colors.blue[5]}
          cursor="pointer"
        />
      </Tooltip>
    </Container>
  );
}
