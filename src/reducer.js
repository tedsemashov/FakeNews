import *as constants from './constants';

// const initialState = {
//    hashtags: {},
//    keyword: '',
//    top_favorite_tweets: [],
//    tweets_count_ts: {},
//    user: {
//       email: 'test@test.com',
//       password: '1234',
//       name: 'Name',
//       surname: 'Surname'
//    },
// };

const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case constants.SET_HASHTAGS_DATA:
         return {
            ...state,
            hashtags: action.hashtags
         };
      case constants.SET_KEYWORD_DATA:
         return {
            ...state,
            keyword: action.keyword
         };
      case constants.TOP_FAVORITE_TWEETS_DATA:
         return {
            ...state,
            top_favorite_tweets: action.top_favorite_tweets
         };
      case constants.TWEETS_COUNT_TS_DATA:
         return {
            ...state,
            tweets_count_ts: action.tweets_count_ts
         };

      // case constants.SET_INPUT_VALUE:
      //    return {
      //       ...state,
      //       inputValue: action.value
      //    };
      // case constants.SET_SELECTED_NAME:
      //    return {
      //       ...state,
      //       selectedNamesIDs: state.selectedNamesIDs.concat(action.id)
      //    };
      // case constants.REMOVE_SELECTED_NAME:
      //    return {
      //       ...state,
      //       selectedNamesIDs: state.selectedNamesIDs.filter((id) => action.id !== id)
      //    };
      default: return state;
   }
};

