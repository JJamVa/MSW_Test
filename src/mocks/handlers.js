import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://www.test.com/test", () => {
    console.log("test MSW!");
    return HttpResponse.json({
      success: true,
      message: "성공",
    });
  }),
];
