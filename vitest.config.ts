import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    testTimeout: 30000,
    environment: "jsdom",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      reportsDirectory: "./coverage",
      exclude: [
        "**/config.ts",
        "**/config.ts",
        "**.eslintrc.js",
        "**/tailwind.config.ts",
        "**/.next/**",
        "**/app/layout.tsx",
        "**/app/data/**",
        "**/app/providers.tsx",
        "**/__tests__/**",
        "**/__mocks__/**",
        "**/icons/**",
        "**/interface/**",
        "**/app/queryClient.tsx",
        "vitest.config.ts",
        "next.config.ts",
      ],
      include: ["**/*.{ts,tsx,jsx}"],
    },
  },
});
