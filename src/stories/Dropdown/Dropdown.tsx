import { useState, useRef, useEffect, ReactElement, ReactNode } from 'react'

interface DropdownProps {
  activator: ReactElement
  children: ReactNode
}

const Dropdown = ({ activator, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 })
  const activatorRef = useRef<HTMLDivElement | null>(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (activatorRef.current) {
      const activatorRect = activatorRef.current.getBoundingClientRect()
      setMenuPosition({ top: activatorRect.bottom, left: activatorRect.left })
    }
  }, [isOpen])

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div
        onClick={toggleDropdown}
        ref={activatorRef}
      >
        {activator}
      </div>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            background: 'white',
            padding: '10px',
            top: menuPosition.top + 'px',
            left: menuPosition.left + 'px',
            display: 'block',
            border: '1px solid black'
          }}
        >
          {children}
        </div>
      )}
    </div>
  )
}

export default Dropdown
