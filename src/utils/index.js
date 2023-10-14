import { compareDesc, parse, parseISO } from "date-fns"


export const cx = (...classNames) => classNames.filter(Boolean).join(' ');

export const sortBlogs = (blogs) => {
    return blogs
    .slice()
    .sort((a, b) => 
    compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
export const getBlogUrl = (slug) => {
    return `/blog/${slug}`
};

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Add smooth scrolling behavior
        });
    };