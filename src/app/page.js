'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    } else {
      setPosts([]); // fallback to empty array
    }
  }, []);

  return (
    <div className="p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.length > 0 ? (
        posts.map((post) => {
          const slug = post.postTitle.toLowerCase().replace(/\s+/g, '-');

          return (
            <main key={post.postTitle}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={post.postPicUrl}
                  alt={post.postTitle}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-gray-800 text-xl font-semibold mb-2">
                    {post.postTitle}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.postDetails}</p>
                  <Link
                    href={`/viewpost/${slug}`}
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    View Post
                  </Link>
                </div>
              </div>
            </main>
          );
        })
      ) : (
        <main>
          <p className="text-white text-lg">No posts available.</p>
        </main>
      )}
    </div>
  );
}
