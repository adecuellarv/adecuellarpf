import p1_cover from "./images/battle/cover.png";
import p1_img1 from "./images/battle/1.png";
import p1_img2 from "./images/battle/2.png";
import p1_img3 from "./images/battle/3.png";
import p1_img4 from "./images/battle/4.png";

import p2_cover from "./images/secret/cover.png";
import p2_img1 from "./images/secret/1.png";
import p2_img2 from "./images/secret/2.png";
import p2_img3 from "./images/secret/3.png";

import p3_cover from "./images/mentaliagame/cover.jpg";
import p3_img1 from "./images/mentaliagame/1.jpg";
import p3_img2 from "./images/mentaliagame/2.jpg";
import p3_img3 from "./images/mentaliagame/3.jpg";

import p4_cover from "./images/enfa/cover.jpeg";
import p4_img1 from "./images/enfa/1.png";
import p4_img2 from "./images/enfa/2.png";
import p4_img3 from "./images/enfa/3.png";
import p4_img4 from "./images/enfa/4.png";
import p4_img5 from "./images/enfa/5.png";

import p5_cover from "./images/redherrajes/cover.png";
import p5_img1 from "./images/redherrajes/1.png";
import p5_img2 from "./images/redherrajes/2.png";

export const getProjectsList = (t) => ([
    {
        title: "Battleship",
        description: t('projects.battle.description'),
        cover: p1_cover,
        gallery: [
            p1_img1,
            p1_img2,
            p1_img3,
            p1_img4
        ],
        link: "https://github.com/adecuellarv/electron-test/tree/react-mode/my-app"
    },
    {
        title: "Secret Agent",
        description: t('projects.secret.description'),
        cover: p2_cover,
        gallery: [
            p2_img1,
            p2_img2,
            p2_img3
        ],
        link: "https://adeev.com.mx/projects/agentskids/"
    },
    {
        title: "Mentalia Kids",
        description: t('projects.mentaliagame.description'),
        cover: p3_cover,
        gallery: [
            p3_img1,
            p3_img2,
            p3_img3
        ],
        link: "https://drive.google.com/file/d/16tE0eaCuROmGUwu-jfc6sNuWJLx3ZYW-/view?usp=share_link"
    },
    {
        title: "Enfa",
        description: t('projects.enfa.description'),
        cover: p4_cover,
        gallery: [
            p4_img1,
            p4_img2,
            p4_img3,
            p4_img4,
            p4_img5
        ],
        link: "https://adeev.com.mx/projects/enfa/"
    },
    {
        title: "Red de herrajes",
        description: t('projects.redherrajes.description'),
        cover: p5_cover,
        gallery: [
            p5_img1,
            p5_img2
        ],
        link: "https://reddeherrajes.mx/"
    }
]);