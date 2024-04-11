import { articles } from '@/data/articles';
import { CreateArticleDto } from '@/lib/dtos';
import { Article } from '@/lib/types';
import { createArticleSchema } from '@/lib/validationsSchemas';
import { NextRequest, NextResponse } from 'next/server';

/**
 * @method GET
 * @route /api/articles
 * @description Get all articles
 * @access public
 */

export const GET = (req: NextRequest) => {
  return NextResponse.json(articles, { status: 200 });
};

/**
 * @method POST
 * @route /api/articles
 * @description Create new article
 * @access public
 */
export const POST = async (req: NextRequest) => {
  const body = (await req.json()) as CreateArticleDto;

  // Validation
  const validation = createArticleSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      {
        message: validation.error.errors.map((error) => {
          return {
            path: error.path[0],
            message: error.message,
          };
        }),
      },
      { status: 400 }
    );
  }
  const newArticle: Article = {
    id: 4,
    userId: 105,
    title: body.title,
    body: body.body,
  };

  articles.push(newArticle);
  return NextResponse.json(newArticle, { status: 201 });
};
