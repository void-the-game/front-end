import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

export const AbTestContext = createContext()

export const AbTestProvider = ({ children, variants = ['A', 'B'] }) => {
  const [variant] = useState(() => {
    const index = Math.floor(Math.random() * variants.length)
    return variants[index]
  })

  return (
    <AbTestContext.Provider value={{ variant }}>
      {children}
    </AbTestContext.Provider>
  )
}

AbTestProvider.propTypes = {
  children: PropTypes.node.isRequired,
  variants: PropTypes.arrayOf(PropTypes.string),
}
