import {defineType, defineArrayMember} from 'sanity'
import {ImageIcon, CodeIcon} from '@sanity/icons'

export const blockContentType = defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    // TEXT
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          {
            title: 'Link',
            name: 'link',
            type: 'object',
            fields: [
              {name: 'href', type: 'url', title: 'URL'},
            ],
          },
        ],
      },
    }),

    // IMAGE
    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt text',
        },
      ],
    }),

    // CODE BLOCK ✅
    defineArrayMember({
      type: 'code',
      icon: CodeIcon,
      options: {
        withFilename: true,
      },
    }),
  ],
})
