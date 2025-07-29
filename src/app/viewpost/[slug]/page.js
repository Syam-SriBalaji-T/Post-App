'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ViewPost({ params }) {
  const router = useRouter();
  const slug = params?.slug;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    const found = storedPosts.find(
      (p) => p.postTitle.toLowerCase().replace(/\s+/g, '-') === slug
    );

    if (found) {
      setPost(found);
    } else {
      router.push('/not-found');
    }
  }, [slug]);

  const handleDelete = () => {
    if (!post) return;

    const confirmDelete = confirm('Are you sure you want to delete this post?');
    if (!confirmDelete) return;

    const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    const updatedPosts = storedPosts.filter(
      (p) => p.postTitle.trim().toLowerCase() !== post.postTitle.trim().toLowerCase()
    );

    if (updatedPosts.length === storedPosts.length) {
      alert('Post not found');
      return;
    }

    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    router.push('/');
  };

  if (!post) return null;

  return (
    <main>
      <div className="max-w-2xl mx-auto p-6">
        <img
          src={post.postPicUrl}
          alt={post.postTitle}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{post.postTitle}</h1>
        <p className="text-gray-700 text-lg">{post.postDetails}</p>

        <div className="mt-8 flex gap-4">
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Delete Post
          </button>
        </div>
      </div>
    </main>
  );
}