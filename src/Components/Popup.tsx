'use client'; // Marking this file as a Client Component

import { useState } from 'react';
import { Button } from './Tag';

const data = [
  {
    title: 'Designs & Drawings',
    items: [
      '2D Architectural Plans',
      'Standard Front Elevation',
      'Structural Blueprint with 3D Visualization',
    ],
  },
  {
    title: 'Structure',
    items: [
      'Steel – Sunvik, Prime Gold, Kamadhenu, or equivalent approved brand',
      'Cement – Dalmia, Bharathi, or equivalent (43 or 53 Grade)',
      'Aggregates – 20mm & 40mm graded stone aggregates',
      'Blocks – Standard solid concrete blocks (6-inch and 4-inch)',
      'RCC Design Mix – M20 / M25 as per structural engineer’s recommendation',
      'Ceiling Height – 10 feet (measured from finished floor level to finished floor level)',
    ],
  },
  {
    title: 'Kitchen',
    items: [
      'Ceramic Wall Dado – Up to ₹40 per sq. ft.',
      'Main Sink Faucet – Up to ₹1,300',
      'Other Faucets & Accessories – ISI-marked for quality assurance',
      'Kitchen Sink – Stainless steel single-bowl sink valued at ₹3,000',
    ],
  },
  {
    title: 'Bathroom',
    items: [
      'Ceramic Wall Dado: Up to 7 ft height – ₹40 per sq. ft.',
      'Sanitaryware & CP Fittings: Up to ₹30,000 per 1000 sq. ft. (Cera or equivalent)',
      'CPVC Pipes: APL Apollo or approved equivalent',
      'Bathroom Doors: Waterproof flush doors or WPC (Wood Polymer Composite)',
    ],
  },
  {
    title: 'Door & Windows',
    items: [
      'Windows: Aluminium windows with glass and mesh shutters (3-track system with 1 mesh), using Jindal profiles',
      'Main Door: Veneer-finished flush door with a 5" x 3" Sal wood frame – Total value ₹20,000 including fixtures',
      'Internal Doors: Membrane or laminate-finished flush doors up to ₹11,000 including fixtures; door frames made of 4" x 2.5" Sal wood',
    ],
  },
  {
    title: 'Painting',
    items: [
      'Interior Painting: JK Wall Putty with Tractor Emulsion or approved equivalent',
      'Exterior Painting: Asian Primer with Ace Exterior Emulsion or equivalent',
    ],
  },
  {
    title: 'Flooring',
    items: [
      'Living & Dining Flooring: Vitrified tiles valued up to ₹50 per sq. ft.',
      'Bedrooms & Kitchen Flooring: Tiles valued up to ₹50 per sq. ft.',
      'Balcony & Open Areas: Anti-skid tiles valued up to ₹40 per sq. ft.',
      'Staircase Flooring: Sadarahalli granite valued up to ₹70 per sq. ft.',
      'Parking Area Flooring: Anti-skid tiles valued up to ₹40 per sq. ft.',
    ],
  },
  {
    title: 'Electrical',
    items: [
      'Wiring: All electrical wiring shall use fire-resistant wires – Finolex Silver FR or approved equivalent',
      'Switches & Sockets: Legrand Allzy series or equivalent',
    ],
  },
  {
    title: 'Miscellaneous',
    items: [
      'Overhead Tank: Double-layered 1000 Ltr capacity – Apollo make',
      'Underground Sump: 4000 Ltr capacity',
      'Staircase Railing: Mild steel (MS) railing',
      'Window Grills: Basic MS grills with enamel paint, priced at ₹195 per sq. ft.',
    ],
  },
];

export default function MobileQuotePopup({ setOpen }: { setOpen: (open: boolean) => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-b from-black to-neutral-900 text-white flex w-full">
      <div className="flex flex-col sm:flex-row h-full w-full relative">
        {/* Form Section */}
        <div className="relative w-full sm:w-[70%]">
          <div className="flex justify-end p-4 absolute top-0 right-0">
            <button onClick={() => handleClose()} className="text-2xl font-bold">×</button>
          </div>
          <div className="m-auto w-[90%] py-8 sm:py-0 sm:w-[70%] flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-medium text-center mb-10">
              Connect with our <br /> architectural experts.
            </h2>

            <div className="w-full grid grid-cols-2 gap-4 mb-10">
              <input className="bg-white text-black p-3 rounded" placeholder="First Name" />
              <input className="bg-white text-black p-3 rounded" placeholder="Contact Number" />
              <input className="bg-white text-black p-3 rounded" placeholder="Email Address" />
              <input className="bg-white text-black p-3 rounded" placeholder="Location of Plot" />
            </div>

            <Button className="bg-[#F55252] text-white !py-5 px-6 rounded font-semibold border-[#F55252]">
              GET A FREE QUOTE
            </Button>

            <p className="text-xs mt-8 text-gray-400 text-center">
              By proceeding, you are indicating that you have read and agree to our{' '}
              <a href="#" className="underline">terms of use</a> &{' '}
              <a href="#" className="underline">privacy policy</a>.
            </p>
          </div>
        </div>

        {/* Pricing Accordion */}
        <div className="bg-[#1a1a1a] text-white p-4 w-full max-w-md mx-auto rounded-md overflow-y-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold">₹ 1,760</h2>
            <p className="text-sm">/sq.ft (Incl. GST)</p>
            <div className="mt-2 bg-[#F55252] px-3 py-1 inline-block text-xs font-semibold rounded">
              BASIC PACKAGE
              <span className="ml-1 inline-block align-middle">▼</span>
            </div>
          </div>

          <div className="mt-6 divide-y divide-gray-700 ">
            {data.map((section, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={section.title} className="py-4">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <h3 className="font-semibold text-lg">{section.title}</h3>
                    <button
                      className={`w-6 h-6 text-sm font-bold rounded-sm ${
                        isOpen ? 'bg-[#F55252]' : 'bg-[#F55252]'
                      }`}
                    >
                      {isOpen ? '–' : '+'}
                    </button>
                  </div>
                  {isOpen && (
                    <ul className="mt-3 text-sm text-gray-300 space-y-1 pl-2">
                      {section.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
