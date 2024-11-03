import { ISectionItem } from "@constants/content/Interface";
import { Button as MantineButton } from "@mantine/core";
import { clickHandlers } from "./handlers";
import { ReactElement } from "react";
import { icons } from "./icons";

/**
 * Интерфейс описывает пропсы компонента Button
 */
interface IButtonProps {
  /**
   * Данные кнопки контента приложения
   */
  button: ISectionItem;
}

/**
 * Компонент нопкаи
 * @param props пропсы
 * @returns
 */
export function Button(props: IButtonProps): ReactElement {
  const handleClick = () => {
    clickHandlers[props.button.type](props.button);
  };

  const Icon = icons[props.button.type];

  return (
    <MantineButton variant="light" onClick={handleClick} leftSection={<Icon />}>
      {props.button.name}
    </MantineButton>
  );
}
