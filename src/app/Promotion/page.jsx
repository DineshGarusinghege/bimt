'use client';

import Image from 'next/image';
import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';
import Link from 'next/link';

const PromotionSection = () => {
  return (
    <>
      <head>
        <title>Promotion | BIMT Campus</title>
        <meta
          name="description"
          content="BIMT Campus offers comprehensive Master’s degree programs designed to deepen your expertise and advance your career. With a focus on innovation and research, our programs empower students to become leaders in their chosen fields."
        />
      </head>

      <MainHeader />
      {/* <AnnounsmentBar /> */}


      <section className="container mx-auto px-4 max-w-[1300px] py-16">
        <div className="flex flex-wrap md:flex-nowrap items-center gap-8">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/depositphotos_124372100-stock-photo-promotion-sketch-on-notebook.webp"
              alt="Promotion"
              width={650}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Text & Button */}
          <div className="w-full md:w-1/2 text-gray-700">
            <h2 className="text-2xl font-bold mb-4" style={{
              color: '#272A5D',
              fontFamily: "Work Sans",
              fontSize: '30px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '40px'
            }}>
              We are always committed to reward our students on their merits as well as to support our community.
            </h2>
            <p className="mb-4"
              style={{
                color: '#5A5A5A',
                textAlign: 'justify',
                fontFamily: "Work Sans",
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal'
              }}
            >
              These promotion schemes are designed to extend support to the students for encouraging high academic achievements. Visit our campus for more information.
            </p>
            <p className="mb-6"
              style={{
                color: '#5A5A5A',
                textAlign: 'justify',
                fontFamily: "Work Sans",
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal'
              }}
            >
              For more details, feel free to contact our management.
            </p>
            <Link
              href="/ContactUs"
              className="promotion"
              style={{
                border: 'solid 2px #272A5D',
                padding: '15px',
                width: '50px',
                borderRadius: '5px'

              }}
            >
              <button className="px-4 py-2  font-semibold">Contact Us</button>
            </Link>
          </div>
        </div>
      </section >
    </>
  );
};

export default PromotionSection;
