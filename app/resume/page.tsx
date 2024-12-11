
// I like the light blobs on this page - add them to other pages
// - Fix gradients (why don't tailwind gradients work?)
// - Fix bullet points
// - Lightmode

import { useEffect, useState } from 'react';


import React from 'react';
import { ExternalLink, Mail, MapPin, Phone, Github, Calendar, Dot } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const Resume = () => {
  // const [displayText, setDisplayText] = useState('');
  // const [isTypingComplete, setIsTypingComplete] = useState(false);
  // const fullText = 'Aricin Rotarius';
  // const typingSpeed = 100;

  // useEffect(() => {
  //   let currentIndex = 0;
  //   const typingInterval = setInterval(() => {
  //     if (currentIndex <= fullText.length) {
  //       setDisplayText(fullText.slice(0, currentIndex));
  //       currentIndex++;
  //     } else {
  //       clearInterval(typingInterval);
  //       setIsTypingComplete(true);
  //     }
  //   }, typingSpeed);

  //   return () => clearInterval(typingInterval);
  // }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background p-8 relative">
      {/* Background decorative elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl opacity-20" />
      </div> */}

      {/* Main content */}
      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <header className="backdrop-blur-lg bg-card rounded-t-2xl p-8 border shadow-none">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-accent text-transparent bg-clip-text">
            {/* <span className="inline-flex">
              {displayText}
              <span className="w-1 h-12 bg-foreground ml-1 animate-blink"/>
            </span> */}
            Aricin Rotarius
          </h1>
          <div className="flex flex-wrap gap-4 text-foreground items-center">
            <a href="tel:862-213-8340" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={16} />
              862-213-8340
            </a>
            <a href="mailto:adrotarius@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={16} />
              adrotarius@gmail.com
            </a>
            <a href="https://linkedin.com/in/aricin" className="flex items-center gap-2 hover:text-accent transition-colors">
              <FaLinkedin size={16} />
              linkedin.com/in/aricin
            </a>
          </div>
        </header>

        <div className="backdrop-blur-lg bg-card p-8 border-x shadow-none">
          {/* Skills */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2 border-b pb-2">
              Skills
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Proficient</h3>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript/TypeScript", "Python", "Java", "HTML/CSS", "Node.js", "Next.js", "React.js", "Django", "Flask", "REST APIs", "SQL", "Git", "OOP", "SEO", "Web Vitals"].map((skill) => (
                    <span key={skill} className="bg-accent/10 text-accent px-4 py-1 rounded-full text-sm border border-accent/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground 0 mb-3">Working Knowledge</h3>
                <div className="flex flex-wrap gap-2">
                  {["C", "Swift", "Vue.js", "FastAPI", "Docker", "AWS", "Serverless", "GraphQL", "NoSQL", "MongoDB", "PostgreSQL", "MySQL", "Firebase", "Agile", "Scrum", "Shape Up"].map((skill) => (
                    <span key={skill} className="bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm border border-secondary/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2 border-b pb-2">
              Experience
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Software Engineer",
                  company: "Landtrust (Contract)",
                  period: "Jan 2024 – Nov 2024",
                  location: "Remote",
                  achievements: [
                    "Developed programmatic SEO services with Next.js and React, generating 10,000 static pages",
                    "Integrated SEO services with Strapi CMS and Algolia, implementing data caching",
                    "Implemented RESTful APIs in TypeScript using design patterns",
                    "Built GraphQL endpoints in AWS AppSync using Serverless Framework",
                    "Led performance optimization project resulting in 37% faster load times",
                    "Enabled data-driven performance optimizations with GA4 and Postgres",
                    "Added Lighthouse audits to CI/CD pipelines"
                  ]
                },
                {
                  title: "Software Engineer",
                  company: "Squidly, Inc.",
                  period: "Jun 2023 – Dec 2023",
                  location: "Lake Forest Park, WA",
                  achievements: [
                    "Reduced infrastructure costs by 44% through serverless architecture",
                    "Built OpenAI-integrated chatbot with Python",
                    "Established websocket chat streaming using AWS Lambda",
                    "Built and deployed Vue.js single-page application",
                    "Implemented OIDC authentication with Auth0",
                    "Developed CI/CD workflows with GitHub Actions"
                  ]
                },
                {
                  title: "Web Development & Marketing",
                  company: "Self Employed",
                  period: "Aug 2020 – Present",
                  location: "Remote",
                  achievements: [
                    "Provide client-facing web development and marketing services",
                    "Develop performant web apps using TypeScript and Next.js",
                    "Implement technical SEO best practices",
                    "Create targeted Google Ad campaigns"
                  ]
                }
              ].map((job, index) => (
                <div key={index} className="backdrop-blur-md bg-card-hover rounded-xl p-6 border transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                      <p className="text-accent">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-foreground-muted flex items-center gap-1 justify-end">
                        <Calendar size={16} />
                        {job.period}
                      </p>
                      <p className="text-foreground-muted flex items-center gap-1 justify-end">
                        <MapPin size={16} />
                        {job.location}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="text-foreground-muted flex items-center">
                        <Dot className="text-accent" size={20} />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2 border-b pb-2">
              Projects
            </h2>
            <div className="grid gap-6">
              {[
                {
                  name: "Fantasy Football Ranking Service",
                  date: "Sep 2024",
                  tech: "PostgreSQL, SQL, Python",
                  details: [
                    "Ingested NFL data into PostgreSQL datastore",
                    "Developed data transformation scripts in Python",
                    "Wrote SQL queries for fantasy football insights"
                  ]
                },
                {
                  name: "Amazon Product Vector Search Engine",
                  date: "Jun 2023",
                  tech: "Python, Jupyter, OpenAI, Pinecone",
                  details: [
                    "Developed natural language search engine for Amazon products",
                    "Created OpenAI embeddings of product descriptions",
                    "Integrated with Pinecone vector database"
                  ]
                },
                {
                  name: "MagiPad",
                  date: "Mar 2023",
                  tech: "Swift, UIKit, OpenAI",
                  details: [
                    "Developed iPad app prototype in 24-hour hackathon",
                    "Built with Swift, UIKit, and Dall-E 2"
                  ]
                },
                {
                  name: "Canvas Plus Plus (LMS)",
                  date: "Feb 2023 – May 2023",
                  tech: "Python, Django, MySQL, Docker",
                  details: [
                    "Designed relational database schema in third normal form",
                    "Setup dev environments with Docker",
                    "Led team of 6 developers using Agile methodologies"
                  ]
                },
                {
                  name: "cardgamer.club",
                  date: "Jan 2023 – Mar 2023",
                  tech: "JavaScript, Node.js, Firebase, Netlify",
                  details: [
                    "Developed multiplayer card game with serverless architecture",
                    "Built custom drag and drop library",
                    "Implemented user authentication and lobby management"
                  ]
                }
              ].map((project, index) => (
                <div key={index} className="backdrop-blur-md bg-card-hover rounded-xl p-6 border">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-foreground">{project.name}</h3>
                    <p className="text-foreground-muted">{project.date}</p>
                  </div>
                  <p className="text-accent mb-3">{project.tech}</p>
                  <ul className="space-y-2">
                    {project.details.map((detail, i) => (
                      <li key={i} className="text-foreground-muted flex items-center">
                        <Dot className="text-accent" size={20} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2 border-b pb-2">
              Education
            </h2>
            <div className="backdrop-blur-md bg-card-hover rounded-xl p-6 border">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-foreground">University of Wisconsin-Madison</h3>
                  <p className="text-accent">Bachelor of Science, Computer Science</p>
                  <p className="text-foreground-muted">Certificate of Entrepreneurship</p>
                  {/* <div className="mt-4">
                    <p className="text-gray-400 font-medium">Relevant Coursework:</p>
                    <p className="text-gray-300">Data Structures, Algorithms, Artificial Intelligence, Software Engineering, Operating Systems, Database Management Systems, Data Science, Elementary Matrix & Linear Algebra, Discrete Mathematics</p>
                  </div> */}
                </div>
                <p className="text-foreground-muted">Sep 2019 – May 2023</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="backdrop-blur-lg bg-card rounded-b-2xl p-4 border-x border-b text-center text-foreground-muted shadow-none">
        </footer>
      </div>
    </div>
  );
};

export default Resume;