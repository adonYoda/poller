import Question from "./Question";
import { data } from "./TEMP/TEMP";


const FirstPage = () => {
 
  //const {data = []} = useGetPollerQuery({});
 const dataFake = data




  return (
    <Question data={dataFake} />
  );
};

export default FirstPage;
