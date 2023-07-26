export default function userProfile({params}: any) {
    return(
        <div className="flex flex-col justify-center items-center h-[100vh]">
            <h1>Profile </h1>
            <hr/>
            <p className="text-4xl">Profile Page
            <span className="p-2 rounded bg-orange-500 text-black ml-1 ">{params.id}</span></p>
        </div>
    )
}