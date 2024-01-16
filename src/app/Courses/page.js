import Image from "next/image"

export default function Courses() {
    return(
        <main>
            <section className='flex flex-col self-center place-self-center items-center justify-center h-auto m-auto px-10 py-5 space-y-16 max-w-6xl'>
                
                {/* Kursa apraksts */}
                <div className="flex max-w-3xl self-baseline justify-center items-center h-fit px-10 py-5 space-y-8 border-solid border-2 border-amber-600">
                    <div> 
                    <Image
                        src="java.svg"
                        width={500}
                        height={500}
                        alt="Picture of popular programming languages"
                    />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl">Java course for begginers </h2>
                        <p className=" leading-8">Excelent course if you are new to Java and want to get into it!
                        </p>
                        <button className="button bg-amber-600 hover:bg-red-600">
                        <a href="https://rigacoding.lv/?gad_source=1&gclid=CjwKCAiA75itBhA6EiwAkho9exM9Og_Hx7Y4RR6-IhVPNN5r9Cmqu-10ftua71td_ykqqoHY5Zu0KxoCWIEQAvD_BwE">START NOW</a>
                        </button>
                    </div>
                </div>
                {/* Kursa apraksts */}

                {/* Kursa apraksts */}
                <div className="flex max-w-3xl self-baseline justify-center items-center h-fit px-10 py-5 space-y-8 border-solid border-2 border-amber-600">
                    <div>
                    <Image
                        src="python.svg"
                        width={500}
                        height={500}
                        alt="Picture of popular programming languages"
                    />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl">Python course for begginers </h2>
                        <p className=" leading-8">Excelent course if you are new to Python and want to get into it!
                        </p>
                        <button className="button bg-amber-600 hover:bg-red-600">
                        <a href="https://rigacoding.lv/?gad_source=1&gclid=CjwKCAiA75itBhA6EiwAkho9exM9Og_Hx7Y4RR6-IhVPNN5r9Cmqu-10ftua71td_ykqqoHY5Zu0KxoCWIEQAvD_BwE">START NOW</a>
                        </button>
                    </div>
                </div>
                {/* Kursa apraksts */}

                {/* Kursa apraksts */}
                <div className="flex max-w-3xl self-baseline justify-center items-center h-fit px-10 py-5 space-y-8 border-solid border-2 border-amber-600">
                    <div>
                    <Image
                        src="PHP.svg"
                        width={500}
                        height={500}
                        alt="Picture of popular programming languages"
                    />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl">PHP course for begginers </h2>
                        <p className=" leading-8">Excelent course if you are new to Java and want to get into it!
                        </p>
                        <button className="button bg-amber-600 hover:bg-red-600">
                        <a href="https://rigacoding.lv/?gad_source=1&gclid=CjwKCAiA75itBhA6EiwAkho9exM9Og_Hx7Y4RR6-IhVPNN5r9Cmqu-10ftua71td_ykqqoHY5Zu0KxoCWIEQAvD_BwE">START NOW</a>
                        </button>
                    </div>
                </div>
                {/* Kursa apraksts */}

                {/* Kursa apraksts */}
                <div  className="flex max-w-3xl self-baseline justify-center items-center h-fit px-10 py-5 space-y-8 border-solid border-2 border-amber-600">
                    <div>
                    <Image
                        src="C++.svg"
                        width={500}
                        height={500}
                        alt="Picture of popular programming languages"
                    />
                    </div>
                    <div className="space-y-4"> 
                        <h2 className="text-2xl">C++ course for begginers </h2>
                        <p className=" leading-8">Excelent course if you are new to C++ and want to get into it!
                        </p>
                        <button className="button bg-amber-600 hover:bg-red-600">
                        <a href="https://rigacoding.lv/?gad_source=1&gclid=CjwKCAiA75itBhA6EiwAkho9exM9Og_Hx7Y4RR6-IhVPNN5r9Cmqu-10ftua71td_ykqqoHY5Zu0KxoCWIEQAvD_BwE">START NOW</a>
                        </button>
                    </div>
                </div>
                {/* Kursa apraksts */}
                
            </section>
        </main>
    ) 
}