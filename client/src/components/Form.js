import React, { useState } from 'react';
import "../styles/Form.css";


const Form = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [checkboxValues, setCheckboxValues] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });
  const [selectedRadio, setSelectedRadio] = useState('');
  const [textBox1, setTextBox1] = useState('');
  const [textBox2, setTextBox2] = useState('');

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues({
      ...checkboxValues,
      [name]: checked,
    });
  };

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform form submission actions here
    console.log('Form submitted!');
    // Add your logic for form submission
    setShowAlert(true);
  };

  return (
    <section id="form">
    <form onSubmit={handleSubmit} className="productive-books-form">
      <label>
        Date:
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </label>
      <label>
        Day Selection:
        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
        </select>
      </label>
      <label>
        Dropdown:
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
          <option value="option5">Option 5</option>
          <option value="option6">Option 6</option>
          <option value="option7">Option 7</option>
          <option value="option8">Option 8</option>

        </select>
      </label>
      <div className="checkboxes">
        Reading Preferences
        <label>
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxValues.checkbox1}
            onChange={handleCheckboxChange}
          />
           Fiction
        </label>
        <label>
          <input
            type="checkbox"
            name="checkbox2"
            checked={checkboxValues.checkbox2}
            onChange={handleCheckboxChange}
          />
          Non-Fiction
        </label>
        <label>
          <input
            type="checkbox"
            name="checkbox3"
            checked={checkboxValues.checkbox3}
            onChange={handleCheckboxChange}
          />
          Science-Fiction/Fantasy
        </label>
        <label>
          <input
            type="checkbox"
            name="checkbox3"
            checked={checkboxValues.checkbox4}
            onChange={handleCheckboxChange}
          />
          Self-help/Personal Development
        </label>
        <label>
          <input
            type="checkbox"
            name="checkbox3"
            checked={checkboxValues.checkbox5}
            onChange={handleCheckboxChange}
          />
          Business/Economics
        </label>
        <label>
          <input
            type="checkbox"
            name="checkbox3"
            checked={checkboxValues.checkbox6}
            onChange={handleCheckboxChange}
          />
          Romance
        </label>
      </div>
      <div className="radio-buttons">
      Reading Frequency
        <label>
          <input
            type="radio"
            value="optionA"
            checked={selectedRadio === 'optionA'}
            onChange={handleRadioChange}
          />
          Daily
        </label>
        <label>
          <input
            type="radio"
            value="optionB"
            checked={selectedRadio === 'optionB'}
            onChange={handleRadioChange}
          />
          Weekly
        </label>
        <label>
          <input
            type="radio"
            value="optionB"
            checked={selectedRadio === 'optionB'}
            onChange={handleRadioChange}
          />
          Monthly
        </label>
        <label>
          <input
            type="radio"
            value="optionB"
            checked={selectedRadio === 'optionB'}
            onChange={handleRadioChange}
          />
          Occasionally
        </label>
      </div>
      <label>
        Favourite Bookname:
        <input
          type="text"
          value={textBox1}
          onChange={(e) => setTextBox1(e.target.value)}
        />
      </label>
      <label>
        Favourite Genre:
        <input
          type="text"
          value={textBox2}
          onChange={(e) => setTextBox2(e.target.value)}
        />
      </label>
          <button className='submitbutton' type="submit">Submit</button>
          {showAlert && (
            <div className="alert-popup">
              <p>Thank You for your submission!</p>
            </div>
          )}
    </form>
    </section>
  );
};

export default Form;
