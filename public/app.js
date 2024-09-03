import { initializeStats, incrementVisits, incrementLikes, getStats } from './firebase.js';

document.addEventListener('DOMContentLoaded', async () => {
  // Initialize stats
  await initializeStats();
  
  // Increment visits
  await incrementVisits();

  // Get and display stats
  const stats = await getStats();
  document.getElementById('visitCount').textContent = stats.visits;
  document.getElementById('likeCount').textContent = stats.likes;

  // Handle like button click
  document.getElementById('likeButton').addEventListener('click', async () => {
    await incrementLikes();
    const updatedStats = await getStats();
    document.getElementById('likeCount').textContent = updatedStats.likes;
  });
});
