import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calendar from '../components/Calendar';
import CalendarHeader from '../components/CalendarHeader';

beforeAll(() => {
  global.fetch = jest.fn(() =>
     Promise.resolve({
      json: () => Promise.resolve([
        { date: '2024-02-15', title: 'Game Title', imageUrl: 'game-image-url.jpg' },
      ]),
    })
  );
});

// Clear all mocks after each test
afterEach(() => {
  jest.clearAllMocks();
});

describe('Calendar Component', () => {
  test('renders Calendar component', async () => {
    // Render the Calendar component
    const { findByText } = render(<Calendar />);
    
    // Wait for the Calendar to be in the document
    const calendarElement = await findByText(/Sunday/i);
    expect(calendarElement).toBeInTheDocument();
  });

  test('fetches game releases on component mount', async () => {
    render(<Calendar />);
    
    // Wait for the mock fetch to be called
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
  });

  test('navigates to the next month when next arrow is clicked', () => {
    const nextMonthMock = jest.fn();
    const { getByTestId } = render(<CalendarHeader currentDate={new Date()} nextMonth={nextMonthMock} />);
    
    const nextArrow = getByTestId('next-month');
    fireEvent.click(nextArrow);
    
    expect(nextMonthMock).toHaveBeenCalledTimes(1);
  });

  test('navigates to the previous month when previous arrow is clicked', () => {
    const prevMonthMock = jest.fn();
    const { getByTestId } = render(<CalendarHeader currentDate={new Date()} prevMonth={prevMonthMock} />);
    
    const prevArrow = getByTestId('prev-month');
    fireEvent.click(prevArrow);
    
    expect(prevMonthMock).toHaveBeenCalledTimes(1);
  });
});

