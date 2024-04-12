# Tax Calculator Project

This project is a tax calculator developed using HTML, CSS, JavaScript, jQuery, and Bootstrap. It allows users to input their income and age, calculate the amount of tax they need to pay based on predefined tax brackets, and handles error handling for incorrect inputs.

## Features

- Input fields for users to enter their income and age.
- Calculation of tax based on predefined tax brackets.
- Error handling for incorrect inputs, including characters in number fields and missing age selection.
- Display of the calculated tax amount in a modal.

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery
- Bootstrap

## Tax Calculation Formula

The tax calculation works based on the following formula:

- If the overall income (after deductions) is under 8 Lakhs, it is not taxed.
- For income over 8 Lakhs, the amount over 8 Lakhs is taxed at:
  - 30% for people with age < 40
  - 40% for people with age ≥ 40 but < 60
  - 10% for people with age ≥ 60

## Error Handling

- Users are not restricted from entering incorrect values like characters in number fields.
- Error icons are displayed to the right of input fields when errors are present, with tooltips showing the error message upon hovering.
- Error icons are not visible in the form by default.

## Age Dropdown

The age dropdown field has 3 values:

- <40
- ≥ 40 & < 60
- ≥ 60

If the user has not selected an age and clicks on submit, an error icon is displayed indicating that the input field is mandatory.

## Getting Started

To run this project locally, follow the instructions in the "Getting Started" section of the README.

## Screenshots

1. Error Tooltip
![1](https://github.com/Aniket2805/Tax-Calculator/assets/97465559/cdba6dbf-3dac-4e85-9d58-144089aee89d)

2. Input Field Information Tooltip
![3](https://github.com/Aniket2805/Tax-Calculator/assets/97465559/0c7f904f-5970-413c-a3c9-c52b16e61172)

3. On Submit, age error tooltip when age group is not selected
![2](https://github.com/Aniket2805/Tax-Calculator/assets/97465559/5b7e9e6e-8c0e-4194-bdf9-06a5f0e41e1a)

4. Calculated Tax
![4](https://github.com/Aniket2805/Tax-Calculator/assets/97465559/d8fe53a8-201d-450f-a764-093e0923ee88)

## Contributing

Contributions are welcome! Please refer to the "Contributing" section of the README for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Bootstrap for providing a responsive design framework.
- jQuery for simplifying DOM manipulation and event handling.
- Inspiration from various tax calculators available online.
