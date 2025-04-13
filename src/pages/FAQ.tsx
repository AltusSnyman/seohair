
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How often should I color my hair?",
      answer: "This depends on your hair growth and the type of color service. Generally, root touch-ups are recommended every 4-6 weeks, while full color services may last 6-8 weeks. For highlights or balayage, you can often go 2-3 months between appointments. During your consultation, Andrea will provide personalized recommendations based on your hair type and desired look."
    },
    {
      question: "How long does a keratin treatment last?",
      answer: "Our premium keratin treatments typically last between 3-5 months, depending on your hair type and how well you maintain it. To maximize longevity, we recommend using sulfate-free shampoos and conditioners, avoiding excessive heat styling, and protecting your hair from excessive sun exposure and chlorine."
    },
    {
      question: "Can I wash my hair after a keratin treatment?",
      answer: "We recommend waiting 48-72 hours after a keratin treatment before washing your hair. This allows the treatment to fully set and bond with your hair. During this time, avoid getting your hair wet, using hair ties, clips, or tucking it behind your ears, as these can create creases or dents in the treated hair."
    },
    {
      question: "How should I prepare for my hair coloring appointment?",
      answer: "For best results, arrive with clean, dry hair that hasn't been washed for 24-48 hours before your appointment. This allows your scalp's natural oils to provide some protection during the chemical process. It's also helpful to bring reference photos of what you're looking for. Wear clothing that you don't mind potentially getting color on, although our stylists are very careful."
    },
    {
      question: "Do you offer color corrections?",
      answer: "Yes, Andrea specializes in color corrections. These services require a consultation first, as they are highly personalized and may require multiple sessions to achieve your desired result. During the consultation, Andrea will assess your hair condition, discuss your goals, and create a treatment plan tailored to your specific needs."
    },
    {
      question: "How long should I wait before washing my hair after coloring?",
      answer: "We recommend waiting at least 48 hours before washing your hair after a color service. This allows the color molecules to fully set inside the hair shaft, resulting in longer-lasting, more vibrant color. When you do wash your hair, use cool water and sulfate-free, color-safe products."
    },
    {
      question: "What's the difference between highlights and balayage?",
      answer: "Highlights are typically created using foils and result in a more uniform, sometimes striped pattern throughout the hair. Balayage is a freehand painting technique that creates a more natural, sun-kissed effect with softer, less noticeable regrowth. During your consultation, Andrea can help determine which technique will best achieve your desired look."
    },
    {
      question: "Do you offer consultations before services?",
      answer: "Yes, consultations are an essential part of our service. For new clients or those considering a significant change, we recommend scheduling a consultation before your appointment. This allows us to understand your goals, assess your hair's condition, and develop a personalized plan to achieve your desired results."
    },
    {
      question: "What if I'm not happy with my hair after my appointment?",
      answer: "Your satisfaction is our priority. If you're not completely happy with your results, please contact us within 7 days of your appointment. We'll schedule a time for you to come back for an adjustment at no additional charge. We want to ensure you love your hair when you leave our salon."
    },
    {
      question: "How do I cancel or reschedule an appointment?",
      answer: "We understand that schedules change. We request at least 24 hours' notice for cancellations or rescheduling. You can call the salon directly or use our online booking system to make changes to your appointment."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <img
              src="https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65a12053d06f9d2b9fc.png"
              alt="FAQ"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-serif font-bold text-white leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white mt-6">
              Find answers to commonly asked questions about our services, policies, and hair care.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-4xl">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-salon-lightgray rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 className="text-xl font-serif font-semibold">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-salon-darkblue" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-salon-darkblue" />
                  )}
                </button>
                
                <div 
                  className={`px-6 pb-4 ${openIndex === index ? 'block' : 'hidden'}`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">
              Still have questions? We're here to help!
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
