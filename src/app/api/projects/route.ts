import { NextResponse } from 'next/server';
import { getAllProjects } from '@/lib/projectUtils';

// Mark this route as dynamic since it reads from the file system
export const dynamic = 'force-dynamic';

/**
 * API Route: GET /api/projects
 * 
 * Returns all projects from /public/projects/ folder
 * This allows client components to fetch project data dynamically
 */
export async function GET() {
  try {
    const projects = getAllProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
