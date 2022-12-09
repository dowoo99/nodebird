export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "제로초",
      },
      contant: "첫 번째 게시글 #해시테그 #익스프레스",
      Image: [
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzlByqxh8dJlC1TuafhWDvfqk62laG0KVVUA&usqp=CAU",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzlByqxh8dJlC1TuafhWDvfqk62laG0KVVUA&usqp=CAU",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzlByqxh8dJlC1TuafhWDvfqk62laG0KVVUA&usqp=CAU",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "hero",
          },
          contant: "우와개정판나왔네요",
          User: {
            nickname: "nero",
          },
          contant: "얼른사고싶어요",
        },
      ],
    },
  ],
  ImagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미",
  User: {
    id: 1,
    nickname: "제로초",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };

    default:
      return state;
  }
};
export default reducer;
