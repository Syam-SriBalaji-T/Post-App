'use server';

import { promises as fs } from 'fs';
import path from 'path';

export async function savePost(data) {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');

  const fileContent = await fs.readFile(filePath, 'utf-8');
  const posts = JSON.parse(fileContent);

  const exists = posts.find((post) =>
    post.postTitle.trim().toLowerCase() === data.postTitle.trim().toLowerCase()
  );

  if (exists) {
    return { success: false, message: 'Post title already exists' };
  }

  posts.push(data);

  await fs.writeFile(filePath, JSON.stringify(posts, null, 2));
  return { success: true };
}
