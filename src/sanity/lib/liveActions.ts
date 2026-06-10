'use server'

export async function skipDraftLiveRefresh(): Promise<void> {
  // Draft edits already save in Studio. Avoid remounting the Presentation iframe on every patch.
}
