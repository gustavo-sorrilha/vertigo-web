"use client";
import React, { useState } from 'react';
import { updateUser } from './functions';

export default function UpdateForm() {
  const [updateData, setUpdateData] = useState({
    id: '',
    nome: '',
    email: '',
    senha: ''
  });

  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({
      ...updateData,
      [name]: value
    });
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();

    try {
      // Passe o ID do usuário como segundo argumento para a função updateUser
      await updateUser(updateData, updateData.id);
      alert('Dados do usuário atualizados com sucesso!');
      // Adicione lógica adicional após a atualização se necessário
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleUpdateUser} className="flex flex-col m-auto w-96 gap-4">
      <label>ID:</label>
      <input
        type="text"
        name="id"
        value={updateData.id}
        onChange={handleUpdateInputChange}
        className="bg-white p-3 border-b-4 rounded-sm text-black"
        placeholder="ID do Usuário"
        required
      />
      <label>Nome:</label>
      <input
        type="text"
        name="nome"
        value={updateData.nome}
        onChange={handleUpdateInputChange}
        className="bg-white p-3 border-b-4 rounded-sm text-black"
        placeholder="Nome"
        required
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={updateData.email}
        onChange={handleUpdateInputChange}
        className="bg-white p-3 border-b-4 rounded-sm text-black"
        placeholder="Email"
        required
      />
      <label>Senha:</label>
      <input
        type="password"
        name="senha"
        value={updateData.senha}
        onChange={handleUpdateInputChange}
        className="bg-white p-3 border-b-4 rounded-sm text-black"
        placeholder="Senha"
        required
      />
      <button type="submit" className="bg-purple-500 rounded p-3 mt-3 text-white">
        Atualizar
      </button>
    </form>
  );
}
