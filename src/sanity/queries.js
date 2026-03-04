export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  mainImage,
  body,
  author->{
    name,
    image
  }
}
`

export const allPostsQuery = `
*[_type == "post" && defined(slug.current) && defined(publishedAt)] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  publishedAt
}
`
