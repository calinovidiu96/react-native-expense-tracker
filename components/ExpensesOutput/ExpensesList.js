import { FlatList, StyleSheet } from 'react-native';
import ExpenseItem from './ExpenseItem';

function renderExpenseItem(itemData) {
	return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }) {
	return (
		<FlatList
			style={styles.container}
			data={expenses}
			renderItem={renderExpenseItem}
			keyExtractor={(item) => item.id}
			showsVerticalScrollIndicator={false}
			showsHorizontalScrollIndicator={false}
		/>
	);
}

export default ExpensesList;

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
	},
});
