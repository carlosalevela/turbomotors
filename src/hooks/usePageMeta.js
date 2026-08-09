import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_NAME = 'Turbo Motors'
const SITE_URL = 'https://turbomotors.vercel.app'

function setMetaTag(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setMetaProperty(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setCanonical(url) {
  let tag = document.querySelector('link[rel="canonical"]')
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', 'canonical')
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', url)
}

// Actualiza el <title>, meta description, canonical y og:url de cada página para SEO.
export default function usePageMeta(title, description) {
  const { pathname } = useLocation()

  useEffect(() => {
    const url = `${SITE_URL}${pathname}`
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME
    if (description) setMetaTag('description', description)
    setCanonical(url)
    setMetaProperty('og:url', url)
    setMetaProperty('og:title', title ? `${title} | ${SITE_NAME}` : SITE_NAME)
    if (description) setMetaProperty('og:description', description)
  }, [title, description, pathname])
}
