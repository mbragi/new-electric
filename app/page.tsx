'use client'
import HomepageComponent from '@/Components/Home'
import Navbar from '@/Components/Navbar'
import Princing from '@/Components/Princing'



export default function Home() {
  return (
    <main className="flex min-h-screen w-full overflow-y-hidden flex-col items-center justify-between">
      <Navbar />
      <HomepageComponent />
      <Princing/>
    </main>
  )
}
