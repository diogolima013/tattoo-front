import React from "react";

function Footer() {
  let today = new Date();

  let currentDate=today.getDate() + "/ "+ parseInt(today.getMonth()+1) +"/ "+today.getFullYear();
  
   const Contact = "(13)98105-3610"
   const Company = "Clear Cloud Software"

  return (
    <footer className="bg-gray-900 text-white py-4 w-screen">
      <div className="container mx-auto flex justify-between">
        <div>
          <p><b>Contato:</b>  {Contact}</p>
          <p>localização: Rua das Fiandeiras, Vila Olímpia.</p> 
            <p>Praia Grande, São Paulo </p>
        </div>
        <div>
          <p>{currentDate}</p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
