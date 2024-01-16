import Image from 'next/image'
import About from './About/page'

export default function Home() {
  return (
    <main>
      <section className='flex flex-col self-center place-self-center items-center justify-center h-auto m-auto px-10 py-5 max-w-7xl'>
          <div className='flex flex-col max-w-2xl self-baseline justify-center items-center h-fit px-10 py-5 space-y-8'>
            <h1 className='text-7xl'>Evolve your coding to the next level!</h1>
            <p className='leading-8 text-l'>Join millions of users and improve your coding skills using personalized courses for all of the worlds popular languages with <span className='text-2xl text-amber-600'> {`<`} CODITY {`>`} </span> </p>  
            <button className="button bg-amber-600 hover:bg-red-600 mx-20">
              START YOUR JOURNEY NOW
            </button>
          </div>

          <div className='flex flex-col self-end place-self-center max-w-xl px-10 py-5 space-y-8'>
            <Image
              src="/Images/programmer1.png"
              width={450}
              height={500}
              alt="Picture of popular programming languages"
            />
          </div>
      </section>

  
    
      
    </main>
  )
}
