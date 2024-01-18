import Navbar from '../Components/Navbar';
const textlessLogo = '../../public/images/tekstita-logo.png';

const TimeTable = () => {
  return (
    <div className="bg-black min-h-[100vh]">
      <a href="/" className="inline-block">
        <img src={textlessLogo} alt="" className="h-16 ml-2"></img>
      </a>

      <Navbar />
      <div className="text-white mt-20 flex flex-col font-semibold w-[95vw] m-[0_auto]">
        <h2 className="text-[20px]">Timetable</h2>
        <div className="flex flex-col mt-4 mb-8 md:text-[15px] text-[10px]">
          <div className="flex flex-col gap-4">
            <div className="flex-1 bg-[rgb(239,_64,_68)] p-2">Thursday</div>
            <div className="flex-1 flex flex-col gap-4 text-black">
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  13.00 - 15.00
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex  items-center pl-4">
                  Arrival and accomodation of national delegation at the hostel
                  (Estonia, Latvia, Lithuania.)
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Tartu Vocational College
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  15.00 -16.30
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex items-center pl-4">
                  Lunch
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex items-center"></div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  16.00 - 16.30
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex  items-center pl-4">
                  Delegation leaders meeting and accreditation
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Tartu Vocational College
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  18.00 - 19.00
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex items-center pl-4">
                  Opening ceremony
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Estonian National Museum
                </div>
              </div>
            </div>
            <div className="flex-1 bg-[rgb(180,_30,_142)] p-2">Friday</div>
            <div className="flex-1 flex flex-col gap-4 text-black">
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  07.30 - 09.00
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex  items-center pl-4">
                  Breakfast
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Tartu Vocational College
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  09.30 - 11.00
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex items-center pl-4">
                  Volleyball EST-LAT (young women)
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex items-center justify-center">
                  Variku Sports Hall
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  09.30 - 11.00
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex  items-center pl-4">
                  Basketball EST-LAT (young men)
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Variku Sports Hall
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  10.00 - 16.00
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex items-center pl-4">
                  Table Tennis
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Tartu Vocational College
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  11.15 - 12.45
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex  items-center pl-4">
                  Volleyball EST-LAT (young men)
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Variku Sports Hall
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  11.15 - 11.45
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex items-center pl-4">
                  3x3 basketball EST-LAT (young women)
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex items-center justify-center">
                  Variku Sports Hall
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  12.00 - 12.30
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex  items-center pl-4">
                  3x3 basketball EST-LIT (men)
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Variku Sports hall
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  12.45 - 13.15
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex items-center pl-4">
                  3x3 basketball EST-LIT (women)
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Variku Sports Hall
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  13.00 - 15.00
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex  items-center pl-4">
                  Lunch
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Tartu Vocational College
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  13.30 - 14.00
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex items-center pl-4">
                  3x3 basketball EST-LIT (young women)
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex items-center justify-center">
                  Variku Sports Hall
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  13.30 - 15.00
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex  items-center pl-4">
                  Headmasters competition
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Tartu Vocational College
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  13.00 - 14.30
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex items-center pl-4">
                  Volleyball EST-LIT (young women)
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Variku Sports Hall
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  14.30 - 16.00
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex  items-center pl-4">
                  Basketball EST-LIT (young men)
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Variku Sports Hall
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  14.45 - 16.15
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex items-center pl-4">
                  Volleyball EST-LIT (young men)
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex items-center justify-center">
                  Variku Sports Hall
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  16.15 - 16.45
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex  items-center pl-4">
                  3x3 basketball EST-LAT (women)
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Variku Sports Hall
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  17.00 - 17.30
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex items-center pl-4">
                  3x3 basketball EST-LAT (men)
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Variku Sports Hall
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  17.00 - 18.30
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex  items-center pl-4">
                  Dinner
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Tartu Vocational College
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  19.00 - 23.00
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex items-center pl-4">
                  Socializing evening for employees, invited guests and staff
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex items-center"></div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  20.00
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex  items-center pl-4">
                  Awarding ceremony in headmasters competition
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center"></div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center"></div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex items-center pl-4">
                  Socializing event for students
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center"></div>
              </div>
            </div>
            <div className="flex-1 bg-[rgb(32,196,244)] p-2">Saturday</div>
            <div className="flex-1 flex flex-col gap-4 text-black">
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  07.30 - 09.00
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex  items-center pl-4">
                  Breakfast
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Tartu Vocational College
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  09.00 - 10.30
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex items-center pl-4">
                  Volleyball LIT-LAT (young women)
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex items-center justify-center">
                  Variku Sports Hall
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  09.00 - 10.30
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex  items-center pl-4">
                  Basketball LIT-LAT (young men)
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Variku Sports hall
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  10.45 - 12.15
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex  items-center pl-4">
                  Volleyball LIT-LAT (young men)
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Variku Sports Hall
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  10.45 - 11.15
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex items-center pl-4">
                  3x3 basketball LAT-LIT (young women)
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Variku Sports Hall
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  11.30 - 12.00
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex  items-center pl-4">
                  3x3 basketball LIT-LAT (women)
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Variku Sports Hall
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  12.15 - 12.45
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex items-center pl-4">
                  3x3 basketball LIT-LAT (men)
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex items-center justify-center">
                  Variku Sports hall
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  12.30 -14.00
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex  items-center pl-4">
                  Lunch
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Tartu Vocational College
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  14.00
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex items-center pl-4">
                  Meeting of the heads of delegation -confirmation of the
                  results
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Estonian National Museum
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  14.30
                </div>
                <div className="w-[60%] h-16 bg-[rgb(217,217,217)] flex  items-center pl-4">
                  Closing and awarding ceremony
                </div>
                <div className="w-[20%] h-16 bg-[rgb(217,217,217)] flex justify-center items-center">
                  Tartu Vocational College
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTable;
