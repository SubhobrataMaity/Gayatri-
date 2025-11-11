import { NextResponse } from 'next/server';
import { getProjectData } from '@/lib/projectUtils';

/**
 * API Route: GET /api/projects/[slug]
 * 
 * Returns data for a specific project
 */
export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const projectData = getProjectData(params.slug);
    
    if (!projectData) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(projectData);
  } catch (error) {
    console.error('Error fetching project:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
