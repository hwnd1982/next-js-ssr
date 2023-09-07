import Link from "next/link";
import { useState } from "react";
import { MainContainer } from "../components/MainContainer/MainContainer";

const Users = ({users}) => {
  return (
    <MainContainer keywords={'users'}>
      <h1>Список пользователей</h1>
      <ul>
        {users.map(({id, name}) => 
          <li key={id}>
            <Link href={`/users/${id}`}>
              {name}
            </Link>
          </li>)}
      </ul>
    </MainContainer>
  )
}

export default Users;

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  
  return {
    props: {users}
  }
}