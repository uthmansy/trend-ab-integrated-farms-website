import Container from "@/components/Container";
import PageWrapper from "@/components/PageWrapper";
import { teams } from "@/constants/TEAM";
import React from "react";

function getTeamMember(id: string) {
  return teams.find((member) => member.id === id);
}

//@ts-ignore
function TeamMember({ params }: { params: { id: string } }) {
  //@ts-ignore
  const { id } = params;
  //@ts-ignore
  const member = getTeamMember(id); // Await the asynchronous function
  //@ts-ignore

  if (!member) {
    return <h1>Team member not found</h1>;
  }
  return (
    <PageWrapper pageTitle={`Team Member > ${member.name}`}>
      <section>
        <Container>
          <div className="md:flex md:space-x-20 py-24 md:py-28">
            <div className="relative mb-10 md:mb-0">
              <div className="hidden md:block absolute w-full h-full left-5 top-5 bg-green-800"></div>
              <img
                src={member.picture}
                alt=""
                className="w-96 aspect-[2/3] object-cover relative z-30"
              />
            </div>
            <div className="flex-1 flex flex-col space-y-10">
              <header>
                <h3 className="tracking-wider font-bold text-4xl md:text-5xl">
                  {member.name}
                </h3>
                <p className="text-green-800 italic">- {member.designation}</p>
              </header>
              {member.profile.map((profile, index) => (
                <p key={index} className="text-gray-700">
                  {profile}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </PageWrapper>
  );
}

export default TeamMember;
