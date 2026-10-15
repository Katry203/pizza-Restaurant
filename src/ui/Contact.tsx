import { FormEvent } from "react";
import { motion } from "framer-motion";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
  IoTimeOutline,
} from "react-icons/io5";
import Footer from "./Footer";

const restaurantEmail = "abdelrahmanragab334@gmail.com";
const restaurantPhone = "01146114898";

const contactDetails = [
  {
    icon: IoCallOutline,
    label: "Call us",
    value: restaurantPhone,
    href: "tel:+201146114898",
  },
  {
    icon: IoMailOutline,
    label: "Email us",
    value: restaurantEmail,
    href: `mailto:${restaurantEmail}`,
  },
  {
    icon: IoLocationOutline,
    label: "Find us",
    value: "1234 Street, Cairo, Egypt",
    href: "https://maps.google.com/?q=1234+Street+Cairo+Egypt",
  },
];

function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const mailto = `mailto:${restaurantEmail}?subject=${encodeURIComponent(subject || "Website enquiry")}&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;
}

export default function Contact() {
  return (
    <>
      <main className="content-page">
        <section className="contact-hero px-5 pb-14 pt-32 text-center sm:pb-20 sm:pt-40">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            We’re here for you
          </motion.p>
          <motion.h1
            className="text-4xl font-bold sm:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            Let’s talk pizza.
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-xl text-[var(--muted)] sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            Questions, feedback, or planning a get-together? Send us a note or
            reach out using the details below.
          </motion.p>
        </section>

        <section className="px-5 pb-20">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.aside
              className="contact-panel rounded-3xl p-7 sm:p-9"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="eyebrow">Contact details</p>
              <h2 className="mb-7 text-2xl font-bold">We’d love to hear from you</h2>
              <div className="space-y-6">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={label === "Find us" ? "_blank" : undefined}
                    rel={label === "Find us" ? "noreferrer" : undefined}
                    className="contact-detail flex items-start gap-4"
                  >
                    <span className="contact-icon grid size-11 shrink-0 place-items-center rounded-xl text-xl">
                      <Icon aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm text-[var(--muted)]">{label}</span>
                      <span className="mt-1 block font-semibold">{value}</span>
                    </span>
                  </a>
                ))}
              </div>
              <div className="contact-hours mt-8 rounded-2xl p-5">
                <h3 className="mb-3 flex items-center gap-2 font-bold">
                  <IoTimeOutline className="text-xl text-[#f54748]" />
                  Opening hours
                </h3>
                <div className="flex justify-between gap-4 text-sm text-[var(--muted)]">
                  <span>Monday – Friday</span>
                  <span>9:00 – 23:00</span>
                </div>
                <div className="mt-2 flex justify-between gap-4 text-sm text-[var(--muted)]">
                  <span>Saturday</span>
                  <span>10:00 – 21:00</span>
                </div>
                <div className="mt-2 flex justify-between gap-4 text-sm text-[var(--muted)]">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </motion.aside>

            <motion.section
              className="contact-form-card rounded-3xl p-7 sm:p-9"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <p className="eyebrow">Send a message</p>
              <h2 className="mb-2 text-2xl font-bold">How can we help?</h2>
              <p className="mb-7 text-sm text-[var(--muted)]">
                Your email app will open with your message ready to send.
              </p>
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="contact-label">
                    Your name
                    <input
                      className="contact-input"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Alex Smith"
                      required
                    />
                  </label>
                  <label className="contact-label">
                    Email address
                    <input
                      className="contact-input"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                </div>
                <label className="contact-label">
                  Subject
                  <input
                    className="contact-input"
                    name="subject"
                    type="text"
                    placeholder="What’s this about?"
                    required
                  />
                </label>
                <label className="contact-label">
                  Message
                  <textarea
                    className="contact-input min-h-36 resize-y"
                    name="message"
                    placeholder="Tell us how we can help..."
                    required
                  />
                </label>
                <button type="submit" className="contact-submit">
                  Prepare email <span aria-hidden="true">→</span>
                </button>
              </form>
            </motion.section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
