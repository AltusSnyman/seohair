
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Check, Calendar as CalendarIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | null>(null);
  const [service, setService] = useState<string>("");
  const { toast } = useToast();

  const availableTimes = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];
  
  const services = [
    "Keratin Treatments", 
    "Women's Cut & Finish", 
    "Partial Foils", 
    "Half Head of Highlights", 
    "Full Head of Highlights", 
    "Permanent Tint & Touch Up",
    "Permanent Tint & All Over Color",
    "Balayage",
    "Toner",
    "Blow Wave"
  ];

  const handleBooking = () => {
    if (!date || !time || !service) {
      toast({
        title: "Incomplete booking",
        description: "Please select a date, time, and service to book your appointment.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking Confirmed!",
      description: `Your appointment for ${service} on ${format(date, "MMMM d, yyyy")} at ${time} has been scheduled.`,
      variant: "default",
    });

    // Reset form
    setDate(undefined);
    setTime(null);
    setService("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full">
            <img
              src="https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d45dc7a0157964d24379.png"
              alt="Booking appointment"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-serif font-bold text-white leading-tight">
              Book Your Appointment
            </h1>
            <p className="text-xl text-white mt-6">
              Schedule your visit to Hair By Andrea and get ready for a stunning transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="bg-white py-20">
        <div className="container-custom max-w-5xl">
          <div className="bg-salon-lightgray rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-serif font-bold text-center mb-8">Reserve Your Spot</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Calendar */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-serif font-semibold mb-4 flex items-center">
                  <CalendarIcon className="mr-2 h-5 w-5 text-salon-darkblue" />
                  Select a Date
                </h3>
                <div className="pointer-events-auto">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => {
                      // Disable past dates and Sundays
                      const day = date.getDay();
                      return date < new Date() || day === 0;
                    }}
                    className="p-3 pointer-events-auto"
                  />
                </div>
              </div>
              
              {/* Right Column - Time & Service Selection */}
              <div>
                <div className="bg-white rounded-lg p-6 shadow-md mb-6">
                  <h3 className="text-xl font-serif font-semibold mb-4">Select a Time</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {availableTimes.map((t) => (
                      <Button
                        key={t}
                        variant="outline"
                        className={`
                          border-2 rounded-md text-sm p-2 h-auto
                          ${time === t ? 'bg-salon-blue border-salon-darkblue text-black' : ''}
                        `}
                        onClick={() => setTime(t)}
                      >
                        {t}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-serif font-semibold mb-4">Select a Service</h3>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-salon-darkblue"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {/* Booking Summary */}
            <div className="mt-8 bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-serif font-semibold mb-4">Booking Summary</h3>
              <div className="space-y-2 mb-6">
                <p className="flex items-center">
                  <span className="font-medium w-24">Date:</span> 
                  <span>{date ? format(date, "MMMM d, yyyy") : "Not selected"}</span>
                </p>
                <p className="flex items-center">
                  <span className="font-medium w-24">Time:</span> 
                  <span>{time || "Not selected"}</span>
                </p>
                <p className="flex items-center">
                  <span className="font-medium w-24">Service:</span> 
                  <span>{service || "Not selected"}</span>
                </p>
              </div>
              
              <div className="flex justify-center">
                <Button
                  className="bg-salon-darkblue hover:bg-blue-600 text-white px-8 py-3 rounded-md text-lg flex items-center"
                  onClick={handleBooking}
                >
                  <Check className="mr-2 h-5 w-5" />
                  Confirm Booking
                </Button>
              </div>
            </div>
            
            <div className="mt-6 text-center text-gray-600">
              <p>
                Note: This is a temporary booking system. A team member will contact you to confirm your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
