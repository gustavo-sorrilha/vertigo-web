// functions.js

import { useState } from 'react';

export async function saveUserData(formData) {
  try {
    const response = await fetch('http://localhost:8080/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Erro ao salvar os dados. Por favor, tente novamente mais tarde.');
    }
  } catch (error) {
    console.error('Erro ao enviar a requisição:', error);
    throw new Error('Erro ao salvar os dados. Por favor, tente novamente mais tarde.');
  }
}

export async function deleteUser(userId) {
  try {
    const response = await fetch(`http://localhost:8080/usuario/${userId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      return 'Usuário excluído com sucesso.';
    } else {
      throw new Error('Erro ao excluir o usuário. Por favor, tente novamente mais tarde.');
    }
  } catch (error) {
    console.error('Erro ao enviar a requisição:', error);
    throw new Error('Erro ao excluir o usuário. Por favor, tente novamente mais tarde.');
  }
}

export async function updateUser(formData, userId) {
  try {
    const response = await fetch(`http://localhost:8080/usuario/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Erro ao atualizar os dados do usuário. Por favor, tente novamente mais tarde.');
    }
  } catch (error) {
    console.error('Erro ao enviar a requisição:', error);
    throw new Error('Erro ao atualizar os dados do usuário. Por favor, tente novamente mais tarde.');
  }
}
