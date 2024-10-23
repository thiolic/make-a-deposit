import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
    base: '/make-a-deposit/',
    plugins: [react()],
    resolve: {
        alias: {
            "~/": `${path.resolve(__dirname, "src")}/`,
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler",
            },
        },
    },
});
