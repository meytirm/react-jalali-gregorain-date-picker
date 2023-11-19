import JalaliGregorianDatePicker from "./components/JalaliGregorianDatePicker.jsx";
import {forwardRef, useEffect, useRef, useState} from "react";

function App() {
    const [date, setDate] = useState(null)
    const [isg, setisg] = useState(true)
    const inputRef = useRef(null)

    const Inp = forwardRef(function Input (props, ref) {
        return <input ref={ref} {...props} type="text" value="hello"/>
    })
    return (
        <div style={{width: '600px'}}>
            <div onClick={() => setisg(!isg)}>ddd</div>
            <JalaliGregorianDatePicker
                secondCalendar
                secondDate
                isRange
                isGregorian={isg}
                onInput={setDate}
                value={date}
                CustomInput={Inp}
            />
            {date}
        </div>
    )
}

export default App
