import p1_cover from "./images/battle/cover.png";
import p1_img1 from "./images/battle/1.png";
import p1_img2 from "./images/battle/2.png";
import p1_img3 from "./images/battle/3.png";
import p1_img4 from "./images/battle/4.png";

export const getProjectsList = (t) => ([
    {
        title: "Battleship",
        description: t('projects.battle.description'),
        cover: p1_cover,
        galerry: {
            p1_img1,
            p1_img2,
            p1_img3,
            p1_img4
        }
    }
]);