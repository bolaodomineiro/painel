import styled from "styled-components";

export const ModalWindow = styled.div`

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100 %;
  height: 100 %;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify - content: center;
  align - items: center;
  z - index: 1000;
}

.modal - content {
  background: white;
  padding: 20px;
  border - radius: 8px;
  width: 300px;
  box - shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.modal - content form {
  display: flex;
  flex - direction: column;
  gap: 10px;
}

.modal - content label {
  font - weight: bold;
}

.modal - content input {
  padding: 8px;
  border: 1px solid #ccc;
  border - radius: 4px;
}

.modal - content button {
  margin - top: 10px;
  padding: 8px 12px;
  border: none;
  border - radius: 4px;
  background - color: #007bff;
  color: white;
  cursor: pointer;
}

.modal - content button[type = "button"] {
  background - color: #6c757d;
}

`