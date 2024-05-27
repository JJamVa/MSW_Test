import "./globals.css";
import { MswComponent } from "@/_component/msw.component";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ width: "100vw", height: "100vh" }}>
        <MswComponent />
        {children}
      </body>
    </html>
  );
}
