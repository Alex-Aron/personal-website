import { serve } from "bun";
import index from "./index.html";

const server = serve({
  routes: {
    // Serve static files from public directory
    "/headshot.jpg": () => new Response(Bun.file("public/headshot.jpg")),
    "/Alex_s.pdf": () => new Response(Bun.file("public/Alex_s.pdf")),
    
    // Serve index.html for all unmatched routes (SPA routing)
    "/*": index,
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Portfolio server running at ${server.url}`);
