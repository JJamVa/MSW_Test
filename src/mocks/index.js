const initMockAPI = async () => {
  if (typeof window === "undefined") {
    const { server } = await import("@/mocks/server");
    server.listen();
  } else {
    const { worker } = await import("@/mocks/worker");
    worker.start();
  }
};

export default initMockAPI;
