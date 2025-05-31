import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/Projet-OC-Kasa/", // Le nom EXACT du repo GitHub
    plugins: [react()],
});
