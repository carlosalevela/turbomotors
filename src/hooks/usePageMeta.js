import { useEffect } from 'react'

const SITE_NAME = 'Turbo Motors'

function setMetaTag(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

// Actualiza el <title> y la meta description de cada página para SEO.
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME
    if (description) setMetaTag('description', description)
  }, [title, description])
}
