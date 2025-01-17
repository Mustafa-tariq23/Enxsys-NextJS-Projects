'use client'

import * as actions from "@/actions"
import { useActionState } from "react";
import Link from "next/link";

export default function CreateNewSnippet() {

  const [formState, action] = useActionState(actions.createSnippet, { message: '' })

  return (
    <>
      <Link href={'/'} className="border rounded p-2">Back</Link>
      <h1 className="text-4xl font-bold text-gray-600 py-8">Create a New Snippet</h1>
      <form action={action}>
        <h3 className="font-bold m-3">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <label className="w-12" htmlFor="title">Title</label>
              <input type="text" name="title" id="title" className="border rounded p-2 w-full" />
            </div>
            <div className="flex gap-4">
              <label className="w-12" htmlFor="code">Code</label>
              <textarea name="code" id="code" className="border rounded p-2 w-full" />
            </div>
            <div className={formState.message==''?"hidden":"text-md bg-red-400 text-white p-2 rounded"}>{formState.message}</div>
            <button type='submit' className="border rounded p-2 bg-blue-200">Create</button>
          </div>
        </h3>
      </form>
    </>
  );
}