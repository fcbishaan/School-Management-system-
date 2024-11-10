import UserCard from "@/components/UserCard"

 
 const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            
            <div className="w-full lg:w2/3">
            <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type = "teacher"/>
            <UserCard type = "student"/>
            <UserCard type = "staff"/>
            <UserCard type = "parent"/>
            </div>
            </div>

            <div className="w-full kg:w-1/3">r</div>
        </div>
    )
 }
 export default AdminPage