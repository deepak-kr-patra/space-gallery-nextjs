import "./globals.css";
import { Toaster } from 'react-hot-toast';


export const metadata = {
  title: "Space Gallery",
  description: "Web app to view best astronomy picture of the day",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <div className="wrapper">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
