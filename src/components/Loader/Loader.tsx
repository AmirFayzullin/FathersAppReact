import { ReactElement } from "react";
import {
  Flex,
  FlexProps,
  LoaderProps,
  Loader as MantineLoader,
} from "@mantine/core";

/**
 * Интерфейс описывает пропсы компонента Loader
 */
interface ILoaderProps {
  /**
   * пропсы корневого компонента Flex
   */
  root?: FlexProps;
  /**
   * пропсы внутреннего компонента Loader
   */
  inner?: LoaderProps;
}

/**
 * Компонент прелоадера
 * @param props пропсы
 * @returns
 */
export function Loader(props: ILoaderProps): ReactElement {
  return (
    <Flex w="100%" h="100%" align="center" justify="center" {...props.root}>
      <MantineLoader type="dots" {...props.inner} />
    </Flex>
  );
}
