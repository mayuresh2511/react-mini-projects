
function ColorButtons(props) {

    const setRedColor = () => {
        props.setColorFunc('bg-red-400 text-black p-4 rounded-3xl')
    }

    const setGreenColor = () => {
        props.setColorFunc('bg-green-400 text-black p-4 rounded-3xl')
    }

    const setBlueColor = () => {
        props.setColorFunc('bg-blue-400 text-black p-4 rounded-3xl')
    }

    const setYellowColor = () => {
        props.setColorFunc('bg-yellow-400 text-black p-4 rounded-3xl')
    }
    return(
        <>
            <div>
                <button onClick={setRedColor} className="bg-red-400 mt-2 inline-flex items-center text-sm font-semibold text-white">
                    Red
                </button>
                <button onClick={setGreenColor} className="bg-green-400 mt-2 inline-flex items-center text-sm font-semibold text-white">
                    Green
                </button>
                <button onClick={setBlueColor} className="bg-blue-400 mt-2 inline-flex items-center text-sm font-semibold text-white">
                    Blue
                </button>
                <button onClick={setYellowColor} className="bg-yellow-400 mt-2 inline-flex items-center text-sm font-semibold text-white">
                    Yellow
                </button>
            </div>
        </>
    )
}

export default ColorButtons