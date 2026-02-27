export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "The structure was the difference — approvals became effortless.",
    name: "Marketing Director",
    role: "DTC Brand",
    avatar: "/images/avatar-01.jpg",
  },
  {
    quote:
      "Creative looked premium while staying built for social.",
    name: "Brand Manager",
    role: "Fashion Label",
    avatar: "/images/avatar-02.jpg",
  },
  {
    quote:
      "Clear timelines, clean deliverables, strong reporting.",
    name: "Head of Growth",
    role: "Tech Startup",
    avatar: "/images/avatar-03.jpg",
  },
];
