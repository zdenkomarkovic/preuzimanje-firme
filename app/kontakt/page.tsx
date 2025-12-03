import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function KontaktPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Kontaktirajte nas
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Za više informacija o našim uslugama ili za zakazivanje
            konsultacija, slobodno nas kontaktirajte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6 text-left">
                Kontakt Informacije
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Telefon</h3>
                    <a
                      href="tel:+381600000000"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +381 XX XXX XXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:info@preuzimanje-firmi.rs"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@preuzimanje-firmi.rs
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Adresa</h3>
                    <p className="text-muted-foreground">Beograd, Srbija</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Radno vreme</h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>Ponedeljak - Petak:</span>
                  <span className="font-semibold">09:00 - 17:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Subota:</span>
                  <span className="font-semibold">Po dogovoru</span>
                </p>
                <p className="flex justify-between">
                  <span>Nedelja:</span>
                  <span className="font-semibold">Zatvoreno</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6 text-left">
              Pošaljite nam poruku
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
