'use client'

import { useState, useEffect } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'

interface PromptInputProps {
  value: string
  onChange: (newPrompt: string) => void
}

export default function PromptInput({ value, onChange }: PromptInputProps) {
  const [localValue, setLocalValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localValue !== value) {
        onChange(localValue)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [localValue, value, onChange])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-semibold mb-2 text-primary">Prompt</h3>
      <Textarea
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        placeholder="Enter prompt here..."
        className="w-full h-32 bg-background text-foreground border-secondary focus:border-primary transition-colors"
      />
    </motion.div>
  )
}

