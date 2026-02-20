import React from 'react'

export default function Sidebar({ activeAgent, agents = [], onSelectAgent }) {
  return (
    <aside className="w-60 border-r border-gray-200 p-8">
      <div className="text-xs uppercase tracking-wide text-gray-400 font-medium mb-4">
        Agents {agents.length > 0 && `(${agents.length})`}
      </div>

      {agents.length === 0 ? (
        <div className="text-xs text-gray-400">
          No agents yet
        </div>
      ) : (
        <div className="space-y-1">
          {agents.map(agent => (
            <div
              key={agent.name}
              onClick={() => onSelectAgent(agent.name)}
              className={`px-4 py-2 rounded cursor-pointer transition-colors ${
                activeAgent === agent.name
                  ? 'bg-black text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              <div className="font-medium text-sm">{agent.name}</div>
              <div className={`text-xs ${
                activeAgent === agent.name ? 'text-gray-300' : 'text-gray-400'
              }`}>
                {agent.count || '?'} files
              </div>
            </div>
          ))}
        </div>
      )}
    </aside>
  )
}
