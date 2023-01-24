import './App.css';
import { Depense } from './depense';
import { Table } from './listeDepense';
import { Prevision } from './prevision'

function App() {

  const depensesInfos = [
    { date: "3 janvier 2023", article: "Souris de pc", prix: 10 },
    { date: "5 juin 2023", article: "café", prix: 1 },
    { date: "5 Juillet 2023", article: "iPhone", prix: 1000.50 }
  ]
  const previsions = [
    { date: "2 Juin 2023", temperature:"25", meteo:"Soleil"},
    { date: "5 Juin 2023", temperature:"26", meteo:"Soleil"},
    { date: "10 Juin 2023", temperature:"20", meteo:"Pluie"}
  ]
  return (
    <div className='App'>
      <Table title="Liste de dépenses" colones={["Date", "Article", "Prix"]}>
        {
          depensesInfos.map(depenseInfo => (<Depense date={depenseInfo.date} article={depenseInfo.article} prix={depenseInfo.prix} />))
        }
      </Table>    
      
      <Table title="Météo" colones={["Date", "Température", "Météo"]}>
         {
          previsions.map(function (prevision){
            return(
              <Prevision prevision={prevision}/>
            );
          })
         }
      </Table>
      </div>
  );
}

export default App;