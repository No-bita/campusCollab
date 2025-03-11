
import { Link } from 'react-router-dom';
import { GitHub, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold text-lg">ProjectHub</h4>
            <p className="text-sm text-muted-foreground">
              Connect, collaborate, and create amazing projects with peers, mentors, and industry professionals.
            </p>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                <GitHub size={18} />
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-semibold mb-4 text-sm">Platform</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/projects" className="hover:text-foreground transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/mentors" className="hover:text-foreground transition-colors">Mentors</Link>
              </li>
              <li>
                <Link to="/alumni" className="hover:text-foreground transition-colors">Alumni</Link>
              </li>
              <li>
                <Link to="/discussions" className="hover:text-foreground transition-colors">Discussions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4 text-sm">Resources</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/guidelines" className="hover:text-foreground transition-colors">Guidelines</Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-foreground transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/tutorials" className="hover:text-foreground transition-colors">Tutorials</Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-foreground transition-colors">Events</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4 text-sm">Legal</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Use</Link>
              </li>
              <li>
                <Link to="/accessibility" className="hover:text-foreground transition-colors">Accessibility</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ProjectHub. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Made with care for the academic community</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
