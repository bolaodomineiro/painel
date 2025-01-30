import styled from "styled-components";

export const Contests_style = styled.section`

  width: 100%;
  min-height: 100svh;
  padding: 0.5em;
  background-color: #f1f1f1;
  border-top: 5px solid #AB0519;

  .header_contests{
    display: flex;
    gap: 10px;
    padding: 0.5em;

    .acumulado_text {
      max-width: 100px;
      padding: 0.3em;
      background-color:rgb(15, 125, 0);
      border-radius: 4px;
      color: #fff;
      font-weight: 400;
      text-align: center;
      margin-bottom: 0.3em;
    }

    .header_infor {
      .title {
        font-size: 1em;
        font-weight: 700;
        text-align: center;
        padding: 0.5em;
        background-color:#AB0519;
        color: #fff;
        border-radius: 4px;
        margin-bottom: 0.3em;
      }

      .descricao {
        padding: 0.3em;
        background-color:rgb(147, 160, 245);
      }

      .text_premeio {
        color:rgb(1, 128, 3);
      }

      h4 {
        font-size: 0.8em;
      }

    }

    .select {
      height: 35px;
      justify-self: flex-start
    }
  
  }

  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 0.5em;

    nav ul {
      display: flex;
      list-style: none;
      gap: 10px;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      
      li {
          font-size: 0.9em;
          font-weight: 500;
          background-color: #ccc;
          padding: 0.5em 1em;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color:rgb(48, 48, 48);
            color: #fff;
          }
      }
    }

  }

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