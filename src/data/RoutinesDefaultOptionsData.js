

import StrengthImage from '../../public/Strength.jpg'
import CardioImage from '../../public/Cardio.jpg'
import YogaImage from '../../public/yoga.jpg'
import MartialArtsImage from '../../public/martialArts.jpg'
import Video1 from '../../public/WelcomeVideo.mp4'
import Video2 from '../../public/WelcomeVideo1.mp4'


export const RoutinesDefaultOptionsData = [{
  id: "01",
  title: 'Full Body Strength',
  type: 'Strength',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  image: StrengthImage,
  duration: '60',
  calories: '200',
  exercises: [
    {
      id: "",
      name: "Legs",
      series: 3,
      repetitions: 10,
      video: Video2,
    },
    {
      id: "",
      name: "Abs",
      series: 5,
      repetitions: 5,
      video: Video1,
    }
  ]

},
{
  id: "02",
  title: 'Cardio',
  type: 'Cardio',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  image: CardioImage,
  duration: '30',
  calories: '100',
  exercises: [
    {
      id: "",
      name: "",
      series: 0,
      repetitions: 0,
      video: Video1,
    },
    {
      id: "",
      name: "",
      series: 0,
      repetitions: 0,
      video: Video2,
    }
  ]
},
{
  id: "03",
  title: 'Martial Arts',
  type: 'Martial Arts',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  image: MartialArtsImage,
  duration: '60',
  calories: '400',
  exercises: [
    {
      id: "",
      name: "",
      series: 0,
      repetitions: 0,
      video: Video1,
    },
    {
      id: "",
      name: "",
      series: 0,
      repetitions: 0,
      video: Video2,
    }
  ]
},
{
  id: "04",
  title: 'Yoga',
  type: 'Yoga',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  image: YogaImage,
  duration: '45',
  calories: '150',
  exercises: [
    {
      id: "",
      name: "",
      series: 0,
      repetitions: 0,
      video: Video1,
    },
    {
      id: "",
      name: "",
      series: 0,
      repetitions: 0,
      video: Video2,
    }
  ]
},

]