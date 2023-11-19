import {createElement, forwardRef, useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'

const AppTransition = forwardRef(function AppTransition({children, value, name = 'fade', onTransitionend}, ref) {
        const localeTransitionRef = useRef(null)
        const timeoutRef = useRef(null)
        const [isShow, setIsShow] = useState(value)
        if (!isShow && value) {
            setIsShow(value)
        }

        const transitionRef = ref ? ref : localeTransitionRef

        const childrenClasses = children.props.className
            ? `${children.props.className} `
            : ''
        const className = `${childrenClasses}${name}-enter-from ${name}-enter-active`

        let transitionElement = createElement(children.type, {
            ...children.props,
            className,
            ref: transitionRef,
            onTransitionEnd: () => {
                if (!value) {
                    setIsShow(false)
                }
                if (onTransitionend) {
                    onTransitionend()
                }
            },
        })

        useEffect(() => {
            if (!transitionRef.current) return
            timeoutRef.current = setTimeout(() => {
                if (value) {
                    transitionRef.current.classList.add(`${name}-enter-to`)
                    transitionRef.current.classList.remove(`${name}-enter-from`)
                } else {
                    transitionRef.current.classList.remove(`${name}-enter-to`)
                    transitionRef.current.classList.add(`${name}-enter-from`)
                }
            }, 0)
            return () => clearTimeout(timeoutRef.current)
        }, [value])

        return isShow ? transitionElement : ''
    }
)

export default AppTransition

AppTransition.propTypes = {
    children: PropTypes.node.isRequired,
    value: PropTypes.bool,
    name: PropTypes.string,
    onTransitionend: PropTypes.func,
}
