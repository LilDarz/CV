import { useState, useEffect } from 'react'

import styles from "./blogPost.module.css"

const CONTENTFUL_API = "https://cdn.contentful.com/spaces/whzb3zcxmtdq/environments/master/entries?access_token=ixR-iBMEXJXCinAZqbhqcgIZ-ts6gCKM50KmQRBL-aA&content_type=test"

const BlogPost = () => {
    const [apiData, setApiData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(async () => {
        setLoading(true)
        setError(null)
        fetch(CONTENTFUL_API)
        .then(data => data.json())
        .then(data => {
            setLoading(false)
            setApiData(data)
        })
        .catch(err => {
            setError(err)
        })
    }, [])

    return (
        <>  
            {isLoading && (<p>Loading...</p>)}
            {error && (<p>Error: {error}</p>)}
            <div className={styles.posts}>
                {apiData && (
                    apiData.items.map(item => (
                    <div className={styles.blogPost} key={item.fields.title}>
                        <h3>{item.fields.title}</h3>
                        <p>{item.fields.body}</p>
                    </div>
                    ))
                )}
            </div>
        </>
    )
}

export default BlogPost
