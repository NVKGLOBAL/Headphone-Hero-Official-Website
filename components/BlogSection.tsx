
import React from 'react';
import { BLOG_POSTS } from '../constants';
import BlogPostCard from './BlogPostCard';

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-12 md:mb-16 text-glow">
          Latest Transmissions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {BLOG_POSTS.map((post, index) => (
            <BlogPostCard key={post.title} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
