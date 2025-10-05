export function isNewPost(postDate: Date): boolean {
  if (!postDate) return false;

  const postDateTime = new Date(postDate).getTime();

  const weekAgo = Date.now() - (3 * 24 * 60 * 60 * 1000);

  return postDateTime > weekAgo;
}


export function formatDate(dateString: string): string {
  if (!dateString) return '';

const date = new Date(dateString);

  return date.toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
