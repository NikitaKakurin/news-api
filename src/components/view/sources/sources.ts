import './sources.css';
import { IDataSourceItem } from '../../typescript/interfaces';

class Sources {
    container: HTMLElement;
    showMore: HTMLElement;
    isSourcesDraw: boolean;
    constructor() {
        this.container = document.querySelector('.sources') as HTMLElement;
        this.showMore = document.querySelector('.show-more-sources') as HTMLElement;
        this.isSourcesDraw = false;
    }

    draw(data: IDataSourceItem[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: IDataSourceItem) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        this.container.append(fragment);
        this.isSourcesDraw = true;
    }

    showHide(): void {
        if (!this.isSourcesDraw) {
            return;
        }
        if (this.showMore.textContent === 'Hide') {
            this.hide();
        } else {
            this.show();
        }
    }

    hide(): void {
        this.showMore.textContent = 'Show more';
        this.container.classList.remove('show-sources');
    }

    show(): void {
        this.showMore.textContent = 'Hide';
        this.container.classList.add('show-sources');
    }
}

export default Sources;
