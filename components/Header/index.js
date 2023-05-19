import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <header>
            <Link href={'/'}><b>Blog</b></Link>
            <nav>
                <Link href='/posts'>Posts</Link>
            </nav>
        </header>
    )
}

export default Header
