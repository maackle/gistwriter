
/**
 * The name of the file to use for the blog post.
 * @type {String}
 */
const postFilename = 'post.md'


/**
 * Get post content for this gist.
 * We look for a file named postFilename and use its contents.
 * If the file does not exists, this is not treated as a blog post.
 * @param  {Object} gist Single gist object from API
 * @return {String}
 */
const getPost = gist => gist.files[postFilename]
