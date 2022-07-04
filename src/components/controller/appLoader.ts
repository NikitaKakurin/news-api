import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'c636533340b746d4bab32736ea670ddc', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
