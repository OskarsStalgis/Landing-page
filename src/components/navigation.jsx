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
                    <li><Link href="/Courses">Courses</Link></li>
                    <li><Link href="/Contacts">Contacts</Link></li>
                </ul>
                <button className="button bg-amber-600 hover:bg-red-600">
                    <a href="https://rigacoding.lv/?gad_source=1&gclid=CjwKCAiA75itBhA6EiwAkho9exM9Og_Hx7Y4RR6-IhVPNN5r9Cmqu-10ftua71td_ykqqoHY5Zu0KxoCWIEQAvD_BwE">JOIN US</a>
                </button>
            </div>
        </div>
    )  
}