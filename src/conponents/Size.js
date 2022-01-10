import React from 'react';

function Size({item, sizeCheck}) {

    return (
        <label>
            <input className="sr-only peer" name="size" type="radio" value={item} defaultChecked={item===sizeCheck} />
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
                {item}
            </div>
        </label>
    )
}

export default Size;