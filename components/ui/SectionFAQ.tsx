'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

import Section from '@/components/design/Section';
import Container from '@/components/design/Container';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: '1',
    question: "What's your typical project timeline?",
    answer: "Most projects take 3-4 weeks from start to finish, depending on complexity. I'll provide a detailed timeline during our initial consultation."
  },
  {
    id: '2',
    question: "Do you provide ongoing support?",
    answer: "Yes, I offer flexible maintenance plans and am always available for updates and improvements after launch."
  },
  {
    id: '3',
    question: "Can I update the website content myself?",
    answer: "Absolutely! I'll set you up with an easy-to-use content management system and provide training on how to make updates."
  },
  {
    id: '4',
    question: "What makes your solutions better than WordPress?",
    answer: "My solutions are custom-built for performance and security, without the bloat of WordPress. You get faster load times, better SEO, and no plugin maintenance headaches."
  }
];

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<string>('1');

  return (
    <Section className="pt-32">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-accent">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div 
                key={faq.id}
                className="border border-accent/50 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? '' : faq.id)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-accent/10"
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFaq === faq.id ? (
                    <Minus className="w-4 h-4 text-accent" />
                  ) : (
                    <Plus className="w-4 h-4 text-accent" />
                  )}
                </button>
                <div
                  className={`grid transition-all duration-200 ease-out ${
                    openFaq === faq.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 py-4 border-t border-accent/50 bg-accent/10">
                      <p className="text-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FAQSection;