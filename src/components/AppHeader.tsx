import React from 'react'

type AppHeaderProps = {
  title: string,
  year?: number
}

function AppHeader({ title, year }: AppHeaderProps) {
  return <div>{title}&#64;{year}</div>
}

export default AppHeader
