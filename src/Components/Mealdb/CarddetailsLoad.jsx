import { useLoaderData } from "react-router-dom";
import CardDetails from "./CardDetails";

const CarddetailsLoad = () => {
   const details = useLoaderData()

    return (
        <div>
            <div>
              {
                details.meals.map(item => <CardDetails key={item.idMeal} item={item}/>)
              }
            </div>         
        </div>
    );
};

export default CarddetailsLoad;