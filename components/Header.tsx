import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-md dark:bg-gray-800">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href={ROUTES.HOME} className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            KASHUP
          </Link>
          <ul className="flex items-center space-x-6">
            <li><Link href={ROUTES.HOME} className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Accueil</Link></li>
            <li><Link href={ROUTES.DASHBOARD} className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Tableau de bord</Link></li>
            <li><Link href={ROUTES.PROFILE} className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Profil</Link></li>
            <li><Link href={ROUTES.PAYMENT_TERMINAL} className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Terminal de paiement</Link></li>
          </ul>
          <Button asChild variant="outline">
            <Link href={ROUTES.LOGIN}>Déconnexion</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}