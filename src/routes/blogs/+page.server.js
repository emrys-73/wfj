/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

// import { redirect } from '@sveltejs/kit';
const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
    return `https://base.astralta.com:443/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};

const serializeNonPOJOs = (/** @type {any} */ obj) => {
    return structuredClone(obj)
};

export const load = async ({ locals }) => {

    const getBlogs = async () => {
        try {
            const blogs = serializeNonPOJOs(await locals.pb.collection('n_blogs').getFullList({
                sort: '-created',
            }));
    
            // Assuming each blog has a 'publication_date' property
            blogs.forEach(blog => {
                blog.publication_date = formatDate(blog.publication_date);
                blog.cover = getImageURL(blog.collectionId, blog.id, blog.cover_picture)
            });
    
            // console.log(blogs[0].cover);
            return blogs;
        } catch (err) {
            console.log("Whoops")
        }
    }
    
    function formatDate(dateString) {
        const options = { day: 'numeric', month: 'short' };
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }
    const blogs = await getBlogs();
    
    return {
        blogs
    }
}