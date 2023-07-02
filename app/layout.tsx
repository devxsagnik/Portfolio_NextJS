import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Sagnik Dutta",
  description:
    "Welcome to my personal portfolio site showcasing my projects and skills.",
  keywords: "personal, portfolio, skills, projects",
  author: "Sagnik Dutta",
  openGraph: {
    title: "All About Me.",
    description: "Welcome to my professional portfolio website! Explore a showcase of my skills, expertise, and accomplishments in the world of [your field/industry]. With a passion for [specific skills or areas of focus], I create innovative and visually stunning projects that demonstrate my dedication to excellence.Through this platform, I aim to inspire and connect with fellow enthusiasts, potential clients, and employers who are seeking a talented and creative professional. Dive into my carefully curated collection of projects, where you'll find examples of [specific types of work or projects] that highlight my ability to [unique selling points or strengths].As you navigate my portfolio, you'll discover a seamless user experience, intuitive design, and attention to detail that reflect my commitment to delivering exceptional results. By leveraging cutting-edge technologies and staying up-to-date with the latest industry trends, I ensure that each project exceeds expectations. Whether you're looking for a skilled collaborator, seeking inspiration, or interested in discussing potential opportunities, I would be delighted to connect with you. Feel free to reach out through the provided contact information to discuss how we can work together to bring your visions to life.\nThank you for visiting my portfolio website. I look forward to connecting and exploring exciting possibilities together",
    type: "website",
    url: "https://sagnikdutta.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
