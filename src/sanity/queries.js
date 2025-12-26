export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  body,
  author->{
    name,
    image
  }
}
`

export const allPostsQuery = `
*[_type == "post"] {
  title,
  "slug": slug.current,
  publishedAt
}
`
