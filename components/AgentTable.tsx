'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { PlusCircle, Trash2, RefreshCw } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface Agent {
  id: number
  name: string
  status: 'Active' | 'Inactive'
}

const initialAgents: Agent[] = [
  { id: 1, name: 'Agent 1', status: 'Active' },
  { id: 2, name: 'Agent 2', status: 'Inactive' },
  { id: 3, name: 'Agent 3', status: 'Active' },
]

export default function AgentTable() {
  const [agents, setAgents] = useState<Agent[]>(initialAgents)
  const [searchTerm, setSearchTerm] = useState('')
  const [newAgentName, setNewAgentName] = useState('')
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const router = useRouter()

  const filteredAgents = agents.filter(agent =>
    agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.status.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCreateAgent = () => {
    if (newAgentName.trim()) {
      const newAgent: Agent = {
        id: Math.max(...agents.map(a => a.id)) + 1,
        name: newAgentName.trim(),
        status: 'Active'
      }
      setAgents([...agents, newAgent])
      setNewAgentName('')
      setIsCreateDialogOpen(false)
    }
  }

  const handleDeleteAgent = (agentId: number) => {
    setAgents(agents.filter(agent => agent.id !== agentId))
  }

  const handleChangeStatus = (agentId: number, newStatus: 'Active' | 'Inactive') => {
    setAgents(agents.map(agent => 
      agent.id === agentId ? { ...agent, status: newStatus } : agent
    ))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input
          type="text"
          placeholder="Search agents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button><PlusCircle className="mr-2 h-4 w-4" /> Create Agent</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Agent</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newAgentName}
                  onChange={(e) => setNewAgentName(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <Button onClick={handleCreateAgent}>Create Agent</Button>
          </DialogContent>
        </Dialog>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Agent ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAgents.map((agent) => (
              <TableRow key={agent.id}>
                <TableCell className="font-medium">{agent.id}</TableCell>
                <TableCell>{agent.name}</TableCell>
                <TableCell>
                  <Select
                    value={agent.status}
                    onValueChange={(value: 'Active' | 'Inactive') => handleChangeStatus(agent.id, value)}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="mr-2" onClick={() => router.push(`/agent/${agent.id}`)}>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDeleteAgent(agent.id)}>
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

