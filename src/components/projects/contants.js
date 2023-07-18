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

import p6_cover from "./images/occ/cover.png";
import p6_img1 from "./images/occ/1.png";
import p6_img2 from "./images/occ/2.png";

import p7_cover from "./images/mentaliatest/cover.png";
import p7_img1 from "./images/mentaliatest/1.png";
import p7_img2 from "./images/mentaliatest/2.png";

import p8_cover from "./images/mentalia/cover.png";
import p8_img1 from "./images/mentalia/1.png";
import p8_img2 from "./images/mentalia/2.png";

import p9_cover from "./images/leaseandfleet/cover.png";
import p9_img1 from "./images/leaseandfleet/1.png";
import p9_img2 from "./images/leaseandfleet/2.png";

import p10_cover from "./images/agricole/cover.png";
import p10_img1 from "./images/agricole/1.png";
import p10_img2 from "./images/agricole/2.png";

import p11_cover from "./images/greenlander/cover.png";
import p11_img1 from "./images/greenlander/1.png";
import p11_img2 from "./images/greenlander/2.png";
import p11_img3 from "./images/greenlander/2.png";

import p12_cover from "./images/reddeherrajes/cover.png";
import p12_img1 from "./images/reddeherrajes/1.png";
import p12_img2 from "./images/reddeherrajes/2.png";
import p12_img3 from "./images/reddeherrajes/2.png";

export const getProjectsList = (t) => ([
    {
        title: "Red de herrajes",
        description: t('projects.redherrajes.description'),
        cover: p5_cover,
        gallery: [
            p5_img1,
            p5_img2
        ],
        link: "https://reddeherrajes.mx/"
    },
    {
        title: "OCCMundial",
        description: t('projects.occ.description'),
        cover: p6_cover,
        gallery: [
            p6_img1,
            p6_img2
        ],
        link: "https://www.occ.com.mx/"
    },
    {
        title: "Greenlander",
        description: t('projects.greenlander.description'),
        cover: p11_cover,
        gallery: [
            p11_img1,
            p11_img2,
            p11_img3
        ],
        link: "https://greenlander.com.mx/"
    },
    {
        title: "Mentalia Test",
        description: t('projects.mentaliatest.description'),
        cover: p7_cover,
        gallery: [
            p7_img1,
            p7_img2
        ],
        link: ""
    },
    {
        title: "Mentalia",
        description: t('projects.mentalia.description'),
        cover: p8_cover,
        gallery: [
            p8_img1,
            p8_img2
        ],
        link: "https://www.mentalia.mx/"
    },
    {
        title: "Leaseandfleet",
        description: t('projects.leaseandfleet.description'),
        cover: p9_cover,
        gallery: [
            p9_img1,
            p9_img2
        ],
        link: "https://www.leaseandfleet.com/"
    },
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
        link: ""
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
        title: "Agricole",
        description: t('projects.agricole.description'),
        cover: p10_cover,
        gallery: [
            p10_img1,
            p10_img2,
        ],
        link: "https://agricole.mx/"
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
    }
]);