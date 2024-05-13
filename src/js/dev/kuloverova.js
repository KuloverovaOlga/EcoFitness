import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';


window.$ = window.jQuery = require('jquery');
import { rem } from '../utils/constants';

import popup from '../utils/popup';
import form from '../utils/form';
import { scroll } from '../utils/scroll';

export const modules = {};
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
  try {
    popup();
  } catch {}
  try {
    form();
  } catch {}
  try {
    scroll();
  } catch {}
});


