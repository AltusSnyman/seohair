
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Content */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-serif font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Last updated: April 11, 2025
            </p>
            
            <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              At Hair By Melissa, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
            
            <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">2. The Data We Collect About You</h2>
            <p>
              Personal data means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Identity Data includes first name, last name, username or similar identifier.</li>
              <li>Contact Data includes billing address, delivery address, email address and telephone numbers.</li>
              <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li>Profile Data includes your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses.</li>
              <li>Usage Data includes information about how you use our website, products and services.</li>
              <li>Marketing and Communications Data includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
            </ul>
            
            <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">3. How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
            
            <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
            
            <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">5. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
            </p>
            
            <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">6. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access to your personal data, request correction of your personal data, request erasure of your personal data, object to processing of your personal data, request restriction of processing your personal data, request transfer of your personal data, and right to withdraw consent.
            </p>
            
            <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
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

export default PrivacyPolicy;
