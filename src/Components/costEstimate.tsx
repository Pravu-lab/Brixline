'use client';
import { useState } from 'react';
import { Button, Description, Section, SubTitle, Title } from './Tag';

type Estimate = {
  name: string;
  builtUpCost: number;
  carParkingCost: number;
  balconyCost: number;
  total: number;
};


export default function EstimatePage() {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    location: '',
    builtUpArea: '',
    carParkingUnits: '',
    balconyArea: '',
  });
  const [estimates, setEstimates] = useState<Estimate[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const calculateEstimates = () => {
    const builtUpArea = parseFloat(form.builtUpArea) || 0;
    const carParkingUnits = parseInt(form.carParkingUnits) || 0;
    const balconyArea = parseFloat(form.balconyArea) || 0;

    const packages = [
      {
        name: 'Basic Package - ₹1,900/sq.ft (incl. GST)',
        builtUpRate: 1900,
        carParkingRate: 1235,
        balconyRate: 1235,
      },
      {
        name: 'Classic Package - ₹1,900/sq.ft (incl. GST)',
        builtUpRate: 1900,
        carParkingRate: 1235,
        balconyRate: 1235,
      },
      {
        name: 'Premium Package - ₹2,350/sq.ft (incl. GST)',
        builtUpRate: 2350,
        carParkingRate: 1235,
        balconyRate: 1235,
      },
      {
        name: 'Royal Package - ₹2,350/sq.ft (incl. GST)',
        builtUpRate: 2350,
        carParkingRate: 1235,
        balconyRate: 1235,
      },
    ];

    const calculated = packages.map(pkg => {
      const builtUpCost = builtUpArea * pkg.builtUpRate;
      const carParkingCost = carParkingUnits * 130 * pkg.carParkingRate;
      const balconyCost = balconyArea * pkg.balconyRate;
      const total = builtUpCost + carParkingCost + balconyCost;

      return {
        name: pkg.name,
        builtUpCost,
        carParkingCost,
        balconyCost,
        total,
      };
    });

    setEstimates(calculated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateEstimates();
  };

  return (
    <Section className=" bg-white py-4 justify-center !pt-0">
      <div className="w-full">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-black text-white p-6">
          <input name="name" placeholder="First Name" onChange={handleChange} required className="p-3 text-black bg-white" />
          <input name="contact" placeholder="Contact Number" onChange={handleChange} required className="p-3 text-black bg-white" />
          <input name="location" placeholder="Location of Plot" onChange={handleChange} required className="p-3 text-black bg-white" />
          <input name="builtUpArea" type="number" placeholder="Super Built Up Area (sq.ft)*" onChange={handleChange} required className="p-3 text-black bg-white [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" />
          <div className="relative w-full">
  <select
    name="carParkingUnits"
    onChange={handleChange}
    className="p-3 pr-10 text-black bg-white appearance-none w-full"
  >
    <option value="">Select Car Parking Units</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>

  {/* Dropdown Icon */}
  <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        x="24"
        width="24"
        height="24"
        transform="rotate(90 24 0)"
        fill="#F55252"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5059 10.7023L16.0028 9.19928L11.9965 13.2056L7.99023 9.19934L6.48718 10.7024L10.4953 14.7105L11.9966 13.2093L13.4977 14.7105L17.5059 10.7023Z"
        fill="white"
      />
    </svg>
  </div>
</div>
      <input name="balconyArea" type="number" placeholder="Balcony & Utility Area (sq.ft)*" onChange={handleChange} required className="p-3 text-black bg-white [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" />

          <Description className="text-xs text-white md:col-span-2 ">
            The costs indicated are approximate costs for each resource. Actual cost estimates may vary for your city. Please check with our technical expert for a more accurate pricing or visit our office for a custom cost estimate as per your requirement. This amount is an approximate amount for construction area & it does not include compound wall area.
          </Description>
          <Button className="bg-[#F55252] border-[#F55252] text-white px-6 py-3 font-bold uppercase md:col-span-1 self-end">Estimate Cost For Free</Button>
        </form>

        {estimates.length > 0 && (
          <div className="mt-16 text-center">
            <SubTitle>QUOTATION</SubTitle>
            <Title className='text-black'>Your Cost Estimate</Title>
            <Description className="text-black opacity-70 mt-2 mb-6">Your Perfect Home, Designed & Built for You. Hassle-free, On-Time,<br /> and Within Budget.</Description>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {estimates.map(pkg => (
                <div key={pkg.name} className="border border-gray-300 rounded-md shadow">
                  <h4 className="text-xs bg-black text-white font-bold uppercase py-6">{pkg.name}</h4>
                  <div className="text-left text-sm p-4 text-black font-bold">
                    <div className='flex justify-between mb-6'>
                      <div>
                        <p className='font-semibold '>Built Up Cost:</p>
                        <p className='text-xs font-semibold'>1070 sq.ft * ₹ 1,900/sq.ft </p>
                      </div>
                      <p className='font-extrabold'>₹{pkg.builtUpCost.toLocaleString()}</p></div>
                    <div className='flex justify-between mb-6'>
                      <div>
                        <p>Car Parking Cost:</p>
                        <p className='text-xs font-semibold'>1130 sqft * ₹ 1,235/sqft</p>
                      </div>
                      <p>₹{pkg.carParkingCost.toLocaleString()}</p></div>
                    <div className='flex justify-between mb-6'>
                      <div>
                        <p>Balcony & Utility Cost:</p>
                        <p className='text-xs font-semibold'>800 sq.ft * ₹1,235/sq.ft</p>
                      </div><p>₹{pkg.balconyCost.toLocaleString()}</p></div>
                    <hr className="my-2" />
                    <div className='flex justify-between'><p className="font-bold text-base">Total Cost:</p> <p>₹{pkg.total.toLocaleString()}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}