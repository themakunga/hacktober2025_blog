/* eslint-disable-file @typescript-eslint/no-explicit-any */

export function transformImgSrc(src: string): string {
  if (!src) return '';
  if (src.startsWith('http')) return src;

  const cleanSrc = src.replace('./', '');
  return `https://raw.githubusercontent.com/themakunga/hacktober2025_blog_post/main/${cleanSrc}`;
}

export function transformYaml(body) {
  return body.replace('./', 'https://raw.githubusercontent.com/themakunga/hacktober2025_blog_post/main/authors/' )
}

export function transformMarkdownBody(body: string): {body: string, count: number} {
  let transformCount = 0;
  let transformedBody = body;

  transformedBody = transformedBody.replace(
    /!\[(.*?)\]\((\.\.?\/?.*?\.(?:png|jpg|jpeg|gif|svg|webp|avif))\)/g,
    (_match: string, alt: string, src: string) => {
      transformCount += 1;
      return `![${alt}](${transformImgSrc(src)})`;
    }
  );

  transformedBody = transformedBody.replace(
    /<img[^>]+src="([^">]+)"[^>]*>/g,
    (match: string, src: string) => {
      if (!src.startsWith('http')) {
        transformCount += 1;
        return match.replace(src, transformImgSrc(src));
      }
      return match;
    }
  );

  return {body: transformedBody, count: transformCount}
}

export function transformContentFile(file: any) {
  const imagefields = ['cover', 'image', 'avatar', 'banner', 'thumbnail'];

  let transformedCount = 0;

  if (file.frontmatter) {
    for (const field of imagefields) {
      if (file.frontmatter[field] && typeof file.frontmatter[field] === 'string') {
        const originalValue = file.frontmatter[field];
        if (!originalValue.startsWith('http')) {
          file.frontmatter[field] = transformImgSrc(originalValue);
          transformedCount += 1;
          console.log(`🔄 Frontmatter ${field}: ${originalValue} → ${file.frontmatter[field]}`);
        }
      }
    }
  }

  if (file.frontmatter.socials && Array.isArray(file.frontmatter.socials)) {
    file.frontmatter.socials = file.frontmatter.socials.map((social: {name: string, url: string, icon: string}) => {
      if (social.icon && !social.icon.startsWith('http')) {
        transformedCount += 1;
        return {
          ...social,
          icon: transformImgSrc(social.icon),
        };
      }
      return social;
    });
  }

  const bodytransformations = transformMarkdownBody(file.body);
  file.body = bodytransformations.body;
  transformedCount += bodytransformations.count;

  if (transformedCount > 0) {
    console.log(`✅ Transformadas ${transformedCount} imágenes en: ${file.id}`);
  }
}

export function countWordsAndTime(file): {readingTime: number, wordsCount: number} {
  const wpm = 180; // words per minute

  const text = typeof file.body === 'string' ? file.body : '';

  const wordsCount = text.split(/\s+/).length;

  const readingTime = Math.ceil(wordsCount / wpm)

  return {wordsCount, readingTime}


}

