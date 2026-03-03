import { useEffect } from 'react'
import { SITE_URL } from '@/lib/utils'

interface SEOProps {
  title: string
  description: string
  canonical: string
  schema?: object | object[]
}

/**
 * Injects per-page JSON-LD schema into <head>.
 * React 19 natively hoists <title>/<meta>/<link> tags;
 * this component handles the <script> schema separately via useEffect.
 */
function SchemaScript({ schema }: { schema: object | object[] }) {
  useEffect(() => {
    const schemas = Array.isArray(schema) ? schema : [schema]
    const tags: HTMLScriptElement[] = schemas.map((s) => {
      const el = document.createElement('script')
      el.type = 'application/ld+json'
      el.textContent = JSON.stringify(s)
      el.setAttribute('data-seo', 'true')
      document.head.appendChild(el)
      return el
    })
    return () => {
      tags.forEach((el) => el.remove())
    }
  }, [schema])

  return null
}

export function SEO({ title, description, canonical, schema }: SEOProps) {
  const fullUrl = `${SITE_URL}${canonical}`

  return (
    <>
      {/* React 19 hoists these to <head> automatically */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Party Bus Cape Cod" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD Schema (injected via useEffect) */}
      {schema && <SchemaScript schema={schema} />}
    </>
  )
}
