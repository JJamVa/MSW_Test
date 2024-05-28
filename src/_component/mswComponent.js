"use client";

import initMockAPI from "@/mocks";
import { useEffect } from "react";

export const MswComponent = ({ children }) => {
  useEffect(() => {
    async function InitMSW() {
      if (process.env.NODE_ENV === "development") {
        await initMockAPI();
      }
    }
    InitMSW();
  }, []);

  return <>{children}</>;
};
