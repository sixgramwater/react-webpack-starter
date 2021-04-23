import React, { FunctionComponent } from 'react'
import Button from './components/Button'

export interface appInterface {
  username: string,
  lang: string,
}
const app = (props: appInterface) => {
  return (
    <>
      <h1>Hello, {props.username}, welcome to {props.lang}</h1>
      <Button onClick={()=>{console.log('CLICKED')}}>CLICK ME</Button>
    </>
  )
}

export default app;