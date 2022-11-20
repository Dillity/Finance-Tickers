import { render, screen } from '@testing-library/react';
import App from './App';
import {io} from "socket.io-client";
import {getTableData} from "./redux/reducers/tickersTableReducer";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

