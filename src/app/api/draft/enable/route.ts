import {draftMode} from 'next/headers'
import {redirect} from 'next/navigation'
import {NextRequest, NextResponse} from 'next/server'

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  const redirectTo = request.nextUrl.searchParams.get('redirect') || '/'

  if (!process.env.SANITY_REVALIDATE_SECRET || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({message: 'Invalid draft secret'}, {status: 401})
  }

  const draft = await draftMode()
  draft.enable()
  redirect(redirectTo)
}
