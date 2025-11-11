import { NextResponse } from 'next/server';
import { getAllProjects } from '@/lib/projectUtils';

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
    return NextResponse.json([], { status: 500 });
  }
}
