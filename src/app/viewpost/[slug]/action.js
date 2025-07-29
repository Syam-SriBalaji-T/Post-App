'use server';

import { promises as fs } from 'fs';
import path from 'path';

export async function deletePostByTitle(title) {
  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const posts = JSON.parse(fileContent);

  const updatedPosts = posts.filter(
    (p) => p.postTitle.trim().toLowerCase() !== title.trim().toLowerCase()
  );

  if (updatedPosts.length === posts.length) {
    return { success: false, message: 'Post not found' };
  }

  await fs.writeFile(filePath, JSON.stringify(updatedPosts, null, 2));
  return { success: true };
}
