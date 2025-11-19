
import Aside from '@/components/Admin/Aside';
import { Goldman } from 'next/font/google';

export const goldman = Goldman({ subsets: ['latin'], weight: ["400", "700"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">

      <body className={goldman.className}>
        <div className="w-screen h-screen flex bg-gray-700 gap-5 overflow-hidden">
          <div className="w-1/5 sticky top-0 left-0">
            <Aside />
          </div>
          <div className='w-4/5 h-full overflow-y-scroll'>
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}
