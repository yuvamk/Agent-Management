'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'

export default function TestChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ sender: 'user' | 'agent'; text: string }[]>([])
  const [inputMessage, setInputMessage] = useState('')

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { sender: 'user', text: inputMessage }])
      setInputMessage('')
      // TODO: Implement API call to get agent's response
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'agent', text: 'This is a mock response from the agent.' }])
      }, 1000)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-accent/20 text-accent-foreground hover:bg-accent/30">Test Chat</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Test Chat</DialogTitle>
        </DialogHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-[300px] overflow-y-auto mb-4 border rounded p-2 bg-background">
            {messages.map((message, index) => (
              <motion.div 
                key={index} 
                className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <span className={`inline-block p-2 rounded ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                  {message.text}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="flex">
            <Input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 mr-2"
            />
            <Button onClick={handleSendMessage}>Send</Button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}

