import Post from './post';
import './css/style.scss';
import settings from './assets/data.json';
import { arr } from './test.ts';

const post = new Post('Webpack Post Title !!');

console.log('Post to string:', post.toString())
console.log('settings', settings);

console.log('Typescript test:', arr);
