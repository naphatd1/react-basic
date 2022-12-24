import React,{useEffect, useState} from 'react'

type AppHeaderProps = {
  title: string
  year?: number
}

function AppHeader({ title, year }: AppHeaderProps) {
  const [isShow, setIsShow] = useState(false)
  useEffect(() => {
    console.log('use effect');
  })
  useEffect(() => {
    console.log('use effect 2');
  },[])
  useEffect(() => {
    console.log('use effect 3');
  },[isShow])

  const mouseOver = () => {
    setIsShow(!isShow)
  }
 
  return (
    <>
      <div onMouseOver={mouseOver}>
        {title}&#64;{year}
      </div>
     {isShow && <p>Hello App Header</p>}
    </>
  )
}

export default AppHeader
