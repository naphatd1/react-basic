import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux-toolkit/hooks'
import {
  selectAuthState,
  updateProfileAction,
} from '../redux-toolkit/auth/auth-slice'


function AboutPage() {
  const { profile, email } = useAppSelector(selectAuthState)
  const dispatch = useAppDispatch()
  const updateProfile = () => {
    dispatch(updateProfileAction())
  }
  return (
    <>
      <h1>about-page</h1>
      <p>
        {profile} {email}
      </p>
      <button onClick={updateProfile}>update profile</button>
      <Link to="/" replace={true}>Home</Link>
    </>
  )
}

export default AboutPage
