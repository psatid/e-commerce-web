import React from 'react';

var Title = ({ title }) => {
    return (
        <div className="row" >
            <div className="col-10 mx-auto text-center text-title text-blue">
                <h1>
                    <strong className="text-blue text-title">
                        {title}
                    </strong>
                </h1>
            </div>
        </div>
    );

}

export default Title;