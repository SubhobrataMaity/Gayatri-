import { NextResponse } from 'next/server';
import { getProjectData } from '@/lib/projectUtils';

// Mark this route as dynamic since it depends on the slug parameter
export const dynamic = 'force-dynamic';

/**
 * API Route: GET /api/projects/[slug]
 * 
 * Returns data for a specific project
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Project slug is required' },
        { status: 400 }
      );
    }
    
    const projectData = getProjectData(slug);
    
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
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
