import { NextResponse } from 'next/server';

// Static project data - no file system access needed
const PROJECTS = [
  {
    slug: 'Alochayya',
    title: 'Alochayya',
    thumbnail: '/projects/Alochayya/0.jpeg',
    assets: [
      ...Array.from({ length: 16 }, (_, i) => ({
        type: 'image' as const,
        src: `/projects/Alochayya/${i + 1}.png`,
        filename: `${i + 1}.png`,
      })),
      {
        type: 'youtube' as const,
        src: 'https://www.youtube.com/embed/YbD_oaI4DH8',
        caption: 'Project Video',
      },
    ],
  },
  {
    slug: 'Ektara',
    title: 'Ektara',
    thumbnail: '/projects/Ektara/Presentation.jpeg',
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
    thumbnail: '/projects/PLUGD/1.jpeg',
    assets: [
      { type: 'image' as const, src: '/projects/PLUGD/1.jpeg', filename: '1.jpeg' },
      ...Array.from({ length: 8 }, (_, i) => ({ type: 'image' as const, src: `/projects/PLUGD/${i + 2}.png`, filename: `${i + 2}.png` })),
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
  {
    slug: 'Rootprint',
    title: 'Rootprint',
    thumbnail: '/projects/Rootprint/portfolio rootprint.jpeg',
    assets: [
      { type: 'image' as const, src: '/projects/Rootprint/portfolio rootprint-01.png', filename: 'portfolio rootprint-01.png' },
      { type: 'image' as const, src: '/projects/Rootprint/portfolio rootprint-02.png', filename: 'portfolio rootprint-02.png' },
      { type: 'image' as const, src: '/projects/Rootprint/portfolio rootprint-03.png', filename: 'portfolio rootprint-03.png' },
      { type: 'image' as const, src: '/projects/Rootprint/portfolio rootprint-04.png', filename: 'portfolio rootprint-04.png' },
      { type: 'image' as const, src: '/projects/Rootprint/portfolio rootprint-05.png', filename: 'portfolio rootprint-05.png' },
      { type: 'image' as const, src: '/projects/Rootprint/portfolio rootprint-06.png', filename: 'portfolio rootprint-06.png' },
      { type: 'image' as const, src: '/projects/Rootprint/portfolio rootprint-07.png', filename: 'portfolio rootprint-07.png' },
      { type: 'image' as const, src: '/projects/Rootprint/portfolio rootprint-18.png', filename: 'portfolio rootprint-18.png' },
      { type: 'image' as const, src: '/projects/Rootprint/portfolio rootprint-19.png', filename: 'portfolio rootprint-19.png' },
      { type: 'image' as const, src: '/projects/Rootprint/portfolio rootprint-20.png', filename: 'portfolio rootprint-20.png' },
      { type: 'image' as const, src: '/projects/Rootprint/portfolio rootprint-21.png', filename: 'portfolio rootprint-21.png' },
      { type: 'image' as const, src: '/projects/Rootprint/portfolio rootprint-22.png', filename: 'portfolio rootprint-22.png' },
      { type: 'image' as const, src: '/projects/Rootprint/portfolio rootprint-23.png', filename: 'portfolio rootprint-23.png' },
      { type: 'image' as const, src: '/projects/Rootprint/portfolio rootprint-24.png', filename: 'portfolio rootprint-24.png' },
      { type: 'image' as const, src: '/projects/Rootprint/portfolio rootprint-25.png', filename: 'portfolio rootprint-25.png' },
      { type: 'image' as const, src: '/projects/Rootprint/portfolio rootprint-26.png', filename: 'portfolio rootprint-26.png' },
      { type: 'image' as const, src: '/projects/Rootprint/portfolio rootprint-27.png', filename: 'portfolio rootprint-27.png' },
    ],
  },
  {
    slug: 'S-connect',
    title: 'S Connect',
    thumbnail: '/projects/S-connect/1.png',
    assets: [
      { type: 'image' as const, src: '/projects/S-connect/1.png', filename: '1.png' },
      { type: 'image' as const, src: '/projects/S-connect/2.png', filename: '2.png' },
      { type: 'image' as const, src: '/projects/S-connect/3.png', filename: '3.png' },
      { type: 'image' as const, src: '/projects/S-connect/4.jpg', filename: '4.jpg' },
      { type: 'image' as const, src: '/projects/S-connect/5.png', filename: '5.png' },
      { type: 'image' as const, src: '/projects/S-connect/6.png', filename: '6.png' },
      { type: 'image' as const, src: '/projects/S-connect/7.png', filename: '7.png' },
      { type: 'image' as const, src: '/projects/S-connect/8.png', filename: '8.png' },
      { type: 'image' as const, src: '/projects/S-connect/9.png', filename: '9.png' },
      { type: 'image' as const, src: '/projects/S-connect/10.png', filename: '10.png' },
      { type: 'image' as const, src: '/projects/S-connect/11.png', filename: '11.png' },
      { type: 'image' as const, src: '/projects/S-connect/12.png', filename: '12.png' },
    ],
  },
  {
    slug: 'Shokhi Kotha',
    title: 'Shokhi Kotha',
    thumbnail: '/projects/Shokhi Kotha/shokhi kotha photoshoot.png',
    assets: [
      { type: 'image' as const, src: '/projects/Shokhi Kotha/shokhi kotha photoshoot.png', filename: 'shokhi kotha photoshoot.png' },
      { type: 'image' as const, src: '/projects/Shokhi Kotha/shokhi kotha photoshoot-01.png', filename: 'shokhi kotha photoshoot-01.png' },
      { type: 'image' as const, src: '/projects/Shokhi Kotha/shokhi kotha photoshoot-02.png', filename: 'shokhi kotha photoshoot-02.png' },
      { type: 'image' as const, src: '/projects/Shokhi Kotha/shokhi kotha photoshoot-03.png', filename: 'shokhi kotha photoshoot-03.png' },
      { type: 'image' as const, src: '/projects/Shokhi Kotha/shokhi kotha photoshoot-04.png', filename: 'shokhi kotha photoshoot-04.png' },
      { type: 'image' as const, src: '/projects/Shokhi Kotha/shokhi kotha photoshoot-09.png', filename: 'shokhi kotha photoshoot-09.png' },
      { type: 'image' as const, src: '/projects/Shokhi Kotha/shokhi kotha photoshoot-11.png', filename: 'shokhi kotha photoshoot-11.png' },
      { type: 'image' as const, src: '/projects/Shokhi Kotha/shokhi kotha photoshoot-12.png', filename: 'shokhi kotha photoshoot-12.png' },
      { type: 'image' as const, src: '/projects/Shokhi Kotha/shokhi kotha photoshoot-13.png', filename: 'shokhi kotha photoshoot-13.png' },
      { type: 'image' as const, src: '/projects/Shokhi Kotha/shokhi kotha photoshoot-14.png', filename: 'shokhi kotha photoshoot-14.png' },
      {
        type: 'youtube' as const,
        src: 'https://www.youtube.com/embed/jWcgLKd8A_s',
        caption: 'Shokhi Kotha Project Video',
      },
    ],
  },
  {
    slug: 'Voovue',
    title: 'Voovue',
    thumbnail: '/projects/Voovue/Eyewear branding-01.jpeg',
    assets: [
      { type: 'image' as const, src: '/projects/Voovue/Eyewear branding-01.jpeg', filename: 'Eyewear branding-01.jpeg' },
      { type: 'image' as const, src: '/projects/Voovue/Eyewear branding-02.png', filename: 'Eyewear branding-02.png' },
      { type: 'image' as const, src: '/projects/Voovue/Eyewear branding-03.png', filename: 'Eyewear branding-03.png' },
      { type: 'image' as const, src: '/projects/Voovue/Eyewear branding-04.png', filename: 'Eyewear branding-04.png' },
      { type: 'image' as const, src: '/projects/Voovue/Eyewear branding-05.png', filename: 'Eyewear branding-05.png' },
      { type: 'image' as const, src: '/projects/Voovue/Eyewear branding-06.png', filename: 'Eyewear branding-06.png' },
      { type: 'image' as const, src: '/projects/Voovue/Eyewear branding-07.png', filename: 'Eyewear branding-07.png' },
      { type: 'image' as const, src: '/projects/Voovue/Eyewear branding-08.png', filename: 'Eyewear branding-08.png' },
      { type: 'image' as const, src: '/projects/Voovue/Eyewear branding-09.png', filename: 'Eyewear branding-09.png' },
      { type: 'image' as const, src: '/projects/Voovue/Eyewear branding-10 (2).png', filename: 'Eyewear branding-10 (2).png' },
      { type: 'image' as const, src: '/projects/Voovue/Eyewear branding-11.png', filename: 'Eyewear branding-11.png' },
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
