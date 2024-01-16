import Image from "next/image"


export default function Contacts() {
    return(
        <main>
            <section className='flex flex-col self-center place-self-center items-center justify-center h-auto m-auto gap-16 px-10 py-5 max-w-6xl'>

                {/* Konkatkti */}
                <div className="flex flex-col self-start place-self-end max-w-xl px-10 py-5 gap-4">
                   <h2 className="text-2xl text-center">Having a problem? Dont worry. Let us help you. Contact us here:</h2>
                    <ul>
                         <li className="flex items-center">
                            <Image
                                src="/Images/telephone.png"
                                width={50}
                                height={10}
                                alt="Telephone icon"
                            />
                            <p>80001212 or +371 29121212</p>
                        </li>
                         <li className="flex items-center">
                            <Image
                                src="/Images/email.png"
                                width={50}
                                height={10}
                                alt="Email icon"
                            />
                            <a herf="">support@codity.com</a>
                        </li>
                        </ul>
                </div>
                {/* Konkatkti */}

                {/* Sociālie mēdiji */}
                <div className="flex flex-col self-end place-self-end max-w-xl px-10 py-5 gap-4">
                    <h3 className="text-2xl text-center">Follow us on our social media to learn about our latest courses, discouts, and many more news!</h3>
                    <ul className="place-self-end">
                        <li className="flex items-center">
                            <Image
                                src="instagram.svg"
                                width={100}
                                height={10}
                                alt="Instagram icon"
                            />
                            <a herf="">CodityCourses</a>
                        </li>
                        <li className="flex items-center">
                            <Image
                                src="twitter.svg"
                                width={100}
                                height={10}
                                alt="Twitter icon"
                            />
                            <a herf="">@Codity</a>
                        </li>
                        <li className="flex items-center">
                            <Image
                                src="youtube.svg"
                                width={100}
                                height={10}
                                alt="Youtube icon"
                            />
                            <a href="https://www.youtube.com/watch?v=igJeQwALblY">LearnWithCodity</a>
                        </li>
                    </ul>
                </div>
                {/* Sociālie mēdiji */}

                {/* Adrese */} 
                <div className="flex flex-col self-start place-self-end max-w-xl px-10 py-5 gap-4">
                    <h3 className="text-2xl text-center">Looking for us? Here is our office adresses</h3>
                    <ul>
                         <li className="flex items-center">
                            <Image
                                src="/Images/Office.png"
                                width={40}
                                height={10}
                                alt="Building icon"
                            />
                            <p>Pils laukums 3, Centra rajons, Rīga, LV-1050 </p>
                        </li>
                         <li className="flex items-center">
                            <Image
                                src="/Images/Office.png"
                                width={40}
                                height={10}
                                alt="Email icon"
                            />
                            <p>1600 Pennsylvania Avenue NW Washington, D.C. 20500 U.S.</p>
                        </li>
                        </ul>
                </div>
                {/* Adrese */} 
                
            </section>
        </main>
    )    
}