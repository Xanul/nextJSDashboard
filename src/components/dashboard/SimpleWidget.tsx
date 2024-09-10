import Link from "next/link";

interface Props {
  title: string;
  value?: string;
  subValue?: string;
  icon?: React.ReactNode;
  href?: string;
}

export const SimpleWidget = (props: Props) => {
  const { title, value, subValue, icon, href } = props;

  return (
    <div className="bg-white shadow-xl p-3 min-w-full lg:min-w-[32%] rounded-2xl border-1 border-gray-50">
      <div className="flex flex-col">
        {title && (
          <div>
            <h2 className="font-bold text-gray-600 text-center">{title}</h2>
          </div>
        )}
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-4 ">
            {icon}
            <div id="temp" className="text-center">
              <h4 className="text-4xl">{value}</h4>
              {subValue && <p className="text-xs text-gray-500">{subValue}</p>}
            </div>
          </div>
        </div>

        {href && (
          <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
            <Link href={href} className="text-indigo-600 text-xs font-medium">
              Más
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
