import { Button, buttonVariants } from '@/components/ui/button';
import { Article } from '@/lib/types';
import Link from 'next/link';

const Articles = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    //
    {
      // Pour désavtiver le cache
      cache: 'no-store',
      // Pour actualiser les donnes chaque 50s
      next: { revalidate: 50 },
    }
  );
  if (!response.ok) {
    throw new Error('filed to fetch articles');
  }
  const articles: Article[] = await response.json();
  return (
    <div className='container'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {articles &&
          articles.map((article: any) => {
            const { id, title, body } = article;
            return (
              <div key={id} className='flex flex-col items-start justify-between gap-5 rounded-md border p-3 '>
                <div className='space-y-4'>
                  <h2 className='line-clamp-1 font-semibold text-gray-600'>{title} </h2>
                  <p className='line-clamp-2 text-sm text-gray-500'> {body} </p>
                </div>
                <Link href={`articles/${id}`} className={buttonVariants({ variant: 'outline' })}>
                  show more ...
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Articles;
