import React from 'react'
import { Section } from './Tag'
import Image from "next/image";


const MapSection = () => {
    return (
        <Section>
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