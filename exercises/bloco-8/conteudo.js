const wakeUp = () => console.log('Acordando!!');

/* wakeUp(1);
 */
const bora = () => console.log('Bora tomar um café!!');

/* bora(1);
 */
const night = () => console.log('Partiu dormir!!');

/* night(1); */

const doingThings = (param) => param();


doingThings(wakeUp);
doingThings(bora);
doingThings(night);