import {urlFor} from './image'

export const portableTextComponents = {
  types: {
    image: ({value}) => (
      <img
        src={urlFor(value).width(900).quality(90).url()}
        alt={value.alt || ''}
        className="rounded-xl my-8"
      />
    ),

    code: ({value}) => (
      <pre className="rounded-xl bg-neutral-900 p-5 text-sm text-neutral-100 overflow-x-auto">
        <code>{value.code}</code>
      </pre>
    ),
  },

  block: {
    h1: ({children}) => (
      <h1 className="mt-12 mb-4">{children}</h1>
    ),
    h2: ({children}) => (
      <h2 className="mt-10 mb-4">{children}</h2>
    ),
    h3: ({children}) => (
      <h3 className="mt-8 mb-3">{children}</h3>
    ),
    blockquote: ({children}) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
        {children}
      </blockquote>
    ),
  },
}
