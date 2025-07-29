'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePost() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    postTitle: '',
    postDetails: '',
    postPicUrl: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');

    const exists = storedPosts.find(
      (post) =>
        post.postTitle.trim().toLowerCase() === formData.postTitle.trim().toLowerCase()
    );

    if (exists) {
      alert('Post title already exists');
      return;
    }

    storedPosts.push(formData);
    localStorage.setItem('posts', JSON.stringify(storedPosts));

    router.push('/');
  };

  return (
    <main>
      <div className="max-w-xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Create a New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Post Title *</label>
            <input
              name="postTitle"
              required
              value={formData.postTitle}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Post Details *</label>
            <textarea
              name="postDetails"
              required
              value={formData.postDetails}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Post Picture URL *</label>
            <input
              name="postPicUrl"
              required
              value={formData.postPicUrl}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
