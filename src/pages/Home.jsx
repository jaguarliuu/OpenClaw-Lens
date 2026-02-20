import React, { useState, useEffect } from 'react'
import { useGitHubApi } from '../hooks/useGitHubApi'
import Sidebar from '../components/Sidebar'
import FileGrid from '../components/FileGrid'
import PreviewModal from '../components/PreviewModal'
import { GITHUB_OWNER, GITHUB_REPO } from '../config/github'

export default function Home() {
  const { agents, files, loading, error, getAgents, getFiles, getFileContent } = useGitHubApi(GITHUB_OWNER, GITHUB_REPO)
  
  const [activeAgent, setActiveAgent] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [fileContent, setFileContent] = useState(null)
  const [contentLoading, setContentLoading] = useState(false)

  useEffect(() => {
    getAgents()
  }, [])

  const handleSelectAgent = (agentId) => {
    setActiveAgent(agentId)
    getFiles(agentId)
  }

  const handleFileClick = async (file) => {
    setSelectedFile(file)
    setContentLoading(true)
    try {
      const content = await getFileContent(activeAgent, file.name)
      setFileContent(content)
    } catch (e) {
      setFileContent('Error loading file content')
    } finally {
      setContentLoading(false)
    }
  }

  const handleCloseModal = () => {
    setSelectedFile(null)
    setFileContent(null)
  }

  return (
    <div className="flex h-screen">
      <Sidebar
        activeAgent={activeAgent}
        onSelectAgent={handleSelectAgent}
      />
      
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">
            {activeAgent ? `${activeAgent} Files` : 'Select an Agent'}
          </h1>
          {loading && (
            <p className="text-gray-500 mt-2">Loading...</p>
          )}
          {error && (
            <p className="text-red-500 mt-2">{error}</p>
          )}
        </div>

        <FileGrid
          files={files}
          onFileClick={handleFileClick}
        />
      </main>

      <PreviewModal
        file={selectedFile}
        content={fileContent}
        onClose={handleCloseModal}
      />
    </div>
  )
}
