import React from 'react';
import Link from 'next/link';
import { FileText, Mail, Users } from 'lucide-react';
import Container from '@/components/design/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mt-16 border-t border-border">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-foreground">
            © {currentYear} aricin.dev
          </div>
          <div className="flex flex-wrap gap-8">
            <Link 
              href="/resume" 
              className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </Link>
            
            <Link 
              href="/contact" 
              className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </Link>
            
            <Link 
              href="/client-portal" 
              className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
            >
              <Users className="w-4 h-4" />
              <span>Client Portal</span>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;