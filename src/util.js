
/**
 * The name of the file to use for the blog post.
 * @type {String}
 */
export const postFilename = 'post.md'


export const getExcerpt = content => {
  const len = 140;
  const excerpt = content.substring(0, 100);
  if (content.length < len - 3) {
    return excerpt;
  } else {
    return excerpt + '...'
  }
}