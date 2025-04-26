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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <Section className=" bg-white py-4 justify-center">
      <div className="w-full">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-black text-white p-6 rounded-md">
          <input name="name" placeholder="First Name" onChange={handleChange} required className="p-3 text-black bg-white" />
          <input name="contact" placeholder="Contact Number" onChange={handleChange} required className="p-3 text-black bg-white" />
          <input name="location" placeholder="Location of Plot" onChange={handleChange} required className="p-3 text-black bg-white" />
          <input name="builtUpArea" type="number" placeholder="Super Built Up Area (sq.ft)*" onChange={handleChange} required className="p-3 text-black bg-white" />
          <input name="carParkingUnits" type="number" placeholder="No Of Car Parking (130 sq.ft/unit)*" onChange={handleChange} required className="p-3 text-black bg-white" />
          <input name="balconyArea" type="number" placeholder="Balcony & Utility Area (sq.ft)*" onChange={handleChange} required className="p-3 text-black bg-white" />

          <Description className="text-xs text-white md:col-span-2 ">
            The costs indicated are approximate costs for each resource. Actual cost estimates may vary for your city. Please check with our technical expert for a more accurate pricing or visit our office for a custom cost estimate as per your requirement. This amount is an approximate amount for construction area & it does not include compound wall area.
          </Description>
          <Button className="bg-[#F55252] border-[#F55252] text-white px-6 py-3 font-bold uppercase rounded md:col-span-1 self-end">Estimate Cost For Free</Button>
        </form>

        {estimates.length > 0 && (
          <div className="mt-12 text-center">
            <SubTitle>QUOTATION</SubTitle>
            <Title className='text-black'>Your Cost Estimate</Title>
            <Description className="text-black opacity-70 mt-2 mb-6">Your Perfect Home, Designed & Built for You. Hassle-free, On-Time,<br/> and Within Budget.</Description>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {estimates.map(pkg => (
                <div key={pkg.name} className="border border-gray-300 rounded-md shadow">
                  <h4 className="text-xs bg-black text-white font-bold uppercase py-6">{pkg.name}</h4>
                  <div className="text-left text-sm p-4 text-black font-bold">
                    <div className='flex justify-between mb-6'>
                      <div>
                        <p>Built Up Cost:</p>
                        <p className='text-xs font-semibold'>1070 sq.ft * ₹ 1,900/sq.ft </p>
                      </div>
                       <p>₹{pkg.builtUpCost.toLocaleString()}</p></div>
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