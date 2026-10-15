import { motion } from "framer-motion";
import { FaHeart, FaLeaf, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import storyImage from "../assets/coverTesty.png";
import Button from "./Button";
import Footer from "./Footer";

const values = [
  {
    icon: FaLeaf,
    title: "Fresh, always",
    description:
      "We choose quality ingredients and prepare every pizza fresh to order.",
  },
  {
    icon: FaHeart,
    title: "Made with care",
    description:
      "From stretching the dough to the final slice, every detail gets our attention.",
  },
  {
    icon: FaStar,
    title: "A table for everyone",
    description:
      "Great food is even better when it brings friends, family, and neighbors together.",
  },
];

export default function AboutUs() {
  return (
    <>
      <main className="content-page">
        <section className="about-hero">
          <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:py-32">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              A little about us
            </motion.p>
            <motion.h1
              className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-white sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              Good food brings people together.
            </motion.h1>
            <motion.p
              className="mx-auto mt-5 max-w-2xl text-base text-white/80 sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
            >
              At La Pizza Alforno, we believe the best moments happen around a
              table with a hot pizza in the middle.
            </motion.p>
          </div>
        </section>

        <section className="theme-surface px-5 py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
            >
              <img
                src={storyImage}
                alt="Friends sharing freshly baked pizza around the table"
                className="about-story-image w-full rounded-3xl object-cover shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
            >
              <p className="eyebrow">Our story</p>
              <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
                Simple ingredients. Memorable moments.
              </h2>
              <p className="mb-4 leading-7 text-[var(--muted)]">
                We make pizza for the everyday celebrations: a quick lunch, a
                family dinner, or a long catch-up with friends. Our menu brings
                together familiar favorites and generous toppings, prepared
                with care and served hot from the oven.
              </p>
              <p className="mb-7 leading-7 text-[var(--muted)]">
                Whether you’re stopping by for one slice or ordering for the
                whole table, we want every visit to feel welcoming, easy, and
                delicious.
              </p>
              <Button type="primary" to="/menu">
                Explore the menu
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="about-values px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="eyebrow">What matters to us</p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                The good stuff, made with purpose
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {values.map(({ icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  className="value-card rounded-2xl p-7"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className="value-icon mb-5 grid size-12 place-items-center rounded-full">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className="mb-2 text-xl font-bold">{title}</h3>
                  <p className="leading-6 text-[var(--muted)]">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="theme-surface px-5 py-14 text-center">
          <h2 className="mb-3 text-3xl font-bold">Come hungry. Leave happy.</h2>
          <p className="mb-6 text-[var(--muted)]">
            Your next favorite pizza is waiting.
          </p>
          <Link className="text-sm font-bold uppercase tracking-wide text-[#f54748] hover:underline" to="/Contact">
            Get in touch <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
