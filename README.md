# React Jalali Gregorian Date Picker

The JalaliGregorianDatePicker component is a date picker designed for use in React applications. It allows users to select dates from both the Jalali and Gregorian calendars, offering flexibility and ease of use.
## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install react-jalali-gregorian-date-picker --save
```

## Usage

React Component:

```javascript
import {JalaliGregorianDatePicker} from "./components";
import {useState} from "react";

function App() {
    const [visible,setVisible] = useState(false)
    const [dateRange,setDateRange] = useState([])
    
  return (
    <div>
        <input type="text" id="testInput" onFocus={() => setVisible(true)}/>

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
```

## Props
Here are the props that can be passed to the `<ReactTransition />` component:

| Prop Name         | Type       | Default Value | Description|
|-------------------|------------|---------------|------------|
| `color`           | `String`   | `blue`        | (optional): Customize the color scheme of the date picker. |
| `isDark` | `Boolean`  | `false`       | (optional): Enable dark mode for the date picker.|
| `setDateRange`         | `Function` | `undefiend`   | A function to update the selected date range.|
| `dateRange`           | `Array`    | `undefiend`   | An array representing the selected date range.|
| `elementId`        | `String`   | `''`          |  (optional): The ID of the input element to attach the date picker to.|
| `isVisible`        | `Boolean`  | `true`        |  (optional): Control the visibility of the date picker.|
| `setIsVisible`        | `String`   | `undefiend`   |  (optional): A function to update the visibility of the date picker.|


## Contributing
If you want to contribute to this project and make it better, your help is very welcome. Create an issue or submit a pull request.
