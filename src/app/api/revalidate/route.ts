import {revalidatePath, revalidateTag} from 'next/cache'
import {NextRequest, NextResponse} from 'next/server'

export async function POST(request: NextRequest) {
  const headerSecret = request.headers.get('x-sanity-webhook-secret')
  const querySecret = request.nextUrl.searchParams.get('secret')
  const secret = headerSecret || querySecret

  if (!process.env.SANITY_REVALIDATE_SECRET || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({message: 'Invalid revalidation secret'}, {status: 401})
  }

  revalidateTag('sanity')
  revalidatePath('/')

  return NextResponse.json({revalidated: true, now: new Date().toISOString()})
}
