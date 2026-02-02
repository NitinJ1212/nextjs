// src/app/blog/[slug]/page.jsx
export default async function PostSlugPage({ params }) {
    // If params is a Promise (RSC), await it
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    return (
        <div>
            <h1>Blog Page</h1>
            <p>Slug: {slug}</p>
            {/* <pre>{JSON.stringify(resolvedParams, null, 2)}</pre> */}
        </div>
    );
}
