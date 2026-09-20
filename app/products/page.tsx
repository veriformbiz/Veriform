import type { Metadata } from 'next'
import { ProductsPage } from '@/components/products-page'

export const metadata: Metadata = {
  title: 'Products & Solutions | VeriForm Business Solutions',
  description: 'Explore office supplies, hygiene, safety, furniture, corporate gifting, workplace infrastructure, and business support solutions from VeriForm.',
}

export default function Page() {
  return <ProductsPage />
}
