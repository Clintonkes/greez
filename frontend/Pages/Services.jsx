import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 1,
    title: "Home Cleaning",
    description: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.",
    img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  },
  {
    id: 2,
    title: "Cloth Ironing",
    description: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.",
    img: "https://images.unsplash.com/photo-1600880706871-5e3b218bab05?w=800&q=80",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
  },
  {
    id: 3,
    title: "Laundry Services",
    description: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
  },
  {
    id: 4,
    title: "Washing Up",
    description: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
  },
  {
    id: 5,
    title: "Window Cleaning",
    description: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.",
    img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0 0 0 0 0 0 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  },
  {
    id: 6,
    title: "Carpet Cleaning",
    description: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
  },
  {
    id: 7,
    title: "Roof Cleaning",
    description: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  },
  {
    id: 8,
    title: "Office Cleaning",
    description: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.",
    img: "https://images.unsplash.com/photo-1600880706871-5e3b218bab05?w=800&q=80",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
  }
]

export default function Services() {
  return (
    <>
      <Navbar />
      <section className="relative bg-[var(--color-primary-dark)] text-white py-24 lg:py-32">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80" alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-green-300 font-semibold text-sm uppercase tracking-widest">Services</span>
          <h1 className="text-5xl lg:text-6xl font-bold mt-4 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>Professional Cleaning Solutions</h1>
          <p className="text-green-200 max-w-2xl mx-auto">Comprehensive cleaning solutions tailored to your specific needs.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-widest">What We Do</span>
              <h2 className="section-title mt-3">Professional Cleaning Solutions</h2>
              <p className="section-subtitle">Comprehensive cleaning solutions tailored to your specific needs.</p>
            </div>
          </ScrollReveal>

          <div className="space-y-20">
            {services.map((service, i) => (
              <ScrollReveal key={service.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  {i % 2 === 0 ? (
                    <>
                      <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img src={service.img} alt={service.title} className="w-full aspect-square object-cover" />
                      </div>
                      <div>
                        <div className="w-16 h-16 bg-[var(--color-primary-lightest)] rounded-2xl flex items-center justify-center mb-6">
                          <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>{service.title}</h3>
                        <p className="text-gray-500 mb-6 leading-relaxed">{service.description}</p>
                        <Link to="/booking" className="btn-primary">Read More</Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="lg:order-2">
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                          <img src={service.img} alt={service.title} className="w-full aspect-square object-cover" />
                        </div>
                      </div>
                      <div className="lg:order-1">
                        <div className="w-16 h-16 bg-[var(--color-primary-lightest)] rounded-2xl flex items-center justify-center mb-6">
                          <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>{service.title}</h3>
                        <p className="text-gray-500 mb-6 leading-relaxed">{service.description}</p>
                        <Link to="/booking" className="btn-primary">Read More</Link>
                      </div>
                    </>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary-dark)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>Not Sure Which Service You Need?</h2>
            <p className="text-green-200 mb-8">Contact us and we'll help you find the perfect cleaning solution.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[var(--color-primary-dark)] font-semibold py-3 px-8 rounded-lg hover:bg-green-100 transition-all">
              Contact Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
