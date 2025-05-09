import { NextResponse } from 'next/server';

export async function GET() {
  const houses = [
    { id: 1, lat: 12.9716, lng: 77.5946 },
    { id: 2, lat: 28.7041, lng: 77.1025 },
    { id: 3, lat: 19.0760, lng: 72.8777 }
  ];
  
  return NextResponse.json(houses);
}