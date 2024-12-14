import AgentTable from '@/components/AgentTable'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function AgentListPage() {
  return (
    <div className="container mx-auto p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">Agent Management</h1>
        <ThemeToggle />
      </div>
      <AgentTable />
    </div>
  )
}

