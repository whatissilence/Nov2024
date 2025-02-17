import { Slider } from './Slider.js';

const imgsLinks = [
  'dragon_fly_jaws_69221_1920x1080.jpg',
  'light_beam_1326875_1920x1080.jpg',
  'treble_clef_musical_notes_multicolored_121263_1920x1080.jpg',
  'girl_hat_bw_132197_1920x1080.jpg'
];


const imgsLinks2 = [
  'smoke_fire_color_129526_1920x1080.jpg',
  'cards_combination_black_192979_1920x1080.jpg',
  'cartoon_texture_cat_94395_1920x1080.jpg',
  'ufos_aliens_cow_93569_1920x1080.jpg',
  'hexagons_shape_connections_125136_1920x1080.jpg',
  'starry_sky_night_tree_117028_1920x1080.jpg'
];

const slider = new Slider({
  sliderId: 'slider',
  images: imgsLinks,
  // isPlayButtonHidden: true,
  // isDotsHidden: true,
  primaryColor: 'lightcoral',
});


const slider2 = new Slider({
  sliderId: 'sliderDark',
  images: imgsLinks2,
  slideTime: 3
});






