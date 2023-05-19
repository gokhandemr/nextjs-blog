import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from './style.module.css'
function BlogCard({ title, body, id }) {
    return (
        <div className={styles.blogCard}>
            <Link href={`${id}`}>
                <Image src={`https://picsum.photos/id/4${id}/75/75`} alt='test' width='75' height='75' />
                <h3>{title}</h3>
                <p>{body}</p>
            </Link>

        </div>
    )
}

export default BlogCard
