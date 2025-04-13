
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Content */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-serif font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Last updated: April 11, 2025
            </p>
            
            <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Welcome to Hair By Melissa. These terms and conditions outline the rules and regulations for the use of our website and services.
            </p>
            <p className="mt-2">
              By accessing this website and using our services, we assume you accept these terms and conditions in full. Do not continue to use Hair By Melissa's website or services if you do not accept all of the terms and conditions stated on this page.
            </p>
            
            <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">2. Salon Services</h2>
            <p>
              Hair By Melissa provides various hair services including but not limited to haircuts, coloring, styling, keratin treatments, and consultations. All services are subject to availability and scheduling.
            </p>
            
            <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">3. Appointments and Cancellations</h2>
            <p>
              Appointments can be scheduled through our website, by phone, or in person. We require 24 hours' notice for cancellations or rescheduling. Late cancellations or no-shows may result in a cancellation fee equal to 50% of the scheduled service.
            </p>
            
            <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">4. Payment</h2>
            <p>
              Payment is due at the time services are rendered. We accept cash, major credit cards, and digital payment methods. Gift certificates are available for purchase and are non-refundable.
            </p>
            
            <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">5. Satisfaction Guarantee</h2>
            <p>
              Your satisfaction is our priority. If you are not completely satisfied with your service, please contact us within 7 days and we will make it right. Adjustments must be scheduled within 14 days of the original service.
            </p>
            
            <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">6. Intellectual Property</h2>
            <p>
              The content, organization, graphics, design, compilation, and other matters related to this website are protected under applicable copyrights, trademarks, and other proprietary rights. Copying, redistribution, use, or publication of any such content or any part of this website is prohibited without express permission from Hair By Melissa.
            </p>
            
            <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
            <p>
              Hair By Melissa shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of the website or services. This includes, without limitation, lost profits, business interruption, loss of programs, or other data.
            </p>
            
            <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of New Zealand, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
            
            <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">9. Changes to Terms</h2>
            <p>
              Hair By Melissa reserves the right to modify these terms and conditions at any time, so please review them frequently. Changes will be effective when posted on the website with no other notice provided.
            </p>
            
            <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">10. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-2">
              Email: melissa@hairbymelissa.co.nz<br />
              Phone: 027 520 1613<br />
              Address: Magnolia Lane, Kaukapakapa, Rural Auckland, NZ
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
