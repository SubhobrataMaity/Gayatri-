import { NextResponse } from 'next/server';

// Static project data - no file system access needed
const PROJECTS = [
  {
    slug: 'Alochayya',
    title: 'Alochayya',
    thumbnail: '/projects/Alochayya/1.png',
    assets: Array.from({ length: 16 }, (_, i) => ({
      type: 'image' as const,
      src: `/projects/Alochayya/${i + 1}.png`,
      filename: `${i + 1}.png`,
    })),
  },
  {
    slug: 'Ektara',
    title: 'Ektara',
    thumbnail: '/projects/Ektara/Presentation.png',
    assets: [
      { type: 'image' as const, src: '/projects/Ektara/Presentation.png', filename: 'Presentation.png' },
      ...Array.from({ length: 27 }, (_, i) => ({
        type: 'image' as const,
        src: `/projects/Ektara/Presentation-${String(i + 1).padStart(2, '0')}.png`,
        filename: `Presentation-${String(i + 1).padStart(2, '0')}.png`,
      })),
    ],
  },
  {
    slug: 'PLUGD',
    title: 'PLUGD',
    thumbnail: '/projects/PLUGD/1.png',
    assets: [
      ...Array.from({ length: 9 }, (_, i) => ({ type: 'image' as const, src: `/projects/PLUGD/${i + 1}.png`, filename: `${i + 1}.png` })),
      { type: 'image' as const, src: '/projects/PLUGD/10.gif', filename: '10.gif' },
      { type: 'image' as const, src: '/projects/PLUGD/11.png', filename: '11.png' },
      { type: 'image' as const, src: '/projects/PLUGD/12.gif', filename: '12.gif' },
      { type: 'image' as const, src: '/projects/PLUGD/13.gif', filename: '13.gif' },
      ...Array.from({ length: 7 }, (_, i) => ({ type: 'image' as const, src: `/projects/PLUGD/${i + 14}.png`, filename: `${i + 14}.png` })),
      { type: 'image' as const, src: '/projects/PLUGD/21.gif', filename: '21.gif' },
      { type: 'image' as const, src: '/projects/PLUGD/22.gif', filename: '22.gif' },
      { type: 'image' as const, src: '/projects/PLUGD/23.gif', filename: '23.gif' },
    ],
  },
  {
    slug: 'So-FI',
    title: 'So FI',
    thumbnail: '/projects/So-FI/1.gif',
    assets: [
      { type: 'image' as const, src: '/projects/So-FI/1.gif', filename: '1.gif' },
      ...Array.from({ length: 6 }, (_, i) => ({ type: 'image' as const, src: `/projects/So-FI/${i + 2}.png`, filename: `${i + 2}.png` })),
      { type: 'image' as const, src: '/projects/So-FI/8.gif', filename: '8.gif' },
      { type: 'image' as const, src: '/projects/So-FI/9.png', filename: '9.png' },
      { type: 'image' as const, src: '/projects/So-FI/10.gif', filename: '10.gif' },
      ...Array.from({ length: 5 }, (_, i) => ({ type: 'image' as const, src: `/projects/So-FI/${i + 11}.png`, filename: `${i + 11}.png` })),
    ],
  },
];

/**
 * API Route: GET /api/projects
 * 
 * Returns all projects - using static data to avoid file system access
 */
export async function GET() {
  return NextResponse.json(PROJECTS);
}
