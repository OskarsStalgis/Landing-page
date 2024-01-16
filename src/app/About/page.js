import Image from "next/image"

export default function About () {
    return(
        <main>
            <section className='flex flex-col self-center place-self-center items-center justify-center h-auto m-auto px-10 py-5 max-w-6xl'>

                {/* Konteineris 1 */}
                <div className="flex flex-col max-w-xl self-baseline justify-center items-center h-fit px-10 py-5 space-y-8">
                    <h2 className="text-5xl">What are we all about? </h2>
                    <p className=" text-xl leading-8">Our goal is to make learning code easy and fun. We want to give people a chance to achieve their dreams in IT world.
                    </p>
                </div>
                {/* Konteineris 1 */}

                {/* Konteineris 2 */}
                <div className="flex flex-col self-end place-self-center max-w-xl px-10 py-5 space-y-8 ">
                    <h3 className="text-5xl">Our courses </h3>
                    <p className="text-xl leadign-8">We offer hundereds of courses for people with different skill levels so doesnt matter whether you are professional who wants to sharpen his skills or a begginer trying to join the IT world we have something for you. </p>
                    <button className="button bg-amber-600 hover:bg-red-600 mx-20">
                    <a href="https://rigacoding.lv/?gad_source=1&gclid=CjwKCAiA75itBhA6EiwAkho9exM9Og_Hx7Y4RR6-IhVPNN5r9Cmqu-10ftua71td_ykqqoHY5Zu0KxoCWIEQAvD_BwE">START YOUR JOURNEY NOW</a>
                    </button>
                </div>
                {/* Konteineris 2 */}

                {/* Konteineris 3 */}
                <div className="flex flex-col self-start place-self-end max-w- px-10 py-5 gap-4">
                    <h3 className="text-2xl text-center">We offer couses in following languages </h3>
                    <Image
                        src="/Images/languages.jpg"
                        width={500}
                        height={500}
                        alt="Picture of popular programming languages"
                    />
                </div>
                {/* Konteineris 3 */}

            </section>
        </main>
    ) 
}