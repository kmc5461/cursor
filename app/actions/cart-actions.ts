'use server'

export async function logCheckout(data: { total: number; email: string }) {
  console.log('Checkout initiated', data)
  return { ok: true }
}
