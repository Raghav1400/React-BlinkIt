import React from 'react'
import { Button } from '../../../atoms'
import Styles from './LoginButton.module.css'

function LoginButton(props) {
  return (
    <Button className={Styles['header-login']} content='Login'/>
  )
}

export default LoginButton
