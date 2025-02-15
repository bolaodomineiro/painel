import styled from "styled-components";

export const ModalWindow = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); /* Fundo escurecido */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Garante que o modal fique acima de tudo */
    animation: fadeIn 0.3s ease-in-out; /* Efeito de fade-in */
  }

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 400px; /* Largura máxima do modal */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Sombra suave */
    animation: slideIn 0.3s ease-in-out; /* Efeito de slide-in */
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .modal-content form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    
  }

  .modal-content h2 {
    margin: 0 0 15px 0;
    font-size: 1.5rem;
    color: #333;
    text-align: center;
  }

  .modal-content label {
    display: flex;
    flex-direction: column;
    font-weight: b80;
    color: #555;
  }

  .modal-content input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  .modal-content input:focus {
    border-color: rgb(171, 5, 25);
    outline: none;
  }

  .modal-content button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .modal-content button[type="submit"] {
    background-color: rgb(171, 5, 25);
    color: white;
  }

  .modal-content button[type="submit"]:hover {
    background-color: #FF0000;
  }

  .modal-content button[type="button"] {
    background-color: #6c757d;
    color: white;
  }

  .modal-content button[type="button"]:hover {
    background-color: #5a6268;
  }
`