import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
const App = lazy(() => import("@components/App/App"));
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/spotlight/styles.css";
import "./index.css";
import { createTheme, MantineProvider } from "@mantine/core";
import { ErrorBoundary } from "@components/ErrorBoundary/ErrorBoundary";
import { Loader } from "@components/Loader/Loader";

const theme = createTheme({
  defaultRadius: "md",
  focusRing: "never",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <ErrorBoundary>
        <Suspense
          fallback={
            <Loader
              root={{
                w: "100vw",
                h: "100vh",
              }}
            />
          }
        >
          <App />
        </Suspense>
      </ErrorBoundary>
    </MantineProvider>
  </StrictMode>
);
