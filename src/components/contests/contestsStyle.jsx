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
    width: 90%;
  }

  .card {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 14px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    flex: 1 1 calc(33.333% - 20px);
    max-width: calc(33.333% - 20px);
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
    color: green;
  }

  .button {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .card a {
    padding-left: 0.8em;
    padding-right: 0.8em;
    padding-top: 0.6em;
    padding-bottom: 0.6em;
    background-color: green;
    color: white;
    font-weight: 700;
  }

  .card a:hover {
    background-color: black;
    transition: ease-in-out 300s;
  }

  .card span {
    padding-top: 1em;
    padding-bottom: 1em;
    color: blue;
  }

`;