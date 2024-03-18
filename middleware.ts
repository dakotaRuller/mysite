import { NextResponse } from "next/server";

// Types
type getHeaders = (request: request) => NextResponse;
type headers =  {};
type request = {
    headers: headers,
    nextUrl: {
        pathname: string
    }
};

export function middleware(request: request): getHeaders {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}