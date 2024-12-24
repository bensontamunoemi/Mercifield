import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content:
      "23 Stone Road, Agbarico, Opposite, FRSC, Onireke Ibadan, Oyo State",
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
          src="https://www.google.com/maps/embed?pb=!4v1735032128632!6m8!1m7!1sukDtxzs-DUG_qSwSjlnswg!2m2!1d7.392213356710313!2d3.879978737583114!3f86.18807632323009!4f6.8001865935063535!5f0.7820865974627469"
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
