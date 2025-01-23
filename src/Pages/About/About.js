import React, { useState } from "react";
import logo_only from "../../Assets/logo-only.png";
import aboutBg from "../../Assets/about-us.png";
import robotBackGif from "../../Assets/circle-anim2.gif";

export default function About() {
  const [activeLink, setActiveLink] = useState("what"); // Initialize with the default active link

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div id="about" className="flex justify-start mt-10 overflow-hidden">
        <div className="container">
          <div className="w-3/4">
            <div className="flex flex-wrap w-full py-24 md:py-32 relative mb-4">
              <img
                alt="gallery"
                className="w-full object-contain h-full object-center block absolute inset-0"
                src={aboutBg}
              />
              <div className="text-start pl-5 md:pl-20 relative z-10 w-full">
                <h2 className="text-xl md:text-6xl text-white  font-medium title-font text-animation mb-2">
                  About Us_
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font -mt-16 overflow-hidden">
        <div className="container px-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex items-center flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <div className="flex mb-4">
                <a
                  className={`flex-grow ${
                    activeLink === "what" ? "text-white" : "text-gray-500"
                  } border-b-2 cursor-pointer border-gray-300 py-2 text-lg px-1`}
                  onClick={() => handleLinkClick("what")}
                >
                  What...
                </a>
                <a
                  className={`flex-grow ${
                    activeLink === "who" ? "text-white" : "text-gray-500"
                  } border-b-2 cursor-pointer border-gray-300 py-2 text-lg px-1`}
                  onClick={() => handleLinkClick("who")}
                >
                  Who...
                </a>
                <a
                  className={`flex-grow ${
                    activeLink === "where" ? "text-white" : "text-gray-500"
                  } border-b-2 cursor-pointer border-gray-300 py-2 text-lg px-1`}
                  onClick={() => handleLinkClick("where")}
                >
                  Where...
                </a>
              </div>
              {activeLink === "what" && (
                <p className="leading-relaxed my-16 flex text-white text-justify">
                  Bharat TechXperience is a premier national-level hackathon
                  that serves as a platform for tech enthusiasts, innovators,
                  and problem solvers to come together and create cutting-edge
                  solutions for real-world challenges. The event is more than
                  just a coding competition—it’s a celebration of creativity,
                  collaboration, and the transformative power of technology.
                  Participants compete in a 30-hour marathon, solving pressing
                  industry and societal problems, with mentorship and guidance
                  from experienced professionals. The hackathon offers
                  workshops, networking opportunities, and resources to empower
                  participants to turn their innovative ideas into reality.
                  Innovation at its Core: Encourages participants to think
                  outside the box and develop solutions that have a tangible
                  impact. Diverse Participation: Attracts talent from across
                  Bharat, including students, professionals, and startups.
                  Comprehensive Ecosystem: Combines mentorship, workshops, and
                  cutting-edge technology to provide a holistic experience.
                  Exciting Rewards: With a prize pool worth ₹1,00,000, the
                  hackathon recognizes and rewards the best minds in technology.
                  Following the immense success of Bharat TechXperience 1.0, the
                  upcoming 2.0 edition is set to be bigger and better, with even
                  more participants, partners, and opportunities to make an
                  impact.
                </p>
              )}
              {activeLink === "who" && (
                <p className="leading-relaxed my-16 flex text-white text-justify">
                  Bharat TechXperience is organized by The Uniques Community, a
                  student-led initiative at Swami Vivekanand Institute of
                  Engineering and Technology (SVIET), Punjab. We are a vibrant
                  community of tech enthusiasts dedicated to skill development,
                  collaborative learning, and driving innovation. Our
                  Achievements Bharat TechXperience 1.0: The inaugural hackathon
                  organized by The Uniques Community became a national-level
                  event, thanks to the contributions of community partners like
                  Google Developer Student Clubs (GDSC) Chandigarh University,
                  TFUG Jalandhar, and GeeksforGeeks. Witnessed overwhelming
                  participation from across Bharat. Provided a platform for
                  students and professionals to solve real-world problems and
                  showcase their creativity. Skill Development Programs: Our
                  community focuses on teaching industry-relevant technical
                  skills, including Web Development, App Development, Graphic
                  Designing, and Generative AI. Projects and Innovations:
                  Members of The Uniques Community have built solutions for
                  local businesses and communities, showcasing the practical
                  application of their learning.
                </p>
              )}
              {activeLink === "where" && (
                <p className="leading-relaxed my-16 flex text-white text-justify">
                  Where is Bharat TechXperience Happening? The event will take
                  place at the Swami Vivekanand Institute of Engineering and
                  Technology (SVIET), a prestigious educational institution
                  located in Punjab. About the Venue SVIET, situated in the
                  serene village of Ramnagar near Banur, in District Patiala,
                  provides an inspiring and picturesque environment, ideal for
                  fostering innovation and collaboration. The institute has a
                  rich history of hosting tech-driven events and nurturing young
                  talent, making it the perfect host for Bharat TechXperience.
                  <br />
                  Address: Swami Vivekanand Institute of Technology (SVIET)
                  College, Village- Ramnagar Near Banur, Tehsil- Rajpura,
                  District- Patiala{" "}
                </p>
              )}
            </div>
            <div></div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto  object-cover  rounded"
              src={robotBackGif}
            />
          </div>
        </div>
      </section>
    </>
  );
}
