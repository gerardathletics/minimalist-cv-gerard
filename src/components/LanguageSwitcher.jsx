import React, { useState } from 'react';

// Define a helper component for language buttons
const LangButton = ({ language, imageSrc, altText, isActive, onClick }) => {
    return (
        <button onClick={() => onClick(language)} className={`lang-button ${isActive ? 'active-lang' : ''}`} title={altText}>
            <img src={imageSrc} alt={altText} />
        </button>
    );
};

const style = `
    .lang-buttons-container {
        position: fixed;
        top: 10px;
        right: 10px;
        z-index: 1000;
        display: flex;
        justify-content: flex-end;
    }

    .lang-button {
        display: inline-flex;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin-left: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border: 2px solid #fff;
        cursor: pointer;
        background: none; /* Ensure button background is transparent */
        padding: 0; /* Remove default padding */
        border: none; /* Remove default border */
    }

    .lang-button img {
        width: 100%;
        height: auto;
        object-fit: cover;
        filter: grayscale(100%);
    }

    .lang-button:hover {
        border: 2px solid #464646;
    }

    .lang-button.active-lang img {
        filter: none;
    }
`;

const LanguageSwitcher = () => {
    const [activeLang, setActiveLang] = useState('en');

    const handleLanguageChange = (lang) => {
        setActiveLang(lang);
        // Here, you can add additional logic for when the language changes,
        // such as updating content, setting a cookie, or redirecting.
    };

    return (
        <>
        <style>{style}</style>
        <div className="lang-buttons-container">
            <LangButton
                language="en"
                imageSrc="./minimalist-cv-gerard/flags/english.png"
                altText="English"
                isActive={activeLang === 'en'}
                onClick={handleLanguageChange}
            />
            <LangButton
                language="es"
                imageSrc="./minimalist-cv-gerard/flags/spanish.webp"
                altText="Spanish"
                isActive={activeLang === 'es'}
                onClick={handleLanguageChange}
            />
            {/* Add more LangButton components for additional languages as needed */}
        </div>
        </>
    );
};

export default LanguageSwitcher;

