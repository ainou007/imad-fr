import { articles } from '@/data/articles';
import { Article } from '@/lib/types';
import { NextRequest, NextResponse } from 'next/server';

interface Props {
  params: { id: string };
}

/**
 * @method GET
 * @route /api/articles/:id
 * @description Get single article by id
 * @access public
 */

export const GET = (req: NextRequest, { params: { id } }: Props) => {
  const article: Article | undefined = articles.find((article) => {
    return article.id === parseInt(id);
  });
  if (!article) {
    return NextResponse.json(
      { message: 'article not found !' },
      { status: 404 }
    );
  }
  return NextResponse.json(article, { status: 200 });
};

/**
 * @method PUT
 * @route /api/articles/:id
 * @description Update an article
 * @access public
 */

export const PUT = (req: NextRequest, { params: { id } }: Props) => {
  const article: Article | undefined = articles.find((article) => {
    return article.id === parseInt(id);
  });
  if (!article) {
    return NextResponse.json(
      { message: 'article not found !' },
      { status: 404 }
    );
  }
  return NextResponse.json(article, { status: 200 });
};

/**
 * @method DELETE
 * @route /api/articles/:id
 * @description Delete an article
 * @access public
 */

export const DELETE = (req: NextRequest, { params: { id } }: Props) => {
  console.log(id);
  const article: Article | undefined = articles.find((article) => {
    return article.id === parseInt(id);
  });
  if (!article) {
    return NextResponse.json(
      { message: 'article not found !' },
      { status: 404 }
    );
  }
  return NextResponse.json(article, { status: 200 });
};
