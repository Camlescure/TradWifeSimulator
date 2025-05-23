// Define the Choice interface with a function for next
interface Choice {
  text: string;
  next: () => string; // Function to handle the next step
  mood?: number;
  price?: number;
  nextIfPilou?: string;
}

// Define the StoryNode interface with choices as a function
interface StoryNode {
  text: string;
  choices: () => Choice[]; // Function to return choices
  backgroundImage: string;
}

// Example story nodes
const story: { [key: string]: StoryNode } = {
  "0": {
    text: "Comme chaque matin, tu te réveilles, il est 5h. Tu as toujours été une lève-tôt, c'est important, il faut préparer le petit déjeuner de toute la famille. Qui ne rêve pas de se lever avec l'odeur du café fumant ? Tu sors de ton lit en douceur pour ne pas réveiller ton mari, et quitte la chambre",
    choices: () => [
      { text: "Le plancher grince", next: () => "1" },
      { text: "Le plancher ne grince pas", next: () => "1" }
    ],
    backgroundImage: "/img/chambre.jpg"
  },
  "1": {
    text: "Avant de descendre à la cuisine, tu t'arrêtes dans ton dressing. Que vas-tu porter aujourd'hui ?",
    choices: () => [
      { text: "Un pyjama pilou-pilou, c'est tout doux!", next: () => "2", mood: -30 },
      { text: "Une petite robe de printemps à fleur, en ajoutant ton tablier par dessus. Classique, efficace, indémodable", next: () => "2" }
    ],
    backgroundImage: "/img/dressing.jpg"
  },
  "2": {
    text: "Arrivée dans la cuisine, tu t'affaires à préparer le petit déjeuner de toute la famille. Qu'est ce que tu vas leur préparer de bon aujourd'hui ?",
    choices: () => [
      { text: "Café noir, tartoche de nut' et basta", next: () => "2a", price: -4, mood: 20, nextIfPilou: "2c" },
      { text: "Oeufs brouillés, charcuterie, jus d'orange pressé, café chaud et gaufres", next: () => "2b", mood: -20, price: -15, nextIfPilou: "2c" }
    ],
    backgroundImage: ""
  },
  "2a": {
    text: "Ton mari descend enfin, déjà habillé, rasé et parfumé.. Qu'il est beau ! Avant que tu aies eu le temps de lui faire un compliment, il regarde la table du petit déjeuner, remarque les tartines de Nutella.. Il s'exclame enfin : 'SUPER !! Exactement comme chez Maman, merci ma chérie'",
    choices: () => [
      { text: "Bravo ! Après avoir dévoré son petit déjeuner en lisant son journal, en partant au travail, ton mari t'a fait un bisou sur la joue et t'a glissé un billet de 20$", next: getNextNode3, price: 20 }
    ],
    backgroundImage: "/img/cousine.jpg"
  },
  "2b": {
    text: "Ton mari descend enfin, déjà habillé, rasé et parfumé.. Qu'il est beau ! Avant que tu aies eu le temps de lui faire un compliment, il s'assied en silence, porte une gauffre à sa bouche. Il finit par s'exclamer avec un air de dégoût : 'POUAH, c'est immonde. Tu as encore pris ton temps ce matin, les gaufres sont froides, c'est immangeable.'",
    choices: () => [
      { text: "Quelle erreur... Tu retiens tes larmes alors qu'il part au travail sans te dire au revoir.", next: () => "3" }
    ],
    backgroundImage: "/img/cousine.jpg"
  },
  "2c": {
    text: "Ton mari descend enfin, déjà habillé, rasé et parfumé.. Avant que tu aies eu le temps de lui faire un compliment, il lève les yeux vers toi, et te jete d'un air ahuri : 'Qu'est ce que c'est que cette tenue ? Un pilou pilou vraiment ? T'es dégueulasse, qu'est ce que j'ai fait pour mériter ça ?'. Il te jette un dernier regard noir avant de partir au travail sans toucher à son petit déjeuner...",
    choices: () => [
      { text: "Peu fière de toi, tu montes te changer pour enfiler une tenue plus correcte", next: () => "FIN1" }
    ],
    backgroundImage: "/img/cousine.jpg"
  },
  "3": {
    text: "Ton mari parti au travail, tu te retrouves donc seule dans la cuisine. Il est temps de réveiller les enfants. Mais d'ailleurs, tu as combien d'enfants ?",
    choices: () => [
      { text: "Malheureusement, 0. Tu n'as pas encore eu le loisir d'accueillir la vie, mais ça ne saurait tarder, chaque chose en son temps.", next: getNextNode3 },
      { text: "2 enfants, un garçon et une fille, ce sont des amours", next: () => null },
      { text: "9 enfants ! Et tu ne comptes pas t'arrêter là. Tu adores prendre soin de ta petite tribu", next: () => "" }
    ],
    backgroundImage: "/img/cuisine.jpg"
  },
  "4": {
    text: "",
    choices: () => [],
    backgroundImage: ""
  },
  "FIN1": {
    text: "0 enfant ! Réveille toi ma grande ! On t'héberge pas pour ta laine ! Il s'agirait de s'y filer, ton mari a besoin d'une descendance.",
    choices: () => [],
    backgroundImage: ""
  }
};