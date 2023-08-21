import React from 'react'

type Props = {
  title?: string
}

export default function aa({ title }: Props) {
  return (
    <div>
      aa-{'>'}
      {title}
    </div>
  )
}
