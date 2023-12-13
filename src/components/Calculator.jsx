import React, { useState } from 'react'

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('');

    const appendToDisplay = (event) => {
        setDisplayValue(prevValue => prevValue + event.target.name);
    };

    const calculateResult = () => {
        try {
            const result = eval(displayValue);

            setDisplayValue(result.toString());
        } catch (error) {
            setDisplayValue('Error');
        }
    };

    const clearDisplay = () => {
        setDisplayValue('');
    };

    const buttonData = [
        [
            { label: '%', name: '%', bgColor: '[#505050]', onClick: appendToDisplay },
            { label: '(', name: '(', bgColor: '[#505050]', onClick: appendToDisplay },
            { label: ')', name: ')', bgColor: '[#505050]', onClick: appendToDisplay },
            { label: '÷', name: '/', bgColor: 'orange-500', onClick: appendToDisplay },
        ],
        [
            { label: '7', name: '7', bgColor: 'gray-800', onClick: appendToDisplay },
            { label: '8', name: '8', bgColor: 'gray-800', onClick: appendToDisplay },
            { label: '9', name: '9', bgColor: 'gray-800', onClick: appendToDisplay },
            { label: 'x', name: '*', bgColor: 'orange-500', onClick: appendToDisplay },
        ],
        [
            { label: '4', name: '4', bgColor: 'gray-800', onClick: appendToDisplay },
            { label: '5', name: '5', bgColor: 'gray-800', onClick: appendToDisplay },
            { label: '6', name: '6', bgColor: 'gray-800', onClick: appendToDisplay },
            { label: '-', name: '-', bgColor: 'orange-500', onClick: appendToDisplay },
        ],
        [
            { label: '1', name: '1', bgColor: 'gray-800', onClick: appendToDisplay },
            { label: '2', name: '2', bgColor: 'gray-800', onClick: appendToDisplay },
            { label: '3', name: '3', bgColor: 'gray-800', onClick: appendToDisplay },
            { label: '+', name: '+', bgColor: 'orange-500', onClick: appendToDisplay },
        ],
        [
            { label: 'AC', name: 'AC', bgColor: 'gray-800', onClick: clearDisplay },
            { label: '0', name: '0', bgColor: 'gray-800', onClick: appendToDisplay },
            { label: '.', name: '.', bgColor: 'gray-800', onClick: appendToDisplay },
            { label: '=', name: '=', bgColor: 'orange-500', onClick: calculateResult },
        ],
    ];

    return (
        <div className="mx-auto overflow-hidden mt-10 shadow-lg mb-2 bg-[#000000] shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6 border-4 border-[#999]">
            <div className="p-5 text-white text-center text-3xl bg-[#04387A]-900">Calculator</div>
            <div className="pt-16 p-5 pb-0 text-white text-right text-3xl bg-[#000000]">{displayValue}</div>
            <div>
                {buttonData.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex items-stretch bg-[#000000] h-24">
                        {row.map((button, buttonIndex) => (
                            <div key={buttonIndex} className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                                <button
                                    className={`rounded-full h-20 w-20 flex items-center bg-${button.bgColor} justify-center shadow-lg hover:border-gray-500 focus:outline-none`}
                                    name={button.name}
                                    onClick={button.onClick}
                                >
                                    {button.label}
                                </button>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Calculator