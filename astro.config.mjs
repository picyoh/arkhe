// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-iconset";

// https://astro.build/config
export default defineConfig({
    server: {
        open: true
    },
    integrations: [icon()],
    fonts: [{
        provider: fontProviders.fontsource(),
        name: "Bricolage Grotesque",
        cssVariable: "--font-bricolage",
    },
    {
        provider: fontProviders.fontsource(),
        name: "Geist",
        cssVariable: "--font-geist",
    }]
});