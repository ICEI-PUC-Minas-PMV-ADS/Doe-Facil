import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(false);
  const [name, setName] = useState('Mary');
  const [lastName, setLastName] = useState('Johnson');
  const [cpf, setCpf] = useState('98765432100');
  const [phone, setPhone] = useState('11912345678');

  return (
    <UserContext.Provider
      value={{
        signed,
        setSigned,
        name,
        setName,
        lastName,
        setLastName,
        cpf,
        setCpf,
        phone,
        setPhone
      }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  const { signed, setSigned, name, setName, lastName, setLastName, cpf, setCpf, phone, setPhone } = context;
  return { signed, setSigned, name, setName, lastName, setLastName, cpf, setCpf, phone, setPhone };
}
