import Navbar from '../Components/Navbar';
const textlessLogo = '../../public/images/tekstita-logo.png';
const patternAndImage = '../../public/images/muster ja pilt.png';
const balticGamesLogo = '../../public/images/Layer_x0020_1.png';
const ekkslLogo = '../../public/images/EKKSL logo 2.png';
const vocoLogo = '../../public/images/Vector.png';

const About = () => {
  return (
    <div className="bg-black min-h-[100vh]">
      <a href="/" className="inline-block">
        <img src={textlessLogo} alt="" className="h-16 ml-2"></img>
      </a>

      <Navbar />
      <div className="text-white mt-20 flex flex-col items-center font-semibold">
        <h1 className="text-[40px]">
          History of Baltic Games for Vocational Schools
        </h1>
        <div className="flex gap-16 w-[90%] ">
          <div className="flex-1">
            <h2 className="text-[30px] text-center">Beginning</h2>
            <p className="text-[18px]">
              In the summer of 1993 &quot;AMI&quot; - a sports organization for
              Latvian vocational schools - had organized a sports competition.
              Workers from Tartu Technical School also happened to be visiting
              at the same time and they decided to join the competitions. Irena
              Bukovska (the leader of the AMI) had an idea to start sport games
              between the Baltic countries. After Irena met the representative
              of Estonian vocational education (Vladimir Sokman) she brought up
              the idea to him. The estonians agreed to take part and then only
              one country was missing - Lithuania. The summer of the same year
              Irena and Vladimir went to Lithuania to meet with Algirdas
              Pauliukonis, the Head of the Vocational Education Department of
              the Ministry of Education in Lithuania. Representatives of the
              sports club AMI and V.Sokman met in Mr Pauliukonis office and
              agreed to organize the Baltic States Sports Games for the students
              and teachers of vocational education. Then the first regulations
              of the sports games were discussed and written. The Latvians
              agreed to host the first games. The 1st Baltic States Sports Games
              took place in Riga from 3-5 November 1993. They all agreed to only
              have a few sports events to compete in so as to cut the costs. The
              events chosen were basketball, volleyball and table tennis. Also a
              competition for the directors of the schools. The directors events
              were throwing darts, basketball freethrows and table tennis.
              Organizers of the event like to point out that the most memorable
              part was the enthusiasm of all the participants. Everybody agreed
              to keep the games going the next year.
            </p>
          </div>
          <div className="w-[600px] max-w-[40%]">
            <h2 className="text-[30px] text-center">Second games</h2>
            <p className="text-[18px]">
              The second Baltic Sports Games took place in 1994 26-28th May.
              Organizers decided to move the games to the springtime so
              participants had more time to prepare for it. This time the games
              took place in Estonia and they were held in the same buildings in
              which Tartu Vocational College operates today. The sports events
              were the same as last year except for the directors events where
              they changed the directors table tennis event to a competition in
              car driving! They thought that every school director should know
              how to drive a car. So they arranged a competition to see who
              could best maneuver the car. After that the games moved on to
              Lithuania. The games are still happening to this day!
            </p>
            <img src={patternAndImage} alt="" />
          </div>
        </div>
        <div className="flex gap-16 mt-20 mb-8">
          <div className="w-[300px] bg-white">
            <div className="h-[200px] grid">
              <img src={balticGamesLogo} alt="" className="place-self-center" />
            </div>

            <div className="bg-[rgb(217,_217,_217)] h-[220px]">
              <p className="text-[15px] text-black pr-4 pl-4 pt-2 pb-2">
                The Baltic States - Estonian, Latvian and Lithuanian - sport
                games aim is to promote the growth of athleticism as well as to
                strengthen the friendship between younger people, educators,
                educational institutions and the management.
              </p>
            </div>
          </div>
          <div className="w-[300px] bg-white">
            <div className="h-[200px] grid">
              <img src={ekkslLogo} alt="" className="place-self-center" />
            </div>

            <div className="bg-[rgb(217,_217,_217)] h-[220px]">
              <p className="text-[15px] text-black pr-4 pl-4 pt-2 pb-2">
                Eesti Kutsekoolispordi Liit on loodud aprillis 1991, eesmärgiga
                ühendada Eesti kutsekoolides õppivaid ja sportivaid noori ja
                töötajaid. Täna oleme laiapõhjaline liikumisharrastust ja
                terviseedendust propageeriv organisatsioon kutsehariduse
                valdkonnas.
              </p>
            </div>
          </div>
          <div className="w-[300px] bg-white">
            <div className="h-[200px] grid">
              <img src={vocoLogo} alt="" className="place-self-center" />
            </div>

            <div className="bg-[rgb(217,_217,_217)] h-[220px]">
              <p className="text-[15px] text-black pr-4 pl-4 pt-2 pb-2">
                Tartu Vocational Education Centre (Estonian: Tartu
                Kutsehariduskeskus, abbreviation TKHK) is a vocational school in
                Tartu, Estonia. It is the biggest vocational school in Estonia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
