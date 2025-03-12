
// Треба зробити регулярний вираз, щоб розпарсити посилання з синтаксису read.me на html


let readMeToHtmlRegex = /* Тут регулярка */;
let text = 'This site was built using [GitHub Pages](https://pages.github.com/). I can do more of these links, [watch me!](https://google.com).';

let result = text.replace(readMeToHtmlRegex, /* Тут теж щось цікавеньке */);

// Очікуваний результат в result:
// This site was built using <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>. I can do more of these links, <a href="https://google.com" target="_blank">watch me!</a>.

document.querySelector('body').innerHTML = result;

// Очікуваний результат на сторінці:
// This site was built using GitHub Pages. I can do more of these links, watch me!.
// GitHub Pages та watch me! - мають бути лінками і відкривати в сусідній вкладці відповідні сторінки.