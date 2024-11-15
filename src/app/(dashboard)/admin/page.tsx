import Announcements from "@/components/Announcements"
import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import EventCalendar from "@/components/EventCallender"
import UserCard from "@/components/UserCard"

 
 const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            
            <div className="w-full lg:w2/3 flex flex-col gap-8">
            <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type = "teacher"/>
            <UserCard type = "student"/>
            <UserCard type = "staff"/>
            <UserCard type = "parent"/>
            </div>
            {/*Middle charts*/}
            <div className="flex gap-4 flex-col lg:flex-row">
            {/*Count charts*/}
            <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart/>
            </div>
            {/*attendance charts*/}
            <div className="w-full lg:w-2/3 h-[450px] ">
            <AttendanceChart/>
            </div>
            </div>
            </div>
           
            {/*right charts*/}
            <div className="w-full kg:w-1/3">
            <EventCalendar/>
            <Announcements/>
            </div>
        </div>
    )
 }
 export default AdminPage