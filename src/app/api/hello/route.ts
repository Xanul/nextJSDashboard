import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

  return NextResponse.json({
    hola: 'Mundo',
    method: 'GET'
  })
  
  return new Response(JSON.stringify({
    message: 'Hello World'
  }), { status: 200 } );
}

export async function POST(request: Request) { 

  return NextResponse.json({
    hola: 'Mundo',
    method: 'POST'
  })
  
  return new Response(JSON.stringify({
    message: 'Hello World'
  }), { status: 200 } );
}