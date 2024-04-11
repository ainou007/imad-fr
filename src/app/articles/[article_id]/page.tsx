import { Article } from '@/lib/types';

interface SingleArticlePageProps {
  params: { article_id: string };
}
const SingleArticlePage = async ({ params }: SingleArticlePageProps) => {
  const { article_id } = params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${article_id}`
  );
  if (!response.ok) {
    throw new Error('Filed to fetch article');
  }
  const { title, body }: Article = await response.json();

  return (
    <div className='container'>
      <div className='p-5 border rounded-md shadow-md w-full'>
        <h1 className='font-semibold text-2xl'>{title}</h1>
        <p className='mt-4'> {body} </p>
      </div>
    </div>
  );
};
export default SingleArticlePage;
