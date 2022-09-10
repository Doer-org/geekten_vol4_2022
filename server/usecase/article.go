package usecase

import (
	"context"

	"github.com/Doer-org/geekten_vol4_2022/domain/entity"
	"github.com/Doer-org/geekten_vol4_2022/domain/repository"
)

type ArticleUsecase interface {
	GetRandom(context.Context) (*entity.Article, error)
	ArticleRanking() ([]*entity.Article, error)
}

type articleUsecase struct {
	articleRepository repository.ArticleRepository
}

func NewArticleUsecase(ar repository.ArticleRepository) ArticleUsecase {
	return articleUsecase{
		articleRepository: ar,
	}
}

func (au articleUsecase) GetRandom(ctx context.Context) (*entity.Article, error) {
	article, err := au.articleRepository.GetRandom()
	return article, err
}

func (au articleUsecase) ArticleRanking() ([]*entity.Article, error) {
	article, err := au.articleRepository.ArticleRanking()
	return article, err
}
