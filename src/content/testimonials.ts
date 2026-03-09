export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Following didn't just run our campaign. They made our brand the one people were talking about. The structure was the difference — approvals became effortless, content became consistent, and results became inevitable.",
    name: "Sarah Chen",
    role: "Head of Marketing",
    company: "Aura Studio",
    avatar: "/images/avatar-01.jpg",
  },
  {
    quote:
      "We've worked with agencies that promise premium and deliver stock-photo energy. Following gave us brand films that looked cinematic and actually performed on social. That combination shouldn't be this rare.",
    name: "Marcus Webb",
    role: "Creative Director",
    company: "Meridian Co.",
    avatar: "/images/avatar-02.jpg",
  },
  {
    quote:
      "120 UGC assets in three weeks. Every single one on-brand, on-brief, and ready for paid. Their process is genuinely impressive — no hand-holding required.",
    name: "Priya Kapoor",
    role: "Performance Lead",
    company: "Glow Collective",
    avatar: "/images/avatar-03.jpg",
  },
  {
    quote:
      "Before Following, our social was managed by committee. Now it's a system. Engagement up 340% in six months. They didn't just manage our feed — they rebuilt how we think about content.",
    name: "David Park",
    role: "Founder",
    company: "Nomad Kitchen",
    avatar: "/images/avatar-04.jpg",
  },
  {
    quote:
      "The way they select creators is different. It's not about follower counts — it's about fit. Every creator they recommended genuinely believed in our brand. The audience felt it.",
    name: "Elena Vasquez",
    role: "Brand Manager",
    company: "Solara Beauty",
    avatar: "/images/avatar-05.jpg",
  },
];
