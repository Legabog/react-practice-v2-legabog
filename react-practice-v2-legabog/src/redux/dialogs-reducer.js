const ADD_POST_DIALOGS = "ADD-POST-DIALOGS";
const UPDATE_NEW_POST_TEXT_DIALOGS = "UPDATE-NEW-POST-TEXT-DIALOGS";

let initialState = {
  DialogsData: [
    {
      id: 1,
      name: "Oleg",
      avatarpath:
        "https://gamepedia.cursecdn.com/wowpedia/2/2b/BTNCritterChicken-Reforged.png"
    },
    {
      id: 2,
      name: "Dima",
      avatarpath: "https://gamepedia.cursecdn.com/wowpedia/6/69/BTNDrekthar.png"
    },
    {
      id: 3,
      name: "Leha",
      avatarpath:
        "https://im0-tub-ru.yandex.net/i?id=50f395987d25877d3494778a95743d8c-sr&n=13&exp=1"
    },
    {
      id: 4,
      name: "Anton",
      avatarpath:
        "https://gamepedia.cursecdn.com/wowpedia/f/f1/BTNAncestralSpirit-Reforged.png"
    },
    {
      id: 5,
      name: "Max",
      avatarpath:
        "https://gamepedia.cursecdn.com/wowpedia/d/d5/BTNArchimonde-Reforged.png"
    }
  ],
  MessagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "yo" },
    { id: 4, message: "What's up" },
    { id: 5, message: "btw" },
    { id: 6, message: "..." },
    { id: 7, message: "=)" },
    { id: 8, message: "heh" },
    { id: 9, message: "cool" },
    { id: 10, message: "Go" }
  ],
  defaultMessage: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_DIALOGS: {
      let newText = state.defaultMessage;
      let stateCopy = {
        ...state,
        defaultMessage: '',
        MessagesData: [...state.MessagesData, {id: 11, message: newText}]
      };
      
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT_DIALOGS: {
      let stateCopy = {
        ...state,
        defaultMessage: action.newText
      };
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostDialogsActionCreator = () => {
  return {
    type: ADD_POST_DIALOGS
  };
};

export const updatePostDialogsActionCreator = text => {
  return {
    type: UPDATE_NEW_POST_TEXT_DIALOGS,
    newText: text
  };
};

export default dialogsReducer;
