"use client";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="bg-card border-t border-border py-12 bg-muted"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              Preuzimanje Firmi
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Stručna pomoć u preuzimanju firmi u blokadi i likvidaciji.
              Profesionalno i efikasno rešenje.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Srbija:</span>
                  <a
                    href="tel:+381616620042"
                    className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    +381 61 662 0042
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">
                    Crna Gora:
                  </span>
                  <a
                    href="tel:+38268202276"
                    className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    +382 68 202 276
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:culafic.gorann@gmail.com"
                  className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  culafic.gorann@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              Brzi linkovi
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                >
                  Početna
                </a>
              </li>
              <li>
                <a
                  href="/kontakt"
                  className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Preuzimanje Firmi. Sva prava
            zadržana.
          </p>
          <a
            href="https://www.manikamwebsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Izrada sajta:{" "}
            <span className="font-bold text-primary">ManikamWebSolutions</span>
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
