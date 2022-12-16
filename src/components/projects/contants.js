import p1_cover from "./images/battle/cover.png";
import p1_img1 from "./images/battle/1.png";
import p1_img2 from "./images/battle/2.png";
import p1_img3 from "./images/battle/3.png";
import p1_img4 from "./images/battle/4.png";

import p2_cover from "./images/secret/cover.png";
import p2_img1 from "./images/secret/1.png";
import p2_img2 from "./images/secret/2.png";
import p2_img3 from "./images/secret/3.png";

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
    }
]);