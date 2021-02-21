import './App.css';
import Home from'./Home.js';
import DemoCard from './Components/DemoCard.js';
import Team from './Components/Team.js';
import Footer from './Components/Footer.js';
import BulletPoint from './Components/BulletPoint.js';


function App() {
  return (
    <div className="app">
      <Home />

      <div className="teamates">
          <Team
          image="https://media-exp1.licdn.com/dms/image/C4E03AQEs1aQLZk0JVg/profile-displayphoto-shrink_800_800/0/1596172737325?e=1619049600&v=beta&t=uvbkM5Xr9KgXmmv7qx55IcTK0pHP3rBcZ1DCfi2zPag"
          title="Front-end"
          name="Angel Hernandez"/>
          <Team
          image="https://media-exp1.licdn.com/dms/image/C4E03AQF9boOY-sp3_Q/profile-displayphoto-shrink_800_800/0/1613418769131?e=1619049600&v=beta&t=KkQpmmTor0dV1o0uTNiWyDozrYc_sWcW8JX15jHLcL8"
          title="FullStack"
          name="Frankie Hernandez"/>
          <Team
          image="https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/12313784_899060043524443_1638759388485941948_n.jpg?_nc_cat=111&ccb=3&_nc_sid=174925&_nc_ohc=UNLFgYiTAR8AX-sQ3A4&_nc_ht=scontent.fphx1-1.fna&oh=5335df201380656ca7a08c682ed38579&oe=60571915"
          title="Design"
          name="Gabriella Hernandez"/>
      </div>

      <div className="bulletPoint__Wapper">
        <BulletPoint
        caption="Problem"
        description="Online learning isn't cutting it. Test scores have dropped and students aren't engaged during class." />

        <BulletPoint
        caption="Solution"
        description="Using ocular tracking, Vitreous is a web conferencing platform that encourages focus and participation by tracking students' line of sight and allows them to earn extra credit by simply looking at the instructors presentation." />

        <BulletPoint
        caption="Features"
        description="Rather than forcing students to use this feature, Vitreous allows students to toggle the focal feature on or off. By opting to have the feature on and focusing on the presentation, students are awarded extra credit on their participation." />
      </div>

      <DemoCard />
      <Footer />
    </div>
  );
}

export default App;
