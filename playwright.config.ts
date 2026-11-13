import { defineConfig, devices } from "@playwright/test";

const PORT = 4321;
const baseURL = `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: "tests/visual",
  snapshotPathTemplate: "{testDir}/reference/{testFilePath}/{arg}{ext}",
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.02,
    },
  },
  webServer: {
    command: "npm run build && npm run preview -- --host 127.0.0.1 --port 4321",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
  use: {
    baseURL,
    colorScheme: "light",
  },
  projects: [
    {
      name: "mobile",
      use: {
        ...devices["Pixel 5"],
        browserName: "chromium",
        viewport: { width: 390, height: 844 },
      },
    },
    {
      name: "desktop",
      use: {
        browserName: "chromium",
        viewport: { width: 1065, height: 1200 },
        deviceScaleFactor: 1,
      },
    },
  ],
});
