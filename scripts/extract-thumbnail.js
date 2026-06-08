#!/usr/bin/env node
import { spawnSync } from 'child_process';

// Usage: node scripts/extract-thumbnail.js input.mp4 output.jpg
const [, , input, output] = process.argv;

if (!input || !output) {
  console.error('Usage: node scripts/extract-thumbnail.js <input.mp4> <output.jpg>');
  process.exit(1);
}

// Extract the 10th frame (frame number 10). ffmpeg frame numbering starts at 0.
// We use select=eq(n\,10) to pick that frame and write a single image.
const args = ['-y', '-i', input, '-vf', 'select=eq(n\\,10)', '-vframes', '1', '-q:v', '2', output];

console.log('Running ffmpeg with args:', args.join(' '));
const res = spawnSync('ffmpeg', args, { stdio: 'inherit' });

if (res.error) {
  console.error('Error running ffmpeg:', res.error.message);
  process.exit(1);
}

process.exit(res.status ?? 0);
