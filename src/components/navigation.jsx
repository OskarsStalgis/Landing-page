import Link from "next/link";

export default function Navigation (){
    return(
        <div className="flex justify-between px-20 py-10 items-center">
            <p className='text-3xl text-amber-600'>
            <Link href="/">{`<`} CODITY {`>`}</Link>
            </p>
            <div className="flex gap-5 items-center">
                <ul className="flex gap-5">
                    <li><Link href="/About">About</Link></li>
                    <li><Link href="/experiance">Courses</Link></li>
                    <li><Link href="/contacts">Contacts</Link></li>
                </ul>
                <button className="button bg-amber-600 hover:bg-red-600">
                    JOIN US
                </button>
            </div>
        </div>
    )  
}