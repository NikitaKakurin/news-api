import Loader from './loader';
if(typeof process.env.API_KEY !== 'string') throw new Error("No ApiKey");
const apiKeyEnv = process.env.API_KEY;
class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: apiKeyEnv, // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
