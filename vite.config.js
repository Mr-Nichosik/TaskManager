import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/TaskManager/",

    build:
    {
        rollupOptions:
        {
            input:
            {
                main: resolve(__dirname, "index.html"),
                trash: resolve(__dirname, "trash.html"),
            },
        },
    },
});