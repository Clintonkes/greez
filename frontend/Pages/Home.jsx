import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

const serviceList = [
  {
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    title: "Residential Cleaning",
    desc: "Complete home cleaning including dusting, vacuuming, mopping, and sanitizing all surfaces."
  },
  {
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    title: "Commercial Cleaning",
    desc: "Professional office cleaning, desk sanitization, floor care, and common area maintenance."
  },
  {
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    title: "Deep Cleaning",
    desc: "Thorough deep clean of neglected areas, appliances, baseboards, and hard-to-reach spots."
  },
  {
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    title: "Move In/Out Service",
    desc: "Comprehensive cleaning for property transitions, leaving every space spotless."
  },
  {
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Post-Construction",
    desc: "Specialized cleanup after renovations, removing dust, debris, and construction residue."
  },
  {
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Recurring Maintenance",
    desc: "Scheduled weekly, bi-weekly, or monthly cleaning to keep your space consistently fresh."
  }
]

const testimonials = [
  { name: "Sarah Johnson", content: "Greerz cleaned my home today - they did a terrific job. They really paid attention to detail. Thank you!", rating: 5 },
  { name: "Michael Chen", content: "Best cleaning service I've ever used. They pay attention to every detail and our home has never looked better.", rating: 5 },
  { name: "Emily Rodriguez", content: "After our construction project, Greerz cleaned it all up perfectly. Saved us so much time and stress!", rating: 5 },
]

const features = [
  { title: "Professional Staff", desc: "Our team is trained, experienced, and committed to delivering exceptional cleaning results every time.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { title: "Quality Products", desc: "We use eco-friendly, hospital-grade cleaning products that are safe for your family, pets, and the environment.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Certified Cleaners", desc: "All our cleaners are fully certified, background-checked, and trained in the latest cleaning techniques.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { title: "Fair Prices", desc: "Competitive pricing with no hidden fees. Get premium cleaning services at rates that work for your budget.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
]

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="relative text-white overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Professional cleaning service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)]/95 via-[var(--color-primary-dark)]/85 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48 w-full">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="inline-block bg-white/15 text-green-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                Professional Cleaning Services
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                We Clean to the<br />
                <span className="text-green-300">Highest Standards</span>
              </h1>
              <p className="text-lg lg:text-xl text-green-200 mb-10 max-w-xl leading-relaxed">
                Reliable and efficient cleaning services for your home or business. We make your space sparkle so you can focus on what matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking" className="btn-primary text-center text-lg bg-white !text-[var(--color-primary-dark)] hover:!bg-green-100 !shadow-lg">
                  Request a Free Quote
                </Link>
                <Link to="/services" className="bg-white/10 backdrop-blur text-white font-semibold py-3 px-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all text-center text-lg">
                  Our Services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="scroll-animate-left">
              <div>
                <span className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-widest">About Us</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  We Clean to the Highest Standards
                </h2>
                <p className="text-gray-500 mb-4 leading-relaxed">
                  Greerz LLC has built a reputation as one of the leading providers of residential and commercial cleaning solutions in Netcong, New Jersey and surrounding areas. Our continuous pursuit for perfection has resulted in consistent growth.
                </p>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  Our focus is to listen to our clients, understand their needs, and provide the exceptional level of cleaning service they deserve. Our professional team uses eco-friendly products and advanced techniques to ensure your space is not just clean, but truly spotless.
                </p>
                <Link to="/booking" className="btn-primary">
                  Request a Free Quote
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="scroll-animate-right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1600880706871-5e3b218bab05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Professional cleaning team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[var(--color-primary)] rounded-2xl p-5 shadow-lg hidden lg:block">
                  <p className="text-white text-2xl font-bold">10+</p>
                  <p className="text-green-200 text-sm">Years Experience</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-widest">Our Services</span>
              <h2 className="section-title mt-3">Professional Cleaning Solutions</h2>
              <p className="section-subtitle">Comprehensive cleaning solutions tailored to your specific needs.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((service, i) => (
              <ScrollReveal key={i}>
                <div className="group card card-hover overflow-hidden">
                  <div className="bg-[var(--color-primary-lightest)] p-10 flex items-center justify-center border-b border-green-100">
                    <svg className="w-16 h-16 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} /></svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>{service.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">{service.desc}</p>
                    <Link to="/booking" className="text-[var(--color-primary)] font-semibold text-sm hover:text-[var(--color-primary-dark)] transition-colors inline-flex items-center gap-1">
                      Book Now
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
              <h2 className="section-title mt-3">We Take Pride in Our Work</h2>
              <p className="section-subtitle">Here's why customers trust Greerz for their cleaning needs.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, i) => (
              <ScrollReveal key={i}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-[var(--color-primary-lightest)] rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "500+", label: "Happy Customers" },
              { num: "1K+", label: "Projects Completed" },
              { num: "6", label: "Service Categories" },
              { num: "100%", label: "Satisfaction Rate" },
            ].map((stat, i) => (
              <ScrollReveal key={i}>
                <div>
                  <p className="text-3xl lg:text-4xl font-bold text-white">{stat.num}</p>
                  <p className="text-green-200 text-sm mt-2">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[var(--color-primary)] font-semibold text-sm uppercase tracking-widest">Testimonials</span>
              <h2 className="section-title mt-3">What Our Clients Say</h2>
              <p className="section-subtitle">Don't just take our word for it - hear from our satisfied customers.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i}>
                <div className="card p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className={`text-lg ${j < t.rating ? 'text-green-400' : 'text-gray-200'}`}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{t.content}"</p>
                  <div className="w-12 h-12 bg-[var(--color-primary-lightest)] rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-[var(--color-primary)] font-bold">{t.name[0]}</span>
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/testimonials" className="btn-secondary">View All Reviews</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--color-primary-dark)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>Ready for a Spotless Space?</h2>
            <p className="text-green-200 mb-8 text-lg max-w-2xl mx-auto">
              Get your free quote today and experience the Greerz difference. We'll make your space shine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking" className="bg-white text-[var(--color-primary-dark)] font-semibold py-3 px-8 rounded-lg hover:bg-green-100 transition-all text-lg">Get Your Free Quote</Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur text-white font-semibold py-3 px-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all text-lg">Contact Us</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
