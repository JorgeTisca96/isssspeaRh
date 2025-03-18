'use server'

import Image from 'next/image';
import Link from 'next/link';



type Props = {
    children: React.ReactNode;
    params: { organicas: string }
}

//
export default async function inicioLayout({ children, params: { organicas } }: Props) {

    return (
        <>
            <div className="flex  h-screen " >
                <div className=' bg-card text-card-foreground  shadow-black  hover:shadow-2xl  px-4  fixed flex-none w-[13%] h-full   animate-fade-right duration-300'>
                    <div className='p-1 '>
                        <Link className='text-center hover:animate-fade hover:animate-once hover:animate-ease-out' href={`/${organicas}/inicio/`} >
                            {/* ISSSSPEA DIGITAL */}
                            {/* <Image  src={'/GobAgs_B_Vertical_Heráldica.png'} alt='LOGO ISSSSPEA' width={289} height={95} /> */}
                            <Image className='mb-2 p-1 ' src={'/logo.png'} alt='LOGO ISSSSPEA' width={289} height={95} />
                        </Link>

                    </div>

                    <ul className='p-4 '>
                        <li className='_sidebar_button transition ease-in-out delay-50' >
                            <Link href={`/${organicas}/inicio/empleados`} prefetch={true}>EMPLEADOS</Link>
                        </li>
                        <li className='_sidebar_button transition ease-in-out delay-50' >
                            <Link href={`/${organicas}/inicio/afiliacion`} prefetch={true}>AFILIACIÓN</Link>
                        </li>
                        {/* <li className='_sidebar_button transition ease-in-out delay-50' >
              <Link href={`/${organicas}/inicio/adeudos`} prefetch={true}>ADEUDOS</Link>
            </li>
            <li className='_sidebar_button transition ease-in-out delay-50' >
              ISSSSPENET
            </li> */}

                    </ul>
                </div>
                <div className='w-[13%]'></div>
                <div className='flex-none w-[87%]'>
                    <div className=' bg-card text-card-foreground  z-50 fixed w-[87%]  transition-all duration-500  hover:shadow-md hover:shadow-[--gray]'>
                        <div className='text-black font-bold flex h-[4%] justify-between pt-2  animate-fade-down '>
                            <div></div>
                            <div>MENU</div>
                            <div className='flex justify-between align-bottom'>

                                {/* <ThemeMode /> */}
                            </div>
                        </div>
                    </div>

                    <div className="p-4  h-[95%] pt-12 bg-neutral-200" >
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

