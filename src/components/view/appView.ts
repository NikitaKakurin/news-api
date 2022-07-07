import News from './news/news';
import Sources from './sources/sources';
import type { IDataSource, IData } from '../typescript/interfaces';

export class AppView {
    private news: News;
    private sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data?: IData): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
        this.sources.hide();
    }

    drawSources(data?: IDataSource): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }

    hideShowSources(): void {
        this.sources.showHide();
    }
}

export default AppView;
