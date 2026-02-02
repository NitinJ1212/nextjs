import Link from 'next/link'
import React from 'react'

const about = () => {
    return (
        <div>this is about page
            <Link href="/">
                <button>Go to home Page</button>
            </Link>
        </div>
    )
}

export default about