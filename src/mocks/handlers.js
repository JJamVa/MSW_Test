import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://www.jjamva.com", () => {
    console.log("test MSW!");
    return HttpResponse.json({
      name: "jjamVa",
      age: 87,
      message: "MSW 성공!",
    });
  }),
];
