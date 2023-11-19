import PropTypes from "prop-types";
import arrowLeft from '/src/assets/arrow-left.svg'
import arrowRight from '/src/assets/arrow-right.svg'

function DatePickerArrows({onPrev, onNext, isGregorian}) {
    return <div className="date-picker-arrows">
        <div style={{transform: isGregorian ? '' : 'rotate(180deg)'}} onClick={onPrev}>
            <img src={arrowLeft} width="20px"/>
        </div>
        <div style={{transform: isGregorian ? '' : 'rotate(180deg)'}} onClick={onNext}>
            <img src={arrowRight} width="20px"/>
        </div>
    </div>
}

export default DatePickerArrows

DatePickerArrows.propTypes = {
    isGregorian: PropTypes.bool,
    dates: PropTypes.array,
    onPrev: PropTypes.func,
    onNext: PropTypes.func,
}