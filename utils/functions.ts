/* eslint-disable-file @typescript-eslint/no-explicit-any */

import type { ContentFile } from "@nuxt/content";

// Expresión regular que captura por separado el "cover: " y la ruta de la imagen
const regexImages = /(cover: )(\.\/images\/pictures\/[^/\s]+\.(jpg|jpeg|png|gif|bmp|webp|svg))/g;
const regexImageMd = /!\[(.*?)\]\((\.\.?\/?.*?\.(?:png|jpg|jpeg|gif|svg|webp|avif))\)/g;

export function transformImgSrc(src: string): string {
  if (!src) return '';
  if (src.startsWith('http')) return src;

  const cleanSrc = src.replace('./', '');
  return `https://raw.githubusercontent.com/themakunga/hacktober2025_blog_post/main/posts/${cleanSrc}`;
}

export function transformYaml(body: string): string {
  return body.replace('./', 'https://raw.githubusercontent.com/themakunga/hacktober2025_blog_post/main/authors/')
}

export function transformContentFileBody(body: string): string {
  let transformedBody = body.replace(
    regexImageMd,
    (_match: string, alt: string, src: string) => {
      return `![${alt}](${transformImgSrc(src)})`;
    }
  );

  transformedBody = transformedBody.replace(
    regexImages,
    (_match: string, coverText: string, imagePath: string) => {
      // Preservar "cover: " y transformar solo la ruta de la imagen
      return `${coverText}${transformImgSrc(imagePath)}`;
    }
  );

  return transformedBody;
}

export function countWordsAndTime(file: ContentFile): { readingTime: number, wordsCount: number } {
  const wpm = 180; // words per minute

  const text = typeof file.body === 'string' ? file.body : '';

  const wordsCount = text.split(/\s+/).length;

  const readingTime = Math.ceil(wordsCount / wpm);

  return { wordsCount, readingTime };
}
