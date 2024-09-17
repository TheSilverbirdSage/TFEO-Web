import Image from "next/image";
import Navbar from '@/components/Navbar'
import image from '@/images/Business deal-bro (1) (1).png'
import image2 from "@/images/it.png"
import image3 from '@/images/ict.png'
import image4 from '@/images/web services.png'
import image5 from '@/images/Frame 9.png'
import Footer from '@/components/Footer'

export default function Home() {
  return (
   <main>
    <div>
      <Navbar />
      <div>
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">

          {/* Text content (Right on large screens, above image on mobile) */}
        <div className="text-center lg:text-left lg:w-1/2 p-4 ml-3 lg:mt-40">
          <h1 className="text-4xl lg:text-3xl font-semibold mb-20 whitespace-nowrap">Tech Solution is Our Craft </h1>
          <p>From analysing systems to planning and execution, we can help<br/> you determine what steps to take to fill the gaps in your current <br/> business technology. </p>
          <button className='bg-blue-700 hover:bg-blue-500 text-white py-2 px-4 mt-10 rounded-lg'>Get In Touch ---</button>
        </div>
        {/* Image (Left on large screens, below text on mobile) */} 
        <div className="lg:w-1/2 p-4 mb-4 ml-20 lg:mb-0 ">
          <Image
            src={image}
            alt="Image"// Adjust width and height
            height={600}
            width={400}
          />
        </div>
        </div>
      </div>
     </div>

    {/*Our Products */}
     <div>
     <div className='relative p-16 text-center mt-2 lg:mt-40'>
      <h1 className="text-2xl lg:text-4xl text-blue-700 lg:mb-4 font-semibold whitespace-nowrap">Our Products</h1>
     <p className="text-sm md:text-1xl lg:text-1xl tracking-wide ">Impact - driven technology, Future proof your business with our host of enteprise solutions</p>
     </div>
     <div className="flex justify-evenly">
     <Image
            src={image2}
            alt="Image"// Adjust width and height
            height={500}
            width={300}
          />
          <Image
            src={image3}
            alt="Image"// Adjust width and height
            height={500}
            width={300}
          />
          <Image
            src={image4}
            alt="Image"// Adjust width and height
            height={500}
            width={300}
          />
     </div>
     </div>


      {/*Our Services */}
      <div className="mb-20">
      <div className='relative p-16 text-center mt-2 lg:mt-40'>
      <h1 className="text-2xl lg:text-4xl text-blue-700 lg:mb-4 font-semibold whitespace-nowrap">Our Service Offerings</h1>
     <p className="text-sm md:text-1xl lg:text-1xl tracking-wide mb-4 ">TFEO  has designed and built innovative business network that offers Guaranteed Operational Efficiency at every stage.</p>
     <p className="text-sm md:text-1xl lg:text-1xl tracking-wide">Scalabiity is available both ways, thereby allowing you to update or downscale as appropriate.</p>
     </div>

     <div className="flex items-start justify-evenly">
      <Image
            src={image5}
            alt="Image"// Adjust width and height
            height={800}
            width={600}
          />
          <div>
          <h1 className="text-blue-700 font-semibold mb-4">IT INFASTRUCTURE</h1>
          <ul className="mb-6">
            <li className="mb-6 text-sm">Data Center Services</li>
            <li className="mb-6 text-sm">Collaboration Services</li>
            <li className="mb-6 text-sm">Managed Network</li>
            <li className="mb-6 text-sm">Infrastructure and Cloud Solutions</li>
            <li className="mb-6 text-sm">Power Solutions</li>
            <li className="mb-6 text-sm">Cloud CCTV</li>
          </ul>
          <h1 className="text-blue-700 font-semibold mb-4 mt-20">ICT CONSULTING & OUTSOURCING</h1>
          <ul className="mb-6">
            <li className="mb-6 text-sm">Business Automation</li>
            <li className="mb-6 text-sm">Project Management </li>
            <li className="mb-6 text-sm">Mobile Development</li>
          </ul>
          <h1 className="text-blue-700 font-semibold mb-4 mt-20">WEB SERVICES</h1>
          <ul className="mb-6">
            <li className="mb-6 text-sm">Website Development</li>
            <li className="mb-6 text-sm">Social Media Integration & Customization</li>
            <li className="mb-6 text-sm">Hosting & Domain Name Registration</li>
          </ul>
          </div>
      </div>
      </div>
      <Footer />
    </div>
   </main>
  );
}
