"use client"

import { Button } from "./Components/button";
import { Container } from "./Components/container";
import { ContextProvider, UseTheme } from "./contexts/ThemeContext";




const Page = () => {
  return (
   
    <ContextProvider>
      <Container>
        <header className="py-3">
         <h1 className="text-3xl"> Titulo da Página </h1>
        </header>

        <section>
         <p className="my-5">Conteúdo da Página</p>
        </section>

        <div>
          <Button/>  
        </div>
     
      </Container>
    </ContextProvider>
  );
}



export default Page;