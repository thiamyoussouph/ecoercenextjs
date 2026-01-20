export const dynamic = 'force-dynamic'

import React from 'react'
import { notFound } from 'next/navigation'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { homeStaticData } from '@/endpoints/seed/home-static'
import type { Page } from '@/payload-types'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

// On retire complètement generateStaticParams pour le premier build
// On retire generateMetadata car il interroge aussi la base

export default async function Page({ params }: Args) {
  const { slug = 'home' } = await params
  
  // Si c'est la home, on peut utiliser les données statiques par défaut
  if (slug === 'home') {
    const data = homeStaticData() as Page
    return (
      <article className="pt-16 pb-24">
        <RenderHero {...data.hero} />
        <RenderBlocks blocks={data.layout} />
      </article>
    )
  }

  // Pour les autres pages, on cherche en base
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'pages',
    limit: 1,
    where: {
      slug: { equals: slug },
    },
  })

  const page = result.docs?.[0]

  if (!page) return notFound()

  return (
    <article className="pt-16 pb-24">
      <RenderHero {...page.hero} />
      <RenderBlocks blocks={page.layout} />
    </article>
  )
}