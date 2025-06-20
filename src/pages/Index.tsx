import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with a form service like Formspree, Netlify Forms, etc.
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ firstName: "", lastName: "", subject: "", message: "" });
  };

  const handleBookConsultation = () => {
    // Redirect to booking calendar or contact
    window.open(
      "https://calendly.com/sherry-stratech24/30min?month=2025-06",
      "_blank",
    );
  };

  const handleJoinTeam = () => {
    // Redirect to careers page or email
    window.open("mailto:careers@stratech24.com?subject=Career Interest", "_blank");
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url("https://cdn.builder.io/api/v1/assets/3d06e7b99c5248b59738ec5ba799835f/ae26d9c2c135e0a5ce75db53524d3560-b74d55?format=webp&width=800")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Hero Section */}
      <section 
        className="relative min-h-screen bg-white bg-no-repeat bg-right bg-cover"
        style={{ backgroundImage: "url('/hero.svg')" }}
      >
        {/* Navigation */}
        <nav className="relative flex justify-between items-center px-6 lg:px-28 py-6">
          <div className="w-160 h-40">
            {/* Stratech Logo */}
            <img
              src="/stratechlogo.svg"
              alt="Stratech Company Logo"
              className="h-20 lg:h-28 w-auto object-contain"
            />
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative px-6 lg:px-28 mt-10 lg:mt-20">
          {/* Main Heading */}
          <div className="max-w-[1013px] mb-8">
            <h1 className="font-jaldi text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-stratech-text-blue">
              Empowering Businesses with Smart Digital Solutions
            </h1>
          </div>
          {/* Subheading */}
          <div className="max-w-[1110px] mb-6">
            <p className="font-geist-mono text-base md:text-lg lg:text-xl leading-relaxed text-stratech-text-blue">
              From startups to multinational corporations, we deliver scalable,
              reliable, and cost-effective services to address your unique
              challenges.
            </p>
          </div>

          {/* Description */}
          <div className="max-w-[1076px] mb-10">
            <p className="font-geist-mono text-base md:text-lg lg:text-xl leading-relaxed text-stratech-text-blue">
              Empower your business with smart systems, process automation, and
              scalable digital tools — designed to adapt and grow with you,
              wherever you are.
            </p>
          </div>

          {/* CTA Button */}
          <Button
            onClick={handleBookConsultation}
            className="px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-stratech-text-blue to-stratech-dark-blue border-[1.5px] border-stratech-blue text-white font-jaldi text-base lg:text-lg font-bold hover:opacity-90 transition-opacity flex items-center gap-3"
          >
            Book a Consultation
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.95829 12.5C7.95829 12.5 13.4582 8.44931 13.4583 6.99996C13.4583 5.5506 7.95825 1.5 7.95825 1.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M1.54167 12.5C1.54167 12.5 7.04161 8.44931 7.04163 6.99996C7.04164 5.5506 1.54163 1.5 1.54163 1.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>

        {/* Partner Logos Section */}
        <div className="relative px-6 lg:px-28 mt-16 lg:mt-32">
          <div className="text-center mb-8">
            <h2 className="font-jaldi text-xl md:text-2xl lg:text-3xl text-stratech-text-blue font-bold">
              Trusted By Our Partners
            </h2>
          </div>

          {/* Sliding Logo Container */}
          <div className="overflow-hidden">
            <div className="flex animate-slide-logos items-center gap-8 lg:gap-12">
              {/* First set of logos */}
              <div className="flex-shrink-0 w-40 lg:w-52 h-12 lg:h-16 bg-white/80 rounded flex items-center justify-center p-3">
                <img
                  src="https://cdn.builder.io/api/v1/assets/3d06e7b99c5248b59738ec5ba799835f/idfd1c9hrz_1750157732035-f99c5c?format=webp&width=800"
                  alt="Trello"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-40 lg:w-52 h-12 lg:h-16 bg-white/80 rounded flex items-center justify-center p-3">
                <img
                  src="https://cdn.builder.io/api/v1/assets/3d06e7b99c5248b59738ec5ba799835f/idldkcahpa_1750157288832-00b701?format=webp&width=800"
                  alt="ClickUp"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-40 lg:w-52 h-12 lg:h-16 bg-white/80 rounded flex items-center justify-center p-3">
                <img
                  src="https://cdn.builder.io/api/v1/assets/3d06e7b99c5248b59738ec5ba799835f/idzc1rfbzo_logos-98d2b6?format=webp&width=800"
                  alt="Paymob"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-40 lg:w-52 h-12 lg:h-16 bg-white/80 rounded flex items-center justify-center p-3">
                <img
                  src="https://cdn.builder.io/api/v1/assets/3d06e7b99c5248b59738ec5ba799835f/hubspot_logo.svg-54f3e3?format=webp&width=800"
                  alt="HubSpot"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-40 lg:w-52 h-12 lg:h-16 bg-white/80 rounded flex items-center justify-center p-3">
                <img
                  src="https://cdn.builder.io/api/v1/assets/3d06e7b99c5248b59738ec5ba799835f/zoho_logo_2023.svg-5b85c8?format=webp&width=800"
                  alt="Zoho"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0 w-40 lg:w-52 h-12 lg:h-16 bg-white/80 rounded flex items-center justify-center p-3">
                <img
                  src="https://cdn.builder.io/api/v1/assets/3d06e7b99c5248b59738ec5ba799835f/idfd1c9hrz_1750157732035-f99c5c?format=webp&width=800"
                  alt="Trello"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-40 lg:w-52 h-12 lg:h-16 bg-white/80 rounded flex items-center justify-center p-3">
                <img
                  src="https://cdn.builder.io/api/v1/assets/3d06e7b99c5248b59738ec5ba799835f/idldkcahpa_1750157288832-00b701?format=webp&width=800"
                  alt="ClickUp"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-40 lg:w-52 h-12 lg:h-16 bg-white/80 rounded flex items-center justify-center p-3">
                <img
                  src="https://cdn.builder.io/api/v1/assets/3d06e7b99c5248b59738ec5ba799835f/idzc1rfbzo_logos-98d2b6?format=webp&width=800"
                  alt="Paymob"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-40 lg:w-52 h-12 lg:h-16 bg-white/80 rounded flex items-center justify-center p-3">
                <img
                  src="https://cdn.builder.io/api/v1/assets/3d06e7b99c5248b59738ec5ba799835f/hubspot_logo.svg-54f3e3?format=webp&width=800"
                  alt="HubSpot"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex-shrink-0 w-40 lg:w-52 h-12 lg:h-16 bg-white/80 rounded flex items-center justify-center p-3">
                <img
                  src="https://cdn.builder.io/api/v1/assets/3d06e7b99c5248b59738ec5ba799835f/zoho_logo_2023.svg-5b85c8?format=webp&width=800"
                  alt="Zoho"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-20 bg-stratech-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-28">
          <div className="mb-16">
            <h2 className="font-jaldi text-4xl md:text-5xl lg:text-6xl text-stratech-text-blue mb-6">
              Our Services
            </h2>
            <p className="font-geist-mono text-base md:text-lg lg:text-xl leading-relaxed text-stratech-text-blue max-w-4xl">
              We specialize in delivering tailored solutions to address your
              business needs across these key areas:
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-stratech-background p-6 border-2 border-transparent hover:border-stratech-blue transition-colors rounded-lg">
              <div className="w-full h-56 lg:h-72 mb-6 rounded flex items-center justify-center p-2">
                <img
                  src="/Service icon 1.svg"
                  alt="Product Consulting Icon"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-geist text-xl lg:text-2xl text-stratech-blue mb-4">
                Product Consulting
              </h3>
              <p className="font-geist-mono text-sm lg:text-base leading-relaxed text-stratech-text-blue">
                Strategically position your digital products for success with
                actionable insights and market expertise.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-stratech-background p-6 border-2 border-transparent hover:border-stratech-blue transition-colors rounded-lg">
              <div className="w-full h-56 lg:h-72 mb-6 rounded flex items-center justify-center p-2">
                <img
                  src="/Service icon 2 (1).svg"
                  alt="SaaS Product Development Icon"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-geist text-xl lg:text-2xl text-stratech-blue mb-4">
                SaaS Product Development
              </h3>
              <p className="font-geist-mono text-sm lg:text-base leading-relaxed text-stratech-text-blue">
                Scalable, cloud-based software solutions — we help you build,
                launch, and grow SaaS tools that align with your business goals.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-stratech-background p-6 border-2 border-transparent hover:border-stratech-blue transition-colors rounded-lg">
              <div className="w-full h-56 lg:h-72 mb-6 rounded flex items-center justify-center p-2">
                <img
                  src="/Service icon 3.svg"
                  alt="ERP Implementation Icon"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-geist text-xl lg:text-2xl text-stratech-blue mb-4">
                ERP Implementation
              </h3>
              <p className="font-geist-mono text-sm lg:text-base leading-relaxed text-stratech-text-blue">
                Deploy robust, all-in-one ERP systems — customized to your
                workflow from inventory and HR to finance and operations.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-stratech-background p-6 border-2 border-transparent hover:border-stratech-blue transition-colors rounded-lg">
              <div className="w-full h-56 lg:h-72 mb-6 rounded flex items-center justify-center p-2">
                <img
                  src="/Untitled design (1).svg"
                  alt="Management systems Icon"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-geist text-xl lg:text-2xl text-stratech-blue mb-4">
                Management Systems
              </h3>
              <p className="font-geist-mono text-sm lg:text-base leading-relaxed text-stratech-text-blue">
                Custom systems to help you manage teams, clients, inventory, and
                daily operations — built to fit your business.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-stratech-background p-6 border-2 border-transparent hover:border-stratech-blue transition-colors rounded-lg">
              <div className="w-full h-56 lg:h-72 mb-6 rounded flex items-center justify-center p-2">
                <img
                  src="/Service icon 5.svg"
                  alt="Automation Tools Icon"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-geist text-xl lg:text-2xl text-stratech-blue mb-4">
                Automation Tools
              </h3>
              <p className="font-geist-mono text-sm lg:text-base leading-relaxed text-stratech-text-blue">
                Automate routine tasks, communications, and workflows with
                custom-built automation tools that save time, reduce errors, and
                boost efficiency.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-stratech-background p-6 border-2 border-transparent hover:border-stratech-blue transition-colors rounded-lg">
              <div className="w-full h-56 lg:h-72 mb-6 rounded flex items-center justify-center p-2">
                <img
                  src="/Service icon 6.svg"
                  alt="Business Applications Icon"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-geist text-xl lg:text-2xl text-stratech-blue mb-4">
                Business Applications
              </h3>
              <p className="font-geist-mono text-sm lg:text-base leading-relaxed text-stratech-text-blue">
                Powerful, user-friendly applications tailored to your business
                needs — whether internal tools or customer-facing platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-16 lg:py-20 bg-stratech-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-28">
          <div className="mb-16">
            <h2 className="font-jaldi text-4xl md:text-5xl lg:text-6xl text-stratech-text-blue mb-6">
              Our Impact
            </h2>
            <p className="font-geist-mono text-base lg:text-lg leading-relaxed text-stratech-text-blue">
              Discover the milestones that define our success.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-16">
            <div className="text-center">
              <div className="font-geist text-4xl md:text-5xl lg:text-6xl font-bold text-stratech-text-blue mb-4">
                95%
              </div>
              <p className="font-geist-mono text-sm lg:text-base leading-relaxed text-stratech-text-blue">
                Client Satisfaction Rate
              </p>
            </div>
            <div className="text-center">
              <div className="font-geist text-4xl md:text-5xl lg:text-6xl font-bold text-stratech-text-blue mb-4">
                300+
              </div>
              <p className="font-geist-mono text-sm lg:text-base leading-relaxed text-stratech-text-blue">
                Successful Projects Delivered
              </p>
            </div>
            <div className="text-center">
              <div className="font-geist text-4xl md:text-5xl lg:text-6xl font-bold text-stratech-text-blue mb-4">
                40%
              </div>
              <p className="font-geist-mono text-sm lg:text-base leading-relaxed text-stratech-text-blue">
                Faster MVP Delivery
              </p>
            </div>
            <div className="text-center">
              <div className="font-geist text-4xl md:text-5xl lg:text-6xl font-bold text-stratech-text-blue mb-4">
                5+
              </div>
              <p className="font-geist-mono text-sm lg:text-base leading-relaxed text-stratech-text-blue">
                Years of Combined Expertise
              </p>
            </div>
          </div>

          {/* Highlighted Stat */}
          <div className="text-center">
            <div className="font-geist text-6xl md:text-7xl lg:text-8xl font-bold text-stratech-blue mb-6">
              99.9%
            </div>
            <p className="font-geist-mono text-lg lg:text-xl leading-relaxed text-stratech-blue">
              Uptime Guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Stratech Section */}
      <section className="py-24 bg-stratech-background">
        <div className="max-w-7xl mx-auto px-28">
          <div className="mb-12">
            <h2 className="font-jaldi text-4xl md:text-5xl lg:text-6xl text-stratech-text-blue mb-6">
              Why Choose Stratech Company?
            </h2>
            <p className="font-geist-mono text-20 leading-[27px] text-stratech-text-blue max-w-4xl">
              We provide end-to-end solutions to help businesses across
              industries overcome challenges, innovate, and scale.
            </p>
          </div>

          {/* Three columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-stratech-background p-6 border-2 border-transparent hover:border-stratech-blue transition-colors rounded-lg">
              <div className="w-full h-56 lg:h-72 mb-6 rounded flex items-center justify-center p-2">
                <img
                  src="/choose1.jpg"
                  alt="SaaS Product Development Icon"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-geist text-xl lg:text-2xl text-stratech-blue mb-4">
                Global Reach
              </h3>
              <p className="font-geist-mono text-sm lg:text-base leading-relaxed text-stratech-text-blue">
                Serving clients worldwide, from startups to enterprises.
              </p>
            </div>

            <div className="bg-stratech-background p-6 border-2 border-transparent hover:border-stratech-blue transition-colors rounded-lg">
              <div className="w-full h-56 lg:h-72 mb-6 rounded flex items-center justify-center p-2">
                <img
                  src="/choose2.jpg"
                  alt="SaaS Product Development Icon"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-geist text-xl lg:text-2xl text-stratech-blue mb-4">
                Scalable Solutions
              </h3>
              <p className="font-geist-mono text-sm lg:text-base leading-relaxed text-stratech-text-blue">
                Flexible services tailored to businesses of all sizes.
              </p>
            </div>

            <div className="bg-stratech-background p-6 border-2 border-transparent hover:border-stratech-blue transition-colors rounded-lg">
              <div className="w-full h-56 lg:h-72 mb-6 rounded flex items-center justify-center p-2">
                <img
                  src="/choose3.jpg"
                  alt="SaaS Product Development Icon"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-geist text-xl lg:text-2xl text-stratech-blue mb-4">
                Expertise You Can Trust
              </h3>
              <p className="font-geist-mono text-sm lg:text-base leading-relaxed text-stratech-text-blue">
                Years of experience delivering quality solutions for complex
                problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 lg:py-20 bg-stratech-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-28 text-center">
          <blockquote className="font-geist text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-stratech-text-blue mb-12 italic font-light">
            "Our focus is on creating products and services that empower
            businesses, streamline operations, and foster growth in the digital
            era."
          </blockquote>
          <cite className="font-geist-mono text-lg lg:text-xl leading-relaxed text-stratech-blue font-medium">
            Shireen Yousif
            <br />
            Co-Founder, Stratech Company
          </cite>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="py-24 bg-stratech-background">
        <div className="max-w-7xl mx-auto px-28">
          <div className="mb-12">
            <h2 className="font-jaldi text-4xl md:text-5xl lg:text-6xl text-stratech-text-blue mb-6">
              What We Stand For
            </h2>
            <p className="font-geist-mono text-22 leading-[27px] text-stratech-text-blue">
              Our unwavering values shape our approach to delivering impactful
              solutions.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Innovation */}
            <div className="bg-stratech-background p-6">
              <div className="w-full h-56 lg:h-72 mb-6 rounded flex items-center justify-center p-2">
                <img
                  src="/stand1.jpg"
                  alt="SaaS Product Development Icon"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-geist text-28 leading-[34px] text-stratech-blue mb-3">
                Innovation
              </h3>
              <p className="font-geist-mono text-20 leading-[27px] text-stratech-text-blue">
                Pioneering solutions tailored to your unique needs.
              </p>
            </div>

            {/* Reliability */}
            <div className="bg-stratech-background p-6">
              <div className="w-full h-56 lg:h-72 mb-6 rounded flex items-center justify-center p-2">
                <img
                  src="/stand2.jpg"
                  alt="SaaS Product Development Icon"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-geist text-28 leading-[34px] text-stratech-blue mb-3">
                Reliability
              </h3>
              <p className="font-geist-mono text-20 leading-[27px] text-stratech-text-blue">
                Delivering on promises with precision and excellence.
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-stratech-background p-6">
              <div className="w-full h-56 lg:h-72 mb-6 rounded flex items-center justify-center p-2">
                <img
                  src="/stand3.jpg"
                  alt="SaaS Product Development Icon"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-geist text-28 leading-[34px] text-stratech-blue mb-3">
                Collaboration
              </h3>
              <p className="font-geist-mono text-20 leading-[27px] text-stratech-text-blue">
                Partnering with clients to achieve shared success.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-stratech-background p-6">
              <div className="w-full h-56 lg:h-72 mb-6 rounded flex items-center justify-center p-2">
                <img
                  src="/stand4.jpg"
                  alt="SaaS Product Development Icon"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-geist text-28 leading-[34px] text-stratech-blue mb-3">
                Integrity
              </h3>
              <p className="font-geist-mono text-20 leading-[27px] text-stratech-text-blue">
                Building trust through transparency and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      <section className="py-16 lg:py-20 bg-stratech-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-28">
          <div className="mb-16">
            <h2 className="font-jaldi text-4xl md:text-5xl lg:text-6xl text-stratech-text-blue mb-6">
              Featured Case Studies
            </h2>
            <p className="font-geist-mono text-base lg:text-lg leading-relaxed text-stratech-text-blue max-w-4xl">
              Discover how our tailored solutions have transformed businesses
              across industries.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white p-8 border-2 border-transparent hover:border-stratech-blue transition-colors rounded-xl shadow-sm">
              <div className="w-full h-48 lg:h-56 bg-gradient-to-br from-blue-50 to-blue-100 mb-8 rounded-lg flex items-center justify-center">
                <img
                  src="/case1.jpg"
                  alt="Product Consulting Icon"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-geist text-xl lg:text-2xl text-stratech-blue mb-6 leading-tight">
                Seamless Legacy System Migration for a Healthcare Enterprise
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-geist text-base lg:text-lg text-stratech-blue font-semibold mb-2">
                    Challenge
                  </h4>
                  <p className="font-geist-mono text-sm lg:text-base leading-relaxed text-stratech-text-blue">
                    The client's outdated system was causing inefficiencies,
                    data loss, and scalability issues.
                  </p>
                </div>
                <div>
                  <h4 className="font-geist text-base lg:text-lg text-stratech-blue font-semibold mb-2">
                    Solution
                  </h4>
                  <p className="font-geist-mono text-sm lg:text-base leading-relaxed text-stratech-text-blue">
                    Our team developed a custom migration strategy, ensuring
                    seamless data transfer, modernizing the infrastructure, and
                    integrating the system with advanced analytics tools.
                  </p>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white p-8 border-2 border-transparent hover:border-stratech-blue transition-colors rounded-xl shadow-sm">
              <div className="w-full h-48 lg:h-56 bg-gradient-to-br from-green-50 to-green-100 mb-8 rounded-lg flex items-center justify-center">
                <img
                  src="/case2.jpg"
                  alt="Product Consulting Icon"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-geist text-xl lg:text-2xl text-stratech-blue mb-6 leading-tight">
                Accelerating MVP Development for a FinTech Startup
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-geist text-base lg:text-lg text-stratech-blue font-semibold mb-2">
                    Challenge
                  </h4>
                  <p className="font-geist-mono text-sm lg:text-base leading-relaxed text-stratech-text-blue">
                    The startup needed a stable MVP within a tight timeline to
                    secure investor funding.
                  </p>
                </div>
                <div>
                  <h4 className="font-geist text-base lg:text-lg text-stratech-blue font-semibold mb-2">
                    Solution
                  </h4>
                  <p className="font-geist-mono text-sm lg:text-base leading-relaxed text-stratech-text-blue">
                    Our automated teams delivered a bug-free MVP in just 6
                    weeks, using agile development practices to meet the
                    client's requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white p-8 border-2 border-transparent hover:border-stratech-blue transition-colors rounded-xl shadow-sm">
              <div className="w-full h-48 lg:h-56 bg-gradient-to-br from-purple-50 to-purple-100 mb-8 rounded-lg flex items-center justify-center">
                <img
                  src="/case3.jpg"
                  alt="Product Consulting Icon"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-geist text-xl lg:text-2xl text-stratech-blue mb-6 leading-tight">
                Scalable ERP Implementation for a Retail Chain
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-geist text-base lg:text-lg text-stratech-blue font-semibold mb-2">
                    Challenge
                  </h4>
                  <p className="font-geist-mono text-sm lg:text-base leading-relaxed text-stratech-text-blue">
                    The retail client struggled with fragmented operations
                    across multiple locations, affecting efficiency and
                    reporting accuracy.
                  </p>
                </div>
                <div>
                  <h4 className="font-geist text-base lg:text-lg text-stratech-blue font-semibold mb-2">
                    Solution
                  </h4>
                  <p className="font-geist-mono text-sm lg:text-base leading-relaxed text-stratech-text-blue">
                    Stratech team implemented a customized ERP system,
                    integrating inventory, sales, and finance operations into a
                    single streamlined platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 lg:py-20 bg-stratech-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-28">
          <div className="mb-12">
            <h2 className="font-jaldi text-4xl md:text-5xl lg:text-6xl text-stratech-text-blue mb-6">
              Contact Us
            </h2>
            <p className="font-geist-mono text-base lg:text-lg leading-relaxed text-stratech-text-blue">
              We specialize in delivering tailored solutions to address your
              business needs across these key areas:
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-geist-mono text-base lg:text-lg text-stratech-text-blue mb-3">
                  First Name
                </label>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="h-12 lg:h-14 border-[1.5px] border-stratech-dark-blue opacity-80"
                  required
                />
              </div>
              <div>
                <label className="block font-geist-mono text-base lg:text-lg text-stratech-text-blue mb-3">
                  Last Name
                </label>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="h-12 lg:h-14 border-[1.5px] border-stratech-dark-blue opacity-80"
                  required
                />
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label className="block font-geist-mono text-base lg:text-lg text-stratech-text-blue mb-3">
                Subject
              </label>
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="h-12 lg:h-14 border-[1.5px] border-stratech-dark-blue opacity-80"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block font-geist-mono text-base lg:text-lg text-stratech-text-blue mb-3">
                Message
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="h-32 lg:h-40 border-[1.5px] border-stratech-dark-blue opacity-80 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-stratech-text-blue to-stratech-dark-blue border-[1.5px] border-stratech-blue text-white font-geist text-base lg:text-lg font-bold hover:opacity-90 transition-opacity flex items-center gap-3 shadow-lg"
            >
              Send Message
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.45854 12.5C7.45854 12.5 12.9585 8.44931 12.9585 6.99996C12.9585 5.5506 7.4585 1.5 7.4585 1.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M1.04179 12.5C1.04179 12.5 6.54174 8.44931 6.54175 6.99996C6.54176 5.5506 1.04175 1.5 1.04175 1.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </form>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 bg-stratech-background">
        <div className="max-w-7xl mx-auto px-28">
          <div className="mb-12">
            <h2 className="font-jaldi text-4xl md:text-5xl lg:text-6xl text-stratech-text-blue mb-6">
              Join Us
            </h2>
            <p className="font-geist-mono text-20 leading-[27px] text-stratech-text-blue max-w-4xl">
              Looking for a career where you can innovate and make an impact?
              Stratech Company is always on the lookout for passionate
              individuals to join our growing team.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Inclusive Environment */}
            <div className="bg-stratech-background p-6">
              <div className="w-full h-56 lg:h-72 mb-6 rounded flex items-center justify-center p-2">
                <img
                  src="/join1.jpg"
                  alt="SaaS Product Development Icon"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-geist text-28 leading-[34px] text-stratech-blue mb-3">
                Inclusive Environment
              </h3>
              <p className="font-geist-mono text-20 leading-[27px] text-stratech-text-blue">
                We celebrate diversity and foster a culture of respect and
                collaboration
              </p>
            </div>

            {/* Flexible Work */}
            <div className="bg-stratech-background p-6">
              <div className="w-full h-56 lg:h-72 mb-6 rounded flex items-center justify-center p-2">
                <img
                  src="/join2.jpg"
                  alt="SaaS Product Development Icon"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-geist text-28 leading-[34px] text-stratech-blue mb-3">
                Flexible Work Options
              </h3>
              <p className="font-geist-mono text-20 leading-[27px] text-stratech-text-blue">
                Work remotely, on-site, or in a hybrid setup that suits your
                lifestyle. <br /><br />

                
              </p>

              {/* Join Team Button */}
              <Button
                onClick={handleJoinTeam}
                className="px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-stratech-text-blue to-stratech-dark-blue border-[1.5px] border-stratech-blue text-white font-jaldi text-base lg:text-lg font-bold hover:opacity-90 transition-opacity flex items-center gap-3"
              >
                Join our team
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7305 18.1203C11.7305 18.1203 20.0486 11.994 20.0487 9.80201C20.0487 7.61001 11.7305 1.48389 11.7305 1.48389"
                    stroke="currentColor"
                    strokeWidth="2.2686"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M2.02546 18.1203C2.02546 18.1203 10.3436 11.994 10.3436 9.80201C10.3436 7.61001 2.02539 1.48389 2.02539 1.48389"
                    stroke="currentColor"
                    strokeWidth="2.2686"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>

            {/* Recognition */}
            <div className="bg-stratech-background p-6">
              <div className="w-full h-56 lg:h-72 mb-6 rounded flex items-center justify-center p-2">
                <img
                  src="/join3.jpg"
                  alt="SaaS Product Development Icon"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-geist text-28 leading-[34px] text-stratech-blue mb-3">
                Recognition & Rewards
              </h3>
              <p className="font-geist-mono text-20 leading-[27px] text-stratech-text-blue">
                Your contributions are valued, and we celebrate achievements big
                and small.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 lg:py-20 bg-stratech-background border-t border-stratech-text-blue/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-28">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-8">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/assets/3d06e7b99c5248b59738ec5ba799835f/photo_2025-05-23_03-05-19-795092?format=webp&width=800"
                  alt="Stratech Company Logo"
                  className="h-16 lg:h-20 w-auto object-contain mb-4"
                />
              </div>
              <p className="font-geist-mono text-sm lg:text-base leading-relaxed text-stratech-text-blue">
                Stratech provides smart, scalable tech solutions — from ERP and
                CRM systems to SaaS products and automation tools. We help
                businesses streamline operations, connect systems, and grow
                through tailored digital solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="text-left mt-20 lg:mt-24">
              <p className="font-geist-mono text-sm lg:text-base text-stratech-text-blue mb-4">
                Ready to transform your business? Contact us through:
              </p>
              <div className="font-jaldi text-lg md:text-xl lg:text-2xl text-stratech-text-blue">
                contact@stratech24.com
                <br />
                (+49) 176 72733996
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-stratech-text-blue/50 pt-6">
            <div className="text-center">
              <p className="font-geist-mono text-sm lg:text-base text-stratech-text-blue">
                © Stratech Company 2024 | All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
