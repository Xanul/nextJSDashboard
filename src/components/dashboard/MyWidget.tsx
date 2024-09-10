import Link from "next/link";
import { IoCalculator } from "react-icons/io5";

interface Props {
  title: string;
  value?: string;
  subValue?: string;
  icon?: React.ReactNode;
  href?: string;
}

export const MyWidget = (props:Props) => {

  const { title, value, subValue, icon, href } = props;

  return (
    <div className="bg-white shadow-xl p-3 min-w-full md:min-w-[25%]  rounded-2xl border-1 border-gray-50 mx-2 my-2">
      <div className="flex flex-col h-full">
        <div>
          <h2>Titulo Principal</h2>
        </div>
        <div className="flex flex-row">
          <div>
            <IoCalculator size={30}/>
          </div>
          <div>
            <h3>Valor</h3>
          </div>
        </div>
        <div>
          <h3>SubTitulo</h3>
        </div>
        <div>
          <h3>Link</h3>
        </div>
      </div>
    </div>
  );
};