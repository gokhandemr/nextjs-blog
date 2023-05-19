import React from 'react'
import styles from './styles.module.css'


export default function Loading() {
    return (
        <div>
            <div className={styles.loader}></div>
        </div>
    )
}