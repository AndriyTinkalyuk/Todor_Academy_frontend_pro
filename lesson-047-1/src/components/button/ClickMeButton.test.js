// src/setupTests.js
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import ClickMeButton from './ClickMeButton';

test('button in the page', () => {
    render(<ClickMeButton/>)

    const buttonElement = screen.getByRole('button', {name: /Click Me/i});
    

    // Перевірка наявності кнопки та її тексту
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveTextContent(/Click me!/i);
});