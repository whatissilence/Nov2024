const randomText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aut commodi corporis deleniti doloremque elit dolores eum eveniet ex, explicabo fuga fugiat id ipsum laboriosam molestiae nobis non officiis provident quam quasi quis, recusandae sed similique tempore temporibus. Placeat, sapiente, voluptatibus! Ab accusantium amet, assumenda aut autem blanditiis commodi dolorum error exercitationem fugiat fugit illo impedit ipsa iste, magnam maiores modi nobis numquam odio odit officia provident quae quas quisquam quod saepe sequi sint, tempora vero voluptates? Ad adipisci amet animi asperiores aut cumque dolores eaque eligendi fugiat hic libero officiis perspiciatis quaerat qui quisquam repellat repellendus, repudiandae tempore, voluptatem.';

const shortReg = /[A-N]/g;
const regexObject = new RegExp('[A-Z]', 'g');

console.log(randomText.match(shortReg));
console.log(randomText.match(regexObject));
console.log(randomText.replace(/[A-Z]/gi, '1'));

const lupaLapa = 'Лупа, фваіва іва ліпа, фвфів ф дфі оіалоі фдлвфіждв лф лааапа фіалка фділвфв фдлвфівфдлівф фіалка фівіііі вввва ааа л33па івфів фі  л  па  луууууупа    ваіа іва іав   лпа';
console.log(lupaLapa.match(/л..па|фіалка/gi));
console.log(lupaLapa.match(/л.{2,7}па|фіалка/gi));

// [A-Za-zА-Яа-яіІіЇїҐґЄє] - усі ангійськи та українські

console.log(randomText.match(/[A-Z][a-z]+/g)); // Усі слова з великої літери


const usernames = `asdasdasdasd
Oleksii83
34344erwrwer
 sdfsdfsdf
_asdasdasdad
sdfsdf_/=+-sdfsfsdf`;

// Усі нікнейми починаючи з букв або підкреслення. Спецсимволи заборонені
console.log('usernames', usernames.match(/^[A-Za-z_]\w*$/gim));
