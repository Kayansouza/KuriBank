// src/components/SavingsAndChecking.js
import React, { useState } from 'react';

const SavingsAndChecking = () => {
  const [showSavingsDetails, setShowSavingsDetails] = useState(false);
  const [showCheckingDetails, setShowCheckingDetails] = useState(false);
  const [depositAmount, setDepositAmount] = useState('');
  const [interestRate, setInterestRate] = useState(1.5);
  const [months, setMonths] = useState(12);
  const [savingsProjection, setSavingsProjection] = useState(0);

  const calculateProjection = () => {
    const principal = parseFloat(depositAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const time = parseInt(months);
    const projection = principal * Math.pow(1 + rate, time);
    setSavingsProjection(projection.toFixed(2));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Contas Correntes e Poupança</h2>
      
      <div>
        <h3 className="text-xl font-semibold mb-4 cursor-pointer" onClick={() => setShowCheckingDetails(!showCheckingDetails)}>
          {showCheckingDetails ? "Fechar" : "Abrir"} Detalhes das Contas Correntes
        </h3>
        {showCheckingDetails && (
          <div className="mb-6">
            <p className="mb-4">
              Nossas contas correntes oferecem uma forma flexível de gerenciar seu dinheiro com facilidade.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Cartões de débito com segurança de alto nível</li>
              <li>Aplicativo móvel para acompanhar transações</li>
              <li>Sem taxas de manutenção em transações digitais</li>
            </ul>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 cursor-pointer" onClick={() => setShowSavingsDetails(!showSavingsDetails)}>
          {showSavingsDetails ? "Fechar" : "Abrir"} Detalhes das Contas Poupança
        </h3>
        {showSavingsDetails && (
          <div className="mb-6">
            <p className="mb-4">
              As contas poupança oferecem um excelente retorno para seu dinheiro com uma taxa de juros de {interestRate}% ao ano.
            </p>
            <div className="flex flex-col mb-4">
              <label className="mb-2">Depósito Inicial:</label>
              <input
                type="number"
                className="p-2 border rounded mb-4"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
              />

              <label className="mb-2">Meses:</label>
              <input
                type="number"
                className="p-2 border rounded mb-4"
                value={months}
                onChange={(e) => setMonths(e.target.value)}
              />

              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
                onClick={calculateProjection}
              >
                Calcular Projeção de Poupança
              </button>

              {savingsProjection > 0 && (
                <p className="mt-4">Projeção de poupança após {months} meses: R$ {savingsProjection}</p>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="mt-6">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
          Abrir Conta Corrente
        </button>
        <button className="ml-4 px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700">
          Abrir Conta Poupança
        </button>
      </div>
    </div>
  );
};

export default SavingsAndChecking;
