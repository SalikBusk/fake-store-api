import React from 'react'
import { useNavigate } from 'react-router'

import logo from '../../Assets/logo.svg'

const Logo = () => {
  const Navigate = useNavigate()

  return (
    <div className='text-[18px] font-semibold flex flex-row items-center gap-3 cursor-pointer' onClick={() => Navigate("/")}>
        <img className='w-[35px]' src={logo} alt="" />
        <p>FakeStoreApi</p>
    </div>
  )
}

export default Logo