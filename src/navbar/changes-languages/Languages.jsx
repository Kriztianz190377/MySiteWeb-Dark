import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const LanguagesChoise = [
  { id: '1', language: 'ES' },
  { id: '2', language: 'EN' },
  { id: '3', language: 'FR' },
];

export const Languages = () => {

    const {setChangeLanguage} = useContext(DataContext);  
    
    const handleChangeLanguage = (e) => {
      setChangeLanguage(e.target.name);
    };
  
    return (
      <div className="md:w-40 p-0 flex  justify-center items-center text-inherit">
        {LanguagesChoise.map(languageChoise => (
          <div key={languageChoise.id}>
            <input
              type="checkbox"
              id={languageChoise.language}
              name={languageChoise.language}
              value='off'
              onChange={e => handleChangeLanguage(e)}
              className="appearance-none"
            />
            <label
              htmlFor={languageChoise.language}
              className="transition-colors duration-300 ease-out px-4 cursor-pointer hover:text-pink-700"
            >
              {languageChoise.language}
            </label>
          </div>
        ))}
      </div>
    );
  }
  