import {JalaliGregorianDatePicker} from "./components";
import {useState} from "react";

function App() {
    const [visible,setVisible] = useState<boolean>(false)
    const [dateRange,setDateRange] = useState<[] | string[]>([])


    return (
        <div>
            <button onClick={() => setVisible(!visible)}>show</button>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>
                <span>dsds</span>
                <span>dddddddddddddddddddddddddd</span>
                <span>xsssssssssssssssssssssdsdsdsdsdsdsdsssssssssssssssssssssssssssssssssssss</span>
                <span>dddd</span>
                <span>dff</span>
                <input type="text" id="testInput" onFocus={() => setVisible(true)}/>
            </div>

            <JalaliGregorianDatePicker
                dateRange={dateRange}
                setDateRange={(dateRange) => setDateRange(dateRange.map(date => date))}
                elementId="testInput"
                isVisible={visible}
                setIsVisible={setVisible}
            />
        </div>
    )
}

export default App
