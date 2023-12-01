import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [signed, setSigned] = useState(true);
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [cpf, setCpf] = useState();
  const [phone, setPhone] = useState();

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
