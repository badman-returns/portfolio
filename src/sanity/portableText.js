import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter'
import {oneDark} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx'
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import markup from 'react-syntax-highlighter/dist/cjs/languages/prism/markup'
import yaml from 'react-syntax-highlighter/dist/cjs/languages/prism/yaml'
import {urlFor} from './image'

SyntaxHighlighter.registerLanguage('javascript', javascript)
SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('typescript', typescript)
SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('json', json)
SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('html', markup)
SyntaxHighlighter.registerLanguage('markup', markup)
SyntaxHighlighter.registerLanguage('yaml', yaml)

const languageMap = {
  js: 'javascript',
  ts: 'typescript',
  sh: 'bash',
  shell: 'bash',
  yml: 'yaml',
}

const resolveLanguage = (language) => {
  if (!language) return 'javascript'

  const normalizedLanguage = String(language).trim().toLowerCase()

  if (!normalizedLanguage || normalizedLanguage === 'text' || normalizedLanguage === 'plain') {
    return 'javascript'
  }

  return languageMap[normalizedLanguage] || normalizedLanguage
}

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
      <SyntaxHighlighter
        language={resolveLanguage(value?.language)}
        style={oneDark}
        useInlineStyles
        customStyle={{
          borderRadius: '0.75rem',
          fontSize: '0.875rem',
          marginTop: '2rem',
          marginBottom: '2rem',
          padding: '1.25rem',
        }}
        showLineNumbers={false}
        wrapLongLines
      >
        {value?.code || ''}
      </SyntaxHighlighter>
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
