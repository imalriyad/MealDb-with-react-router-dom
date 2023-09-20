import { useRouteError } from "react-router-dom";
const ErorrPage = () => {
    const erorr = useRouteError()
  console.log(erorr);
    return (
        <div className="text-white max-w-screen-sm mx-auto text-center my-28">
            <img src="https://i.ibb.co/ySrd2hm/fi-5301987.png" alt="" className="mx-auto" />
            <h1 className="text-4xl text-white mt-4">{erorr.status} {erorr.statusText}</h1>
            
        </div>
    );
};

export default ErorrPage;