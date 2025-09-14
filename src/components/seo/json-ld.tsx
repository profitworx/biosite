type JsonLdProps = {
  data: unknown | unknown[]
  id?: string
}

export function JsonLd({ data, id }: JsonLdProps) {
  const json = JSON.stringify(data)
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
      {...(id ? { id } : {})}
    />
  )
}
