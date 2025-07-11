import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafey Jawaid | Full-Stack Developer & Software Engineer",
  description: "Portfolio of Rafey Jawaid — Full-stack developer specializing in Python, Django, React, and scalable backend systems. Explore projects, skills, and contact info.",
  alternates: {
    canonical: "https://rafey-jawaid.com",
  },
  keywords: [
    "Full-stack developer", "Software Engineer", "Rafey Jawaid",
    "Python developer", "Django portfolio", "React developer", "Toronto developer",
    "Backend engineer", "Microservices", "Next.js portfolio", "Computer Science student"
  ],
  openGraph: {
    title: "Rafey Jawaid | Full-Stack Developer",
    description: "Explore Rafey Jawaid's portfolio featuring Python, Django, React projects, and scalable microservice architecture.",
    url: "https://rafey-jawaid.com",
    type: "website",
    images: [
      {
        url: "https://rafey-jawaid.com/project_photos/RafeyJawaid.jpg",
        width: 800,
        height: 600,
        alt: "Rafey Jawaid Portfolio Cover Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafey Jawaid | Full-Stack Developer",
    description: "Explore Rafey's projects in web development, backend systems, and infrastructure.",
    images: ["https://rafey-jawaid.com/project_photos/RafeyJawaid.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rafey Jawaid",
              url: "https://rafey-jawaid.com",
              jobTitle: "Full-Stack Developer",
              sameAs: [
                "https://github.com/RafeyJ03",
                "https://www.linkedin.com/in/rafey-jawaid-52973313b/",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
