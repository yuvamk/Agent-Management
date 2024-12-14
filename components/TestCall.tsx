'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { motion } from 'framer-motion'

export default function TestCall() {
  const [isOpen, setIsOpen] = useState(false)

  const handleTestCall = () => {
    // TODO: Implement test call functionality
    console.log('Test call initiated')
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-primary/20 text-primary hover:bg-primary/30">Test Call</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Test Call</DialogTitle>
        </DialogHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="mb-4">Are you sure you want to initiate a test call?</p>
          <Button onClick={handleTestCall} className="w-full">Start Test Call</Button>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}

