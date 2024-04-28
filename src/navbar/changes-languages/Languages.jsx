import './Languages.css'

export const Languages = ({ setChangeLanguage }) => {
    const LanguagesChoise = [
        { id: '1', language: 'ES' },
        { id: '2', language: 'EN' },
        { id: '3', language: 'FR' },
    ]

    const handleChangeLanguage = (e) => {
        setChangeLanguage(e.target.name)
    }

    return (
        <div
            className="Languages"
            name="language"
            id="1"
        >
            {LanguagesChoise.map(languageChoise => (
                <div
                    key={languageChoise.id}
                >
                    <input
                        type="checkbox"
                        id={languageChoise.language}
                        name={languageChoise.language}
                        value='off'
                        onChange={e => handleChangeLanguage(e)}
                    />

                    <label
                        htmlFor={languageChoise.language}>
                        {languageChoise.language}
                    </label>
                </div>


            ))}
        </div>
    )
}
