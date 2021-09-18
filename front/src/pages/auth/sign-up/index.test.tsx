import { render, screen } from '@testing-library/react';
import SignUpPage from '.';

test('Label do Nome na tela de Cadastro', () => {
  render(<SignUpPage />);
  const linkElement = screen.getByText(/Nome/i);
  expect(linkElement).toBeInTheDocument();
});

test('Label do Email na tela de Cadastro', () => {
  render(<SignUpPage />);
  const linkElement = screen.getByText(/E-mail/i);
  expect(linkElement).toBeInTheDocument();
});

test('Label da Senha na tela de Cadastro', () => {
  render(<SignUpPage />);
  const linkElement = screen.getByText(/Senha/i);
  expect(linkElement).toBeInTheDocument();
});

test('Botão de Cadastrar na tela de Cadastro', () => {
  render(<SignUpPage />);
  const linkElement = screen.getByText(/Cadastrar/i);
  expect(linkElement).toBeInTheDocument();
});

test('Botão de Voltar na tela de Cadastro', () => {
  render(<SignUpPage />);
  const linkElement = screen.getByText(/Voltar/i);
  expect(linkElement).toBeInTheDocument();
});
