import React from 'react'
import { Section } from './Tag'
import Image from "next/image";


const MapSection = () => {
    return (
        <Section className='!px-0 md:!px-10'>
            <Image
                src="/png/map.png"
                alt="bookwithus"
                width={634}
                height={100}
                className="block h-full w-full object-cover"
            />
        </Section>
    )
}

export default MapSection