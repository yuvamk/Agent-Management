import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface SidebarProps {
  items: string[]
  selectedItem: string
  onSelect: (item: string) => void
}

export default function Sidebar({ items, selectedItem, onSelect }: SidebarProps) {
  return (
    <motion.div 
      className="w-64 bg-secondary/30 p-4"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {items.map((item) => (
        <Button
          key={item}
          variant={selectedItem === item ? 'secondary' : 'ghost'}
          className="w-full justify-start mb-2 transition-colors text-foreground"
          onClick={() => onSelect(item)}
        >
          {item}
        </Button>
      ))}
    </motion.div>
  )
}

