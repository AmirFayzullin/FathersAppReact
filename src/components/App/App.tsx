import { Content } from "@components/Content/Content";
import { Info } from "@components/Info/Info";
import { Spotlight } from "@components/Spotlight/Spotlight";
import { CONTENT } from "@constants/content/content";
import { AppShell, ScrollArea } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { validateContent } from "@utils/validateContent";
import { useEffect } from "react";

/**
 * Корневой компонент приложения
 * @returns {ReactElement}
 */
function App() {
  useEffect(() => {
    validateContent(CONTENT);
  }, []);

  return (
    <>
      <AppShell>
        <ScrollArea h="100vh">
          <AppShell.Main w="100vw" p="sm">
            <Content />
          </AppShell.Main>
        </ScrollArea>
        <Notifications />
        <Info />
        <Spotlight />
      </AppShell>
    </>
  );
}

export default App;
