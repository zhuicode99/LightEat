SELECT customers.name as customer_name, foods.name as item, ordered_foods.food_count as quantity, foods.price
FROM ordered_foods
JOIN foods ON foods.id = food_id
JOIN customers ON customers.id = customer_id
JOIN orders ON orders.id = order_id
WHERE customers.id = 1 AND order_id = 1;



/* SELECT SUM(foods.price * ordered_foods.food_count) as total
FROM ordered_foods
JOIN foods ON foods.id = food_id
JOIN customers ON customers.id = customer_id
JOIN orders ON orders.id = order_id
WHERE customers.id = 1 AND order_id = 6;
 */ 
