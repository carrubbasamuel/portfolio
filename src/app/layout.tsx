
import NavBar from './components/navbar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className='flex w-full'>
          <NavBar />
          
            <div className='flex-1'>{children}</div>
       
        </main>
      </body>
    </html>
  );
}
