import { NextResponse } from 'next/server';
import { getAllProjects } from '@/lib/projectUtils';

// Use Node.js runtime to access file system
export const runtime = 'nodejs';
// Cache the response for better performance
export const revalidate = 3600; // Revalidate every hour

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
