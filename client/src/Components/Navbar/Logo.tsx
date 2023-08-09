import React from 'react'

import logo from '../../Assets/logo.svg'

const Logo = () => {

  
  return (
    <div className='text-[18px] font-semibold flex flex-row items-center gap-3'>
        <img className='w-[35px]' src={logo} alt="" />
        <p>FakeStoreApi</p>
    </div>
  )
}

export default Logo