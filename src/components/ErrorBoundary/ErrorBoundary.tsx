import { Alert, Center, Text } from "@mantine/core";
import React, { ReactElement } from "react";

/**
 * Интерфейс описывает пропсы обработчика ошибок
 */
interface IErrorBoundaryProps {
  /**
   * Дочерние элементы
   */
  children: ReactElement | ReactElement[];
}

/**
 * Интерфейс описывает стейт обработчика ошибок
 */
interface IErrorBoundaryState {
  /**
   * Есть ли ошибка
   */
  hasError: boolean;
  /**
   * Объект ошибки
   */
  error: Error | null;
}

/**
 * Элемент обработчика ошибок
 */
export class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    this.setState({
      error,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Center w="100vw">
          <Alert
            variant="light"
            color="red"
            title={<Text size="xl">{this.state.error?.name || "Error"}</Text>}
            miw="30vw"
          >
            <Text size="lg">
              {this.state.error?.message || "Something went wrong"}
            </Text>
          </Alert>
        </Center>
      );
    }

    return this.props.children;
  }
}
