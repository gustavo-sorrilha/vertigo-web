"use client";
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Sidebar, Header, Container } from '@/components';
import { saveUserData, deleteUser, updateUser } from './functions'; 
import UpdateForm from './UpdateForm';



export default function Profile() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  const [deleteId, setDeleteId] = useState('');
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDeleteChange = (e) => {
    setDeleteId(e.target.value);
  };

  const handleSaveUser = async (e) => {
    e.preventDefault();

    try {
      await saveUserData(formData);
      alert('Dados salvos com sucesso!');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDeleteUser = async (e) => {
    e.preventDefault();

    try {
      await deleteUser(deleteId);
      alert('Usuário excluído com sucesso!');
      setDeleteId('');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleOpenUpdateModal = () => {
    setIsUpdateModalOpen(true);
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };

  return (
    <main className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

        <Container>
          <form onSubmit={handleSaveUser} className="flex flex-col m-auto w-96 gap-4">
            <h1 className="text-center mb-3 text-xl text-black">Criação de usuários</h1>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              className="bg-white p-3 border-b-4 rounded-sm text-black"
              placeholder="Nome"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-white p-3 border-b-4 rounded-sm text-black"
              placeholder="Email"
            />
            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleInputChange}
              className="bg-white p-3 border-b-4 rounded-sm text-black"
              placeholder="Senha"
            />
            <button type="submit" className="bg-purple-500 rounded p-3 mt-3 text-white">
              Salvar
            </button>
          </form>

          <form onSubmit={handleDeleteUser} className="flex flex-col m-auto w-96 gap-4 mt-4">
            <h1 className="text-center mb-3 text-xl text-black">Exclusão de usuário</h1>
            <input
              type="text"
              name="deleteId"
              value={deleteId}
              onChange={handleDeleteChange}
              className="bg-white p-3 border-b-4 rounded-sm text-black"
              placeholder="ID do Usuário a ser excluído"
            />
            <button type="submit" className="bg-red-500 rounded p-3 mt-3 text-white">
              Excluir Usuário
            </button>
          </form>
          <button onClick={handleOpenUpdateModal} className="bg-green-500 rounded p-3 mt-3 text-white">
            Atualizar Usuário
          </button>

          <Modal isOpen={isUpdateModalOpen} onRequestClose={handleCloseUpdateModal}>
            <h2 className=" text-black">Atualização de Usuário</h2>
            <UpdateForm />
          </Modal>


        </Container>
      </div>
    </main>
  );
}