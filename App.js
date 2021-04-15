/// Importando o react
import React from "react";
/// Importando as Rotas para a navegação react-navigation
import Routes from "./src/routes/StackNavigation";
import { 
	Text,
	View,
	ScrollView,
 } from 'react-native'


import Cuidados from './src/pages/Home/Cuidados/index';

export default function App() {

	return (
	<View>
		
		{/* Tela de Cuidados */}
		<ScrollView>
			<Cuidados />
		</ScrollView>
		

		{/* //Retornando as rotas */}
		<Routes />
	</View>
	);
}