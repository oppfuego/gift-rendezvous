import React from 'react';

const GeneralProvisions = ({ title, subtitles, texts }) => {
    return (
        <div className="general-provisions-parent">
            <h1 className="general-provisions">
                <p>{title}</p>
            </h1>
            <div className="frame-group">
                {subtitles.map((subtitle, index) => (
                    <div className="acceptance-of-terms-parent" key={index}>
                        <h3 className="acceptance-of-terms">{subtitle}</h3>
                        <div className="by-accessing-and">
                            {texts[index]}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GeneralProvisions;