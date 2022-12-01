import styled from 'styled-components';
// import url('https://fonts.googleapis.com/css?family=Cairo');

export const Styled = styled.div`
body {
	background-color: #010;
	background: rgb(0,0,0);
	background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(9,9,121,1) 100%);
}

.title {
	text-align: center;
	color: #FFF;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	letter-spacing: 1px;
	line-height:2
}

h1 {
	background-image: url(https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif);
	color: transparent;
	-moz-background-clip: text;
	-webkit-background-clip: text;
	background-clip: text;
	text-transform: capitalize;
	font-size: 120px;
	margin: 10px 0;
}
/* styling my button */



/* styling my button */

.white-mode {
  text-decoration: none;
  padding: 7px 10px;
  background-color: #122;
  border-radius: 3px;
  color: #FFF;
  transition: .35s ease-in-out;
  position: absolute;
  left: 15px;
  bottom: 15px;
  font-family: "Montserrat";
}

.white-mode:hover {
  background-color: #FFF;
  color: #122;
}
`;