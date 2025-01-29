import React, { useState } from "react";
import InputMask from "react-input-mask";
import { modal_window } from "./ModalStyles";

const EditUserModal = ({ user, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    phone: user.phone,
    city: user.city,
    balance: user.balance || 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSave(user.id, formData);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Editar Usuário</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Telefone:
            <InputMask
              mask="(99) 9 9999-9999"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Cidade:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </label>
          <label>
            Saldo:
            <input
              type="number"
              name="balance"
              value={formData.balance}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Salvar</button>
          <button type="button" onClick={onClose}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;