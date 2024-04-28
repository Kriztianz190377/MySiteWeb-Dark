import { useState } from 'react'
import './ButtonTheme.css'
import { BiSun } from 'react-icons/bi'
import { BsMoonFill } from 'react-icons/bs'


const ButtonTheme = ({handleChange}) => {
    const [sun, setSun] = useState(true);

    const moonSun = () => {
        handleChange();
        setSun(!sun)
    }

    return (
        <div
            className="button-theme"
            onClick={moonSun}
            type="button"
            
        >
            <div className='theme'>

                {
                    sun ?
                        <BiSun />
                        :
                        <BsMoonFill />
                }


            </div>

        </div>

    )
}

export default ButtonTheme