import Container from "@/components/Container";
import PageWrapper from "@/components/PageWrapper";
import { INTRO_1, LEAF } from "@/constants/IMAGES";
import React from "react";

function About() {
  return (
    <PageWrapper pageTitle="About Us">
      <section className="flex flex-wrap overflow-hidden">
        <div className="hidden md:block w-full md:w-1/2 lg:w-1/3">
          <img
            src={INTRO_1.src}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 py-24 md:py-40 px-5 md:pl-24 relative">
          <div className="flex flex-col space-y-5 md:space-y-7 max-w-screen-sm">
            <span className="uppercase">About Us</span>
            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-green-800">
              Your partner in sustainable agricultural innovation
            </h2>
            <h3 className="italic">
              Empowering Agriculture, Transforming Lives
            </h3>
            <p>
              We are Nigeria’s new and leading agri-solutions provider, offering
              diverse products and services across the farming value chain.
              Starting our operations from Kano’s first automated fertiliser
              blending plant at Kunture, Ungogo Road in 2020.
            </p>
          </div>
          <div className="absolute bottom-0 right-0">
            <img
              data-scroll
              data-scroll-speed={-0.2}
              src={LEAF.src}
              alt=""
              className="w-56 md:w-96 max-w-xl opacity-10"
            />
          </div>
        </div>
        <div className="bg-gray-100 w-full">
          <Container>
            <div className="md:flex md:space-x-20 py-24 md:py-28">
              <div className="md:w-fit">
                <h2 className="text-3xl mb-5 text-green-800 font-bold tracking-wider border-l-8 border-l-green-800 pl-8 uppercase">
                  A Brief About Us
                </h2>
              </div>
              <div className="flex flex-col space-y-10 flex-1">
                <p>
                  BOKO AGRO ALLIED NIG LTD (BOKO AGRO) is a foremost Fertilizer
                  Blending & Trading Company with a proven track record in the
                  of production of premium grade fertilizer products at
                  competitive price. BOKO AGRO is fully owned by Nigerians and
                  duly incorporated with the Corporate Affairs Commission (CAC)
                  Abuja on 21st October, 2020 with RC No. 1725629. Boko Agro,
                  with over 6 years in modest supply and distribution business,
                  we have migrated our operations to a fully integrated
                  fertilizer products marketing and trading company with clients
                  and suppliers all over the country.
                </p>
                <p>
                  Boko Agro, situated on a 10-Hectare size industrial complex,
                  with an installed NPK blending capacity of 450,000 MT/Annum is
                  currently one of the leading fertilizer blending plant in the
                  northern part of the country in terms of the production of
                  premium grade products. The feedbacks of our products from our
                  various happy and satisfied customers have resulted in the
                  increased patronage of our carefully formulated products which
                  include NPK 20-10-10, NPK 15-15 15, NPK 18-46-18, NPK 27-13-13
                  and crop specific special blends. Our major esteemed customers
                  include Kano State Ministry of Agriculture, Olam Rice, Premier
                  Seed, 1-Acre Fund, and Capital Agricultural Development Ltd
                  and AFEX Commodities Ltd with combined networks of over
                  300,000 farmers. Our target in the next 3 years is for a
                  minimum of one million Nigerian farmers to use our high value
                  low cost fertilizer formulations annually.{" "}
                </p>
                <p>
                  In the region where we operate we have provided over 750
                  direct and indirect jobs, we have also promoted artisanal
                  mining activities in Katsina State where we source fertilizer
                  fillers from. We are currently a leading member of Fertilizer.
                  Producers and Suppliers Association of Nigeria (FEPSAN) and
                  participate actively in the Presidential Fertilizer Initiative
                  (PFI) scheme.{" "}
                </p>
                <p>
                  The company is owned and managed by an amalgamation of young
                  professional Nigerians with expertise cutting across the
                  various sectors of the economy. In addition to this and with a
                  strong brand distinguished by quality and service, Boko Agro
                  has been able to draw on its many strengths with a view of
                  creating value added service.{" "}
                </p>
                <p>
                  In addition to the blending plant, we have provided for a
                  centre of excellence where our partners and farmers will be
                  trained on improved manufacturing and blending operations and
                  good agricultural practices respectively.{" "}
                </p>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </PageWrapper>
  );
}

export default About;
