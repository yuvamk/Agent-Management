'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import TestCall from '@/components/TestCall'
import TestChat from '@/components/TestChat'
import { motion } from 'framer-motion'

interface NavbarProps {
  agentName: string
  onNameChange: (newName: string) => void
}

export default function Navbar({ agentName, onNameChange }: NavbarProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [tempName, setTempName] = useState(agentName)

  const handleNameSubmit = () => {
    onNameChange(tempName)
    setIsEditing(false)
  }

  return (
    <motion.nav 
      className="bg-secondary/30 shadow-md p-4 flex justify-between items-center"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        {isEditing ? (
          <form onSubmit={(e) => { e.preventDefault(); handleNameSubmit(); }}>
            <Input
              type="text"
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              onBlur={handleNameSubmit}
              autoFocus
              className="bg-background text-foreground"
            />
          </form>
        ) : (
          <h1 
            className="text-xl font-bold cursor-pointer text-primary hover:text-primary/80 transition-colors"
            onClick={() => setIsEditing(true)}
          >
            {agentName}
          </h1>
        )}
      </div>
      <div className="space-x-2">
        <TestCall />
        <TestChat />
      </div>
    </motion.nav>
  )
}

