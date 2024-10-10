import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { ROUTES } from '@/lib/routes';
import { CreditCard, ShieldCheck, BarChart3, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">KASHUP</div>
            <div>
              <Button asChild variant="ghost" className="mr-2">
                <Link href={ROUTES.LOGIN}>Connexion</Link>
              </Button>
              <Button asChild>
                <Link href={ROUTES.REGISTER}>Inscription</Link>
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simplifiez vos paiements avec KASHUP</h1>
          <p className="text-xl mb-8">La solution de paiement innovante pour les marchands et les entreprises hôtelières</p>
          <Button asChild size="lg">
            <Link href={ROUTES.REGISTER}>Commencer gratuitement</Link>
          </Button>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard
            icon={<CreditCard className="w-12 h-12 mb-4 text-blue-600" />}
            title="Paiements sécurisés"
            description="Traitez les paiements en toute sécurité avec notre plateforme de confiance."
          />
          <FeatureCard
            icon={<ShieldCheck className="w-12 h-12 mb-4 text-blue-600" />}
            title="Protection contre la fraude"
            description="Bénéficiez de nos systèmes avancés de détection et de prévention de la fraude."
          />
          <FeatureCard
            icon={<BarChart3 className="w-12 h-12 mb-4 text-blue-600" />}
            title="Analyses détaillées"
            description="Obtenez des insights précieux sur vos transactions et votre activité."
          />
          <FeatureCard
            icon={<Zap className="w-12 h-12 mb-4 text-blue-600" />}
            title="Intégration rapide"
            description="Mettez en place notre solution rapidement et facilement dans votre système existant."
          />
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à booster votre activité ?</h2>
          <p className="text-xl mb-8">Rejoignez les milliers de marchands qui font confiance à KASHUP</p>
          <Button asChild size="lg">
            <Link href={ROUTES.REGISTER}>S'inscrire maintenant</Link>
          </Button>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 KASHUP. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        {icon}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
}