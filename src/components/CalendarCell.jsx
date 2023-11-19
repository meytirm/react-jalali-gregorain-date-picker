import PropTypes from "prop-types";

function CalendarCell({children, className, onClick}) {
    return (
        <span
            style={{color: 'currentcolor'}}
            className={className}
            onClick={onClick}
        >
            {children}
        </span>
    )
}

export default CalendarCell

CalendarCell.propTypes = {
    className: PropTypes.string,
    textColor: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.any,
}