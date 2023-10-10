import { compareDesc, parse, parseISO } from "date-fns"


export const cx = (...classNames) => classNames.filter(Boolean).join(' ');

export const sortBlogs = (blogs) => {
    return blogs
    .slice()
    .sort((a, b) => 
    compareDesc(parseISO(a.publishAt), parseISO(b.publishAt))
    );
};
export const getBlogUrl = (slug) => {
    return `/blog/${slug}`
};
