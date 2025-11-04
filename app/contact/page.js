'use client';
import React from 'react';

export default function Contact({ goBack }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen w-full text-black dark:text-white">

    
      <div className="bg-black dark:bg-gray-800 rounded-[40px] md:rounded-[60px] mx-4 md:mx-8 my-4 p-4 md:p-8 text-center">
        <div className="text-white font-bold text-4xl md:text-5xl mb-4">Contact Us</div>
        <div className="flex flex-row items-center justify-center text-gray-200 gap-2">
          <div className="flex items-center gap-1">
            <div className="bg-white text-black p-1 rounded-full text-sm"></div>
            <div>Home</div>
          </div>
          <div className="text-gray-400">›</div>
          <div>Contact</div>
        </div>

        <div className="mt-6">
          <img
            src="https://imgs.search.brave.com/HBaAJ1_5nBcODffXou3GFSWGaPcYyNZtDhHpRC5ME4M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/Nzk3OTk1OS9waG90/by9zbmFjay1qdW5r/LWZhc3QtZm9vZC1v/bi10YWJsZS1pbi1y/ZXN0YXVyYW50LXNv/dXAtc2F1Y2Utb3Ju/YW1lbnQtZ3JpbGwt/aGFtYnVyZ2VyLWZy/ZW5jaC1mcmllcy53/ZWJwP2E9MSZiPTEm/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9OGJz/Z0lvQlRsNC0xdDFE/MG9kZEJpdGJNd1FM/LVpuTE5IaEVDTGdK/OGtEMD0"
            alt="Banner"
            className="w-full h-48 md:h-64 object-cover rounded-2xl"
          />
        </div>
      </div>

    
      <div className="flex justify-center mb-6">
        <button
          onClick={goBack}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
        >
          ← Back
        </button>
      </div>

    
      <div className="bg-white dark:bg-gray-800 rounded-[40px] mx-4 md:mx-8 p-6 md:p-10 mt-4">
        <div className="text-center mb-8">
          <div className="text-yellow-600 text-lg font-semibold">KEEP IN TOUCH</div>
          <div className="text-3xl md:text-4xl font-bold mt-2">Send us a Message</div>
        </div>

        <div className="flex flex-col gap-4 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 w-full"
          />
          <input
            type="email"
            placeholder="Email *"
            className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 w-full"
          />
          <input
            type="text"
            placeholder="Phone"
            className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 w-full"
          />
          <textarea
            placeholder="Your Message *"
            className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 w-full h-32"
          ></textarea>

          <button className="bg-yellow-700 hover:bg-yellow-800 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
            Get In Touch
          </button>
        </div>
      </div>

    
      <div className="mx-4 md:mx-8 mt-12">
        <iframe
          className="w-full h-64 md:h-96 rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6446556548044!2d74.92211557486908!3d12.866212717180453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba358fe89555555%3A0xa0d4de0caf9ab76e!2sSahyadri%20College%20Mechanical%20and%20Civil%20Block!5e0!3m2!1sen!2sin!4v1761976312498!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="Map"
        ></iframe>
      </div>

    
      <div className="mx-4 md:mx-8 mt-12 mb-16">
        <img
          src="https://imgs.search.brave.com/LnpFHuDhXPiPLTuSdCL02UG5swvXsXxd8-HCQ-FbL34/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQy/ODQwOTUxNC9waG90/by9hLW1hbGUtY2hl/Zi1zZXJ2aW5nLWEt/ZmluZS1kaW5pbmct/ZGlzaC1pbi1hLXJl/c3RhdXJhbnQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU9L/MGxBQ2JLdG82b2lP/amc1eGdVeFkyZlBT/OEN0VDNmWDlIaEsy/bnRRLU09"
          alt="Food or Service"
          className="w-full h-48 md:h-64 object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}
