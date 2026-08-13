
import React from 'react';
import type { BlogPost } from '../types';

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, index }) => {
  const animationDelay = `${index * 100}ms`;

  return (
    <div 
      className="bg-deep-purple/50 backdrop-blur-md rounded-lg overflow-hidden group transition-all duration-300 hover:scale-105 hover:box-glow animate-fade-in-up flex flex-col"
      style={{ animationDelay }}
    >
      <div className="relative">
        <img src={post.imageUrl} alt={`${post.title}`} className="w-full h-48 object-cover" />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-orbitron text-xl font-bold text-star-white mb-2" title={post.title}>{post.title}</h3>
        <p className="text-sm text-light-blue/80 font-exo mb-3">{post.date}</p>
        <p className="text-star-white/90 font-exo text-base leading-relaxed flex-grow">{post.excerpt}</p>
      </div>
    </div>
  );
};

export default BlogPostCard;
