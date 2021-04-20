const talesImages = [
    [],
    ["images/flee1.jpg", "images/flee2.jpg", "images/flee3.jpg", "images/flee4.png"],
    ["images/prime.jpg"],
    ["images/crestedqueen.jpg"]
];

function getTalesImagesByTaleId(taleId) {
    return talesImages[taleId].shift();
}

const tales = [{
        title: "Une cascade</br>en arène !",
        content: `<p>N'aillant plus rien à prouver aux compagnies de l'ordre des âmes, des marchants ou des collectionneurs d'or, je décidai de rendre visite au terrible fondateur des loups de mer: DeMarco, afin de m'inscrire à un de ses célèbres combats d'arène. C'est ainsi
        qu'associé à un certain KiritokunMD, je vécu une cascade des plus spectaculaires et excitantes.</p>
    <p>Nous n'en étions plus à notre premier tournoi, comme d'habitude, il fallait récupérer un coffre unique sur une île, vers laquelle tous les candidats se ruaient. Par chance, nous étions les premiers arrivés, nous mîmes en place la même stratégie
        qu'à nos tournois précédents: je mettais le pied à terre pour récupérer le coffre tandis que KiritokunMD gardait le navire en mouvement autour de l'île, et nous devrions nous rejoindre de l'autre côté de celle-ci pour embarquer le coffre.</p>
    <p>Je m'emparai du coffre comme prévu, mais sur la mer, les événements n'étaient pas aussi linéaires, tous les candidats avaient décidé de se lancer dans des batailles navales sans merci, mon équipier n'en fit pas l'exception. Observant ce vacarme
        de poudre à canon et de bois brisé, je réfléchissais à un plan pour m'échapper avec le coffre. Déjà l'un des navires concurrents, celui de l'équipe jaune, prenait l'eau et s’apprêtait à orner les fonds marins de sa carcasse, tandis que sa
        chaloupe de secours flottait à son emplacement précédent. Je me ruai dans l'eau pour m'emparer de cette embarcation de fortune et commençai à ramer vers notre navire, qui restait en mouvement pour fuir la traque de l'équipe rouge. Je voyais
        fuser des balles de fusils dans ma direction à mesure que je m'éloignais du rivage, certainement l'équipe jaune qui n'avait plus d'autre inquiétude que de saboter les chances des autres candidats, et probablement aussi des membres de l'équipe
        verte cherchant une nouvelle proie, de préférence celle possédant le coffre convoité.</p>
    <p>M'étant considérablement rapproché de l'action entre mon vaisseau mère, et celui de l'équipe rouge, force fut de constater qu'il me serait impossible de m'amarrer aux côtés de mon coéquipier juste en ramant. Mais sans prendre le temps de réfléchir,
        lorsque le navire rouge passa devant moi, je me saisis du harpon de la barque sur laquelle je me trouvais, et décochai un tir dans leur coque, me retrouvant tracté par ceux qui traquaient mon navire. Il ne me remarquèrent pas, trop occupés
        à arranger leur trajectoire pour marquer quelques tirs de canons. Profitant de cette chance, je tirai sur le câble du harpon pour me rapprocher au maximum d'eux, et lors d'un virage de leur part pour éviter une collision avec KiritokunMD,
        je me précipitai pour me détacher de mes hôtes et me raccrocher à ma destination finale.</p>
    <p>La manœuvre fut un succès, ma barque était désormais tractée par mon navire, je n'avais plus qu'à rétracter le câble une fois de plus, et je criai à mon camarade ma présence derrière lui. Il comprit instantanément la cascade qui était en train
        de se produire et procéda au détachement de la chaloupe qui nous était attribuée en début de tournoi, afin que je puisse prendre sa place avec ma fantastique barque jaune. Je le rejoignis à bord avec ce coffre fabuleusement acquis, et nous
        voguâmes jusqu'à la victoire.</p>`
    },
    {
        title: "Des amis perdus,</br>un butin sauvé",
        content: `<p>Alors que je me rendais à Thieve's Haven pour une quête d'importance légendaire, je trouvai un brigantin en feu échoué sur la plage. Devant ses voiles blanches de noob, et dans un élan de RP (pas comme là), je m'exclamai "omg what happened? it looks terrible, are you guys alright?"<img class="taleImage" src="${getTalesImagesByTaleId(1)}"></p>
        <p>Deux hommes sortirent alors de cette fournaise, l'air perdus, avec chacun dans les mains un coffre sans aucune valeur. Après quelques discussions ensemble (RP à souhait: "I don't think we can fix that ship" -l'un d'eux meurt dans une explosion- "omg did your friend just die?? all there's left of him is a grilled chicken wing!"), je décidai de les emmener à l'avant-poste le plus proche avec mon bateau afin qu'ils vendirent leurs piètres trouvailles. Ils me remercièrent chaleureusement, nous bûmes ensemble puis je repartis à ma mission.</p>
        <p>Après plusieurs heures d'intense labeur, je m'étais retrouvé avec un butin d'une valeur très élevée, composé notamment de 3 barrils explosifs que le seigneur des pirates lui-même m'avait commandé, mais j'entendis au loin des coups de canons. <img class="taleImage" src="${getTalesImagesByTaleId(1)}"> 
        C'est alors que devant mon œil fixé dans ma longue-vue se déroula une tragédie: un galion était en train d'attaquer mes récents amis, qui de toute évidence étaient impuissants face à cet ennemi.</p>
        <p>De là où j'étais, je n'eu rien pu faire que de les observer couler, mais il y avait plus important: si ce galion voulait du sang, je serai le prochain sur sa liste, Thieve's haven étant réputé pour abriter des butins d'Athéna ces temps-ci.</p>
        <p>Je me mis à élaborer une stratégie: l'avant-poste où le galion se trouvait était au Nord Ouest de mon île, mon bateau se situait au Sud de l'île, en manœuvrant subtilement, je pourrai m'enfuir par le Sud-Est en étant totalement abrité de leur vision par les reliefs de l'île.<img class="taleImage" src="${getTalesImagesByTaleId(1)}"></p>
        <p>Ils ne me virent pas partir, et la vie perdue de mes amis aura probablement sauvé la mienne et la réussite de ma mission.<img class="taleImage" src="${getTalesImagesByTaleId(1)}"></p>`
    },
    {
        title: "Une stratégie</br>explosive",
        content: `<p>Je viens d'arriver sur les mers, et j'aperçois au loin l'éclat d'une prime de la faucheuse, cette rareté se revend pour 25000 pièces d'or au bas mot. Je me mets en route pour aller la chercher mais très vite un autre bateau s'en empare. Cette prime étant maudite, je peux suivre leurs mouvements sur ma carte.</p>
        <p>Ils se dirigent d'abord vers Sanctuary, avec un peu de chance, ils ne savent pas que Duke ne reprend plus ces butins, je fais un détour par le Fort des Damnés pour me charger d'explosifs, puis reprends la route vers la Cache de la Faucheuse.</p>
        <p>En chemin, le dévoué <a href="compagnons.html#bleux">Bleuxlerougex</a> me rejoint, je lui explique ma stratégie: je vais pièger la Cache de la Faucheuse avec des explosifs, ils seront obligés d'y venir pour vendre leur prime. Mais j'ai besoin d'un coéquipier pour les inciter à aller vendre, et aussi surveiller leurs mouvements sur la carte. Il s'en charge, une fois les explosifs très discrètement agencés, il se met en route, seul avec notre navire, vers Sanctuary et les en chasse.</p>
        <p>Après quelques manœuvres par <a href="compagnons.html#bleux">Bleuxlerougex</a>, les voilà enfin sur la Cache de la Faucheuse, ignorant que je m'y cache avec mon fusil à mire.
        Je ne sais pas où ils se trouvent exactement et par où est-ce qu'ils abordent l'île, j'ouvre grand l'oeil, et voilà que surgit un pirate tenant la prime de la faucheuse dans les mains, je tire sur mon explosif placé le plus à l'extérieur de la tente où va se faire la vente.</p>
        <p>Une première explosion, une demi seconde de suspens, a t-il vendu?
        Les autres barils se mettent à réagir en chaîne, 2 puis 3 explosions... Et je l'entends agoniser.
        <img class="taleImage" src="${getTalesImagesByTaleId(2)}"</p>
        <p>La prime m'attend aux pieds de l'acheteuse.</p>
        `
    },
    {
        title: "La traque</br>de la Reine",
        content: `<p>Ce récit est une aventure vécue par <a href="compagnons.html#babylatios">SecretNephalem</a> racontant sa traque d'un Mégalodon qui devait absolument prendre fin avant 2h00.</p>
        <p>«Journal de bord: Il est 1h58, j'ai écumé toutes les mers, je suis moi-même écumée. Mon temps restant en mer est compté, les vivres prévus pour ce voyage arrivent à épuisement.</p>
        <p>J'ai chassé sans fin parmi tous les océans sans jamais perdre espoir. Mais malgré tout je me suis mis à croire que les créatures dont m'avait parlé Merrick, n'étaient finalement que des légendes; au mieux des contes pour terrifier les enfants.</p>
        <p>J'entends encore dans ma tête la voix de Duke me disant "tout ce que je te souhaite c'est de ne pas la croiser et de revenir vivante".</p>
        <p>Pourtant, à 1h50, elle était là, devant moi, rugissante de sa couleur améthyste, brillante de colère: la Crested Queen.</p>
        <p>Nous nous affrontâmes de toute notre énergie, comme si chacune de nous savait que le temps nous était compté. Et après des échanges de regards et de coups, elle sombra. Il est 1h58, je suis écumée mais j'ai fait tomber la couronne de la Crested Queen.»
        <img class="taleImage" src="${getTalesImagesByTaleId(3)}"></p>`
    }
]