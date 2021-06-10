import logo from './logo.svg';
import './App.css';
import  IdCard from './components/idcard/IdCard';
import  Greetings from './components/Greetings/Greetings';
import Random from './components/random/Random'
import BoxColor from './components/boxcolor/BoxColor'
import CreditCard from './components/creditcard/CreditCard'
import Rating from './components/rating/Rating'
import DriverCard from './components/drivecard/DriverCard'


function App() {
  return (
    <div className="App">
      
      <h2>Id Card</h2>
      <IdCard img='https://randomuser.me/api/portraits/men/44.jpg' firstName='John' lastName='Doe' gender='male' height='1.78m' birth='Tue Jul 14 1992'/>
      <IdCard img='https://randomuser.me/api/portraits/women/8.jpg' firstName='Obrien' lastName='Delores' gender='female' height='1.72m' birth='Tue May 11 1993'/>

      <h2>Greetings</h2>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="de">François</Greetings>

      <h2>Random</h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h2>BoxColor</h2>
      <BoxColor color="white" r={255} g={0} b={0}>#ff0000</BoxColor>
      <BoxColor color="black" r={128} g={255} b={0}>#ff0000</BoxColor>

      <h2>CreditCard</h2>
      <div class="cards-container">
      <CreditCard color="white" r={20} g={170} b={153} logo="https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/visa.png" cardNumber='8845' expireDate="Expires 03/21" bankName="BNP" ownerName="Maxence Bouret" />
      <CreditCard r={238} g={238} b={238} logo="https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/visa.png" cardNumber='0995' expireDate="Expires 03/21" bankName="N26" ownerName="Maxence Bouret" />
      <CreditCard color="white" r={221} g={187} b={85} logo="https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/visa.png" cardNumber='6984' expireDate="Expires 03/21" bankName="Bank Name" ownerName="Maxence Bouret" />
      </div>

      <h2>Rating</h2>
      <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

      <h2>DriverCard</h2>
      <DriverCard
          color="white" r={66} g={92} b={187}
          driverName="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }} />
      <DriverCard
          color="white" r={66} g={92} b={187}
          driverName="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }} />




      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </div>
  );
}

export default App;
