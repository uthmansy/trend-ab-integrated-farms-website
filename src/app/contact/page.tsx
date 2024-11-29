import { ContactForm } from "@/components/ContactForm";
import Container from "@/components/Container";
import PageWrapper from "@/components/PageWrapper";
import { INTRO_1 } from "@/constants/IMAGES";
import React from "react";

const position: number[] = [51.505, -0.09];

function ContactPage() {
  return (
    <PageWrapper pageTitle="Contact">
      <section className="flex flex-wrap overflow-hidden">
        <div className="hidden md:block w-full md:w-1/2 lg:w-1/3">
          <img
            data-scroll
            data-scroll-speed={-0.5}
            src={INTRO_1.src}
            alt=""
            className="w-full object-cover h-[120%] -mt-56"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 py-24 md:py-40 px-5 md:px-24 relative">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
              <div>
                <h2 className="font-heading text-3xl md:text-5xl font-semibold">
                  Get in touch with us
                </h2>
              </div>
              <div>
                <p className="text-green-800">
                  Ready to take the next step? Reach out to us to discuss your
                  needs, explore partnership opportunities. Let’s work together
                  to achieve success!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <div>
                  <h4 className="text-lg font-semibold mb-5 uppercase tracking-wide">
                    Contact Us
                  </h4>
                  <ul className=" space-y-8">
                    <li>
                      <strong className="uppercase tracking-wider">
                        Email:
                      </strong>{" "}
                      <a
                        href="mailto:info@bokoagroallied.com"
                        className="hover:underline"
                      >
                        info@bokoagroallied.com
                      </a>
                    </li>
                    <li>
                      <strong className="uppercase tracking-wider">
                        Office:
                      </strong>{" "}
                      <br />
                      No. 4 Fez Street, Off Kumasi Crescent, <br />
                      Aminu Kano, Wuse 2, Abuja
                    </li>
                    <li>
                      <strong className="uppercase tracking-wider">
                        Factory:
                      </strong>{" "}
                      <br />
                      No. 61 Ungogo Road, Kano, Kano State
                    </li>
                  </ul>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export default ContactPage;
