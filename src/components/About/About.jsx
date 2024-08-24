import React from 'react';
import ceoImg from '../../assets/ceo.jpeg';
import { Link } from 'react-router-dom';
function About() {
  return (
    <div class="bg-gray-100">
      <div class="container mx-auto py-8">
        <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div class="col-span-4 sm:col-span-3">
            <div class="bg-white shadow rounded-lg p-6">
              <div class="flex flex-col items-center">
                <img src={ceoImg} class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" >

                </img>
                <h1 class="text-xl font-bold">Rohan Mishra</h1>
                <p class="text-gray-700">CEO/FOUNDER</p>
                <p>+91- 6306206941</p>
              </div>
              <hr class="my-6 border-t border-gray-300" />
              <div class="flex flex-col">
                <span class="text-gray-700 uppercase font-bold tracking-wider mb-2">SERVICES</span>
                <ul>
                  <Link to="/services">
                    <li class="mb-2">Construction</li>
                  </Link>
                  <Link to="/services">
                    <li class="mb-2">Construction Planning</li>
                  </Link>
                  <Link to="/services">
                    <li class="mb-2">Renovation and Construction</li>
                  </Link>

                </ul>
              </div>
            </div>
          </div>
          <div class="col-span-4 sm:col-span-9">
            <div class="bg-white shadow rounded-lg p-6">
              <h2 class="text-xl font-bold mb-4">About Us</h2>
              <p class="text-gray-700">YATHARTH ARCHITECT : Building Excellence Since 2018<br />

                Founded in 2018, YATHARTH ARCHITECT has rapidly established itself as a trusted leader in the construction industry. With a passion for quality and a commitment to excellence, we specialize in planning, construction, and renovation, bringing your vision to life with precision and care.
              </p>
              <h2 class="text-xl font-bold mt-6 mb-4">Our Journey</h2>
              <div class="mb-6">
                <p class="mt-2">
                  Since our inception, we have proudly completed over 100 diverse projects, ranging from residential and commercial constructions to extensive renovations. Our journey has been defined by our unwavering dedication to delivering superior craftsmanship, innovative solutions, and exceptional client service.
                </p>
              </div>


              <h2 class="text-xl font-bold mt-6 mb-4">Our Expertise</h2>
              <div class="mb-6">
                <p class="mt-2">
                  <p>At YATHARTH ARCHITECT, we offer a comprehensive suite of services that includes:</p>
                  <b>Planning:</b> Detailed project planning. <br />
                  <b>Construction:</b> High-quality construction services. <br />
                  <b>Renovation:</b> Expert renovation solutions.  <br />
                </p>
              </div>

              <h2 class="text-xl font-bold mt-6 mb-4">Our Commitment</h2>
              <div class="mb-6">
                <p class="mt-2">
                Our success is built on a foundation of integrity, transparency, and collaboration. We work closely with our clients, understanding their needs and goals, to deliver results that exceed expectations. Each project is approached with a commitment to quality, timeliness, and budget adherence.
                </p>
              </div>

              <h2 class="text-xl font-bold mt-6 mb-4">Why Choose Us?</h2>
              <div class="mb-6">
                <p class="mt-2">
                  <b>Proven Track Record:</b>Over 100 completed projects with a reputation for excellence.<br />
                  <b>Experienced Team:</b>Skilled professionals with a deep understanding of the construction industry.<br />
                  <b>Client-Centric Approach:</b>Personalized service tailored to meet your unique requirements.<br />
                </p>
              </div>
              <div>
              <p>
                As we continue to grow and evolve, YATHARTH ARCHITECT remains dedicated to setting new standards in the construction industry. We look forward to the opportunity to collaborate with you on your next project and turn your vision into reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
