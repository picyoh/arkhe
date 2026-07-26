// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
    integrations: [icon({
        include: {
            mdi: ["*"],
        },
    })],
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
