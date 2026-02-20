import React from 'react'

const AGENTS = [
  { id: 'kira', name: 'Kira', count: 24 },
  { id: 'ha', name: 'Ha', count: 12 },
  { id: 'hen', name: 'Hen', count: 8 }
]

export default function Sidebar({ activeAgent, onSelectAgent }) {
  return (
    <aside className="w-60 border-r border-gray-200 p-8">
      <div className="text-xs uppercase tracking-wide text-gray-400 font-medium mb-4">
        Agents
      </div>
      <div className="space-y-1">
        {AGENTS.map(agent => (
          <div
            key={agent.id}
            onClick={() => onSelectAgent(agent.id)}
            className={`px-4 py-2 rounded cursor-pointer transition-colors ${
              activeAgent === agent.id
                ? 'bg-black text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            <div className="font-medium text-sm">{agent.name}</div>
            <div className={`text-xs ${
              activeAgent === agent.id ? 'text-gray-300' : 'text-gray-400'
            }`}>
              {agent.count} files
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
