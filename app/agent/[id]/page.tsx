'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import PromptInput from '@/components/PromptInput'
import { motion } from 'framer-motion'

export default function AgentDetailsPage() {
  const { id } = useParams()
  const [selectedCategory, setSelectedCategory] = useState('Overview')
  const [agentName, setAgentName] = useState(`Agent ${id}`)
  const [prompt, setPrompt] = useState('')

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
  }

  const handleNameChange = (newName: string) => {
    setAgentName(newName)
    // TODO: Implement API call to update agent name
  }

  const handlePromptChange = (newPrompt: string) => {
    setPrompt(newPrompt)
    // TODO: Implement API call to update prompt
  }

  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar
        items={['Overview', 'Settings', 'Logs']}
        selectedItem={selectedCategory}
        onSelect={handleCategorySelect}
      />
      <div className="flex flex-col flex-1">
        <Navbar agentName={agentName} onNameChange={handleNameChange} />
        <div className="flex flex-1">
          <Sidebar
            items={['Item 1', 'Item 2', 'Item 3']}
            selectedItem=""
            onSelect={() => {}}
          />
          <motion.main 
            className="flex-1 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">{selectedCategory}</h2>
            <PromptInput value={prompt} onChange={handlePromptChange} />
          </motion.main>
        </div>
      </div>
    </div>
  )
}

