import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '7a380982b6a841ac9596d0de24f7027c',
        });
    }
}

export default AppLoader;
