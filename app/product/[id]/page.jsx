'use client'

import { useRouter } from "next/navigation"

const ProductPage = ({params}) => {
    const router = useRouter()

    return (
        <main>
            <h1>You are viewing page {params.id}</h1>
            <button onClick={() => router.back()}>Go back</button>
        </main>
    )
}

export default ProductPage