import './news.css';
import type { IDataItem } from '../../typescript/interfaces';

class News {
    draw(data: IDataItem[]): void {
        const news = data.length >= 10 ? data.filter((_item: IDataItem, idx: number) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: IDataItem, idx: number): void => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) {
                const newsItem: HTMLElement | null = newsClone.querySelector('.news__item');
                if (!newsItem) throw new Error('newsItem is null');
                newsItem.classList.add('alt');
            }

            const newsMetaPhoto: HTMLElement | null = newsClone.querySelector('.news__meta-photo');
            if (!newsMetaPhoto) throw new Error('newsMetaPhoto is null');
            newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

            const newsMetaAuthor: HTMLElement | null = newsClone.querySelector('.news__meta-author');
            if (!newsMetaAuthor) throw new Error('newsMetaAuthor is null');
            newsMetaAuthor.textContent = item.author || item.source.name;

            const newsMetaDate: HTMLElement | null = newsClone.querySelector('.news__meta-date');
            if (!newsMetaDate) throw new Error('newsMetaDate is null');
            newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const newsDescriptionTitle: HTMLElement | null = newsClone.querySelector('.news__description-title');
            if (!newsDescriptionTitle) throw new Error('newsDescriptionTitle is null');
            newsDescriptionTitle.textContent = item.title;

            const newsDescriptionSource: HTMLElement | null = newsClone.querySelector('.news__description-source');
            if (!newsDescriptionSource) throw new Error('newsDescriptionSource is null');
            newsDescriptionSource.textContent = item.source.name;

            const newsDescriptionContent: HTMLElement | null = newsClone.querySelector('.news__description-content');
            if (!newsDescriptionContent) throw new Error('newsDescriptionContent is null');
            newsDescriptionContent.textContent = item.description;

            const newsDescriptionReadMore: HTMLElement | null = newsClone.querySelector('.news__read-more a');
            if (!newsDescriptionReadMore) throw new Error('newsDescriptionReadMore is null');
            newsDescriptionReadMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsElement = document.querySelector('.news') as HTMLElement;
        newsElement.innerHTML = '';
        newsElement.appendChild(fragment);
    }
}

export default News;
