import React from 'react'
import Link from 'next/link';

export const metadata = {
  title: 'Post Page',
  description: 'Welcome to Next.js',
};

export default function page() {
  return (
    <div>
      <h2>Posts Page</h2>
      <p>Anim sunt ipsum ad magna.Quis commodo et duis occaecat laboris ex minim et excepteur sint cillum irure.Aute exercitation commodo magna fugiat do amet aliqua ad in ut laboris irure non.Anim est duis sunt nisi.</p>
      <Link href={'posts/x1'}>asd</Link>
    </div>
  )
}
