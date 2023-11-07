import { PiArrowRightThin } from 'react-icons/pi';
interface ListProps {
  title: string;
  list:
    | string[]
    | {
        hosting: string;
        language: string;
        frameworks: string[];
      };
  homepage?: boolean;
  services?: boolean;
  toolset?: boolean;
}

const List = ({ title, list, homepage, services, toolset }: ListProps) => {
  return (
    <div>
      {services && (
        <div className="grid md:grid-cols-2 max-md:gap-5 capitalize">
          <h3 className="inline-flex">
            <PiArrowRightThin className="text-lg lg:relative top-1" />
            {title}
          </h3>

          <ul className="flex flex-col gap-5">
            {Array.isArray(list) && (
              <ul
                className={`grid ${
                  homepage ? 'grid-cols-2' : 'grid-cols-1'
                } gap-5`}
              >
                {list.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </ul>
        </div>
      )}
      {toolset && (
        <div className="grid md:grid-cols-2 max-md:gap-5 capitalize">
          <h3 className="inline-flex">
            <PiArrowRightThin className="text-lg lg:relative top-1" />
            {title}
          </h3>
          <div className="grid grid-cols-1 gap-5">
            <div className="grid grid-cols-2">
              <p>hosting:</p>
              {!Array.isArray(list) && <p>{list.hosting}</p>}
            </div>
            <div className="grid grid-cols-2">
              <p>language:</p>
              {!Array.isArray(list) && <p>{list.language}</p>}
            </div>
            <div className="grid md:grid-cols-2 max-md:gap-5">
              <p>
                framework(<span className="lowercase">s</span>):
              </p>
              {!Array.isArray(list) && (
                <ul
                  className={`grid ${
                    list.frameworks.length > 3 ? 'grid-cols-2' : 'grid-cols-1'
                  } gap-3`}
                >
                  {list.frameworks.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
