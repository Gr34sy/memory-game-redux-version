// iconsets
import brandIcons from "../icon-sets/brands";
import electronicsIcons from "../icon-sets/electronics";
import entertainmentIcons from "../icon-sets/entertainment";
import medicineIcons from "../icon-sets/medicine";
import militaryIcons from "../icon-sets/military";
import natureIcons from "../icon-sets/nature";
import polishPolitcsIcons from "../icon-sets/polish-politics";
import spaceIcons from "../icon-sets/space";
import uncategorizedIcons from "../icon-sets/uncategorized";
import letterIcons from "../icon-sets/letters";
import numberIcons from "../icon-sets/numbers";

// utils
import generateRandomNum from "../generateRandomNum";
import { board, themes } from "../types/settingsTypes";

function getIcons(theme: themes) {
  let icons;

  switch (theme) {
    case "random":
      icons = [
        ...brandIcons,
        ...electronicsIcons,
        ...entertainmentIcons,
        ...letterIcons,
        ...numberIcons,
        ...medicineIcons,
        ...natureIcons,
        ...militaryIcons,
        ...polishPolitcsIcons,
        ...uncategorizedIcons,
        ...spaceIcons,
      ];
      break;

    case "numbers":
      icons = [...numberIcons];
      break;

    case "letters":
      icons = [...letterIcons];
      break;

    case "uncategorized":
      icons = [...uncategorizedIcons];
      break;

    case "polish politics":
      icons = [...polishPolitcsIcons];
      break;

    case "entertainment":
      icons = [...entertainmentIcons];
      break;

    case "brands":
      icons = [...brandIcons];
      break;

    case "electronics":
      icons = [...electronicsIcons];
      break;

    case "medicine":
      icons = [...medicineIcons];
      break;

    case "military":
      icons = [...militaryIcons];
      break;

    case "nature":
      icons = [...natureIcons];
      break;

    case "space":
      icons = [...spaceIcons];
      break;
  }

  return icons;
}

function generateBoard(theme: themes, boardType: board) {
  const arraySize = Math.pow(Number(boardType.slice(1)), 2);

  // getting the icon set
  let icons = getIcons(theme);
  const iconsToUse: string[] = [];
  for (let i = 0; i < arraySize / 2; i++) {
    const randomIcon = icons[generateRandomNum(icons.length)];
    iconsToUse.push(randomIcon);
    icons = icons.filter((icon) => icon !== randomIcon);
  }

  // creating board array of the given length and  creating array with avialable positions
  const board = Array(arraySize).fill("");
  let avialablePositions: number[] = [];
  for (let i = 0; i < board.length; i++) {
    avialablePositions.push(i);
  }

  // adding each icon name twice to the board array in random place
  iconsToUse.forEach((icon) => {
    const pos1 =
      avialablePositions[generateRandomNum(avialablePositions.length)];
    board[pos1] = icon;
    avialablePositions = avialablePositions.filter((pos) => pos !== pos1);

    const pos2 =
      avialablePositions[generateRandomNum(avialablePositions.length)];
    board[pos2] = icon;
    avialablePositions = avialablePositions.filter((pos) => pos !== pos2);
  });

  return board;
}

export default generateBoard;
