import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "123 Event Street, Ibadan, Oyo State 12345",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+(234) 809-181-2181",
  },
  {
    icon: Mail,
    title: "Email",
    content: "mercifieldentofficial@gmail.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Fri: 9:00 AM - 6:00 PM",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {contactInfo.map((item) => (
        <div key={item.title} className="flex items-start space-x-4">
          <item.icon className="h-6 w-6 text-[#FAC611] mt-1" />
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.content}</p>
          </div>
        </div>
      ))}
      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
