import styled from 'styled-components';

export const Section = styled.section`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

.flex{
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;

}
`;

export const LogoContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;

justify-content: center;
margin-top: 2vw;

h1{
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: normal;
font-size:   228%;

color: #FFF;
display: flex;
align-items: center;
justify-content: center;
margin-top: 2vw;
}

h2{
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 30px;
font-weight: normal;
margin-left: 12px;

color: #FFF;
display: flex;
flex-wrap: nowrap;
align-items: center;
justify-content: left;
margin-top: 1vw;
margin-bottom: 1vw;
}

img{
width:23%;
}

#pokeball{
width: 35px;
}

div{
width: auto;
padding: 10px;
}


`;

export const Form = styled.form`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: auto;

input{
font-size: 30px;
border: none;
padding: 15px;
width: 600px;

&::placeholder{
color: black;
 }
}


svg{
color: red;
font-size: 30px;
padding: 17px;

background-color: white;
}

div{
margin-top: 4vw;
}

`;

export const ButtonsContent = styled.div`

height: auto;
border-top: 1px solid #236aa9;
border-bottom: 1px solid #236aa9;
padding-left: 10px;

margin-right:35px;
margin-left: 35px;

display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;


.normal{
    color:black;
    background-color: white;
}

.fighting{
    background-color: #b64d19;
}


.flying{
    background-color: #277ba1;
}

.poison{
    background-color: #823ec3;
}

.ground{
    background-color: #8a8331;
}

.rock{
    background-color: #715c3d;
}

.bug{
    background-color: #2f9651;
}

.ghost{
    background-color: #83417a;
}
.stell{
    background-color: #6c6c6c;
}

.fire{
    background-color: #a8282b;
}

.water{
    background-color: #145eab;
}

.grass{
    background-color: #7d8545;
}
.electric{
    background-color: #ba9a22;
}

.psychic{
    background-color: #452a8d;
}

.ice{
    background-color: #659dba;
}

.dragon{
    background-color: #d57931;
}

.dark{
    background-color: #232424;
}

.fairy{
    background-color: #ba65a0;
}

.shadow{
    background-color: #414141;
}

.unknown{
    background-color: #9a9a9a;
}
`;


export const TypeButton = styled.button`
color:white;
width: 125px;
height: 50px;
border: none;
text-align: center;

margin-left: 20px;
margin-top: 20px;
margin-bottom: 10px;


border-radius: 30px;
font-size: 20px;
font-weight: bolder;

`;

export const CardsContent = styled.div`

div{
display: inline-flex;
margin-left: 100px;
margin-top: 30px;
margin-bottom: 15px;
}

.Normal{
    color:black;
    background-color: white;
}

.Fighting{
    background-color: #b64d19;
}


.Flying{
    background-color: #277ba1;
}

.Poison{
    background-color: #823ec3;
}

.Ground{
    background-color: #8a8331;
}

.Rock{
    background-color: #715c3d;
}

.Bug{
    background-color: #2f9651;
}

.Ghost{
    background-color: #83417a;
}
.Stell{
    background-color: #6c6c6c;
}

.Fire{
    background-color: #a8282b;
}

.Water{
    background-color: #145eab;
}

.Grass{
    background-color: #7d8545;
}
.Electric{
    background-color: #ba9a22;
}

.Psychic{
    background-color: #452a8d;
}

.Ice{
    background-color: #659dba;
}

.Dragon{
    background-color: #d57931;
}

.Dark{
    background-color: #232424;
}

.Fairy{
    background-color: #ba65a0;
}

.Shadow{
    background-color: #414141;
}

.Unknown{
    background-color: #9a9a9a;
}
`;

export const Cards = styled.div`
color: white;
border-radius: 25px;
width: 200px;
height: 200px;
padding: 5px;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h2{

font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: bolder;
font-size: 17px;
}

h3{
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 10px;
font-weight: lighter;
}

`;


