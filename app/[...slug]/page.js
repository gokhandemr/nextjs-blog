import React from 'react'
import Image from 'next/image'
import style from './styles.module.css'
import NotFound from '../not-found'
import Link from 'next/link'

const getPost = async (id) => {
    try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`)
        return response.json()
    } catch (error) {
        throw new Error(error)
    }
}

export default async function page({ params }) {
    const { id, title, body, tags } = await getPost(params.slug)
    if (!title) {
        return NotFound()
    }
    return (
        <div>
            <div className={style.imagex}>
                <Image src={`https://picsum.photos/id/4${id}/900/400`} alt='title' fill priority />
            </div>
            <h2>{title}</h2>
            <p>{body}</p>

            {tags.map((item, index)=>(
                <Link style={{marginRight: '5px'}} key={index} href={'tags/' + item}>{item}</Link>
            ))}
        </div>
    )
}