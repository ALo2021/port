import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const projects = [
  {
    title: "Project One",
    description: "A brief description of the project.",
    link: "#",
  },
  {
    title: "Project Two",
    description: "Another cool project description.",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Portfolio
      </motion.h1>

      <section className="text-center mb-10">
        <p className="text-lg">Hi, I'm a passionate developer skilled in React, JavaScript, HTML, and CSS.</p>
      </section>

      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {projects.map((project, index) => (
          <Card key={index} className="bg-gray-800 p-4 rounded-2xl shadow-md">
            <CardContent>
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="text-gray-400">{project.description}</p>
              <Button className="mt-4" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </motion.section>

      <motion.section
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h3 className="text-2xl font-semibold">Contact Me</h3>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="text-white text-2xl"><FaGithub /></a>
          <a href="#" className="text-white text-2xl"><FaLinkedin /></a>
          <a href="#" className="text-white text-2xl"><FaEnvelope /></a>
        </div>
      </motion.section>
    </div>
  );
}
