export const cardDetail = [
  {
    id: 1,
    hostInfo: {
      id: 1,
      profileImg: "/assets/detail/profile_sample5.svg",
      nickName: "낭만맨",
      introduce:
        "제 소개를 하자면, 이 일정을 만든 사람이옵니다. 혼자서 캠핑하는 것을 좋아하지만, 가끔은 집앞 별마당 도서관에서 책과 커피로 시간을 보내는 것을 좋아해요.",
      tags: [
        "여럿이 함께",
        "접근이 쉬움",
        "색다른",
        "인기 있는 장소",
        "친구랑",
        "혼자 즐기는",
      ],
      like: 10,
      scheduleCount: 5,
    },
    img: "/assets/findSchedule/sample.png",
    theme: "축제",
    title: "단풍구경 관악산 등반 하실 분? 연주암 45분 코스 - 등산 초급자",
    content: `철쭉제로 연인산이 유명해졌다. 이번에는 철쭉제 기간이 아닌, 설산을 오르고 싶은 마음에 찾던 중 연인산을 알게 되었다. 
       BAC 100대 명산이지만, 산 자체는 밋밋하고 특색이 없는 편이다. 
      그러나, 이 산의 용추계곡은 경기도 최고의 계곡 중 하나로 손꼽히며 
      특히 여름에 많은 사람들이 찾는다.
      
      ★준비물
           - 아이젠 (필수)
           - 스틱 (필수)
           - 가방
           - 패딩 (바람이 많이 불었다.)
           - 등산화 (호카오네)
           - 핫팩 (완소템)
           - 장갑(있었으면 정말 좋았을 것 같다.)
      `,
    location: "서울 광진구",
    dateStart: "2023/12/10",
    dateEnd: "2023/12/13",
    expense: 25000,
    tags: ["여럿이 함께", "접근이 쉬움", "색다른"],
    like: 15,
    likeStatus: true,
    comment: 16,
    scrap: 17,
    scrapStatus: false,
    isParticipate: 0,
    recruitStart: "2023/12/01",
    recruitEnd: "2023/12/09",
    applicantNum: 10,
    participateNum: 3,
    participateCapacity: 4,
    participateInfos: [
      { id: 1, profileImg: "/assets/detail/profile_sample1.svg" },
      { id: 2, profileImg: "/assets/detail/profile_sample2.svg" },
      { id: 3, profileImg: "/assets/detail/profile_sample3.svg" },
      { id: 4, profileImg: "/assets/detail/profile_sample4.svg" },
      { id: 3, profileImg: "/assets/detail/profile_sample3.svg" },
      { id: 4, profileImg: "/assets/detail/profile_sample4.svg" },
    ],
    createdAt: "2023/11/30",
    comments: [
      {
        id: 1,
        userId: 1,
        isHidden: true,
        nickName: "doyeong",
        img: "",
        createdAt: new Date(),
        content:
          "안녕하세요. 일정에 관해서 문의 드리고 싶은데 예상 금액에 교통비 비중이 어떻게 되나요?",
        like: 1,
        likeList: [{ id: 1, nickName: "doyeong" }],
        reComments: [
          {
            id: 1,
            userId: 2,
            isHidden: false,
            nickName: "mayo",
            img: "",
            createdAt: new Date(),
            content: "대댓글 테스트 1",
            like: 11,
            likeList: [{ id: 2, nickName: "mayo" }],
          },
          {
            id: 2,
            userId: 2,
            isHidden: false,
            nickName: "mayo",
            img: "",
            createdAt: new Date(),
            content: "대댓글 테스트 2",
            like: 22,
            likeList: [{ id: 2, nickName: "mayo" }],
          },
        ],
      },
      {
        id: 2,
        userId: 3,
        isHidden: false,
        nickName: "test3",
        img: "",
        createdAt: new Date(),
        content: "test3",
        like: 3,
        likeList: [{ id: 2, nickName: "mayo" }],
        reComments: [],
      },
    ],
  },
];
