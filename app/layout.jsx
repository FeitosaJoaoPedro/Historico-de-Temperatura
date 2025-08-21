import { Ubuntu } from "next/font/google";
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={ubuntu.className}
        style={{
          background:
            "linear-gradient(90deg,rgba(252, 252, 61, 1) 0%, rgba(176, 255, 254, 1) 45%, rgba(255, 255, 255, 1) 100%)",
          height: "100vh",
          fontWeight: "400",
          margin: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}
