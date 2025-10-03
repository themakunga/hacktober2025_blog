export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.dev && import.meta.client) {
    console.log('[Plugin] - content-debug loaded');
    nuxtApp.provide('contentDebug', {
      logImageUrls: (content: string) => {
        const imageMatches = content.match(/!\[.*?\]\(.*?\)/g) || [];
        console.log(`🖼️ Imágenes encontradas:`, imageMatches);
        return imageMatches;
      }
    });
  }
})
