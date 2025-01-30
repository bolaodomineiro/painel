import styled from "styled-components";

export const Contests_style = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 5rem;
  margin: 0 2rem;

  .deals {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    width: 90%; /* Ocupa 90% da largura da tela */
  }

  .card {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    flex: 1 1 calc(33.333% - 20px); /* Distribui os cards em 3 colunas */
    max-width: calc(33.333% - 20px); /* Limita a largura máxima de cada card */
    text-align: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
  }

  .card h2 {
    font-size: 1.5em;
    font-weight: 700;
    padding-left: 0.5em;
    padding-right: 0.5em;
    padding-top: 0.3em;
    padding-bottom: 0.8em;
  }

  .card .details {
    padding-left: 0.5em;
    padding-right: 0.5em;
    padding-top: 0.3em;
    padding-bottom: 0.3em;
  }

  .card .prize {
    font-size: 1.2em;
    font-weight: 700;
    color: blue;
  }

  .card a {
    margin-top: 1em;
    padding-left: 0.8em;
    padding-right: 0.8em;
    padding-top: 0.6em;
    padding-bottom: 0.6em;
    background-color: blue;
    color: white;
    font-weight: 700;
  }

  .card a:hover {
    background-color: black;
    transition: ease-in-out 300s;
  }

`;