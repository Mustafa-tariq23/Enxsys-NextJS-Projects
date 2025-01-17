'use client'
import type { Snippet } from "@prisma/client"
import Editor from '@monaco-editor/react'
import { useState } from "react"
import * as actions from "@/actions"



interface SnippetEditFormProps {
  snippet: Snippet
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const[ code, setCode ] = useState(snippet.code)
  const handleEditorChange = (value: string = '') => {
    setCode(value)
  }

  const editSnippetActions = actions.editSnippet.bind(null, snippet.id, code)

  return <div> 
  <h1 className="text-3xl text-gray-600 font-bold py-4">{snippet.title}</h1>
    <Editor
    height="40vh"
    theme="vs-dark"
    defaultLanguage="javascript"
    defaultValue={snippet.code}
    onChange={handleEditorChange}
  />

  <form action={editSnippetActions}>
    <button type="submit" className="border rounded p-2 my-2">save</button>
  </form>
   </div>
}