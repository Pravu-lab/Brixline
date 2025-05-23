"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FooterSection from "@/Components/Footer";
import Header from "@/Components/Header";
import Image from "next/image";
import { useThankYou } from "@/contexts/ThankYouContext";
import { LoadingAnimation } from "@/Components/loader/LoadingAnimation";

export default function ChannelPartnerPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    phone: "",
    email: "",
    organization: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const { showThankYouWithTimeout } = useThankYou();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!formData.name || !formData.city || !formData.phone) {
      setError("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/channel-partner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", city: "", organization: "" });
      if (response.ok) {
        showThankYouWithTimeout();
      }
    } catch (err) {
      setError("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <AnimatePresence>
        // In your page component
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            backgroundColor: isScrolled
              ? "rgba(255,255,255,1)"
              : "rgba(255,255,255,0)",
          }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 left-0 w-full z-[1000] ${
            isScrolled ? "shadow-md" : ""
          } [&_header]:!opacity-100`}
        >
          <Header
            transparent={!isScrolled}
            forceWhiteLogo={!isScrolled}
            whiteText={!isScrolled}
          />
        </motion.div>
      </AnimatePresence>
      <header className="relative bg-[url('/png/cp-hero.png')] h-[658px] md:h-[716px] w-full bg-cover bg-center tracking-wide">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-28 xl:gap-60 pt-48 md:pt-0 px-3 h-full">
          <div className="flex flex-col justify-center items-center md:items-start gap-3 md:gap-6 pt-22">
            <h1 className="text-white text-center md:text-left text-[40px] md:text-[55px] lg:text-[82px] font-semibold md:font-bold leading-[98%]">
              Channel Partner <br /> Program
            </h1>
            <p className="text-white text-center md:text-left text-sm md:text-md lg:text-lg font-normal md:font-medium leading-[130%] md:leading-[160%]">
              Join us as channel partners and grow your business while{" "}
              <br className="hidden sm:block" /> we redefine the construction
              landscape.
            </p>
          </div>

          <div className="px-3">
            <div className="relative bg-white/60 mx-auto h-[521px] w-[352px] shadow-sm mt-5 md:mt-10 px-4 py-6 md:p-8">
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                  <div className="">
                    <input
                      type="text"
                      placeholder="Name*"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="bg-white w-full p-3 !text-black placeholder:text-black font-normal border border-black/10 focus:outline-none focus:ring-2 focus:ring-gray-100"
                    />
                  </div>
                  <div className="">
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-white w-full p-3 border !text-black placeholder:text-black font-normal border-black/10 focus:outline-none focus:ring-2 focus:ring-gray-100"
                    />
                  </div>
                  <div className="">
                    <input
                      type="tel"
                      placeholder="Phone*"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-white w-full p-3 border !text-black placeholder:text-black font-normal border-black/10 focus:outline-none focus:ring-2 focus:ring-gray-100"
                      required
                    />
                  </div>
                  <div className="relative">
                    <select
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      required
                      className="bg-white w-full p-3 border !text-black placeholder:text-black font-normal border-black/10 appearance-none focus:outline-none focus:ring-2 focus:ring-gray-100"
                    >
                      <option value="">City*</option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Bangalore</option>
                    </select>
                    <div className="absolute inset-y-0 right-5 bottom-2 flex items-center pointer-events-none">
                      <Image
                        src="/svg/arrow-down.svg"
                        alt="arrow-down"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Organization"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({ ...formData, organization: e.target.value })
                      }
                      className="bg-white w-full p-3 border !text-black placeholder:text-black font-normal border-black/10 focus:outline-none focus:ring-2 focus:ring-gray-100"
                      required
                    />
                  </div>
                </div>
                <div className="md:row-start-2 md:col-span-2 flex items-center order-2 md:order-1">
                  <label className="flex items-center space-x-3">
                    <span className="text-sm text-black leading-[140%] font-medium">
                      By proceeding, you are indicating that you have read and
                      agree to our{" "}
                      <span className="underline">terms of use</span> &{" "}
                      <span className="underline">privacy policy</span>
                    </span>
                  </label>
                </div>

                <div className="md:row-start-2 md:col-span-2 flex items-center justify-end order-1 md:order-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-[#F55252] text-white px-8 py-3.5 h-full transition-colors text-sm font-medium ${
                      loading
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-red-600"
                    }`}
                  >
                    {loading ? (
                      <>
                      <LoadingAnimation className="mx-auto w-3 h-3"/>
                      </>
                    ): "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
      <section className="max-w-screen-xl mx-auto px-3 md:px-10 pt-48 md:pt-20 tracking-wide">
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="uppercase text-[#F55252] text-sm md:text-base font-bold leading-[140%] text-center">
            discover
          </p>
          <h2 className="text-black text-3xl md:text-5xl leading-[120%] font-medium text-center">
            How To Become A <br /> Channel Partner
          </h2>
          <p className="text-[#131313] text-sm md:text-base font-medium leading-[140%] text-center">
            We guarantee a hassle free experience for our <br /> contractors as
            well.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-10 mt-10 md:mt-20">
          <div className="flex flex-col gap-4 px-4 py-6 md:px-6 md:py-6">
            <Image
              src="/svg/file.svg"
              alt="file"
              width={48}
              height={48}
              className="h-[32px] w-[32px] md:h-[48px] md:w-[48px]"
            />
            <h6 className="text-black text-lg md:text-xl font-semibold leading-[140%]">
              Fill Your Details
            </h6>
            <p className="text-black text-sm md:text-md font-medium leading-[140%]">
              Brixline team will reach <br className="hidden sm:block" /> out to
              you for verification
            </p>
          </div>

          <div className="flex flex-col gap-4 px-4 py-6 md:px-6 md:py-6">
            <Image
              src="/svg/upload.svg"
              alt="upload"
              width={48}
              height={48}
              className="h-[32px] w-[32px] md:h-[48px] md:w-[48px]"
            />
            <h6 className="text-black text-lg md:text-xl font-semibold leading-[140%]">
              Upload Leads
            </h6>
            <p className="text-black text-sm md:text-md font-medium leading-[140%]">
              Login and start adding <br className="hidden sm:block" /> your
              leads
            </p>
          </div>

          <div className="flex flex-col gap-4 px-4 py-6 md:px-6 md:py-6">
            <Image
              src="/svg/status.svg"
              alt="status"
              width={48}
              height={48}
              className="h-[32px] w-[32px] md:h-[48px] md:w-[48px]"
            />
            <h6 className="text-black text-lg md:text-xl font-semibold leading-[140%]">
              Check Lead Status
            </h6>
            <p className="text-black text-sm md:text-md font-medium leading-[140%]">
              Get real-time update of <br className="hidden sm:block" />
              the status of your lead
            </p>
          </div>

          <div className="flex flex-col gap-4 px-4 py-6 md:px-6 md:py-6">
            <Image
              src="/svg/commission.svg"
              alt="commission"
              width={48}
              height={48}
              className="h-[32px] w-[32px] md:h-[48px] md:w-[48px]"
            />
            <h6 className="text-black text-lg md:text-xl font-semibold leading-[140%]">
              Fill Your Details
            </h6>
            <p className="text-black text-sm md:text-md font-medium leading-[140%]">
              Your lead converts into a <br className="hidden sm:block" />
              project‑ You Earn!
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly items-center bg-black max-w-screen-4xl h-[512px] lg:h-[285px] my-20">
          <div className="flex flex-col justify-center items-start gap-2 md:gap-0 px-9 md:px-0">
            <p className="text-[#F55252] block md:hidden text-sm font-bold leading-[140%]">WHY US?
            </p>
            <h4 className="text-white text-[32px] md:text-4xl lg:text-5xl font-medium leading-[120%]">
              Love Working <br /> With Us
            </h4>
            <p className="text-white/40 text-md font-medium leading-[160%]">
              A transparent and hassle-free way to make the{" "}
              <br className="hidden sm:block" /> best out of your prospects
            </p>
          </div>
          <div className="flex flex-row gap-20 md:gap-10 flex-wrap">
            <div className="p-2 md:p-6 flex flex-col gap-8">
              <Image
                src="/svg/stats.svg"
                alt="stats"
                width={48}
                height={48}
                className="h-[32px] w-[32px] md:h-[48px] md:w-[48px]"
              />
              <h6 className="text-white text-md lg:text-[20px] leading-[140%]">
                Grow Your <br /> Business
              </h6>
            </div>
            <div className="hidden md:flex p-2 md:p-6 flex-col gap-8">
              <Image
                src="/svg/file-time.svg"
                alt="file-time"
                width={48}
                height={48}
                className="h-[32px] w-[32px] md:h-[48px] md:w-[48px]"
              />
              <h6 className="text-white text-md lg:text-[20px] leading-[140%]">
                Real Time Update <br /> On Lead Status
              </h6>
            </div>
            <div className="p-2 md:p-6 flex flex-col gap-8">
              <Image
                src="/svg/dark-commission.svg"
                alt="commission"
                width={48}
                height={48}
                className="h-[32px] w-[32px] md:h-[48px] md:w-[48px]"
              />
              <h6 className="text-white text-md lg:text-[20px] leading-[140%]">
                Earn <br /> Commission
              </h6>
            </div>
          </div>
          <div className="block md:hidden px-6">
            <Image
              src="/svg/rtu-panel.svg"
              alt="commission"
              width={348}
              height={92}
              className="w-[348px] h-[92px]"
            />
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
