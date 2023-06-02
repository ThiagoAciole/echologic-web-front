import Sema from "../../../assets/sema.svg";

export default function Organização() {
  return (
    <div className="mx-auto mt-12">
      <h1 className="font-sans text-3xl font-extrabold text-gray-700 text-center">
        Organização
      </h1>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8 mt-8">
        <div className="mt-12 flex flex-col sm:flex-row sm:space-x-4 space-y-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Instituto_Federal_da_Para%C3%ADba_-_Marca_Vertical_2015.svg/1200px-Instituto_Federal_da_Para%C3%ADba_-_Marca_Vertical_2015.svg.png"
            alt=""
            className="w-24"
          />
          <img src={Sema} alt="" className="w-24" />
          <img
            src="https://scontent.fcpv10-1.fna.fbcdn.net/v/t39.30808-6/294517822_426204489549654_3911713368456606869_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEaqvxJSMSLiM6xH581qaManJMQIMFbzxKckxAgwVvPEg0Hcfx3cuh9VzcusrEZ1BZKT58GY7GxkrXIiso28CJE&_nc_ohc=-P_5q9XhKJ8AX_rdiYo&_nc_ht=scontent.fcpv10-1.fna&oh=00_AfBTCDiacUG3Un96FjIUD64vlRjlu6D8lb3_EYVgOcgXhg&oe=647E4323"
            alt=""
            className="w-24"
          />
          <img
            src="https://yt3.googleusercontent.com/91sZqQUUoUeAlM8jhLzx_6qRNASOWxnyldVxOxA5jMsu9f8xFWjcu5Vu0GVWkVGxfp9q1mDX=s900-c-k-c0x00ffffff-no-rj"
            alt=""
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
}
