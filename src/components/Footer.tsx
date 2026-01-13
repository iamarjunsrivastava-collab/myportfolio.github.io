import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Arjun Srivastava. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/iamarjunsrivastava-collab", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/arjun-srivastava-228021282/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:iamarjunsrivastava@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
