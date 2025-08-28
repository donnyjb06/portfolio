import React from 'react'
import type { Props } from '../types/ui'

const PillBox = ({children}: Props) => {
  return (
    <div className='glass-morphism rounded-lg flex flex-wrap px-3 py-2 gap-2'>
      {children} 
    </div>
  )
}

export default PillBox
