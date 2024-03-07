import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://api.server.com/hello', () => {
    return HttpResponse.json({
      data: {
        text: 'hello',
      },
    });
  }),
];
