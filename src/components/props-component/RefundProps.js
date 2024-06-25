import React from 'react';

const RefundProps = ({ title, subtitles, texts }) => {
    return (
        <div className="refund-provisions-parent">
            <h1 className="refund-provisions">
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

export default RefundProps