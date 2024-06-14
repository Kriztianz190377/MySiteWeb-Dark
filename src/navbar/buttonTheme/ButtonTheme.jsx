import { useContext, useState } from 'react';
import { BiSun } from 'react-icons/bi';
import { BsMoonFill } from 'react-icons/bs';
import { DataContext } from '../../context/DataContext';

const ButtonTheme = () => {
  const {handleChange} = useContext(DataContext)

  const [sun, setSun] = useState(true);

  const moonSun = () => {
    handleChange();
    setSun(!sun);
  }

  return (
    <div
      className="cursor-pointer"
      onClick={moonSun}
      type="button"
    >
      <div className='flex justify-end w-14 text-3xl transition-colors duration-300 ease-in hover:text-pink-700'>
        {sun ? <BiSun /> : <BsMoonFill />}
      </div>
    </div>
  );
}

export default ButtonTheme;