const initialState = {
   user: {
      email: 'test@test.com',
      password: '1234',
      name: 'Name',
      surname: 'Surname'
   },
   hashtags: {
      "ukraine": 4615,
      "russia": 1747,
      "libya": 780,
      "kiev": 407,
      "1": 385,
      "moscow": 370,
      "zelensky": 301,
      "lviv": 297,
      "90dayfiance": 241,
      "hongkong": 177},
   keyword: 'Ukraine',
   top_favorite_tweets: [
      {
         "date": "2019-08-01 03:36:40",
         "favorite_count": 725.0,
         "user_followers_count": 368815.0,
         "id": 1156770694576967685,
         "user_profile_image_url": "http://pbs.twimg.com/profile_images/770784461461950464/15VnTxLF_normal.jpg",
         "screen_name": "RudyGiuliani",
         "text": "Once again Biden slurred his words and didn’t seem to answer his opponents effectively. I seem to be on his mind because I know he was involved in the millions his family got from China and Ukraine. The moderators failed to ask about his alleged corruption because CNN is a joke.",
         "user_name": "Rudy Giuliani",
         "user_verified": true
      },
      {
         "date": "2019-08-02 17:06:08",
         "favorite_count": 520.0,
         "user_followers_count": 369962.0,
         "id": 1157336794096111617,
         "user_profile_image_url": "http://pbs.twimg.com/profile_images/770784461461950464/15VnTxLF_normal.jpg",
         "screen_name": "RudyGiuliani",
         "text": "Do you think that media coverup of Biden scandals in Ukraine and China shows they are in the tank for Dem party?\nIs it a) Incompetence; b) Ideology; c) Corruption?",
         "user_name": "Rudy Giuliani",
         "user_verified": true
      },
      {
         "date": "2019-08-03 22:23:09",
         "favorite_count": 268.0,
         "user_followers_count": 371399.0,
         "id": 1157778959653842945,
         "user_profile_image_url": "http://pbs.twimg.com/profile_images/770784461461950464/15VnTxLF_normal.jpg",
         "screen_name": "RudyGiuliani",
         "text": "The Politico coverup article doesn’t mention the bribery of \nUkraine  Pres. by then VP Biden to get the case against his son dismissed. Nor does it explain the Chinese pay-off of $1.5billion to Biden’s useless fund. Joe took his son on AFII to get the investment. It stinks!!",
         "user_name": "Rudy Giuliani",
         "user_verified": true
      },
      {
         "date": "2019-08-06 15:54:21",
         "favorite_count": 241.0,
         "user_followers_count": 180394.0,
         "id": 1158768281790103552,
         "user_profile_image_url": "http://pbs.twimg.com/profile_images/1125017834554363906/IR50f7A9_normal.jpg",
         "screen_name": "sahouraxo",
         "text": "The man who paved the way for racist, slave-selling jihadists to take over #Libya, gave billions of dollars in weapons to minority-hating, church-burning terrorists in #Syria, and helped bring neo-Nazi militias to power in #Ukraine, wants to lecture us about racism and hatred. https://t.co/xEaCXlmMSF",
         "user_name": "Sarah Abdallah",
         "user_verified": false
      },
      {
         "date": "2019-08-01 14:28:07",
         "favorite_count": 170.0,
         "user_followers_count": 63374.0,
         "id": 1156934640172748800,
         "user_profile_image_url": "http://pbs.twimg.com/profile_images/1055485610402725888/819bJciR_normal.jpg",
         "screen_name": "SimonOstrovsky",
         "text": "You know standards are slipping at my former employer Vice News when they're describing the conflict in Ukraine as a civil war. Makes we wonder why I bothered doing this  excruciating investigation into the presence of Russian troops for them in 2015 https://t.co/0KCLyKxee6 https://t.co/aQjnSrEXcl",
         "user_name": "Simon Ostrovsky",
         "user_verified": true
      },
      {
         "date": "2019-08-06 20:19:02",
         "favorite_count": 165.0,
         "user_followers_count": 122835.0,
         "id": 1158834891460661250,
         "user_profile_image_url": "http://pbs.twimg.com/profile_images/1109722967133618182/sMfUwt_t_normal.jpg",
         "screen_name": "YesWeCrann",
         "text": "A winning start for Percy Tau and Club Brugge in their #UCL qualifier tonight, with the Belgian side beating Dynamo Kyiv 1-0 at home... He played the full 90 minutes.\n\nThe second leg in Ukraine will take place next week. 🇿🇦⚽️ https://t.co/WSPd6rVBlc",
         "user_name": "Joe Crann",
         "user_verified": true
      },
      {
         "date": "2019-08-02 12:35:02",
         "favorite_count": 129.0,
         "user_followers_count": 46810.0,
         "id": 1157268568309977093,
         "user_profile_image_url": "http://pbs.twimg.com/profile_images/1151671679048962053/KlwkSAGe_normal.jpg",
         "screen_name": "chartariana",
         "text": "iTunes Ukraine:\n\n#1. Boyfriend (NEW)\n\n*31st #1 on iTunes*\nhttps://t.co/Hwmo6nksGD",
         "user_name": "Ariana Grande Charts",
         "user_verified": false
      },
      {
         "date": "2019-08-01 04:36:49",
         "favorite_count": 127.0,
         "user_followers_count": 124579.0,
         "id": 1156785831836827648,
         "user_profile_image_url": "http://pbs.twimg.com/profile_images/966631777220603904/bSPrJFRy_normal.jpg",
         "screen_name": "theworldindex",
         "text": "% of people who own a cat:\n\n🇷🇺Russia: 59%\n🇺🇦Ukraine: 49%\n🇺🇸US: 43%\n🇦🇷Argentina: 41%\n🇲🇾Malaysia: 40%\n🇫🇷France: 39%\n🇨🇴Colombia: 36%\n🇦🇺Australia: 35%\n🇬🇧UK: 32%\n🇨🇦Canada: 30%\n🇩🇪Germany: 26%\n🇹🇷Turkey: 19%\n🇮🇳India: 18%\n🇸🇦S Arabia: 18%\n🇨🇳China: 16%\n🇰🇷S. Korea: 9%\n\n(Dalia Research, 2017)",
         "user_name": "World Index",
         "user_verified": false
      },
      {
         "date": "2019-08-02 16:26:09",
         "favorite_count": 119.0,
         "user_followers_count": 98233.0,
         "id": 1157326732074110978,
         "user_profile_image_url": "http://pbs.twimg.com/profile_images/1054178151138582528/Nx021Qhy_normal.jpg",
         "screen_name": "JuliaDavisNews",
         "text": "Skabeeva says that #Russia should take full advantage of Trump's ignorance: \"Trump apparently thinks Russia remained within Soviet borders—and if he believes that, what's the point of sanctioning us for the annexation of #Crimea? All of #Ukraine is ours.\"\nhttps://t.co/3f1IIWlsH4",
         "user_name": "Julia Davis",
         "user_verified": false
      },
      {
         "date": "2019-08-01 22:00:00",
         "favorite_count": 107.0,
         "user_followers_count": 5858179.0,
         "id": 1157048359342895104,
         "user_profile_image_url": "http://pbs.twimg.com/profile_images/992451978054729734/CGtMu6Ji_normal.jpg",
         "screen_name": "DeptofDefense",
         "text": "Lock and load! 💥\n\nA @USMC Marine with Marine Rotational Force-Europe 19.2, @USMCFEA, fires an M224 60 mm mortar system during @ExSeaBreeze in Chabanka, Ukraine 🇺🇦. #KnowYourMil https://t.co/SA7q1QSeV7",
         "user_name": "U.S. Dept of Defense",
         "user_verified": true
      }
   ],
   tweets_count_ts: {
      "2019-08-01 00:00:00": 197,
      "2019-08-01 01:00:00": 153,
      "2019-08-01 02:00:00": 167,
      "2019-08-01 03:00:00": 935,
      "2019-08-01 04:00:00": 985,
      "2019-08-01 05:00:00": 658,
      "2019-08-01 06:00:00": 483,
      "2019-08-01 07:00:00": 466,
      "2019-08-01 08:00:00": 433,
      "2019-08-01 09:00:00": 568,
      "2019-08-01 10:00:00": 790,
      "2019-08-01 11:00:00": 1069,
      "2019-08-01 12:00:00": 1150,
      "2019-08-01 13:00:00": 969,
      "2019-08-01 14:00:00": 1020,
      "2019-08-01 15:00:00": 967,
      "2019-08-01 16:00:00": 776,
      "2019-08-01 17:00:00": 886,
      "2019-08-01 18:00:00": 677,
      "2019-08-01 19:00:00": 607,
      "2019-08-01 20:00:00": 561,
      "2019-08-01 21:00:00": 520,
      "2019-08-01 22:00:00": 517,
      "2019-08-01 23:00:00": 331,
      "2019-08-02 00:00:00": 363,
      "2019-08-02 01:00:00": 342,
      "2019-08-02 02:00:00": 304,
      "2019-08-02 03:00:00": 274,
      "2019-08-02 04:00:00": 287,
      "2019-08-02 05:00:00": 267,
      "2019-08-02 06:00:00": 264,
      "2019-08-02 07:00:00": 287,
      "2019-08-02 08:00:00": 303,
      "2019-08-02 09:00:00": 278,
      "2019-08-02 10:00:00": 322,
      "2019-08-02 11:00:00": 293,
      "2019-08-02 12:00:00": 410,
      "2019-08-02 13:00:00": 389,
      "2019-08-02 14:00:00": 407,
      "2019-08-02 15:00:00": 388,
      "2019-08-02 16:00:00": 542,
      "2019-08-02 17:00:00": 976,
      "2019-08-02 18:00:00": 675,
      "2019-08-02 19:00:00": 690,
      "2019-08-02 20:00:00": 660,
      "2019-08-02 21:00:00": 663,
      "2019-08-02 22:00:00": 548,
      "2019-08-02 23:00:00": 521,
      "2019-08-03 00:00:00": 453,
      "2019-08-03 01:00:00": 441,
      "2019-08-03 02:00:00": 382,
      "2019-08-03 03:00:00": 326,
      "2019-08-03 04:00:00": 275,
      "2019-08-03 05:00:00": 301,
      "2019-08-03 06:00:00": 241,
      "2019-08-03 07:00:00": 255,
      "2019-08-03 08:00:00": 240,
      "2019-08-03 09:00:00": 224,
      "2019-08-03 10:00:00": 289,
      "2019-08-03 11:00:00": 384,
      "2019-08-03 12:00:00": 446,
      "2019-08-03 13:00:00": 510,
      "2019-08-03 14:00:00": 487,
      "2019-08-03 15:00:00": 460,
      "2019-08-03 16:00:00": 451,
      "2019-08-03 17:00:00": 493,
      "2019-08-03 18:00:00": 404,
      "2019-08-03 19:00:00": 308,
      "2019-08-03 20:00:00": 311,
      "2019-08-03 21:00:00": 237,
      "2019-08-03 22:00:00": 973,
      "2019-08-03 23:00:00": 923,
      "2019-08-04 00:00:00": 805,
      "2019-08-04 01:00:00": 676,
      "2019-08-04 02:00:00": 566,
      "2019-08-04 03:00:00": 461,
      "2019-08-04 04:00:00": 348,
      "2019-08-04 05:00:00": 274,
      "2019-08-04 06:00:00": 246,
      "2019-08-04 07:00:00": 196,
      "2019-08-04 08:00:00": 256,
      "2019-08-04 09:00:00": 246,
      "2019-08-04 10:00:00": 287,
      "2019-08-04 11:00:00": 386,
      "2019-08-04 12:00:00": 486,
      "2019-08-04 13:00:00": 463,
      "2019-08-04 14:00:00": 552,
      "2019-08-04 15:00:00": 450,
      "2019-08-04 16:00:00": 492,
      "2019-08-04 17:00:00": 453,
      "2019-08-04 18:00:00": 396,
      "2019-08-04 19:00:00": 394,
      "2019-08-04 20:00:00": 317,
      "2019-08-04 21:00:00": 261,
      "2019-08-04 22:00:00": 237,
      "2019-08-04 23:00:00": 175,
      "2019-08-05 00:00:00": 314,
      "2019-08-05 01:00:00": 249,
      "2019-08-05 02:00:00": 200,
      "2019-08-05 03:00:00": 165,
      "2019-08-05 04:00:00": 156,
      "2019-08-05 05:00:00": 170,
      "2019-08-05 06:00:00": 183,
      "2019-08-05 07:00:00": 175,
      "2019-08-05 08:00:00": 226,
      "2019-08-05 09:00:00": 239,
      "2019-08-05 10:00:00": 273,
      "2019-08-05 11:00:00": 273,
      "2019-08-05 12:00:00": 310,
      "2019-08-05 13:00:00": 359,
      "2019-08-05 14:00:00": 268,
      "2019-08-05 15:00:00": 281,
      "2019-08-05 16:00:00": 273,
      "2019-08-05 17:00:00": 263,
      "2019-08-05 18:00:00": 268,
      "2019-08-05 19:00:00": 295,
      "2019-08-05 20:00:00": 291,
      "2019-08-05 21:00:00": 439,
      "2019-08-05 22:00:00": 341,
      "2019-08-05 23:00:00": 245,
      "2019-08-06 00:00:00": 184,
      "2019-08-06 01:00:00": 131,
      "2019-08-06 02:00:00": 142,
      "2019-08-06 03:00:00": 149,
      "2019-08-06 04:00:00": 144,
      "2019-08-06 05:00:00": 251,
      "2019-08-06 06:00:00": 287,
      "2019-08-06 07:00:00": 254,
      "2019-08-06 08:00:00": 310,
      "2019-08-06 09:00:00": 251,
      "2019-08-06 10:00:00": 372,
      "2019-08-06 11:00:00": 323,
      "2019-08-06 12:00:00": 393,
      "2019-08-06 13:00:00": 381,
      "2019-08-06 14:00:00": 382,
      "2019-08-06 15:00:00": 403,
      "2019-08-06 16:00:00": 667,
      "2019-08-06 17:00:00": 539,
      "2019-08-06 18:00:00": 397,
      "2019-08-06 19:00:00": 413,
      "2019-08-06 20:00:00": 438,
      "2019-08-06 21:00:00": 447,
      "2019-08-06 22:00:00": 356,
      "2019-08-06 23:00:00": 241
   }
};

export default rootReducer;