import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import type { IDataSource, IData } from '../typescript/interfaces';

class App {
    private controller: AppController;
    private view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sourceElement = document.querySelector('.sources') as HTMLElement;
        const showSources = document.querySelector('.show-more-sources') as HTMLElement;
        sourceElement.addEventListener('click', (e: Event) =>
            this.controller.getNews(e, (data?: IData) => this.view.drawNews(data))
        );
        this.controller.getSources((data?: IDataSource) => this.view.drawSources(data));
        showSources.addEventListener('click', () => {
            this.view.hideShowSources();
        });
    }
}

export default App;
