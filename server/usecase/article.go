package usecase

import (
	"github.com/Doer-org/geekten_vol4_2022/domain/entity"
	"github.com/Doer-org/geekten_vol4_2022/domain/repository"
)

type ArticleUsecase interface {
	GetRandom(string) (*entity.Article, error)
	GetRanking() ([]*entity.Article, error)
	CreateHistory(string, int) (*entity.History, error)
	GetHistory(string) ([]*entity.History, []*entity.Article, error)
	GetRandomRelated() ([]*entity.Article, error)
}

type articleUsecase struct {
	articleRepository repository.ArticleRepository
}

func NewArticleUsecase(ar repository.ArticleRepository) ArticleUsecase {
	return articleUsecase{
		articleRepository: ar,
	}
}

func (au articleUsecase) GetRandom(types string) (*entity.Article, error) {
	article, err := au.articleRepository.GetRandom(types)
	return article, err
}

func (au articleUsecase) GetRanking() ([]*entity.Article, error) {
	articles, err := au.articleRepository.GetRanking()
	return articles, err
}

func (ur articleUsecase) CreateHistory(user_id string, article_id int) (*entity.History, error) {
	history, err := ur.articleRepository.CreateHistory(user_id, article_id)
	return history, err
}

func (ur articleUsecase) GetHistory(user_id string) ([]*entity.History, []*entity.Article, error) {
	histories, articles, err := ur.articleRepository.GetHistory(user_id)
	return histories, articles, err
}

func (au articleUsecase) GetRandomRelated() ([]*entity.Article, error) {
	articles, err := au.articleRepository.GetRandomRelated()
	return articles, err
}
