import './sources.css';
import type { DataSourceItemType } from '../../typescript/type';

class Sources {
    container: HTMLElement | null;
    showMore: HTMLElement | null;
    isSourcesDraw: boolean;
    constructor() {
        this.container = document.querySelector('.sources');
        this.showMore = document.querySelector('.show-more-sources');
        this.isSourcesDraw = false;
    }

    draw(data: DataSourceItemType[]): void {
        if (!this.container) throw new Error('this.container is null');
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: DataSourceItemType): void => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;
            const sourceItemName = sourceClone.querySelector('.source__item-name');
            const sourceItem = sourceClone.querySelector('.source__item');
            if (!sourceItemName || !sourceItem) throw new Error('sourceItemName or sourceItem is null');
            sourceItemName.textContent = item.name;
            sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        this.container.append(fragment);
        this.isSourcesDraw = true;
    }

    showHide(): void {
        if (!this.showMore) throw new Error('this.showMore is null');
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
        if (!this.showMore || !this.container) throw new Error('this.showMore or this.container is null');
        this.showMore.textContent = 'Show more';
        this.container.classList.remove('show-sources');
    }

    show(): void {
        if (!this.showMore || !this.container) throw new Error('this.showMore or this.container is null');
        this.showMore.textContent = 'Hide';
        this.container.classList.add('show-sources');
    }
}

export default Sources;
