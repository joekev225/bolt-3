import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { ROUTES } from '@/lib/routes';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-4xl font-bold mb-4">404 - Page Non Trouvée</h1>
      <p className="text-xl mb-8">Désolé, la page que vous recherchez n'existe pas.</p>
      <Button asChild>
        <Link href={ROUTES.HOME}>Retour à l'accueil</Link>
      </Button>
    </div>
  );
}