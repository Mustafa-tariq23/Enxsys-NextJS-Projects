'use server'
import { db } from "@/db"
import { redirect } from "next/navigation"
export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code }
  })
  redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id }
  })
  redirect('/')
}

export async function createSnippet(formState: { message: string }, formData: FormData) {

  try {
    const title = formData.get('title')
    const code = formData.get('code')

    if (!title && !code) {
      return {
        message: "Title and Code fields cannot be empty"
      }
    }

    if (!title && code?.length < 3) {
      return {
        message: "Title field cannot be empty and Code must also be longer"
      }
    }

    if (!title) {
      return {
        message: "Title field cannot be empty"
      }
    }

    if (!code && title?.length < 3) {
      return {
        message: "Code field cannot be empty and Title must also be longer"
      }
    }

    if (!code) {
      return {
        message: "Code field cannot be empty"
      }
    }

    if (typeof title !== 'string' || title?.length < 3) {
      return {
        message: "title must be longer"
      }
    }

    if (typeof code !== 'string' || code?.length < 3) {
      return {
        message: "code must be longer"
      }
    }

    await db.snippet.create({
      data: {
        title,
        code,
      },
    })
    console.log(db)
  }
  catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message
      }
    }
    else {
      return {
        message: "An error occurred"
      }
    }
  }
  redirect('/')
}