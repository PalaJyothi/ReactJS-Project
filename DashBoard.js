import React from 'react';
import './DashBoard.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


class DashBoard extends React.Component {
  render() {
    const data = [
      { name: 'Week 1', User: 400, Guest: 200 },
      { name: 'Week 2', User: 450, Guest: 300 },
      { name: 'Week 3', User: 300, Guest: 450 },
      { name: 'Week 4', User: 450, Guest: 150 },
    ];
    return (
      <div className="DashBoard" >
        <div className="Navigation">
           <div className="LeftSide" />
            <div className="Help">Help</div>
            <div className="ContactUs">Contact Us</div>
            <div className="Settings">Settings</div>
            <div className="Users">Users</div>
            <div className="Schedules">Schedules</div>
            <div className="Transactions">Transactions</div>
            <div className="DashboardTitle">Dashboard</div>
             {/* transaction icon */}
            <div className="transactionIcon1" >
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" className="bi bi-tags"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"></path> <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"></path> </g></svg>
              </div>
             {/* schedule icon */}
            <div className="ScheduleIcon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 20H6C3.79086 20 2 18.2091 2 16V7C2 4.79086 3.79086 3 6 3H17C19.2091 3 21 4.79086 21 7V10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M8 2V4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M15 2V4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M2 8H21" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M18.5 15.6429L17 17.1429" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <circle cx="17" cy="17" r="5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle> </g></svg>
            </div>
             {/* dashboard icon */}
            <div className="DashboardIcon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 15.5524C18.8263 19.2893 15.3351 22 11.2108 22C6.12383 22 2 17.8762 2 12.7892C2 8.66488 4.71065 5.1737 8.44759 4" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M21.9131 9.94727C20.8515 6.14438 17.8556 3.14845 14.0527 2.0869C12.4091 1.6281 11 3.05419 11 4.76062V11.4551C11 12.3083 11.6917 13 12.5449 13H19.2394C20.9458 13 22.3719 11.5909 21.9131 9.94727Z" stroke="#ffffff" strokeWidth="1.5"></path> </g></svg>
            </div>
             {/* Setting icon */}
            <div className="SettingIcon" >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="3" stroke="#ffffff" strokeWidth="1.5"></circle> <path d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z" stroke="#ffffff" strokeWidth="1.5"></path> </g></svg>
            </div>
             {/* user icon */}
            <div className="UserIcon1">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="9" r="3" stroke="#ffffff" strokeWidth="1.5"></circle> <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="1.5"></circle> <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
            </div>
            <div className="Board">Data Dash</div>
            {/* ..... */}
            {/* total transactions */}
            <div className="TotalTransactions" >
              <div className="Card" >
                <div className="Card"  />
              </div>
              <div className="TotalTransactions" >Total Transactions</div>
              <div className="FiveTwenty" >1,520</div>
              <div className="transactionIcon2" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
              </svg>
              </div>
            </div>
            {/* total revenues */}
            <div className="TotalRevenues" >
              <div className="Card" >
                <div className="Card" />
              </div>
              <div className="TotalRevenues" >Total Revenues</div>
              <div className="FourThirty" >$2,129,430</div>
              <div className="RevenueIcon" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
                </svg>
              </div>
            </div>
            {/* total likes */}
            <div className="TotalLikes" >
              <div className="Card" >
                <div className="Card" />
              </div>
              <div className="TotalLikes" >Total Likes</div>
              <div className="SevenTwentyOne" >9,721</div>
              <div className="LikeIcon" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
              </svg>
              </div>
            </div>
            {/* total users */}
            <div className="TotalUsers" >
              <div className="Card" >
                <div className="Card"  />
              </div>
              <div className="UserIcon2" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>

              </div>
              <div className="TotalUsers" >Total Users</div>
              <div >892</div>
            </div>
            {/* ........ */}
            <div className="ActivitiesCard" >
              <div className="Card">
                <div className="Card" />
              </div>
              <div className="Activities">Activities</div>
              <div className="Group7">
                <div className="MayJune2021">May 2021</div>
                <div className="Vector" />
              </div>
              <div className="Chart">
                <LineChart width={1000} height={250} data={data} margin={{ top: 0, right: 80, left: 30, bottom: 20 }}>
                  <XAxis dataKey="name" padding={{left: 0, right: 0}} />
                  <YAxis/>
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend className="my-legend"/>
                  <Line dot={{ stroke: '#00ccff', strokeWidth: 5 }} type="monotone" dataKey="User" stroke="#00ccff" fill="#8884d8" strokeWidth={3} />
                  <Line dot={{ stroke: '#ff33cc', strokeWidth: 5 }} type="monotone" dataKey="Guest" stroke="#ff33cc" fill="#82ca9d" strokeWidth={3} />
                </LineChart>
              </div>
            </div>
            {/* ........ */}
            <div className="TopProductsCard" >
              <div className="Card" >
                <div className="Card" ></div>
              </div>
              
              <div className="Key1">
                <div className="Ellipse6" />
              <div>
                <div className="BasicTees" >Basic Tees</div>
                <div >19%</div>
              </div>
              </div>
              
              <div className="Key2">
                <div className="Ellipse6"/>
              <div>
                <div className="CustomShortPants" >Custom Short Pants</div>
                <div >50%</div>
              </div>
              </div>
              <div className="Key3">
                <div className="Ellipse6"/>
              <div >
                <div className="SuperHoodies" >Super Hoodies</div>
                <div >31%</div>
              </div>
              </div>
              
              <div className="PieChart">
                <div className="segment">
                   <div className="segment1" data-value="55"></div>
                  <div className="segment2" data-value="31"></div>
                  <div className="segment3" data-value="14"></div>
                </div>
              </div>  
              
                {/* <div className="Container">
                  <ul className="legend">
                    <li><span className="legend-color segment1"></span>Basic Tees</li>
                    <li><span className="legend-color segment2"></span>Custom Short Pants</li>
                    <li><span className="legend-color segment3"></span>Super Hoodies</li>
                  </ul>
                </div> */}
              <div className="TopProducts" >Top products</div>
              <div className="MayJune2021" >May - June 2023</div>
              
            </div>
            {/* ........ */}
            <div className="SchedulesCard" >
              <div className="Card" >
                <div className="Card"  />
              </div>
              <div className="TodaySSchedule">Today’s schedule</div>
              <div className="Group19" >
                <div className="MeetingWithSuppliersFromKutaBali" >Meeting with suppliers from Kuta Bali</div>
                <div className="Fourteen" >14.00-15.00</div>
                <div className="AtSunsetRoadKutaBali" >at Sunset Road, Kuta, Bali </div>
                <div className="Line6" ></div>
              </div>
              <div className="SeeAll" >See All </div>
              <div className="Vector" ></div>
              <div className="Group20" >
                <div className="CheckOperationAtGigaFactory1" >Check operation at Giga Factory 1</div>
                <div className="Eighteen" >18.00-20.00</div>
                <div className="AtCentralJakarta" >at Central Jakarta </div>
                <div className="Line6" ></div>
              </div>
            </div>
            {/* ........ */}
            
            <div className="LineChart2" ></div>
            <div className="LineChart1" ></div>
            <div className="Vector" ></div>
            <div className="Header" >
              <div className="Dashboard" >Dashboard</div>
              <div className="SearchBar" >
                <div className="White" >
                  <div className="Button"  />
                </div>
                <div className="Search" >Search...</div>
                <div className="SearchIcon" >
                  <div className="Ellipse2"  />
                  <div className="Line2" ></div>
                </div>
              </div>
              <div className="MaskGroup" >
                <div className="Ellipse1"  />
                <div className="Image1" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                </svg>

                </div>
              </div>
              <div className="Vector" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
              </svg>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;