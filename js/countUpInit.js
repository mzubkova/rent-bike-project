import { CountUp } from './countUp.js';

window.addEventListener('load', () => {
  const countUp1 = new CountUp('counter-item-1', 823)
  countUp1.start()
  const countUp2 = new CountUp('counter-item-2', 67)
  countUp2.start()
  const countUp3 = new CountUp('counter-item-3', 18)
  countUp3.start()
  const countUp4 = new CountUp('counter-item-4', 2309)
  countUp4.start()
})