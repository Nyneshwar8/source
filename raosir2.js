function find() {
    let paragraph = "Bhagat Singh was born in British India during the year 1908. As a child he witnessed numerous atrocities committed on fellow Indians by their British rulers, who came to trade under the guise of the East India Company, but ended up controlling most of the nation, and permitting tyrants such as General Dyer to massacre thousands of innocent men, women and children in Jallianwala Baug. As a child he was impressed by Mohandas K. Gandhi, especially his call to launch the non-cooperation movement, which led to thousands of people burning British-made clothing, giving up schools, and college studies, and government jobs - only to be let down by Gandhi himself when he called off the movement. Undaunted, Bhagat decided to be a revolutionary, starting with getting into petty fights, then as a grown-up joining the Hindustan Republic Association. When Lala Lajpat Rai was beaten to death by the police, Bhagat, along with Shivram Rajguru, Sukhdev, and others daringly carried out the assassination of a police officer named Saunders, which eventually led to Bhagat's arrest, where he was lodged in a cell, tortured and beaten mercilessly. His father, Kishan, paid Rs.60,000/- and bailed him out, so that he could get him to run a diary-farm and get married to a girl from Manavali. But being a revolutionary was in Bhagat's blood, and when the British proposed the Trade Disputes and Public Safety Bills, he would initiate the bombing in the Indian Parliament Building, along with Batukeshwar Dutt, be arrested, and tried in an open court. This is where Bhagat launched his much-publicized revolution, and became popular with the masses, especially the younger generation, laborers, and farmers, so much so that his popularity rivaled that of Gandhi himself. Even in prison, Bhagat made headline news when he and other prisoners undertook a 63 day fast unto death to improve the conditions of Indian freedom-fighter prisoners. Then the British re-opened the Saunders' murder case, which led to death sentences being imposed on Bhagat, Shivram, and Sukhdev. The entire nation rose up in protest, including the Congress party - with the ball being in Gandhi's court - for he was due to sign the Irwing Pact, and Indians hoped that he would use this as a bargaining chip to save the lives of the heroic trio. Will Gandhi rise up to the occasion and save the trio - so that they could pave the way for a modern and independent India, not just a country ruled by the British with a dominant status - an India free of communal hatred, injustice, corruption, and fundamentalism, or will Gandhi end up disappointing Bhagat all over again? ";
    split = paragraph.split(" "),
    obj = {};

for (let i = 0; i < split.length; i++) {
  if (obj[split[i]] === undefined) {
    obj[split[i]] = 1;
  } else {
    obj[split[i]]++;
  }
}
console.log(obj)
}

find();